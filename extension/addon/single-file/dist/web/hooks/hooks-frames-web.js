!function(){"use strict";(e=>{const t="single-file-lazy-load",n="single-file-load-image",i="single-file-image-loaded",o="single-file-new-font-face",r={family:"font-family",style:"font-style",weight:"font-weight",stretch:"font-stretch",unicodeRange:"unicode-range",variant:"font-variant",featureSettings:"font-feature-settings"},l=(t,n,i)=>e.addEventListener(t,n,i),s=t=>e.dispatchEvent(t),c=e.CustomEvent,d=e.document,g=e.screen,a=e.Element,m=e.UIEvent,_=e.FileReader,f=e.Blob,u=e.console,y=u&&u.warn&&((...e)=>u.warn(...e))||(()=>{}),h=new Map,p=new Map;function F(o){const r=d.scrollingElement||d.documentElement,l=r.clientHeight,_=r.clientWidth,f=Math.max(r.scrollHeight-l,l),u=Math.max(r.scrollWidth-_,_);if(d.querySelectorAll("[loading=lazy]").forEach((e=>{e.loading="eager",e.setAttribute(t,"")})),r.__defineGetter__("clientHeight",(()=>f)),r.__defineGetter__("clientWidth",(()=>u)),g.__defineGetter__("height",(()=>f)),g.__defineGetter__("width",(()=>u)),e._singleFile_innerHeight=e.innerHeight,e._singleFile_innerWidth=e.innerWidth,e.__defineGetter__("innerHeight",(()=>f)),e.__defineGetter__("innerWidth",(()=>u)),o||e._singleFile_getBoundingClientRect||(e._singleFile_getBoundingClientRect=a.prototype.getBoundingClientRect,a.prototype.getBoundingClientRect=function(){const t=e._singleFile_getBoundingClientRect.call(this);return this==r&&(t.__defineGetter__("height",(()=>f)),t.__defineGetter__("bottom",(()=>f+t.top)),t.__defineGetter__("width",(()=>u)),t.__defineGetter__("right",(()=>u+t.left))),t}),!e._singleFileImage){const t=e.Image;e._singleFileImage=e.Image,e.__defineGetter__("Image",(function(){return function(){const e=new t(...arguments),o=new t(...arguments);return o.__defineSetter__("src",(function(t){e.src=t,s(new c(n,{detail:e.src}))})),o.__defineGetter__("src",(function(){return e.src})),o.__defineSetter__("srcset",(function(t){s(new c(n)),e.srcset=t})),o.__defineGetter__("srcset",(function(){return e.srcset})),e.onload=e.onloadend=e.onerror=t=>{s(new c(i,{detail:e.src})),o.dispatchEvent(new m(t.type,t))},e.decode&&(o.decode=()=>e.decode()),o}}))}let y,F;o?(y=l/f,F=_/u):(y=(l+e.scrollY)/f,F=(_+e.scrollX)/u);const E=Math.min(y,F);if(E<1){const e=d.documentElement.style.getPropertyValue("transform"),t=d.documentElement.style.getPropertyPriority("transform"),n=d.documentElement.style.getPropertyValue("transform-origin"),i=d.documentElement.style.getPropertyPriority("transform-origin"),r=d.documentElement.style.getPropertyValue("min-height"),l=d.documentElement.style.getPropertyPriority("min-height");d.documentElement.style.setProperty("transform-origin",(y<1?"50%":"0")+" "+(F<1?"50%":"0")+" 0","important"),d.documentElement.style.setProperty("transform","scale3d("+E+", "+E+", 1)","important"),d.documentElement.style.setProperty("min-height",100/E+"vh","important"),P(),o?(d.documentElement.style.setProperty("-sf-transform",e,t),d.documentElement.style.setProperty("-sf-transform-origin",n,i),d.documentElement.style.setProperty("-sf-min-height",r,l)):(d.documentElement.style.setProperty("transform",e,t),d.documentElement.style.setProperty("transform-origin",n,i),d.documentElement.style.setProperty("min-height",r,l))}if(!o){P();const e=r.getBoundingClientRect();[...h].forEach((([t,n])=>{const i=n.options&&n.options.root&&n.options.root.getBoundingClientRect,o=i&&n.options.root.getBoundingClientRect(),r=p.get(t);r&&n.callback(r.map((t=>{const n=t.getBoundingClientRect();return{target:t,intersectionRatio:1,boundingClientRect:n,intersectionRect:n,isIntersecting:!0,rootBounds:i?o:e,time:0}})),t)}))}}function E(n){d.querySelectorAll("[single-file-lazy-load]").forEach((e=>{e.loading="lazy",e.removeAttribute(t)})),n||e._singleFile_getBoundingClientRect&&(a.prototype.getBoundingClientRect=e._singleFile_getBoundingClientRect,delete e._singleFile_getBoundingClientRect),e._singleFileImage&&(delete e.Image,e.Image=e._singleFileImage,delete e._singleFileImage),n||P()}function b(){const t=d.scrollingElement||d.documentElement;null!=e._singleFile_innerHeight&&(e.innerHeight=e._singleFile_innerHeight,delete e._singleFile_innerHeight),null!=e._singleFile_innerWidth&&(e.innerWidth=e._singleFile_innerWidth,delete e._singleFile_innerWidth),delete t.clientHeight,delete t.clientWidth,delete g.height,delete g.width}if(l("single-file-load-deferred-images-start",(()=>F())),l("single-file-load-deferred-images-keep-zoom-level-start",(()=>F(!0))),l("single-file-load-deferred-images-end",(()=>E())),l("single-file-load-deferred-images-keep-zoom-level-end",(()=>E(!0))),l("single-file-load-deferred-images-reset",b),l("single-file-load-deferred-images-keep-zoom-level-reset",(()=>{const e=d.documentElement.style.getPropertyValue("-sf-transform"),t=d.documentElement.style.getPropertyPriority("-sf-transform"),n=d.documentElement.style.getPropertyValue("-sf-transform-origin"),i=d.documentElement.style.getPropertyPriority("-sf-transform-origin"),o=d.documentElement.style.getPropertyValue("-sf-min-height"),r=d.documentElement.style.getPropertyPriority("-sf-min-height");d.documentElement.style.setProperty("transform",e,t),d.documentElement.style.setProperty("transform-origin",n,i),d.documentElement.style.setProperty("min-height",o,r),d.documentElement.style.removeProperty("-sf-transform"),d.documentElement.style.removeProperty("-sf-transform-origin"),d.documentElement.style.removeProperty("-sf-min-height"),b()})),l("single-file-block-cookies-start",(()=>{try{d.__defineGetter__("cookie",(()=>{throw new Error("document.cookie temporary blocked by SingleFile")}))}catch(e){}})),l("single-file-block-cookies-end",(()=>{delete d.cookie})),l("single-file-block-storage-start",(()=>{e._singleFile_localStorage||(e._singleFile_localStorage=e.localStorage,e.__defineGetter__("localStorage",(()=>{throw new Error("localStorage temporary blocked by SingleFile")}))),e._singleFile_indexedDB||(e._singleFile_indexedDB=e.indexedDB,e.__defineGetter__("indexedDB",(()=>{throw new Error("indexedDB temporary blocked by SingleFile")})))})),l("single-file-block-storage-end",(()=>{e._singleFile_localStorage&&(delete e.localStorage,e.localStorage=e._singleFile_localStorage,delete e._singleFile_localStorage),e._singleFile_indexedDB||(delete e.indexedDB,e.indexedDB=e._singleFile_indexedDB,delete e._singleFile_indexedDB)})),e.FontFace){const t=e.FontFace;let n;e.FontFace=function(){n||(y("SingleFile is hooking the FontFace constructor to get font URLs."),n=!0);const e={};e["font-family"]=arguments[0],e.src=arguments[1];const i=arguments[2];if(i&&Object.keys(i).forEach((t=>{r[t]&&(e[r[t]]=i[t])})),e.src instanceof ArrayBuffer){const t=new _;t.readAsDataURL(new f([e.src])),t.addEventListener("load",(()=>{e.src="url("+t.result+")",s(new c(o,{detail:e}))}))}else s(new c(o,{detail:e}));return new t(...arguments)},e.FontFace.toString=function(){return"function FontFace() { [native code] }"}}if(e.IntersectionObserver){const t=e.IntersectionObserver;let n;e.IntersectionObserver=function(){n||(y("SingleFile is hooking the IntersectionObserver API to detect and load deferred images."),n=!0);const e=new t(...arguments),i=t.prototype.observe||e.observe,o=t.prototype.unobserve||e.unobserve,r=arguments[0],l=arguments[1];return i&&(e.observe=function(t){let n=p.get(e);return n||(n=[],p.set(e,n)),n.push(t),i.call(e,t)}),o&&(e.unobserve=function(t){let n=p.get(e);return n&&(n=n.filter((e=>e!=t)),n.length?p.set(e,n):(p.delete(e),h.delete(e))),o.call(e,t)}),h.set(e,{callback:r,options:l}),e},e.IntersectionObserver.prototype=t.prototype,e.IntersectionObserver.toString=function(){return"function IntersectionObserver() { [native code] }"}}function P(){try{s(new m("resize"))}catch(e){}}})("object"==typeof globalThis?globalThis:window)}();
