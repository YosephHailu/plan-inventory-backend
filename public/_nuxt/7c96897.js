(window.webpackJsonp=window.webpackJsonp||[]).push([[118,69],{632:function(t,e,n){"use strict";n.d(e,"c",(function(){return x})),n.d(e,"f",(function(){return O})),n.d(e,"b",(function(){return y})),n.d(e,"d",(function(){return R})),n.d(e,"a",(function(){return j})),n.d(e,"e",(function(){return w})),n.d(e,"h",(function(){return C})),n.d(e,"g",(function(){return S}));var r,c,o,l,d,m,_,v,f,h=n(92),k=n(61),x=Object(k.a)(r||(r=Object(h.a)(["\n  query($page: Int!, $per_page: Int!, $status: StatusEnum) {\n    stockRequests(first: $per_page, page: $page, status: $status) {\n      data {\n        id\n        reference_no\n        requested_date\n        requester_name\n        contact_detail\n        status\n        officeLocation {\n          id\n          address\n        } \n        whereHouse {\n          id\n          name\n          address\n        }     \n        department {\n          id\n          name\n        }\n        stockRequestItems {\n          id\n          designation_contact\n          quantity\n          description\n          contact_detail\n          goodReceiveItem {\n            id\n            description\n            received_quantity\n            comment\n            unitOfMeasurement {\n              id\n              abbreviation\n            }\n            item {\n              id\n              name\n            }\n          }\n        }\n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }\n  }\n"]))),O=Object(k.a)(c||(c=Object(h.a)(["\n  query {\n    myStockRequests {\n        id\n        reference_no\n        requested_date\n        requester_name\n        contact_detail\n        status\n        officeLocation {\n          id\n          address\n        } \n        whereHouse {\n          id\n          name\n          address\n        }     \n        department {\n          id\n          name\n        }\n        stockRequestItems {\n          id\n          designation_contact\n          quantity\n          description\n          contact_detail\n          goodReceiveItem {\n            id\n            description\n            received_quantity\n            comment\n            unitOfMeasurement {\n              id\n              abbreviation\n            }\n            item {\n              id\n              name\n            }\n          }\n        }\n    }\n  }\n"]))),y=Object(k.a)(o||(o=Object(h.a)(["\n  query All_STOCK_REQUEST_LOOKUP_QUERY {\n    officeLocations {\n      id\n      address\n    } \n    whereHouses {\n      id\n      name\n      address\n    }     \n    departments {\n      id\n      name\n    }\n  }\n"]))),R=Object(k.a)(l||(l=Object(h.a)(["\n  mutation ($id: ID!, $input: [ID]!) {\n    checkStockRequest(id: $id, input: $input) {\n      id\n    }\n  }\n"]))),j=Object(k.a)(d||(d=Object(h.a)(["\n  mutation ($id: ID!, $input: [ID]!) {\n    approveStockRequest(id: $id, input: $input) {\n      id\n    }\n  }\n"]))),w=Object(k.a)(m||(m=Object(h.a)(["\n  mutation ($input: StockRequestCreateInput!) {\n    createStockRequest(input: $input) {\n      id\n    }\n  }\n"]))),C=Object(k.a)(_||(_=Object(h.a)(["\n  mutation ($input: StockRequestUpdateInput!) {\n    updateStockRequest(input: $input) {\n      id\n    }\n  }\n"]))),S=(Object(k.a)(v||(v=Object(h.a)(["\n  mutation($id: ID!) {\n    deleteStockRequest(id: $id) {\n      id\n    }\n  }\n"]))),Object(k.a)(f||(f=Object(h.a)(["\n  mutation($id: ID!) {\n    rejectStockRequest(id: $id) {\n      id\n    }\n  }\n"]))))},649:function(t,e,n){"use strict";n.r(e);var r=n(177),c=n(275),o=n(782),l=n(194),d=n(269),m=n(175),_=n(86),v=n(279),f=(n(39),n(289),n(1)),h=n(15),k=n(24),x=n(288),O={props:["stockRequests","search","_pagination"],data:function(){return{pagination:{},headers:[{text:"#",class:"text-center white--text text-uppercase py-2 blue",value:"id"},{text:"Reference Number",class:"text-center white--text text-uppercase py-2 blue",value:"reference_no"},{text:"Request Date",align:"start",value:"requested_date",class:"text-center white--text text-uppercase py-2 blue"},{text:"Requester Name",value:"requester_name",class:"text-center white--text text-uppercase py-2 blue"},{text:"Office Location",class:"text-center white--text text-uppercase py-2 blue",value:"officeLocation.address"},{text:"Warehouse",class:"text-center white--text text-uppercase py-2 blue",value:"whereHouse.name"},{text:"Department",class:"text-center white--text text-uppercase py-2 blue",value:"department.name"},Object(f.a)({text:"Status",class:"text-center white--text text-uppercase py-2 blue",value:"status"},"class","text-center white--text text-uppercase py-2 blue"),Object(f.a)({text:"Action",class:"text-center white--text text-uppercase py-2 blue",value:"menu"},"class","text-center white--text text-uppercase py-2 blue")],element_permissions:{check_btn:[{resource:h.a.STOCK_REQUEST,action:k.a.CHECK}],approve_btn:[{resource:h.a.STOCK_REQUEST,action:k.a.APPROVE}]}}},methods:{can:function(t){return Object(x.a)(this.$auth.user,t)},showDetail:function(t){this.$router.push({path:"/inventory/".concat(t.id,"/edit")})}}},y=n(60),component=Object(y.a)(O,(function(){var t,e,n=this,f=n._self._c;return f(o.a,{staticClass:"elevation-1",attrs:{headers:n.headers,items:n.stockRequests,search:n.search,"hide-default-footer":!0,"items-per-page":null!==(t=null===(e=n._pagination)||void 0===e?void 0:e.perPage)&&void 0!==t?t:1e3},scopedSlots:n._u([{key:"item.id",fn:function(t){var e=t.item;return[n._v(" \n    # "+n._s(e.id)+"\n  ")]}},{key:"item.status",fn:function(t){var e=t.item;return["COMPLETED"==e.status?f(c.a,{staticClass:"ma-2",attrs:{label:"",color:"blue lighten-3"}},[f(l.a,{attrs:{left:""}}),n._v(" Closed\n    ")],1):"CHECKED"==e.status?f(c.a,{staticClass:"ma-2",attrs:{label:"",color:"warning lighten-3 black--text"}},[f(l.a,{attrs:{left:""}},[n._v("mdi-check")]),n._v(" "+n._s(e.status)+"\n    ")],1):"APPROVED"==e.status?f(c.a,{staticClass:"ma-2",attrs:{label:"",color:"green lighten-3"}},[f(l.a,{attrs:{left:""}},[n._v("mdi-check-all")]),n._v(" "+n._s(e.status)+"\n    ")],1):f(c.a,{staticClass:"ma-2",attrs:{label:"",color:"gray lighten-3"}},[f(l.a,{attrs:{left:""}},[n._v("mdi-dots-horizontal")]),n._v(" "+n._s(e.status)+"\n    ")],1)]}},{key:"item.menu",fn:function(t){var e=t.item;return[f(v.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:n._u([{key:"activator",fn:function(t){var e=t.on,c=t.attrs;return[f(r.a,n._g(n._b({attrs:{icon:""}},"v-btn",c,!1),e),[f(l.a,[n._v("mdi-menu")])],1)]}}],null,!0)},[n._v(" "),f(d.a,{staticClass:"col-12 px-0"},[f(m.a,{on:{click:function(t){return n.showDetail(e)}}},[f(l.a,{staticClass:"text-sm",attrs:{left:""}},[n._v("mdi-eye")]),n._v(" "),f(_.d,[n._v("Detail")])],1),n._v(" "),f("hr"),n._v(" "),"PENDING"==e.status&&n.can(n.element_permissions.check_btn)?f(m.a,{on:{click:function(t){return n.$emit("on-stock-request-check-clicked",e)}}},[f(l.a,{staticClass:"text-sm",attrs:{left:""}},[n._v("mdi-check")]),n._v(" "),f(_.d,[n._v("Check")])],1):n._e(),n._v(" "),"CHECKED"==e.status&&n.can(n.element_permissions.approve_btn)?f(m.a,{on:{click:function(t){return n.$emit("on-stock-request-approve-clicked",e)}}},[f(l.a,{staticClass:"text-sm",attrs:{left:""}},[n._v("mdi-check")]),n._v(" "),f(_.d,[n._v("Approve")])],1):n._e(),n._v(" "),"APPROVED"==e.status&&"/stock_request/approved"==n.$nuxt.$route.path?f(m.a,{on:{click:function(t){return n.$emit("on-stock-request-issue-clicked",e)}}},[f(l.a,{staticClass:"text-sm",attrs:{left:""}},[n._v("mdi-check")]),n._v(" "),f(_.d,[n._v("Issue")])],1):n._e()],1)],1)]}}])})}),[],!1,null,null,null);e.default=component.exports},818:function(t,e,n){"use strict";n.r(e);var r=n(626),c=n(693),o=n(194),l=n(651),d=n(609),m=n(124),_=(n(39),n(289),n(13),n(14),n(12),n(6),n(16),n(10),n(17),n(1)),v=n(649),f=n(632),h=n(24),k=n(288),x=n(15);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(_.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var R={components:{StockRequestTable:v.default},middleware:["authenticated"],data:function(){return{breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/dashboard"},{text:"Issued Stock Requests",disabled:!0}],stockRequests:{paginatorInfo:{}},stockRequest:{},search:{customer_name:"",concrete_type_id:null},element_permissions:{create_btn:[{resource:x.a.STOCK_REQUEST,action:h.a.CREATE}]},loading:!0,pagination:{page:1,per_page:25},issueStockRequestDialogVisible:!1}},apollo:{stockRequests:{query:f.c,loadingKey:"loading",variables:function(){return y(y({},{}),{page:this.pagination.page,per_page:this.pagination.per_page,status:"ISSUED"})},fetchPolicy:"cache-and-network"}},methods:{can:function(t){return Object(k.a)(this.$auth.user,t)}}},j=n(60),component=Object(j.a)(R,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-5 grey lighten-3"},[e(r.a,{attrs:{stockRequests:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[e(o.a,[t._v("mdi-chevron-double-right")])]},proxy:!0}])}),t._v(" "),e("div",{staticClass:"px-4 row ma-1"},[t._m(0),t._v(" "),e(d.a),t._v(" "),e("div",{staticClass:"pr-2"})],1),t._v(" "),e("div",{staticClass:"px-5 py-3"},[e("div",{staticClass:"row mb-4"},[e(c.a,{attrs:{cols:"12",lg:"4"}},[e(m.a,{attrs:{"append-icon":"mdi-magnify",label:"Search by name, project description or phone number","single-line":"","hide-details":"",outlined:""},model:{value:t.search.customer_name,callback:function(e){t.$set(t.search,"customer_name",e)},expression:"search.customer_name"}})],1)],1),t._v(" "),e("stock-request-table",{attrs:{loading:t.loading,stockRequests:t.stockRequests.data,_pagination:t.stockRequests.paginatorInfo},on:{"on-stock-request-issue-clicked":t.onStockRequestIssueClicked}}),t._v(" "),e(l.a,{staticClass:"my-4",attrs:{length:t.stockRequests.paginatorInfo.lastPage},model:{value:t.pagination.page,callback:function(e){t.$set(t.pagination,"page",e)},expression:"pagination.page"}})],1)],1)}),[function(){var t=this,e=t._self._c;return e("div",[e("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[t._v("Stock Issuance History")]),t._v(" "),e("span",{staticClass:"grey--text text--darken-1"},[t._v("Stock Issuance Histories Are Shown Here.")])])}],!1,null,null,null);e.default=component.exports}}]);