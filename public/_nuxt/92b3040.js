(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{695:function(e,t,l){"use strict";l.r(t);var n=l(177),r=l(274),c=l(752),o=l(273),v=l(214),_=l(269),d=l(175),m=l(86),f=l(278),h=(l(39),l(287),l(38),{props:["users","search"],data:function(){return{pagination:{},expanded:[],headers:[{text:"Full Name",class:"blue-grey lighten-3",value:"name"},{text:"Email",align:"start",value:"email",class:"blue-grey lighten-3"},{text:"Username",align:"start",value:"username",class:"blue-grey lighten-3"},{text:"Is Active",align:"start",value:"is_active",class:"blue-grey lighten-3"},{text:"Is Locked",align:"start",value:"is_locked",class:"blue-grey lighten-3"},{text:"Last Seen",align:"start",value:"last_seen",class:"blue-grey lighten-3"},{text:"Roles",align:"start",value:"roles",class:"blue-grey lighten-3"},{text:"Action",class:"blue-grey lighten-3 col-1",value:"menu"}]}}}),k=l(60),component=Object(k.a)(h,(function(){var e=this,t=e._self._c;return t(c.a,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.users,"items-per-page":25,search:e.search},scopedSlots:e._u([{key:"item.is_active",fn:function(l){var n=l.item;return[t(r.a,[e._v(e._s(n.is_active?"active":"not active"))])]}},{key:"item.is_locked",fn:function(l){var n=l.item;return[t(r.a,[e._v(e._s(n.is_locked?"Yes":"No"))])]}},{key:"item.roles",fn:function(l){var n=l.item;return e._l(n.roles,(function(l){return t(r.a,{key:l.id,attrs:{color:"blue-grey lighten-3"}},[e._v(e._s(l.name))])}))}},{key:"item.menu",fn:function(l){var r=l.item;return[t(f.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:e._u([{key:"activator",fn:function(l){var r=l.on,c=l.attrs;return[t(n.a,e._g(e._b({attrs:{icon:""}},"v-btn",c,!1),r),[t(v.a,[e._v("mdi-menu")])],1)]}}],null,!0)},[e._v(" "),t(_.a,{staticClass:"col-12 px-0"},[t(d.a,{on:{click:function(t){return e.$emit("on-user-detail-clicked",r)}}},[t(v.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-eye")]),e._v(" "),t(m.d,[e._v("Detail")])],1),e._v(" "),t(o.a),e._v(" "),r.checked?e._e():t(d.a,{on:{click:function(t){return e.$emit("on-update-user-status-clicked",r)}}},[r.is_active?[t(v.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-delete")]),e._v(" "),t(m.d,{staticClass:"pr-9"},[e._v("Deactivate")])]:[t(v.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-check")]),e._v(" "),t(m.d,{staticClass:"pr-9"},[e._v("Activate")])]],2)],1)],1)]}}])})}),[],!1,null,null,null);t.default=component.exports}}]);