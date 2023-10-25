(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{626:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={USER:"User",ROLE:"Role",PERMISSION:"Permission",PERMISSION_TYPE:"PermissionType",MEASUREMENT_UNIT:"MeasurementUnit",REPORT:"Report",CONFIGURATION:"Configuration",ITEM_CATEGORY:"ItemCategory",ITEM:"Item",ASSET:"Asset",STOCK_REQUEST:"StockRequest",STOCK_REQUEST_ITEM:"StockRequestItem",CONDITION:"Condition",WHERE_HOUSE:"WhereHouse",OFFICE_LOCATION:"OfficeLocation",PROGRAM_AREA:"ProgramArea",ACQUISITION_TYPE:"AcquisitionType"}},629:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"c",(function(){return y})),n.d(e,"d",(function(){return C})),n.d(e,"b",(function(){return O})),n.d(e,"e",(function(){return I}));var r,o,c,l,d,m,v,_=n(92),h=n(61),f=Object(h.a)(r||(r=Object(_.a)(["\n  query($page: Int!, $per_page: Int!, $name: String) {\n    items(first: $per_page, page: $page, name: $name) {\n      data {\n        id\n        name\n        item_code\n        description\n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }   \n  }\n"]))),y=(Object(h.a)(o||(o=Object(_.a)(["\n  query All_ITEM_LOOKUP_QUERY {\n    itemCategories {\n      id\n      name\n    }   \n    donors {\n      id\n      name\n    }  \n    lotNumbers {\n      id\n      lot_number\n    }   \n    unitOfMeasurements {\n      id\n      name\n      abbreviation\n    }  \n    officeLocations {\n      id\n      address\n    } \n    stockTypes {\n      id\n      name\n    }   \n    whereHouses {\n      id\n      name\n      address\n    }     \n    departments {\n      id\n      name\n    }   \n  }\n"]))),Object(h.a)(c||(c=Object(_.a)(["\n  query FIND_ITEM_QUERY($id: ID!) {\n    item(id: $id) {\n        id\n        name\n        item_code\n        description\n    }   \n  }\n"])))),C=Object(h.a)(l||(l=Object(_.a)(["\n  query ITEM_BIN_CARD_QUERY($id: ID!) {\n    itemBinCard(id: $id) {\n      issuance_number\n      issued_quantity\n      reference_number\n      approved_quantity\n      processed_by\n      processed_at\n    }   \n  }\n"]))),O=Object(h.a)(d||(d=Object(_.a)(["\n  mutation ($input: ItemCreateInput!) {\n    createItem(input: $input) {\n      id\n    }\n  }\n"]))),I=Object(h.a)(m||(m=Object(_.a)(["\n  mutation ($input: ItemUpdateInput!) {\n    updateItem(input: $input) {\n      id\n    }\n  }\n"])));Object(h.a)(v||(v=Object(_.a)(["\n  mutation($id: ID!) {\n    deleteItem(id: $id) {\n      id\n    }\n  }\n"])))},651:function(t,e,n){"use strict";n.r(e);var r=n(177),o=n(693),c=n(640),l=n(273),d=n(694),m=n(762),v=n(607),_=n(124),h=n(623),f=(n(38),n(14),n(87),n(13),n(12),n(6),n(16),n(10),n(17),n(1)),y=n(106),C=n(629);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function I(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(f.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w={props:["_item"],data:function(){return{lookup:{},item:{},valid:!1,editMode:!1,submitting:!1,fieldRequiredRole:[function(t){return!!t||"This field is required"}]}},methods:I(I({},Object(y.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(t){this.$refs.form.validate()&&(this.editMode?this.updateItem(t):this.registerItem(t))},registerItem:function(t){var e=this;this.$refs.form.validate(),this.submitting=!0,this.$apollo.mutate({mutation:C.b,variables:{input:this.item}}).then((function(n){n.data;e.successNotification("Item registered  successfully!"),t.target.reset(),e.$router.push("/inventory/items"),e.submitting=!1})).catch((function(t){e.submitting=!1,console.log(t)}))},updateItem:function(t){var e=this;delete this.item.__typename,this.$apollo.mutate({mutation:C.e,variables:{input:this.item}}).then((function(n){n.data;e.successNotification("Item updated successfully!"),t.target.reset(),e.$router.push("/inventory/items"),e.submitting=!1})).catch((function(t){console.log(t)}))}}),watch:{$props:{handler:function(){var t;console.log(this._item),null!==(t=this._item)&&void 0!==t&&t.id?(this.editMode=!0,this.item.name=this._item.name,this.item.description=this._item.description,this.item.item_code=this._item.item_code,this.item.id=this._item.id):(this.editMode=!1,this.item={})},deep:!0,immediate:!0}}},E=n(60),component=Object(E.a)(w,(function(){var t=this,e=t._self._c;return e(d.a,{ref:"form",on:{submit:function(e){return e.preventDefault(),t.onFormSubmitted.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(c.a,[e(m.a,[e(o.a,{staticClass:"py-0",attrs:{cols:"12",md:"9"}},[e(_.a,{staticClass:"py-0",attrs:{label:"Item Name * ",outlined:"",required:"",rules:t.fieldRequiredRole},model:{value:t.item.name,callback:function(e){t.$set(t.item,"name",e)},expression:"item.name"}})],1),t._v(" "),e(o.a,{staticClass:"py-0",attrs:{cols:"12",md:"3"}},[e(_.a,{staticClass:"py-0",attrs:{label:"Item Code",outlined:"",required:""},model:{value:t.item.item_code,callback:function(e){t.$set(t.item,"item_code",e)},expression:"item.item_code"}})],1),t._v(" "),e(o.a,{staticClass:"py-0",attrs:{cols:"12",md:"12"}},[e(h.a,{staticClass:"py-0",attrs:{label:"Enter a short description",rows:"3",outlined:"",required:""},model:{value:t.item.description,callback:function(e){t.$set(t.item,"description",e)},expression:"item.description"}})],1)],1),t._v(" "),e(l.a,{staticClass:"my-2"}),t._v(" "),e(o.a,{staticClass:"py-3 row"},[e("nuxt-link",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button",to:"/order/pending"}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Cancel ")])]),t._v(" "),e(v.a),t._v(" "),t.editMode?e(r.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:t.submitting,disabled:!t.valid||t.submitting}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Update ")])]):e(r.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:t.submitting,disabled:!t.valid||t.submitting}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Add ")])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},808:function(t,e,n){"use strict";n.r(e);var r=n(625),o=n(177),c=n(693),l=n(640),d=n(194),m=n(762),v=n(644),_=n(607),h=n(124),f=(n(38),n(52),n(651)),y=n(626),C=n(24),O=n(629),I={middleware:["has_role","authenticated"],meta:{permissions:[{permission:y.a.ITEM,permissionTypes:C.a.CREATE}]},components:{ItemForm:f.default},data:function(){return{breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/dashboard"},{text:"Items",disabled:!1,href:"/inventory/items"},{text:"Add item",disabled:!0}],item:{},itemBinCard:{},editMode:!1}},apollo:{item:{query:O.c,variables:function(){return{id:this.$route.params.id}},fetchPolicy:"cache-and-network"},itemBinCard:{query:O.d,variables:function(){return{id:this.$route.params.id}},fetchPolicy:"cache-and-network"}}},w=n(60),component=Object(w.a)(I,(function(){var t,e=this,n=e._self._c;return n("div",{staticClass:"pa-5 grey lighten-3"},[n(r.a,{staticClass:"mb-3",attrs:{items:e.breadcrumbs},scopedSlots:e._u([{key:"divider",fn:function(){return[n(d.a,[e._v("mdi-chevron-double-right")])]},proxy:!0}])}),e._v(" "),n(m.a,{staticClass:"mx-0 px-5"},[n("div",[n("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[e._v("Bin Card")]),e._v(" "),n("span",{staticClass:"grey--text text--darken-1"},[e._v("Item Bin Card Is Shown Below.")])]),e._v(" "),n(_.a)],1),e._v(" "),n(m.a,{staticClass:"px-3"},[n(c.a,{attrs:{cols:"12",md:"5"}},[n(h.a,{staticClass:"py-0",attrs:{label:"Date From * ",outlined:"",required:"",type:"date"}})],1),e._v(" "),n(c.a,{attrs:{cols:"12",md:"5"}},[n(h.a,{staticClass:"py-0",attrs:{label:"Date To * ",outlined:"",required:"",type:"date"}})],1),e._v(" "),n(c.a,{attrs:{cols:"12",md:"2"}},[n(o.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[n("span",{staticClass:"v-btn__content text-white"},[e._v(" Filter")])])],1)],1),e._v(" "),n("div",{staticClass:"pa-4 pl-3"},[n(l.a,{staticClass:"grey card outlined lighten-4"},[n(m.a,[n(c.a,[n("div",{staticClass:"py-1"},[n("b",[e._v("Item Name: ")]),e._v(" "),n("span",{staticClass:"ml-1"},[e._v(e._s(e.item.name))])]),e._v(" "),n("div",{staticClass:"py-1"},[n("b",[e._v("Item Code: ")]),e._v(" "),n("span",{staticClass:"ml-1"},[e._v(e._s(e.item.stock_card_number))])]),e._v(" "),n("div",{staticClass:"py-1"},[n("b",[e._v("Part/ Model/ Serial Number/: ")]),e._v(" "),n("span",{staticClass:"ml-1"},[e._v(e._s(e.item.stock_card_number))])]),e._v(" "),n("div",{staticClass:"py-1"},[n("b",[e._v("Unit Of Measurement: ")]),e._v(" "),n("span",{staticClass:"ml-1"},[e._v(e._s(null===(t=e.item)||void 0===t||null===(t=t.unitOfMeasurement)||void 0===t?void 0:t.name))])])]),e._v(" "),n(c.a,{staticClass:"text-right"},[n("div",{staticClass:"pa-3"},[n("b",[e._v("Date: ")]),e._v(" "),n("span",{staticClass:"ml-1"},[e._v(e._s((new Date).toUTCString().slice(5,16)))]),e._v(" "),n("br")])])],1),e._v(" "),n("hr",{staticClass:"my-3"}),e._v(" "),n("div",[n(v.a,{staticClass:"blue-grey lighten-5",scopedSlots:e._u([{key:"default",fn:function(){return[n("thead",[n("tr",{staticClass:"blue-grey text-uppercase text-bold lighten-4"},[n("th",{staticClass:"font-weight-black"},[n("b",[e._v("NO")])]),e._v(" "),n("th",{staticClass:"font-weight-black"},[n("b",[e._v("Date")])]),e._v(" "),n("th",{staticClass:"font-weight-black"},[n("b",[e._v("Po.No.")])]),e._v(" "),n("th",{staticClass:"font-weight-black"},[n("b",[e._v("Quantity Received.")])]),e._v(" "),n("th",{staticClass:"font-weight-black"},[n("b",[e._v("Issuance No.")])]),e._v(" "),n("th",{staticClass:"font-weight-black"},[n("b",[e._v("Quantity Issued")])]),e._v(" "),n("th",{staticClass:"font-weight-black"},[n("b",[e._v("New Balance")])]),e._v(" "),n("th",{staticClass:"font-weight-black"},[n("b",[e._v("Processed By.")])])])]),e._v(" "),n("tbody",e._l(e.itemBinCard,(function(t,r){var o,c,l,d,m;return n("tr",{key:r},[n("td",[e._v(e._s(r+1))]),e._v(" "),n("td",[e._v(e._s(t.processed_at))]),e._v(" "),n("td",[e._v(e._s(null!==(o=t.reference_number)&&void 0!==o?o:"---"))]),e._v(" "),n("td",[e._v(e._s(null!==(c=t.approved_quantity)&&void 0!==c?c:"---"))]),e._v(" "),n("td",[e._v(e._s(null!==(l=t.issuance_number)&&void 0!==l?l:"---"))]),e._v(" "),n("td",[e._v(e._s(null!==(d=t.issued_quantity)&&void 0!==d?d:"---"))]),e._v(" "),n("td",[e._v(e._s(null!==(m=t.issued_quantity)&&void 0!==m?m:"---"))]),e._v(" "),n("td",[e._v(e._s(t.processed_by))])])})),0)]},proxy:!0}])})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);