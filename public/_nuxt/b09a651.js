(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{726:function(e,t,r){"use strict";r.r(t);var n=r(177),l=r(756),c=r(194),o=r(269),d=r(175),m=r(86),v=r(279),_=(r(39),r(288),{props:["programAreas","search"],data:function(){return{expanded:[],pagination:{},headers:[{text:"id",value:"id",class:"blue-grey lighten-3"},{text:"Name",align:"start",value:"name",class:"blue-grey lighten-3"},{text:"Four Digit Code",value:"four_digit_code",class:"blue-grey lighten-3"},{text:"Description",value:"description",class:"blue-grey lighten-3"},{text:"Action",value:"menu",class:"blue-grey lighten-3"}]}}}),h=r(60),component=Object(h.a)(_,(function(){var e=this,t=e._self._c;return t(l.a,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.programAreas,"items-per-page":25,search:e.search},scopedSlots:e._u([{key:"item.menu",fn:function(r){var l=r.item;return[t(v.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:e._u([{key:"activator",fn:function(r){var l=r.on,o=r.attrs;return[t(n.a,e._g(e._b({attrs:{icon:""}},"v-btn",o,!1),l),[t(c.a,[e._v("mdi-menu")])],1)]}}],null,!0)},[e._v(" "),t(o.a,{staticClass:"col-12 px-0"},[t(d.a,{on:{click:function(t){return e.$emit("on-program-area-detail-clicked",l)}}},[t(c.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-eye")]),e._v(" "),t(m.d,{staticClass:"pr-5"},[e._v("detail")])],1),e._v(" "),t(d.a,{staticClass:"red lighten-3",on:{click:function(t){return e.$emit("on-delete-program-area-clicked",l)}}},[t(c.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-delete")]),e._v(" "),t(m.d,[e._v("Delete")])],1)],1)],1)]}}])})}),[],!1,null,null,null);t.default=component.exports}}]);