(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{684:function(t,e,n){"use strict";n.r(e);var r=n(177),l=n(275),c=n(756),o=n(194),v=n(269),_=n(175),d=n(86),h=n(279),m=(n(39),n(288),n(1)),f=n(18),k=n(26),C=n(289),y={props:["goodReceives","search","_pagination"],data:function(){return{pagination:{},headers:[{text:"Reference Number",class:"blue-grey lighten-3",value:"reference_number"},{text:"Received Date",align:"start",value:"received_date",class:"blue-grey lighten-3"},{text:"Requester Name",value:"received_by",class:"blue-grey lighten-3"},{text:"Remark",value:"remark",class:"blue-grey lighten-3"},{text:"Status",value:"status",align:"center",class:"blue-grey lighten-3"},Object(m.a)({text:"Action",class:"blue-grey lighten-3",value:"menu"},"class","blue-grey lighten-3")],element_permissions:{complete_btn:[{resource:f.a.ITEM,action:k.a.COMPLETE}]}}},methods:{can:function(t){return Object(C.a)(this.$auth.user,t)},showDetail:function(t){this.$router.push({path:"/inventory/".concat(t.id,"/edit")})}}},x=n(60),component=Object(x.a)(y,(function(){var t=this,e=t._self._c;return e(c.a,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.goodReceives,search:t.search,"hide-default-footer":!0,"items-per-page":t._pagination.perPage},scopedSlots:t._u([{key:"item.status",fn:function(n){var r=n.item;return["COMPLETED"==r.status?e(l.a,{staticClass:"ma-2",attrs:{label:"",color:"blue lighten-3"}},[e(o.a,{attrs:{left:""}}),t._v(" Closed\n    ")],1):"CHECKED"==r.status?e(l.a,{staticClass:"ma-2",attrs:{label:"",color:"warning lighten-3 black--text"}},[e(o.a,{attrs:{left:""}},[t._v("mdi-check")]),t._v(" "+t._s(r.status)+"\n    ")],1):"APPROVED"==r.status?e(l.a,{staticClass:"ma-2",attrs:{label:"",color:"green lighten-3"}},[e(o.a,{attrs:{left:""}},[t._v("mdi-check-all")]),t._v(" "+t._s(r.status)+"\n    ")],1):e(l.a,{staticClass:"ma-2",attrs:{label:"",color:"gray lighten-3"}},[e(o.a,{attrs:{left:""}},[t._v("mdi-dots-horizontal")]),t._v(" "+t._s(r.status)+"\n    ")],1)]}},{key:"item.menu",fn:function(n){var l=n.item;return[e(h.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var l=n.on,c=n.attrs;return[e(r.a,t._g(t._b({attrs:{icon:""}},"v-btn",c,!1),l),[e(o.a,[t._v("mdi-menu")])],1)]}}],null,!0)},[t._v(" "),e(v.a,{staticClass:"col-12 px-0"},[e(_.a,{on:{click:function(e){return t.showDetail(l)}}},[e(o.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-eye")]),t._v(" "),e(d.d,[t._v("Detail")])],1)],1),t._v(" "),e("hr"),t._v(" "),"PENDING"==l.status?e(_.a,{on:{click:function(e){return t.$emit("on-good-receive-check-clicked",l)}}},[e(o.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-check")]),t._v(" "),e(d.d,[t._v("Check")])],1):t._e(),t._v(" "),"CHECKED"==l.status?e(_.a,{on:{click:function(e){return t.$emit("on-good-receive-approve-clicked",l)}}},[e(o.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-check")]),t._v(" "),e(d.d,[t._v("Approve")])],1):t._e()],1)]}}])})}),[],!1,null,null,null);e.default=component.exports}}]);