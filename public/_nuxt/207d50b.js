(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{708:function(t,e,n){"use strict";n.r(e);var r=n(177),c=n(275),l=n(782),o=n(273),v=n(194),x=n(269),_=n(175),d=n(86),m=n(279),f=(n(39),n(289),n(38),{props:["users","search"],data:function(){return{pagination:{},expanded:[],headers:[{text:"Full Name",class:"text-center white--text text-uppercase py-2 blue",value:"name"},{text:"Email",align:"start",value:"email",class:"text-center white--text text-uppercase py-2 blue"},{text:"Username",align:"start",value:"username",class:"text-center white--text text-uppercase py-2 blue"},{text:"Is Active",align:"start",value:"is_active",class:"text-center white--text text-uppercase py-2 blue"},{text:"Is Locked",align:"start",value:"is_locked",class:"text-center white--text text-uppercase py-2 blue"},{text:"Last Seen",align:"start",value:"last_seen",class:"text-center white--text text-uppercase py-2 blue"},{text:"Roles",align:"start",value:"roles",class:"text-center white--text text-uppercase py-2 blue"},{text:"Action",class:"blue-grey lighten-3 col-1",value:"menu"}]}}}),h=n(60),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e(l.a,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.users,"items-per-page":25,search:t.search},scopedSlots:t._u([{key:"item.is_active",fn:function(n){var r=n.item;return[e(c.a,[t._v(t._s(r.is_active?"active":"not active"))])]}},{key:"item.is_locked",fn:function(n){var r=n.item;return[e(c.a,[t._v(t._s(r.is_locked?"Yes":"No"))])]}},{key:"item.roles",fn:function(n){var r=n.item;return t._l(r.roles,(function(n){return e(c.a,{key:n.id,attrs:{color:"blue-grey lighten-3"}},[t._v(t._s(n.name))])}))}},{key:"item.menu",fn:function(n){var c=n.item;return[e(m.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var c=n.on,l=n.attrs;return[e(r.a,t._g(t._b({attrs:{icon:""}},"v-btn",l,!1),c),[e(v.a,[t._v("mdi-menu")])],1)]}}],null,!0)},[t._v(" "),e(x.a,{staticClass:"col-12 px-0"},[e(_.a,{on:{click:function(e){return t.$emit("on-user-detail-clicked",c)}}},[e(v.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-eye")]),t._v(" "),e(d.d,[t._v("Detail")])],1),t._v(" "),e(o.a),t._v(" "),c.checked?t._e():e(_.a,{on:{click:function(e){return t.$emit("on-update-user-status-clicked",c)}}},[c.is_active?[e(v.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-delete")]),t._v(" "),e(d.d,{staticClass:"pr-9"},[t._v("Deactivate")])]:[e(v.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-check")]),t._v(" "),e(d.d,{staticClass:"pr-9"},[t._v("Activate")])]],2)],1)],1)]}}])})}),[],!1,null,null,null);e.default=component.exports}}]);