(window.webpackJsonp=window.webpackJsonp||[]).push([[132,72],{627:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o={USER:"User",ROLE:"Role",PERMISSION:"Permission",PERMISSION_TYPE:"PermissionType",MEASUREMENT_UNIT:"MeasurementUnit",REPORT:"Report",CONFIGURATION:"Configuration",ITEM_CATEGORY:"ItemCategory",ITEM:"Item",ASSET:"Asset",STOCK_REQUEST:"StockRequest",STOCK_REQUEST_ITEM:"StockRequestItem",CONDITION:"Condition",WHERE_HOUSE:"WhereHouse",OFFICE_LOCATION:"OfficeLocation",PROGRAM_AREA:"ProgramArea",ACQUISITION_TYPE:"AcquisitionType",GOOD_RECEIVE:"GoodReceive",STOCK_ISSUE:"StockIssue"}},632:function(t,e,n){"use strict";n.d(e,"c",(function(){return R})),n.d(e,"f",(function(){return C})),n.d(e,"b",(function(){return y})),n.d(e,"d",(function(){return x})),n.d(e,"a",(function(){return O})),n.d(e,"e",(function(){return S})),n.d(e,"h",(function(){return w})),n.d(e,"g",(function(){return I}));var o,c,l,r,d,v,_,m,h,f=n(92),k=n(61),R=Object(k.a)(o||(o=Object(f.a)(["\n  query($page: Int!, $per_page: Int!, $status: StatusEnum, $where_house_id: ID) {\n    stockRequests(first: $per_page, page: $page, status: $status, where_house_id: $where_house_id) {\n      data {\n        id\n        reference_no\n        requested_date\n        requester_name\n        contact_detail\n        status\n        officeLocation {\n          id\n          address\n        } \n        whereHouse {\n          id\n          name\n          address\n        }     \n        department {\n          id\n          name\n        }\n        stockRequestItems {\n          id\n          designation_contact\n          quantity\n          description\n          contact_detail\n          goodReceiveItem {\n            id\n            description\n            received_quantity\n            balance_due\n            comment\n            unitOfMeasurement {\n              id\n              abbreviation\n            }\n            item {\n              id\n              name\n            }\n          }\n        }\n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }\n  }\n"]))),C=Object(k.a)(c||(c=Object(f.a)(["\n  query {\n    myStockRequests {\n        id\n        reference_no\n        requested_date\n        requester_name\n        contact_detail\n        status\n        officeLocation {\n          id\n          address\n        } \n        whereHouse {\n          id\n          name\n          address\n        }     \n        department {\n          id\n          name\n        }\n        stockRequestItems {\n          id\n          designation_contact\n          quantity\n          description\n          contact_detail\n          goodReceiveItem {\n            id\n            description\n            received_quantity\n            balance_due\n            comment\n            unitOfMeasurement {\n              id\n              abbreviation\n            }\n            item {\n              id\n              name\n            }\n          }\n        }\n    }\n  }\n"]))),y=Object(k.a)(l||(l=Object(f.a)(["\n  query All_STOCK_REQUEST_LOOKUP_QUERY {\n    officeLocations {\n      id\n      address\n    } \n    whereHouses {\n      id\n      name\n      address\n    }     \n    departments {\n      id\n      name\n    }\n  }\n"]))),x=Object(k.a)(r||(r=Object(f.a)(["\n  mutation ($id: ID!, $input: [ID]!) {\n    checkStockRequest(id: $id, input: $input) {\n      id\n    }\n  }\n"]))),O=Object(k.a)(d||(d=Object(f.a)(["\n  mutation ($id: ID!, $input: [ID]!) {\n    approveStockRequest(id: $id, input: $input) {\n      id\n    }\n  }\n"]))),S=Object(k.a)(v||(v=Object(f.a)(["\n  mutation ($input: StockRequestCreateInput!) {\n    createStockRequest(input: $input) {\n      id\n    }\n  }\n"]))),w=Object(k.a)(_||(_=Object(f.a)(["\n  mutation ($input: StockRequestUpdateInput!) {\n    updateStockRequest(input: $input) {\n      id\n    }\n  }\n"]))),I=(Object(k.a)(m||(m=Object(f.a)(["\n  mutation($id: ID!) {\n    deleteStockRequest(id: $id) {\n      id\n    }\n  }\n"]))),Object(k.a)(h||(h=Object(f.a)(["\n  mutation($id: ID!) {\n    rejectStockRequest(id: $id) {\n      id\n    }\n  }\n"]))))},651:function(t,e,n){"use strict";n.r(e);var o=n(177),c=n(275),l=n(788),r=n(194),d=n(269),v=n(175),_=n(86),m=n(279),h=(n(39),n(289),n(1)),f=n(15),k=n(21),R=n(288),C={props:["stockRequests","search","_pagination"],data:function(){return{pagination:{},headers:[{text:"#",class:"text-center white--text text-uppercase py-2 blue",value:"id"},{text:"Reference Number",class:"text-center white--text text-uppercase py-2 blue",value:"reference_no"},{text:"Request Date",align:"start",value:"requested_date",class:"text-center white--text text-uppercase py-2 blue"},{text:"Requester Name",value:"requester_name",class:"text-center white--text text-uppercase py-2 blue"},{text:"Office Location",class:"text-center white--text text-uppercase py-2 blue",value:"officeLocation.address"},{text:"Warehouse",class:"text-center white--text text-uppercase py-2 blue",value:"whereHouse.name"},{text:"Department",class:"text-center white--text text-uppercase py-2 blue",value:"department.name"},Object(h.a)({text:"Status",class:"text-center white--text text-uppercase py-2 blue",value:"status"},"class","text-center white--text text-uppercase py-2 blue"),Object(h.a)({text:"Action",class:"text-center white--text text-uppercase py-2 blue",value:"menu"},"class","text-center white--text text-uppercase py-2 blue")],element_permissions:{check_btn:[{resource:f.a.STOCK_REQUEST,action:k.a.CHECK}],approve_btn:[{resource:f.a.STOCK_REQUEST,action:k.a.APPROVE}]}}},methods:{can:function(t){return Object(R.a)(this.$auth.user,t)},showDetail:function(t){this.$router.push({path:"/inventory/".concat(t.id,"/edit")})}}},y=n(60),component=Object(y.a)(C,(function(){var t,e,n=this,h=n._self._c;return h(l.a,{staticClass:"elevation-1",attrs:{headers:n.headers,items:n.stockRequests,search:n.search,"hide-default-footer":!0,"items-per-page":null!==(t=null===(e=n._pagination)||void 0===e?void 0:e.perPage)&&void 0!==t?t:1e3},scopedSlots:n._u([{key:"item.id",fn:function(t){var e=t.item;return[n._v(" \n    # "+n._s(e.id)+"\n  ")]}},{key:"item.status",fn:function(t){var e=t.item;return["COMPLETED"==e.status?h(c.a,{staticClass:"ma-2",attrs:{label:"",color:"blue lighten-3"}},[h(r.a,{attrs:{left:""}}),n._v(" Closed\n    ")],1):"CHECKED"==e.status?h(c.a,{staticClass:"ma-2",attrs:{label:"",color:"warning lighten-3 black--text"}},[h(r.a,{attrs:{left:""}},[n._v("mdi-check")]),n._v(" "+n._s(e.status)+"\n    ")],1):"APPROVED"==e.status?h(c.a,{staticClass:"ma-2",attrs:{label:"",color:"green lighten-3"}},[h(r.a,{attrs:{left:""}},[n._v("mdi-check-all")]),n._v(" "+n._s(e.status)+"\n    ")],1):h(c.a,{staticClass:"ma-2",attrs:{label:"",color:"gray lighten-3"}},[h(r.a,{attrs:{left:""}},[n._v("mdi-dots-horizontal")]),n._v(" "+n._s(e.status)+"\n    ")],1)]}},{key:"item.menu",fn:function(t){var e=t.item;return[h(m.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:n._u([{key:"activator",fn:function(t){var e=t.on,c=t.attrs;return[h(o.a,n._g(n._b({attrs:{icon:""}},"v-btn",c,!1),e),[h(r.a,[n._v("mdi-menu")])],1)]}}],null,!0)},[n._v(" "),h(d.a,{staticClass:"col-12 px-0"},[h(v.a,{on:{click:function(t){return n.showDetail(e)}}},[h(r.a,{staticClass:"text-sm",attrs:{left:""}},[n._v("mdi-eye")]),n._v(" "),h(_.d,[n._v("Detail")])],1),n._v(" "),h("hr"),n._v(" "),"PENDING"==e.status&&n.can(n.element_permissions.check_btn)?h(v.a,{on:{click:function(t){return n.$emit("on-stock-request-check-clicked",e)}}},[h(r.a,{staticClass:"text-sm",attrs:{left:""}},[n._v("mdi-check")]),n._v(" "),h(_.d,[n._v("Check")])],1):n._e(),n._v(" "),"CHECKED"==e.status&&n.can(n.element_permissions.approve_btn)?h(v.a,{on:{click:function(t){return n.$emit("on-stock-request-approve-clicked",e)}}},[h(r.a,{staticClass:"text-sm",attrs:{left:""}},[n._v("mdi-check")]),n._v(" "),h(_.d,[n._v("Approve")])],1):n._e(),n._v(" "),"APPROVED"==e.status&&"/stock_request/approved"==n.$nuxt.$route.path?h(v.a,{on:{click:function(t){return n.$emit("on-stock-request-issue-clicked",e)}}},[h(r.a,{staticClass:"text-sm",attrs:{left:""}},[n._v("mdi-check")]),n._v(" "),h(_.d,[n._v("Issue")])],1):n._e()],1)],1)]}}])})}),[],!1,null,null,null);e.default=component.exports},659:function(t,e,n){"use strict";n.r(e);var o=n(276),c=n(231),l=n(652),r=n(695),d=n(633),v=n(273),_=n(696),m=n(194),h=n(175),f=n(86),k=n(786),R=n(645),C=n(609),y=(n(38),n(47),n(63),n(14),n(87),n(13),n(12),n(16),n(17),n(1)),x=(n(71),n(6),n(10),n(106)),O=n(632);function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var I={props:["stockRequest"],data:function(){return{selectedRequestItems:[],requiredRules:[function(t){return!!t||"Name field is required"}],valid:!1,allChecked:!1}},methods:w(w({},Object(x.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onCheckBoxChanged:function(t){this.$refs.form.validate()},onMainCheckBoxToggled:function(t){var e;t?this.selectedRequestItems=null===(e=this.stockRequest)||void 0===e?void 0:e.stockRequestItems.map((function(t){return t.id})):this.selectedRequestItems=[]},checkStockRequest:function(t){var e,n=this;this.selectedRequestItems.length?null!==(e=this.stockRequest)&&void 0!==e&&null!==(e=e.stockRequestItems)&&void 0!==e&&e.some((function(t){return t.quantity>t.goodReceiveItem.balance_due||t.quantity<1}))?this.errorNotification("Quantity can not be greater than available quantity!"):this.$apollo.mutate({mutation:O.d,variables:{id:this.stockRequest.id,input:this.selectedRequestItems}}).then((function(t){t.data;n.successNotification("Checked!"),n.$emit("on-close-stock-request-check-form")})).catch((function(t){console.log(t)})):this.errorNotification("Check At Least One Item!")},rejectStorkRequest:function(t){var e=this;this.$apollo.mutate({mutation:O.g,variables:{id:this.stockRequest.id}}).then((function(t){t.data;e.successNotification("Rejected!"),e.$emit("on-close-stock-request-check-form")})).catch((function(t){console.log(t)}))}}),created:function(){},watch:{$props:{handler:function(){var t;null===(t=this.stockRequest)||void 0===t||null===(t=t.stockRequestItems)||void 0===t||t.forEach((function(t){return t.checked_quantity=t.requested_quantity})),this.onMainCheckBoxToggled(!0),this.allChecked=!0},deep:!0,immediate:!0}}},j=n(60),component=Object(j.a)(I,(function(){var t,e,n,y,x,O=this,S=O._self._c;return S(o.a,[S("div",{staticClass:"grey lighten-2 pb-2"},[S(c.c,{staticClass:"text-h5 pb-0"},[O._v("\n      Stock Request Check Form\n    ")]),O._v(" "),S("span",{staticClass:"ml-4"},[O._v("Registration form")])],1),O._v(" "),S(_.a,{ref:"form",on:{submit:function(t){return t.preventDefault(),O.checkStockRequest.apply(null,arguments)}},model:{value:O.valid,callback:function(t){O.valid=t},expression:"valid"}},[S(d.a,[S("div",{staticClass:"col-12"},[S(k.a,[S(h.a,{staticClass:"col-3"},[S(f.b,[S(f.d,[O._v("Requested Date")]),O._v(" "),S(f.c,[O._v(O._s(null===(t=O.stockRequest)||void 0===t?void 0:t.requested_date))])],1)],1),O._v(" "),S(h.a,{staticClass:"col-3"},[S(f.b,[S(f.d,[O._v("Requested By")]),O._v(" "),S(f.c,[O._v(O._s(null===(e=O.stockRequest)||void 0===e?void 0:e.requester_name))])],1)],1),O._v(" "),S(h.a,{staticClass:"col-3"},[S(f.b,[S(f.d,[O._v("Department")]),O._v(" "),S(f.c,[O._v(O._s(null===(n=O.stockRequest)||void 0===n||null===(n=n.department)||void 0===n?void 0:n.name))])],1)],1),O._v(" "),S(h.a,{staticClass:"col-3"},[S(f.b,[S(f.d,[O._v("WhereHouse")]),O._v(" "),S(f.c,[O._v(O._s(null===(y=O.stockRequest)||void 0===y?void 0:y.whereHouse.name))])],1)],1)],1),O._v(" "),S(v.a,{staticClass:"my-2"}),O._v(" "),S(k.a,[S(h.a,{staticClass:"col-4"},[S(f.b,[S(f.d,[O._v("Contact Detail")]),O._v(" "),S(f.c,[O._v(O._s(null===(x=O.stockRequest)||void 0===x?void 0:x.contact_detail))])],1)],1)],1)],1),O._v(" "),S(v.a,{staticClass:"my-2"}),O._v(" "),S("div",{staticClass:"blue-grey white--text"},[S("div",{staticClass:"px-4 row ma-1 pb-2"},[S("div",{staticClass:"pt-1"},[S(c.c,{staticClass:"text-h5 pa-0"},[O._v("\n              Requested Items\n            ")]),O._v(" "),S("span",[O._v("Requested Items are listed below.")])],1),O._v(" "),S(C.a)],1),O._v(" "),S(R.a,{staticClass:"blue-grey lighten-5",scopedSlots:O._u([{key:"default",fn:function(){var t;return[S("thead",[S("tr",{staticClass:"blue-grey text-uppercase text-bold lighten-4"},[S("th",{staticClass:"text-left"},[S(l.a,{on:{change:O.onMainCheckBoxToggled},model:{value:O.allChecked,callback:function(t){O.allChecked=t},expression:"allChecked"}})],1),O._v(" "),S("th",{staticClass:"text-left font-weight-black"},[S("b",[O._v("Item")])]),O._v(" "),S("th",{staticClass:"text-left font-weight-black",staticStyle:{"max-width":"100px"}},[O._v("\n                  Balance\n                ")]),O._v(" "),S("th",{staticClass:"text-left font-weight-black"},[O._v("Contact Detail")]),O._v(" "),S("th",{staticClass:"text-left font-weight-black"},[O._v("\n                  Designation Contact\n                ")]),O._v(" "),S("th",{staticClass:"text-left font-weight-black"},[O._v("Comment")])])]),O._v(" "),S("tbody",O._l(null===(t=O.stockRequest)||void 0===t?void 0:t.stockRequestItems,(function(t){var e,n,o,c,r,d;return S("tr",{key:t.id,class:{"lime lighten-4":O.selectedRequestItems.includes(t.id)}},[S("td",{staticStyle:{width:"35px"}},[S(l.a,{attrs:{value:t.id},on:{change:O.onCheckBoxChanged},model:{value:O.selectedRequestItems,callback:function(t){O.selectedRequestItems=t},expression:"selectedRequestItems"}})],1),O._v(" "),S("td",[S("b",[O._v("\n                    "+O._s(null==t||null===(e=t.goodReceiveItem)||void 0===e||null===(e=e.item)||void 0===e?void 0:e.name)+"\n                  ")]),O._v(" "),S("br"),O._v(" "),S("span",[O._v("\n                    "+O._s(null==t||null===(n=t.goodReceiveItem)||void 0===n?void 0:n.description)+"\n                  ")])]),O._v(" "),S("td",[S("div",[O._v("\n                    Available :\n                    "),S("b",[O._v(O._s(O._f("number_format")(null==t||null===(o=t.goodReceiveItem)||void 0===o?void 0:o.balance_due))+"\n                    ")]),O._v(" "),S("small",[O._v(O._s(null==t||null===(c=t.goodReceiveItem)||void 0===c||null===(c=c.unitOfMeasurement)||void 0===c?void 0:c.abbreviation))])]),O._v(" "),S("div",[O._v("\n                    Requested :\n                    "),S("b",[O._v(O._s(O._f("number_format")(null==t?void 0:t.quantity))+" ")]),O._v(" "),S("small",[O._v(O._s(null==t||null===(r=t.goodReceiveItem)||void 0===r||null===(r=r.unitOfMeasurement)||void 0===r?void 0:r.abbreviation))])])]),O._v(" "),S("td",[O._v(O._s(t.contact_detail))]),O._v(" "),S("td",[O._v(O._s(t.designation_contact))]),O._v(" "),S("td",[O._v(O._s(null==t||null===(d=t.goodReceiveItem)||void 0===d?void 0:d.comment))])])})),0)]},proxy:!0}])})],1),O._v(" "),S(v.a,{staticClass:"my-2"}),O._v(" "),S(r.a,{staticClass:"py-3 row"},[S("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button",to:"/order/pending"},on:{click:function(t){return O.$emit("on-close-stock-request-check-form")}}},[S("span",{staticClass:"v-btn__content text-white"},[O._v(" Cancel ")])]),O._v(" "),S(C.a),O._v(" "),S("div",[S("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text red mr-5",attrs:{type:"button"},on:{click:O.rejectStorkRequest}},[S("span",{staticClass:"v-btn__content text-white"},[S(m.a,{staticClass:"mr-3"},[O._v("mdi-close")]),O._v(" | Reject\n            ")],1)]),O._v(" "),S("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[S("span",{staticClass:"v-btn__content text-white"},[S(m.a,{staticClass:"mr-3"},[O._v("mdi-check")]),O._v(" | Check\n            ")],1)])])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},660:function(t,e,n){"use strict";n.r(e);var o=n(276),c=n(231),l=n(652),r=n(695),d=n(633),v=n(273),_=n(696),m=n(194),h=n(175),f=n(86),k=n(786),R=n(645),C=n(609),y=(n(38),n(47),n(63),n(14),n(87),n(13),n(12),n(16),n(17),n(1)),x=(n(71),n(6),n(10),n(106)),O=n(632);function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var I={props:["stockRequest"],data:function(){return{selectedRequestItems:[],requiredRules:[function(t){return!!t||"Name field is required"}],valid:!1,allApproveed:!1}},methods:w(w({},Object(x.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onApproveBoxChanged:function(t){this.$refs.form.validate()},onMainApproveBoxToggled:function(t){var e;t?this.selectedRequestItems=null===(e=this.stockRequest)||void 0===e?void 0:e.stockRequestItems.map((function(t){return t.id})):this.selectedRequestItems=[]},approveStockRequest:function(t){var e,n=this;this.selectedRequestItems.length?null!==(e=this.stockRequest)&&void 0!==e&&null!==(e=e.stockRequestItems)&&void 0!==e&&e.some((function(t){return t.quantity>t.goodReceiveItem.balance_due||t.quantity<1}))?this.errorNotification("Quantity can not be greater than available quantity!"):this.$apollo.mutate({mutation:O.a,variables:{id:this.stockRequest.id,input:this.selectedRequestItems}}).then((function(t){t.data;n.successNotification("Work order approved!"),n.$emit("on-close-stock-request-approve-form")})).catch((function(t){console.log(t)})):this.errorNotification("Approve At Least One Item!")},rejectStorkRequest:function(t){var e=this;this.$apollo.mutate({mutation:O.g,variables:{id:this.stockRequest.id}}).then((function(t){t.data;e.successNotification("Rejected!"),e.$emit("on-close-stock-request-approve-form")})).catch((function(t){console.log(t)}))}}),created:function(){},watch:{$props:{handler:function(){var t;null===(t=this.stockRequest)||void 0===t||null===(t=t.stockRequestItems)||void 0===t||t.forEach((function(t){return t.approved_quantity=t.requested_quantity})),this.onMainApproveBoxToggled(!0),this.allApproveed=!0},deep:!0,immediate:!0}}},j=n(60),component=Object(j.a)(I,(function(){var t,e,n,y,x,O=this,S=O._self._c;return S(o.a,[S("div",{staticClass:"grey lighten-2 pb-2"},[S(c.c,{staticClass:"text-h5 pb-0"},[O._v("\n      Stock Request Approve Form\n    ")]),O._v(" "),S("span",{staticClass:"ml-4"},[O._v("Registration form")])],1),O._v(" "),S(_.a,{ref:"form",on:{submit:function(t){return t.preventDefault(),O.approveStockRequest.apply(null,arguments)}},model:{value:O.valid,callback:function(t){O.valid=t},expression:"valid"}},[S(d.a,[S("div",{staticClass:"col-12"},[S(k.a,[S(h.a,{staticClass:"col-3"},[S(f.b,[S(f.d,[O._v("Requested Date")]),O._v(" "),S(f.c,[O._v(O._s(null===(t=O.stockRequest)||void 0===t?void 0:t.requested_date))])],1)],1),O._v(" "),S(h.a,{staticClass:"col-3"},[S(f.b,[S(f.d,[O._v("Requested By")]),O._v(" "),S(f.c,[O._v(O._s(null===(e=O.stockRequest)||void 0===e?void 0:e.requester_name))])],1)],1),O._v(" "),S(h.a,{staticClass:"col-3"},[S(f.b,[S(f.d,[O._v("Department")]),O._v(" "),S(f.c,[O._v(O._s(null===(n=O.stockRequest)||void 0===n||null===(n=n.department)||void 0===n?void 0:n.name))])],1)],1),O._v(" "),S(h.a,{staticClass:"col-3"},[S(f.b,[S(f.d,[O._v("WhereHouse")]),O._v(" "),S(f.c,[O._v(O._s(null===(y=O.stockRequest)||void 0===y?void 0:y.whereHouse.name))])],1)],1)],1),O._v(" "),S(v.a,{staticClass:"my-2"}),O._v(" "),S(k.a,[S(h.a,{staticClass:"col-4"},[S(f.b,[S(f.d,[O._v("Contact Detail")]),O._v(" "),S(f.c,[O._v(O._s(null===(x=O.stockRequest)||void 0===x?void 0:x.contact_detail))])],1)],1)],1)],1),O._v(" "),S(v.a,{staticClass:"my-2"}),O._v(" "),S("div",{staticClass:"blue-grey white--text"},[S("div",{staticClass:"px-4 row ma-1 pb-2"},[S("div",{staticClass:"pt-1"},[S(c.c,{staticClass:"text-h5 pa-0"},[O._v("\n              Requested Items\n            ")]),O._v(" "),S("span",[O._v("Requested Items are listed below.")])],1),O._v(" "),S(C.a)],1),O._v(" "),S(R.a,{staticClass:"blue-grey lighten-5",scopedSlots:O._u([{key:"default",fn:function(){var t;return[S("thead",[S("tr",{staticClass:"blue-grey text-uppercase text-bold lighten-4"},[S("th",{staticClass:"text-left"},[S(l.a,{on:{change:O.onMainApproveBoxToggled},model:{value:O.allApproveed,callback:function(t){O.allApproveed=t},expression:"allApproveed"}})],1),O._v(" "),S("th",{staticClass:"text-left font-weight-black"},[S("b",[O._v("Item")])]),O._v(" "),S("th",{staticClass:"text-left font-weight-black",staticStyle:{"max-width":"100px"}},[O._v("\n                  Balance\n                ")]),O._v(" "),S("th",{staticClass:"text-left font-weight-black"},[O._v("Contact Detail")]),O._v(" "),S("th",{staticClass:"text-left font-weight-black"},[O._v("\n                  Designation Contact\n                ")]),O._v(" "),S("th",{staticClass:"text-left font-weight-black"},[O._v("Comment")])])]),O._v(" "),S("tbody",O._l(null===(t=O.stockRequest)||void 0===t?void 0:t.stockRequestItems,(function(t){var e,n,o,c,r,d;return S("tr",{key:t.id,class:{"lime lighten-4":O.selectedRequestItems.includes(t.id)}},[S("td",{staticStyle:{width:"35px"}},[S(l.a,{attrs:{value:t.id},on:{change:O.onApproveBoxChanged},model:{value:O.selectedRequestItems,callback:function(t){O.selectedRequestItems=t},expression:"selectedRequestItems"}})],1),O._v(" "),S("td",[S("b",[O._v("\n                    "+O._s(null==t||null===(e=t.goodReceiveItem)||void 0===e||null===(e=e.item)||void 0===e?void 0:e.name)+"\n                  ")]),O._v(" "),S("br"),O._v(" "),S("span",[O._v("\n                    "+O._s(null==t||null===(n=t.goodReceiveItem)||void 0===n?void 0:n.description)+"\n                  ")])]),O._v(" "),S("td",[S("div",[O._v("\n                    Available :\n                    "),S("b",[O._v(O._s(O._f("number_format")(null==t||null===(o=t.goodReceiveItem)||void 0===o?void 0:o.balance_due))+"\n                    ")]),O._v(" "),S("small",[O._v(O._s(null==t||null===(c=t.goodReceiveItem)||void 0===c||null===(c=c.item)||void 0===c||null===(c=c.unitOfMeasurement)||void 0===c?void 0:c.abbreviation))])]),O._v(" "),S("div",[O._v("\n                    Requested :\n                    "),S("b",[O._v(O._s(O._f("number_format")(null==t?void 0:t.quantity))+" ")]),O._v(" "),S("small",[O._v(O._s(null==t||null===(r=t.goodReceiveItem)||void 0===r||null===(r=r.item)||void 0===r||null===(r=r.unitOfMeasurement)||void 0===r?void 0:r.abbreviation))])])]),O._v(" "),S("td",[O._v(O._s(t.contact_detail))]),O._v(" "),S("td",[O._v(O._s(t.designation_contact))]),O._v(" "),S("td",[O._v(O._s(null==t||null===(d=t.goodReceiveItem)||void 0===d?void 0:d.comment))])])})),0)]},proxy:!0}])})],1),O._v(" "),S(v.a,{staticClass:"my-2"}),O._v(" "),S(r.a,{staticClass:"py-3 row"},[S("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button",to:"/order/pending"},on:{click:function(t){return O.$emit("on-close-stock-request-approve-form")}}},[S("span",{staticClass:"v-btn__content text-white"},[O._v(" Cancel ")])]),O._v(" "),S(C.a),O._v(" "),S("div",[S("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text red mr-5",attrs:{type:"button"},on:{click:O.rejectStorkRequest}},[S("span",{staticClass:"v-btn__content text-white"},[S(m.a,{staticClass:"mr-3"},[O._v("mdi-close")]),O._v(" | Reject\n            ")],1)]),O._v(" "),S("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[S("span",{staticClass:"v-btn__content text-white"},[S(m.a,{staticClass:"mr-3"},[O._v("mdi-approve")]),O._v(" | Approve\n            ")],1)])])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},831:function(t,e,n){"use strict";n.r(e);var o=n(626),c=n(695),l=n(612),r=n(194),d=n(649),v=n(609),_=n(124),m=(n(39),n(289),n(13),n(14),n(12),n(6),n(16),n(10),n(17),n(1)),h=n(651),f=n(632),k=(n(627),n(21)),R=n(288),C=n(15),y=n(659),x=n(660);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function S(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w={components:{StockRequestTable:h.default,StockRequestCheckForm:y.default,StockRequestApproveForm:x.default},middleware:["authenticated"],data:function(){return{breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/dashboard"},{text:"All Stock Requests",disabled:!0}],stockRequests:{paginatorInfo:{}},stockRequest:{},search:{customer_name:"",concrete_type_id:null},element_permissions:{create_btn:[{resource:C.a.STOCK_REQUEST,action:k.a.CREATE}]},loading:!0,pagination:{page:1,per_page:25},checkStockRequestDialogVisible:!1,approveStockRequestDialogVisible:!1}},apollo:{stockRequests:{query:f.c,loadingKey:"loading",variables:function(){var t;return S(S({},{}),{page:this.pagination.page,per_page:this.pagination.per_page,status:"PENDING",where_house_id:null===(t=this.$auth)||void 0===t||null===(t=t.user)||void 0===t||null===(t=t.whereHouse)||void 0===t?void 0:t.id})},fetchPolicy:"cache-and-network"}},methods:{can:function(t){return Object(R.a)(this.$auth.user,t)},onStockRequestCheckClicked:function(t){this.checkStockRequestDialogVisible=!0,this.stockRequest=t,console.log(this.stockRequest)},onCloseStockRequestCheckForm:function(){this.$apollo.queries.stockRequests.refetch(),this.checkStockRequestDialogVisible=!1,this.stockRequest=null},onStockRequestApproveClicked:function(t){console.log(t),this.approveStockRequestDialogVisible=!0,this.stockRequest=t},onCloseStockRequestApproveForm:function(){this.$apollo.queries.stockRequests.refetch(),this.approveStockRequestDialogVisible=!1,this.stockRequest=null}}},I=n(60),component=Object(I.a)(w,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-5 grey lighten-3"},[e(o.a,{attrs:{stockRequests:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[e(r.a,[t._v("mdi-chevron-double-right")])]},proxy:!0}])}),t._v(" "),e("div",{staticClass:"px-4 row ma-1"},[t._m(0),t._v(" "),e(v.a),t._v(" "),e("div",{staticClass:"pr-2"})],1),t._v(" "),e("div",{staticClass:"px-5 py-3"},[e("div",{staticClass:"row mb-4"},[e(c.a,{attrs:{cols:"12",lg:"4"}},[e(_.a,{attrs:{"append-icon":"mdi-magnify",label:"Search by name, project description or phone number","single-line":"","hide-details":"",outlined:""},model:{value:t.search.customer_name,callback:function(e){t.$set(t.search,"customer_name",e)},expression:"search.customer_name"}})],1)],1),t._v(" "),e("stock-request-table",{attrs:{loading:t.loading,stockRequests:t.stockRequests.data,_pagination:t.stockRequests.paginatorInfo},on:{"on-stock-request-check-clicked":t.onStockRequestCheckClicked,"on-stock-request-approve-clicked":t.onStockRequestApproveClicked}}),t._v(" "),e(d.a,{staticClass:"my-4",attrs:{length:t.stockRequests.paginatorInfo.lastPage},model:{value:t.pagination.page,callback:function(e){t.$set(t.pagination,"page",e)},expression:"pagination.page"}})],1),t._v(" "),e(l.a,{attrs:{width:"85%"},on:{"click:outside":t.onCloseStockRequestCheckForm},model:{value:t.checkStockRequestDialogVisible,callback:function(e){t.checkStockRequestDialogVisible=e},expression:"checkStockRequestDialogVisible"}},[e("stock-request-check-form",{attrs:{stockRequest:t.stockRequest},on:{"on-close-stock-request-check-form":t.onCloseStockRequestCheckForm}})],1),t._v(" "),e(l.a,{attrs:{width:"85%"},on:{"click:outside":t.onCloseStockRequestApproveForm},model:{value:t.approveStockRequestDialogVisible,callback:function(e){t.approveStockRequestDialogVisible=e},expression:"approveStockRequestDialogVisible"}},[e("stock-request-approve-form",{attrs:{stockRequest:t.stockRequest},on:{"on-close-stock-request-approve-form":t.onCloseStockRequestApproveForm}})],1)],1)}),[function(){var t=this,e=t._self._c;return e("div",[e("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[t._v("New Stock Requests")]),t._v(" "),e("span",{staticClass:"grey--text text--darken-1"},[t._v("New Stock Requests Are Shown Here.")])])}],!1,null,null,null);e.default=component.exports}}]);