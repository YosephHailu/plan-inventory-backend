(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{649:function(e,t,n){"use strict";n.r(t);var r=n(174),c=n(263),l=n(700),o=n(262),v=n(209),d=n(259),m=n(172),_=n(83),f=n(267),h=(n(41),n(274),{props:["permissions","search"],data:function(){return{pagination:{},expanded:[],headers:[{text:"Name",class:"blue-grey lighten-3",value:"name"},{text:"Code",class:"blue-grey lighten-3",value:"code"},{text:"Resource",class:"blue-grey lighten-3",value:"resource"},{text:"Description",class:"blue-grey lighten-3",value:"description"},{text:"Action",class:"blue-grey lighten-3 col-2",value:"menu"}]}}}),k=n(90),component=Object(k.a)(h,(function(){var e=this,t=e._self._c;return t(l.a,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.permissions,"items-per-page":25,search:e.search},scopedSlots:e._u([{key:"item.is_active",fn:function(n){var r=n.item;return[t(c.a,[e._v(e._s(r.is_active?"active":"not active"))])]}},{key:"item.is_locked",fn:function(n){var r=n.item;return[t(c.a,[e._v(e._s(r.is_locked?"locked":"open"))])]}},{key:"item.menu",fn:function(n){var c=n.item;return[t(f.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:e._u([{key:"activator",fn:function(n){var c=n.on,l=n.attrs;return[t(r.a,e._g(e._b({attrs:{icon:""}},"v-btn",l,!1),c),[t(v.a,[e._v("mdi-menu")])],1)]}}],null,!0)},[e._v(" "),t(d.a,{staticClass:"col-12 px-0"},[t(m.a,{on:{click:function(t){return e.$emit("on-permission-detail-clicked",c)}}},[t(v.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-eye")]),e._v(" "),t(_.b,[e._v("Detail")])],1),e._v(" "),t(o.a),e._v(" "),c.checked?e._e():t(m.a,{on:{click:function(t){return e.$emit("on-permission-delete-clicked",c)}}},[t(v.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-delete")]),e._v(" "),t(_.b,{staticClass:"pr-9"},[e._v("Delete")])],1)],1)],1)]}}])})}),[],!1,null,null,null);t.default=component.exports}}]);