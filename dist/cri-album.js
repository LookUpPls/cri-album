!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("CriAlbum",[],e):"object"==typeof exports?exports.CriAlbum=e():t.CriAlbum=e()}(this,function(){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.i=function(t){return t},i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=8)}([function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=function(t,e){var i=t[1]||"",n=t[3];if(!n)return i;if(e&&"function"==typeof btoa){var o=(s=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),r=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[i].concat(r).concat([o]).join("\n")}var s;return[i].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(n[r]=!0)}for(o=0;o<t.length;o++){var s=t[o];"number"==typeof s[0]&&n[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),e.push(s))}},e}},function(t,e){t.exports=function(t,e,i,n,o){var r,s=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(r=t,s=t.default);var c,u="function"==typeof s?s.options:s;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),n&&(u._scopeId=n),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):i&&(c=i),c){var h=u.functional,l=h?u.render:u.beforeCreate;h?u.render=function(t,e){return c.call(e),l(t,e)}:u.beforeCreate=l?[].concat(l,c):[c]}return{esModule:r,exports:s,options:u}}},function(t,e,i){var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=i(19),r={},s=n&&(document.head||document.getElementsByTagName("head")[0]),a=null,c=0,u=!1,h=function(){},l=null,d="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(t){for(var e=0;e<t.length;e++){var i=t[e],n=r[i.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](i.parts[o]);for(;o<i.parts.length;o++)n.parts.push(m(i.parts[o]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{var s=[];for(o=0;o<i.parts.length;o++)s.push(m(i.parts[o]));r[i.id]={id:i.id,refs:1,parts:s}}}}function g(){var t=document.createElement("style");return t.type="text/css",s.appendChild(t),t}function m(t){var e,i,n=document.querySelector("style["+d+'~="'+t.id+'"]');if(n){if(u)return h;n.parentNode.removeChild(n)}if(p){var o=c++;n=a||(a=g()),e=x.bind(null,n,o,!1),i=x.bind(null,n,o,!0)}else n=g(),e=function(t,e){var i=e.css,n=e.media,o=e.sourceMap;n&&t.setAttribute("media",n);l.ssrId&&t.setAttribute(d,e.id);o&&(i+="\n/*# sourceURL="+o.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}.bind(null,n),i=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}t.exports=function(t,e,i,n){u=i,l=n||{};var s=o(t,e);return f(s),function(e){for(var i=[],n=0;n<s.length;n++){var a=s[n];(c=r[a.id]).refs--,i.push(c)}e?f(s=o(t,e)):s=[];for(n=0;n<i.length;n++){var c;if(0===(c=i[n]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete r[c.id]}}}};var v,b=(v=[],function(t,e){return v[t]=e,v.filter(Boolean).join("\n")});function x(t,e,i,n){var o=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=b(e,o);else{var r=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}},function(t,e,i){var n=!1;var o=i(1)(i(6),i(15),function(t){n||i(18)},"data-v-6cdd2020",null);o.options.__file="C:\\Users\\ljj\\Documents\\WorkSpace\\MY\\cri-album\\src\\cri-album.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] cri-album.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},function(t,e,i){var n=!1;var o=i(1)(i(7),i(13),function(t){n||i(16)},"data-v-28bce4e5",null);o.options.__file="C:\\Users\\ljj\\Documents\\WorkSpace\\MY\\cri-album\\src\\crimson-album.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] crimson-album.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"littleImg",props:{name:String,src:String,blockWidth:[Number,String],blockHeight:[Number,String],maxHeight:[Number,String]},data:function(){return{oW:0,oH:0,width:null,height:null,objectFit:"cover",coverLength:null,style:{gridRow:"span 1",gridColumn:"span 1"},backgroundPosition:"center",WBTH:null}},watch:{maxHeight:function(t,e){this.getImgNaturalDimensions(),this.computeSize()},blockWidth:function(t,e){this.computeSize()},blockHeight:function(t,e){this.computeSize()}},computed:{standRate:function(){return this.blockWidth/this.blockHeight}},mounted:function(){this.getImgNaturalDimensions(),this.computeSize()},methods:{mouseEnter:function(){this.computeCoverLength(),this.objectFit="contain"},mouseLeave:function(){this.objectFit="cover",this.backgroundPosition="center"},mouseMove:function(t){if(this.WBTH){var e=t.offsetX/this.width*-2;this.backgroundPosition=this.coverLength*e+"px center"}else{var i=t.offsetY/this.height*-2;this.backgroundPosition="center "+this.coverLength*i+"px"}this.objectFit="cover"},getImgNaturalDimensions:function(){var t=this.$refs.image;if(t.naturalWidth)this.oW=t.naturalWidth,this.oH=t.naturalHeight;else{var e=new Image,i=this;e.onload=function(){i.oW=e.width,i.oH=e.height,i.computeSize()},e.src=this.src}},computeSize:function(){var t=this.oW,e=this.oH,i=t/e,n=t/this.blockWidth,o=e/this.blockHeight,r=void 0;n>=o?(this.WBTH=!0,r=Math.round(n/o)):(this.WBTH=!1,r=Math.round(o/n));for(var s=[1,2,3,4,5],a=Number.MAX_VALUE,c=Number.MAX_VALUE,u=0;u<s.length;u++){var h=r*s[u];(h=Math.abs(Math.round(h)-h))<c&&(c=h,a=s[u])}r=Math.round(r*a);var l=void 0;l=this.WBTH?{rate:r/a,x:r,y:a}:{rate:a/r,x:a,y:r},this.height=this.blockHeight*l.y,this.width=this.blockWidth*l.x,i<l.rate?this.width/t<.4&&(this.height*=2,this.width*=2):this.height/e<.4&&(this.height*=2,this.width*=2),this.style.gridColumn="span "+parseInt(this.width/this.blockWidth),this.style.gridRow="span "+parseInt(this.height/this.blockHeight)},computeCoverLength:function(){var t=this.$refs.image;this.width=t.clientWidth,this.height=t.clientHeight,this.oW/this.width>this.oH/this.height?(this.WBTH=!0,this.coverLength=(this.oW*this.height/this.oH-this.width)/2):(this.WBTH=!1,this.coverLength=(this.oH*this.width/this.oW-this.height)/2)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=i(12),r=(n=o)&&n.__esModule?n:{default:n};e.default={props:{pictures:{type:Array,default:[]},maxHeight:{type:Number,default:499}},data:function(){return{width:0,gridSize:38,testMockVal:"test",picData:{},gridStyle:{},blockSize:212,PBlockWidth:0,picturesIndex:{}}},components:{littleImg:r.default},computed:{blockWidth:function(){var t=Math.floor(this.width/Math.round(this.width/this.blockSize));return console.log("block size:"+t),console.log("block size remain:"+this.width%t+"  grid size total remain: "),t},blockHeight:function(){return Math.round(.8*this.blockWidth)}},mounted:function(){var t=this;window.onresize=function(){t.width=t.$refs.images.clientWidth},setTimeout(function(){t.width=t.$refs.images.clientWidth},200),this.$nextTick(function(){t.width=t.$refs.images.clientWidth})},created:function(){for(var t in this.pictures)this.pictures[t].height="100px",this.pictures[t].oHeight=null,this.pictures[t].oWidth=null,this.pictures[t].resolved=!1,this.pictures[t].index=parseInt(t),this.picturesIndex[this.pictures[t].name]=this.pictures[t];console.log("params got"),console.log(this.pictures)},methods:{resize:function(t){console.log("resize"),console.log(t)}}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{pictures:{type:Array,default:[]},maxHeight:{type:Number,default:499}},data:function(){return{gridSize:28,folderData:{},picData:{},picturesIndex:{},gridStyle:{},loadedImageCount:0,rows:[],exchanged:{}}},watch:{loadedImageCount:function(t,e){this.allImageCount===t&&this.locationImages()},maxHeight:function(t,e){this.locationImages()}},computed:{allImageCount:function(){return this.pictures.length}},created:function(){for(var t in this.pictures)this.pictures[t].height="100px",this.pictures[t].oHeight=null,this.pictures[t].oWidth=null,this.pictures[t].resolved=!1,this.pictures[t].index=parseInt(t),this.picturesIndex[this.pictures[t].name]=this.pictures[t];console.log("params got"),console.log(this.pictures)},methods:{quality:function(){var t="",e=0;for(var i in this.pictures)t+="|"+this.pictures[i].scaling.toFixed(1),e+=Math.abs(1-this.pictures[i].scaling);console.log(e.toFixed(2)+"|"+t)},computeRowHeight:function(t,e){var i=this.$refs.images.clientWidth,n=this.rows[t];if(!e){for(var o=0,r=0;r<n.length;r++){var s=this.pictures[n[r]];s.aspectRatio||(s.aspectRatio=s.oWidth/s.oHeight),o+=s.aspectRatio}e=i/o}for(var a=0;a<n.length;a++){var c=n[a];this.pictures[c].height=e+"px",this.pictures[c].row=t,this.pictures[c].scaling=e/this.pictures[c].oHeight,this.$set(this.pictures,c,this.pictures[c])}},locationImages:function(){console.log("location"),this.exchanged={};var t=[],e=this.$refs.images.clientWidth,i=0,n=void 0;for(var o in this.pictures){var r=this.pictures[o];r.aspectRatio||(r.aspectRatio=r.oWidth/r.oHeight),i+=r.aspectRatio,t.push(o),(n=e/i)<this.maxHeight&&(this.rows.push(t),this.computeRowHeight(this.rows.length-1,n),i=0,t=[])}t.length>0&&(i*this.maxHeight/e<.7&&(n=this.maxHeight),this.rows.push(t),this.computeRowHeight(this.rows.length-1,n));var s=void 0;do{for(var a in s=!1,this.pictures){var c=this.pictures[a];if(c.scaling>2){c;var u=1,h=void 0,l=void 0,d=!0;do{d&&(h=!0,l=!0);var p=void 0;if(p=d?parseInt(a)-u:parseInt(a)+u,d&&p>0||!d&&p<this.pictures.length){var f=this.pictures[p];if(f.row!==c.row&&parseInt(c.height)/parseInt(f.height)>1.2&&Math.abs(f.aspectRatio-c.aspectRatio)>.1&&f.scaling<.8&&!this.exchanged[c.name+"_"+f.name]){this.exchangeLocation(c,f),this.exchanged[c.name+"_"+f.name]=!0,s=!0;break}d?h=!1:l=!1}u++,d=!d}while(!h||!l);if(s)break}}}while(s);this.quality()},exchangeLocation:function(t,e){console.log(t.name+" <---\x3e "+e.name);var i=t.index,n=e.index,o=this.pictures[i];this.pictures[i]=this.pictures[n],this.pictures[n]=o,o=this.pictures[i].index,this.pictures[i].index=this.pictures[n].index,this.pictures[n].index=o;var r=this.pictures[n].row;this.computeRowHeight(this.pictures[i].row),this.computeRowHeight(r)},loadOnePic:function(t){this.loadedImageCount++;var e=this.$refs[t],i=this.picturesIndex[t];if(e[0].naturalWidth)i.oWidth=e[0].naturalWidth,i.oHeight=e[0].naturalHeight;else{var n=new Image;n.onload=function(t){i.oWidth=t.target.width,i.oHeight=t.target.height},n.src=e[0].src}}}}},function(t,e,i){"use strict";var n=i(4),o=i(3),r={criAlbum:o,crimsonAlbum:n,install:function(t){t.component("cri-album",o),t.component("crimson-album",n)}};t.exports=r},function(t,e,i){(t.exports=i(0)(!1)).push([t.i,"\n.images[data-v-28bce4e5] {\n  margin: 10px;\n  grid-auto-flow: row dense;\n  background-color: #000;\n  grid-gap: 3px;\n}\n.images > img[data-v-28bce4e5] {\n  object-fit: cover;\n}\n",""])},function(t,e,i){(t.exports=i(0)(!1)).push([t.i,"\n.img-wrapper-out[data-v-2b059900] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.img-wrapper-out > .img-wrapper[data-v-2b059900] {\n  position: absolute;\n  right: 4px;\n  left: 4px;\n  bottom: 4px;\n  top: 4px;\n  border-radius: 2px;\n  box-shadow: 0 6px 13px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);\n}\n.img-wrapper-out > .img-wrapper > .img[data-v-2b059900] {\n  width: 100%;\n  height: 100%;\n  background-repeat: no-repeat;\n}\n",""])},function(t,e,i){(t.exports=i(0)(!1)).push([t.i,"\n.images[data-v-6cdd2020] {\n  display: grid;\n  margin: 10px;\n  grid-auto-flow: row dense;\n/*background-color black*/\n  grid-gap: 0px;\n/*overflow hidden*/\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n",""])},function(t,e,i){var n=!1;var o=i(1)(i(5),i(14),function(t){n||i(17)},"data-v-2b059900",null);o.options.__file="C:\\Users\\ljj\\Documents\\WorkSpace\\MY\\cri-album\\src\\components\\littleImg.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] littleImg.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("div",{ref:"images",staticClass:"images"},t._l(t.pictures,function(e){return i("img",{ref:e.name,refInFor:!0,attrs:{src:e.src,height:e.height,id:e.name},on:{load:function(i){return t.loadOnePic(e.name)}}})}),0)])},staticRenderFns:[]},t.exports.render._withStripped=!0},function(t,e,i){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{style:this.style},[e("div",{staticClass:"img-wrapper-out"},[e("div",{staticClass:"img-wrapper"},[e("div",{ref:"image",staticClass:"img",style:{backgroundPosition:this.backgroundPosition,backgroundSize:this.objectFit,backgroundImage:"url("+this.src+")"},on:{mouseenter:this.mouseEnter,mouseleave:this.mouseLeave,mousemove:this.mouseMove}})])])])},staticRenderFns:[]},t.exports.render._withStripped=!0},function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("div",{ref:"images",staticClass:"images",style:{"grid-auto-rows":t.blockHeight+"px","grid-template-columns":"repeat(auto-fill,"+t.blockWidth+"px)"},on:{resize:t.resize}},t._l(t.pictures,function(e){return i("littleImg",{attrs:{blockHeight:t.blockHeight,blockWidth:t.blockWidth,maxHeight:t.maxHeight,src:e.src,name:"pic.name"}})}),1)])},staticRenderFns:[]},t.exports.render._withStripped=!0},function(t,e,i){var n=i(9);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(2)("f3ba322c",n,!1,{})},function(t,e,i){var n=i(10);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(2)("6bc9c33a",n,!1,{})},function(t,e,i){var n=i(11);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(2)("d02abce6",n,!1,{})},function(t,e){t.exports=function(t,e){for(var i=[],n={},o=0;o<e.length;o++){var r=e[o],s=r[0],a={id:t+":"+o,css:r[1],media:r[2],sourceMap:r[3]};n[s]?n[s].parts.push(a):i.push(n[s]={id:s,parts:[a]})}return i}}])});