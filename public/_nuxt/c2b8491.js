(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{715:function(t,e,n){"use strict";n.r(e);var l=n(177),r=n(762),o=n(194),c=n(269),d=n(175),v=n(86),m=n(279),_=(n(39),n(289),{props:["disposalReasons","search"],data:function(){return{expanded:[],pagination:{},headers:[{text:"id",value:"id",class:"blue-grey lighten-3"},{text:"Name",align:"start",value:"name",class:"blue-grey lighten-3"},{text:"Description",value:"description",class:"blue-grey lighten-3"},{text:"Action",value:"menu",class:"blue-grey lighten-3"}]}}}),h=n(60),component=Object(h.a)(_,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.disposalReasons,"items-per-page":25,search:t.search},scopedSlots:t._u([{key:"item.menu",fn:function(n){var r=n.item;return[e(m.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,c=n.attrs;return[e(l.a,t._g(t._b({attrs:{icon:""}},"v-btn",c,!1),r),[e(o.a,[t._v("mdi-menu")])],1)]}}],null,!0)},[t._v(" "),e(c.a,{staticClass:"col-12 px-0"},[e(d.a,{on:{click:function(e){return t.$emit("on-disposal-reason-detail-clicked",r)}}},[e(o.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-eye")]),t._v(" "),e(v.d,{staticClass:"pr-5"},[t._v("detail")])],1),t._v(" "),e(d.a,{staticClass:"red lighten-3",on:{click:function(e){return t.$emit("on-delete-disposal-reason-clicked",r)}}},[e(o.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-delete")]),t._v(" "),e(v.d,[t._v("Delete")])],1)],1)],1)]}}])})}),[],!1,null,null,null);e.default=component.exports}}]);