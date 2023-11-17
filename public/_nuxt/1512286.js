(window.webpackJsonp=window.webpackJsonp||[]).push([[4,24],{631:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return R})),n.d(t,"d",(function(){return y})),n.d(t,"b",(function(){return $})),n.d(t,"e",(function(){return O}));var o,d,r,c,l,m,v,_=n(92),f=n(61),h=Object(f.a)(o||(o=Object(_.a)(["\n  query($page: Int!, $per_page: Int!, $name: String) {\n    items(first: $per_page, page: $page, name: $name) {\n      data {\n        id\n        name\n        item_code\n        description\n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }   \n  }\n"]))),R=(Object(f.a)(d||(d=Object(_.a)(["\n  query All_ITEM_LOOKUP_QUERY {\n    itemCategories {\n      id\n      name\n    }   \n    donors {\n      id\n      name\n    }  \n    lotNumbers {\n      id\n      lot_number\n    }   \n    unitOfMeasurements {\n      id\n      name\n      abbreviation\n    }  \n    officeLocations {\n      id\n      address\n    } \n    stockTypes {\n      id\n      name\n    }   \n    whereHouses {\n      id\n      name\n      address\n    }     \n    departments {\n      id\n      name\n    }   \n  }\n"]))),Object(f.a)(r||(r=Object(_.a)(["\n  query FIND_ITEM_QUERY($id: ID!) {\n    item(id: $id) {\n        id\n        name\n        item_code\n        description\n    }   \n  }\n"])))),y=Object(f.a)(c||(c=Object(_.a)(["\n  query ITEM_BIN_CARD_QUERY($id: ID!, $date_from: Date, $date_to: Date) {\n    itemBinCard(id: $id, date_from: $date_from, date_to: $date_to) {\n      stockIssueItems {\n        id\n        quantity\n        stockIssue {\n          id\n          date\n          created_at\n          stockRequest {\n            id\n            reference_no\n          }\n        }\n      }\n      goodReceiveItem {\n        id\n          received_quantity\n          checked_quantity\n          approved_quantity\n          description\n          expiry_date\n          comment\n          condition\n          unit_price\n          created_at\n          unitOfMeasurement {\n            id\n            abbreviation\n          }\n          donor {\n            id\n            name\n          }\n          stockType {\n            id\n            name\n          }\n          project {\n            id\n            name\n          }\n          goodReceive {\n            id\n            remark\n            status\n            received_by\n            received_date\n            reference_number\n            batch_number\n            loading_number\n            itemCategory {\n              id\n              name\n            }\n            projectObject {\n              id\n              name\n            }\n          }\n          item {\n            id\n            name\n            description\n          }\n      }\n    }   \n  }\n"]))),$=Object(f.a)(l||(l=Object(_.a)(["\n  mutation ($input: ItemCreateInput!) {\n    createItem(input: $input) {\n      id\n    }\n  }\n"]))),O=Object(f.a)(m||(m=Object(_.a)(["\n  mutation ($input: ItemUpdateInput!) {\n    updateItem(input: $input) {\n      id\n    }\n  }\n"])));Object(f.a)(v||(v=Object(_.a)(["\n  mutation($id: ID!) {\n    deleteItem(id: $id) {\n      id\n    }\n  }\n"])))},646:function(e,t,n){"use strict";n.d(t,"c",(function(){return R})),n.d(t,"f",(function(){return y})),n.d(t,"b",(function(){return $})),n.d(t,"d",(function(){return O})),n.d(t,"a",(function(){return I})),n.d(t,"e",(function(){return j})),n.d(t,"g",(function(){return k}));var o,d,r,c,l,m,v,_,f=n(92),h=n(61),R=Object(h.a)(o||(o=Object(f.a)(["\n  query($page: Int!, $per_page: Int!, $status: StatusEnum, $where_house_id: ID) {\n    goodReceives(first: $per_page, page: $page, status: $status, where_house_id: $where_house_id) {\n      data {\n        id\n        remark\n        vendor_name\n        purchase_order_no\n        invoice_no\n        project\n        status\n        received_by\n        received_date\n        reference_number\n        whereHouse {\n          id\n          name\n        }\n        goodReceiveItems {\n          id\n          received_quantity\n          checked_quantity\n          approved_quantity\n          description\n          expiry_date\n          comment\n          condition\n          unitOfMeasurement {\n            id\n            abbreviation\n          }\n          donor {\n            id\n            name\n          }\n          item {\n            id\n            name\n          }\n        }\n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }\n  }\n"]))),y=Object(h.a)(d||(d=Object(f.a)(["\n  query($id: ID!) {\n    goodReceive(id: $id) {\n      id\n      remark\n      vendor_name\n      purchase_order_no\n      invoice_no\n      project\n      status\n      received_by\n      received_date\n      reference_number\n      goodReceiveItems {\n        id\n        received_quantity\n        checked_quantity\n        approved_quantity\n        description\n        expiry_date\n        comment\n        condition\n        unitOfMeasurement {\n          id\n          abbreviation\n        }\n        donor {\n          id\n          name\n        }\n        project {\n          id\n          name\n        }\n        item {\n          id\n          name\n        }\n      }\n    }\n  }\n"]))),$=Object(h.a)(r||(r=Object(f.a)(["\n  query All_GOOD_RECEIVE_LOOKUP_QUERY($where_house_id: ID) {\n    whereHouses(id: $where_house_id) {\n      id\n      name\n    }     \n    conditions {\n      id\n      name\n    }\n    donors {\n      id\n      name\n    }\n    projects {\n      id\n      name\n      outline_no\n    }\n    stockTypes {\n      id\n      name\n    }\n    itemCategories {\n      id\n      name\n    }\n    unitOfMeasurements {\n      id\n      name\n      abbreviation\n    }  \n  }\n"]))),O=Object(h.a)(c||(c=Object(f.a)(["\n  mutation ($id: ID!, $input: [GoodReceiveCheckInput]!) {\n    checkGoodReceive(id: $id, input: $input) {\n      id\n    }\n  }\n"]))),I=Object(h.a)(l||(l=Object(f.a)(["\n  mutation ($id: ID!, $input: [GoodReceiveApproveInput]!) {\n    approveGoodReceive(id: $id, input: $input) {\n      id\n    }\n  }\n"]))),j=Object(h.a)(m||(m=Object(f.a)(["\n  mutation ($input: GoodReceiveCreateInput!) {\n    createGoodReceive(input: $input) {\n      id\n    }\n  }\n"]))),k=Object(h.a)(v||(v=Object(f.a)(["\n  mutation ($input: GoodReceiveUpdateInput!) {\n    updateGoodReceive(input: $input) {\n      id\n    }\n  }\n"])));Object(h.a)(_||(_=Object(f.a)(["\n  mutation($id: ID!) {\n    deleteGoodReceive(id: $id) {\n      id\n    }\n  }\n"])))},656:function(e,t,n){"use strict";n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return _})),n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return h}));var o,d,r,c,l=n(92),m=n(61),v=Object(m.a)(o||(o=Object(l.a)(["\n  query {\n    conditions {\n      id\n      name\n      description\n    }   \n  }\n"]))),_=Object(m.a)(d||(d=Object(l.a)(["\n  mutation ($input: ConditionCreateInput!) {\n    createCondition(input: $input) {\n      id\n    }\n  }\n"]))),f=Object(m.a)(r||(r=Object(l.a)(["\n  mutation ($input: ConditionUpdateInput!) {\n    updateCondition(input: $input) {\n      id\n    }\n  }\n"]))),h=Object(m.a)(c||(c=Object(l.a)(["\n  mutation($id: ID!) {\n    deleteCondition(id: $id) {\n      id\n    }\n  }\n"])))},657:function(e,t,n){"use strict";n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return _})),n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return h}));var o,d,r,c,l=n(92),m=n(61),v=Object(m.a)(o||(o=Object(l.a)(["\n  query {\n    whereHouses {\n      id\n      name\n      address\n      capacity\n      description\n    }   \n  }\n"]))),_=Object(m.a)(d||(d=Object(l.a)(["\n  mutation ($input: WhereHouseCreateInput!) {\n    createWhereHouse(input: $input) {\n      id\n    }\n  }\n"]))),f=Object(m.a)(r||(r=Object(l.a)(["\n  mutation ($input: WhereHouseUpdateInput!) {\n    updateWhereHouse(input: $input) {\n      id\n    }\n  }\n"]))),h=Object(m.a)(c||(c=Object(l.a)(["\n  mutation($id: ID!) {\n    deleteWhereHouse(id: $id) {\n      id\n    }\n  }\n"])))},666:function(e,t,n){"use strict";n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return _}));var o,d,r,c,l=n(92),m=n(61),v=Object(m.a)(o||(o=Object(l.a)(["\nquery($page: Int!, $per_page: Int!, $approved: Boolean, $search: String, $program_area_id: ID, $where_house_id: ID, \n  $project_id: ID, $item_category_id: ID, $item_id: ID, $donor_id: ID, $stock_type_id: ID, $dates: JSON) {\n  goodReceiveItems(first: $per_page, page: $page, approved: $approved, search: $search, \n    programarea: $program_area_id, wherehouse: $where_house_id, project_id: $project_id, itemcategory: $item_category_id, \n    donor_id: $donor_id, stock_type_id: $stock_type_id, item_id: $item_id, dates: $dates) {\n      data {\n          id\n          received_quantity\n          checked_quantity\n          approved_quantity\n          issued_quantity\n          description\n          expiry_date\n          comment\n          condition\n          unit_price\n          balance_due\n          project {\n            id\n            name\n          }\n          unitOfMeasurement {\n            id\n            abbreviation\n          }\n          donor {\n            id\n            name\n          }\n          stockType {\n            id\n            name\n          }\n          goodReceive {\n            id\n            remark\n            status\n            received_by\n            received_date\n            reference_number\n            batch_number\n            loading_number\n            itemCategory {\n              id\n              name\n            }\n            projectObject {\n              id\n              name\n            }\n          }\n          item {\n            id\n            name\n            description\n          }\n          stockVerification {\n            id\n            quantity\n            remarks\n          }\n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }\n  }\n"]))),_=(Object(m.a)(d||(d=Object(l.a)(["\n  mutation ($input: GoodReceiveItemCreateInput!) {\n    createGoodReceiveItem(input: $input) {\n      id\n    }\n  }\n"]))),Object(m.a)(r||(r=Object(l.a)(["\n  mutation ($input: GoodReceiveItemUpdateInput!) {\n    updateGoodReceiveItem(input: $input) {\n      id\n    }\n  }\n"]))));Object(m.a)(c||(c=Object(l.a)(["\n  mutation($id: ID!) {\n    deleteGoodReceiveItem(id: $id) {\n      id\n    }\n  }\n"])))},746:function(e,t,n){"use strict";n.r(t);var o=n(652),d=n(693),r=n(177),c=n(694),l=n(637),m=n(695),v=n(783),_=n(124),f=n(624),h=(n(14),n(87),n(13),n(12),n(6),n(16),n(10),n(17),n(1)),R=n(106),y=(n(631),n(666));function $(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?$(Object(source),!0).forEach((function(t){Object(h.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):$(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var I={props:["_goodReceive","_index","items","conditions","donors","unitOfMeasurements","stockTypes","projects"],data:function(){return{disableForm:!1,lookup:{},goodReceive:{},valid:!1,editMode:!1,submitting:!1,fieldRequiredRole:[function(e){return!!e||"This field is required"}]}},methods:O(O({},Object(R.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(e){var t,n;this.$refs.form.validate()&&(this.editMode?null!==(t=this.goodReceive)&&void 0!==t&&t.id?this.updateItem(e):this.$emit("on-update-good-receive-item",this.goodReceive):null!==(n=this._goodReceive)&&void 0!==n&&n.id?this.registerGoodReceiveItem(e):(this.$emit("on-add-good-receive-item",this.goodReceive),this.editMode=!0))},updateItem:function(e){var t=this;this.$apollo.mutate({mutation:y.b,variables:{input:this.goodReceive}}).then((function(n){n.data;t.successNotification("Item updated successfully!"),e.target.reset(),t.$router.go(-1),t.submitting=!1})).catch((function(e){console.log(e)}))}}),watch:{$props:{handler:function(){var e,t;null!==(e=this._goodReceive)&&void 0!==e&&e.item_id?(this.goodReceive=O({},this._goodReceive),this.goodReceive.item_id=parseInt(this._goodReceive.item_id),null!==(t=this._goodReceive)&&void 0!==t&&t.id&&(this.editMode=!0)):(this.editMode=!1,this.goodReceive={})},deep:!0,immediate:!0}}},j=n(60),component=Object(j.a)(I,(function(){var e=this,t=e._self._c;return t(m.a,{ref:"form",staticClass:"py-2",staticStyle:{position:"relative"},attrs:{disabled:e.disableForm},on:{submit:function(t){return t.preventDefault(),e.onFormSubmitted.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t("hr",{staticClass:"my-5",staticStyle:{width:"85%"}}),e._v(" "),t(d.a,{staticStyle:{position:"absolute",left:"-5px",top:"20px"},attrs:{color:e.editMode?"success":"error",content:e._index+1,inline:""}}),e._v(" "),t(l.a,{staticClass:"px-2 pt-5 grey lighten-2"},[t(v.a,[t(c.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(o.a,{attrs:{dense:"",items:e.items,"item-value":"id","item-text":"name",label:"Select Item *",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.goodReceive.item_id,callback:function(t){e.$set(e.goodReceive,"item_id",e._n(t))},expression:"goodReceive.item_id"}})],1),e._v(" "),t(c.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(_.a,{staticClass:"py-0",attrs:{dense:"",label:"Items/Services Description* ",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.goodReceive.description,callback:function(t){e.$set(e.goodReceive,"description",t)},expression:"goodReceive.description"}})],1),e._v(" "),t(c.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(_.a,{staticClass:"py-0",attrs:{dense:"",label:"Unit Price * ",outlined:"",required:"",type:"number",step:"any",rules:e.fieldRequiredRole},model:{value:e.goodReceive.unit_price,callback:function(t){e.$set(e.goodReceive,"unit_price",e._n(t))},expression:"goodReceive.unit_price"}})],1),e._v(" "),t(c.a,{staticClass:"py-0",attrs:{cols:"12",md:"2"}},[t(_.a,{staticClass:"py-0",attrs:{dense:"",label:"Ordered Quantity * ",outlined:"",required:"",type:"number",step:"any",rules:e.fieldRequiredRole},model:{value:e.goodReceive.ordered_quantity,callback:function(t){e.$set(e.goodReceive,"ordered_quantity",e._n(t))},expression:"goodReceive.ordered_quantity"}})],1),e._v(" "),t(c.a,{staticClass:"py-0",attrs:{cols:"12",md:"2"}},[t(_.a,{staticClass:"py-0",attrs:{dense:"",label:"Received Quantity * ",outlined:"",required:"",type:"number",step:"any",rules:e.fieldRequiredRole},model:{value:e.goodReceive.received_quantity,callback:function(t){e.$set(e.goodReceive,"received_quantity",e._n(t))},expression:"goodReceive.received_quantity"}})],1),e._v(" "),t(c.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(o.a,{attrs:{dense:"",items:e.donors,"item-value":"id","item-text":"name",label:"Select Donor *",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.goodReceive.donor_id,callback:function(t){e.$set(e.goodReceive,"donor_id",e._n(t))},expression:"goodReceive.donor_id"}})],1),e._v(" "),t(c.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(o.a,{attrs:{dense:"",items:e.conditions,"item-value":"id","item-text":"name",label:"Item Condition",outlined:"",required:""},model:{value:e.goodReceive.condition_id,callback:function(t){e.$set(e.goodReceive,"condition_id",e._n(t))},expression:"goodReceive.condition_id"}})],1),e._v(" "),t(c.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(o.a,{attrs:{dense:"",items:e.stockTypes,"item-value":"id","item-text":"name",label:"Select Stock Type *",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.goodReceive.stock_type_id,callback:function(t){e.$set(e.goodReceive,"stock_type_id",e._n(t))},expression:"goodReceive.stock_type_id"}})],1),e._v(" "),t(c.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(o.a,{attrs:{dense:"",items:e.unitOfMeasurements,"item-value":"id","item-text":"name",label:"Select Unit Of Measurement *",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.goodReceive.unit_of_measurement_id,callback:function(t){e.$set(e.goodReceive,"unit_of_measurement_id",e._n(t))},expression:"goodReceive.unit_of_measurement_id"}})],1),e._v(" "),t(c.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(_.a,{staticClass:"py-0",attrs:{dense:"",label:"Expiry Date ",outlined:"",required:"",type:"date"},model:{value:e.goodReceive.expiry_date,callback:function(t){e.$set(e.goodReceive,"expiry_date",t)},expression:"goodReceive.expiry_date"}})],1),e._v(" "),t(c.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(f.a,{staticClass:"py-0",attrs:{dense:"",label:"Remark ",rows:"1",outlined:"",required:""},model:{value:e.goodReceive.comment,callback:function(t){e.$set(e.goodReceive,"comment",t)},expression:"goodReceive.comment"}})],1),e._v(" "),t(c.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(o.a,{attrs:{dense:"",items:e.projects,"item-value":"id","item-text":"label",label:"Select Project",outlined:"",required:""},model:{value:e.goodReceive.project_id,callback:function(t){e.$set(e.goodReceive,"project_id",e._n(t))},expression:"goodReceive.project_id"}})],1),e._v(" "),t(c.a,{staticClass:"py-3 row mt-0"},[e.editMode?t("div",{staticStyle:{position:"absolute",right:"4px",top:"-2px"}},[t(r.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text blue",attrs:{type:"submit",loading:e.submitting,disabled:!e.valid||e.submitting||e.disableForm}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Update ")])]),e._v(" "),t(r.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text red",attrs:{type:"button",loading:e.submitting,disabled:!e.valid||e.submitting||e.disableForm},on:{click:function(t){return e.$emit("on-delete-good-receive-item",e._index)}}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Delete ")])])],1):t(r.a,{staticClass:"v-btn mt-2 v-btn--is-elevated absolute top-0 v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40",position:"absolute",right:"4px",top:"-1px"},attrs:{type:"submit",loading:e.submitting,disabled:!e.valid||e.submitting||e.disableForm}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Save Changes ")])])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},780:function(e,t,n){"use strict";n.r(t);var o=n(652),d=n(177),r=n(694),c=n(637),l=n(273),m=n(695),v=n(783),_=n(609),f=n(124),h=n(624),R=(n(13),n(14),n(16),n(10),n(17),n(1)),y=(n(71),n(108),n(6),n(192),n(12),n(38),n(35),n(106)),$=n(646),O=n(746),I=n(631);n(656),n(657);function j(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(t){Object(R.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var C={components:{GoodReceiveItemForm:O.default},props:["_item"],data:function(){return{goodReceive:{goodReceiveItems:[]},valid:!1,editMode:!1,submitting:!1,fieldRequiredRole:[function(e){return!!e||"This field is required"}],goodReceiveItems:[],items:[],conditions:[],whereHouses:[],donors:[],unitOfMeasurements:[],projects:[],itemCategories:[],stockTypes:[]}},apollo:{items:{query:I.a,fetchPolicy:"cache-and-network",update:function(data){return data.items.data.map((function(e){return e.id=parseInt(e.id),e}))},variables:function(){return k({},{page:1,per_page:200005})}},lookup:{query:$.b,fetchPolicy:"cache-and-network",update:function(data){return data}}},methods:k(k({},Object(y.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(e){this.editMode?this.updateItem(e):this.registerItem(e)},updateGoodReceiveItem:function(e){this.goodReceiveItems.find((function(t){return t.item_id==e.item_id})).received_quantity=e.received_quantity},deleteGoodReceiveItem:function(e){this.goodReceiveItems.splice(e,1)},addGoodReceiveItem:function(e){this.goodReceiveItems[this.goodReceiveItems.length-1]={},this.goodReceiveItems.unshift(e),console.log(e,this.goodReceiveItems)},registerItem:function(e){var t=this;this.$refs.form.validate(),this.submitting=!0,this.goodReceive.goodReceiveItems=this.goodReceiveItems.filter((function(e){return e.item_id})),console.log(this.goodReceive),this.$apollo.mutate({mutation:$.e,variables:{input:this.goodReceive}}).then((function(n){n.data;t.successNotification("Item registered  successfully!"),e.target.reset(),t.$router.push("/good_receive"),t.submitting=!1})).catch((function(e){t.errorNotification("Something Went Wrong!"),t.submitting=!1,console.log(e)}))},updateItem:function(e){var t=this;this.$apollo.mutate({mutation:$.g,variables:{input:this.goodReceive}}).then((function(n){n.data;t.successNotification("Item updated successfully!"),e.target.reset(),t.$router.go(-1),t.submitting=!1})).catch((function(e){console.log(e)}))}}),created:function(){var e;this.goodReceive.received_by=null===(e=this.$auth.user)||void 0===e?void 0:e.name},watch:{$props:{handler:function(){var e;console.log(this._item),null!==(e=this._goodReceive)&&void 0!==e&&e.id?(this.editMode=!0,this.goodReceiveItems.push({})):(this.editMode=!1,this.goodReceiveItems=[{}])},deep:!0,immediate:!0},lookup:{handler:function(){this.lookup&&(this.whereHouses=this.lookup.whereHouses.map((function(e){return e.id=parseInt(e.id),e})),this.conditions=this.lookup.conditions.map((function(e){return e.id=parseInt(e.id),e})),this.donors=this.lookup.donors.map((function(e){return e.id=parseInt(e.id),e})),this.unitOfMeasurements=this.lookup.unitOfMeasurements.map((function(e){return e.id=parseInt(e.id),e})),this.itemCategories=this.lookup.itemCategories.map((function(e){return e.id=parseInt(e.id),e})),this.stockTypes=this.lookup.stockTypes.map((function(e){return e.id=parseInt(e.id),e})),this.projects=this.lookup.projects.map((function(e){return e.id=parseInt(e.id),e.label="".concat(e.name,"/").concat(e.outline_no),e})))}}}},x=n(60),component=Object(x.a)(C,(function(){var e=this,t=e._self._c;return t(m.a,{ref:"form",on:{submit:function(t){return t.preventDefault(),e.onFormSubmitted.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(c.a,[t(v.a,[t(r.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(f.a,{staticClass:"py-0",attrs:{dense:"",label:"Requested Date ",outlined:"",required:"",type:"date",rules:e.fieldRequiredRole},model:{value:e.goodReceive.received_date,callback:function(t){e.$set(e.goodReceive,"received_date",t)},expression:"goodReceive.received_date"}})],1),e._v(" "),t(r.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(f.a,{staticClass:"py-0",attrs:{dense:"",label:"Received By Name * ",outlined:"",required:"",disabled:"",rules:e.fieldRequiredRole},model:{value:e.goodReceive.received_by,callback:function(t){e.$set(e.goodReceive,"received_by",t)},expression:"goodReceive.received_by"}})],1),e._v(" "),t(r.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(f.a,{staticClass:"py-0",attrs:{dense:"",label:"Vendor Name ",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.goodReceive.vendor_name,callback:function(t){e.$set(e.goodReceive,"vendor_name",t)},expression:"goodReceive.vendor_name"}})],1),e._v(" "),t(r.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(f.a,{staticClass:"py-0",attrs:{dense:"",label:"Vendor Id ",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.goodReceive.vendor_id,callback:function(t){e.$set(e.goodReceive,"vendor_id",t)},expression:"goodReceive.vendor_id"}})],1),e._v(" "),t(r.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(f.a,{staticClass:"py-0",attrs:{dense:"",label:"Purchase Order Number ",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.goodReceive.purchase_order_no,callback:function(t){e.$set(e.goodReceive,"purchase_order_no",t)},expression:"goodReceive.purchase_order_no"}})],1),e._v(" "),t(r.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(f.a,{staticClass:"py-0",attrs:{dense:"",label:"Invoice Number ",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.goodReceive.invoice_no,callback:function(t){e.$set(e.goodReceive,"invoice_no",t)},expression:"goodReceive.invoice_no"}})],1),e._v(" "),t(r.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(f.a,{staticClass:"py-0",attrs:{dense:"",label:"Delivery Note/Waybill/ Bill of Lading Number",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.goodReceive.loading_number,callback:function(t){e.$set(e.goodReceive,"loading_number",t)},expression:"goodReceive.loading_number"}})],1),e._v(" "),t(r.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(f.a,{staticClass:"py-0",attrs:{dense:"",label:"Batch Number",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.goodReceive.batch_number,callback:function(t){e.$set(e.goodReceive,"batch_number",t)},expression:"goodReceive.batch_number"}})],1),e._v(" "),t(r.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(o.a,{attrs:{dense:"",items:e.whereHouses,"item-value":"id","item-text":"name",label:"Select Warehouse *",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.goodReceive.where_house_id,callback:function(t){e.$set(e.goodReceive,"where_house_id",e._n(t))},expression:"goodReceive.where_house_id"}})],1),e._v(" "),t(r.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(o.a,{attrs:{items:e.itemCategories,"item-value":"id","item-text":"name",label:"Select Category *",outlined:"",required:"",dense:"",rules:e.fieldRequiredRole},model:{value:e.goodReceive.item_category_id,callback:function(t){e.$set(e.goodReceive,"item_category_id",e._n(t))},expression:"goodReceive.item_category_id"}})],1),e._v(" "),t(r.a,{staticClass:"py-0",attrs:{cols:"12",md:"8"}},[t(h.a,{staticClass:"py-0",attrs:{dense:"",label:"Enter a short remark",rows:"1",outlined:"",required:""},model:{value:e.goodReceive.remark,callback:function(t){e.$set(e.goodReceive,"remark",t)},expression:"goodReceive.remark"}})],1)],1),e._v(" "),t("div",[t("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[e._v("Items")]),e._v(" "),t("span",{staticClass:"grey--text text--darken-1"},[e._v("Enter all the required details of the item.")])]),e._v(" "),e._l(e.goodReceiveItems,(function(n,o){return t("good-receive-item-form",{key:o,attrs:{_index:o,_goodReceive:n,items:e.items,conditions:e.conditions,donors:e.donors,unitOfMeasurements:e.unitOfMeasurements,stockTypes:e.stockTypes,projects:e.projects},on:{"on-add-good-receive-item":e.addGoodReceiveItem,"on-delete-good-receive-item":e.deleteGoodReceiveItem,"on-update-good-receive-item":e.updateGoodReceiveItem}})})),e._v(" "),t(l.a,{staticClass:"my-2"}),e._v(" "),t(r.a,{staticClass:"py-0 py-3 row"},[t("nuxt-link",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button",to:"/order/pending"}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Cancel ")])]),e._v(" "),t(_.a),e._v(" "),e.editMode?t(d.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:e.submitting,disabled:!e.valid||e.submitting}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Update ")])]):t(d.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:e.submitting}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Submit ")])])],1)],2)],1)}),[],!1,null,null,null);t.default=component.exports}}]);