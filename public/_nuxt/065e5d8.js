(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{627:function(t,e,n){"use strict";n.d(e,"b",(function(){return h})),n.d(e,"a",(function(){return k})),n.d(e,"d",(function(){return R})),n.d(e,"e",(function(){return y})),n.d(e,"c",(function(){return I})),n.d(e,"f",(function(){return O}));var o,c,r,d,l,m,_,v=n(92),f=n(61),h=Object(f.a)(o||(o=Object(v.a)(["\n  query($page: Int!, $per_page: Int!) {\n    items(first: $per_page, page: $page) {\n      data {\n        id\n        name\n        stock_card_number\n        description\n        expire_date\n        itemCategory {\n          id\n          name\n        }   \n        donor {\n          id\n          name\n        }  \n        lotNumber {\n          id\n          lot_number\n        }   \n        unitOfMeasurement {\n          id\n          name\n          abbreviation\n        }  \n        officeLocation {\n          id\n          address\n        } \n        stockType {\n          id\n          name\n        }   \n        whereHouse {\n          id\n          name\n          address\n        }     \n        department {\n          id\n          name\n        }   \n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }   \n  }\n"]))),k=Object(f.a)(c||(c=Object(v.a)(["\n  query All_ITEM_LOOKUP_QUERY {\n    itemCategories {\n      id\n      name\n    }   \n    donors {\n      id\n      name\n    }  \n    lotNumbers {\n      id\n      lot_number\n    }   \n    unitOfMeasurements {\n      id\n      name\n      abbreviation\n    }  \n    officeLocations {\n      id\n      address\n    } \n    stockTypes {\n      id\n      name\n    }   \n    whereHouses {\n      id\n      name\n      address\n    }     \n    departments {\n      id\n      name\n    }   \n  }\n"]))),R=Object(f.a)(r||(r=Object(v.a)(["\n  query FIND_ITEM_QUERY($id: ID!) {\n    item(id: $id) {\n        id\n        name\n        stock_card_number\n        description\n        expire_date\n        itemCategory {\n          id\n          name\n        }   \n        donor {\n          id\n          name\n        }  \n        lotNumber {\n          id\n          lot_number\n        }   \n        unitOfMeasurement {\n          id\n          name\n          abbreviation\n        }  \n        officeLocation {\n          id\n          address\n        } \n        stockType {\n          id\n          name\n        }   \n        whereHouse {\n          id\n          name\n          address\n        }     \n        department {\n          id\n          name\n        }   \n    }   \n  }\n"]))),y=Object(f.a)(d||(d=Object(v.a)(["\n  query ITEM_BIN_CARD_QUERY($id: ID!) {\n    itemBinCard(id: $id) {\n      issuance_number\n      issued_quantity\n      reference_number\n      approved_quantity\n      processed_by\n      processed_at\n    }   \n  }\n"]))),I=Object(f.a)(l||(l=Object(v.a)(["\n  mutation ($input: ItemCreateInput!) {\n    createItem(input: $input) {\n      id\n      name\n      description\n    }\n  }\n"]))),O=Object(f.a)(m||(m=Object(v.a)(["\n  mutation ($input: ItemUpdateInput!) {\n    updateItem(input: $input) {\n      id\n      name\n      description\n    }\n  }\n"])));Object(f.a)(_||(_=Object(v.a)(["\n  mutation($id: ID!) {\n    deleteItem(id: $id) {\n      id\n    }\n  }\n"])))},632:function(t,e,n){"use strict";n.d(e,"c",(function(){return h})),n.d(e,"b",(function(){return k})),n.d(e,"d",(function(){return R})),n.d(e,"a",(function(){return y})),n.d(e,"e",(function(){return I})),n.d(e,"f",(function(){return O}));var o,c,r,d,l,m,_,v=n(92),f=n(61),h=Object(f.a)(o||(o=Object(v.a)(["\n  query($page: Int!, $per_page: Int!, $status: StatusEnum) {\n    stockRequests(first: $per_page, page: $page, status: $status) {\n      data {\n        id\n        reference_no\n        requested_date\n        requester_name\n        contact_detail\n        status\n        officeLocation {\n          id\n          address\n        } \n        whereHouse {\n          id\n          name\n          address\n        }     \n        department {\n          id\n          name\n        }\n        stockRequestItems {\n          id\n          designation_contact\n          quantity\n          description\n          contact_detail\n          goodReceiveItem {\n            id\n            description\n            received_quantity\n            comment\n            item {\n              id\n              name\n              unitOfMeasurement {\n                id\n                name\n                abbreviation\n              }\n            }\n          }\n        }\n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }\n  }\n"]))),k=Object(f.a)(c||(c=Object(v.a)(["\n  query All_STOCK_REQUEST_LOOKUP_QUERY {\n    officeLocations {\n      id\n      address\n    } \n    whereHouses {\n      id\n      name\n      address\n    }     \n    departments {\n      id\n      name\n    }\n  }\n"]))),R=Object(f.a)(r||(r=Object(v.a)(["\n  mutation ($id: ID!, $input: [ID]!) {\n    checkStockRequest(id: $id, input: $input) {\n      id\n    }\n  }\n"]))),y=Object(f.a)(d||(d=Object(v.a)(["\n  mutation ($id: ID!, $input: [ID]!) {\n    approveStockRequest(id: $id, input: $input) {\n      id\n    }\n  }\n"]))),I=Object(f.a)(l||(l=Object(v.a)(["\n  mutation ($input: StockRequestCreateInput!) {\n    createStockRequest(input: $input) {\n      id\n    }\n  }\n"]))),O=Object(f.a)(m||(m=Object(v.a)(["\n  mutation ($input: StockRequestUpdateInput!) {\n    updateStockRequest(input: $input) {\n      id\n    }\n  }\n"])));Object(f.a)(_||(_=Object(v.a)(["\n  mutation($id: ID!) {\n    deleteStockRequest(id: $id) {\n      id\n    }\n  }\n"])))},683:function(t,e,n){"use strict";n.r(e);var o,c,r,d,l=n(687),m=n(177),_=n(689),v=n(690),f=n(274),h=n(755),k=n(124),R=n(623),y=(n(38),n(14),n(87),n(13),n(12),n(6),n(15),n(10),n(16),n(1)),I=(n(71),n(106)),O=n(627),$=n(92),j=n(61),C=(Object(j.a)(o||(o=Object($.a)(["\n  query($page: Int!, $per_page: Int!) {\n    stockRequestItems(first: $per_page, page: $page) {\n      data {\n        id\n        designation_contact\n        quantity\n        description\n        contact_detail\n        approved_quantity\n        quantity\n        checked_quantity\n        stockRequest {\n          id\n          reference_no\n        }\n        # item {\n        #   id\n        #   name\n        # }\n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }\n  }\n"]))),Object(j.a)(c||(c=Object($.a)(["\n  mutation ($input: StockRequestItemCreateInput!) {\n    createStockRequestItem(input: $input) {\n      id\n    }\n  }\n"]))),Object(j.a)(r||(r=Object($.a)(["\n  mutation ($input: StockRequestItemUpdateInput!) {\n    updateStockRequestItem(input: $input) {\n      id\n    }\n  }\n"]))));Object(j.a)(d||(d=Object($.a)(["\n  mutation($id: ID!) {\n    deleteStockRequestItem(id: $id) {\n      id\n    }\n  }\n"])));function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S={props:["_stockRequestItem","_index","items"],data:function(){return{lookup:{},stockRequestItem:{},valid:!1,editMode:!1,submitting:!1,fieldRequiredRole:[function(t){return!!t||"This field is required"}],items:[],disableForm:!1}},apollo:{items:{query:O.b,fetchPolicy:"cache-and-network",variables:function(){return{page:1,per_page:1e5}}}},methods:x(x({},Object(I.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(t){var e,n;this.$refs.form.validate()&&(this.editMode?null!==(e=this.stockRequestItem)&&void 0!==e&&e.id?this.updateItem(t):this.$emit("on-update-stock-request-item",this.stockRequestItem):null!==(n=this._stockRequest)&&void 0!==n&&n.id?this.registerStockRequestItem(t):(this.$emit("on-add-stock-request-item",this.stockRequestItem),this.editMode=!0))},updateItem:function(t){var e=this;this.$apollo.mutate({mutation:C,variables:{input:this.stockRequestItem}}).then((function(n){n.data;e.successNotification("Item updated successfully!"),t.target.reset(),e.$router.go(-1),e.submitting=!1})).catch((function(t){console.log(t)}))}}),watch:{$props:{handler:function(){var t,e;null!==(t=this._stockRequestItem)&&void 0!==t&&t.item_id?(this.stockRequestItem=x({},this._stockRequestItem),this.stockRequestItem.item_id=parseInt(this._stockRequestItem.item_id),null!==(e=this._stockRequestItem)&&void 0!==e&&e.id&&(this.editMode=!0)):(this.editMode=!1,this.stockRequestItem={})},deep:!0,immediate:!0},items:{handler:function(){this.items.data&&(this.items=this.items.data.map((function(t){return t.id=parseInt(t.id),t})))}}}},D=n(60),component=Object(D.a)(S,(function(){var t,e,n,o=this,c=o._self._c;return c(v.a,{ref:"form",staticClass:"py-2",staticStyle:{position:"relative"},attrs:{disabled:o.disableForm},on:{submit:function(t){return t.preventDefault(),o.onFormSubmitted.apply(null,arguments)}},model:{value:o.valid,callback:function(t){o.valid=t},expression:"valid"}},[c("hr",{staticClass:"my-5 mx-3",staticStyle:{width:"85%"}}),o._v(" "),c(l.a,{staticClass:"ml-3",staticStyle:{position:"absolute",left:"-5px",top:"20px"},attrs:{color:o.editMode?"success":"error",content:o._index+1,inline:""}}),o._v(" "),c(h.a,{staticClass:"ma-2 pt-5 grey lighten-2"},[c(_.a,{attrs:{cols:"12",md:"3"}},[c(f.a,[c("b",[o._v("Item")])]),o._v(" "),c("br"),o._v(" "),c("hr"),o._v("\n      "+o._s(null===(t=o._stockRequestItem)||void 0===t||null===(t=t.item)||void 0===t?void 0:t.name)+"\n    ")],1),o._v(" "),c(_.a,{attrs:{cols:"12",md:"3"}},[c(f.a,[c("b",[o._v("Item Description")])]),o._v(" "),c("br"),o._v(" "),c("hr"),o._v("\n      "+o._s(null===(e=o._stockRequestItem)||void 0===e?void 0:e.description)+"\n    ")],1),o._v(" "),c(_.a,{attrs:{cols:"12",md:"2"}},[c(f.a,[c("b",[o._v("Available Quantity")])]),o._v(" "),c("br"),o._v(" "),c("hr"),o._v("\n      "+o._s(null===(n=o._stockRequestItem)||void 0===n?void 0:n.received_quantity)+"\n    ")],1),o._v(" "),c(_.a,{attrs:{cols:"12",md:"4"}},[c(k.a,{staticClass:"py-0",attrs:{label:"Destination * ",outlined:"",required:"",rules:o.fieldRequiredRole},model:{value:o.stockRequestItem.description,callback:function(t){o.$set(o.stockRequestItem,"description",t)},expression:"stockRequestItem.description"}})],1),o._v(" "),c(_.a,{attrs:{cols:"12",md:"2"}},[c(k.a,{staticClass:"py-0",attrs:{label:"Quantity * ",outlined:"",required:"",rules:o.fieldRequiredRole},model:{value:o.stockRequestItem.Quantity,callback:function(t){o.$set(o.stockRequestItem,"Quantity",o._n(t))},expression:"stockRequestItem.Quantity"}})],1),o._v(" "),c(_.a,{attrs:{cols:"12",md:"4"}},[c(R.a,{staticClass:"py-0",attrs:{label:"Contact Person at Destination * ",rows:"1",outlined:"",required:"",rules:o.fieldRequiredRole},model:{value:o.stockRequestItem.designation_contact,callback:function(t){o.$set(o.stockRequestItem,"designation_contact",t)},expression:"stockRequestItem.designation_contact"}})],1),o._v(" "),c(_.a,{attrs:{cols:"12",md:"4"}},[c(R.a,{staticClass:"py-0",attrs:{label:"Contact Detail * ",rows:"1",outlined:"",required:"",rules:o.fieldRequiredRole},model:{value:o.stockRequestItem.contact_detail,callback:function(t){o.$set(o.stockRequestItem,"contact_detail",t)},expression:"stockRequestItem.contact_detail"}})],1),o._v(" "),c(_.a,{attrs:{cols:"12",md:"2"}},[c(m.a,{staticClass:"v-btn mt-2 v-size--default black white--text dark",attrs:{type:"submit",loading:o.submitting}},[o._v("\n        Save Changes\n      ")])],1),o._v(" "),c(_.a,{staticClass:"py-3 row mt-0"},[o.editMode?c("div",{staticStyle:{position:"absolute",right:"4px",top:"-2px"}},[c(m.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text blue",attrs:{type:"submit",loading:o.submitting,disabled:!o.valid||o.submitting||o.disableForm}},[c("span",{staticClass:"v-btn__content text-white"},[o._v(" Update ")])]),o._v(" "),c(m.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text red",attrs:{type:"button",loading:o.submitting,disabled:!o.valid||o.submitting||o.disableForm},on:{click:function(t){return o.$emit("on-delete-stock-request-item",o._index)}}},[c("span",{staticClass:"v-btn__content text-white"},[o._v(" Delete ")])])],1):o._e()])],1)],1)}),[],!1,null,null,null);e.default=component.exports},688:function(t,e,n){"use strict";n.r(e);var o=n(649),c=n(687),r=n(177),d=n(276),l=n(231),m=n(689),_=n(643),v=n(273),f=n(690),h=n(194),k=n(274),R=n(755),y=n(607),I=n(124),O=n(623),$=(n(38),n(14),n(87),n(13),n(12),n(6),n(15),n(10),n(16),n(1)),j=(n(71),n(106)),C=n(632);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object($.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S={components:{StockRequestItemForm:n(683).default},props:["_item","selectedItems"],data:function(){return{lookup:{},stockRequest:{stockRequestItems:[]},valid:!1,editMode:!1,submitting:!1,fieldRequiredRole:[function(t){return!!t||"This field is required"}],officeLocations:[],whereHouses:[],departments:[],stockRequestItems:[]}},apollo:{lookup:{query:C.b,fetchPolicy:"cache-and-network",update:function(data){return data}}},methods:x(x({},Object(j.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(t){this.editMode?this.updateItem(t):this.registerItem(t)},registerItem:function(t){var e=this;console.log(this.stockRequest,this.selectedItems),this.stockRequest.stockRequestItems=this.selectedItems.map((function(t){return{designation_contact:t.designation_contact,quantity:t.quantity,description:t.description,contact_detail:t.contact_detail,destination_contact:t.destination_contact,good_receive_item_id:parseInt(t.id)}})),console.log(this.stockRequest),this.$refs.form.validate(),this.submitting=!0,this.$apollo.mutate({mutation:C.e,variables:{input:this.stockRequest}}).then((function(t){t.data;e.successNotification("Item registered  successfully!"),e.$router.push("/stock_request"),e.submitting=!1})).catch((function(t){e.submitting=!1,console.log(t)}))},updateItem:function(t){var e=this;this.$apollo.mutate({mutation:C.f,variables:{input:this.stockRequest}}).then((function(n){n.data;e.successNotification("Item updated successfully!"),t.target.reset(),e.$router.go(-1),e.submitting=!1})).catch((function(t){console.log(t)}))}}),watch:{$props:{handler:function(){var t;console.log(this._item),null!==(t=this._stockRequestItem)&&void 0!==t&&t.id?(this.editMode=!0,this.stockRequestItems.push({})):(this.editMode=!1,this.stockRequestItems=[{}])},deep:!0,immediate:!0},lookup:{handler:function(){this.lookup&&(this.officeLocations=this.lookup.officeLocations.map((function(t){return t.id=parseInt(t.id),t})),this.whereHouses=this.lookup.whereHouses.map((function(t){return t.id=parseInt(t.id),t})),this.departments=this.lookup.departments.map((function(t){return t.id=parseInt(t.id),t})))}}}},D=n(60),component=Object(D.a)(S,(function(){var t=this,e=t._self._c;return e(d.a,[e("div",{staticClass:"grey lighten-2 pa-2 pb-4"},[e(R.a,{staticClass:"mx-0"},[e("div",[e(l.c,{staticClass:"text-h5 pb-0"},[t._v("\n          Stock Request Registration Form\n        ")]),t._v(" "),e("span",{staticClass:"ml-4"},[t._v("registration form")])],1),t._v(" "),e(y.a),t._v(" "),e("button",{staticClass:"v-btn ma-5 mt-6 v-btn--is-elevated v-btn--has-bg theme--light pl-1 black v-size--default white--text",attrs:{icon:"mdi-pen"}},[e(h.a,{attrs:{right:"",dark:"",medium:""}},[t._v(" mdi-pen ")]),t._v(" "),e("span",{staticClass:"v-btn__content text-white ml-1"},[t._v(" Edit ")])],1)],1)],1),t._v(" "),e(f.a,{ref:"form",on:{submit:function(e){return e.preventDefault(),t.onFormSubmitted.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(_.a,[e(R.a,[e(m.a,{attrs:{cols:"12",md:"6"}},[e(I.a,{staticClass:"py-0",attrs:{label:"Requester Name * ",outlined:"",required:"",rules:t.fieldRequiredRole},model:{value:t.stockRequest.requester_name,callback:function(e){t.$set(t.stockRequest,"requester_name",e)},expression:"stockRequest.requester_name"}})],1),t._v(" "),e(m.a,{attrs:{cols:"12",md:"6"}},[e(O.a,{staticClass:"py-0",attrs:{label:"Enter contract detail",rows:"1",outlined:"",required:""},model:{value:t.stockRequest.contact_detail,callback:function(e){t.$set(t.stockRequest,"contact_detail",e)},expression:"stockRequest.contact_detail"}})],1),t._v(" "),e(m.a,{attrs:{cols:"12",md:"7"}},[e(I.a,{staticClass:"py-0",attrs:{label:"Request Reference Number * ",outlined:"",required:"",rules:t.fieldRequiredRole},model:{value:t.stockRequest.reference_no,callback:function(e){t.$set(t.stockRequest,"reference_no",e)},expression:"stockRequest.reference_no"}})],1),t._v(" "),e(m.a,{attrs:{cols:"12",md:"5"}},[e(I.a,{staticClass:"py-0",attrs:{label:"Requested Date ",outlined:"",required:"",type:"date",rules:t.fieldRequiredRole},model:{value:t.stockRequest.requested_date,callback:function(e){t.$set(t.stockRequest,"requested_date",e)},expression:"stockRequest.requested_date"}})],1),t._v(" "),e(m.a,{attrs:{cols:"12",md:"4"}},[e(o.a,{attrs:{items:t.officeLocations,"item-value":"id","item-text":"address",label:"Select Office Location *",outlined:"",required:"",rules:t.fieldRequiredRole},model:{value:t.stockRequest.office_location_id,callback:function(e){t.$set(t.stockRequest,"office_location_id",t._n(e))},expression:"stockRequest.office_location_id"}})],1),t._v(" "),e(m.a,{attrs:{cols:"12",md:"4"}},[e(o.a,{attrs:{items:t.whereHouses,"item-value":"id","item-text":"name",label:"Select Warehouse *",outlined:"",required:"",rules:t.fieldRequiredRole},model:{value:t.stockRequest.where_house_id,callback:function(e){t.$set(t.stockRequest,"where_house_id",t._n(e))},expression:"stockRequest.where_house_id"}})],1),t._v(" "),e(m.a,{attrs:{cols:"12",md:"4"}},[e(o.a,{attrs:{items:t.departments,"item-value":"id","item-text":"name",label:"Select Department *",outlined:"",required:"",rules:t.fieldRequiredRole},model:{value:t.stockRequest.department_id,callback:function(e){t.$set(t.stockRequest,"department_id",t._n(e))},expression:"stockRequest.department_id"}})],1)],1),t._v(" "),e("div",{staticClass:"px-3"},[e("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[t._v("Items")]),t._v(" "),e("span",{staticClass:"grey--text text--darken-1"},[t._v("Enter all the required details of the item.")])]),t._v(" "),t._l(t.selectedItems,(function(n,o){var r;return e("div",{key:o,staticStyle:{position:"relative"}},[e("hr",{staticClass:"my-5 mx-3",staticStyle:{width:"85%"}}),t._v(" "),e(c.a,{staticClass:"ml-3",staticStyle:{position:"absolute",top:"-10px"},attrs:{color:t.editMode?"success":"error",inline:""}}),t._v(" "),e(R.a,{staticClass:"ma-2 pt-5 grey lighten-2"},[e(m.a,{staticClass:"my-0 py-0",attrs:{cols:"12",md:"3"}},[e(k.a,[e("b",[t._v("Item")])]),t._v(" "),e("br"),t._v(" "),e("hr"),t._v("\n            "+t._s(null==n||null===(r=n.item)||void 0===r?void 0:r.name)+"\n          ")],1),t._v(" "),e(m.a,{staticClass:"my-0 py-0",attrs:{cols:"12",md:"3"}},[e(k.a,[e("b",[t._v("Item Description")])]),t._v(" "),e("br"),t._v(" "),e("hr"),t._v("\n            "+t._s(null==n?void 0:n.description)+"\n          ")],1),t._v(" "),e(m.a,{staticClass:"my-0 py-0",attrs:{cols:"12",md:"2"}},[e(k.a,[e("b",[t._v("Available Quantity")])]),t._v(" "),e("br"),t._v(" "),e("hr"),t._v("\n            "+t._s(null==n?void 0:n.received_quantity)+"\n          ")],1),t._v(" "),e(m.a,{staticClass:"my-0 py-0",attrs:{cols:"12",md:"4"}},[e(I.a,{staticClass:"py-0",attrs:{label:"Destination * ",outlined:"",required:"",rules:t.fieldRequiredRole},model:{value:n.description,callback:function(e){t.$set(n,"description",e)},expression:"stockRequestItem.description"}})],1),t._v(" "),e(m.a,{staticClass:"my-0 py-0",attrs:{cols:"12",md:"2"}},[e(I.a,{staticClass:"py-0",attrs:{label:"Quantity * ",outlined:"",required:"",rules:t.fieldRequiredRole},model:{value:n.quantity,callback:function(e){t.$set(n,"quantity",t._n(e))},expression:"stockRequestItem.quantity"}})],1),t._v(" "),e(m.a,{staticClass:"my-0 py-0",attrs:{cols:"12",md:"5"}},[e(O.a,{staticClass:"py-0",attrs:{label:"Contact Person at Destination * ",rows:"1",outlined:"",required:"",rules:t.fieldRequiredRole},model:{value:n.designation_contact,callback:function(e){t.$set(n,"designation_contact",e)},expression:"stockRequestItem.designation_contact"}})],1),t._v(" "),e(m.a,{staticClass:"my-0 py-0",attrs:{cols:"12",md:"5"}},[e(O.a,{staticClass:"py-0",attrs:{label:"Contact Detail * ",rows:"1",outlined:"",required:"",rules:t.fieldRequiredRole},model:{value:n.contact_detail,callback:function(e){t.$set(n,"contact_detail",e)},expression:"stockRequestItem.contact_detail"}})],1)],1)],1)})),t._v(" "),e(v.a,{staticClass:"my-2"}),t._v(" "),e(m.a,{staticClass:"py-3 row"},[e("nuxt-link",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button",to:"/order/pending"}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Cancel ")])]),t._v(" "),e(y.a),t._v(" "),t.editMode?e(r.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:t.submitting,disabled:!t.valid||t.submitting}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Update ")])]):e(r.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:t.submitting}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Submit ")])])],1)],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);