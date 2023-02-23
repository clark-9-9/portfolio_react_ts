"use strict";(self.webpackChunkreact_ts_portfolio=self.webpackChunkreact_ts_portfolio||[]).push([[186],{1186:function(e,t,n){n.r(t),n.d(t,{startInputShims:function(){return E}});var r=n(4165),o=n(5861),i=n(9344),a=n(1811),u=new WeakMap,c=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];u.has(e)!==n&&(n?d(e,t,r,o):l(e,t))},s=function(e){return e===e.getRootNode().activeElement},d=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],o=t.parentNode,i=t.cloneNode(!1);i.classList.add("cloned-input"),i.tabIndex=-1,r&&(i.disabled=!0),o.appendChild(i),u.set(e,i);var a=e.ownerDocument,c="rtl"===a.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform="translate3d(".concat(c,"px,").concat(n,"px,0) scale(0)")},l=function(e,t){var n=u.get(e);n&&(u.delete(e),n.remove()),e.style.pointerEvents="",t.style.transform=""},f=function(e,t,n){if(!n||!t)return function(){};var r=function(n){s(t)&&c(e,t,n)},o=function(){return c(e,t,!1)},i=function(){return r(!0)},u=function(){return r(!1)};return(0,a.a)(n,"ionScrollStart",i),(0,a.a)(n,"ionScrollEnd",u),t.addEventListener("blur",o),function(){(0,a.b)(n,"ionScrollStart",i),(0,a.b)(n,"ionScrollEnd",u),t.addEventListener("ionBlur",o)}},v="input, textarea, [no-blur], [contenteditable]",p=function(e,t,n){var r,o=null!==(r=e.closest("ion-item,[ion-item]"))&&void 0!==r?r:e;return m(o.getBoundingClientRect(),t.getBoundingClientRect(),n,e.ownerDocument.defaultView.innerHeight)},m=function(e,t,n,r){var o=e.top,i=e.bottom,a=t.top,u=a+15,c=.75*Math.min(t.bottom,r-n)-i,s=u-o,d=Math.round(c<0?-c:s>0?-s:0),l=Math.min(d,o-a),f=Math.abs(l)/.3;return{scrollAmount:l,scrollDuration:Math.min(400,Math.max(150,f)),scrollPadding:n,inputSafeY:4-(o-u)}},h=function(e,t,n,r,o){var i,u=arguments.length>5&&void 0!==arguments[5]&&arguments[5],c=function(e){i=(0,a.p)(e)},d=function(c){if(i){var d=(0,a.p)(c);b(6,i,d)||s(t)||w(e,t,n,r,o,u)}};return e.addEventListener("touchstart",c,{capture:!0,passive:!0}),e.addEventListener("touchend",d,!0),function(){e.removeEventListener("touchstart",c,!0),e.removeEventListener("touchend",d,!0)}},w=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t,n,u,s,d){var l,f,v,m,h,w,b,g=arguments;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=g.length>5&&void 0!==g[5]&&g[5],u||s){e.next=3;break}return e.abrupt("return");case 3:if(f=p(t,u||s,d),!(u&&Math.abs(f.scrollAmount)<4)){e.next=7;break}return n.focus(),e.abrupt("return");case 7:if(c(t,n,!0,f.inputSafeY,l),n.focus(),(0,a.r)((function(){return t.click()})),"undefined"===typeof window){e.next=23;break}if(m=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==v&&clearTimeout(v),window.removeEventListener("ionKeyboardDidShow",h),window.removeEventListener("ionKeyboardDidShow",m),!u){e.next=6;break}return e.next=6,(0,i.c)(u,0,f.scrollAmount,f.scrollDuration);case 6:c(t,n,!1,f.inputSafeY),n.focus();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=function e(){window.removeEventListener("ionKeyboardDidShow",e),window.addEventListener("ionKeyboardDidShow",m)},!u){e.next=22;break}return e.next=16,(0,i.g)(u);case 16:if(w=e.sent,b=w.scrollHeight-w.clientHeight,!(f.scrollAmount>b-w.scrollTop)){e.next=22;break}return"password"===n.type?(f.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",h)):window.addEventListener("ionKeyboardDidShow",m),v=setTimeout(m,1e3),e.abrupt("return");case 22:m();case 23:case"end":return e.stop()}}),e)})));return function(t,n,r,o,i){return e.apply(this,arguments)}}(),b=function(e,t,n){if(t&&n){var r=t.x-n.x,o=t.y-n.y;return r*r+o*o>e*e}return!1},g="$ionPaddingTimer",y=function(e,t){var n,r;if("INPUT"===e.tagName&&(!e.parentElement||"ION-INPUT"!==e.parentElement.tagName)&&"ION-SEARCHBAR"!==(null===(r=null===(n=e.parentElement)||void 0===n?void 0:n.parentElement)||void 0===r?void 0:r.tagName)){var o=(0,i.a)(e);if(null!==o){var a=o[g];a&&clearTimeout(a),t>0?o.style.setProperty("--keyboard-offset","".concat(t,"px")):o[g]=setTimeout((function(){o.style.setProperty("--keyboard-offset","0px")}),120)}}},E=function(e,t){var n=document,u="ios"===t,c="android"===t,s=e.getNumber("keyboardHeight",290),d=e.getBoolean("scrollAssist",!0),l=e.getBoolean("hideCaretOnScroll",u),p=e.getBoolean("inputBlurring",u),m=e.getBoolean("scrollPadding",!0),w=Array.from(n.querySelectorAll("ion-input, ion-textarea")),b=new WeakMap,g=new WeakMap,E=function(){var e=(0,o.Z)((0,r.Z)().mark((function e(t){var n,o,u,v,p,m;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return(0,a.c)(t,e)}));case 2:if(n=t.shadowRoot||t,o=n.querySelector("input")||n.querySelector("textarea"),u=(0,i.a)(t),v=u?null:t.closest("ion-footer"),o){e.next=8;break}return e.abrupt("return");case 8:u&&l&&!b.has(t)&&(p=f(t,o,u),b.set(t,p)),"date"===o.type||"datetime-local"===o.type||!u&&!v||!d||g.has(t)||(m=h(t,o,u,v,s,c),g.set(t,m));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();p&&function(){var e=!0,t=!1,n=document,r=function(){t=!0},o=function(){e=!0},i=function(r){if(t)t=!1;else{var o=n.activeElement;if(o&&!o.matches(v)){var i=r.target;i!==o&&(i.matches(v)||i.closest(v)||(e=!1,setTimeout((function(){e||o.blur()}),50)))}}};(0,a.a)(n,"ionScrollStart",r),n.addEventListener("focusin",o,!0),n.addEventListener("touchend",i,!1)}(),m&&function(e){var t=document,n=function(t){y(t.target,e)},r=function(e){y(e.target,0)};t.addEventListener("focusin",n),t.addEventListener("focusout",r)}(s);for(var x=0,S=w;x<S.length;x++){var k=S[x];E(k)}n.addEventListener("ionInputDidLoad",(function(e){E(e.detail)})),n.addEventListener("ionInputDidUnload",(function(e){!function(e){if(l){var t=b.get(e);t&&t(),b.delete(e)}if(d){var n=g.get(e);n&&n(),g.delete(e)}}(e.detail)}))}}}]);
//# sourceMappingURL=186.cca12324.chunk.js.map