(window.webpackJsonp=window.webpackJsonp||[]).push([[66,12],{597:function(e,t,n){var content=n(598);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("b1bed018",content,!0,{sourceMap:!1})},598:function(e,t,n){var r=n(19)(!1);r.push([e.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),e.exports=r},608:function(e,t,n){"use strict";n(12),n(13),n(11),n(5),n(15),n(9),n(16);var r=n(1),o=(n(118),n(597),n(65)),l=n(6);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=Object(l.a)(o.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(r.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),n=t.tag,data=t.data;return e("li",[e(n,c(c({},data),{},{attrs:c(c({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),_=n(0),f=Object(_.i)("v-breadcrumbs__divider","li"),v=n(17);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}t.a=Object(l.a)(v.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(f,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,n=[],i=0;i<this.items.length;i++){var r=this.items[i];n.push(r.text),t?e.push(this.$scopedSlots.item({item:r})):e.push(this.$createElement(m,{key:n.join("."),props:r},[r.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}})},609:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={USER:"User",ROLE:"Role",PERMISSION:"Permission",PERMISSION_TYPE:"PermissionType",MEASUREMENT_UNIT:"MeasurementUnit",REPORT:"Report",CONFIGURATION:"Configuration",ITEM_CATEGORY:"ItemCategory",ITEM:"Item",STOCK_REQUEST:"StockRequest",STOCK_REQUEST_ITEM:"StockRequestItem",CONDITION:"Condition"}},611:function(e,t,n){"use strict";n.d(t,"b",(function(){return v})),n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return y})),n.d(t,"c",(function(){return O})),n.d(t,"e",(function(){return x}));var r,o,l,d,c,m,_=n(91),f=n(64),v=Object(f.a)(r||(r=Object(_.a)(["\n  query($page: Int!, $per_page: Int!) {\n    items(first: $per_page, page: $page) {\n      data {\n        id\n        name\n        stock_card_number\n        description\n        expire_date\n        itemCategory {\n          id\n          name\n        }   \n        donor {\n          id\n          name\n        }  \n        lotNumber {\n          id\n          lot_number\n        }   \n        unitOfMeasurement {\n          id\n          name\n          abbreviation\n        }  \n        officeLocation {\n          id\n          address\n        } \n        stockType {\n          id\n          name\n        }   \n        whereHouse {\n          id\n          name\n          address\n        }     \n        department {\n          id\n          name\n        }   \n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }   \n  }\n"]))),h=Object(f.a)(o||(o=Object(_.a)(["\n  query All_ITEM_LOOKUP_QUERY {\n    itemCategories {\n      id\n      name\n    }   \n    donors {\n      id\n      name\n    }  \n    lotNumbers {\n      id\n      lot_number\n    }   \n    unitOfMeasurements {\n      id\n      name\n      abbreviation\n    }  \n    officeLocations {\n      id\n      address\n    } \n    stockTypes {\n      id\n      name\n    }   \n    whereHouses {\n      id\n      name\n      address\n    }     \n    departments {\n      id\n      name\n    }   \n  }\n"]))),y=Object(f.a)(l||(l=Object(_.a)(["\n  query FIND_ITEM_QUERY($id: ID!) {\n    item(id: $id) {\n        id\n        name\n        stock_card_number\n        description\n        expire_date\n        itemCategory {\n          id\n          name\n        }   \n        donor {\n          id\n          name\n        }  \n        lotNumber {\n          id\n          lot_number\n        }   \n        unitOfMeasurement {\n          id\n          name\n          abbreviation\n        }  \n        officeLocation {\n          id\n          address\n        } \n        stockType {\n          id\n          name\n        }   \n        whereHouse {\n          id\n          name\n          address\n        }     \n        department {\n          id\n          name\n        }   \n    }   \n  }\n"]))),O=Object(f.a)(d||(d=Object(_.a)(["\n  mutation ($input: ItemCreateInput!) {\n    createItem(input: $input) {\n      id\n      name\n      description\n    }\n  }\n"]))),x=Object(f.a)(c||(c=Object(_.a)(["\n  mutation ($input: ItemUpdateInput!) {\n    updateItem(input: $input) {\n      id\n      name\n      description\n    }\n  }\n"])));Object(f.a)(m||(m=Object(_.a)(["\n  mutation($id: ID!) {\n    deleteItem(id: $id) {\n      id\n    }\n  }\n"])))},621:function(e,t,n){"use strict";n.d(t,"a",(function(){return _})),n.d(t,"b",(function(){return f})),n.d(t,"d",(function(){return v})),n.d(t,"c",(function(){return h}));var r,o,l,d,c=n(91),m=n(64),_=Object(m.a)(r||(r=Object(c.a)(["\n  query {\n    itemCategories {\n      id\n      name\n      description\n    }   \n  }\n"]))),f=Object(m.a)(o||(o=Object(c.a)(["\n  mutation ($input: ItemCategoryCreateInput!) {\n    createItemCategory(input: $input) {\n      id\n      name\n      description\n    }\n  }\n"]))),v=Object(m.a)(l||(l=Object(c.a)(["\n  mutation ($input: ItemCategoryUpdateInput!) {\n    updateItemCategory(input: $input) {\n      id\n      name\n      description\n    }\n  }\n"]))),h=Object(m.a)(d||(d=Object(c.a)(["\n  mutation($id: ID!) {\n    deleteItemCategory(id: $id) {\n      id\n    }\n  }\n"])))},635:function(e,t,n){"use strict";n.r(t);var r=n(710),o=n(174),l=n(655),d=n(631),c=n(262),m=n(657),_=n(709),f=n(590),v=n(120),h=n(614),y=(n(38),n(13),n(84),n(12),n(11),n(5),n(15),n(9),n(16),n(1)),O=(n(69),n(106)),x=(n(621),n(611));function I(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?I(Object(source),!0).forEach((function(t){Object(y.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):I(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var j={props:["_item"],data:function(){return{lookup:{},item:{},valid:!1,editMode:!1,submitting:!1,fieldRequiredRole:[function(e){return!!e||"This field is required"}],donors:[],itemCategories:[],lotNumbers:[],officeLocations:[],stockTypes:[],unitOfMeasurements:[],whereHouses:[],departments:[]}},apollo:{lookup:{query:x.a,fetchPolicy:"cache-and-network",update:function(data){return data}}},methods:k(k({},Object(O.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(e){this.$refs.form.validate()&&(this.editMode?this.updateItem(e):this.registerItem(e))},registerItem:function(e){var t=this;this.$refs.form.validate(),this.submitting=!0,this.$apollo.mutate({mutation:x.c,variables:{input:this.item}}).then((function(n){n.data;t.successNotification("Item registered  successfully!"),e.target.reset(),t.$router.push("/inventory/items"),t.submitting=!1})).catch((function(e){t.submitting=!1,console.log(e)}))},updateItem:function(e){var t=this;delete this.item.__typename,delete this.item.__typename,delete this.item.__typename,delete this.item.__typename,delete this.item.__typename,this.$apollo.mutate({mutation:x.e,variables:{input:this.item}}).then((function(n){n.data;t.successNotification("Item updated successfully!"),e.target.reset(),t.$router.push("/inventory/items"),t.submitting=!1})).catch((function(e){console.log(e)}))}}),watch:{$props:{handler:function(){var e,t,n,r,o,l,d,c,m,_,f,v,h,y,O,x,I;(console.log(this._item),null!==(e=this._item)&&void 0!==e&&e.id)?(this.editMode=!0,this.item.item_category_id=parseInt(null===(t=this._item)||void 0===t||null===(n=t.itemCategory)||void 0===n?void 0:n.id),this.item.office_location_id=parseInt(null===(r=this._item)||void 0===r||null===(o=r.officeLocation)||void 0===o?void 0:o.id),this.item.where_house_id=parseInt(null===(l=this._item)||void 0===l||null===(d=l.whereHouse)||void 0===d?void 0:d.id),this.item.stock_type_id=parseInt(null===(c=this._item)||void 0===c||null===(m=c.stockType)||void 0===m?void 0:m.id),this.item.department_id=parseInt(null===(_=this._item)||void 0===_||null===(f=_.department)||void 0===f?void 0:f.id),this.item.unit_of_measurement_id=parseInt(null===(v=this._item)||void 0===v||null===(h=v.unitOfMeasurement)||void 0===h?void 0:h.id),this.item.donor_id=parseInt(null===(y=this._item)||void 0===y||null===(O=y.donor)||void 0===O?void 0:O.id),this.item.lot_number_id=parseInt(null===(x=this._item)||void 0===x||null===(I=x.lotNumber)||void 0===I?void 0:I.id),this.item.name=this._item.name,this.item.description=this._item.description,this.item.expire_date=this._item.expire_date,this.item.id=this._item.id):(this.editMode=!1,this.item={})},deep:!0,immediate:!0},lookup:{handler:function(){this.lookup&&(this.donors=this.lookup.donors.map((function(e){return e.id=parseInt(e.id),e})),this.itemCategories=this.lookup.itemCategories.map((function(e){return e.id=parseInt(e.id),e})),this.lotNumbers=this.lookup.lotNumbers.map((function(e){return e.id=parseInt(e.id),e})),this.officeLocations=this.lookup.officeLocations.map((function(e){return e.id=parseInt(e.id),e})),this.stockTypes=this.lookup.stockTypes.map((function(e){return e.id=parseInt(e.id),e})),this.unitOfMeasurements=this.lookup.unitOfMeasurements.map((function(e){return e.id=parseInt(e.id),e})),this.whereHouses=this.lookup.whereHouses.map((function(e){return e.id=parseInt(e.id),e})),this.departments=this.lookup.departments.map((function(e){return e.id=parseInt(e.id),e})))}}}},R=n(90),component=Object(R.a)(j,(function(){var e=this,t=e._self._c;return t(m.a,{ref:"form",on:{submit:function(t){return t.preventDefault(),e.onFormSubmitted.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(d.a,[t(_.a,[t(l.a,{attrs:{cols:"12",md:"7"}},[t(v.a,{staticClass:"py-0",attrs:{label:"Item Name * ",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.item.name,callback:function(t){e.$set(e.item,"name",t)},expression:"item.name"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"5"}},[t(v.a,{staticClass:"py-0",attrs:{label:"Expire Date ",outlined:"",required:"",type:"date",rules:e.fieldRequiredRole},model:{value:e.item.expire_date,callback:function(t){e.$set(e.item,"expire_date",t)},expression:"item.expire_date"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"4"}},[t(r.a,{attrs:{items:e.donors,"item-value":"id","item-text":"name",label:"Select Donor *",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.item.donor_id,callback:function(t){e.$set(e.item,"donor_id",e._n(t))},expression:"item.donor_id"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"4"}},[t(r.a,{attrs:{items:e.itemCategories,"item-value":"id","item-text":"name",label:"Select Item Category *",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.item.item_category_id,callback:function(t){e.$set(e.item,"item_category_id",e._n(t))},expression:"item.item_category_id"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"4"}},[t(r.a,{attrs:{items:e.officeLocations,"item-value":"id","item-text":"address",label:"Select Office Location *",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.item.office_location_id,callback:function(t){e.$set(e.item,"office_location_id",e._n(t))},expression:"item.office_location_id"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"4"}},[t(r.a,{attrs:{items:e.stockTypes,"item-value":"id","item-text":"name",label:"Select Stock Type *",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.item.stock_type_id,callback:function(t){e.$set(e.item,"stock_type_id",e._n(t))},expression:"item.stock_type_id"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"4"}},[t(r.a,{attrs:{items:e.lotNumbers,"item-value":"id","item-text":"lot_number",label:"Select Lot Number *",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.item.lot_number_id,callback:function(t){e.$set(e.item,"lot_number_id",e._n(t))},expression:"item.lot_number_id"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"4"}},[t(r.a,{attrs:{items:e.unitOfMeasurements,"item-value":"id","item-text":"name",label:"Select Unit Of Measurement *",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.item.unit_of_measurement_id,callback:function(t){e.$set(e.item,"unit_of_measurement_id",e._n(t))},expression:"item.unit_of_measurement_id"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"4"}},[t(r.a,{attrs:{items:e.whereHouses,"item-value":"id","item-text":"name",label:"Select Warehouse *",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.item.where_house_id,callback:function(t){e.$set(e.item,"where_house_id",e._n(t))},expression:"item.where_house_id"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"4"}},[t(r.a,{attrs:{items:e.departments,"item-value":"id","item-text":"name",label:"Select Department *",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.item.department_id,callback:function(t){e.$set(e.item,"department_id",e._n(t))},expression:"item.department_id"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"4"}},[t(v.a,{staticClass:"py-0",attrs:{label:"Item Beginning Balance * ",type:"number",step:"any",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.item.beginning_balance,callback:function(t){e.$set(e.item,"beginning_balance",e._n(t))},expression:"item.beginning_balance"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"3"}},[t(v.a,{staticClass:"py-0",attrs:{label:"Bin Card Location ",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.item.bin_card_location,callback:function(t){e.$set(e.item,"bin_card_location",t)},expression:"item.bin_card_location"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"3"}},[t(v.a,{staticClass:"py-0",attrs:{label:"Batch Number",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.item.batch_number,callback:function(t){e.$set(e.item,"batch_number",t)},expression:"item.batch_number"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"3"}},[t(v.a,{staticClass:"py-0",attrs:{label:"Invoice Number ",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.item.invoice_no,callback:function(t){e.$set(e.item,"invoice_no",t)},expression:"item.invoice_no"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"3"}},[t(v.a,{staticClass:"py-0",attrs:{label:"Purchase Order Number ",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.item.purchase_order_no,callback:function(t){e.$set(e.item,"purchase_order_no",t)},expression:"item.purchase_order_no"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"3"}},[t(v.a,{staticClass:"py-0",attrs:{label:"Waybill / bill of loading number ",outlined:"",required:"",type:"number",step:"any",rules:e.fieldRequiredRole},model:{value:e.item.waybill_number,callback:function(t){e.$set(e.item,"waybill_number",e._n(t))},expression:"item.waybill_number"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"3"}},[t(v.a,{staticClass:"py-0",attrs:{label:"Vendor Name ",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.item.vendor_name,callback:function(t){e.$set(e.item,"vendor_name",t)},expression:"item.vendor_name"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"3"}},[t(v.a,{staticClass:"py-0",attrs:{label:"Vendor Id ",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.item.vendor_id,callback:function(t){e.$set(e.item,"vendor_id",t)},expression:"item.vendor_id"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"3"}},[t(v.a,{staticClass:"py-0",attrs:{label:"Unit Price ",outlined:"",required:"",type:"number",step:"any",rules:e.fieldRequiredRole},model:{value:e.item.unit_price,callback:function(t){e.$set(e.item,"unit_price",e._n(t))},expression:"item.unit_price"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"3"}},[t(v.a,{staticClass:"py-0",attrs:{label:"Total Price",outlined:"",required:"",type:"number",step:"any",rules:e.fieldRequiredRole},model:{value:e.item.total_price,callback:function(t){e.$set(e.item,"total_price",e._n(t))},expression:"item.total_price"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"12"}},[t(h.a,{staticClass:"py-0",attrs:{label:"Enter a short description",rows:"3",outlined:"",required:""},model:{value:e.item.description,callback:function(t){e.$set(e.item,"description",t)},expression:"item.description"}})],1)],1),e._v(" "),t(c.a,{staticClass:"my-2"}),e._v(" "),t(l.a,{staticClass:"py-3 row"},[t("nuxt-link",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button",to:"/order/pending"}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Cancel ")])]),e._v(" "),t(f.a),e._v(" "),e.editMode?t(o.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:e.submitting,disabled:!e.valid||e.submitting}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Update ")])]):t(o.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:e.submitting,disabled:!e.valid||e.submitting}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Add ")])])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},731:function(e,t,n){"use strict";n.r(t);var r=n(608),o=n(631),l=n(189),d=n(635),c=n(609),m=n(34),_={middleware:["has_role","authenticated"],meta:{permissions:[{permission:c.a.ITEM,permissionTypes:m.a.CREATE}]},components:{ItemForm:d.default},data:function(){return{breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/dashboard"},{text:"Orders",disabled:!1,href:"/inventory/items"}]}}},f=n(90),component=Object(f.a)(_,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"pa-5 grey lighten-3"},[t(r.a,{attrs:{items:e.breadcrumbs},scopedSlots:e._u([{key:"divider",fn:function(){return[t(l.a,[e._v("mdi-chevron-double-right")])]},proxy:!0}])}),e._v(" "),e._m(0),e._v(" "),t("div",{staticClass:"pa-4 pl-3"},[t(o.a,{staticClass:"grey card outlined lighten-4"},[t("item-form")],1)],1)],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"px-5"},[t("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[e._v("Add Item")]),e._v(" "),t("span",{staticClass:"grey--text text--darken-1"},[e._v("Enter all the required details of the item.")])])}],!1,null,null,null);t.default=component.exports}}]);