(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{718:function(t,e,n){"use strict";n.r(e);var c=n(177),r=n(785),l=n(194),o=n(269),d=n(175),x=n(86),v=n(279),m=(n(39),n(289),{props:["currencies","search"],data:function(){return{expanded:[],pagination:{},headers:[{text:"id",value:"id",class:"text-center white--text text-uppercase py-2 blue"},{text:"Name",align:"start",value:"name",class:"text-center white--text text-uppercase py-2 blue"},{text:"Code",value:"code",class:"text-center white--text text-uppercase py-2 blue"},{text:"Description",value:"description",class:"text-center white--text text-uppercase py-2 blue"},{text:"Action",value:"menu",class:"text-center white--text text-uppercase py-2 blue"}]}}}),h=n(60),component=Object(h.a)(m,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.currencies,"items-per-page":25,search:t.search},scopedSlots:t._u([{key:"item.menu",fn:function(n){var r=n.item;return[e(v.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e(c.a,t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),r),[e(l.a,[t._v("mdi-menu")])],1)]}}],null,!0)},[t._v(" "),e(o.a,{staticClass:"col-12 px-0"},[e(d.a,{on:{click:function(e){return t.$emit("on-currency-detail-clicked",r)}}},[e(l.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-eye")]),t._v(" "),e(x.d,{staticClass:"pr-5"},[t._v("detail")])],1),t._v(" "),e(d.a,{staticClass:"red lighten-3",on:{click:function(e){return t.$emit("on-delete-currency-clicked",r)}}},[e(l.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-delete")]),t._v(" "),e(x.d,[t._v("Delete")])],1)],1)],1)]}}])})}),[],!1,null,null,null);e.default=component.exports}}]);