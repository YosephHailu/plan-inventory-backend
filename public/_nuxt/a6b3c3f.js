(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{704:function(t,e,n){"use strict";n.r(e);var c=n(177),r=n(275),o=n(788),l=n(273),v=n(194),_=n(269),d=n(175),m=n(86),f=n(279),k=(n(39),n(289),{props:["permission_types","search"],data:function(){return{pagination:{},expanded:[],headers:[{text:"Action",class:"text-center white--text text-uppercase py-2 blue",value:"action"},{text:"Action",class:"blue-grey lighten-3 col-2",value:"menu"}]}}}),h=n(60),component=Object(h.a)(k,(function(){var t=this,e=t._self._c;return e(o.a,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.permission_types,"items-per-page":25,search:t.search},scopedSlots:t._u([{key:"item.is_active",fn:function(n){var c=n.item;return[e(r.a,[t._v(t._s(c.is_active?"active":"not active"))])]}},{key:"item.is_locked",fn:function(n){var c=n.item;return[e(r.a,[t._v(t._s(c.is_locked?"locked":"open"))])]}},{key:"item.menu",fn:function(n){var r=n.item;return[e(f.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e(c.a,t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),r),[e(v.a,[t._v("mdi-menu")])],1)]}}],null,!0)},[t._v(" "),e(_.a,{staticClass:"col-12 px-0"},[e(d.a,{on:{click:function(e){return t.$emit("on-permission-type-detail-clicked",r)}}},[e(v.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-eye")]),t._v(" "),e(m.d,[t._v("Detail")])],1),t._v(" "),e(l.a),t._v(" "),r.checked?t._e():e(d.a,{on:{click:function(e){return t.$emit("on-permission-type-delete-clicked",r)}}},[e(v.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-delete")]),t._v(" "),e(m.d,{staticClass:"pr-9"},[t._v("Delete")])],1)],1)],1)]}}])})}),[],!1,null,null,null);e.default=component.exports}}]);