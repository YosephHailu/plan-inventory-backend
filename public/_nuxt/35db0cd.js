(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{626:function(t,e,n){"use strict";n.d(e,"b",(function(){return h})),n.d(e,"a",(function(){return I})),n.d(e,"d",(function(){return k})),n.d(e,"e",(function(){return y})),n.d(e,"c",(function(){return R})),n.d(e,"f",(function(){return O}));var o,r,c,d,l,m,f,_=n(92),v=n(61),h=Object(v.a)(o||(o=Object(_.a)(["\n  query($page: Int!, $per_page: Int!) {\n    items(first: $per_page, page: $page) {\n      data {\n        id\n        name\n        stock_card_number\n        description\n        expire_date\n        itemCategory {\n          id\n          name\n        }   \n        donor {\n          id\n          name\n        }  \n        lotNumber {\n          id\n          lot_number\n        }   \n        unitOfMeasurement {\n          id\n          name\n          abbreviation\n        }  \n        officeLocation {\n          id\n          address\n        } \n        stockType {\n          id\n          name\n        }   \n        whereHouse {\n          id\n          name\n          address\n        }     \n        department {\n          id\n          name\n        }   \n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }   \n  }\n"]))),I=Object(v.a)(r||(r=Object(_.a)(["\n  query All_ITEM_LOOKUP_QUERY {\n    itemCategories {\n      id\n      name\n    }   \n    donors {\n      id\n      name\n    }  \n    lotNumbers {\n      id\n      lot_number\n    }   \n    unitOfMeasurements {\n      id\n      name\n      abbreviation\n    }  \n    officeLocations {\n      id\n      address\n    } \n    stockTypes {\n      id\n      name\n    }   \n    whereHouses {\n      id\n      name\n      address\n    }     \n    departments {\n      id\n      name\n    }   \n  }\n"]))),k=Object(v.a)(c||(c=Object(_.a)(["\n  query FIND_ITEM_QUERY($id: ID!) {\n    item(id: $id) {\n        id\n        name\n        stock_card_number\n        description\n        expire_date\n        itemCategory {\n          id\n          name\n        }   \n        donor {\n          id\n          name\n        }  \n        lotNumber {\n          id\n          lot_number\n        }   \n        unitOfMeasurement {\n          id\n          name\n          abbreviation\n        }  \n        officeLocation {\n          id\n          address\n        } \n        stockType {\n          id\n          name\n        }   \n        whereHouse {\n          id\n          name\n          address\n        }     \n        department {\n          id\n          name\n        }   \n    }   \n  }\n"]))),y=Object(v.a)(d||(d=Object(_.a)(["\n  query ITEM_BIN_CARD_QUERY($id: ID!) {\n    itemBinCard(id: $id) {\n      issuance_number\n      issued_quantity\n      reference_number\n      approved_quantity\n      processed_by\n      processed_at\n    }   \n  }\n"]))),R=Object(v.a)(l||(l=Object(_.a)(["\n  mutation ($input: ItemCreateInput!) {\n    createItem(input: $input) {\n      id\n      name\n      description\n    }\n  }\n"]))),O=Object(v.a)(m||(m=Object(_.a)(["\n  mutation ($input: ItemUpdateInput!) {\n    updateItem(input: $input) {\n      id\n      name\n      description\n    }\n  }\n"])));Object(v.a)(f||(f=Object(_.a)(["\n  mutation($id: ID!) {\n    deleteItem(id: $id) {\n      id\n    }\n  }\n"])))},685:function(t,e,n){"use strict";n.r(e);var o,r,c,d,l=n(655),m=n(751),f=n(177),_=n(678),v=n(642),h=n(679),I=n(750),k=n(124),y=n(623),R=(n(14),n(87),n(13),n(12),n(6),n(15),n(10),n(16),n(1)),O=(n(71),n(106)),j=n(626),$=n(92),w=n(61),x=(Object(w.a)(o||(o=Object($.a)(["\n  query($page: Int!, $per_page: Int!) {\n    stockRequestItems(first: $per_page, page: $page) {\n      data {\n        id\n        designation_contact\n        quantity\n        description\n        contact_detail\n        stockRequest {\n          id\n          reference_no\n        }\n        item {\n          id\n          name\n        }\n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }\n  }\n"]))),Object(w.a)(r||(r=Object($.a)(["\n  mutation ($input: StockRequestItemCreateInput!) {\n    createStockRequestItem(input: $input) {\n      id\n    }\n  }\n"]))),Object(w.a)(c||(c=Object($.a)(["\n  mutation ($input: StockRequestItemUpdateInput!) {\n    updateStockRequestItem(input: $input) {\n      id\n    }\n  }\n"]))));Object(w.a)(d||(d=Object($.a)(["\n  mutation($id: ID!) {\n    deleteStockRequestItem(id: $id) {\n      id\n    }\n  }\n"])));function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function S(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(R.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var P={props:["_stockRequestItem","_index"],data:function(){return{lookup:{},stockRequestItem:{},valid:!1,editMode:!1,submitting:!1,fieldRequiredRole:[function(t){return!!t||"This field is required"}],items:[]}},apollo:{items:{query:j.b,fetchPolicy:"cache-and-network",variables:function(){return{page:1,per_page:1e5}}}},methods:S(S({},Object(O.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(t){var e,n;this.$refs.form.validate()&&(this.editMode?null!==(e=this.stockRequestItem)&&void 0!==e&&e.id?this.updateItem(t):this.$emit("on-update-stock-request-item",this.stockRequestItem):null!==(n=this._stockRequest)&&void 0!==n&&n.id?this.registerStockRequestItem(t):(this.$emit("on-add-stock-request-item",this.stockRequestItem),this.editMode=!0))},updateItem:function(t){var e=this;this.$apollo.mutate({mutation:x,variables:{input:this.stockRequestItem}}).then((function(n){n.data;e.successNotification("Item updated successfully!"),t.target.reset(),e.$router.go(-1),e.submitting=!1})).catch((function(t){console.log(t)}))}}),watch:{$props:{handler:function(){var t,e;null!==(t=this._stockRequestItem)&&void 0!==t&&t.item_id?(this.stockRequestItem=S({},this._stockRequestItem),this.stockRequestItem.item_id=parseInt(this._stockRequestItem.item_id),null!==(e=this._stockRequestItem)&&void 0!==e&&e.id&&(this.editMode=!0)):(this.editMode=!1,this.stockRequestItem={})},deep:!0,immediate:!0},items:{handler:function(){this.items.data&&(this.items=this.items.data.map((function(t){return t.id=parseInt(t.id),t})))}}}},D=n(60),component=Object(D.a)(P,(function(){var t=this,e=t._self._c;return e(h.a,{ref:"form",staticClass:"py-2",staticStyle:{position:"relative"},attrs:{disabled:t.disableForm},on:{submit:function(e){return e.preventDefault(),t.onFormSubmitted.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("hr",{staticClass:"my-5",staticStyle:{width:"85%"}}),t._v(" "),e(m.a,{staticStyle:{position:"absolute",left:"-5px",top:"20px"},attrs:{color:t.editMode?"success":"error",content:t._index+1,inline:""}}),t._v(" "),e(v.a,{staticClass:"px-2 pt-5 grey lighten-2"},[e(I.a,[e(_.a,{attrs:{cols:"12",md:"3"}},[e(l.a,{attrs:{items:t.items,"item-value":"id","item-text":"name",label:"Select Item *",outlined:"",required:"",rules:t.fieldRequiredRole},model:{value:t.stockRequestItem.item_id,callback:function(e){t.$set(t.stockRequestItem,"item_id",t._n(e))},expression:"stockRequestItem.item_id"}})],1),t._v(" "),e(_.a,{attrs:{cols:"12",md:"3"}},[e(k.a,{staticClass:"py-0",attrs:{label:"Designation Contact * ",outlined:"",required:"",rules:t.fieldRequiredRole},model:{value:t.stockRequestItem.designation_contact,callback:function(e){t.$set(t.stockRequestItem,"designation_contact",e)},expression:"stockRequestItem.designation_contact"}})],1),t._v(" "),e(_.a,{attrs:{cols:"12",md:"3"}},[e(k.a,{staticClass:"py-0",attrs:{label:"Quantity * ",outlined:"",required:"",rules:t.fieldRequiredRole},model:{value:t.stockRequestItem.quantity,callback:function(e){t.$set(t.stockRequestItem,"quantity",e)},expression:"stockRequestItem.quantity"}})],1),t._v(" "),e(_.a,{attrs:{cols:"12",md:"3"}},[e(y.a,{staticClass:"py-0",attrs:{label:"Designation Contact * ",rows:"1",outlined:"",required:"",rules:t.fieldRequiredRole},model:{value:t.stockRequestItem.description,callback:function(e){t.$set(t.stockRequestItem,"description",e)},expression:"stockRequestItem.description"}})],1),t._v(" "),e(_.a,{staticClass:"py-3 row mt-0"},[t.editMode?e("div",{staticStyle:{position:"absolute",right:"4px",top:"-2px"}},[e(f.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text blue",attrs:{type:"submit",loading:t.submitting,disabled:!t.valid||t.submitting||t.disableForm}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Update ")])]),t._v(" "),e(f.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text red",attrs:{type:"button",loading:t.submitting,disabled:!t.valid||t.submitting||t.disableForm},on:{click:function(e){return t.$emit("on-delete-stock-request-item",t._index)}}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Delete ")])])],1):e(f.a,{staticClass:"v-btn mt-2 v-btn--is-elevated absolute top-0 v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40",position:"absolute",right:"4px",top:"-1px"},attrs:{type:"submit",loading:t.submitting,disabled:!t.valid||t.submitting||t.disableForm}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Save Changes ")])])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);