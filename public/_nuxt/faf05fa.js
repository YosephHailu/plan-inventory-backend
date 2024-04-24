(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{648:function(t,e,n){"use strict";n.d(e,"b",(function(){return y})),n.d(e,"a",(function(){return x})),n.d(e,"c",(function(){return C})),n.d(e,"e",(function(){return D})),n.d(e,"d",(function(){return O})),n.d(e,"g",(function(){return k})),n.d(e,"f",(function(){return j}));var o,r,c,l,d,_,m,v,h=n(93),f=n(61),y=Object(f.a)(o||(o=Object(h.a)(["\n  query($page: Int!, $per_page: Int!, $search: String, $donor_id: ID, $acquisition_type_id: ID, $program_area_id: ID, \n    $staff_id: ID, $condition_id: ID, $available: Boolean, $disposed: Boolean, $project_id: ID) {\n    assets(first: $per_page, page: $page, search: $search, donor_id: $donor_id, staff: $staff_id, available: $available, disposed: $disposed,\n      acquisition_type_id: $acquisition_type_id, program_area_id: $program_area_id, condition: $condition_id, project_id: $project_id) {\n      data {\n        id\n        tag_number\n        asset_type\n        item_name\n        acquisition_date\n        serial_no\n        description\n        accessories\n        acquisition_cost\n        purchase_order_no\n        gsrn_no\n        receipt_date\n        depreciation_date\n        po_no\n        cost_center\n        document_no\n        disposed\n        assetCustodians {\n          id\n          returned\n          staff {\n            id\n            name\n          }\n        }\n        currency {\n          id\n          code\n          name\n        }\n        assetDisposal {\n          id\n          date\n          transfer_to\n          accumulated_depreciation\n          replacement_cost\n          remark\n          currency {\n            id\n            code\n          }\n          disposalType {\n            id\n            name\n          }\n          disposalReason {\n            id\n            name\n          }\n        }\n        acquisitionType {\n          id\n          name\n        }\n        programArea {\n          id\n          name\n        }\n        project {\n          id\n          name\n        } \n        donor {\n          id\n          name\n        } \n        currency {\n          id\n          code\n        }\n        costCenter {\n          id\n          name\n        }\n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }   \n  }\n"]))),x=Object(f.a)(r||(r=Object(h.a)(["\n  query All_ASSET_LOOKUP_QUERY {\n    currencies {\n      id\n      name\n    }    \n    projects {\n      id\n      name\n    }  \n    donors {\n      id\n      name\n    }  \n    acquisitionTypes {\n      id\n      name\n    }   \n    programAreas {\n      id\n      name\n      four_digit_code\n    }\n    costCenters {\n      id\n      name\n    }  \n  }\n"]))),C=Object(f.a)(c||(c=Object(h.a)(["\n  query All_ASSET_LOOKUP_QUERY {\n    staffs {\n      id\n      name\n    }   \n    donors {\n      id\n      name\n    }  \n    acquisitionTypes {\n      id\n      name\n    }   \n    conditions {\n      id\n      name\n    }   \n    programAreas {\n      id\n      name\n      four_digit_code\n    }\n  }\n"]))),D=Object(f.a)(l||(l=Object(h.a)(["\n  query FIND_ASSET_QUERY($id: ID!) {\n    asset(id: $id) {\n      id\n      tag_number\n      asset_type\n      item_name\n      acquisition_date\n      serial_no\n      description\n      accessories\n      acquisition_cost\n      purchase_order_no\n      gsrn_no\n      receipt_date\n      depreciation_date\n      po_no\n      cost_center\n      document_no\n      disposed\n      available\n      assetPhysicalCheck {\n        id\n        created_at\n        checked_at\n        remark\n        condition {\n          id\n          name\n        }\n        checkedBy {\n          id\n          name\n        }\n      }\n      assetPhysicalChecks {\n        id\n        created_at\n        checked_at\n        remark\n        condition {\n          id\n          name\n        }\n        checkedBy {\n          id\n          name\n        }\n      }\n      assetCustodians {\n        id\n        remark\n        assigned_at\n        returned\n        approved\n        assignedBy {\n          id\n          name\n        }\n        staff {\n          id\n          name\n        }\n      }\n      assetCustodian {\n        id\n        staff {\n          id\n          name\n        }\n      }\n      currency {\n        id\n        name\n        code\n      }\n      acquisitionType {\n        id\n        name\n      }\n      programArea {\n        id\n        name\n      }\n      donor {\n        id\n        name\n      }\n      costCenter {\n        id\n        name\n      }\n    }   \n  }\n"]))),O=Object(f.a)(d||(d=Object(h.a)(["\n  mutation ($input: AssetCreateInput!) {\n    createAsset(input: $input) {\n      id\n    }\n  }\n"]))),k=Object(f.a)(_||(_=Object(h.a)(["\n  mutation ($input: AssetUpdateInput!) {\n    updateAsset(input: $input) {\n      id\n    }\n  }\n"]))),j=(Object(f.a)(m||(m=Object(h.a)(["\n  mutation($id: ID!) {\n    deleteAsset(id: $id) {\n      id\n    }\n  }\n"]))),Object(f.a)(v||(v=Object(h.a)(["\n  mutation IMPORT_ASSET_MUTATION($file: Upload!) {\n    importAsset(file: $file) {\n      id\n    }\n  }\n"]))))},653:function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return v})),n.d(e,"d",(function(){return h})),n.d(e,"c",(function(){return f}));var o,r,c,l,d=n(93),_=n(61),m=Object(_.a)(o||(o=Object(d.a)(["\n  query {\n    staffs {\n      id\n      name\n      role\n    }   \n  }\n"]))),v=Object(_.a)(r||(r=Object(d.a)(["\n  mutation ($input: StaffCreateInput!) {\n    createStaff(input: $input) {\n      id\n    }\n  }\n"]))),h=Object(_.a)(c||(c=Object(d.a)(["\n  mutation ($input: StaffUpdateInput!) {\n    updateStaff(input: $input) {\n      id\n    }\n  }\n"]))),f=Object(_.a)(l||(l=Object(d.a)(["\n  mutation($id: ID!) {\n    deleteStaff(id: $id) {\n      id\n    }\n  }\n"])))},655:function(t,e,n){"use strict";n.d(e,"b",(function(){return h})),n.d(e,"d",(function(){return f})),n.d(e,"c",(function(){return y})),n.d(e,"a",(function(){return x}));var o,r,c,l,d,_,m=n(93),v=n(61),h=(Object(v.a)(o||(o=Object(m.a)(["\n  query {\n    assetCustodians {\n      id\n    }   \n  }\n"]))),Object(v.a)(r||(r=Object(m.a)(["\n  mutation ($input: AssetCustodianCreateInput!) {\n    createAssetCustodian(input: $input) {\n      id\n    }\n  }\n"])))),f=Object(v.a)(c||(c=Object(m.a)(["\n  mutation ($input: AssetCustodianUpdateInput!) {\n    updateAssetCustodian(input: $input) {\n      id\n    }\n  }\n"]))),y=(Object(v.a)(l||(l=Object(m.a)(["\n  mutation($id: ID!) {\n    deleteAssetCustodian(id: $id) {\n      id\n    }\n  }\n"]))),Object(v.a)(d||(d=Object(m.a)(["\n  mutation($id: ID!) {\n    returnAsset(id: $id) {\n      id\n    }\n  }\n"])))),x=Object(v.a)(_||(_=Object(m.a)(["\n  mutation($id: ID!) {\n    approveAssetCustodian(id: $id) {\n      id\n    }\n  }\n"])))},663:function(t,e,n){"use strict";n.r(e);var o,r,c,l,d,_=n(654),m=n(277),v=n(232),h=n(697),f=n(274),y=n(698),x=n(195),C=n(800),D=n(609),O=n(125),k=n(624),j=(n(13),n(14),n(11),n(6),n(16),n(10),n(17),n(1)),w=(n(71),n(108)),A=n(289),S=n(15),$=n(21),I=n(93),P=n(61),R=(Object(P.a)(o||(o=Object(I.a)(["\n  query {\n    assetDisposals {\n      id\n      name\n      description\n    }   \n  }\n"]))),Object(P.a)(r||(r=Object(I.a)(["\n  query All_DISPOSAL_LOOKUP_QUERY {\n    disposalReasons {\n      id\n      name\n    }   \n    disposalTypes {\n      id\n      name\n    }\n    currencies {\n      id\n      name\n    }\n  }\n"])))),T=Object(P.a)(c||(c=Object(I.a)(["\n  mutation ($input: AssetDisposalCreateInput!) {\n    createAssetDisposal(input: $input) {\n      id\n    }\n  }\n"]))),F=Object(P.a)(l||(l=Object(I.a)(["\n  mutation ($input: AssetDisposalUpdateInput!) {\n    updateAssetDisposal(input: $input) {\n      id\n    }\n  }\n"])));Object(P.a)(d||(d=Object(I.a)(["\n  mutation($id: ID!) {\n    deleteAssetDisposal(id: $id) {\n      id\n    }\n  }\n"])));function N(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function E(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?N(Object(source),!0).forEach((function(e){Object(j.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):N(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var V={props:["_AssetDisposal","asset"],middleware:["authenticated"],data:function(){return{valid:!1,editMode:!1,assetDisposal:{},fieldRequiredRule:[function(t){return!!t||"This field is required"}],element_permissions:{edit_btn:[{resource:S.a.ASSET_DISPOSAL,action:$.a.UPDATE}]},disposalTypes:[],disposalReasons:[],currencies:[]}},apollo:{lookup:{query:R,fetchPolicy:"cache-and-network",update:function(data){return data}}},computed:{disableForm:function(){var t;return!this.editMode&&null!=(null===(t=this._AssetDisposal)||void 0===t?void 0:t.id)}},methods:E(E({},Object(w.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{can:function(t){return Object(A.a)(this.$auth.user,t)},onFormSubmitted:function(t){this.$refs.form.validate()&&(this.editMode?this.updateAssetDisposal(t):this.registerAssetDisposal(t))},registerAssetDisposal:function(t){var e=this;this.assetDisposal.asset_id=this.asset.id,this.$apollo.mutate({mutation:T,variables:{input:this.assetDisposal}}).then((function(n){n.data;e.successNotification("Disposal type registered successfully!"),t.target.reset(),e.$emit("on-close-asset-disposal-form")})).catch((function(t){console.log(t)}))},updateAssetDisposal:function(t){var e=this;this.assetDisposal.id=parseInt(this.assetDisposal.id),this.$apollo.mutate({mutation:F,variables:{input:this.assetDisposal}}).then((function(n){n.data;e.successNotification("Disposal type updated successfully!"),t.target.reset(),e.$emit("on-close-asset-disposal-form")})).catch((function(t){console.log(t)}))}}),watch:{$props:{handler:function(){var t;null!==(t=this._AssetDisposal)&&void 0!==t&&t.id?(this.editMode=!1,this.assetDisposal=E({},this._AssetDisposal)):(this.editMode=!1,this.assetDisposal={})},deep:!0,immediate:!0},lookup:{handler:function(){var t,e,n;this.lookup&&(console.log(this.lookup),this.disposalReasons=null===(t=this.lookup)||void 0===t||null===(t=t.disposalReasons)||void 0===t?void 0:t.map((function(t){return t.id=parseInt(t.id),t})),this.disposalTypes=null===(e=this.lookup)||void 0===e||null===(e=e.disposalTypes)||void 0===e?void 0:e.map((function(t){return t.id=parseInt(t.id),t})),this.currencies=null===(n=this.lookup)||void 0===n||null===(n=n.currencies)||void 0===n?void 0:n.map((function(t){return t.id=parseInt(t.id),t})))}}}},U=n(51),component=Object(U.a)(V,(function(){var t=this,e=t._self._c;return e(m.a,[e("div",{staticClass:"blue lighten-1 white--text pa-2 pb-6"},[e(C.a,{staticClass:"mx-0"},[e("div",[e(v.c,{staticClass:"text-h5 pb-0"},[t._v("\n          Asset Disposal Registration Form\n        ")]),t._v(" "),e("span",{staticClass:"ml-4"},[t._v("registration form")])],1),t._v(" "),e(D.a),t._v(" "),t.disableForm&&t.can(t.element_permissions.edit_btn)?e("button",{staticClass:"v-btn ma-5 mt-6 v-btn--is-elevated v-btn--has-bg theme--light pl-1 black v-size--default white--text",attrs:{icon:"mdi-pen"},on:{click:function(e){t.editMode=!0}}},[e(x.a,{attrs:{right:"",dark:"",medium:""}},[t._v(" mdi-pen ")]),t._v(" "),e("span",{staticClass:"v-btn__content text-white ml-1"},[t._v(" Edit ")])],1):t._e()],1)],1),t._v(" "),e(y.a,{ref:"form",staticClass:"mt-4 pa-4",attrs:{disabled:t.disableForm},on:{submit:function(e){return e.preventDefault(),t.onFormSubmitted.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("div",{staticClass:"mx-5"},[e(C.a,{staticClass:"px-3"},[e(h.a,{attrs:{cols:"12",md:"6"}},[e(O.a,{attrs:{label:"Date of Disposal",type:"date",outlined:"",required:"",rules:t.fieldRequiredRule},model:{value:t.assetDisposal.date,callback:function(e){t.$set(t.assetDisposal,"date",e)},expression:"assetDisposal.date"}})],1),t._v(" "),e(h.a,{attrs:{cols:"12",md:"6"}},[e(_.a,{attrs:{items:t.disposalReasons,"item-value":"id","item-text":"name",label:"Select Disposal Reason *",outlined:"",required:"",rules:t.fieldRequiredRule},model:{value:t.assetDisposal.disposal_reason_id,callback:function(e){t.$set(t.assetDisposal,"disposal_reason_id",t._n(e))},expression:"assetDisposal.disposal_reason_id"}})],1),t._v(" "),e(h.a,{attrs:{cols:"12",md:"8"}},[e(O.a,{attrs:{label:"Transfer To",outlined:"",required:"",rules:t.fieldRequiredRule},model:{value:t.assetDisposal.transfer_to,callback:function(e){t.$set(t.assetDisposal,"transfer_to",e)},expression:"assetDisposal.transfer_to"}})],1),t._v(" "),e(h.a,{attrs:{cols:"12",md:"4"}},[e(_.a,{attrs:{items:t.disposalTypes,"item-value":"id","item-text":"name",label:"Select Disposal Type *",outlined:"",required:"",rules:t.fieldRequiredRule},model:{value:t.assetDisposal.disposal_type_id,callback:function(e){t.$set(t.assetDisposal,"disposal_type_id",t._n(e))},expression:"assetDisposal.disposal_type_id"}})],1),t._v(" "),e(h.a,{attrs:{cols:"12",md:"4"}},[e(O.a,{attrs:{label:"Accumulated Depreciation (for Capital Assets ONLY)",outlined:"",required:"",rules:t.fieldRequiredRule},model:{value:t.assetDisposal.accumulated_depreciation,callback:function(e){t.$set(t.assetDisposal,"accumulated_depreciation",e)},expression:"assetDisposal.accumulated_depreciation"}})],1),t._v(" "),e(h.a,{attrs:{cols:"12",md:"4"}},[e(O.a,{attrs:{label:"Net book Value/ Replacement Cost",outlined:"",required:"",rules:t.fieldRequiredRule},model:{value:t.assetDisposal.replacement_cost,callback:function(e){t.$set(t.assetDisposal,"replacement_cost",e)},expression:"assetDisposal.replacement_cost"}})],1),t._v(" "),e(h.a,{attrs:{cols:"12",md:"4"}},[e(_.a,{attrs:{items:t.currencies,"item-value":"id","item-text":"name",label:"Select Currency *",outlined:"",required:"",rules:t.fieldRequiredRule},model:{value:t.assetDisposal.currency_id,callback:function(e){t.$set(t.assetDisposal,"currency_id",t._n(e))},expression:"assetDisposal.currency_id"}})],1),t._v(" "),e(h.a,{attrs:{cols:"12",md:"12"}},[e(k.a,{attrs:{label:"Description",outlined:"",required:""},model:{value:t.assetDisposal.remark,callback:function(e){t.$set(t.assetDisposal,"remark",e)},expression:"assetDisposal.remark"}})],1)],1)],1),t._v(" "),e(f.a,{staticClass:"my-2"}),t._v(" "),e(h.a,{staticClass:"d-flex"},[e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button"},on:{click:function(e){return t.$emit("on-close-asset-disposal-form")}}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Cancel ")])]),t._v(" "),e(D.a),t._v(" "),t.editMode||t.disableForm?t._e():e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Add Disposal Reason ")])]),t._v(" "),t.editMode&&!t.disableForm?e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[e("span",{staticClass:"v-btn__content text-white"},[t._v("\n          Update Disposal Reason\n        ")])]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},664:function(t,e,n){"use strict";n.r(e);var o=n(177),r=n(276),c=n(195),l=n(270),d=n(175),_=n(87),m=n(280),v=n(644),h=(n(14),n(88),n(6),n(98),n(39),n(15)),f=n(21),y=n(289),x={props:["assets","search","_pagination"],data:function(){return{pagination:{},element_permissions:{assign_btn:[{resource:h.a.ASSET,action:f.a.ASSIGN}],unassign_btn:[{resource:h.a.ASSET,action:f.a.UNASSIGN}],dispose_btn:[{resource:h.a.ASSET,action:f.a.DISPOSE}]}}},methods:{can:function(t){return Object(y.a)(this.$auth.user,t)},showDetail:function(t){this.$router.push({path:"/inventory/".concat(t.id,"/edit")})},binCard:function(t){this.$router.push({path:"/inventory/".concat(t.id,"/binCard")})}}},C=n(51),component=Object(C.a)(x,(function(){var t=this,e=t._self._c;return e(v.a,{staticClass:"blue-grey lighten-5",attrs:{responsive:""},scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",{staticClass:"blue lighten-1 white--text"},[e("th",{staticClass:"text-center"},[t._v("#")]),t._v(" "),e("th",{staticClass:"text-center white--text",staticStyle:{"min-width":"120px"}},[e("b",[t._v("Tag Number")])]),t._v(" "),e("th",{staticClass:"text-center white--text text-uppercase py-2",staticStyle:{"min-width":"150px"}},[e("b",[t._v("Acquisition Date")])]),t._v(" "),e("th",{staticClass:"text-center white--text text-uppercase py-2",staticStyle:{"min-width":"120px"}},[e("b",[t._v("Asset Type")])]),t._v(" "),e("th",{staticClass:"text-center white--text text-uppercase py-2",staticStyle:{"min-width":"120px"}},[e("b",[t._v("Item")])]),t._v(" "),e("th",{staticClass:"text-center white--text text-uppercase py-2",staticStyle:{"min-width":"120px"}},[e("b",[t._v("Description")])]),t._v(" "),e("th",{staticClass:"text-center white--text text-uppercase py-2",staticStyle:{"min-width":"120px"}},[e("b",[t._v("Assignee")])]),t._v(" "),e("th",{staticClass:"text-center white--text text-uppercase py-2",staticStyle:{"min-width":"120px"}},[e("b",[t._v("Serial/ Vin No")])]),t._v(" "),e("th",{staticClass:"text-center white--text text-uppercase py-2",staticStyle:{"min-width":"120px"}},[e("b",[t._v("Accessories")])]),t._v(" "),e("th",{staticClass:"text-center white--text text-uppercase py-2",staticStyle:{"min-width":"150px"}},[e("b",[t._v("Acquisition Cost")])]),t._v(" "),e("th",{staticClass:"text-center white--text text-uppercase py-2",staticStyle:{"min-width":"120px"}},[e("b",[t._v("Currency")])]),t._v(" "),e("th",{staticClass:"text-center white--text text-uppercase py-2",staticStyle:{"min-width":"120px"}},[e("b",[t._v("Depreciation Date")])]),t._v(" "),e("th",{staticClass:"text-center white--text text-uppercase py-2",staticStyle:{"min-width":"120px"}},[e("b",[t._v("Acquisition Type")])]),t._v(" "),e("th",{staticClass:"text-center white--text text-uppercase py-2",staticStyle:{"min-width":"120px"}},[e("b",[t._v("Purchase Order No")])]),t._v(" "),e("th",{staticClass:"text-center white--text text-uppercase py-2",staticStyle:{"min-width":"120px"}},[e("b",[t._v(" Project ")])]),t._v(" "),e("th",{staticClass:"text-center white--text text-uppercase py-2",staticStyle:{"min-width":"120px"}},[e("b",[t._v("GSRN No")])]),t._v(" "),e("th",{staticClass:"text-center white--text text-uppercase py-2",staticStyle:{"min-width":"120px"}},[e("b",[t._v("Receipt Date")])]),t._v(" "),e("th",{staticClass:"text-center white--text text-uppercase py-2",staticStyle:{"min-width":"120px"}},[e("b",[t._v("Donor")])]),t._v(" "),e("th",{staticClass:"text-center white--text text-uppercase py-2",staticStyle:{"min-width":"120px"}},[e("b",[t._v("Project")])]),t._v(" "),e("th",{staticClass:"text-center white--text text-uppercase py-2",staticStyle:{"min-width":"120px"}},[e("b",[t._v("Physical Location")])]),t._v(" "),e("th",{staticClass:"text-center white--text text-uppercase py-2",staticStyle:{"min-width":"120px"}},[e("b",[t._v("Cost Center")])])])]),t._v(" "),e("tbody",t._l(t.assets,(function(n){var v,h,f,y,x,C,D,O;return e("tr",{key:n.ID,class:{"red lighten-5":n.disposed}},[e("td",[e(m.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[e(o.a,t._g(t._b({attrs:{icon:""}},"v-btn",l,!1),r),[e(c.a,[t._v("mdi-menu")])],1)]}}],null,!0)},[t._v(" "),e(l.a,{staticClass:"col-12 px-0"},[e(d.a,{on:{click:function(e){return t.$emit("on-asset-detail-clicked",n)}}},[e(c.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-eye")]),t._v(" "),e(_.d,{staticClass:"pr-5"},[t._v("detail")])],1),t._v(" "),!n.disposed&&t.can(t.element_permissions.dispose_btn)?e(d.a,{staticClass:"red lighten-3",on:{click:function(e){return t.$emit("on-dispose-asset-clicked",n)}}},[e(c.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-delete")]),t._v(" "),e(_.d,[t._v("Dispose")])],1):t._e()],1)],1)],1),t._v(" "),e("td",{staticClass:"text-center"},[e("a",{on:{click:function(e){return t.$emit("on-asset-detail-clicked",n)}}},[t._v(t._s(n.tag_number))])]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(n.acquisition_date))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(n.asset_type))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(n.item_name))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(n.description))]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[null!=n&&n.assetCustodians&&null!=n&&n.assetCustodians.some((function(t){return!t.returned}))?e("div",[e(r.a,[e(c.a,{staticClass:"mr-1",staticStyle:{"font-size":"1.5em"}},[t._v("mdi-account")]),t._v("\n              "+t._s(null==n||null===(v=n.assetCustodians)||void 0===v||null===(v=v.find((function(t){return!t.returned})))||void 0===v||null===(v=v.staff)||void 0===v?void 0:v.name)+"\n              "),t.can(t.element_permissions.unassign_btn)?e(o.a,{attrs:{icon:""},on:{click:function(e){return t.$emit("on-delete-asset-assignee-clicked",n)}}},[e(c.a,{attrs:{color:"red"}},[t._v("mdi-delete")])],1):t._e()],1)],1):t.can(t.element_permissions.assign_btn)?e("div",[n.assigned?e(o.a,{staticClass:"primary",attrs:{icon:""}},[e(c.a,{staticClass:"white--text"},[t._v("mdi-question")])],1):e(o.a,{staticClass:"primary",attrs:{icon:""},on:{click:function(e){return t.$emit("on-assign-asset-clicked",n)}}},[e(c.a,{staticClass:"white--text"},[t._v("mdi-plus")])],1)],1):e("div",[e(r.a,[e(c.a,{staticClass:"mr-1",staticStyle:{"font-size":"1.1em"}},[t._v("mdi-help")]),t._v("\n              Not Assigned\n            ")],1)],1)]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(n.serial_no))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(n.accessories))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(n.acquisition_cost))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(null==n||null===(h=n.currency)||void 0===h?void 0:h.code))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(n.depreciation_date))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(null==n||null===(f=n.acquisitionType)||void 0===f?void 0:f.name))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(n.purchase_order_no))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(null==n||null===(y=n.project)||void 0===y?void 0:y.name))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(n.gsrn_no))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(n.receipt_date))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(null==n||null===(x=n.donor)||void 0===x?void 0:x.name))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(null==n||null===(C=n.project)||void 0===C?void 0:C.name))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(null==n||null===(D=n.programArea)||void 0===D?void 0:D.name))]),t._v(" "),e("td",{staticClass:"text-center"},[t._v(t._s(null==n||null===(O=n.costCenter)||void 0===O?void 0:O.name))])])})),0)]},proxy:!0}])})}),[],!1,null,null,null);e.default=component.exports},665:function(t,e,n){"use strict";n.r(e);var o=n(654),r=n(277),c=n(232),l=n(697),d=n(274),_=n(698),m=n(195),v=n(800),h=n(609),f=n(624),y=(n(13),n(14),n(11),n(6),n(16),n(10),n(17),n(1)),x=(n(71),n(108)),C=n(289),D=n(15),O=n(21),k=n(655);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var A={props:["_assetCustodian","asset"],middleware:["authenticated"],data:function(){return{valid:!1,editMode:!1,assetCustodian:{},fieldRequiredRule:[function(t){return!!t||"This field is required"}],element_permissions:{edit_btn:[{resource:D.a.ASSET_CUSTODIAN,action:O.a.UPDATE}]},staffs:[]}},apollo:{staffs:{query:n(653).a,fetchPolicy:"cache-and-network",update:function(data){return data.staffs.map((function(t){return t.id=parseInt(t.id),t}))}}},computed:{disableForm:function(){var t;return!this.editMode&&null!=(null===(t=this._assetCustodian)||void 0===t?void 0:t.id)}},methods:w(w({},Object(x.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{can:function(t){return Object(C.a)(this.$auth.user,t)},onFormSubmitted:function(t){this.$refs.form.validate()&&(this.editMode?this.updateAssetCustodian(t):this.registerAssetCustodian(t))},registerAssetCustodian:function(t){var e=this;this.assetCustodian.asset_id=this.asset.id,this.$apollo.mutate({mutation:k.b,variables:{input:this.assetCustodian}}).then((function(n){n.data;e.successNotification("Asset custodian registered successfully!"),t.target.reset(),e.$emit("on-close-asset-custodian-form")})).catch((function(t){console.log(t)}))},updateAssetCustodian:function(t){var e=this;this.assetCustodian.id=parseInt(this.assetCustodian.id),this.$apollo.mutate({mutation:k.d,variables:{input:this.assetCustodian}}).then((function(n){n.data;e.successNotification("Asset custodian updated successfully!"),t.target.reset(),e.$emit("on-close-asset-custodian-form")})).catch((function(t){console.log(t)}))}}),watch:{$props:{handler:function(){var t;null!==(t=this._AssetCustodian)&&void 0!==t&&t.id?(this.editMode=!1,this.assetCustodian=w({},this._AssetCustodian)):(this.editMode=!1,this.assetCustodian={})},deep:!0,immediate:!0}}},S=n(51),component=Object(S.a)(A,(function(){var t=this,e=t._self._c;return e(r.a,[e("div",{staticClass:"blue lighten-1 white--text pa-2 pb-6"},[e(v.a,{staticClass:"mx-0"},[e("div",[e(c.c,{staticClass:"text-h5 pb-0"},[t._v("\n          Asset Custodian Registration Form\n        ")]),t._v(" "),e("span",{staticClass:"ml-4"},[t._v("registration form")])],1),t._v(" "),e(h.a),t._v(" "),t.disableForm&&t.can(t.element_permissions.edit_btn)?e("button",{staticClass:"v-btn ma-5 mt-6 v-btn--is-elevated v-btn--has-bg theme--light pl-1 black v-size--default white--text",attrs:{icon:"mdi-pen"},on:{click:function(e){t.editMode=!0}}},[e(m.a,{attrs:{right:"",dark:"",medium:""}},[t._v(" mdi-pen ")]),t._v(" "),e("span",{staticClass:"v-btn__content text-white ml-1"},[t._v(" Edit ")])],1):t._e()],1)],1),t._v(" "),e(_.a,{ref:"form",staticClass:"mt-4 pa-4",attrs:{disabled:t.disableForm},on:{submit:function(e){return e.preventDefault(),t.onFormSubmitted.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("div",{staticClass:"mx-5"},[e(v.a,{staticClass:"px-3"},[e(l.a,{staticClass:"py-0",attrs:{cols:"12",md:"9"}},[e(o.a,{attrs:{items:t.staffs,"item-value":"id","item-text":"name",label:"Select Staff *",outlined:"",required:"",rules:t.fieldRequiredRule},model:{value:t.assetCustodian.staff_id,callback:function(e){t.$set(t.assetCustodian,"staff_id",t._n(e))},expression:"assetCustodian.staff_id"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"12"}},[e(f.a,{attrs:{label:"Description",outlined:"",required:""},model:{value:t.assetCustodian.remark,callback:function(e){t.$set(t.assetCustodian,"remark",e)},expression:"assetCustodian.remark"}})],1)],1)],1),t._v(" "),e(d.a,{staticClass:"my-2"}),t._v(" "),e(l.a,{staticClass:"d-flex"},[e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button"},on:{click:function(e){return t.$emit("on-close-asset-custodian-form")}}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Cancel ")])]),t._v(" "),e(h.a),t._v(" "),t.editMode||t.disableForm?t._e():e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Add Custodian Reason ")])]),t._v(" "),t.editMode&&!t.disableForm?e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[e("span",{staticClass:"v-btn__content text-white"},[t._v("\n          Update Custodian Reason\n        ")])]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},812:function(t,e,n){"use strict";n.r(e);var o=n(654),r=n(626),c=n(177),l=n(277),d=n(697),_=n(612),m=n(195),v=n(652),h=n(609),f=n(125),y=(n(36),n(290),n(13),n(14),n(11),n(6),n(16),n(10),n(17),n(1)),x=(n(34),n(71),n(664)),C=n(648),D=n(21),O=n(289),k=n(15),j=n(663),w=n(665),A=n(296);function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function $(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var I={components:{AssetTable:x.default,AssetDisposalForm:j.default,AssetCustodianForm:w.default,QrCodeScanner:A.default},middleware:["authenticated"],data:function(){return{breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/dashboard"},{text:"All Assets",disabled:!0}],assets:{paginatorInfo:{}},asset:{},search:{customer_name:"",concrete_type_id:null},element_permissions:{create_btn:[{resource:k.a.ASSET,action:D.a.CREATE}]},loading:!0,pagination:{page:1,per_page:25},disposalFormDialogVisible:!1,custodianFormDialogVisible:!1,qrScanDialogVisible:!1,donors:[],staffs:[],programAreas:[],acquisitionTypes:[],conditions:[]}},apollo:{assets:{query:C.b,loadingKey:"loading",variables:function(){var t,e={};return this.search.program_area_id&&(e=$($({},e),{program_area_id:this.search.program_area_id})),this.search.acquisition_type_id&&(e=$($({},e),{acquisition_type_id:this.search.acquisition_type_id})),this.search.donor_id&&(e=$($({},e),{donor_id:this.search.donor_id})),this.search.staff_id&&(e=$($({},e),{staff_id:this.search.staff_id})),this.search.condition_id&&(e=$($({},e),{condition_id:this.search.condition_id})),this.search.search&&(e=$($({},e),{search:"".concat(this.search.search)})),$($({},e),{page:this.pagination.page,per_page:this.pagination.per_page,available:!0,project_id:null===(t=this.$auth)||void 0===t||null===(t=t.user)||void 0===t||null===(t=t.project)||void 0===t?void 0:t.id})},fetchPolicy:"cache-and-network"},lookup:{query:C.c,fetchPolicy:"cache-and-network",update:function(data){return data}}},methods:{can:function(t){return Object(O.a)(this.$auth.user,t)},onAssetDetailClicked:function(t){this.$router.push("/asset/"+t.id+"/detail")},onDisposeAssetClicked:function(t){this.asset=t,this.disposalFormDialogVisible=!0},closeDisposalForm:function(t){this.asset=null,this.disposalFormDialogVisible=!1,this.$apollo.queries.assets.refetch()},onAssignAssetClicked:function(t){console.log(t),this.asset=t,this.custodianFormDialogVisible=!0},closeAssetCustodianForm:function(t){this.asset=null,this.custodianFormDialogVisible=!1,this.$apollo.queries.assets.refetch()},closeQrCodeScannerDIalog:function(t){this.qrScanDialogVisible=!1,t&&(this.search=$($({},this.search),{},{search:t}))},exportReport:function(){var t,e,n,o,r,c,l,d=null;l=this.search.project_id?this.search.project_id:null===(t=this.$auth)||void 0===t||null===(t=t.user)||void 0===t||null===(t=t.project)||void 0===t?void 0:t.id,this.search.staff_id&&(d=this.search.staff_id),window.open("http://196.189.187.217/asset-report?available=true&search=\n        ".concat(null!==(e=this.search.search)&&void 0!==e?e:"","&staff_id=").concat(null!==(n=d)&&void 0!==n?n:"","&project_id=").concat(null!==(o=l)&&void 0!==o?o:"","&stock_type_id=").concat(null!==(r=this.search.stock_type_id)&&void 0!==r?r:"","&donor_id=").concat(null!==(c=this.search.donor_id)&&void 0!==c?c:""),"_blank")}},watch:{lookup:{handler:function(){this.lookup&&(this.donors=this.lookup.donors.map((function(t){return t.id=parseInt(t.id),t})),this.staffs=this.lookup.staffs.map((function(t){return t.id=parseInt(t.id),t})),this.acquisitionTypes=this.lookup.acquisitionTypes.map((function(t){return t.id=parseInt(t.id),t})),this.programAreas=this.lookup.programAreas.map((function(t){return t.id=parseInt(t.id),t})),this.conditions=this.lookup.conditions.map((function(t){return t.id=parseInt(t.id),t})))}}}},P=n(51),component=Object(P.a)(I,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-5 grey lighten-3"},[e(r.a,{attrs:{assets:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[e(m.a,[t._v("mdi-chevron-double-right")])]},proxy:!0}])}),t._v(" "),e("div",{staticClass:"px-4 row ma-1"},[t._m(0),t._v(" "),e(h.a),t._v(" "),e("div",{staticClass:"pr-2"},[e(c.a,{staticClass:"blue-grey darken-3 white--text mt-7 mr-4 py-3",on:{click:t.exportReport}},[e(m.a,{attrs:{left:""}},[t._v("mdi-printer")]),t._v("\n        Export\n      ")],1),t._v(" "),e(c.a,{staticClass:"blue-grey darken-3 white--text mt-7 mr-4 py-3",on:{click:function(e){t.qrScanDialogVisible=!0}}},[e(m.a,{attrs:{left:""}},[t._v("mdi-barcode")]),t._v("\n        SCAN")],1)],1)],1),t._v(" "),e("div",{staticClass:"px-5 py-3 mt-5"},[e("div",{staticClass:"row mb-4"},[e(d.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[e(f.a,{staticClass:"py-0",attrs:{dense:"",label:"Start Typing To Search",outlined:"",required:""},model:{value:t.search.search,callback:function(e){t.$set(t.search,"search",e)},expression:"search.search"}})],1),t._v(" "),e(d.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[e(o.a,{attrs:{dense:"",clearable:"",items:t.donors,"item-value":"id","item-text":"name",label:"Select Donor",outlined:"",required:""},model:{value:t.search.donor_id,callback:function(e){t.$set(t.search,"donor_id",t._n(e))},expression:"search.donor_id"}})],1),t._v(" "),e(d.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[e(o.a,{attrs:{dense:"",clearable:"",items:t.programAreas,"item-value":"id","item-text":"name",label:"Select Program Area",outlined:"",required:""},model:{value:t.search.program_area_id,callback:function(e){t.$set(t.search,"program_area_id",t._n(e))},expression:"search.program_area_id"}})],1),t._v(" "),e(d.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[e(o.a,{attrs:{dense:"",clearable:"",items:t.acquisitionTypes,"item-value":"id","item-text":"name",label:"Select Acquisition Type",outlined:""},model:{value:t.search.acquisition_type_id,callback:function(e){t.$set(t.search,"acquisition_type_id",t._n(e))},expression:"search.acquisition_type_id"}})],1),t._v(" "),e(d.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[e(o.a,{attrs:{dense:"",clearable:"",items:t.staffs,"item-value":"id","item-text":"name",label:"Select Staff",outlined:""},model:{value:t.search.staff_id,callback:function(e){t.$set(t.search,"staff_id",t._n(e))},expression:"search.staff_id"}})],1),t._v(" "),e(d.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[e(o.a,{attrs:{dense:"",clearable:"",items:t.conditions,"item-value":"id","item-text":"name",label:"Select Asset Condition",outlined:""},model:{value:t.search.condition_id,callback:function(e){t.$set(t.search,"condition_id",t._n(e))},expression:"search.condition_id"}})],1)],1),t._v(" "),e(l.a,{staticClass:"mt-0"},[e("asset-table",{attrs:{loading:t.loading,assets:t.assets.data,_pagination:t.assets.paginatorInfo},on:{"on-assign-asset-clicked":t.onAssignAssetClicked,"on-asset-detail-clicked":t.onAssetDetailClicked,"on-dispose-asset-clicked":t.onDisposeAssetClicked}})],1),t._v(" "),e(v.a,{staticClass:"my-4",attrs:{length:t.assets.paginatorInfo.lastPage},model:{value:t.pagination.page,callback:function(e){t.$set(t.pagination,"page",e)},expression:"pagination.page"}})],1),t._v(" "),e("div",[e(_.a,{attrs:{width:"80%"},on:{"click:outside":t.closeDisposalForm},model:{value:t.disposalFormDialogVisible,callback:function(e){t.disposalFormDialogVisible=e},expression:"disposalFormDialogVisible"}},[e("asset-disposal-form",{attrs:{asset:t.asset},on:{"on-close-asset-disposal-form":t.closeDisposalForm}})],1),t._v(" "),e(_.a,{attrs:{width:"80%"},on:{"click:outside":t.closeAssetCustodianForm},model:{value:t.custodianFormDialogVisible,callback:function(e){t.custodianFormDialogVisible=e},expression:"custodianFormDialogVisible"}},[e("asset-custodian-form",{attrs:{asset:t.asset},on:{"on-close-asset-custodian-form":t.closeAssetCustodianForm}})],1)],1),t._v(" "),e(_.a,{attrs:{width:"auto"},on:{"click:outside":t.closeQrCodeScannerDIalog},model:{value:t.qrScanDialogVisible,callback:function(e){t.qrScanDialogVisible=e},expression:"qrScanDialogVisible"}},[e("qr-code-scanner",{on:{"on-close-qr-code-scanner":t.closeQrCodeScannerDIalog}})],1)],1)}),[function(){var t=this,e=t._self._c;return e("div",[e("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[t._v("All Available Assets")]),t._v(" "),e("span",{staticClass:"grey--text text--darken-1"},[t._v("All available Assets Are Shown Here.")])])}],!1,null,null,null);e.default=component.exports}}]);