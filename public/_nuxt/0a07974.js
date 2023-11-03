(window.webpackJsonp=window.webpackJsonp||[]).push([[115,67],{632:function(t,e,n){"use strict";n.d(e,"c",(function(){return h})),n.d(e,"b",(function(){return k})),n.d(e,"d",(function(){return x})),n.d(e,"a",(function(){return O})),n.d(e,"e",(function(){return y})),n.d(e,"f",(function(){return R}));var r,c,o,l,d,_,m,v=n(92),f=n(61),h=Object(f.a)(r||(r=Object(v.a)(["\n  query($page: Int!, $per_page: Int!, $status: StatusEnum) {\n    stockRequests(first: $per_page, page: $page, status: $status) {\n      data {\n        id\n        reference_no\n        requested_date\n        requester_name\n        contact_detail\n        status\n        officeLocation {\n          id\n          address\n        } \n        whereHouse {\n          id\n          name\n          address\n        }     \n        department {\n          id\n          name\n        }\n        stockRequestItems {\n          id\n          designation_contact\n          quantity\n          description\n          contact_detail\n          goodReceiveItem {\n            id\n            description\n            received_quantity\n            comment\n            unitOfMeasurement {\n              id\n              abbreviation\n            }\n            item {\n              id\n              name\n            }\n          }\n        }\n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }\n  }\n"]))),k=Object(f.a)(c||(c=Object(v.a)(["\n  query All_STOCK_REQUEST_LOOKUP_QUERY {\n    officeLocations {\n      id\n      address\n    } \n    whereHouses {\n      id\n      name\n      address\n    }     \n    departments {\n      id\n      name\n    }\n  }\n"]))),x=Object(f.a)(o||(o=Object(v.a)(["\n  mutation ($id: ID!, $input: [ID]!) {\n    checkStockRequest(id: $id, input: $input) {\n      id\n    }\n  }\n"]))),O=Object(f.a)(l||(l=Object(v.a)(["\n  mutation ($id: ID!, $input: [ID]!) {\n    approveStockRequest(id: $id, input: $input) {\n      id\n    }\n  }\n"]))),y=Object(f.a)(d||(d=Object(v.a)(["\n  mutation ($input: StockRequestCreateInput!) {\n    createStockRequest(input: $input) {\n      id\n    }\n  }\n"]))),R=Object(f.a)(_||(_=Object(v.a)(["\n  mutation ($input: StockRequestUpdateInput!) {\n    updateStockRequest(input: $input) {\n      id\n    }\n  }\n"])));Object(f.a)(m||(m=Object(v.a)(["\n  mutation($id: ID!) {\n    deleteStockRequest(id: $id) {\n      id\n    }\n  }\n"])))},656:function(t,e,n){"use strict";n.r(e);var r=n(177),c=n(275),o=n(781),l=n(194),d=n(269),_=n(175),m=n(86),v=n(279),f=(n(39),n(289),n(1)),h=n(15),k=n(24),x=n(288),O={props:["stockRequests","search","_pagination"],data:function(){return{pagination:{},headers:[{text:"#",class:"text-center white--text text-uppercase py-2 blue",value:"id"},{text:"Reference Number",class:"text-center white--text text-uppercase py-2 blue",value:"reference_no"},{text:"Request Date",align:"start",value:"requested_date",class:"text-center white--text text-uppercase py-2 blue"},{text:"Requester Name",value:"requester_name",class:"text-center white--text text-uppercase py-2 blue"},{text:"Office Location",class:"text-center white--text text-uppercase py-2 blue",value:"officeLocation.address"},{text:"Warehouse",class:"text-center white--text text-uppercase py-2 blue",value:"whereHouse.name"},{text:"Department",class:"text-center white--text text-uppercase py-2 blue",value:"department.name"},Object(f.a)({text:"Status",class:"text-center white--text text-uppercase py-2 blue",value:"status"},"class","text-center white--text text-uppercase py-2 blue"),Object(f.a)({text:"Action",class:"text-center white--text text-uppercase py-2 blue",value:"menu"},"class","text-center white--text text-uppercase py-2 blue")],element_permissions:{check_btn:[{resource:h.a.STOCK_REQUEST,action:k.a.CHECK}],approve_btn:[{resource:h.a.STOCK_REQUEST,action:k.a.APPROVE}]}}},methods:{can:function(t){return Object(x.a)(this.$auth.user,t)},showDetail:function(t){this.$router.push({path:"/inventory/".concat(t.id,"/edit")})}}},y=n(60),component=Object(y.a)(O,(function(){var t=this,e=t._self._c;return e(o.a,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.stockRequests,search:t.search,"hide-default-footer":!0,"items-per-page":t._pagination.perPage},scopedSlots:t._u([{key:"item.id",fn:function(e){var n=e.item;return[t._v(" \n    # "+t._s(n.id)+"\n  ")]}},{key:"item.status",fn:function(n){var r=n.item;return["COMPLETED"==r.status?e(c.a,{staticClass:"ma-2",attrs:{label:"",color:"blue lighten-3"}},[e(l.a,{attrs:{left:""}}),t._v(" Closed\n    ")],1):"CHECKED"==r.status?e(c.a,{staticClass:"ma-2",attrs:{label:"",color:"warning lighten-3 black--text"}},[e(l.a,{attrs:{left:""}},[t._v("mdi-check")]),t._v(" "+t._s(r.status)+"\n    ")],1):"APPROVED"==r.status?e(c.a,{staticClass:"ma-2",attrs:{label:"",color:"green lighten-3"}},[e(l.a,{attrs:{left:""}},[t._v("mdi-check-all")]),t._v(" "+t._s(r.status)+"\n    ")],1):e(c.a,{staticClass:"ma-2",attrs:{label:"",color:"gray lighten-3"}},[e(l.a,{attrs:{left:""}},[t._v("mdi-dots-horizontal")]),t._v(" "+t._s(r.status)+"\n    ")],1)]}},{key:"item.menu",fn:function(n){var c=n.item;return[e(v.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var c=n.on,o=n.attrs;return[e(r.a,t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),c),[e(l.a,[t._v("mdi-menu")])],1)]}}],null,!0)},[t._v(" "),e(d.a,{staticClass:"col-12 px-0"},[e(_.a,{on:{click:function(e){return t.showDetail(c)}}},[e(l.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-eye")]),t._v(" "),e(m.d,[t._v("Detail")])],1),t._v(" "),e("hr"),t._v(" "),"PENDING"==c.status&&t.can(t.element_permissions.check_btn)?e(_.a,{on:{click:function(e){return t.$emit("on-stock-request-check-clicked",c)}}},[e(l.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-check")]),t._v(" "),e(m.d,[t._v("Check")])],1):t._e(),t._v(" "),"CHECKED"==c.status&&t.can(t.element_permissions.approve_btn)?e(_.a,{on:{click:function(e){return t.$emit("on-stock-request-approve-clicked",c)}}},[e(l.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-check")]),t._v(" "),e(m.d,[t._v("Approve")])],1):t._e(),t._v(" "),"APPROVED"==c.status&&"/stock_request/approved"==t.$nuxt.$route.path?e(_.a,{on:{click:function(e){return t.$emit("on-stock-request-issue-clicked",c)}}},[e(l.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-check")]),t._v(" "),e(m.d,[t._v("Issue")])],1):t._e()],1)],1)]}}])})}),[],!1,null,null,null);e.default=component.exports},817:function(t,e,n){"use strict";n.r(e);var r=n(626),c=n(695),o=n(194),l=n(651),d=n(609),_=n(124),m=(n(39),n(289),n(13),n(14),n(12),n(6),n(16),n(10),n(17),n(1)),v=n(656),f=n(632),h=n(24),k=n(288),x=n(15);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var R={components:{StockRequestTable:v.default},middleware:["authenticated"],data:function(){return{breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/dashboard"},{text:"Issued Stock Requests",disabled:!0}],stockRequests:{paginatorInfo:{}},stockRequest:{},search:{customer_name:"",concrete_type_id:null},element_permissions:{create_btn:[{resource:x.a.STOCK_REQUEST,action:h.a.CREATE}]},loading:!0,pagination:{page:1,per_page:25},issueStockRequestDialogVisible:!1}},apollo:{stockRequests:{query:f.c,loadingKey:"loading",variables:function(){return y(y({},{}),{page:this.pagination.page,per_page:this.pagination.per_page,status:"ISSUED"})},fetchPolicy:"cache-and-network"}},methods:{can:function(t){return Object(k.a)(this.$auth.user,t)}}},w=n(60),component=Object(w.a)(R,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-5 grey lighten-3"},[e(r.a,{attrs:{stockRequests:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[e(o.a,[t._v("mdi-chevron-double-right")])]},proxy:!0}])}),t._v(" "),e("div",{staticClass:"px-4 row ma-1"},[t._m(0),t._v(" "),e(d.a),t._v(" "),e("div",{staticClass:"pr-2"})],1),t._v(" "),e("div",{staticClass:"px-5 py-3"},[e("div",{staticClass:"row mb-4"},[e(c.a,{attrs:{cols:"12",lg:"4"}},[e(_.a,{attrs:{"append-icon":"mdi-magnify",label:"Search by name, project description or phone number","single-line":"","hide-details":"",outlined:""},model:{value:t.search.customer_name,callback:function(e){t.$set(t.search,"customer_name",e)},expression:"search.customer_name"}})],1)],1),t._v(" "),e("stock-request-table",{attrs:{loading:t.loading,stockRequests:t.stockRequests.data,_pagination:t.stockRequests.paginatorInfo},on:{"on-stock-request-issue-clicked":t.onStockRequestIssueClicked}}),t._v(" "),e(l.a,{staticClass:"my-4",attrs:{length:t.stockRequests.paginatorInfo.lastPage},model:{value:t.pagination.page,callback:function(e){t.$set(t.pagination,"page",e)},expression:"pagination.page"}})],1)],1)}),[function(){var t=this,e=t._self._c;return e("div",[e("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[t._v("Stock Issuance History")]),t._v(" "),e("span",{staticClass:"grey--text text--darken-1"},[t._v("Stock Issuance Histories Are Shown Here.")])])}],!1,null,null,null);e.default=component.exports}}]);