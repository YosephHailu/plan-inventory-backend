(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{708:function(e,t,n){"use strict";n.r(t);var r=n(177),c=n(275),l=n(785),o=n(273),d=n(194),_=n(269),v=n(175),m=n(86),x=n(279),f=n(645),h=(n(39),n(289),{props:["roles","search"],data:function(){return{pagination:{},expanded:[],headers:[{text:"Name",class:"text-center white--text text-uppercase py-2 blue",value:"name"},{text:"Code",class:"text-center white--text text-uppercase py-2 blue",value:"code"},{text:"Action",class:"blue-grey lighten-3 col-2",value:"menu"}]}}}),k=n(60),component=Object(k.a)(h,(function(){var e=this,t=e._self._c;return t(l.a,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.roles,"items-per-page":25,search:e.search,expanded:e.expanded,"show-expand":""},on:{"update:expanded":function(t){e.expanded=t}},scopedSlots:e._u([{key:"item.is_active",fn:function(n){var r=n.item;return[t(c.a,[e._v(e._s(r.is_active?"active":"not active"))])]}},{key:"item.is_locked",fn:function(n){var r=n.item;return[t(c.a,[e._v(e._s(r.is_locked?"locked":"open"))])]}},{key:"item.menu",fn:function(n){var c=n.item;return[t(x.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:e._u([{key:"activator",fn:function(n){var c=n.on,l=n.attrs;return[t(r.a,e._g(e._b({attrs:{icon:""}},"v-btn",l,!1),c),[t(d.a,[e._v("mdi-menu")])],1)]}}],null,!0)},[e._v(" "),t(_.a,{staticClass:"col-12 px-0"},[t(v.a,{on:{click:function(t){return e.$emit("on-role-detail-clicked",c)}}},[t(d.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-eye")]),e._v(" "),t(m.d,[e._v("Detail")])],1),e._v(" "),t(o.a),e._v(" "),c.checked?e._e():t(v.a,{on:{click:function(t){return e.$emit("on-role-delete-clicked",c)}}},[t(d.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-delete")]),e._v(" "),t(m.d,{staticClass:"pr-9"},[e._v("Delete")])],1)],1)],1)]}},{key:"expanded-item",fn:function(n){var r=n.headers,l=n.item;return[t("td",{staticClass:"px-0 blue-grey lighten-5",attrs:{colspan:r.length}},[t(f.a,{staticClass:"blue-grey lighten-5",scopedSlots:e._u([{key:"default",fn:function(){return[t("thead",[t("tr",{staticClass:"blue-grey lighten-4"},[t("th",{staticClass:"text-center"},[t("b",[e._v("RESOURCES")])]),e._v(" "),t("th",{staticClass:"text-center"},[t("b",[e._v("ACTIONS")])])])]),e._v(" "),t("tbody",e._l(l.rolePermissions,(function(n){return t("tr",{key:n.ID},[t("td",{staticClass:"text-center"},[e._v(e._s(n.permission.resource))]),e._v(" "),t("td",{staticClass:"text-center"},e._l(n.permissionTypes,(function(n){return t(c.a,{key:n.id,staticClass:"ma-2",attrs:{close:""}},[e._v("\n                  "+e._s(n.action)+"\n                ")])})),1)])})),0)]},proxy:!0}],null,!0)})],1)]}}])})}),[],!1,null,null,null);t.default=component.exports}}]);