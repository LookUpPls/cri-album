<template>
  <div :style="style">
    <div class="img-wrapper-out">
      <div class="img-wrapper" ref="imageWrapper" @mouseenter="mouseEnter" @mouseleave="mouseLeave"
           @mousemove="mouseMove">
        <div class="loading-body" :style="{ display: loading }">
          <!--        <div class="loading-body">-->
        </div>
        <img :src="pic.src" :ref="pic.name" @load="getImgNaturalDimensions"
             :style="{width:styleImg.width,height:styleImg.height,transform:styleImg.transform}"
             class="img" alt="不支持的类型">
        <div class="img-slot">
          <slot :index="index" :item="pic"></slot>
        </div>
        <div v-if="showDebugInfo" class="img-slot">
          <div>
            <span class="debug" title="index">{{ index }}</span>
            <span class="debug" title="表示图片是宽的还是高的">{{ WBTH ? '--' : '|' }}</span>
            <span class="debug" title="隐藏率">{{ hiddenPercent }}%</span>
          </div>
          <div>
            <span class="debug" title="缩放率">{{ scalePercent }}%</span>
            <span class="debug" title="原始宽高">{{ oW }} * {{ oH }}</span>
          </div>
          <div>
            <span class="debug" title="显示的宽高">{{ width?.toFixed(0) }} * {{ height?.toFixed(0) }}</span>
          </div>
          <div>
            <span class="debug" title="grid的column数">{{ style.gridColumn }}</span>
            <span class="debug" title="grid的row数">{{ style.gridRow }}</span>
          </div>
          <div>
            <span class="debug" title="被隐藏的长度">{{ coverLength?.toFixed(0) }}px</span>
            <span class="debug">{{ styleImg.transform }}</span>
          </div>
          <!--          <div>-->
          <!--            <span class="debug">{{ styleImg.width }}</span>-->
          <!--            <span class="debug">{{ styleImg.height }}</span>-->
          <!--          </div>-->
          <div>
            <span class="debug" title="图片名字">{{ props.pic.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, reactive, watch, onMounted, nextTick, defineProps, toRefs, computed} from 'vue';
import type {Picture, RadioState} from "@/types";
import {useImgStore} from "@/stores/imgStore";
import {binarySearch} from "@/lib/binarySearch";

const props = defineProps({
  pic: {
    type: Object as () => Picture,
    default: () => ({}),
    required: true
  },
  index: Number,
  blockWidth: Number,
  blockHeight: Number,
  columnCount: Number,
  maxHeight: Number,
  radio: Object as () => RadioState,
  showDebugInfo: Boolean
});
const store = useImgStore();

const {pic, blockWidth, blockHeight, maxHeight} = toRefs(props);

const oW = ref(0);
const oH = ref(0);
const width = ref(null); //显示出的宽度
const height = ref(null); // 显示出的高度
const WBTH = ref(true);
const hiddenPercent = ref(0); // 图片被隐藏了百分之多少
const scalePercent = ref(0); // 图片被缩放了百分之多少
const coverLength = ref(null);
const maxCountOfShortEdgeH = computed(() => Math.max(Math.floor((maxHeight.value / blockHeight.value)), 1));
const maxCountOfShortEdgeW = computed(() => Math.max(Math.floor((maxHeight.value / blockWidth.value)), 1));
const style = reactive({
  gridRow: "span 1",
  gridColumn: "span 1"
});
const styleImg = reactive({
  width: "100%",
  height: "100%",
  transform: null,
  WBTH: 1
});
const loading = ref("block");
const imageWrapper = ref();

watch([maxHeight], () => {
  computeSize();
});

watch(pic, (newPic, oldPic) => {
  if (newPic.src !== oldPic.src) {
    loading.value = "block";
    getImgNaturalDimensions();
  }
}, {deep: true});

watch([blockWidth, blockHeight], () => {
  computeSize();
});

onMounted(() => {
  getImgNaturalDimensions();
  computeSize();
});

function mouseEnter() {
  computeCoverLength();
}

function mouseLeave() {
}

function mouseMove(e) {
  if (!width.value || !height.value) return;
  if (WBTH.value) {
    let rate = (e.offsetX * 2 - width.value / 2) / width.value * -2;
    if (rate > 0) rate = 0;
    if (rate < -2) rate = -2;
    styleImg.transform = `translateX(${coverLength.value * rate}px)`
  } else {
    let rate = (e.offsetY * 2 - height.value / 2) / height.value * -2;
    if (rate > 0) rate = 0;
    if (rate < -2) rate = -2;
    styleImg.transform = `translateY(${coverLength.value * rate}px)`;
  }
}

function getImgNaturalDimensions() {
  const imageElement = imageWrapper.value.querySelector(`img[src="${pic.value.src}"]`) as HTMLImageElement;
  if (imageElement.complete && imageElement.naturalWidth) {
    updateDimensions(imageElement.naturalWidth, imageElement.naturalHeight);
    loading.value = "none";
  } else {
    imageElement.onload = () => {
      updateDimensions(imageElement.naturalWidth, imageElement.naturalHeight);
      loading.value = "none";
    };
  }
}

function updateDimensions(naturalWidth: number, naturalHeight: number) {
  oW.value = naturalWidth;
  oH.value = naturalHeight;
  computeSize();
}

function findNearRadio(array: any[], currentIndex: number): [number, number] | null {
  const length = array.length;
  let distance = 1;

  while (true) {
    // 向左搜索
    for (let i = 1; currentIndex - i >= 0; i++) {
      let r = (checkRadio(props.radio?.map[array[currentIndex - i]]))
      if (r !== null) {
        return r;
      }
    }

    // 向右搜索
    for (let i = 1; currentIndex + i < length; i++) {
      let r = (checkRadio(props.radio?.map[array[currentIndex + i]]))
      if (r !== null) {
        return r;
      }
    }

    // 如果左右都没有找到合适的索引，增加搜索距离
    distance++;

    // 如果超出数组边界，返回 -1
    if (currentIndex - distance < 0 && currentIndex + distance >= length) {
      return null;
    }
  }
}

// 检查是否有合适的radio, 返回null表示没有， 否则返回合适的radio
function checkRadio(whs: [number, number][] | undefined): [number, number] | null {
  if (!whs) return null;
  for (let wh of whs) {
    if (wh[0] > props.columnCount) {
      continue
    }
    if (WBTH.value) {
      if (wh[1] > maxCountOfShortEdgeH.value) {
        continue
      }
    } else {
      if (wh[0] > maxCountOfShortEdgeW.value) {
        continue
      }
    }
    return wh
  }
  return null
}

function computeSize() {
  if (oW.value === 0) return;
  // if(props.pic.name==='1350413J8-2.jpg'){
  //   debugger
  // }
  let origin = {w: oW.value, h: oH.value}
  WBTH.value = origin.w > origin.h; // 宽比高大
  let imageRadio = origin.w / origin.h;
  if (!props.radio?.list.length) {
    console.error('radio.list is empty')
    return;
  }
  let index = binarySearch(props.radio?.list, imageRadio)
  // let wh = [[1, 1]] as [number, number][];
  let wh = null as [number, number] | null;
  if (index === -1) {
    console.error('can not find radio' + imageRadio)
  } else {
    wh = checkRadio(props.radio?.map[props.radio?.list[index]]);
    if (wh === null) {
      wh = findNearRadio(props.radio?.list, index)
      if (wh === null) {
        console.error('can not find near radio' + imageRadio)
        wh = [1, 1];
      }
    }
  }

  if (wh === null)
    wh = [1, 1];

  let blockCountOfW = wh[0]
  let blockCountOfH = wh[1]

  WBTH.value = wh[0] > wh[1]; // 宽比高大
  height.value = blockHeight.value * blockCountOfH;
  width.value = blockWidth.value * blockCountOfW;
  style.gridColumn = "span " + blockCountOfW;
  style.gridRow = "span " + blockCountOfH;
  nextTick(() => {
    computeCoverLength();
  });
  return;
}

function computeCoverLength() {
  if (!imageWrapper.value) return;
  const imgRect = imageWrapper.value.getBoundingClientRect();
  width.value = imgRect.width;
  height.value = imgRect.height;

  if (oW.value / width.value > oH.value / height.value) {
    WBTH.value = true;
    // (图片宽度（带着隐藏的部分） - 显示的宽度) / 2
    coverLength.value = ((oW.value * height.value / oH.value) - width.value) / 2;
    styleImg.width = "auto"; // 这里设置完auto之后要 等等元素的宽度才能获取到
    styleImg.height = "100%";
    // if (styleImg.transform === null)
    styleImg.transform = "translateX(-" + coverLength.value / 2 + "px)";
    // 算一下隐藏的百分比
    scalePercent.value = Math.round(height.value / oH.value * 100);
    hiddenPercent.value = Math.round(coverLength.value * 2 / (width.value + coverLength.value * 2) * 100);
  } else {
    WBTH.value = false;
    coverLength.value = ((oH.value * width.value / oW.value) - height.value) / 2;
    styleImg.width = "100%";
    styleImg.height = "auto";
    // if (styleImg.transform === null)
    styleImg.transform = "translateY(-" + coverLength.value / 2 + "px)";
    // 算一下隐藏的百分比
    scalePercent.value = Math.round(width.value / oW.value * 100);
    hiddenPercent.value = Math.round(coverLength.value * 2 / (height.value + coverLength.value * 2) * 100);
  }
  store.pushScale(props.pic.name, scalePercent.value);
  if (hiddenPercent.value == 100)
    console.error('图片没显示出来')
  store.pushHidden(props.pic.name, hiddenPercent.value);
}
</script>

<style scoped>
.img-wrapper-out {
  width: 100%;
  height: 100%;
  position: relative;
}

.img-wrapper-out > .img-wrapper {
  position: absolute;
  right: 2px;
  left: 2px;
  bottom: 2px;
  top: 2px;
  border-radius: 6px;
  overflow: hidden; /* 这里注释掉会有桌子上摆着照片的感觉， 但是左右边界要处理一下 */
}

.img-wrapper-out > .img-wrapper:hover {
  overflow: visible; /* 这里注释掉会有桌子上摆着照片的感觉， 但是左右边界要处理一下 */
  z-index: 9;
  box-shadow: 0 6px 13px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);

}

.img-wrapper-out > .img-wrapper > .img {
  transition: transform 0.15s linear;
  will-change: transform;
  position: absolute;
}

.img-wrapper-out > .img-wrapper > .img-slot {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
}

@keyframes ldio-6qlrjbwah5c {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading-body {
  background: aliceblue;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
}

.debug {
  color: red;
  font-size: 15px;
  font-weight: bold;
  font-family: "Microsoft Tai Le";
  font-style: normal;
  line-height: 32px;
  letter-spacing: 2px;
  background: rgba(255, 255, 255, 0.5);
  margin: 3px;
  padding: 3px 6px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
</style>
