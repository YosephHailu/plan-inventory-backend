(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{636:function(t,e,n){"use strict";n.r(e);var l=n(177),r=n(268),c=n(708),o=n(212),v=n(264),_=n(175),h=n(84),m=n(272),d=(n(37),n(279),n(1)),f=n(26),k=n(41),C=n(280),x={props:["stockRequests","search","_pagination"],data:function(){return{pagination:{},headers:[{text:"Reference Number",class:"blue-grey lighten-3",value:"reference_no"},{text:"Request Date",align:"start",value:"requested_date",class:"blue-grey lighten-3"},{text:"Requester Name",value:"requester_name",class:"blue-grey lighten-3"},{text:"Office Location",class:"blue-grey lighten-3",value:"officeLocation.address"},{text:"Warehouse",class:"blue-grey lighten-3",value:"whereHouse.name"},{text:"Department",class:"blue-grey lighten-3",value:"department.name"},Object(d.a)({text:"Status",class:"blue-grey lighten-3",value:"status"},"class","blue-grey lighten-3"),Object(d.a)({text:"Action",class:"blue-grey lighten-3",value:"menu"},"class","blue-grey lighten-3")],element_permissions:{complete_btn:[{resource:f.a.ITEM,action:k.a.COMPLETE}]}}},methods:{can:function(t){return Object(C.a)(this.$auth.user,t)},showDetail:function(t){this.$router.push({path:"/inventory/".concat(t.id,"/edit")})}}},y=n(90),component=Object(y.a)(x,(function(){var t=this,e=t._self._c;return e(c.a,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.stockRequests,search:t.search,"hide-default-footer":!0,"items-per-page":t._pagination.perPage},scopedSlots:t._u([{key:"item.status",fn:function(n){var l=n.item;return["COMPLETED"==l.status?e(r.a,{staticClass:"ma-2",attrs:{label:"",color:"blue lighten-3"}},[e(o.a,{attrs:{left:""}}),t._v(" Closed\n    ")],1):"CHECKED"==l.status?e(r.a,{staticClass:"ma-2",attrs:{label:"",color:"warning lighten-3 black--text"}},[e(o.a,{attrs:{left:""}},[t._v("mdi-check")]),t._v(" "+t._s(l.status)+"\n    ")],1):"APPROVED"==l.status?e(r.a,{staticClass:"ma-2",attrs:{label:"",color:"green lighten-3"}},[e(o.a,{attrs:{left:""}},[t._v("mdi-check-all")]),t._v(" "+t._s(l.status)+"\n    ")],1):e(r.a,{staticClass:"ma-2",attrs:{label:"",color:"gray lighten-3"}},[e(o.a,{attrs:{left:""}},[t._v("mdi-dots-horizontal")]),t._v(" "+t._s(l.status)+"\n    ")],1)]}},{key:"item.menu",fn:function(n){var r=n.item;return[e(m.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,c=n.attrs;return[e(l.a,t._g(t._b({attrs:{icon:""}},"v-btn",c,!1),r),[e(o.a,[t._v("mdi-menu")])],1)]}}],null,!0)},[t._v(" "),e(v.a,{staticClass:"col-12 px-0"},[e(_.a,{on:{click:function(e){return t.showDetail(r)}}},[e(o.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-eye")]),t._v(" "),e(h.c,[t._v("Detail")])],1),t._v(" "),e("hr"),t._v(" "),"PENDING"==r.status?e(_.a,{on:{click:function(e){return t.$emit("on-stock-request-check-clicked",r)}}},[e(o.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-check")]),t._v(" "),e(h.c,[t._v("Check")])],1):t._e(),t._v(" "),"CHECKED"==r.status?e(_.a,{on:{click:function(e){return t.$emit("on-stock-request-approve-clicked",r)}}},[e(o.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-check")]),t._v(" "),e(h.c,[t._v("Approve")])],1):t._e(),t._v(" "),"APPROVED"==r.status?e(_.a,{on:{click:function(e){return t.$emit("on-stock-request-issue-clicked",r)}}},[e(o.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-check")]),t._v(" "),e(h.c,[t._v("Issue")])],1):t._e()],1)],1)]}}])})}),[],!1,null,null,null);e.default=component.exports}}]);