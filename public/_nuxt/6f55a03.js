(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{722:function(e,t,n){"use strict";n.r(t);var l=n(177),r=n(756),c=n(194),o=n(269),d=n(175),m=n(86),v=n(279),f=(n(39),n(288),{props:["unitOfMeasurements","search"],data:function(){return{expanded:[],pagination:{},headers:[{text:"id",value:"id",class:"blue-grey lighten-3"},{text:"Name",align:"start",value:"name",class:"blue-grey lighten-3"},{text:"Abbreviation",value:"abbreviation",class:"blue-grey lighten-3"},{text:"Description",value:"description",class:"blue-grey lighten-3"},{text:"Action",value:"menu",class:"blue-grey lighten-3"}]}}}),h=n(60),component=Object(h.a)(f,(function(){var e=this,t=e._self._c;return t(r.a,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.unitOfMeasurements,"items-per-page":25,search:e.search},scopedSlots:e._u([{key:"item.menu",fn:function(n){var r=n.item;return[t(v.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[t(l.a,e._g(e._b({attrs:{icon:""}},"v-btn",o,!1),r),[t(c.a,[e._v("mdi-menu")])],1)]}}],null,!0)},[e._v(" "),t(o.a,{staticClass:"col-12 px-0"},[t(d.a,{on:{click:function(t){return e.$emit("on-measurement-unit-detail-clicked",r)}}},[t(c.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-eye")]),e._v(" "),t(m.d,{staticClass:"pr-5"},[e._v("detail")])],1),e._v(" "),t(d.a,{staticClass:"red lighten-3",on:{click:function(t){return e.$emit("on-delete-measurement-unit-clicked",r)}}},[t(c.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-delete")]),e._v(" "),t(m.d,[e._v("Delete")])],1)],1)],1)]}}])})}),[],!1,null,null,null);t.default=component.exports}}]);