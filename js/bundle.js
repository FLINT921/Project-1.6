!function(e){var n={};function t(l){if(n[l])return n[l].exports;var o=n[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,l){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:l})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(t.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(l,o,function(n){return e[n]}.bind(null,o));return l},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){e.exports=t(1)},function(e,n,t){"use strict";t.r(n);t(2),t(3)},function(e,n,t){},function(e,n){var t=window.innerWidth;if(window.innerWidth<768)new Swiper(".wrapper-slider",{watchOverflow:!0,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{320:{slidesPerView:"auto"}}});var l=document.querySelectorAll(".swiper-slide_none-1"),o=document.querySelectorAll(".swiper-slide_none-2"),i=document.querySelectorAll(".swiper2-slide_none-1"),r=document.querySelectorAll(".swiper2-slide_none-2"),c=document.getElementById("button1");c.addEventListener("click",(function(){s(c)}));var d=document.getElementById("button2");function s(e){if(t>=1120)var n="button1"===e.id?o:r;else n="button1"===e.id?l:i;e.classList.contains("expanded")?(e.classList.remove("expanded"),e.innerText="Показать всё",n.forEach((function(e){e.style.display="none"}))):(e.classList.add("expanded"),e.innerText="Скрыть",n.forEach((function(e){e.style.display="flex"})))}d.addEventListener("click",(function(){s(d)}));var u=document.querySelector(".fogofwar"),a=document.getElementById("open-burger"),y=document.getElementById("close-burger"),p=document.querySelector(".burger");a.addEventListener("click",(function(){p.style.display="block",u.style.display="block"})),y.addEventListener("click",(function(){p.style.display="none",u.style.display="none"}));var f=document.getElementById("repair"),b=document.getElementById("close-feedback"),m=document.getElementById("heckstatus"),v=document.getElementById("close-call"),k=document.querySelector(".page-content__right-block"),g=document.querySelector(".feedback"),E=document.querySelector(".call");f.addEventListener("click",(function(){k.style.display="block",g.style.display="block",u.style.display="block"})),b.addEventListener("click",(function(){k.style.display="none",g.style.display="none",u.style.display="none"})),m.addEventListener("click",(function(){k.style.display="block",E.style.display="block",u.style.display="block"})),v.addEventListener("click",(function(){k.style.display="none",E.style.display="none",u.style.display="none"})),u.addEventListener("click",(function(){p.style.display="none",k.style.display="none",E.style.display="none",g.style.display="none",u.style.display="none"}))}]);
//# sourceMappingURL=bundle.js.map