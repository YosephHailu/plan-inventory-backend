(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{748:function(t,e,n){"use strict";n.r(e);var r=n(177),c=n(788),o=n(194),l=n(269),d=n(175),x=n(86),h=n(279),m=(n(39),n(289),n(1)),v=n(15),_=n(21),f=n(288),w={props:["items","search","_pagination"],data:function(){return{pagination:{},headers:[{text:"ID",align:"start",value:"id",class:"text-center white--text text-uppercase py-2 blue"},{text:"Item Name",align:"start",value:"name",class:"text-center white--text text-uppercase py-2 blue"},{text:"Item Code",class:"text-center white--text text-uppercase py-2 blue",value:"item_code"},{text:"Description",class:"text-center white--text text-uppercase py-2 blue",value:"description"},Object(m.a)({text:"Action",class:"text-center white--text text-uppercase py-2 blue",value:"menu"},"class","text-center white--text text-uppercase py-2 blue")],element_permissions:{complete_btn:[{resource:v.a.ITEM,action:_.a.COMPLETE}]}}},methods:{can:function(t){return Object(f.a)(this.$auth.user,t)},showDetail:function(t){this.$router.push({path:"/inventory/".concat(t.id,"/edit")})},binCard:function(t){this.$router.push({path:"/inventory/".concat(t.id,"/binCard")})}}},y=n(60),component=Object(y.a)(w,(function(){var t=this,e=t._self._c;return e(c.a,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,search:t.search,"hide-default-footer":!0,"items-per-page":t._pagination.perPage},scopedSlots:t._u([{key:"item.id",fn:function(n){var r=n.item;return[e("span",{staticClass:"blue--text"},[t._v("# "+t._s(r.id))])]}},{key:"item.menu",fn:function(n){var c=n.item;return[e(h.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var c=n.on,l=n.attrs;return[e(r.a,t._g(t._b({attrs:{icon:""}},"v-btn",l,!1),c),[e(o.a,[t._v("mdi-menu")])],1)]}}],null,!0)},[t._v(" "),e(l.a,{staticClass:"col-12 px-0"},[e(d.a,{on:{click:function(e){return t.binCard(c)}}},[e(o.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-eye")]),t._v(" "),e(x.d,[t._v("Bin Card")])],1),t._v(" "),e(d.a,{on:{click:function(e){return t.showDetail(c)}}},[e(o.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-eye")]),t._v(" "),e(x.d,[t._v("Detail")])],1)],1)],1)]}}])})}),[],!1,null,null,null);e.default=component.exports}}]);