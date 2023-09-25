(window.webpackJsonp=window.webpackJsonp||[]).push([[98,57],{617:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o={USER:"User",ROLE:"Role",PERMISSION:"Permission",PERMISSION_TYPE:"PermissionType",MEASUREMENT_UNIT:"MeasurementUnit",REPORT:"Report",CONFIGURATION:"Configuration",ITEM_CATEGORY:"ItemCategory",ITEM:"Item",ASSET:"Asset",STOCK_REQUEST:"StockRequest",STOCK_REQUEST_ITEM:"StockRequestItem",CONDITION:"Condition",WHERE_HOUSE:"WhereHouse",OFFICE_LOCATION:"OfficeLocation",PROGRAM_AREA:"ProgramArea",ACQUISITION_TYPE:"AcquisitionType"}},626:function(t,e,n){"use strict";n.d(e,"c",(function(){return m})),n.d(e,"b",(function(){return k})),n.d(e,"d",(function(){return C})),n.d(e,"a",(function(){return R})),n.d(e,"e",(function(){return y})),n.d(e,"f",(function(){return O}));var o,c,r,l,d,v,_,h=n(91),f=n(60),m=Object(f.a)(o||(o=Object(h.a)(["\n  query($page: Int!, $per_page: Int!, $status: StatusEnum) {\n    stockRequests(first: $per_page, page: $page, status: $status) {\n      data {\n        id\n        reference_no\n        requested_date\n        requester_name\n        contact_detail\n        status\n        officeLocation {\n          id\n          address\n        } \n        whereHouse {\n          id\n          name\n          address\n        }     \n        department {\n          id\n          name\n        }\n        stockRequestItems {\n          id\n          designation_contact\n          quantity\n          description\n          contact_detail\n          item {\n            id\n            name\n            unitOfMeasurement {\n              id\n              name\n              abbreviation\n            }\n          }\n        }\n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }\n  }\n"]))),k=Object(f.a)(c||(c=Object(h.a)(["\n  query All_STOCK_REQUEST_LOOKUP_QUERY {\n    officeLocations {\n      id\n      address\n    } \n    whereHouses {\n      id\n      name\n      address\n    }     \n    departments {\n      id\n      name\n    }\n  }\n"]))),C=Object(f.a)(r||(r=Object(h.a)(["\n  mutation ($id: ID!, $input: [ID]!) {\n    checkStockRequest(id: $id, input: $input) {\n      id\n    }\n  }\n"]))),R=Object(f.a)(l||(l=Object(h.a)(["\n  mutation ($id: ID!, $input: [ID]!) {\n    approveStockRequest(id: $id, input: $input) {\n      id\n    }\n  }\n"]))),y=Object(f.a)(d||(d=Object(h.a)(["\n  mutation ($input: StockRequestCreateInput!) {\n    createStockRequest(input: $input) {\n      id\n    }\n  }\n"]))),O=Object(f.a)(v||(v=Object(h.a)(["\n  mutation ($input: StockRequestUpdateInput!) {\n    updateStockRequest(input: $input) {\n      id\n    }\n  }\n"])));Object(f.a)(_||(_=Object(h.a)(["\n  mutation($id: ID!) {\n    deleteStockRequest(id: $id) {\n      id\n    }\n  }\n"])))},640:function(t,e,n){"use strict";n.r(e);var o=n(177),c=n(268),r=n(738),l=n(213),d=n(264),v=n(175),_=n(84),h=n(272),f=(n(38),n(279),n(1)),m=n(19),k=n(27),C=n(280),R={props:["stockRequests","search","_pagination"],data:function(){return{pagination:{},headers:[{text:"Reference Number",class:"blue-grey lighten-3",value:"reference_no"},{text:"Request Date",align:"start",value:"requested_date",class:"blue-grey lighten-3"},{text:"Requester Name",value:"requester_name",class:"blue-grey lighten-3"},{text:"Office Location",class:"blue-grey lighten-3",value:"officeLocation.address"},{text:"Warehouse",class:"blue-grey lighten-3",value:"whereHouse.name"},{text:"Department",class:"blue-grey lighten-3",value:"department.name"},Object(f.a)({text:"Status",class:"blue-grey lighten-3",value:"status"},"class","blue-grey lighten-3"),Object(f.a)({text:"Action",class:"blue-grey lighten-3",value:"menu"},"class","blue-grey lighten-3")],element_permissions:{complete_btn:[{resource:m.a.ITEM,action:k.a.COMPLETE}]}}},methods:{can:function(t){return Object(C.a)(this.$auth.user,t)},showDetail:function(t){this.$router.push({path:"/inventory/".concat(t.id,"/edit")})}}},y=n(90),component=Object(y.a)(R,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.stockRequests,search:t.search,"hide-default-footer":!0,"items-per-page":t._pagination.perPage},scopedSlots:t._u([{key:"item.status",fn:function(n){var o=n.item;return["COMPLETED"==o.status?e(c.a,{staticClass:"ma-2",attrs:{label:"",color:"blue lighten-3"}},[e(l.a,{attrs:{left:""}}),t._v(" Closed\n    ")],1):"CHECKED"==o.status?e(c.a,{staticClass:"ma-2",attrs:{label:"",color:"warning lighten-3 black--text"}},[e(l.a,{attrs:{left:""}},[t._v("mdi-check")]),t._v(" "+t._s(o.status)+"\n    ")],1):"APPROVED"==o.status?e(c.a,{staticClass:"ma-2",attrs:{label:"",color:"green lighten-3"}},[e(l.a,{attrs:{left:""}},[t._v("mdi-check-all")]),t._v(" "+t._s(o.status)+"\n    ")],1):e(c.a,{staticClass:"ma-2",attrs:{label:"",color:"gray lighten-3"}},[e(l.a,{attrs:{left:""}},[t._v("mdi-dots-horizontal")]),t._v(" "+t._s(o.status)+"\n    ")],1)]}},{key:"item.menu",fn:function(n){var c=n.item;return[e(h.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var c=n.on,r=n.attrs;return[e(o.a,t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),c),[e(l.a,[t._v("mdi-menu")])],1)]}}],null,!0)},[t._v(" "),e(d.a,{staticClass:"col-12 px-0"},[e(v.a,{on:{click:function(e){return t.showDetail(c)}}},[e(l.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-eye")]),t._v(" "),e(_.c,[t._v("Detail")])],1),t._v(" "),e("hr"),t._v(" "),"PENDING"==c.status?e(v.a,{on:{click:function(e){return t.$emit("on-stock-request-check-clicked",c)}}},[e(l.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-check")]),t._v(" "),e(_.c,[t._v("Check")])],1):t._e(),t._v(" "),"CHECKED"==c.status?e(v.a,{on:{click:function(e){return t.$emit("on-stock-request-approve-clicked",c)}}},[e(l.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-check")]),t._v(" "),e(_.c,[t._v("Approve")])],1):t._e(),t._v(" "),"APPROVED"==c.status&&"/stock_request/approved"==t.$nuxt.$route.path?e(v.a,{on:{click:function(e){return t.$emit("on-stock-request-issue-clicked",c)}}},[e(l.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-check")]),t._v(" "),e(_.c,[t._v("Issue")])],1):t._e()],1)],1)]}}])})}),[],!1,null,null,null);e.default=component.exports},651:function(t,e,n){"use strict";n.r(e);var o=n(269),c=n(278),r=n(637),l=n(668),d=n(635),v=n(267),_=n(669),h=n(213),f=n(175),m=n(84),k=n(736),C=n(638),R=n(596),y=(n(39),n(48),n(70),n(14),n(85),n(13),n(12),n(16),n(17),n(1)),O=(n(69),n(6),n(10),n(106)),x=n(626);function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function I(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w={props:["stockRequest"],data:function(){return{selectedRequestItems:[],requiredRules:[function(t){return!!t||"Name field is required"}],valid:!1,allChecked:!1}},methods:I(I({},Object(O.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onCheckBoxChanged:function(t){this.$refs.form.validate()},onMainCheckBoxToggled:function(t){var e;t?this.selectedRequestItems=null===(e=this.stockRequest)||void 0===e?void 0:e.stockRequestItems.map((function(t){return t.id})):this.selectedRequestItems=[]},checkStockRequest:function(t){var e=this;this.selectedRequestItems.length?this.$apollo.mutate({mutation:x.d,variables:{id:this.stockRequest.id,input:this.selectedRequestItems}}).then((function(n){n.data;e.successNotification("Work order checked!"),t.target.reset(),e.$emit("on-close-stock-request-check-form")})).catch((function(t){console.log(t)})):this.errorNotification("Check At Least One Item!")}}),created:function(){},watch:{$props:{handler:function(){var t;null===(t=this.stockRequest)||void 0===t||null===(t=t.stockRequestItems)||void 0===t||t.forEach((function(t){return t.checked_quantity=t.requested_quantity})),this.onMainCheckBoxToggled(!0),this.allChecked=!0},deep:!0,immediate:!0}}},j=n(90),component=Object(j.a)(w,(function(){var t,e,n,y,O,x,S=this,I=S._self._c;return I(o.a,[I("div",{staticClass:"grey lighten-2 pb-2"},[I(c.c,{staticClass:"text-h5 pb-0"},[S._v("\n        Stock Request Check Form\n      ")]),S._v(" "),I("span",{staticClass:"ml-4"},[S._v("Registration form")])],1),S._v(" "),I(_.a,{ref:"form",on:{submit:function(t){return t.preventDefault(),S.checkStockRequest.apply(null,arguments)}},model:{value:S.valid,callback:function(t){S.valid=t},expression:"valid"}},[I(d.a,[I("div",{staticClass:"col-12"},[I(k.a,[I(f.a,{staticClass:"col-3"},[I(m.a,[I(m.c,[S._v("Requested Date")]),S._v(" "),I(m.b,[S._v(S._s(null===(t=S.stockRequest)||void 0===t?void 0:t.requested_date))])],1)],1),S._v(" "),I(f.a,{staticClass:"col-3"},[I(m.a,[I(m.c,[S._v("Requested By")]),S._v(" "),I(m.b,[S._v(S._s(null===(e=S.stockRequest)||void 0===e||null===(e=e.createdBy)||void 0===e?void 0:e.name))])],1)],1),S._v(" "),I(f.a,{staticClass:"col-3"},[I(m.a,[I(m.c,[S._v("Department")]),S._v(" "),I(m.b,[S._v(S._s(null===(n=S.stockRequest)||void 0===n||null===(n=n.department)||void 0===n?void 0:n.name))])],1)],1),S._v(" "),I(f.a,{staticClass:"col-3"},[I(m.a,[I(m.c,[S._v("Project")]),S._v(" "),I(m.b,[S._v(S._s(null===(y=S.stockRequest)||void 0===y||null===(y=y.project)||void 0===y?void 0:y.name))])],1)],1)],1),S._v(" "),I(v.a,{staticClass:"my-2"}),S._v(" "),I(k.a,[I(f.a,{staticClass:"col-4"},[I(m.a,[I(m.c,[S._v("Purpose")]),S._v(" "),I(m.b,[S._v(S._s(null===(O=S.stockRequest)||void 0===O?void 0:O.purpose))])],1)],1)],1),S._v(" "),I(v.a,{staticClass:"my-2"}),S._v(" "),I(k.a,[I(f.a,{staticClass:"col-4"},[I(m.a,[I(m.c,[S._v("Specifications")]),S._v(" "),I(m.b,[S._v(S._s(null===(x=S.stockRequest)||void 0===x?void 0:x.specifications)+" \n")])],1)],1)],1)],1),S._v(" "),I(v.a,{staticClass:"my-2"}),S._v(" "),I("div",{staticClass:"blue-grey white--text"},[I("div",{staticClass:"px-4 row ma-1 pb-2"},[I("div",{staticClass:"pt-1"},[I(c.c,{staticClass:"text-h5 pa-0"},[S._v("\n                Requested Items\n              ")]),S._v(" "),I("span",[S._v("Requested Items are listed below.")])],1),S._v(" "),I(R.a)],1),S._v(" "),I(C.a,{staticClass:"blue-grey lighten-5",scopedSlots:S._u([{key:"default",fn:function(){var t;return[I("thead",[I("tr",{staticClass:"blue-grey text-uppercase text-bold lighten-4"},[I("th",{staticClass:"text-left"},[I(r.a,{on:{change:S.onMainCheckBoxToggled},model:{value:S.allChecked,callback:function(t){S.allChecked=t},expression:"allChecked"}})],1),S._v(" "),I("th",{staticClass:"text-left font-weight-black"},[I("b",[S._v("Item")])]),S._v(" "),I("th",{staticClass:"text-left font-weight-black"},[S._v("Quantity")]),S._v(" "),I("th",{staticClass:"text-left font-weight-black"},[S._v("Contact Detail")]),S._v(" "),I("th",{staticClass:"text-left font-weight-black"},[S._v("Designation Contact")]),S._v(" "),I("th",{staticClass:"text-left font-weight-black"},[S._v("Description")])])]),S._v(" "),I("tbody",S._l(null===(t=S.stockRequest)||void 0===t?void 0:t.stockRequestItems,(function(t){return I("tr",{key:t.id,class:{"lime lighten-4":S.selectedRequestItems.includes(t.id)}},[I("td",{staticStyle:{width:"35px"}},[I(r.a,{attrs:{value:t.id},on:{change:S.onCheckBoxChanged},model:{value:S.selectedRequestItems,callback:function(t){S.selectedRequestItems=t},expression:"selectedRequestItems"}})],1),S._v(" "),I("td",[S._v(S._s(t.item.name)+" "+S._s(t.item.unitOfMeasurement.name))]),S._v(" "),I("td",[I("b",[S._v(S._s(S._f("number_format")(t.quantity)))])]),S._v(" "),I("td",[S._v(S._s(t.contact_detail))]),S._v(" "),I("td",[S._v(S._s(t.designation_contact))]),S._v(" "),I("td",[S._v(S._s(t.description))])])})),0)]},proxy:!0}])})],1),S._v(" "),I(v.a,{staticClass:"my-2"}),S._v(" "),I(l.a,{staticClass:"py-3 row"},[I("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button",to:"/order/pending"},on:{click:function(t){return S.$emit("on-close-stock-request-check-form")}}},[I("span",{staticClass:"v-btn__content text-white"},[S._v(" Cancel ")])]),S._v(" "),I(R.a),S._v(" "),I("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[I("span",{staticClass:"v-btn__content text-white"},[I(h.a,{staticClass:"mr-3"},[S._v("mdi-check")]),S._v(" | Check\n            ")],1)])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},652:function(t,e,n){"use strict";n.r(e);var o=n(269),c=n(278),r=n(637),l=n(668),d=n(635),v=n(267),_=n(669),h=n(213),f=n(175),m=n(84),k=n(736),C=n(638),R=n(596),y=(n(39),n(48),n(70),n(14),n(85),n(13),n(12),n(16),n(17),n(1)),O=(n(69),n(6),n(10),n(106)),x=n(626);function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function I(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w={props:["stockRequest"],data:function(){return{selectedRequestItems:[],requiredRules:[function(t){return!!t||"Name field is required"}],valid:!1,allChecked:!1}},methods:I(I({},Object(O.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onCheckBoxChanged:function(t){this.$refs.form.validate()},onMainCheckBoxToggled:function(t){var e;t?this.selectedRequestItems=null===(e=this.stockRequest)||void 0===e?void 0:e.stockRequestItems.map((function(t){return t.id})):this.selectedRequestItems=[]},approveStockRequest:function(t){var e=this;this.selectedRequestItems.length?this.$apollo.mutate({mutation:x.a,variables:{id:this.stockRequest.id,input:this.selectedRequestItems}}).then((function(n){n.data;e.successNotification("Work order approveed!"),t.target.reset(),e.$emit("on-close-stock-request-approve-form")})).catch((function(t){console.log(t)})):this.errorNotification("Approve At Least One Item!")}}),created:function(){},watch:{$props:{handler:function(){var t;null===(t=this.stockRequest)||void 0===t||null===(t=t.stockRequestItems)||void 0===t||t.forEach((function(t){return t.approveed_quantity=t.requested_quantity})),this.onMainCheckBoxToggled(!0),this.allChecked=!0},deep:!0,immediate:!0}}},j=n(90),component=Object(j.a)(w,(function(){var t,e,n,y,O,x,S=this,I=S._self._c;return I(o.a,[I("div",{staticClass:"grey lighten-2 pb-2"},[I(c.c,{staticClass:"text-h5 pb-0"},[S._v("\n        Stock Request Approve Form\n      ")]),S._v(" "),I("span",{staticClass:"ml-4"},[S._v("Registration form")])],1),S._v(" "),I(_.a,{ref:"form",on:{submit:function(t){return t.preventDefault(),S.approveStockRequest.apply(null,arguments)}},model:{value:S.valid,callback:function(t){S.valid=t},expression:"valid"}},[I(d.a,[I("div",{staticClass:"col-12"},[I(k.a,[I(f.a,{staticClass:"col-3"},[I(m.a,[I(m.c,[S._v("Requested Date")]),S._v(" "),I(m.b,[S._v(S._s(null===(t=S.stockRequest)||void 0===t?void 0:t.requested_date))])],1)],1),S._v(" "),I(f.a,{staticClass:"col-3"},[I(m.a,[I(m.c,[S._v("Requested By")]),S._v(" "),I(m.b,[S._v(S._s(null===(e=S.stockRequest)||void 0===e||null===(e=e.createdBy)||void 0===e?void 0:e.name))])],1)],1),S._v(" "),I(f.a,{staticClass:"col-3"},[I(m.a,[I(m.c,[S._v("Department")]),S._v(" "),I(m.b,[S._v(S._s(null===(n=S.stockRequest)||void 0===n||null===(n=n.department)||void 0===n?void 0:n.name))])],1)],1),S._v(" "),I(f.a,{staticClass:"col-3"},[I(m.a,[I(m.c,[S._v("Project")]),S._v(" "),I(m.b,[S._v(S._s(null===(y=S.stockRequest)||void 0===y||null===(y=y.project)||void 0===y?void 0:y.name))])],1)],1)],1),S._v(" "),I(v.a,{staticClass:"my-2"}),S._v(" "),I(k.a,[I(f.a,{staticClass:"col-4"},[I(m.a,[I(m.c,[S._v("Purpose")]),S._v(" "),I(m.b,[S._v(S._s(null===(O=S.stockRequest)||void 0===O?void 0:O.purpose))])],1)],1)],1),S._v(" "),I(v.a,{staticClass:"my-2"}),S._v(" "),I(k.a,[I(f.a,{staticClass:"col-4"},[I(m.a,[I(m.c,[S._v("Specifications")]),S._v(" "),I(m.b,[S._v(S._s(null===(x=S.stockRequest)||void 0===x?void 0:x.specifications)+" \n")])],1)],1)],1)],1),S._v(" "),I(v.a,{staticClass:"my-2"}),S._v(" "),I("div",{staticClass:"blue-grey white--text"},[I("div",{staticClass:"px-4 row ma-1 pb-2"},[I("div",{staticClass:"pt-1"},[I(c.c,{staticClass:"text-h5 pa-0"},[S._v("\n                Requested Items\n              ")]),S._v(" "),I("span",[S._v("Requested Items are listed below.")])],1),S._v(" "),I(R.a)],1),S._v(" "),I(C.a,{staticClass:"blue-grey lighten-5",scopedSlots:S._u([{key:"default",fn:function(){var t;return[I("thead",[I("tr",{staticClass:"blue-grey text-uppercase text-bold lighten-4"},[I("th",{staticClass:"text-left"},[I(r.a,{on:{change:S.onMainCheckBoxToggled},model:{value:S.allChecked,callback:function(t){S.allChecked=t},expression:"allChecked"}})],1),S._v(" "),I("th",{staticClass:"text-left font-weight-black"},[I("b",[S._v("Item")])]),S._v(" "),I("th",{staticClass:"text-left font-weight-black"},[S._v("Quantity")]),S._v(" "),I("th",{staticClass:"text-left font-weight-black"},[S._v("Contact Detail")]),S._v(" "),I("th",{staticClass:"text-left font-weight-black"},[S._v("Designation Contact")]),S._v(" "),I("th",{staticClass:"text-left font-weight-black"},[S._v("Description")])])]),S._v(" "),I("tbody",S._l(null===(t=S.stockRequest)||void 0===t?void 0:t.stockRequestItems,(function(t){return I("tr",{key:t.id,class:{"lime lighten-4":S.selectedRequestItems.includes(t.id)}},[I("td",{staticStyle:{width:"35px"}},[I(r.a,{attrs:{value:t.id},on:{change:S.onCheckBoxChanged},model:{value:S.selectedRequestItems,callback:function(t){S.selectedRequestItems=t},expression:"selectedRequestItems"}})],1),S._v(" "),I("td",[S._v(S._s(t.item.name)+" "+S._s(t.item.unitOfMeasurement.name))]),S._v(" "),I("td",[I("b",[S._v(S._s(S._f("number_format")(t.quantity)))])]),S._v(" "),I("td",[S._v(S._s(t.contact_detail))]),S._v(" "),I("td",[S._v(S._s(t.designation_contact))]),S._v(" "),I("td",[S._v(S._s(t.description))])])})),0)]},proxy:!0}])})],1),S._v(" "),I(v.a,{staticClass:"my-2"}),S._v(" "),I(l.a,{staticClass:"py-3 row"},[I("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button",to:"/order/pending"},on:{click:function(t){return S.$emit("on-close-stock-request-approve-form")}}},[I("span",{staticClass:"v-btn__content text-white"},[S._v(" Cancel ")])]),S._v(" "),I(R.a),S._v(" "),I("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[I("span",{staticClass:"v-btn__content text-white"},[I(h.a,{staticClass:"mr-3"},[S._v("mdi-approve")]),S._v(" | Approve\n            ")],1)])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},769:function(t,e,n){"use strict";n.r(e);var o=n(614),c=n(668),r=n(621),l=n(213),d=n(648),v=n(596),_=n(121),h=(n(38),n(279),n(13),n(14),n(12),n(6),n(16),n(10),n(17),n(1)),f=n(640),m=n(626),k=(n(617),n(27)),C=n(280),R=n(19),y=n(651),O=n(652);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function S(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var I={components:{StockRequestTable:f.default,StockRequestCheckForm:y.default,StockRequestApproveForm:O.default},middleware:["authenticated"],data:function(){return{breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/dashboard"},{text:"All Stock Requests",disabled:!0}],stockRequests:{paginatorInfo:{}},stockRequest:{},search:{customer_name:"",concrete_type_id:null},element_permissions:{create_btn:[{resource:R.a.STOCK_REQUEST,action:k.a.CREATE}]},loading:!0,pagination:{page:1,per_page:25},checkStockRequestDialogVisible:!1,approveStockRequestDialogVisible:!1}},apollo:{stockRequests:{query:m.c,loadingKey:"loading",variables:function(){return S(S({},{}),{page:this.pagination.page,per_page:this.pagination.per_page,status:"CHECKED"})},fetchPolicy:"cache-and-network"}},methods:{can:function(t){return Object(C.a)(this.$auth.user,t)},onStockRequestCheckClicked:function(t){this.checkStockRequestDialogVisible=!0,this.stockRequest=t,console.log(this.stockRequest)},onCloseStockRequestCheckForm:function(){this.$apollo.queries.stockRequests.refetch(),this.checkStockRequestDialogVisible=!1,this.stockRequest=null},onStockRequestApproveClicked:function(t){console.log(t),this.approveStockRequestDialogVisible=!0,this.stockRequest=t},onCloseStockRequestApproveForm:function(){this.$apollo.queries.stockRequests.refetch(),this.approveStockRequestDialogVisible=!1,this.stockRequest=null}}},w=n(90),component=Object(w.a)(I,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-5 grey lighten-3"},[e(o.a,{attrs:{stockRequests:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[e(l.a,[t._v("mdi-chevron-double-right")])]},proxy:!0}])}),t._v(" "),e("div",{staticClass:"px-4 row ma-1"},[t._m(0),t._v(" "),e(v.a),t._v(" "),e("div",{staticClass:"pr-2"})],1),t._v(" "),e("div",{staticClass:"px-5 py-3"},[e("div",{staticClass:"row mb-4"},[e(c.a,{attrs:{cols:"12",lg:"4"}},[e(_.a,{attrs:{"append-icon":"mdi-magnify",label:"Search by name, project description or phone number","single-line":"","hide-details":"",outlined:""},model:{value:t.search.customer_name,callback:function(e){t.$set(t.search,"customer_name",e)},expression:"search.customer_name"}})],1)],1),t._v(" "),e("stock-request-table",{attrs:{loading:t.loading,stockRequests:t.stockRequests.data,_pagination:t.stockRequests.paginatorInfo},on:{"on-stock-request-check-clicked":t.onStockRequestCheckClicked,"on-stock-request-approve-clicked":t.onStockRequestApproveClicked}}),t._v(" "),e(d.a,{staticClass:"my-4",attrs:{length:t.stockRequests.paginatorInfo.lastPage},model:{value:t.pagination.page,callback:function(e){t.$set(t.pagination,"page",e)},expression:"pagination.page"}})],1),t._v(" "),e(r.a,{attrs:{width:"85%"},on:{"click:outside":t.onCloseStockRequestCheckForm},model:{value:t.checkStockRequestDialogVisible,callback:function(e){t.checkStockRequestDialogVisible=e},expression:"checkStockRequestDialogVisible"}},[e("stock-request-check-form",{attrs:{stockRequest:t.stockRequest},on:{"on-close-stock-request-check-form":t.onCloseStockRequestCheckForm}})],1),t._v(" "),e(r.a,{attrs:{width:"85%"},on:{"click:outside":t.onCloseStockRequestApproveForm},model:{value:t.approveStockRequestDialogVisible,callback:function(e){t.approveStockRequestDialogVisible=e},expression:"approveStockRequestDialogVisible"}},[e("stock-request-approve-form",{attrs:{stockRequest:t.stockRequest},on:{"on-close-stock-request-approve-form":t.onCloseStockRequestApproveForm}})],1)],1)}),[function(){var t=this,e=t._self._c;return e("div",[e("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[t._v("Checked Stock Requests")]),t._v(" "),e("span",{staticClass:"grey--text text--darken-1"},[t._v("Checked Stock Requests Are Shown Here.")])])}],!1,null,null,null);e.default=component.exports}}]);