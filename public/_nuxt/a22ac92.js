(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{670:function(t,e,n){"use strict";n.r(e);var c=n(177),r=n(275),l=n(781),o=n(194),v=n(269),_=n(175),h=n(86),d=n(279),m=(n(39),n(289),n(1)),x=n(15),f=n(24),C=n(288),k={props:["goodReceives","search","_pagination"],data:function(){return{pagination:{},headers:[{text:"#",align:"center",class:"text-center white--text text-uppercase py-2 blue lighten-1",value:"id"},{text:"Received Date",align:"start",value:"received_date",class:"text-center white--text text-uppercase py-2 blue lighten-1"},{text:"Requester Name",value:"received_by",class:"text-center white--text text-uppercase py-2 blue lighten-1"},{text:"Remark",value:"remark",class:"text-center white--text text-uppercase py-2 blue lighten-1"},{text:"Status",value:"status",align:"center",class:"text-center white--text text-uppercase py-2 blue lighten-1"},Object(m.a)({text:"Action",class:"text-center white--text text-uppercase py-2 blue lighten-1",value:"menu"},"class","text-center white--text text-uppercase py-2 blue lighten-1")],element_permissions:{check_btn:[{resource:x.a.GOOD_RECEIVE,action:f.a.CHECK}],approve_btn:[{resource:x.a.GOOD_RECEIVE,action:f.a.CHECK},{resource:x.a.GOOD_RECEIVE,action:f.a.APPROVE}]}}},methods:{can:function(t){return Object(C.a)(this.$auth.user,t)},showDetail:function(t){this.$router.push({path:"/inventory/".concat(t.id,"/edit")})}}},E=n(60),component=Object(E.a)(k,(function(){var t=this,e=t._self._c;return e(l.a,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.goodReceives,search:t.search,"hide-default-footer":!0,"items-per-page":t._pagination.perPage},scopedSlots:t._u([{key:"item.id",fn:function(n){var c=n.item;return[e("span",{staticClass:"blue--text"},[t._v("# "+t._s(c.id))])]}},{key:"item.status",fn:function(n){var c=n.item;return["COMPLETED"==c.status?e(r.a,{staticClass:"ma-2",attrs:{label:"",color:"blue lighten-3"}},[e(o.a,{attrs:{left:""}}),t._v(" Closed\n    ")],1):"CHECKED"==c.status?e(r.a,{staticClass:"ma-2",attrs:{label:"",color:"warning lighten-3 black--text"}},[e(o.a,{attrs:{left:""}},[t._v("mdi-check")]),t._v(" "+t._s(c.status)+"\n    ")],1):"APPROVED"==c.status?e(r.a,{staticClass:"ma-2",attrs:{label:"",color:"green lighten-3"}},[e(o.a,{attrs:{left:""}},[t._v("mdi-check-all")]),t._v(" "+t._s(c.status)+"\n    ")],1):e(r.a,{staticClass:"ma-2",attrs:{label:"",color:"gray lighten-3"}},[e(o.a,{attrs:{left:""}},[t._v("mdi-dots-horizontal")]),t._v(" "+t._s(c.status)+"\n    ")],1)]}},{key:"item.menu",fn:function(n){var r=n.item;return[e(d.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[e(c.a,t._g(t._b({attrs:{icon:""}},"v-btn",l,!1),r),[e(o.a,[t._v("mdi-menu")])],1)]}}],null,!0)},[t._v(" "),e(v.a,{staticClass:"col-12 px-0"},[e(_.a,{on:{click:function(e){return t.showDetail(r)}}},[e(o.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-eye")]),t._v(" "),e(h.d,[t._v("Detail")])],1),t._v(" "),e("hr"),t._v(" "),"PENDING"==r.status&&t.can(t.element_permissions.check_btn)?e(_.a,{on:{click:function(e){return t.$emit("on-good-receive-check-clicked",r)}}},[e(o.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-check")]),t._v(" "),e(h.d,[t._v("Check")])],1):t._e(),t._v(" "),"CHECKED"==r.status&&t.can(t.element_permissions.approve_btn)?e(_.a,{on:{click:function(e){return t.$emit("on-good-receive-approve-clicked",r)}}},[e(o.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-check")]),t._v(" "),e(h.d,[t._v("Approve")])],1):t._e()],1)],1)]}}])})}),[],!1,null,null,null);e.default=component.exports}}]);