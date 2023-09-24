(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{617:function(t,e,n){"use strict";n.d(e,"b",(function(){return v})),n.d(e,"a",(function(){return _})),n.d(e,"d",(function(){return O})),n.d(e,"c",(function(){return y})),n.d(e,"e",(function(){return I}));var o,r,d,c,l,m,h=n(91),f=n(60),v=Object(f.a)(o||(o=Object(h.a)(["\n  query($page: Int!, $per_page: Int!) {\n    items(first: $per_page, page: $page) {\n      data {\n        id\n        name\n        stock_card_number\n        description\n        expire_date\n        itemCategory {\n          id\n          name\n        }   \n        donor {\n          id\n          name\n        }  \n        lotNumber {\n          id\n          lot_number\n        }   \n        unitOfMeasurement {\n          id\n          name\n          abbreviation\n        }  \n        officeLocation {\n          id\n          address\n        } \n        stockType {\n          id\n          name\n        }   \n        whereHouse {\n          id\n          name\n          address\n        }     \n        department {\n          id\n          name\n        }   \n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }   \n  }\n"]))),_=Object(f.a)(r||(r=Object(h.a)(["\n  query All_ITEM_LOOKUP_QUERY {\n    itemCategories {\n      id\n      name\n    }   \n    donors {\n      id\n      name\n    }  \n    lotNumbers {\n      id\n      lot_number\n    }   \n    unitOfMeasurements {\n      id\n      name\n      abbreviation\n    }  \n    officeLocations {\n      id\n      address\n    } \n    stockTypes {\n      id\n      name\n    }   \n    whereHouses {\n      id\n      name\n      address\n    }     \n    departments {\n      id\n      name\n    }   \n  }\n"]))),O=Object(f.a)(d||(d=Object(h.a)(["\n  query FIND_ITEM_QUERY($id: ID!) {\n    item(id: $id) {\n        id\n        name\n        stock_card_number\n        description\n        expire_date\n        itemCategory {\n          id\n          name\n        }   \n        donor {\n          id\n          name\n        }  \n        lotNumber {\n          id\n          lot_number\n        }   \n        unitOfMeasurement {\n          id\n          name\n          abbreviation\n        }  \n        officeLocation {\n          id\n          address\n        } \n        stockType {\n          id\n          name\n        }   \n        whereHouse {\n          id\n          name\n          address\n        }     \n        department {\n          id\n          name\n        }   \n    }   \n  }\n"]))),y=Object(f.a)(c||(c=Object(h.a)(["\n  mutation ($input: ItemCreateInput!) {\n    createItem(input: $input) {\n      id\n      name\n      description\n    }\n  }\n"]))),I=Object(f.a)(l||(l=Object(h.a)(["\n  mutation ($input: ItemUpdateInput!) {\n    updateItem(input: $input) {\n      id\n      name\n      description\n    }\n  }\n"])));Object(f.a)(m||(m=Object(h.a)(["\n  mutation($id: ID!) {\n    deleteItem(id: $id) {\n      id\n    }\n  }\n"])))},643:function(t,e,n){var content=n(644);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("115438f7",content,!0,{sourceMap:!1})},644:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,'.theme--light.v-badge .v-badge__badge:after{border-color:#fff}.theme--dark.v-badge .v-badge__badge:after{border-color:#1e1e1e}.v-badge{position:relative}.v-badge,.v-badge__badge{display:inline-block;line-height:1}.v-badge__badge{border-radius:10px;color:#fff;font-size:12px;height:20px;letter-spacing:0;min-width:20px;padding:4px 6px;pointer-events:auto;position:absolute;text-align:center;text-indent:0;top:auto;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-application--is-ltr .v-badge__badge{right:auto}.v-application--is-rtl .v-badge__badge{left:auto}.v-badge__badge .v-icon{color:inherit;font-size:12px;height:12px;margin:0 -2px;width:12px}.v-badge__badge .v-img{height:12px;width:12px}.v-badge__wrapper{flex:0 1;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-badge--avatar .v-badge__badge{padding:0}.v-badge--avatar .v-badge__badge .v-avatar{height:20px!important;max-width:20px!important;min-width:0!important}.v-badge--bordered .v-badge__badge:after{border-radius:inherit;border-style:solid;border-width:2px;bottom:0;content:"";left:0;position:absolute;right:0;top:0;transform:scale(1.15)}.v-badge--dot .v-badge__badge{border-radius:4.5px;height:9px;min-width:0;padding:0;width:9px}.v-badge--dot .v-badge__badge:after{border-width:1.5px}.v-badge--icon .v-badge__badge{padding:4px 6px}.v-badge--inline{align-items:center;display:inline-flex;justify-content:center}.v-badge--inline .v-badge__badge,.v-badge--inline .v-badge__wrapper{position:relative}.v-badge--inline .v-badge__wrapper{margin:0 4px}.v-badge--tile .v-badge__badge{border-radius:0}',""]),o.locals={},t.exports=o},661:function(t,e,n){"use strict";n(13),n(14),n(12),n(6),n(16),n(10),n(17);var o=n(122),r=n(1),d=(n(26),n(643),n(192)),c=n(23),l=n(18),m=n(52),h=n(289),f=n(112),v=n(7),_=n(0),O=["aria-atomic","aria-label","aria-live","role","title"];function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}e.a=Object(v.a)(c.a,Object(f.b)(["left","bottom"]),l.a,m.a,h.a).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile},this.themeClasses)},computedBottom:function(){return this.bottom?"auto":this.computedYOffset},computedLeft:function(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight:function(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop:function(){return this.bottom?this.computedYOffset:"auto"},computedXOffset:function(){return this.calcPosition(this.offsetX)},computedYOffset:function(){return this.calcPosition(this.offsetY)},isRtl:function(){return this.$vuetify.rtl},offset:function(){return this.overlap?this.dot?8:12:this.dot?2:4},styles:function(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition:function(t){return"calc(100% - ".concat(Object(_.h)(t||this.offset),")")},genBadge:function(){var t=this.$vuetify.lang,label=this.$attrs["aria-label"]||t.t(this.label),data=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":label,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),e=this.$createElement("span",data,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e},genBadgeContent:function(){if(!this.dot){var slot=Object(_.r)(this,"badge");return slot||(this.content?String(this.content):this.icon?this.$createElement(d.a,this.icon):void 0)}},genBadgeWrapper:function(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render:function(t){var e=[this.genBadgeWrapper()],n=[Object(_.r)(this)],r=this.$attrs,d=(r["aria-atomic"],r["aria-label"],r["aria-live"],r.role,r.title,Object(o.a)(r,O));return this.inline&&this.left?n.unshift(e):n.push(e),t("span",{staticClass:"v-badge",attrs:d,class:this.classes},n)}})},667:function(t,e,n){"use strict";n.r(e);var o,r,d,c,l=n(713),m=n(661),h=n(177),f=n(660),v=n(637),_=n(662),O=n(712),y=n(121),I=n(624),k=(n(14),n(85),n(13),n(12),n(6),n(16),n(10),n(17),n(1)),x=(n(69),n(106)),j=n(617),R=n(91),w=n(60),$=(Object(w.a)(o||(o=Object(R.a)(["\n  query($page: Int!, $per_page: Int!) {\n    stockRequestItems(first: $per_page, page: $page) {\n      data {\n        id\n        designation_contact\n        quantity\n        description\n        contact_detail\n        stockRequest {\n          id\n          reference_no\n        }\n        item {\n          id\n          name\n        }\n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }\n  }\n"]))),Object(w.a)(r||(r=Object(R.a)(["\n  mutation ($input: StockRequestItemCreateInput!) {\n    createStockRequestItem(input: $input) {\n      id\n    }\n  }\n"]))),Object(w.a)(d||(d=Object(R.a)(["\n  mutation ($input: StockRequestItemUpdateInput!) {\n    updateStockRequestItem(input: $input) {\n      id\n    }\n  }\n"]))));Object(w.a)(c||(c=Object(R.a)(["\n  mutation($id: ID!) {\n    deleteStockRequestItem(id: $id) {\n      id\n    }\n  }\n"])));function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function P(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(k.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S={props:["_stockRequestItem","_index"],data:function(){return{lookup:{},stockRequestItem:{},valid:!1,editMode:!1,submitting:!1,fieldRequiredRole:[function(t){return!!t||"This field is required"}],items:[]}},apollo:{items:{query:j.b,fetchPolicy:"cache-and-network",variables:function(){return{page:1,per_page:1e5}}}},methods:P(P({},Object(x.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(t){var e,n;this.$refs.form.validate()&&(this.editMode?null!==(e=this.stockRequestItem)&&void 0!==e&&e.id?this.updateItem(t):this.$emit("on-update-stock-request-item",this.stockRequestItem):null!==(n=this._stockRequest)&&void 0!==n&&n.id?this.registerStockRequestItem(t):(this.$emit("on-add-stock-request-item",this.stockRequestItem),this.editMode=!0))},updateItem:function(t){var e=this;this.$apollo.mutate({mutation:$,variables:{input:this.stockRequestItem}}).then((function(n){n.data;e.successNotification("Item updated successfully!"),t.target.reset(),e.$router.go(-1),e.submitting=!1})).catch((function(t){console.log(t)}))}}),watch:{$props:{handler:function(){var t,e;null!==(t=this._stockRequestItem)&&void 0!==t&&t.item_id?(this.stockRequestItem=P({},this._stockRequestItem),this.stockRequestItem.item_id=parseInt(this._stockRequestItem.item_id),null!==(e=this._stockRequestItem)&&void 0!==e&&e.id&&(this.editMode=!0)):(this.editMode=!1,this.stockRequestItem={})},deep:!0,immediate:!0},items:{handler:function(){this.items.data&&(this.items=this.items.data.map((function(t){return t.id=parseInt(t.id),t})))}}}},D=n(90),component=Object(D.a)(S,(function(){var t=this,e=t._self._c;return e(_.a,{ref:"form",staticClass:"py-2",staticStyle:{position:"relative"},attrs:{disabled:t.disableForm},on:{submit:function(e){return e.preventDefault(),t.onFormSubmitted.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("hr",{staticClass:"my-5",staticStyle:{width:"85%"}}),t._v(" "),e(m.a,{staticStyle:{position:"absolute",left:"-5px",top:"20px"},attrs:{color:t.editMode?"success":"error",content:t._index+1,inline:""}}),t._v(" "),e(v.a,{staticClass:"px-2 pt-5 grey lighten-2"},[e(O.a,[e(f.a,{attrs:{cols:"12",md:"3"}},[e(l.a,{attrs:{items:t.items,"item-value":"id","item-text":"name",label:"Select Item *",outlined:"",required:"",rules:t.fieldRequiredRole},model:{value:t.stockRequestItem.item_id,callback:function(e){t.$set(t.stockRequestItem,"item_id",t._n(e))},expression:"stockRequestItem.item_id"}})],1),t._v(" "),e(f.a,{attrs:{cols:"12",md:"3"}},[e(y.a,{staticClass:"py-0",attrs:{label:"Designation Contact * ",outlined:"",required:"",rules:t.fieldRequiredRole},model:{value:t.stockRequestItem.designation_contact,callback:function(e){t.$set(t.stockRequestItem,"designation_contact",e)},expression:"stockRequestItem.designation_contact"}})],1),t._v(" "),e(f.a,{attrs:{cols:"12",md:"3"}},[e(y.a,{staticClass:"py-0",attrs:{label:"Quantity * ",outlined:"",required:"",rules:t.fieldRequiredRole},model:{value:t.stockRequestItem.quantity,callback:function(e){t.$set(t.stockRequestItem,"quantity",e)},expression:"stockRequestItem.quantity"}})],1),t._v(" "),e(f.a,{attrs:{cols:"12",md:"3"}},[e(I.a,{staticClass:"py-0",attrs:{label:"Designation Contact * ",rows:"1",outlined:"",required:"",rules:t.fieldRequiredRole},model:{value:t.stockRequestItem.description,callback:function(e){t.$set(t.stockRequestItem,"description",e)},expression:"stockRequestItem.description"}})],1),t._v(" "),e(f.a,{staticClass:"py-3 row mt-0"},[t.editMode?e("div",{staticStyle:{position:"absolute",right:"4px",top:"-2px"}},[e(h.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text blue",attrs:{type:"submit",loading:t.submitting,disabled:!t.valid||t.submitting||t.disableForm}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Update ")])]),t._v(" "),e(h.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text red",attrs:{type:"button",loading:t.submitting,disabled:!t.valid||t.submitting||t.disableForm},on:{click:function(e){return t.$emit("on-delete-stock-request-item",t._index)}}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Delete ")])])],1):e(h.a,{staticClass:"v-btn mt-2 v-btn--is-elevated absolute top-0 v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40",position:"absolute",right:"4px",top:"-1px"},attrs:{type:"submit",loading:t.submitting,disabled:!t.valid||t.submitting||t.disableForm}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Save Changes ")])])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);