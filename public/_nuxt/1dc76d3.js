(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{685:function(e,t,n){"use strict";n.r(t);var r=n(177),l=n(275),c=n(759),o=n(194),v=n(269),_=n(175),d=n(86),h=n(279),m=(n(39),n(288),n(1)),f=n(18),C=n(26),k=n(289),E={props:["goodReceives","search","_pagination"],data:function(){return{pagination:{},headers:[{text:"#",align:"center",class:"blue-grey lighten-3",value:"id"},{text:"Reference Number",class:"blue-grey lighten-3",value:"reference_number"},{text:"Received Date",align:"start",value:"received_date",class:"blue-grey lighten-3"},{text:"Requester Name",value:"received_by",class:"blue-grey lighten-3"},{text:"Remark",value:"remark",class:"blue-grey lighten-3"},{text:"Status",value:"status",align:"center",class:"blue-grey lighten-3"},Object(m.a)({text:"Action",class:"blue-grey lighten-3",value:"menu"},"class","blue-grey lighten-3")],element_permissions:{check_btn:[{resource:f.a.GOOD_RECEIVE,action:C.a.CHECK}],approve_btn:[{resource:f.a.GOOD_RECEIVE,action:C.a.CHECK},{resource:f.a.GOOD_RECEIVE,action:C.a.APPROVE}]}}},methods:{can:function(e){return Object(k.a)(this.$auth.user,e)},showDetail:function(e){this.$router.push({path:"/inventory/".concat(e.id,"/edit")})}}},y=n(60),component=Object(y.a)(E,(function(){var e=this,t=e._self._c;return t(c.a,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.goodReceives,search:e.search,"hide-default-footer":!0,"items-per-page":e._pagination.perPage},scopedSlots:e._u([{key:"item.id",fn:function(n){var r=n.item;return[t("span",{staticClass:"blue--text"},[e._v("# "+e._s(r.id))])]}},{key:"item.status",fn:function(n){var r=n.item;return["COMPLETED"==r.status?t(l.a,{staticClass:"ma-2",attrs:{label:"",color:"blue lighten-3"}},[t(o.a,{attrs:{left:""}}),e._v(" Closed\n    ")],1):"CHECKED"==r.status?t(l.a,{staticClass:"ma-2",attrs:{label:"",color:"warning lighten-3 black--text"}},[t(o.a,{attrs:{left:""}},[e._v("mdi-check")]),e._v(" "+e._s(r.status)+"\n    ")],1):"APPROVED"==r.status?t(l.a,{staticClass:"ma-2",attrs:{label:"",color:"green lighten-3"}},[t(o.a,{attrs:{left:""}},[e._v("mdi-check-all")]),e._v(" "+e._s(r.status)+"\n    ")],1):t(l.a,{staticClass:"ma-2",attrs:{label:"",color:"gray lighten-3"}},[t(o.a,{attrs:{left:""}},[e._v("mdi-dots-horizontal")]),e._v(" "+e._s(r.status)+"\n    ")],1)]}},{key:"item.menu",fn:function(n){var l=n.item;return[t(h.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:e._u([{key:"activator",fn:function(n){var l=n.on,c=n.attrs;return[t(r.a,e._g(e._b({attrs:{icon:""}},"v-btn",c,!1),l),[t(o.a,[e._v("mdi-menu")])],1)]}}],null,!0)},[e._v(" "),t(v.a,{staticClass:"col-12 px-0"},[t(_.a,{on:{click:function(t){return e.showDetail(l)}}},[t(o.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-eye")]),e._v(" "),t(d.d,[e._v("Detail")])],1),e._v(" "),t("hr"),e._v(" "),"PENDING"==l.status&&e.can(e.element_permissions.check_btn)?t(_.a,{on:{click:function(t){return e.$emit("on-good-receive-check-clicked",l)}}},[t(o.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-check")]),e._v(" "),t(d.d,[e._v("Check")])],1):e._e(),e._v(" "),"CHECKED"==l.status&&e.can(e.element_permissions.approve_btn)?t(_.a,{on:{click:function(t){return e.$emit("on-good-receive-approve-clicked",l)}}},[t(o.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-check")]),e._v(" "),t(d.d,[e._v("Approve")])],1):e._e()],1)],1)]}}])})}),[],!1,null,null,null);t.default=component.exports}}]);