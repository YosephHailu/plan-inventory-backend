(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{717:function(e,t,n){"use strict";n.r(t);var l=n(177),r=n(268),o=n(738),c=n(213),h=n(264),m=n(175),d=n(84),v=n(272),_=(n(38),n(279),n(1)),f=n(19),y=n(27),x=n(280),C={props:["items","search","_pagination"],data:function(){return{pagination:{},headers:[{text:"Item Code",class:"blue-grey lighten-3",value:"stock_card_number"},{text:"Item Name",align:"start",value:"name",class:"blue-grey lighten-3"},{text:"Expire Date",value:"expire_date",class:"blue-grey lighten-3"},{text:"Item Category",class:"blue-grey lighten-3",value:"itemCategory.name"},{text:"Warehouse",class:"blue-grey lighten-3",value:"whereHouse.name"},{text:"Stock Type",class:"blue-grey lighten-3",value:"stockType.name"},{text:"Department",class:"blue-grey lighten-3",value:"department.name"},{text:"Donor",class:"blue-grey lighten-3",value:"donor.name"},Object(_.a)({text:"Action",class:"blue-grey lighten-3",value:"menu"},"class","blue-grey lighten-3")],element_permissions:{complete_btn:[{resource:f.a.ITEM,action:y.a.COMPLETE}]}}},methods:{can:function(e){return Object(x.a)(this.$auth.user,e)},showDetail:function(e){this.$router.push({path:"/inventory/".concat(e.id,"/edit")})},binCard:function(e){this.$router.push({path:"/inventory/".concat(e.id,"/binCard")})}}},k=n(90),component=Object(k.a)(C,(function(){var e=this,t=e._self._c;return t(o.a,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.items,search:e.search,"hide-default-footer":!0,"items-per-page":e._pagination.perPage},scopedSlots:e._u([{key:"item.status",fn:function(n){var l=n.item;return[l.closed?t(r.a,{staticClass:"ma-2",attrs:{label:"",color:"blue lighten-3"}},[t(c.a,{attrs:{left:""}}),e._v(" Closed\n    ")],1):l.checked&&!l.approved?t(r.a,{staticClass:"ma-2",attrs:{label:"",color:"warning lighten-3 black--text"}},[t(c.a,{attrs:{left:""}},[e._v("mdi-check")]),e._v(" checked\n    ")],1):l.approved?t(r.a,{staticClass:"ma-2",attrs:{label:"",color:"green lighten-3"}},[t(c.a,{attrs:{left:""}},[e._v("mdi-check-all")]),e._v(" approved\n    ")],1):t(r.a,{staticClass:"ma-2",attrs:{label:"",color:"gray lighten-3"}},[t(c.a,{attrs:{left:""}},[e._v("mdi-dots-horizontal")]),e._v(" Pending\n    ")],1)]}},{key:"item.menu",fn:function(n){var r=n.item;return[t(v.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:e._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[t(l.a,e._g(e._b({attrs:{icon:""}},"v-btn",o,!1),r),[t(c.a,[e._v("mdi-menu")])],1)]}}],null,!0)},[e._v(" "),t(h.a,{staticClass:"col-12 px-0"},[t(m.a,{on:{click:function(t){return e.binCard(r)}}},[t(c.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-eye")]),e._v(" "),t(d.c,[e._v("Bin Card")])],1),e._v(" "),t(m.a,{on:{click:function(t){return e.showDetail(r)}}},[t(c.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-eye")]),e._v(" "),t(d.c,[e._v("Detail")])],1)],1)],1)]}}])})}),[],!1,null,null,null);t.default=component.exports}}]);