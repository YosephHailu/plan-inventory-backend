(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{717:function(t,e,n){"use strict";n.r(e);var r=n(177),c=n(782),l=n(194),o=n(269),d=n(175),x=n(86),m=n(279),v=(n(39),n(289),{props:["departments","search"],data:function(){return{expanded:[],pagination:{},headers:[{text:"id",value:"id",class:"text-center white--text text-uppercase py-2 blue"},{text:"Name",align:"start",value:"name",class:"text-center white--text text-uppercase py-2 blue"},{text:"Description",value:"description",class:"text-center white--text text-uppercase py-2 blue"},{text:"Action",value:"menu",class:"text-center white--text text-uppercase py-2 blue"}]}}}),_=n(60),component=Object(_.a)(v,(function(){var t=this,e=t._self._c;return e(c.a,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.departments,"items-per-page":25,search:t.search},scopedSlots:t._u([{key:"item.menu",fn:function(n){var c=n.item;return[e(m.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var c=n.on,o=n.attrs;return[e(r.a,t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),c),[e(l.a,[t._v("mdi-menu")])],1)]}}],null,!0)},[t._v(" "),e(o.a,{staticClass:"col-12 px-0"},[e(d.a,{on:{click:function(e){return t.$emit("on-department-detail-clicked",c)}}},[e(l.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-eye")]),t._v(" "),e(x.d,{staticClass:"pr-5"},[t._v("detail")])],1),t._v(" "),e(d.a,{staticClass:"red lighten-3",on:{click:function(e){return t.$emit("on-delete-department-clicked",c)}}},[e(l.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-delete")]),t._v(" "),e(x.d,[t._v("Delete")])],1)],1)],1)]}}])})}),[],!1,null,null,null);e.default=component.exports}}]);