(window.webpackJsonp=window.webpackJsonp||[]).push([[79,12],{618:function(e,t,n){var content=n(619);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("29751484",content,!0,{sourceMap:!1})},619:function(e,t,n){var r=n(21)((function(i){return i[1]}));r.push([e.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex:0 1 auto;flex-wrap:wrap;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;-webkit-text-decoration:none;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),r.locals={},e.exports=r},625:function(e,t,n){"use strict";n(13),n(14),n(12),n(6),n(15),n(10),n(16);var r=n(1),o=(n(123),n(618),n(63)),l=n(7);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=Object(l.a)(o.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(r.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),n=t.tag,data=t.data;return e("li",[e(n,c(c({},data),{},{attrs:c(c({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),_=n(0),f=Object(_.i)("v-breadcrumbs__divider","li"),v=n(19);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}t.a=Object(l.a)(v.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(f,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,n=[],i=0;i<this.items.length;i++){var r=this.items[i];n.push(r.text),t?e.push(this.$scopedSlots.item({item:r})):e.push(this.$createElement(m,{key:n.join("."),props:r},[r.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}})},626:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={USER:"User",ROLE:"Role",PERMISSION:"Permission",PERMISSION_TYPE:"PermissionType",MEASUREMENT_UNIT:"MeasurementUnit",REPORT:"Report",CONFIGURATION:"Configuration",ITEM_CATEGORY:"ItemCategory",ITEM:"Item",ASSET:"Asset",STOCK_REQUEST:"StockRequest",STOCK_REQUEST_ITEM:"StockRequestItem",CONDITION:"Condition",WHERE_HOUSE:"WhereHouse",OFFICE_LOCATION:"OfficeLocation",PROGRAM_AREA:"ProgramArea",ACQUISITION_TYPE:"AcquisitionType"}},648:function(e,t,n){"use strict";n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return y})),n.d(t,"c",(function(){return O})),n.d(t,"e",(function(){return C})),n.d(t,"d",(function(){return R})),n.d(t,"f",(function(){return x}));var r,o,l,d,c,m,_,f=n(92),v=n(61),h=Object(v.a)(r||(r=Object(f.a)(["\n  query($page: Int!, $per_page: Int!, $search: String, $donor_id: ID, $acquisition_type_id: ID, $program_area_id: ID, \n    $staff_id: ID, $condition_id: ID, $available: Boolean, $disposed: Boolean) {\n    assets(first: $per_page, page: $page, search: $search, donor_id: $donor_id, staff: $staff_id, available: $available, disposed: $disposed,\n      acquisition_type_id: $acquisition_type_id, program_area_id: $program_area_id, condition: $condition_id) {\n      data {\n        id\n        tag_number\n        asset_type\n        item_name\n        acquisition_date\n        serial_no\n        description\n        accessories\n        acquisition_cost\n        purchase_order_no\n        gsrn_no\n        receipt_date\n        depreciation_date\n        po_no\n        cost_center\n        document_no\n        disposed\n        assetCustodians {\n          id\n          returned\n          staff {\n            id\n            name\n          }\n        }\n        currency {\n          id\n          name\n        }\n        acquisitionType {\n          id\n          name\n        }\n        programArea {\n          id\n          name\n        }\n        donor {\n          id\n          name\n        } \n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }   \n  }\n"]))),y=Object(v.a)(o||(o=Object(f.a)(["\n  query All_ASSET_LOOKUP_QUERY {\n    currencies {\n      id\n      name\n    }   \n    donors {\n      id\n      name\n    }  \n    acquisitionTypes {\n      id\n      name\n    }   \n    programAreas {\n      id\n      name\n      four_digit_code\n    }\n  }\n"]))),O=Object(v.a)(l||(l=Object(f.a)(["\n  query All_ASSET_LOOKUP_QUERY {\n    staffs {\n      id\n      name\n    }   \n    donors {\n      id\n      name\n    }  \n    acquisitionTypes {\n      id\n      name\n    }   \n    conditions {\n      id\n      name\n    }   \n    programAreas {\n      id\n      name\n      four_digit_code\n    }\n  }\n"]))),C=Object(v.a)(d||(d=Object(f.a)(["\n  query FIND_ASSET_QUERY($id: ID!) {\n    asset(id: $id) {\n      id\n      tag_number\n      asset_type\n      item_name\n      acquisition_date\n      serial_no\n      description\n      accessories\n      acquisition_cost\n      purchase_order_no\n      gsrn_no\n      receipt_date\n      depreciation_date\n      po_no\n      cost_center\n      document_no\n      disposed\n      available\n      assetPhysicalCheck {\n        id\n        created_at\n        checked_at\n        remark\n        condition {\n          id\n          name\n        }\n        checkedBy {\n          id\n          name\n        }\n      }\n      assetPhysicalChecks {\n        id\n        created_at\n        checked_at\n        remark\n        condition {\n          id\n          name\n        }\n        checkedBy {\n          id\n          name\n        }\n      }\n      assetCustodians {\n        id\n        remark\n        assigned_at\n        returned\n        approved\n        assignedBy {\n          id\n          name\n        }\n        staff {\n          id\n          name\n        }\n      }\n      assetCustodian {\n        id\n        staff {\n          id\n          name\n        }\n      }\n      currency {\n        id\n        name\n      }\n      acquisitionType {\n        id\n        name\n      }\n      programArea {\n        id\n        name\n      }\n      donor {\n        id\n        name\n      }\n    }   \n  }\n"]))),R=Object(v.a)(c||(c=Object(f.a)(["\n  mutation ($input: AssetCreateInput!) {\n    createAsset(input: $input) {\n      id\n    }\n  }\n"]))),x=Object(v.a)(m||(m=Object(f.a)(["\n  mutation ($input: AssetUpdateInput!) {\n    updateAsset(input: $input) {\n      id\n    }\n  }\n"])));Object(v.a)(_||(_=Object(f.a)(["\n  mutation($id: ID!) {\n    deleteAsset(id: $id) {\n      id\n    }\n  }\n"])))},704:function(e,t,n){"use strict";n.r(t);var r=n(652),o=n(177),l=n(690),d=n(632),c=n(273),m=n(691),_=n(758),f=n(592),v=n(607),h=n(124),y=n(623),O=(n(14),n(87),n(13),n(12),n(6),n(15),n(10),n(16),n(1)),C=(n(38),n(71),n(106)),R=n(648);function x(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function A(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(t){Object(O.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var I={props:["_asset"],data:function(){return{lookup:{},asset:{},valid:!1,editMode:!1,submitting:!1,fieldRequiredRule:[function(e){return!!e||"This field is required"}],donors:[],currencies:[],programAreas:[],acquisitionTypes:[]}},apollo:{lookup:{query:R.a,fetchPolicy:"cache-and-network",update:function(data){return data}}},methods:A(A({},Object(C.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(e){this.$refs.form.validate()&&(this.editMode?this.updateAsset(e):this.registerAsset(e))},registerAsset:function(e){var t=this;this.$refs.form.validate(),this.submitting=!0,this.$apollo.mutate({mutation:R.d,variables:{input:this.asset}}).then((function(n){n.data;t.successNotification("Asset registered  successfully!"),e.target.reset(),t.$router.push("/asset/assets"),t.submitting=!1})).catch((function(e){t.submitting=!1,console.log(e)}))},updateAsset:function(e){var t=this;delete this.asset.__typename,delete this.asset.__typename,delete this.asset.__typename,delete this.asset.__typename,delete this.asset.__typename,this.$apollo.mutate({mutation:R.f,variables:{input:this.asset}}).then((function(n){n.data;t.successNotification("Asset updated successfully!"),e.target.reset(),t.$router.push("/asset/assets"),t.submitting=!1})).catch((function(e){console.log(e)}))}}),watch:{$props:{handler:function(){var e,t,n,r,o,l,d,c,m;(console.log(this._asset),null!==(e=this._asset)&&void 0!==e&&e.id)?(this.editMode=!0,this.asset.item_category_id=parseInt(null===(t=this._asset)||void 0===t||null===(t=t.itemCategory)||void 0===t?void 0:t.id),this.asset.office_location_id=parseInt(null===(n=this._asset)||void 0===n||null===(n=n.officeLocation)||void 0===n?void 0:n.id),this.asset.where_house_id=parseInt(null===(r=this._asset)||void 0===r||null===(r=r.whereHouse)||void 0===r?void 0:r.id),this.asset.stock_type_id=parseInt(null===(o=this._asset)||void 0===o||null===(o=o.stockType)||void 0===o?void 0:o.id),this.asset.department_id=parseInt(null===(l=this._asset)||void 0===l||null===(l=l.department)||void 0===l?void 0:l.id),this.asset.unit_of_measurement_id=parseInt(null===(d=this._asset)||void 0===d||null===(d=d.unitOfMeasurement)||void 0===d?void 0:d.id),this.asset.donor_id=parseInt(null===(c=this._asset)||void 0===c||null===(c=c.donor)||void 0===c?void 0:c.id),this.asset.lot_number_id=parseInt(null===(m=this._asset)||void 0===m||null===(m=m.lotNumber)||void 0===m?void 0:m.id),this.asset.name=this._asset.name,this.asset.description=this._asset.description,this.asset.expire_date=this._asset.expire_date,this.asset.id=this._asset.id):(this.editMode=!1,this.item={})},deep:!0,immediate:!0},lookup:{handler:function(){this.lookup&&(this.donors=this.lookup.donors.map((function(e){return e.id=parseInt(e.id),e})),this.currencies=this.lookup.currencies.map((function(e){return e.id=parseInt(e.id),e})),this.acquisitionTypes=this.lookup.acquisitionTypes.map((function(e){return e.id=parseInt(e.id),e})),this.programAreas=this.lookup.programAreas.map((function(e){return e.id=parseInt(e.id),e})))}}}},$=n(60),component=Object($.a)(I,(function(){var e=this,t=e._self._c;return t(m.a,{ref:"form",on:{submit:function(t){return t.preventDefault(),e.onFormSubmitted.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(d.a,[t(_.a,[t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(f.a,{attrs:{items:[{value:"CAPITAL",label:"Capital"},{value:"LOW_VALUE",label:"Low Value"},{value:"GRANT_FUND",label:"Grant Fund"},{value:"FURNITURE_FITTING_FIXTURE",label:"Furniture, Fittings, And Fixtures"}],label:"Select Asset Type *","item-value":"value","item-text":"label",outlined:"",required:"",rules:e.fieldRequiredRule},model:{value:e.asset.asset_type,callback:function(t){e.$set(e.asset,"asset_type",e._n(t))},expression:"asset.asset_type"}})],1),e._v(" "),t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"5"}},[t(h.a,{staticClass:"py-0",attrs:{label:"Asset Name * ",outlined:"",required:"",rules:e.fieldRequiredRule},model:{value:e.asset.item_name,callback:function(t){e.$set(e.asset,"item_name",t)},expression:"asset.item_name"}})],1),e._v(" "),t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"3"}},[t(h.a,{staticClass:"py-0",attrs:{label:"Acquisition Date ",outlined:"",required:"",type:"date",rules:e.fieldRequiredRule},model:{value:e.asset.acquisition_date,callback:function(t){e.$set(e.asset,"acquisition_date",t)},expression:"asset.acquisition_date"}})],1),e._v(" "),t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(h.a,{staticClass:"py-0",attrs:{label:"Serial Number  ",outlined:"",required:"",rules:e.fieldRequiredRule},model:{value:e.asset.serial_no,callback:function(t){e.$set(e.asset,"serial_no",t)},expression:"asset.serial_no"}})],1),e._v(" "),t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(h.a,{staticClass:"py-0",attrs:{label:"Accessories ",outlined:"",required:"",rules:e.fieldRequiredRule},model:{value:e.asset.accessories,callback:function(t){e.$set(e.asset,"accessories",t)},expression:"asset.accessories"}})],1),e._v(" "),t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(h.a,{staticClass:"py-0",attrs:{label:"Acquisition Cost ",outlined:"",required:"",type:"number",rules:e.fieldRequiredRule},model:{value:e.asset.acquisition_cost,callback:function(t){e.$set(e.asset,"acquisition_cost",e._n(t))},expression:"asset.acquisition_cost"}})],1),e._v(" "),t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(h.a,{staticClass:"py-0",attrs:{label:"Purchase Order Number ",outlined:"",required:"",rules:e.fieldRequiredRule},model:{value:e.asset.purchase_order_no,callback:function(t){e.$set(e.asset,"purchase_order_no",t)},expression:"asset.purchase_order_no"}})],1),e._v(" "),t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(h.a,{staticClass:"py-0",attrs:{label:"GSRN No ",outlined:"",required:"",rules:e.fieldRequiredRule},model:{value:e.asset.gsrn_no,callback:function(t){e.$set(e.asset,"gsrn_no",t)},expression:"asset.gsrn_no"}})],1),e._v(" "),t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(h.a,{staticClass:"py-0",attrs:{label:"Receipt Date ",outlined:"",required:"",type:"date",rules:e.fieldRequiredRule},model:{value:e.asset.receipt_date,callback:function(t){e.$set(e.asset,"receipt_date",t)},expression:"asset.receipt_date"}})],1),e._v(" "),t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(h.a,{staticClass:"py-0",attrs:{label:"Depreciation Date",outlined:"",required:"",type:"date",rules:e.fieldRequiredRule},model:{value:e.asset.depreciation_date,callback:function(t){e.$set(e.asset,"depreciation_date",t)},expression:"asset.depreciation_date"}})],1),e._v(" "),t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(h.a,{staticClass:"py-0",attrs:{label:"Department/Project PO number ",outlined:"",required:"",rules:e.fieldRequiredRule},model:{value:e.asset.po_no,callback:function(t){e.$set(e.asset,"po_no",t)},expression:"asset.po_no"}})],1),e._v(" "),"CAPITAL"==e.asset.asset_type||"LOW_VALUE"==e.asset.asset_type||"FURNITURE_FITTING_FIXTURE"==e.asset.asset_type?t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(h.a,{staticClass:"py-0",attrs:{label:"Cost Center ",outlined:"",required:"",rules:e.fieldRequiredRule},model:{value:e.asset.cost_center,callback:function(t){e.$set(e.asset,"cost_center",t)},expression:"asset.cost_center"}})],1):e._e(),e._v(" "),t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(h.a,{staticClass:"py-0",attrs:{label:"Document No",outlined:"",required:"",rules:e.fieldRequiredRule},model:{value:e.asset.document_no,callback:function(t){e.$set(e.asset,"document_no",t)},expression:"asset.document_no"}})],1),e._v(" "),"FURNITURE_FITTING_FIXTURE"==e.asset.asset_type||"GRANT_FUND"==e.asset.asset_type?t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(r.a,{attrs:{items:e.donors,"item-value":"id","item-text":"name",label:"Select Donor *",outlined:"",required:"",rules:e.fieldRequiredRule},model:{value:e.asset.donor_id,callback:function(t){e.$set(e.asset,"donor_id",e._n(t))},expression:"asset.donor_id"}})],1):e._e(),e._v(" "),t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(r.a,{attrs:{items:e.programAreas,"item-value":"id","item-text":"name",label:"Select Program Area *",outlined:"",required:"",rules:e.fieldRequiredRule},model:{value:e.asset.program_area_id,callback:function(t){e.$set(e.asset,"program_area_id",e._n(t))},expression:"asset.program_area_id"}})],1),e._v(" "),t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(r.a,{attrs:{items:e.acquisitionTypes,"item-value":"id","item-text":"name",label:"Select Acquisition Type *",outlined:"",required:"",rules:e.fieldRequiredRule},model:{value:e.asset.acquisition_type_id,callback:function(t){e.$set(e.asset,"acquisition_type_id",e._n(t))},expression:"asset.acquisition_type_id"}})],1),e._v(" "),t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(r.a,{attrs:{items:e.currencies,"item-value":"id","item-text":"name",label:"Select Currency *",outlined:"",required:"",rules:e.fieldRequiredRule},model:{value:e.asset.currency_id,callback:function(t){e.$set(e.asset,"currency_id",e._n(t))},expression:"asset.currency_id"}})],1),e._v(" "),t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"12"}},[t(y.a,{staticClass:"py-0",attrs:{label:"Enter a short asset description",rows:"3",outlined:"",required:""},model:{value:e.asset.description,callback:function(t){e.$set(e.asset,"description",t)},expression:"asset.description"}})],1)],1),e._v(" "),t(c.a,{staticClass:"my-2"}),e._v(" "),t(l.a,{staticClass:"py-3 row"},[t("nuxt-link",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button",to:"/order/pending"}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Cancel ")])]),e._v(" "),t(v.a),e._v(" "),e.editMode?t(o.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:e.submitting,disabled:!e.valid||e.submitting}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Update ")])]):t(o.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:e.submitting,disabled:!e.valid||e.submitting}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Add ")])])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},770:function(e,t,n){"use strict";n.r(t);var r=n(625),o=n(632),l=n(194),d=n(704),c=n(626),m=n(26),_={middleware:["has_role","authenticated"],meta:{permissions:[{permission:c.a.ASSET,permissionTypes:m.a.CREATE}]},components:{AssetForm:d.default},data:function(){return{breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/dashboard"},{text:"Assets",disabled:!1,href:"/asset/assets"},{text:"Create",disabled:!0,href:"/asset/create"}]}}},f=n(60),component=Object(f.a)(_,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"pa-5 grey lighten-3"},[t(r.a,{attrs:{items:e.breadcrumbs},scopedSlots:e._u([{key:"divider",fn:function(){return[t(l.a,[e._v("mdi-chevron-double-right")])]},proxy:!0}])}),e._v(" "),e._m(0),e._v(" "),t("div",{staticClass:"pa-4 pl-3"},[t(o.a,{staticClass:"grey card outlined lighten-4"},[t("asset-form")],1)],1)],1)}),[function(){var e=this,t=e._self._c;return t("div",{staticClass:"px-5"},[t("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[e._v("Add Asset")]),e._v(" "),t("span",{staticClass:"grey--text text--darken-1"},[e._v("Enter all the required details of the asset.")])])}],!1,null,null,null);t.default=component.exports}}]);