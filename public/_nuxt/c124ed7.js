(window.webpackJsonp=window.webpackJsonp||[]).push([[111,64],{626:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o={USER:"User",ROLE:"Role",PERMISSION:"Permission",PERMISSION_TYPE:"PermissionType",MEASUREMENT_UNIT:"MeasurementUnit",REPORT:"Report",CONFIGURATION:"Configuration",ITEM_CATEGORY:"ItemCategory",ITEM:"Item",ASSET:"Asset",STOCK_REQUEST:"StockRequest",STOCK_REQUEST_ITEM:"StockRequestItem",CONDITION:"Condition",WHERE_HOUSE:"WhereHouse",OFFICE_LOCATION:"OfficeLocation",PROGRAM_AREA:"ProgramArea",ACQUISITION_TYPE:"AcquisitionType"}},631:function(t,e,n){"use strict";n.d(e,"c",(function(){return k})),n.d(e,"b",(function(){return h})),n.d(e,"d",(function(){return O})),n.d(e,"a",(function(){return y})),n.d(e,"e",(function(){return R})),n.d(e,"f",(function(){return C}));var o,c,r,l,d,v,_,m=n(92),f=n(61),k=Object(f.a)(o||(o=Object(m.a)(["\n  query($page: Int!, $per_page: Int!, $status: StatusEnum) {\n    stockRequests(first: $per_page, page: $page, status: $status) {\n      data {\n        id\n        reference_no\n        requested_date\n        requester_name\n        contact_detail\n        status\n        officeLocation {\n          id\n          address\n        } \n        whereHouse {\n          id\n          name\n          address\n        }     \n        department {\n          id\n          name\n        }\n        stockRequestItems {\n          id\n          designation_contact\n          quantity\n          description\n          contact_detail\n          goodReceiveItem {\n            id\n            description\n            received_quantity\n            comment\n            unitOfMeasurement {\n              id\n              abbreviation\n            }\n            item {\n              id\n              name\n            }\n          }\n        }\n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }\n  }\n"]))),h=Object(f.a)(c||(c=Object(m.a)(["\n  query All_STOCK_REQUEST_LOOKUP_QUERY {\n    officeLocations {\n      id\n      address\n    } \n    whereHouses {\n      id\n      name\n      address\n    }     \n    departments {\n      id\n      name\n    }\n  }\n"]))),O=Object(f.a)(r||(r=Object(m.a)(["\n  mutation ($id: ID!, $input: [ID]!) {\n    checkStockRequest(id: $id, input: $input) {\n      id\n    }\n  }\n"]))),y=Object(f.a)(l||(l=Object(m.a)(["\n  mutation ($id: ID!, $input: [ID]!) {\n    approveStockRequest(id: $id, input: $input) {\n      id\n    }\n  }\n"]))),R=Object(f.a)(d||(d=Object(m.a)(["\n  mutation ($input: StockRequestCreateInput!) {\n    createStockRequest(input: $input) {\n      id\n    }\n  }\n"]))),C=Object(f.a)(v||(v=Object(m.a)(["\n  mutation ($input: StockRequestUpdateInput!) {\n    updateStockRequest(input: $input) {\n      id\n    }\n  }\n"])));Object(f.a)(_||(_=Object(m.a)(["\n  mutation($id: ID!) {\n    deleteStockRequest(id: $id) {\n      id\n    }\n  }\n"])))},655:function(t,e,n){"use strict";n.r(e);var o=n(177),c=n(275),r=n(759),l=n(194),d=n(269),v=n(175),_=n(86),m=n(279),f=(n(39),n(288),n(1)),k=n(18),h=n(26),O=n(289),y={props:["stockRequests","search","_pagination"],data:function(){return{pagination:{},headers:[{text:"Reference Number",class:"blue-grey lighten-3",value:"reference_no"},{text:"Request Date",align:"start",value:"requested_date",class:"blue-grey lighten-3"},{text:"Requester Name",value:"requester_name",class:"blue-grey lighten-3"},{text:"Office Location",class:"blue-grey lighten-3",value:"officeLocation.address"},{text:"Warehouse",class:"blue-grey lighten-3",value:"whereHouse.name"},{text:"Department",class:"blue-grey lighten-3",value:"department.name"},Object(f.a)({text:"Status",class:"blue-grey lighten-3",value:"status"},"class","blue-grey lighten-3"),Object(f.a)({text:"Action",class:"blue-grey lighten-3",value:"menu"},"class","blue-grey lighten-3")],element_permissions:{check_btn:[{resource:k.a.STOCK_REQUEST,action:h.a.CHECK}],approve_btn:[{resource:k.a.STOCK_REQUEST,action:h.a.APPROVE}]}}},methods:{can:function(t){return Object(O.a)(this.$auth.user,t)},showDetail:function(t){this.$router.push({path:"/inventory/".concat(t.id,"/edit")})}}},R=n(60),component=Object(R.a)(y,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.stockRequests,search:t.search,"hide-default-footer":!0,"items-per-page":t._pagination.perPage},scopedSlots:t._u([{key:"item.status",fn:function(n){var o=n.item;return["COMPLETED"==o.status?e(c.a,{staticClass:"ma-2",attrs:{label:"",color:"blue lighten-3"}},[e(l.a,{attrs:{left:""}}),t._v(" Closed\n    ")],1):"CHECKED"==o.status?e(c.a,{staticClass:"ma-2",attrs:{label:"",color:"warning lighten-3 black--text"}},[e(l.a,{attrs:{left:""}},[t._v("mdi-check")]),t._v(" "+t._s(o.status)+"\n    ")],1):"APPROVED"==o.status?e(c.a,{staticClass:"ma-2",attrs:{label:"",color:"green lighten-3"}},[e(l.a,{attrs:{left:""}},[t._v("mdi-check-all")]),t._v(" "+t._s(o.status)+"\n    ")],1):e(c.a,{staticClass:"ma-2",attrs:{label:"",color:"gray lighten-3"}},[e(l.a,{attrs:{left:""}},[t._v("mdi-dots-horizontal")]),t._v(" "+t._s(o.status)+"\n    ")],1)]}},{key:"item.menu",fn:function(n){var c=n.item;return[e(m.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var c=n.on,r=n.attrs;return[e(o.a,t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),c),[e(l.a,[t._v("mdi-menu")])],1)]}}],null,!0)},[t._v(" "),e(d.a,{staticClass:"col-12 px-0"},[e(v.a,{on:{click:function(e){return t.showDetail(c)}}},[e(l.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-eye")]),t._v(" "),e(_.d,[t._v("Detail")])],1),t._v(" "),e("hr"),t._v(" "),"PENDING"==c.status&&t.can(t.element_permissions.check_btn)?e(v.a,{on:{click:function(e){return t.$emit("on-stock-request-check-clicked",c)}}},[e(l.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-check")]),t._v(" "),e(_.d,[t._v("Check")])],1):t._e(),t._v(" "),"CHECKED"==c.status&&t.can(t.element_permissions.approve_btn)?e(v.a,{on:{click:function(e){return t.$emit("on-stock-request-approve-clicked",c)}}},[e(l.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-check")]),t._v(" "),e(_.d,[t._v("Approve")])],1):t._e(),t._v(" "),"APPROVED"==c.status&&"/stock_request/approved"==t.$nuxt.$route.path?e(v.a,{on:{click:function(e){return t.$emit("on-stock-request-issue-clicked",c)}}},[e(l.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-check")]),t._v(" "),e(_.d,[t._v("Issue")])],1):t._e()],1)],1)]}}])})}),[],!1,null,null,null);e.default=component.exports},695:function(t,e,n){"use strict";n.r(e);var o,c,r,l,d=n(276),v=n(231),_=n(649),m=n(690),f=n(632),k=n(273),h=n(691),O=n(194),y=n(175),R=n(86),C=n(758),I=n(645),S=n(607),j=n(124),x=(n(38),n(14),n(87),n(13),n(12),n(6),n(15),n(10),n(16),n(1)),E=n(106),$=n(92),P=n(61),w=(Object(P.a)(o||(o=Object($.a)(["\n  query($page: Int!, $per_page: Int!, $status: StatusEnum) {\n    stockIssues(first: $per_page, page: $page, status: $status) {\n      data {\n        id\n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }\n  }\n"]))),Object(P.a)(c||(c=Object($.a)(["\n  mutation ($input: StockIssueCreateInput!) {\n    createStockIssue(input: $input) {\n      id\n    }\n  }\n"]))));Object(P.a)(r||(r=Object($.a)(["\n  mutation ($input: StockIssueUpdateInput!) {\n    updateStockIssue(input: $input) {\n      id\n    }\n  }\n"]))),Object(P.a)(l||(l=Object($.a)(["\n  mutation($id: ID!) {\n    deleteStockIssue(id: $id) {\n      id\n    }\n  }\n"])));function D(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function T(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?D(Object(source),!0).forEach((function(e){Object(x.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):D(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var A={props:["stockRequest"],data:function(){return{fieldRequiredRole:[function(t){return!!t||"This field is required"}],stockIssue:{},valid:!1}},methods:T(T({},Object(E.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{issueStockRequest:function(t){var e=this;this.stockIssue.stock_request_id=parseInt(this.stockRequest.id),this.$apollo.mutate({mutation:w,variables:{input:this.stockIssue}}).then((function(n){n.data;e.successNotification("Work order issued!"),t.target.reset(),e.$emit("on-close-stock-issue-form")})).catch((function(t){console.log(t)}))}}),created:function(){}},N=n(60),component=Object(N.a)(A,(function(){var t,e,n,o,c,r,l=this,x=l._self._c;return x(d.a,[x("div",{staticClass:"grey lighten-2 pb-2"},[x(v.c,{staticClass:"text-h5 pb-0"},[l._v("\n      Stock Request Issue Form\n    ")]),l._v(" "),x("span",{staticClass:"ml-4"},[l._v("Registration form")])],1),l._v(" "),x(h.a,{ref:"form",on:{submit:function(t){return t.preventDefault(),l.issueStockRequest.apply(null,arguments)}},model:{value:l.valid,callback:function(t){l.valid=t},expression:"valid"}},[x(f.a,[x("div",{staticClass:"col-12"},[x(C.a,[x(y.a,{staticClass:"col-3"},[x(R.b,[x(R.d,[l._v("Requested Date")]),l._v(" "),x(R.c,[l._v(l._s(null===(t=l.stockRequest)||void 0===t?void 0:t.requested_date))])],1)],1),l._v(" "),x(y.a,{staticClass:"col-3"},[x(R.b,[x(R.d,[l._v("Requested By")]),l._v(" "),x(R.c,[l._v(l._s(null===(e=l.stockRequest)||void 0===e||null===(e=e.createdBy)||void 0===e?void 0:e.name))])],1)],1),l._v(" "),x(y.a,{staticClass:"col-3"},[x(R.b,[x(R.d,[l._v("Department")]),l._v(" "),x(R.c,[l._v(l._s(null===(n=l.stockRequest)||void 0===n||null===(n=n.department)||void 0===n?void 0:n.name))])],1)],1),l._v(" "),x(y.a,{staticClass:"col-3"},[x(R.b,[x(R.d,[l._v("Project")]),l._v(" "),x(R.c,[l._v(l._s(null===(o=l.stockRequest)||void 0===o||null===(o=o.project)||void 0===o?void 0:o.name))])],1)],1)],1),l._v(" "),x(k.a,{staticClass:"my-2"}),l._v(" "),x(C.a,[x(y.a,{staticClass:"col-6"},[x(R.b,[x(R.d,[l._v("Purpose")]),l._v(" "),x(R.c,[l._v(l._s(null===(c=l.stockRequest)||void 0===c?void 0:c.purpose))])],1)],1),l._v(" "),x(y.a,{staticClass:"col-6"},[x(R.b,[x(R.d,[l._v("Specifications")]),l._v(" "),x(R.c,[l._v(l._s(null===(r=l.stockRequest)||void 0===r?void 0:r.specifications)+"\n              ")])],1)],1)],1),l._v(" "),x(k.a,{staticClass:"my-5"}),l._v(" "),x(C.a,[x(m.a,{attrs:{cols:"12",md:"3"}},[x(_.a,{staticClass:"py-0 mx-auto",attrs:{label:"Waybill ",outlined:"",required:""},model:{value:l.stockIssue.waybill,callback:function(t){l.$set(l.stockIssue,"waybill",t)},expression:"stockIssue.waybill"}})],1),l._v(" "),x(m.a,{attrs:{cols:"12",md:"3"}},[x(j.a,{staticClass:"py-0",attrs:{label:"Issued Date ",outlined:"",required:"",type:"date",rules:l.fieldRequiredRole},model:{value:l.stockIssue.date,callback:function(t){l.$set(l.stockIssue,"date",t)},expression:"stockIssue.date"}})],1),l._v(" "),x(m.a,{attrs:{cols:"12",md:"3"}},[x(j.a,{staticClass:"py-0",attrs:{label:"Transport Mode ",outlined:"",required:""},model:{value:l.stockIssue.transport_mode,callback:function(t){l.$set(l.stockIssue,"transport_mode",t)},expression:"stockIssue.transport_mode"}})],1),l._v(" "),x(m.a,{attrs:{cols:"12",md:"3"}},[x(j.a,{staticClass:"py-0",attrs:{label:"Rate Of Charge ",outlined:"",required:"",type:"number",step:"any"},model:{value:l.stockIssue.rate_of_charge,callback:function(t){l.$set(l.stockIssue,"rate_of_charge",l._n(t))},expression:"stockIssue.rate_of_charge"}})],1),l._v(" "),x(m.a,{attrs:{cols:"12",md:"4"}},[x(j.a,{staticClass:"py-0",attrs:{label:"Transported By ",outlined:"",required:""},model:{value:l.stockIssue.transported_by,callback:function(t){l.$set(l.stockIssue,"transported_by",t)},expression:"stockIssue.transported_by"}})],1),l._v(" "),x(m.a,{attrs:{cols:"12",md:"4"}},[x(j.a,{staticClass:"py-0",attrs:{label:"From ",outlined:"",required:""},model:{value:l.stockIssue.from,callback:function(t){l.$set(l.stockIssue,"from",t)},expression:"stockIssue.from"}})],1),l._v(" "),x(m.a,{attrs:{cols:"12",md:"4"}},[x(j.a,{staticClass:"py-0",attrs:{label:"To ",outlined:"",required:""},model:{value:l.stockIssue.to,callback:function(t){l.$set(l.stockIssue,"to",t)},expression:"stockIssue.to"}})],1)],1)],1),l._v(" "),x(k.a,{staticClass:"my-2"}),l._v(" "),x("div",{staticClass:"blue-grey white--text"},[x("div",{staticClass:"px-4 row ma-1 pb-2"},[x("div",{staticClass:"pt-1"},[x(v.c,{staticClass:"text-h5 pa-0"},[l._v("\n              Requested Items\n            ")]),l._v(" "),x("span",[l._v("Requested Items are listed below.")])],1),l._v(" "),x(S.a)],1),l._v(" "),x(I.a,{staticClass:"blue-grey lighten-5",scopedSlots:l._u([{key:"default",fn:function(){var t;return[x("thead",[x("tr",{staticClass:"blue-grey text-uppercase text-bold lighten-4"},[x("th",{staticClass:"text-left font-weight-black"},[x("b",[l._v("Item")])]),l._v(" "),x("th",{staticClass:"text-left font-weight-black"},[l._v("Quantity")]),l._v(" "),x("th",{staticClass:"text-left font-weight-black"},[l._v("\n                  Designation Contact\n                ")]),l._v(" "),x("th",{staticClass:"text-left font-weight-black"},[l._v("Description")])])]),l._v(" "),x("tbody",l._l(null===(t=l.stockRequest)||void 0===t?void 0:t.stockRequestItems,(function(t){var e,n;return x("tr",{key:t.id},[x("td",[x("b",[l._v(l._s(null==t||null===(e=t.item)||void 0===e?void 0:e.name))])]),l._v(" "),x("td",[x("b",[l._v(l._s(l._f("number_format")(t.quantity))+" /")]),l._v(" "),x("small",[l._v(" "+l._s(null==t||null===(n=t.item)||void 0===n||null===(n=n.unitOfMeasurement)||void 0===n?void 0:n.abbreviation))])]),l._v(" "),x("td",[l._v(l._s(t.designation_contact))]),l._v(" "),x("td",[l._v(l._s(t.description))])])})),0)]},proxy:!0}])})],1),l._v(" "),x(k.a,{staticClass:"my-2"}),l._v(" "),x(m.a,{staticClass:"py-3 row"},[x("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button",to:"/order/pending"},on:{click:function(t){return l.$emit("on-close-stock-issue-form")}}},[x("span",{staticClass:"v-btn__content text-white"},[l._v(" Cancel ")])]),l._v(" "),x(S.a),l._v(" "),x("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[x("span",{staticClass:"v-btn__content text-white"},[x(O.a,{staticClass:"mr-3"},[l._v("mdi-issue")]),l._v(" | Issue\n          ")],1)])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},794:function(t,e,n){"use strict";n.r(e);var o=n(625),c=n(690),r=n(610),l=n(194),d=n(651),v=n(607),_=n(124),m=(n(39),n(288),n(13),n(14),n(12),n(6),n(15),n(10),n(16),n(1)),f=n(655),k=n(631),h=(n(626),n(26)),O=n(289),y=n(18),R=n(695);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function I(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S={components:{StockRequestTable:f.default,StockIssueForm:R.default},middleware:["authenticated"],data:function(){return{breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/dashboard"},{text:"All Stock Requests",disabled:!0}],stockRequests:{paginatorInfo:{}},stockRequest:{},search:{customer_name:"",concrete_type_id:null},element_permissions:{create_btn:[{resource:y.a.STOCK_REQUEST,action:h.a.CREATE}]},loading:!0,pagination:{page:1,per_page:25},issueStockRequestDialogVisible:!1}},apollo:{stockRequests:{query:k.c,loadingKey:"loading",variables:function(){return I(I({},{}),{page:this.pagination.page,per_page:this.pagination.per_page,status:"APPROVED"})},fetchPolicy:"cache-and-network"}},methods:{can:function(t){return Object(O.a)(this.$auth.user,t)},onStockRequestIssueClicked:function(t){this.issueStockRequestDialogVisible=!0,this.stockRequest=t,console.log(this.stockRequest)},onCloseStockIssueForm:function(){this.$apollo.queries.stockRequests.refetch(),this.issueStockRequestDialogVisible=!1,this.stockRequest=null}}},j=n(60),component=Object(j.a)(S,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-5 grey lighten-3"},[e(o.a,{attrs:{stockRequests:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[e(l.a,[t._v("mdi-chevron-double-right")])]},proxy:!0}])}),t._v(" "),e("div",{staticClass:"px-4 row ma-1"},[t._m(0),t._v(" "),e(v.a),t._v(" "),e("div",{staticClass:"pr-2"})],1),t._v(" "),e("div",{staticClass:"px-5 py-3"},[e("div",{staticClass:"row mb-4"},[e(c.a,{attrs:{cols:"12",lg:"4"}},[e(_.a,{attrs:{"append-icon":"mdi-magnify",label:"Search by name, project description or phone number","single-line":"","hide-details":"",outlined:""},model:{value:t.search.customer_name,callback:function(e){t.$set(t.search,"customer_name",e)},expression:"search.customer_name"}})],1)],1),t._v(" "),e("stock-request-table",{attrs:{loading:t.loading,stockRequests:t.stockRequests.data,_pagination:t.stockRequests.paginatorInfo},on:{"on-stock-request-issue-clicked":t.onStockRequestIssueClicked}}),t._v(" "),e(d.a,{staticClass:"my-4",attrs:{length:t.stockRequests.paginatorInfo.lastPage},model:{value:t.pagination.page,callback:function(e){t.$set(t.pagination,"page",e)},expression:"pagination.page"}})],1),t._v(" "),e(r.a,{attrs:{width:"85%"},on:{"click:outside":t.onCloseStockIssueForm},model:{value:t.issueStockRequestDialogVisible,callback:function(e){t.issueStockRequestDialogVisible=e},expression:"issueStockRequestDialogVisible"}},[e("stock-issue-form",{attrs:{stockRequest:t.stockRequest},on:{"on-close-stock-issue-form":t.onCloseStockIssueForm}})],1)],1)}),[function(){var t=this,e=t._self._c;return e("div",[e("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[t._v("Approved Stock Requests")]),t._v(" "),e("span",{staticClass:"grey--text text--darken-1"},[t._v("Approved Stock Requests Are Shown Here.")])])}],!1,null,null,null);e.default=component.exports}}]);