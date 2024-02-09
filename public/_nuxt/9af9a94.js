(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{629:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o={USER:"User",ROLE:"Role",PERMISSION:"Permission",PERMISSION_TYPE:"PermissionType",MEASUREMENT_UNIT:"MeasurementUnit",REPORT:"Report",CONFIGURATION:"Configuration",ITEM_CATEGORY:"ItemCategory",ITEM:"Item",ASSET:"Asset",STOCK_REQUEST:"StockRequest",STOCK_REQUEST_ITEM:"StockRequestItem",CONDITION:"Condition",WHERE_HOUSE:"WhereHouse",OFFICE_LOCATION:"OfficeLocation",PROGRAM_AREA:"ProgramArea",ACQUISITION_TYPE:"AcquisitionType",GOOD_RECEIVE:"GoodReceive",STOCK_ISSUE:"StockIssue"}},630:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"c",(function(){return y})),n.d(e,"d",(function(){return O})),n.d(e,"b",(function(){return C})),n.d(e,"e",(function(){return I}));var o,r,c,d,l,m,_,v=n(93),h=n(61),f=Object(h.a)(o||(o=Object(v.a)(["\n  query($page: Int!, $per_page: Int!, $name: String) {\n    items(first: $per_page, page: $page, name: $name) {\n      data {\n        id\n        name\n        item_code\n        description\n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }   \n  }\n"]))),y=(Object(h.a)(r||(r=Object(v.a)(["\n  query All_ITEM_LOOKUP_QUERY {\n    itemCategories {\n      id\n      name\n    }   \n    donors {\n      id\n      name\n    }  \n    lotNumbers {\n      id\n      lot_number\n    }   \n    unitOfMeasurements {\n      id\n      name\n      abbreviation\n    }  \n    officeLocations {\n      id\n      address\n    } \n    stockTypes {\n      id\n      name\n    }   \n    whereHouses {\n      id\n      name\n      address\n    }     \n    departments {\n      id\n      name\n    }   \n  }\n"]))),Object(h.a)(c||(c=Object(v.a)(["\n  query FIND_ITEM_QUERY($id: ID!) {\n    item(id: $id) {\n        id\n        name\n        item_code\n        description\n    }   \n  }\n"])))),O=Object(h.a)(d||(d=Object(v.a)(["\n  query ITEM_BIN_CARD_QUERY($id: ID!, $date_from: Date, $date_to: Date) {\n    itemBinCard(id: $id, date_from: $date_from, date_to: $date_to) {\n      stockIssueItems {\n        id\n        quantity\n        stockIssue {\n          id\n          date\n          created_at\n          createdBy {\n            id\n            name\n          }\n          stockRequest {\n            id\n            reference_no\n          }\n        }\n      }\n      goodReceiveItem {\n        id\n          received_quantity\n          checked_quantity\n          approved_quantity\n          description\n          expiry_date\n          comment\n          condition\n          unit_price\n          created_at\n          unitOfMeasurement {\n            id\n            abbreviation\n          }\n          donor {\n            id\n            name\n          }\n          stockType {\n            id\n            name\n          }\n          project {\n            id\n            name\n          }\n          goodReceive {\n            id\n            remark\n            status\n            received_by\n            received_date\n            reference_number\n            batch_number\n            loading_number\n            itemCategory {\n              id\n              name\n            }\n            projectObject {\n              id\n              name\n            }\n            createdBy {\n              id\n              name\n            }\n          }\n          item {\n            id\n            name\n            description\n          }\n      }\n    }   \n  }\n"]))),C=Object(h.a)(l||(l=Object(v.a)(["\n  mutation ($input: ItemCreateInput!) {\n    createItem(input: $input) {\n      id\n    }\n  }\n"]))),I=Object(h.a)(m||(m=Object(v.a)(["\n  mutation ($input: ItemUpdateInput!) {\n    updateItem(input: $input) {\n      id\n    }\n  }\n"])));Object(h.a)(_||(_=Object(v.a)(["\n  mutation($id: ID!) {\n    deleteItem(id: $id) {\n      id\n    }\n  }\n"])))},645:function(t,e,n){"use strict";n.r(e);var o=n(177),r=n(695),c=n(632),d=n(274),l=n(696),m=n(796),_=n(609),v=n(125),h=n(624),f=(n(39),n(14),n(88),n(13),n(11),n(6),n(16),n(10),n(17),n(1)),y=n(108),O=n(630);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function I(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(f.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x={props:["_item"],data:function(){return{lookup:{},item:{},valid:!1,editMode:!1,submitting:!1,fieldRequiredRole:[function(t){return!!t||"This field is required"}]}},methods:I(I({},Object(y.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(t){this.$refs.form.validate()&&(this.editMode?this.updateItem(t):this.registerItem(t))},registerItem:function(t){var e=this;this.$refs.form.validate(),this.submitting=!0,this.$apollo.mutate({mutation:O.b,variables:{input:this.item}}).then((function(n){n.data;e.successNotification("Item registered  successfully!"),t.target.reset(),e.$router.push("/inventory/items"),e.submitting=!1})).catch((function(t){e.submitting=!1,console.log(t)}))},updateItem:function(t){var e=this;delete this.item.__typename,this.$apollo.mutate({mutation:O.e,variables:{input:this.item}}).then((function(n){n.data;e.successNotification("Item updated successfully!"),t.target.reset(),e.$router.push("/inventory/items"),e.submitting=!1})).catch((function(t){console.log(t)}))}}),watch:{$props:{handler:function(){var t;console.log(this._item),null!==(t=this._item)&&void 0!==t&&t.id?(this.editMode=!0,this.item.name=this._item.name,this.item.description=this._item.description,this.item.item_code=this._item.item_code,this.item.id=this._item.id):(this.editMode=!1,this.item={})},deep:!0,immediate:!0}}},R=n(51),component=Object(R.a)(x,(function(){var t=this,e=t._self._c;return e(l.a,{ref:"form",on:{submit:function(e){return e.preventDefault(),t.onFormSubmitted.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(c.a,[e(m.a,[e(r.a,{staticClass:"py-0",attrs:{cols:"12",md:"9"}},[e(v.a,{staticClass:"py-0",attrs:{label:"Item Name * ",outlined:"",required:"",rules:t.fieldRequiredRole},model:{value:t.item.name,callback:function(e){t.$set(t.item,"name",e)},expression:"item.name"}})],1),t._v(" "),e(r.a,{staticClass:"py-0",attrs:{cols:"12",md:"3"}},[e(v.a,{staticClass:"py-0",attrs:{label:"Item Code",outlined:"",required:""},model:{value:t.item.item_code,callback:function(e){t.$set(t.item,"item_code",e)},expression:"item.item_code"}})],1),t._v(" "),e(r.a,{staticClass:"py-0",attrs:{cols:"12",md:"12"}},[e(h.a,{staticClass:"py-0",attrs:{label:"Enter a short description",rows:"3",outlined:"",required:""},model:{value:t.item.description,callback:function(e){t.$set(t.item,"description",e)},expression:"item.description"}})],1)],1),t._v(" "),e(d.a,{staticClass:"my-2"}),t._v(" "),e(r.a,{staticClass:"py-3 row"},[e("nuxt-link",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button",to:"/order/pending"}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Cancel ")])]),t._v(" "),e(_.a),t._v(" "),t.editMode?e(o.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:t.submitting,disabled:!t.valid||t.submitting}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Update ")])]):e(o.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:t.submitting,disabled:!t.valid||t.submitting}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Add ")])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},647:function(t,e,n){"use strict";n.d(e,"c",(function(){return y})),n.d(e,"f",(function(){return O})),n.d(e,"b",(function(){return C})),n.d(e,"d",(function(){return I})),n.d(e,"a",(function(){return x})),n.d(e,"e",(function(){return R})),n.d(e,"g",(function(){return $}));var o,r,c,d,l,m,_,v,h=n(93),f=n(61),y=Object(f.a)(o||(o=Object(h.a)(["\n  query($page: Int!, $per_page: Int!, $status: StatusEnum, $where_house_id: ID) {\n    goodReceives(first: $per_page, page: $page, status: $status, where_house_id: $where_house_id) {\n      data {\n        id\n        remark\n        vendor_name\n        purchase_order_no\n        invoice_no\n        project\n        status\n        received_by\n        received_date\n        reference_number\n        whereHouse {\n          id\n          name\n        }\n        goodReceiveItems {\n          id\n          received_quantity\n          checked_quantity\n          approved_quantity\n          description\n          expiry_date\n          comment\n          condition\n          unitOfMeasurement {\n            id\n            abbreviation\n          }\n          donor {\n            id\n            name\n          }\n          item {\n            id\n            name\n          }\n        }\n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }\n  }\n"]))),O=Object(f.a)(r||(r=Object(h.a)(["\n  query($id: ID!) {\n    goodReceive(id: $id) {\n      id\n      remark\n      vendor_name\n      vendor_id\n      purchase_order_no\n      invoice_no\n      project\n      status\n      received_by\n      received_date\n      reference_number\n      projectObject {\n        id\n        name\n      }\n      whereHouse {\n        id\n        name\n        address\n      }\n      goodReceiveItems {\n        id\n        received_quantity\n        checked_quantity\n        approved_quantity\n        description\n        expiry_date\n        comment\n        condition\n        unit_price\n        unitOfMeasurement {\n          id\n          abbreviation\n        }\n        donor {\n          id\n          name\n        }\n        project {\n          id\n          name\n        }\n        item {\n          id\n          name\n        }\n      }\n    }\n  }\n"]))),C=Object(f.a)(c||(c=Object(h.a)(["\n  query All_GOOD_RECEIVE_LOOKUP_QUERY($where_house_id: ID) {\n    whereHouses(id: $where_house_id) {\n      id\n      name\n    }     \n    conditions {\n      id\n      name\n    }\n    donors {\n      id\n      name\n    }\n    projects {\n      id\n      name\n      outline_no\n    }\n    stockTypes {\n      id\n      name\n    }\n    itemCategories {\n      id\n      name\n    }\n    unitOfMeasurements {\n      id\n      name\n      abbreviation\n    }  \n  }\n"]))),I=Object(f.a)(d||(d=Object(h.a)(["\n  mutation ($id: ID!, $input: [GoodReceiveCheckInput]!) {\n    checkGoodReceive(id: $id, input: $input) {\n      id\n    }\n  }\n"]))),x=Object(f.a)(l||(l=Object(h.a)(["\n  mutation ($id: ID!, $input: [GoodReceiveApproveInput]!) {\n    approveGoodReceive(id: $id, input: $input) {\n      id\n    }\n  }\n"]))),R=Object(f.a)(m||(m=Object(h.a)(["\n  mutation ($input: GoodReceiveCreateInput!) {\n    createGoodReceive(input: $input) {\n      id\n    }\n  }\n"]))),$=Object(f.a)(_||(_=Object(h.a)(["\n  mutation ($input: GoodReceiveUpdateInput!) {\n    updateGoodReceive(input: $input) {\n      id\n    }\n  }\n"])));Object(f.a)(v||(v=Object(h.a)(["\n  mutation($id: ID!) {\n    deleteGoodReceive(id: $id) {\n      id\n    }\n  }\n"])))},847:function(t,e,n){"use strict";n.r(e);var o=n(626),r=n(632),c=n(195),d=n(796),l=n(644),m=(n(39),n(14),n(88),n(645)),_=n(629),v=n(21),h=n(647),f={middleware:["has_role","authenticated"],meta:{permissions:[{permission:_.a.GOOD_RECEIVE,permissionTypes:v.a.READ}]},components:{ItemForm:m.default},data:function(){return{breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/dashboard"},{text:"Received Goods",disabled:!1,href:"/good_receive/index"},{text:"Detail",disabled:!0}],goodReceive:{}}},apollo:{goodReceive:{query:h.f,variables:function(){return{id:this.$route.params.id}},fetchPolicy:"cache-and-network"}}},y=n(51),component=Object(y.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-5 grey lighten-3"},[e(o.a,{attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[e(c.a,[t._v("mdi-chevron-double-right")])]},proxy:!0}])}),t._v(" "),t._m(0),t._v(" "),e(r.a,{staticClass:"card"},[e(d.a,{staticClass:"px-8 py-4"},[e("div",{staticClass:"pa-3 col-6",staticStyle:{"border-bottom":"solid 1px rgba(110, 110, 110, 0.3)"}},[e("b",{staticClass:"text-uppercase"},[t._v("Good Receive Number: ")]),t._v(" "),e("span",{staticClass:"ml-1"},[t._v(t._s(t.goodReceive.id))])]),t._v(" "),e("div",{staticClass:"pa-3 col-6",staticStyle:{"border-bottom":"solid 1px rgba(110, 110, 110, 0.3)"}},[e("b",{staticClass:"text-uppercase"},[t._v("Vendor Name: ")]),t._v(" "),e("span",{staticClass:"ml-1"},[t._v(t._s(t.goodReceive.vendor_name))])]),t._v(" "),e("div",{staticClass:"pa-3 col-6",staticStyle:{"border-bottom":"solid 1px rgba(110, 110, 110, 0.3)"}},[e("b",{staticClass:"text-uppercase"},[t._v("Purchase Order Number: ")]),t._v(" "),e("span",{staticClass:"ml-1"},[t._v(t._s(t.goodReceive.purchase_order_no))])]),t._v(" "),e("div",{staticClass:"pa-3 col-6",staticStyle:{"border-bottom":"solid 1px rgba(110, 110, 110, 0.3)"}},[e("b",{staticClass:"text-uppercase"},[t._v("Invoice Number: ")]),t._v(" "),e("span",{staticClass:"ml-1"},[t._v(t._s(t.goodReceive.invoice_no))])]),t._v(" "),e("div",{staticClass:"pa-3 col-6",staticStyle:{"border-bottom":"solid 1px rgba(110, 110, 110, 0.3)"}},[e("b",{staticClass:"text-uppercase"},[t._v("Reference Number: ")]),t._v(" "),e("span",{staticClass:"ml-1"},[t._v(t._s(t.goodReceive.reference_number))])]),t._v(" "),e("div",{staticClass:"pa-3 col-6",staticStyle:{"border-bottom":"solid 1px rgba(110, 110, 110, 0.3)"}},[e("b",{staticClass:"text-uppercase"},[t._v("Received By: ")]),t._v(" "),e("span",{staticClass:"ml-1"},[t._v(t._s(t.goodReceive.received_by))])])]),t._v(" "),e(l.a,{staticClass:"blue-grey lighten-5 ma-5",attrs:{responsive:""},scopedSlots:t._u([{key:"default",fn:function(){var n;return[e("thead",[e("tr",{staticClass:"blue lighten-1 white--text text-uppercase"},[e("th",{staticClass:"text-center white--text"},[t._v("#")]),t._v(" "),e("th",{staticClass:"text-center white--text",staticStyle:{"min-width":"120px"}},[e("b",[t._v("Item")])]),t._v(" "),e("th",{staticClass:"text-center white--text",staticStyle:{"min-width":"120px"}},[e("b",[t._v("Quantity")])]),t._v(" "),e("th",{staticClass:"text-center white--text py-2",staticStyle:{"min-width":"150px"}},[e("b",[t._v("Expiry Date")])]),t._v(" "),e("th",{staticClass:"text-center white--text",staticStyle:{"min-width":"120px"}},[e("b",[t._v("Condition")])]),t._v(" "),e("th",{staticClass:"text-center white--text",staticStyle:{"min-width":"120px"}},[e("b",[t._v("Project")])]),t._v(" "),e("th",{staticClass:"text-center white--text",staticStyle:{"min-width":"120px"}},[e("b",[t._v("Donor")])]),t._v(" "),e("th",{staticClass:"text-center white--text",staticStyle:{"min-width":"120px"}},[e("b",[t._v("Description")])])])]),t._v(" "),e("tbody",t._l(null===(n=t.goodReceive)||void 0===n?void 0:n.goodReceiveItems,(function(n,o){var r,c,d;return e("tr",{key:n.ID,class:{"red lighten-5":n.disposed}},[e("td",{staticClass:"text-center"},[t._v(t._s(o+1))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v("\n              "+t._s(null==n||null===(r=n.item)||void 0===r?void 0:r.name)+"\n              "+t._s(null==n?void 0:n.unitOfMeasurement.abbreviation)+"\n            ")]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(null==n?void 0:n.received_quantity))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(null==n?void 0:n.expiry_date))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(null==n?void 0:n.condition))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(null==n||null===(c=n.project)||void 0===c?void 0:c.name))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(null==n||null===(d=n.donor)||void 0===d?void 0:d.name))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(null==n?void 0:n.description))])])})),0)]},proxy:!0}])})],1)],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"px-7"},[e("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[t._v("GOOD RECEIVE DETAIL")]),t._v(" "),e("span",{staticClass:"grey--text text--darken-1"},[t._v("Detail information is shown below.")])])}],!1,null,null,null);e.default=component.exports}}]);