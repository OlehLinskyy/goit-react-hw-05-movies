"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[765],{539:function(n,t,e){e.d(t,{Hg:function(){return s},IQ:function(){return d},Jh:function(){return l},TP:function(){return f},XT:function(){return p}});var r=e(861),a=e(757),c=e.n(a),u=e(243),i="db6e6625e26b450a55d1e6974d660ebb",o="https://api.themoviedb.org/3/",s=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"trending/movie/day?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"search/movie?api_key=").concat(i,"&query=").concat(t,"&include_adult=false&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},765:function(n,t,e){e.r(t);var r=e(439),a=e(791),c=e(689),u=e(87),i=e(539),o=e(673),s=e(184);t.default=function(){var n=(0,a.useState)([]),t=(0,r.Z)(n,2),e=t[0],p=t[1],f=(0,c.TH)(),d=(0,a.useState)(!1),l=(0,r.Z)(d,2),h=l[0],v=l[1];return(0,a.useEffect)((function(){v(!0),(0,i.Hg)().then((function(n){p(n.results),v(!1)}))}),[]),(0,s.jsxs)("main",{children:[h&&(0,s.jsx)(o.Z,{}),(0,s.jsx)("h1",{children:"Trending today"}),(0,s.jsx)("ul",{children:e.map((function(n){return(0,s.jsx)("li",{children:(0,s.jsx)(u.rU,{to:"/movies/".concat(n.id),state:{from:f},children:n.original_title})},n.id)}))})]})}}}]);
//# sourceMappingURL=765.69aacbf9.chunk.js.map