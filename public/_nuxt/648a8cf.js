(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{630:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o={USER:"User",ROLE:"Role",PERMISSION:"Permission",PERMISSION_TYPE:"PermissionType",MEASUREMENT_UNIT:"MeasurementUnit",REPORT:"Report",CONFIGURATION:"Configuration",ITEM_CATEGORY:"ItemCategory",ITEM:"Item",ASSET:"Asset",STOCK_REQUEST:"StockRequest",STOCK_REQUEST_ITEM:"StockRequestItem",CONDITION:"Condition",WHERE_HOUSE:"WhereHouse",OFFICE_LOCATION:"OfficeLocation",PROGRAM_AREA:"ProgramArea",ACQUISITION_TYPE:"AcquisitionType",GOOD_RECEIVE:"GoodReceive",STOCK_ISSUE:"StockIssue"}},631:function(t,e,n){"use strict";n.d(e,"a",(function(){return h})),n.d(e,"c",(function(){return C})),n.d(e,"d",(function(){return y})),n.d(e,"b",(function(){return I})),n.d(e,"e",(function(){return O}));var o,d,r,l,c,v,m,_=n(92),f=n(61),h=Object(f.a)(o||(o=Object(_.a)(["\n  query($page: Int!, $per_page: Int!, $name: String) {\n    items(first: $per_page, page: $page, name: $name) {\n      data {\n        id\n        name\n        item_code\n        description\n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }   \n  }\n"]))),C=(Object(f.a)(d||(d=Object(_.a)(["\n  query All_ITEM_LOOKUP_QUERY {\n    itemCategories {\n      id\n      name\n    }   \n    donors {\n      id\n      name\n    }  \n    lotNumbers {\n      id\n      lot_number\n    }   \n    unitOfMeasurements {\n      id\n      name\n      abbreviation\n    }  \n    officeLocations {\n      id\n      address\n    } \n    stockTypes {\n      id\n      name\n    }   \n    whereHouses {\n      id\n      name\n      address\n    }     \n    departments {\n      id\n      name\n    }   \n  }\n"]))),Object(f.a)(r||(r=Object(_.a)(["\n  query FIND_ITEM_QUERY($id: ID!) {\n    item(id: $id) {\n        id\n        name\n        item_code\n        description\n    }   \n  }\n"])))),y=Object(f.a)(l||(l=Object(_.a)(["\n  query ITEM_BIN_CARD_QUERY($id: ID!, $date_from: Date, $date_to: Date) {\n    itemBinCard(id: $id, date_from: $date_from, date_to: $date_to) {\n      stockIssueItems {\n        id\n        quantity\n        stockIssue {\n          id\n          date\n          created_at\n          createdBy {\n            id\n            name\n          }\n          stockRequest {\n            id\n            reference_no\n          }\n        }\n      }\n      goodReceiveItem {\n        id\n          received_quantity\n          checked_quantity\n          approved_quantity\n          description\n          expiry_date\n          comment\n          condition\n          unit_price\n          created_at\n          unitOfMeasurement {\n            id\n            abbreviation\n          }\n          donor {\n            id\n            name\n          }\n          stockType {\n            id\n            name\n          }\n          project {\n            id\n            name\n          }\n          goodReceive {\n            id\n            remark\n            status\n            received_by\n            received_date\n            reference_number\n            batch_number\n            loading_number\n            itemCategory {\n              id\n              name\n            }\n            projectObject {\n              id\n              name\n            }\n            createdBy {\n              id\n              name\n            }\n          }\n          item {\n            id\n            name\n            description\n          }\n      }\n    }   \n  }\n"]))),I=Object(f.a)(c||(c=Object(_.a)(["\n  mutation ($input: ItemCreateInput!) {\n    createItem(input: $input) {\n      id\n    }\n  }\n"]))),O=Object(f.a)(v||(v=Object(_.a)(["\n  mutation ($input: ItemUpdateInput!) {\n    updateItem(input: $input) {\n      id\n    }\n  }\n"])));Object(f.a)(m||(m=Object(_.a)(["\n  mutation($id: ID!) {\n    deleteItem(id: $id) {\n      id\n    }\n  }\n"])))},647:function(t,e,n){"use strict";n.r(e);var o=n(177),d=n(695),r=n(633),l=n(273),c=n(696),v=n(786),m=n(609),_=n(124),f=n(624),h=(n(38),n(14),n(87),n(13),n(12),n(6),n(16),n(10),n(17),n(1)),C=n(106),y=n(631);function I(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?I(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):I(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var R={props:["_item"],data:function(){return{lookup:{},item:{},valid:!1,editMode:!1,submitting:!1,fieldRequiredRole:[function(t){return!!t||"This field is required"}]}},methods:O(O({},Object(C.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(t){this.$refs.form.validate()&&(this.editMode?this.updateItem(t):this.registerItem(t))},registerItem:function(t){var e=this;this.$refs.form.validate(),this.submitting=!0,this.$apollo.mutate({mutation:y.b,variables:{input:this.item}}).then((function(n){n.data;e.successNotification("Item registered  successfully!"),t.target.reset(),e.$router.push("/inventory/items"),e.submitting=!1})).catch((function(t){e.submitting=!1,console.log(t)}))},updateItem:function(t){var e=this;delete this.item.__typename,this.$apollo.mutate({mutation:y.e,variables:{input:this.item}}).then((function(n){n.data;e.successNotification("Item updated successfully!"),t.target.reset(),e.$router.push("/inventory/items"),e.submitting=!1})).catch((function(t){console.log(t)}))}}),watch:{$props:{handler:function(){var t;console.log(this._item),null!==(t=this._item)&&void 0!==t&&t.id?(this.editMode=!0,this.item.name=this._item.name,this.item.description=this._item.description,this.item.item_code=this._item.item_code,this.item.id=this._item.id):(this.editMode=!1,this.item={})},deep:!0,immediate:!0}}},k=n(60),component=Object(k.a)(R,(function(){var t=this,e=t._self._c;return e(c.a,{ref:"form",on:{submit:function(e){return e.preventDefault(),t.onFormSubmitted.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(r.a,[e(v.a,[e(d.a,{staticClass:"py-0",attrs:{cols:"12",md:"9"}},[e(_.a,{staticClass:"py-0",attrs:{label:"Item Name * ",outlined:"",required:"",rules:t.fieldRequiredRole},model:{value:t.item.name,callback:function(e){t.$set(t.item,"name",e)},expression:"item.name"}})],1),t._v(" "),e(d.a,{staticClass:"py-0",attrs:{cols:"12",md:"3"}},[e(_.a,{staticClass:"py-0",attrs:{label:"Item Code",outlined:"",required:""},model:{value:t.item.item_code,callback:function(e){t.$set(t.item,"item_code",e)},expression:"item.item_code"}})],1),t._v(" "),e(d.a,{staticClass:"py-0",attrs:{cols:"12",md:"12"}},[e(f.a,{staticClass:"py-0",attrs:{label:"Enter a short description",rows:"3",outlined:"",required:""},model:{value:t.item.description,callback:function(e){t.$set(t.item,"description",e)},expression:"item.description"}})],1)],1),t._v(" "),e(l.a,{staticClass:"my-2"}),t._v(" "),e(d.a,{staticClass:"py-3 row"},[e("nuxt-link",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button",to:"/order/pending"}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Cancel ")])]),t._v(" "),e(m.a),t._v(" "),t.editMode?e(o.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:t.submitting,disabled:!t.valid||t.submitting}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Update ")])]):e(o.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:t.submitting,disabled:!t.valid||t.submitting}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Add ")])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},836:function(t,e,n){"use strict";n.r(e);var o=n(626),d=n(177),r=n(695),l=n(633),c=n(194),v=n(786),m=n(645),_=n(609),f=n(124),h=(n(38),n(14),n(87),n(52),n(6),n(647)),C=n(630),y=n(21),I=n(631),O={middleware:["has_role","authenticated"],meta:{permissions:[{permission:C.a.ITEM,permissionTypes:y.a.CREATE}]},components:{ItemForm:h.default},data:function(){return{breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/dashboard"},{text:"Stock Movements",disabled:!1,href:"/good_receive/stock_movements"},{text:"Bin Card",disabled:!0}],date_from:null,date_to:null,itemBinCard:{},editMode:!1}},apollo:{itemBinCard:{query:I.d,variables:function(){return this.date_from&&this.date_to?{id:this.$route.params.id,date_from:this.date_from,date_to:this.date_to}:{id:this.$route.params.id}},fetchPolicy:"cache-and-network"}}},R=n(60),component=Object(R.a)(O,(function(){var t,e,n,h,C,y,I,O=this,R=O._self._c;return R("div",{staticClass:"pa-5 grey lighten-3"},[R(o.a,{staticClass:"mb-3",attrs:{items:O.breadcrumbs},scopedSlots:O._u([{key:"divider",fn:function(){return[R(c.a,[O._v("mdi-chevron-double-right")])]},proxy:!0}])}),O._v(" "),R(v.a,{staticClass:"mx-0 px-5"},[R("div",[R("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[O._v("Bin Card")]),O._v(" "),R("span",{staticClass:"grey--text text--darken-1"},[O._v("Item Bin Card Is Shown Below.")])]),O._v(" "),R(_.a)],1),O._v(" "),R(v.a,{staticClass:"px-3"},[R(r.a,{attrs:{cols:"12",md:"5"}},[R(f.a,{staticClass:"py-0",attrs:{label:"Date From * ",outlined:"",required:"",type:"date"},model:{value:O.date_from,callback:function(t){O.date_from=t},expression:"date_from"}})],1),O._v(" "),R(r.a,{attrs:{cols:"12",md:"5"}},[R(f.a,{staticClass:"py-0",attrs:{label:"Date To * ",outlined:"",required:"",type:"date"},model:{value:O.date_to,callback:function(t){O.date_to=t},expression:"date_to"}})],1),O._v(" "),R(r.a,{attrs:{cols:"12",md:"2"}},[R(d.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[R("span",{staticClass:"v-btn__content text-white"},[O._v(" Filter")])])],1)],1),O._v(" "),R("div",{staticClass:"pa-4 pl-3"},[R(l.a,{staticClass:"grey card outlined lighten-4"},[R(v.a,[R(r.a,[R("div",{staticClass:"py-1"},[R("b",[O._v("Item Name: ")]),O._v(" "),R("span",{staticClass:"ml-1"},[O._v(O._s(null===(t=O.itemBinCard)||void 0===t||null===(t=t.goodReceiveItem)||void 0===t||null===(t=t.item)||void 0===t?void 0:t.name))])]),O._v(" "),R("div",{staticClass:"py-1"},[R("b",[O._v("Part/ Model/ Serial Number/: ")]),O._v(" "),R("span",{staticClass:"ml-1"},[O._v(O._s(null===(e=O.itemBinCard)||void 0===e||null===(e=e.goodReceiveItem)||void 0===e?void 0:e.description))])]),O._v(" "),R("div",{staticClass:"py-1"},[R("b",[O._v("Donor: ")]),O._v(" "),R("span",{staticClass:"ml-1"},[O._v(O._s(null===(n=O.itemBinCard)||void 0===n||null===(n=n.goodReceiveItem)||void 0===n||null===(n=n.donor)||void 0===n?void 0:n.name))])]),O._v(" "),R("div",{staticClass:"py-1"},[R("b",[O._v("Project: ")]),O._v(" "),R("span",{staticClass:"ml-1"},[O._v(O._s(null===(h=O.itemBinCard)||void 0===h||null===(h=h.goodReceiveItem)||void 0===h||null===(h=h.project)||void 0===h?void 0:h.name))])]),O._v(" "),R("div",{staticClass:"py-1"},[R("b",[O._v("Unit Of Measurement: ")]),O._v(" "),R("span",{staticClass:"ml-1"},[O._v(O._s(null===(C=O.itemBinCard)||void 0===C||null===(C=C.goodReceiveItem)||void 0===C||null===(C=C.unitOfMeasurement)||void 0===C?void 0:C.abbreviation))])]),O._v(" "),R("div",{staticClass:"py-1"},[R("b",[O._v("Processed By: ")]),O._v(" "),R("span",{staticClass:"ml-1"},[O._v(O._s(null===(y=O.$auth.user)||void 0===y?void 0:y.name))])])]),O._v(" "),R(r.a,{staticClass:"text-right"},[R("div",{staticClass:"pa-3"},[R("b",[O._v("Date: ")]),O._v(" "),R("span",{staticClass:"ml-1"},[O._v(O._s((new Date).toUTCString().slice(5,16)))]),O._v(" "),R("br")]),O._v(" "),R("div",{staticClass:"pa-3"},[R("b",[O._v("Expiry Date: ")]),O._v(" "),R("span",{staticClass:"ml-1"},[O._v(O._s(null===(I=O.itemBinCard)||void 0===I||null===(I=I.goodReceiveItem)||void 0===I?void 0:I.expiry_date))]),O._v(" "),R("br")])])],1),O._v(" "),R("hr",{staticClass:"my-3"}),O._v(" "),R("div",[R(m.a,{staticClass:"blue-grey lighten-5",scopedSlots:O._u([{key:"default",fn:function(){var t,e,n,o,d;return[R("thead",[R("tr",{staticClass:"blue-grey text-uppercase text-bold lighten-4"},[R("th",{staticClass:"font-weight-black"},[R("b",[O._v("NO")])]),O._v(" "),R("th",{staticClass:"font-weight-black"},[R("b",[O._v("Date")])]),O._v(" "),R("th",{staticClass:"font-weight-black"},[R("b",[O._v("Reference.No.")])]),O._v(" "),R("th",{staticClass:"font-weight-black"},[R("b",[O._v("Quantity Received / Issued")])]),O._v(" "),R("th",{staticClass:"font-weight-black"},[R("b",[O._v("New Balance")])]),O._v(" "),R("th",{staticClass:"font-weight-black"},[R("b",[O._v("Processed By.")])])])]),O._v(" "),R("tbody",[R("tr",[R("td",[O._v("1")]),O._v(" "),R("td",[O._v(O._s(null===(t=O.itemBinCard)||void 0===t||null===(t=t.goodReceiveItem)||void 0===t?void 0:t.created_at))]),O._v(" "),R("td",[O._v("# "+O._s(null===(e=O.itemBinCard)||void 0===e||null===(e=e.goodReceiveItem)||void 0===e||null===(e=e.goodReceive)||void 0===e?void 0:e.loading_number))]),O._v(" "),R("td",[O._v(O._s(O._f("number_format")(null===(n=O.itemBinCard)||void 0===n||null===(n=n.goodReceiveItem)||void 0===n?void 0:n.approved_quantity)))]),O._v(" "),R("td",[O._v(O._s(O._f("number_format")(null===(o=O.itemBinCard)||void 0===o||null===(o=o.goodReceiveItem)||void 0===o?void 0:o.approved_quantity)))]),O._v(" "),R("td",[R("input",{attrs:{type:"text"},domProps:{value:null===(d=O.itemBinCard)||void 0===d||null===(d=d.goodReceiveItem)||void 0===d||null===(d=d.goodReceive)||void 0===d||null===(d=d.createdBy)||void 0===d?void 0:d.name}})])]),O._v(" "),O._l(O.itemBinCard.stockIssueItems,(function(t,e){var n,o,d,r,l,c,v;return R("tr",{key:e,staticClass:"blue lighten-5"},[R("td",[O._v(O._s(e+2))]),O._v(" "),R("td",[O._v(O._s(null==t||null===(n=t.stockIssue)||void 0===n?void 0:n.created_at))]),O._v(" "),R("td",[O._v("# "+O._s(null!==(o=null===(d=t.stockIssue)||void 0===d||null===(d=d.stockRequest)||void 0===d?void 0:d.reference_no)&&void 0!==o?o:"---"))]),O._v(" "),R("td",[O._v(O._s(null!==(r=t.quantity)&&void 0!==r?r:"---"))]),O._v(" "),R("td",[O._v(O._s(O._f("number_format")(null!==(l=(null===(c=O.itemBinCard)||void 0===c||null===(c=c.goodReceiveItem)||void 0===c?void 0:c.approved_quantity)-O.itemBinCard.stockIssueItems.slice(0,e+1).reduce((function(t,e){return t+e.quantity}),0))&&void 0!==l?l:"---")))]),O._v(" "),R("td",[R("input",{attrs:{type:"text"},domProps:{value:null==t||null===(v=t.stockIssue)||void 0===v||null===(v=v.createdBy)||void 0===v?void 0:v.name}})])])}))],2)]},proxy:!0}])})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);