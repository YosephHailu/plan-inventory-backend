(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{627:function(t,e,n){"use strict";n.d(e,"a",(function(){return h})),n.d(e,"c",(function(){return C})),n.d(e,"d",(function(){return y})),n.d(e,"b",(function(){return I})),n.d(e,"e",(function(){return O}));var o,r,d,l,c,m,v,_=n(92),f=n(61),h=Object(f.a)(o||(o=Object(_.a)(["\n  query($page: Int!, $per_page: Int!, $name: String) {\n    items(first: $per_page, page: $page, name: $name) {\n      data {\n        id\n        name\n        item_code\n        description\n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }   \n  }\n"]))),C=(Object(f.a)(r||(r=Object(_.a)(["\n  query All_ITEM_LOOKUP_QUERY {\n    itemCategories {\n      id\n      name\n    }   \n    donors {\n      id\n      name\n    }  \n    lotNumbers {\n      id\n      lot_number\n    }   \n    unitOfMeasurements {\n      id\n      name\n      abbreviation\n    }  \n    officeLocations {\n      id\n      address\n    } \n    stockTypes {\n      id\n      name\n    }   \n    whereHouses {\n      id\n      name\n      address\n    }     \n    departments {\n      id\n      name\n    }   \n  }\n"]))),Object(f.a)(d||(d=Object(_.a)(["\n  query FIND_ITEM_QUERY($id: ID!) {\n    item(id: $id) {\n        id\n        name\n        item_code\n        description\n    }   \n  }\n"])))),y=Object(f.a)(l||(l=Object(_.a)(["\n  query ITEM_BIN_CARD_QUERY($id: ID!, $date_from: Date, $date_to: Date) {\n    itemBinCard(id: $id, date_from: $date_from, date_to: $date_to) {\n      stockIssueItems {\n        id\n        quantity\n        stockIssue {\n          id\n          date\n        }\n      }\n      goodReceiveItem {\n        id\n          received_quantity\n          checked_quantity\n          approved_quantity\n          description\n          expiry_date\n          comment\n          condition\n          unit_price\n          created_at\n          unitOfMeasurement {\n            id\n            abbreviation\n          }\n          donor {\n            id\n            name\n          }\n          stockType {\n            id\n            name\n          }\n          goodReceive {\n            id\n            remark\n            status\n            received_by\n            received_date\n            reference_number\n            batch_number\n            loading_number\n            itemCategory {\n              id\n              name\n            }\n            projectObject {\n              id\n              name\n            }\n          }\n          item {\n            id\n            name\n            description\n          }\n      }\n    }   \n  }\n"]))),I=Object(f.a)(c||(c=Object(_.a)(["\n  mutation ($input: ItemCreateInput!) {\n    createItem(input: $input) {\n      id\n    }\n  }\n"]))),O=Object(f.a)(m||(m=Object(_.a)(["\n  mutation ($input: ItemUpdateInput!) {\n    updateItem(input: $input) {\n      id\n    }\n  }\n"])));Object(f.a)(v||(v=Object(_.a)(["\n  mutation($id: ID!) {\n    deleteItem(id: $id) {\n      id\n    }\n  }\n"])))},628:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o={USER:"User",ROLE:"Role",PERMISSION:"Permission",PERMISSION_TYPE:"PermissionType",MEASUREMENT_UNIT:"MeasurementUnit",REPORT:"Report",CONFIGURATION:"Configuration",ITEM_CATEGORY:"ItemCategory",ITEM:"Item",ASSET:"Asset",STOCK_REQUEST:"StockRequest",STOCK_REQUEST_ITEM:"StockRequestItem",CONDITION:"Condition",WHERE_HOUSE:"WhereHouse",OFFICE_LOCATION:"OfficeLocation",PROGRAM_AREA:"ProgramArea",ACQUISITION_TYPE:"AcquisitionType"}},648:function(t,e,n){"use strict";n.r(e);var o=n(177),r=n(695),d=n(641),l=n(273),c=n(696),m=n(779),v=n(609),_=n(124),f=n(624),h=(n(38),n(14),n(87),n(13),n(12),n(6),n(16),n(10),n(17),n(1)),C=n(106),y=n(627);function I(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?I(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):I(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var k={props:["_item"],data:function(){return{lookup:{},item:{},valid:!1,editMode:!1,submitting:!1,fieldRequiredRole:[function(t){return!!t||"This field is required"}]}},methods:O(O({},Object(C.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(t){this.$refs.form.validate()&&(this.editMode?this.updateItem(t):this.registerItem(t))},registerItem:function(t){var e=this;this.$refs.form.validate(),this.submitting=!0,this.$apollo.mutate({mutation:y.b,variables:{input:this.item}}).then((function(n){n.data;e.successNotification("Item registered  successfully!"),t.target.reset(),e.$router.push("/inventory/items"),e.submitting=!1})).catch((function(t){e.submitting=!1,console.log(t)}))},updateItem:function(t){var e=this;delete this.item.__typename,this.$apollo.mutate({mutation:y.e,variables:{input:this.item}}).then((function(n){n.data;e.successNotification("Item updated successfully!"),t.target.reset(),e.$router.push("/inventory/items"),e.submitting=!1})).catch((function(t){console.log(t)}))}}),watch:{$props:{handler:function(){var t;console.log(this._item),null!==(t=this._item)&&void 0!==t&&t.id?(this.editMode=!0,this.item.name=this._item.name,this.item.description=this._item.description,this.item.item_code=this._item.item_code,this.item.id=this._item.id):(this.editMode=!1,this.item={})},deep:!0,immediate:!0}}},R=n(60),component=Object(R.a)(k,(function(){var t=this,e=t._self._c;return e(c.a,{ref:"form",on:{submit:function(e){return e.preventDefault(),t.onFormSubmitted.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(d.a,[e(m.a,[e(r.a,{staticClass:"py-0",attrs:{cols:"12",md:"9"}},[e(_.a,{staticClass:"py-0",attrs:{label:"Item Name * ",outlined:"",required:"",rules:t.fieldRequiredRole},model:{value:t.item.name,callback:function(e){t.$set(t.item,"name",e)},expression:"item.name"}})],1),t._v(" "),e(r.a,{staticClass:"py-0",attrs:{cols:"12",md:"3"}},[e(_.a,{staticClass:"py-0",attrs:{label:"Item Code",outlined:"",required:""},model:{value:t.item.item_code,callback:function(e){t.$set(t.item,"item_code",e)},expression:"item.item_code"}})],1),t._v(" "),e(r.a,{staticClass:"py-0",attrs:{cols:"12",md:"12"}},[e(f.a,{staticClass:"py-0",attrs:{label:"Enter a short description",rows:"3",outlined:"",required:""},model:{value:t.item.description,callback:function(e){t.$set(t.item,"description",e)},expression:"item.description"}})],1)],1),t._v(" "),e(l.a,{staticClass:"my-2"}),t._v(" "),e(r.a,{staticClass:"py-3 row"},[e("nuxt-link",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button",to:"/order/pending"}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Cancel ")])]),t._v(" "),e(v.a),t._v(" "),t.editMode?e(o.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:t.submitting,disabled:!t.valid||t.submitting}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Update ")])]):e(o.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:t.submitting,disabled:!t.valid||t.submitting}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Add ")])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},825:function(t,e,n){"use strict";n.r(e);var o=n(626),r=n(177),d=n(695),l=n(641),c=n(194),m=n(779),v=n(645),_=n(609),f=n(124),h=(n(38),n(52),n(6),n(648)),C=n(628),y=n(24),I=n(627),O={middleware:["has_role","authenticated"],meta:{permissions:[{permission:C.a.ITEM,permissionTypes:y.a.CREATE}]},components:{ItemForm:h.default},data:function(){return{breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/dashboard"},{text:"Stock Movements",disabled:!1,href:"/good_receive/stock_movements"},{text:"Bin Card",disabled:!0}],date_from:null,date_to:null,item:{},itemBinCard:{},editMode:!1}},apollo:{item:{query:I.c,variables:function(){return{id:this.$route.params.id}},fetchPolicy:"cache-and-network"},itemBinCard:{query:I.d,variables:function(){return this.date_from&&this.date_to?{id:this.$route.params.id,date_from:this.date_from,date_to:this.date_to}:{id:this.$route.params.id}},fetchPolicy:"cache-and-network"}}},k=n(60),component=Object(k.a)(O,(function(){var t,e,n,h,C=this,y=C._self._c;return y("div",{staticClass:"pa-5 grey lighten-3"},[y(o.a,{staticClass:"mb-3",attrs:{items:C.breadcrumbs},scopedSlots:C._u([{key:"divider",fn:function(){return[y(c.a,[C._v("mdi-chevron-double-right")])]},proxy:!0}])}),C._v(" "),y(m.a,{staticClass:"mx-0 px-5"},[y("div",[y("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[C._v("Bin Card")]),C._v(" "),y("span",{staticClass:"grey--text text--darken-1"},[C._v("Item Bin Card Is Shown Below.")])]),C._v(" "),y(_.a)],1),C._v(" "),y(m.a,{staticClass:"px-3"},[y(d.a,{attrs:{cols:"12",md:"5"}},[y(f.a,{staticClass:"py-0",attrs:{label:"Date From * ",outlined:"",required:"",type:"date"},model:{value:C.date_from,callback:function(t){C.date_from=t},expression:"date_from"}})],1),C._v(" "),y(d.a,{attrs:{cols:"12",md:"5"}},[y(f.a,{staticClass:"py-0",attrs:{label:"Date To * ",outlined:"",required:"",type:"date"},model:{value:C.date_to,callback:function(t){C.date_to=t},expression:"date_to"}})],1),C._v(" "),y(d.a,{attrs:{cols:"12",md:"2"}},[y(r.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[y("span",{staticClass:"v-btn__content text-white"},[C._v(" Filter")])])],1)],1),C._v(" "),y("div",{staticClass:"pa-4 pl-3"},[y(l.a,{staticClass:"grey card outlined lighten-4"},[y(m.a,[y(d.a,[y("div",{staticClass:"py-1"},[y("b",[C._v("Item Name: ")]),C._v(" "),y("span",{staticClass:"ml-1"},[C._v(C._s(C.item.name))])]),C._v(" "),y("div",{staticClass:"py-1"},[y("b",[C._v("Item Code: ")]),C._v(" "),y("span",{staticClass:"ml-1"},[C._v(C._s(C.item.stock_card_number))])]),C._v(" "),y("div",{staticClass:"py-1"},[y("b",[C._v("Part/ Model/ Serial Number/: ")]),C._v(" "),y("span",{staticClass:"ml-1"},[C._v(C._s(C.item.stock_card_number))])]),C._v(" "),y("div",{staticClass:"py-1"},[y("b",[C._v("Donor: ")]),C._v(" "),y("span",{staticClass:"ml-1"},[C._v(C._s(null===(t=C.itemBinCard)||void 0===t||null===(t=t.goodReceiveItem)||void 0===t||null===(t=t.donor)||void 0===t?void 0:t.name))])]),C._v(" "),y("div",{staticClass:"py-1"},[y("b",[C._v("Project: ")]),C._v(" "),y("span",{staticClass:"ml-1"},[C._v(C._s(null===(e=C.itemBinCard)||void 0===e||null===(e=e.goodReceiveItem)||void 0===e||null===(e=e.goodReceive)||void 0===e||null===(e=e.projectObject)||void 0===e?void 0:e.name))])]),C._v(" "),y("div",{staticClass:"py-1"},[y("b",[C._v("Unit Of Measurement: ")]),C._v(" "),y("span",{staticClass:"ml-1"},[C._v(C._s(null===(n=C.itemBinCard)||void 0===n||null===(n=n.goodReceiveItem)||void 0===n||null===(n=n.unitOfMeasurement)||void 0===n?void 0:n.abbreviation))])])]),C._v(" "),y(d.a,{staticClass:"text-right"},[y("div",{staticClass:"pa-3"},[y("b",[C._v("Date: ")]),C._v(" "),y("span",{staticClass:"ml-1"},[C._v(C._s((new Date).toUTCString().slice(5,16)))]),C._v(" "),y("br")]),C._v(" "),y("div",{staticClass:"pa-3"},[y("b",[C._v("Expiry Date: ")]),C._v(" "),y("span",{staticClass:"ml-1"},[C._v(C._s(null===(h=C.itemBinCard)||void 0===h||null===(h=h.goodReceiveItem)||void 0===h?void 0:h.expiry_date))]),C._v(" "),y("br")])])],1),C._v(" "),y("hr",{staticClass:"my-3"}),C._v(" "),y("div",[y(v.a,{staticClass:"blue-grey lighten-5",scopedSlots:C._u([{key:"default",fn:function(){var t,e,n,o,r;return[y("thead",[y("tr",{staticClass:"blue-grey text-uppercase text-bold lighten-4"},[y("th",{staticClass:"font-weight-black"},[y("b",[C._v("NO")])]),C._v(" "),y("th",{staticClass:"font-weight-black"},[y("b",[C._v("Date")])]),C._v(" "),y("th",{staticClass:"font-weight-black"},[y("b",[C._v("Reference.No.")])]),C._v(" "),y("th",{staticClass:"font-weight-black"},[y("b",[C._v("Quantity Received / Issued")])]),C._v(" "),y("th",{staticClass:"font-weight-black"},[y("b",[C._v("New Balance")])]),C._v(" "),y("th",{staticClass:"font-weight-black"},[y("b",[C._v("Processed By.")])])])]),C._v(" "),y("tbody",[C._l(C.itemBinCard.stockIssueItems,(function(t,e){var n,o,r,d,l;return y("tr",{key:e,staticClass:"blue lighten-5"},[y("td",[C._v(C._s(e+1))]),C._v(" "),y("td",[C._v(C._s(null==t||null===(n=t.stockIssue)||void 0===n?void 0:n.date))]),C._v(" "),y("td",[C._v("# "+C._s(null!==(o=null===(r=t.stockIssue)||void 0===r?void 0:r.id)&&void 0!==o?o:"---"))]),C._v(" "),y("td",[C._v(C._s(null!==(d=t.quantity)&&void 0!==d?d:"---"))]),C._v(" "),y("td",[C._v(C._s(C._f("number_format")(null!==(l=t.quantity-C.itemBinCard.stockIssueItems.reduce((function(t,e){return t+e.quantity}),0))&&void 0!==l?l:"---")))]),C._v(" "),y("td")])})),C._v(" "),y("tr",[y("td",[C._v(C._s((null===(t=C.itemBinCard)||void 0===t||null===(t=t.stockIssueItems)||void 0===t?void 0:t.length)+1))]),C._v(" "),y("td",[C._v(C._s(null===(e=C.itemBinCard)||void 0===e||null===(e=e.goodReceiveItem)||void 0===e?void 0:e.created_at))]),C._v(" "),y("td",[C._v("# "+C._s(null===(n=C.itemBinCard)||void 0===n||null===(n=n.goodReceiveItem)||void 0===n?void 0:n.id))]),C._v(" "),y("td",[C._v(C._s(C._f("number_format")(null===(o=C.itemBinCard)||void 0===o||null===(o=o.goodReceiveItem)||void 0===o?void 0:o.approved_quantity)))]),C._v(" "),y("td",[C._v(C._s(C._f("number_format")(null===(r=C.itemBinCard)||void 0===r||null===(r=r.goodReceiveItem)||void 0===r?void 0:r.approved_quantity)))])])],2)]},proxy:!0}])})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);