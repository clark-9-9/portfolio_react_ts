"use strict";(self.webpackChunkreact_ts_portfolio=self.webpackChunkreact_ts_portfolio||[]).push([[22],{5022:function(t,e,n){n.r(e),n.d(e,{createSwipeBackGesture:function(){return a}});var r=n(1811),i=n(9507),o=n(7909),a=function(t,e,n,a,u){var c=t.ownerDocument.defaultView,f=(0,i.i)(t),s=function(t){return f?-t.deltaX:t.deltaX};return(0,o.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return function(t){var e=t.startX;return f?e>=c.innerWidth-50:e<=50}(t)&&e()},onStart:n,onMove:function(t){var e=s(t)/c.innerWidth;a(e)},onEnd:function(t){var e=s(t),n=c.innerWidth,i=e/n,o=function(t){return f?-t.velocityX:t.velocityX}(t),a=o>=0&&(o>.2||e>n/2),h=(a?1-i:i)*n,l=0;if(h>5){var d=h/Math.abs(o);l=Math.min(d,540)}u(a,i<=0?.01:(0,r.h)(0,i,.9999),l)}})}}}]);
//# sourceMappingURL=22.44c3e431.chunk.js.map