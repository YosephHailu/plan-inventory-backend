(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{653:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return h})),n.d(t,"c",(function(){return y})),n.d(t,"d",(function(){return C}));var r,o,l,c,d,_,m=n(91),v=n(60),f=Object(v.a)(r||(r=Object(m.a)(["\n  query($page: Int!, $per_page: Int!) {\n    assets(first: $per_page, page: $page) {\n      data {\n        id\n        tag_number\n        asset_type\n        item_name\n        acquisition_date\n        serial_no\n        description\n        accessories\n        acquisition_cost\n        purchase_order_no\n        gsrn_no\n        receipt_date\n        depreciation_date\n        po_no\n        cost_center\n        document_no\n        currency {\n          id\n          name\n        }\n        acquisitionType {\n          id\n          name\n        }\n        programArea {\n          id\n          name\n        }\n        donor {\n          id\n          name\n        } \n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }   \n  }\n"]))),h=Object(v.a)(o||(o=Object(m.a)(["\n  query All_ASSET_LOOKUP_QUERY {\n    currencies {\n      id\n      name\n    }   \n    donors {\n      id\n      name\n    }  \n    acquisitionTypes {\n      id\n      name\n    }   \n    programAreas {\n      id\n      name\n      four_digit_code\n    }\n  }\n"]))),y=(Object(v.a)(l||(l=Object(m.a)(["\n  query FIND_ASSET_QUERY($id: ID!) {\n    asset(id: $id) {\n      id\n      tag_number\n      asset_type\n      item_name\n      acquisition_date\n      serial_no\n      description\n      accessories\n      acquisition_cost\n      purchase_order_no\n      gsrn_no\n      receipt_date\n      depreciation_date\n      po_no\n      cost_center\n      document_no\n      currency {\n        id\n        name\n      }\n      acquisitionType {\n        id\n        name\n      }\n      programArea {\n        id\n        name\n      }\n      donor {\n        id\n        name\n      }\n    }   \n  }\n"]))),Object(v.a)(c||(c=Object(m.a)(["\n  mutation ($input: AssetCreateInput!) {\n    createAsset(input: $input) {\n      id\n    }\n  }\n"])))),C=Object(v.a)(d||(d=Object(m.a)(["\n  mutation ($input: AssetUpdateInput!) {\n    updateAsset(input: $input) {\n      id\n    }\n  }\n"])));Object(v.a)(_||(_=Object(m.a)(["\n  mutation($id: ID!) {\n    deleteAsset(id: $id) {\n      id\n    }\n  }\n"])))},688:function(e,t,n){"use strict";n.r(t);var r=n(655),o=n(177),l=n(668),c=n(635),d=n(267),_=n(669),m=n(736),v=n(581),f=n(596),h=n(121),y=n(616),C=(n(14),n(85),n(13),n(12),n(6),n(16),n(10),n(17),n(1)),R=(n(39),n(69),n(106)),O=n(653);function $(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?$(Object(source),!0).forEach((function(t){Object(C.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):$(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var x={props:["_asset"],data:function(){return{lookup:{},asset:{},valid:!1,editMode:!1,submitting:!1,fieldRequiredRule:[function(e){return!!e||"This field is required"}],donors:[],currencies:[],programAreas:[],acquisitionTypes:[]}},apollo:{lookup:{query:O.a,fetchPolicy:"cache-and-network",update:function(data){return data}}},methods:k(k({},Object(R.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(e){this.$refs.form.validate()&&(this.editMode?this.updateAsset(e):this.registerAsset(e))},registerAsset:function(e){var t=this;this.$refs.form.validate(),this.submitting=!0,this.$apollo.mutate({mutation:O.c,variables:{input:this.asset}}).then((function(n){n.data;t.successNotification("Asset registered  successfully!"),e.target.reset(),t.$router.push("/asset/assets"),t.submitting=!1})).catch((function(e){t.submitting=!1,console.log(e)}))},updateAsset:function(e){var t=this;delete this.asset.__typename,delete this.asset.__typename,delete this.asset.__typename,delete this.asset.__typename,delete this.asset.__typename,this.$apollo.mutate({mutation:O.d,variables:{input:this.asset}}).then((function(n){n.data;t.successNotification("Asset updated successfully!"),e.target.reset(),t.$router.push("/asset/assets"),t.submitting=!1})).catch((function(e){console.log(e)}))}}),watch:{$props:{handler:function(){var e,t,n,r,o,l,c,d,_;(console.log(this._asset),null!==(e=this._asset)&&void 0!==e&&e.id)?(this.editMode=!0,this.asset.item_category_id=parseInt(null===(t=this._asset)||void 0===t||null===(t=t.itemCategory)||void 0===t?void 0:t.id),this.asset.office_location_id=parseInt(null===(n=this._asset)||void 0===n||null===(n=n.officeLocation)||void 0===n?void 0:n.id),this.asset.where_house_id=parseInt(null===(r=this._asset)||void 0===r||null===(r=r.whereHouse)||void 0===r?void 0:r.id),this.asset.stock_type_id=parseInt(null===(o=this._asset)||void 0===o||null===(o=o.stockType)||void 0===o?void 0:o.id),this.asset.department_id=parseInt(null===(l=this._asset)||void 0===l||null===(l=l.department)||void 0===l?void 0:l.id),this.asset.unit_of_measurement_id=parseInt(null===(c=this._asset)||void 0===c||null===(c=c.unitOfMeasurement)||void 0===c?void 0:c.id),this.asset.donor_id=parseInt(null===(d=this._asset)||void 0===d||null===(d=d.donor)||void 0===d?void 0:d.id),this.asset.lot_number_id=parseInt(null===(_=this._asset)||void 0===_||null===(_=_.lotNumber)||void 0===_?void 0:_.id),this.asset.name=this._asset.name,this.asset.description=this._asset.description,this.asset.expire_date=this._asset.expire_date,this.asset.id=this._asset.id):(this.editMode=!1,this.item={})},deep:!0,immediate:!0},lookup:{handler:function(){this.lookup&&(this.donors=this.lookup.donors.map((function(e){return e.id=parseInt(e.id),e})),this.currencies=this.lookup.currencies.map((function(e){return e.id=parseInt(e.id),e})),this.acquisitionTypes=this.lookup.acquisitionTypes.map((function(e){return e.id=parseInt(e.id),e})),this.programAreas=this.lookup.programAreas.map((function(e){return e.id=parseInt(e.id),e})))}}}},A=n(90),component=Object(A.a)(x,(function(){var e=this,t=e._self._c;return t(_.a,{ref:"form",on:{submit:function(t){return t.preventDefault(),e.onFormSubmitted.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(c.a,[t(m.a,[t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(v.a,{attrs:{items:[{value:"CAPITAL",label:"Capital"}],label:"Select Asset Type *","item-value":"value","item-text":"label",outlined:"",required:"",rules:e.fieldRequiredRule},model:{value:e.asset.asset_type,callback:function(t){e.$set(e.asset,"asset_type",e._n(t))},expression:"asset.asset_type"}})],1),e._v(" "),t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"5"}},[t(h.a,{staticClass:"py-0",attrs:{label:"Asset Name * ",outlined:"",required:"",rules:e.fieldRequiredRule},model:{value:e.asset.item_name,callback:function(t){e.$set(e.asset,"item_name",t)},expression:"asset.item_name"}})],1),e._v(" "),t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"3"}},[t(h.a,{staticClass:"py-0",attrs:{label:"Acquisition Date ",outlined:"",required:"",type:"date",rules:e.fieldRequiredRule},model:{value:e.asset.acquisition_date,callback:function(t){e.$set(e.asset,"acquisition_date",t)},expression:"asset.acquisition_date"}})],1),e._v(" "),t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(h.a,{staticClass:"py-0",attrs:{label:"Serial Number  ",outlined:"",required:"",rules:e.fieldRequiredRule},model:{value:e.asset.serial_no,callback:function(t){e.$set(e.asset,"serial_no",t)},expression:"asset.serial_no"}})],1),e._v(" "),t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(h.a,{staticClass:"py-0",attrs:{label:"Accessories ",outlined:"",required:"",rules:e.fieldRequiredRule},model:{value:e.asset.accessories,callback:function(t){e.$set(e.asset,"accessories",t)},expression:"asset.accessories"}})],1),e._v(" "),t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(h.a,{staticClass:"py-0",attrs:{label:"Acquisition Cost ",outlined:"",required:"",type:"number",rules:e.fieldRequiredRule},model:{value:e.asset.acquisition_cost,callback:function(t){e.$set(e.asset,"acquisition_cost",e._n(t))},expression:"asset.acquisition_cost"}})],1),e._v(" "),t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(h.a,{staticClass:"py-0",attrs:{label:"Purchase Order Number ",outlined:"",required:"",rules:e.fieldRequiredRule},model:{value:e.asset.purchase_order_no,callback:function(t){e.$set(e.asset,"purchase_order_no",t)},expression:"asset.purchase_order_no"}})],1),e._v(" "),t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(h.a,{staticClass:"py-0",attrs:{label:"GSRN No ",outlined:"",required:"",rules:e.fieldRequiredRule},model:{value:e.asset.gsrn_no,callback:function(t){e.$set(e.asset,"gsrn_no",t)},expression:"asset.gsrn_no"}})],1),e._v(" "),t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(h.a,{staticClass:"py-0",attrs:{label:"Receipt Date ",outlined:"",required:"",type:"date",rules:e.fieldRequiredRule},model:{value:e.asset.receipt_date,callback:function(t){e.$set(e.asset,"receipt_date",t)},expression:"asset.receipt_date"}})],1),e._v(" "),t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(h.a,{staticClass:"py-0",attrs:{label:"Depreciation Date",outlined:"",required:"",type:"date",rules:e.fieldRequiredRule},model:{value:e.asset.depreciation_date,callback:function(t){e.$set(e.asset,"depreciation_date",t)},expression:"asset.depreciation_date"}})],1),e._v(" "),t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(h.a,{staticClass:"py-0",attrs:{label:"Department/Project PO number ",outlined:"",required:"",rules:e.fieldRequiredRule},model:{value:e.asset.po_no,callback:function(t){e.$set(e.asset,"po_no",t)},expression:"asset.po_no"}})],1),e._v(" "),t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(h.a,{staticClass:"py-0",attrs:{label:"Cost Center ",outlined:"",required:"",rules:e.fieldRequiredRule},model:{value:e.asset.cost_center,callback:function(t){e.$set(e.asset,"cost_center",t)},expression:"asset.cost_center"}})],1),e._v(" "),t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(h.a,{staticClass:"py-0",attrs:{label:"Document No",outlined:"",required:"",rules:e.fieldRequiredRule},model:{value:e.asset.document_no,callback:function(t){e.$set(e.asset,"document_no",t)},expression:"asset.document_no"}})],1),e._v(" "),t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(r.a,{attrs:{items:e.donors,"item-value":"id","item-text":"name",label:"Select Donor *",outlined:"",required:"",rules:e.fieldRequiredRule},model:{value:e.asset.donor_id,callback:function(t){e.$set(e.asset,"donor_id",e._n(t))},expression:"asset.donor_id"}})],1),e._v(" "),t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(r.a,{attrs:{items:e.programAreas,"item-value":"id","item-text":"name",label:"Select Program Area *",outlined:"",required:"",rules:e.fieldRequiredRule},model:{value:e.asset.program_area_id,callback:function(t){e.$set(e.asset,"program_area_id",e._n(t))},expression:"asset.program_area_id"}})],1),e._v(" "),t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(r.a,{attrs:{items:e.acquisitionTypes,"item-value":"id","item-text":"name",label:"Select Acquisition Type *",outlined:"",required:"",rules:e.fieldRequiredRule},model:{value:e.asset.acquisition_type_id,callback:function(t){e.$set(e.asset,"acquisition_type_id",e._n(t))},expression:"asset.acquisition_type_id"}})],1),e._v(" "),t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(r.a,{attrs:{items:e.currencies,"item-value":"id","item-text":"name",label:"Select Currency *",outlined:"",required:"",rules:e.fieldRequiredRule},model:{value:e.asset.currency_id,callback:function(t){e.$set(e.asset,"currency_id",e._n(t))},expression:"asset.currency_id"}})],1),e._v(" "),t(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"12"}},[t(y.a,{staticClass:"py-0",attrs:{label:"Enter a short asset description",rows:"3",outlined:"",required:""},model:{value:e.asset.description,callback:function(t){e.$set(e.asset,"description",t)},expression:"asset.description"}})],1)],1),e._v(" "),t(d.a,{staticClass:"my-2"}),e._v(" "),t(l.a,{staticClass:"py-3 row"},[t("nuxt-link",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button",to:"/order/pending"}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Cancel ")])]),e._v(" "),t(f.a),e._v(" "),e.editMode?t(o.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:e.submitting,disabled:!e.valid||e.submitting}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Update ")])]):t(o.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:e.submitting,disabled:!e.valid||e.submitting}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Add ")])])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);