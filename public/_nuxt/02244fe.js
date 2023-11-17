(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{631:function(e,t,n){"use strict";n.d(t,"a",(function(){return y})),n.d(t,"c",(function(){return R})),n.d(t,"d",(function(){return h})),n.d(t,"b",(function(){return $})),n.d(t,"e",(function(){return O}));var o,d,r,c,l,m,v,_=n(92),f=n(61),y=Object(f.a)(o||(o=Object(_.a)(["\n  query($page: Int!, $per_page: Int!, $name: String) {\n    items(first: $per_page, page: $page, name: $name) {\n      data {\n        id\n        name\n        item_code\n        description\n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }   \n  }\n"]))),R=(Object(f.a)(d||(d=Object(_.a)(["\n  query All_ITEM_LOOKUP_QUERY {\n    itemCategories {\n      id\n      name\n    }   \n    donors {\n      id\n      name\n    }  \n    lotNumbers {\n      id\n      lot_number\n    }   \n    unitOfMeasurements {\n      id\n      name\n      abbreviation\n    }  \n    officeLocations {\n      id\n      address\n    } \n    stockTypes {\n      id\n      name\n    }   \n    whereHouses {\n      id\n      name\n      address\n    }     \n    departments {\n      id\n      name\n    }   \n  }\n"]))),Object(f.a)(r||(r=Object(_.a)(["\n  query FIND_ITEM_QUERY($id: ID!) {\n    item(id: $id) {\n        id\n        name\n        item_code\n        description\n    }   \n  }\n"])))),h=Object(f.a)(c||(c=Object(_.a)(["\n  query ITEM_BIN_CARD_QUERY($id: ID!, $date_from: Date, $date_to: Date) {\n    itemBinCard(id: $id, date_from: $date_from, date_to: $date_to) {\n      stockIssueItems {\n        id\n        quantity\n        stockIssue {\n          id\n          date\n          created_at\n          stockRequest {\n            id\n            reference_no\n          }\n        }\n      }\n      goodReceiveItem {\n        id\n          received_quantity\n          checked_quantity\n          approved_quantity\n          description\n          expiry_date\n          comment\n          condition\n          unit_price\n          created_at\n          unitOfMeasurement {\n            id\n            abbreviation\n          }\n          donor {\n            id\n            name\n          }\n          stockType {\n            id\n            name\n          }\n          project {\n            id\n            name\n          }\n          goodReceive {\n            id\n            remark\n            status\n            received_by\n            received_date\n            reference_number\n            batch_number\n            loading_number\n            itemCategory {\n              id\n              name\n            }\n            projectObject {\n              id\n              name\n            }\n          }\n          item {\n            id\n            name\n            description\n          }\n      }\n    }   \n  }\n"]))),$=Object(f.a)(l||(l=Object(_.a)(["\n  mutation ($input: ItemCreateInput!) {\n    createItem(input: $input) {\n      id\n    }\n  }\n"]))),O=Object(f.a)(m||(m=Object(_.a)(["\n  mutation ($input: ItemUpdateInput!) {\n    updateItem(input: $input) {\n      id\n    }\n  }\n"])));Object(f.a)(v||(v=Object(_.a)(["\n  mutation($id: ID!) {\n    deleteItem(id: $id) {\n      id\n    }\n  }\n"])))},666:function(e,t,n){"use strict";n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return _}));var o,d,r,c,l=n(92),m=n(61),v=Object(m.a)(o||(o=Object(l.a)(["\nquery($page: Int!, $per_page: Int!, $approved: Boolean, $search: String, $program_area_id: ID, $where_house_id: ID, \n  $project_id: ID, $item_category_id: ID, $item_id: ID, $donor_id: ID, $stock_type_id: ID, $dates: JSON) {\n  goodReceiveItems(first: $per_page, page: $page, approved: $approved, search: $search, \n    programarea: $program_area_id, wherehouse: $where_house_id, project_id: $project_id, itemcategory: $item_category_id, \n    donor_id: $donor_id, stock_type_id: $stock_type_id, item_id: $item_id, dates: $dates) {\n      data {\n          id\n          received_quantity\n          checked_quantity\n          approved_quantity\n          issued_quantity\n          description\n          expiry_date\n          comment\n          condition\n          unit_price\n          balance_due\n          project {\n            id\n            name\n          }\n          unitOfMeasurement {\n            id\n            abbreviation\n          }\n          donor {\n            id\n            name\n          }\n          stockType {\n            id\n            name\n          }\n          goodReceive {\n            id\n            remark\n            status\n            received_by\n            received_date\n            reference_number\n            batch_number\n            loading_number\n            itemCategory {\n              id\n              name\n            }\n            projectObject {\n              id\n              name\n            }\n          }\n          item {\n            id\n            name\n            description\n          }\n          stockVerification {\n            id\n            quantity\n            remarks\n          }\n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }\n  }\n"]))),_=(Object(m.a)(d||(d=Object(l.a)(["\n  mutation ($input: GoodReceiveItemCreateInput!) {\n    createGoodReceiveItem(input: $input) {\n      id\n    }\n  }\n"]))),Object(m.a)(r||(r=Object(l.a)(["\n  mutation ($input: GoodReceiveItemUpdateInput!) {\n    updateGoodReceiveItem(input: $input) {\n      id\n    }\n  }\n"]))));Object(m.a)(c||(c=Object(l.a)(["\n  mutation($id: ID!) {\n    deleteGoodReceiveItem(id: $id) {\n      id\n    }\n  }\n"])))},746:function(e,t,n){"use strict";n.r(t);var o=n(652),d=n(693),r=n(177),c=n(694),l=n(637),m=n(695),v=n(783),_=n(124),f=n(624),y=(n(14),n(87),n(13),n(12),n(6),n(16),n(10),n(17),n(1)),R=n(106),h=(n(631),n(666));function $(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?$(Object(source),!0).forEach((function(t){Object(y.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):$(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var j={props:["_goodReceive","_index","items","conditions","donors","unitOfMeasurements","stockTypes","projects"],data:function(){return{disableForm:!1,lookup:{},goodReceive:{},valid:!1,editMode:!1,submitting:!1,fieldRequiredRole:[function(e){return!!e||"This field is required"}]}},methods:O(O({},Object(R.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(e){var t,n;this.$refs.form.validate()&&(this.editMode?null!==(t=this.goodReceive)&&void 0!==t&&t.id?this.updateItem(e):this.$emit("on-update-good-receive-item",this.goodReceive):null!==(n=this._goodReceive)&&void 0!==n&&n.id?this.registerGoodReceiveItem(e):(this.$emit("on-add-good-receive-item",this.goodReceive),this.editMode=!0))},updateItem:function(e){var t=this;this.$apollo.mutate({mutation:h.b,variables:{input:this.goodReceive}}).then((function(n){n.data;t.successNotification("Item updated successfully!"),e.target.reset(),t.$router.go(-1),t.submitting=!1})).catch((function(e){console.log(e)}))}}),watch:{$props:{handler:function(){var e,t;null!==(e=this._goodReceive)&&void 0!==e&&e.item_id?(this.goodReceive=O({},this._goodReceive),this.goodReceive.item_id=parseInt(this._goodReceive.item_id),null!==(t=this._goodReceive)&&void 0!==t&&t.id&&(this.editMode=!0)):(this.editMode=!1,this.goodReceive={})},deep:!0,immediate:!0}}},I=n(60),component=Object(I.a)(j,(function(){var e=this,t=e._self._c;return t(m.a,{ref:"form",staticClass:"py-2",staticStyle:{position:"relative"},attrs:{disabled:e.disableForm},on:{submit:function(t){return t.preventDefault(),e.onFormSubmitted.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t("hr",{staticClass:"my-5",staticStyle:{width:"85%"}}),e._v(" "),t(d.a,{staticStyle:{position:"absolute",left:"-5px",top:"20px"},attrs:{color:e.editMode?"success":"error",content:e._index+1,inline:""}}),e._v(" "),t(l.a,{staticClass:"px-2 pt-5 grey lighten-2"},[t(v.a,[t(c.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(o.a,{attrs:{dense:"",items:e.items,"item-value":"id","item-text":"name",label:"Select Item *",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.goodReceive.item_id,callback:function(t){e.$set(e.goodReceive,"item_id",e._n(t))},expression:"goodReceive.item_id"}})],1),e._v(" "),t(c.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(_.a,{staticClass:"py-0",attrs:{dense:"",label:"Items/Services Description* ",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.goodReceive.description,callback:function(t){e.$set(e.goodReceive,"description",t)},expression:"goodReceive.description"}})],1),e._v(" "),t(c.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(_.a,{staticClass:"py-0",attrs:{dense:"",label:"Unit Price * ",outlined:"",required:"",type:"number",step:"any",rules:e.fieldRequiredRole},model:{value:e.goodReceive.unit_price,callback:function(t){e.$set(e.goodReceive,"unit_price",e._n(t))},expression:"goodReceive.unit_price"}})],1),e._v(" "),t(c.a,{staticClass:"py-0",attrs:{cols:"12",md:"2"}},[t(_.a,{staticClass:"py-0",attrs:{dense:"",label:"Ordered Quantity * ",outlined:"",required:"",type:"number",step:"any",rules:e.fieldRequiredRole},model:{value:e.goodReceive.ordered_quantity,callback:function(t){e.$set(e.goodReceive,"ordered_quantity",e._n(t))},expression:"goodReceive.ordered_quantity"}})],1),e._v(" "),t(c.a,{staticClass:"py-0",attrs:{cols:"12",md:"2"}},[t(_.a,{staticClass:"py-0",attrs:{dense:"",label:"Received Quantity * ",outlined:"",required:"",type:"number",step:"any",rules:e.fieldRequiredRole},model:{value:e.goodReceive.received_quantity,callback:function(t){e.$set(e.goodReceive,"received_quantity",e._n(t))},expression:"goodReceive.received_quantity"}})],1),e._v(" "),t(c.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(o.a,{attrs:{dense:"",items:e.donors,"item-value":"id","item-text":"name",label:"Select Donor *",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.goodReceive.donor_id,callback:function(t){e.$set(e.goodReceive,"donor_id",e._n(t))},expression:"goodReceive.donor_id"}})],1),e._v(" "),t(c.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(o.a,{attrs:{dense:"",items:e.conditions,"item-value":"id","item-text":"name",label:"Item Condition",outlined:"",required:""},model:{value:e.goodReceive.condition_id,callback:function(t){e.$set(e.goodReceive,"condition_id",e._n(t))},expression:"goodReceive.condition_id"}})],1),e._v(" "),t(c.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(o.a,{attrs:{dense:"",items:e.stockTypes,"item-value":"id","item-text":"name",label:"Select Stock Type *",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.goodReceive.stock_type_id,callback:function(t){e.$set(e.goodReceive,"stock_type_id",e._n(t))},expression:"goodReceive.stock_type_id"}})],1),e._v(" "),t(c.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(o.a,{attrs:{dense:"",items:e.unitOfMeasurements,"item-value":"id","item-text":"name",label:"Select Unit Of Measurement *",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.goodReceive.unit_of_measurement_id,callback:function(t){e.$set(e.goodReceive,"unit_of_measurement_id",e._n(t))},expression:"goodReceive.unit_of_measurement_id"}})],1),e._v(" "),t(c.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(_.a,{staticClass:"py-0",attrs:{dense:"",label:"Expiry Date ",outlined:"",required:"",type:"date"},model:{value:e.goodReceive.expiry_date,callback:function(t){e.$set(e.goodReceive,"expiry_date",t)},expression:"goodReceive.expiry_date"}})],1),e._v(" "),t(c.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(f.a,{staticClass:"py-0",attrs:{dense:"",label:"Remark ",rows:"1",outlined:"",required:""},model:{value:e.goodReceive.comment,callback:function(t){e.$set(e.goodReceive,"comment",t)},expression:"goodReceive.comment"}})],1),e._v(" "),t(c.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(o.a,{attrs:{dense:"",items:e.projects,"item-value":"id","item-text":"label",label:"Select Project",outlined:"",required:""},model:{value:e.goodReceive.project_id,callback:function(t){e.$set(e.goodReceive,"project_id",e._n(t))},expression:"goodReceive.project_id"}})],1),e._v(" "),t(c.a,{staticClass:"py-3 row mt-0"},[e.editMode?t("div",{staticStyle:{position:"absolute",right:"4px",top:"-2px"}},[t(r.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text blue",attrs:{type:"submit",loading:e.submitting,disabled:!e.valid||e.submitting||e.disableForm}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Update ")])]),e._v(" "),t(r.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text red",attrs:{type:"button",loading:e.submitting,disabled:!e.valid||e.submitting||e.disableForm},on:{click:function(t){return e.$emit("on-delete-good-receive-item",e._index)}}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Delete ")])])],1):t(r.a,{staticClass:"v-btn mt-2 v-btn--is-elevated absolute top-0 v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40",position:"absolute",right:"4px",top:"-1px"},attrs:{type:"submit",loading:e.submitting,disabled:!e.valid||e.submitting||e.disableForm}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Save Changes ")])])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);