(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{625:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var c={USER:"User",ROLE:"Role",PERMISSION:"Permission",PERMISSION_TYPE:"PermissionType",MEASUREMENT_UNIT:"MeasurementUnit",REPORT:"Report",CONFIGURATION:"Configuration",ITEM_CATEGORY:"ItemCategory",ITEM:"Item",ASSET:"Asset",STOCK_REQUEST:"StockRequest",STOCK_REQUEST_ITEM:"StockRequestItem",CONDITION:"Condition",WHERE_HOUSE:"WhereHouse",OFFICE_LOCATION:"OfficeLocation",PROGRAM_AREA:"ProgramArea",ACQUISITION_TYPE:"AcquisitionType"}},647:function(t,e,n){"use strict";n.d(e,"b",(function(){return C})),n.d(e,"a",(function(){return y})),n.d(e,"c",(function(){return f})),n.d(e,"e",(function(){return k})),n.d(e,"d",(function(){return x})),n.d(e,"f",(function(){return O}));var c,o,l,r,d,_,v,m=n(92),h=n(61),C=Object(h.a)(c||(c=Object(m.a)(["\n  query($page: Int!, $per_page: Int!, $search: String, $donor_id: ID, $acquisition_type_id: ID, $program_area_id: ID, \n    $staff_id: ID, $condition_id: ID, $available: Boolean, $disposed: Boolean) {\n    assets(first: $per_page, page: $page, search: $search, donor_id: $donor_id, staff: $staff_id, available: $available, disposed: $disposed,\n      acquisition_type_id: $acquisition_type_id, program_area_id: $program_area_id, condition: $condition_id) {\n      data {\n        id\n        tag_number\n        asset_type\n        item_name\n        acquisition_date\n        serial_no\n        description\n        accessories\n        acquisition_cost\n        purchase_order_no\n        gsrn_no\n        receipt_date\n        depreciation_date\n        po_no\n        cost_center\n        document_no\n        disposed\n        assetCustodian {\n          id\n          staff {\n            id\n            name\n          }\n        }\n        currency {\n          id\n          name\n        }\n        acquisitionType {\n          id\n          name\n        }\n        programArea {\n          id\n          name\n        }\n        donor {\n          id\n          name\n        } \n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }   \n  }\n"]))),y=Object(h.a)(o||(o=Object(m.a)(["\n  query All_ASSET_LOOKUP_QUERY {\n    currencies {\n      id\n      name\n    }   \n    donors {\n      id\n      name\n    }  \n    acquisitionTypes {\n      id\n      name\n    }   \n    programAreas {\n      id\n      name\n      four_digit_code\n    }\n  }\n"]))),f=Object(h.a)(l||(l=Object(m.a)(["\n  query All_ASSET_LOOKUP_QUERY {\n    staffs {\n      id\n      name\n    }   \n    donors {\n      id\n      name\n    }  \n    acquisitionTypes {\n      id\n      name\n    }   \n    conditions {\n      id\n      name\n    }   \n    programAreas {\n      id\n      name\n      four_digit_code\n    }\n  }\n"]))),k=Object(h.a)(r||(r=Object(m.a)(["\n  query FIND_ASSET_QUERY($id: ID!) {\n    asset(id: $id) {\n      id\n      tag_number\n      asset_type\n      item_name\n      acquisition_date\n      serial_no\n      description\n      accessories\n      acquisition_cost\n      purchase_order_no\n      gsrn_no\n      receipt_date\n      depreciation_date\n      po_no\n      cost_center\n      document_no\n      disposed\n      assetPhysicalCheck {\n        id\n        created_at\n        checked_at\n        remark\n        condition {\n          id\n          name\n        }\n        checkedBy {\n          id\n          name\n        }\n      }\n      assetPhysicalChecks {\n        id\n        created_at\n        checked_at\n        remark\n        condition {\n          id\n          name\n        }\n        checkedBy {\n          id\n          name\n        }\n      }\n      assetCustodian {\n        id\n        staff {\n          id\n          name\n        }\n      }\n      currency {\n        id\n        name\n      }\n      acquisitionType {\n        id\n        name\n      }\n      programArea {\n        id\n        name\n      }\n      donor {\n        id\n        name\n      }\n    }   \n  }\n"]))),x=Object(h.a)(d||(d=Object(m.a)(["\n  mutation ($input: AssetCreateInput!) {\n    createAsset(input: $input) {\n      id\n    }\n  }\n"]))),O=Object(h.a)(_||(_=Object(m.a)(["\n  mutation ($input: AssetUpdateInput!) {\n    updateAsset(input: $input) {\n      id\n    }\n  }\n"])));Object(h.a)(v||(v=Object(m.a)(["\n  mutation($id: ID!) {\n    deleteAsset(id: $id) {\n      id\n    }\n  }\n"])))},649:function(t,e,n){"use strict";n.d(e,"a",(function(){return v})),n.d(e,"b",(function(){return m})),n.d(e,"d",(function(){return h})),n.d(e,"c",(function(){return C}));var c,o,l,r,d=n(92),_=n(61),v=Object(_.a)(c||(c=Object(d.a)(["\n  query {\n    conditions {\n      id\n      name\n      description\n    }   \n  }\n"]))),m=Object(_.a)(o||(o=Object(d.a)(["\n  mutation ($input: ConditionCreateInput!) {\n    createCondition(input: $input) {\n      id\n    }\n  }\n"]))),h=Object(_.a)(l||(l=Object(d.a)(["\n  mutation ($input: ConditionUpdateInput!) {\n    updateCondition(input: $input) {\n      id\n    }\n  }\n"]))),C=Object(_.a)(r||(r=Object(d.a)(["\n  mutation($id: ID!) {\n    deleteCondition(id: $id) {\n      id\n    }\n  }\n"])))},680:function(t,e,n){var content=n(741);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("61165283",content,!0,{sourceMap:!1})},686:function(t,e,n){"use strict";n.r(e);var c,o,l,r,d=n(655),_=n(275),v=n(231),m=n(678),h=n(273),C=n(679),y=n(214),f=n(750),k=n(606),x=n(124),O=n(623),P=(n(13),n(14),n(12),n(6),n(15),n(10),n(16),n(1)),S=(n(71),n(106)),A=n(288),$=n(18),j=n(26),I=n(92),E=n(61),T=(Object(E.a)(c||(c=Object(I.a)(["\n  query {\n    assetPhysicalChecks {\n      id\n    }   \n  }\n"]))),Object(E.a)(o||(o=Object(I.a)(["\n  mutation ($input: AssetPhysicalCheckCreateInput!) {\n    createAssetPhysicalCheck(input: $input) {\n      id\n    }\n  }\n"])))),D=Object(E.a)(l||(l=Object(I.a)(["\n  mutation ($input: AssetPhysicalCheckUpdateInput!) {\n    updateAssetPhysicalCheck(input: $input) {\n      id\n    }\n  }\n"])));Object(E.a)(r||(r=Object(I.a)(["\n  mutation($id: ID!) {\n    deleteAssetPhysicalCheck(id: $id) {\n      id\n    }\n  }\n"])));function R(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?R(Object(source),!0).forEach((function(e){Object(P.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):R(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var N={props:["_assetPhysicalCheck","asset"],middleware:["authenticated"],data:function(){return{valid:!1,editMode:!1,assetPhysicalCheck:{},fieldRequiredRule:[function(t){return!!t||"This field is required"}],element_permissions:{edit_btn:[{resource:$.a.ASSET_PHYSICAL_CHECK,action:j.a.UPDATE}]},conditions:[]}},apollo:{conditions:{query:n(649).a,fetchPolicy:"cache-and-network",update:function(data){var t;return null===(t=data.conditions)||void 0===t?void 0:t.map((function(t){return t.id=parseInt(t.id),t}))}}},computed:{disableForm:function(){var t;return!this.editMode&&null!=(null===(t=this._assetPhysicalCheck)||void 0===t?void 0:t.id)}},methods:w(w({},Object(S.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{can:function(t){return Object(A.a)(this.$auth.user,t)},onFormSubmitted:function(t){this.$refs.form.validate()&&(this.editMode?this.updateAssetPhysicalCheck(t):this.registerAssetPhysicalCheck(t))},registerAssetPhysicalCheck:function(t){var e=this;this.assetPhysicalCheck.asset_id=this.asset.id,this.$apollo.mutate({mutation:T,variables:{input:this.assetPhysicalCheck}}).then((function(n){n.data;e.successNotification("Physical check added!"),t.target.reset(),e.$emit("on-close-physical-check-form")})).catch((function(t){console.log(t)}))},updateAssetPhysicalCheck:function(t){var e=this;this.assetPhysicalCheck.id=parseInt(this.assetPhysicalCheck.id),this.$apollo.mutate({mutation:D,variables:{input:this.assetPhysicalCheck}}).then((function(n){n.data;e.successNotification("Disposal type updated successfully!"),t.target.reset(),e.$emit("on-close-physical-check-form")})).catch((function(t){console.log(t)}))}}),watch:{$props:{handler:function(){var t;null!==(t=this._assetPhysicalCheck)&&void 0!==t&&t.id?(this.editMode=!1,this.assetPhysicalCheck=w({},this._assetPhysicalCheck)):(this.editMode=!1,this.assetPhysicalCheck={})},deep:!0,immediate:!0}}},F=n(60),component=Object(F.a)(N,(function(){var t=this,e=t._self._c;return e(_.a,[e("div",{staticClass:"grey lighten-2 pa-2 pb-4"},[e(f.a,{staticClass:"mx-0"},[e("div",[e(v.c,{staticClass:"text-h5 pb-0"},[t._v("\n          Asset Disposal Registration Form\n        ")]),t._v(" "),e("span",{staticClass:"ml-4"},[t._v("registration form")])],1),t._v(" "),e(k.a),t._v(" "),t.disableForm&&t.can(t.element_permissions.edit_btn)?e("button",{staticClass:"v-btn ma-5 mt-6 v-btn--is-elevated v-btn--has-bg theme--light pl-1 black v-size--default white--text",attrs:{icon:"mdi-pen"},on:{click:function(e){t.editMode=!0}}},[e(y.a,{attrs:{right:"",dark:"",medium:""}},[t._v(" mdi-pen ")]),t._v(" "),e("span",{staticClass:"v-btn__content text-white ml-1"},[t._v(" Edit ")])],1):t._e()],1)],1),t._v(" "),e(C.a,{ref:"form",staticClass:"mt-4 pa-4",attrs:{disabled:t.disableForm},on:{submit:function(e){return e.preventDefault(),t.onFormSubmitted.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("div",{staticClass:"mx-5"},[e(f.a,{staticClass:"px-3"},[e(m.a,{attrs:{cols:"12",md:"8"}},[e(x.a,{attrs:{value:t.asset.item_name,disabled:"",label:"Asset",outlined:""}})],1),t._v(" "),e(m.a,{attrs:{cols:"12",md:"6"}},[e(x.a,{attrs:{label:"Date of Disposal",type:"date",outlined:"",required:"",rules:t.fieldRequiredRule},model:{value:t.assetPhysicalCheck.checked_at,callback:function(e){t.$set(t.assetPhysicalCheck,"checked_at",e)},expression:"assetPhysicalCheck.checked_at"}})],1),t._v(" "),e(m.a,{attrs:{cols:"12",md:"6"}},[e(d.a,{attrs:{items:t.conditions,"item-value":"id","item-text":"name",label:"Select Asset Condition *",outlined:"",required:"",rules:t.fieldRequiredRule},model:{value:t.assetPhysicalCheck.condition_id,callback:function(e){t.$set(t.assetPhysicalCheck,"condition_id",t._n(e))},expression:"assetPhysicalCheck.condition_id"}})],1),t._v(" "),e(m.a,{attrs:{cols:"12",md:"12"}},[e(O.a,{attrs:{label:"Description",outlined:"",required:""},model:{value:t.assetPhysicalCheck.remark,callback:function(e){t.$set(t.assetPhysicalCheck,"remark",e)},expression:"assetPhysicalCheck.remark"}})],1)],1)],1),t._v(" "),e(h.a,{staticClass:"my-2"}),t._v(" "),e(m.a,{staticClass:"d-flex"},[e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button"},on:{click:function(e){return t.$emit("on-close-physical-check-form")}}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Cancel ")])]),t._v(" "),e(k.a),t._v(" "),t.editMode||t.disableForm?t._e():e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Add Disposal Reason ")])]),t._v(" "),t.editMode&&!t.disableForm?e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[e("span",{staticClass:"v-btn__content text-white"},[t._v("\n          Update Disposal Reason\n        ")])]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},740:function(t,e,n){"use strict";n(680)},741:function(t,e,n){var c=n(21)((function(i){return i[1]}));c.push([t.i,".qr-display img{margin:auto!important}",""]),c.locals={},t.exports=c},790:function(t,e,n){"use strict";n.r(e);var c=n(622),o=n(177),l=n(275),r=n(274),d=n(678),_=n(642),v=n(609),m=n(273),h=n(214),C=n(269),y=n(175),f=n(270),k=n(86),x=n(272),O=n(750),P=n(606),S=n(79),A=n(291),$=(n(6),n(46),n(38),n(14),n(87),n(625)),j=n(26),I=n(647),E=n(686),T={middleware:["has_role","authenticated"],meta:{permissions:[{permission:$.a.ITEM,permissionTypes:j.a.CREATE}]},components:{PhysicalCheckForm:E.default},data:function(){return{breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/dashboard"},{text:"Asset",disabled:!1,href:"/asset/assets"},{text:"Detail",disabled:!0}],asset:{},physicalCheckFormVisible:!1}},apollo:{asset:{query:I.e,variables:function(){return{id:this.$route.params.id}},fetchPolicy:"cache-and-network"}},methods:{onAddNewCHeck:function(){this.physicalCheckFormVisible=!0},closePhysicalCheckForm:function(){this.physicalCheckFormVisible=!1,this.$apollo.queries.asset.refetch()}}},D=(n(740),n(60)),component=Object(D.a)(T,(function(){var t,e,n,$,j,I,E,T,D,R,w,N,F,M,U,L,Y,B,H,Q,V,z,K,G,J,W=this,X=W._self._c;return X("div",{staticClass:"pa-5 grey lighten-3"},[X(c.a,{attrs:{items:W.breadcrumbs},scopedSlots:W._u([{key:"divider",fn:function(){return[X(h.a,[W._v("mdi-chevron-double-right")])]},proxy:!0}])}),W._v(" "),X("div",{staticClass:"px-5 row"},[X("p",{staticClass:"mx-3 text-lg transition-swing text-h4"},[W._v("Asset Detail")]),W._v(" "),X(P.a)],1),W._v(" "),X("div",{staticClass:"pa-4 pl-3"},[X(O.a,[X(d.a,[X(_.a,{staticClass:"card",class:{"red lighten-5":null===(t=W.asset)||void 0===t?void 0:t.disposed}},[X(O.a,[X(d.a,{staticClass:"pb-0",attrs:{cols:"12",md:"8"}},[X("div",{staticClass:"pa-3",staticStyle:{"border-top":"solid 1px rgba(110, 110, 110, 0.3)"}},[X("b",{staticClass:"text-uppercase"},[W._v("Tag Number: ")]),W._v(" "),X("span",{staticClass:"ml-1"},[W._v(W._s(null===(e=W.asset)||void 0===e?void 0:e.tag_number))])]),W._v(" "),X("div",{staticClass:"pa-3",staticStyle:{"border-top":"solid 1px rgba(110, 110, 110, 0.3)"}},[X("b",{staticClass:"text-uppercase"},[W._v("Asset Name: ")]),W._v(" "),X("span",{staticClass:"ml-1"},[W._v(W._s(null===(n=W.asset)||void 0===n?void 0:n.item_name))])]),W._v(" "),X("div",{staticClass:"pa-3",staticStyle:{"border-top":"solid 1px rgba(110, 110, 110, 0.3)"}},[X("b",{staticClass:"text-uppercase"},[W._v("Asset Name: ")]),W._v(" "),X("span",{staticClass:"ml-1"},[W._v(W._s(null===($=W.asset)||void 0===$?void 0:$.item_name))])]),W._v(" "),X("div",{staticClass:"pa-3",staticStyle:{"border-top":"solid 1px rgba(110, 110, 110, 0.3)"}},[X("b",{staticClass:"text-uppercase"},[W._v("Serial Number: ")]),W._v(" "),X("span",{staticClass:"ml-1"},[W._v(W._s(null===(j=W.asset)||void 0===j?void 0:j.serial_no))])])]),W._v(" "),X(d.a,{staticClass:"pb-0 qr-display",attrs:{cols:"12",md:"4"}},[X("qr-code",{staticClass:"mx-auto",attrs:{size:180,text:"".concat(null===(I=W.asset)||void 0===I||null===(I=I.id)||void 0===I?void 0:I.toString())}})],1)],1),W._v(" "),X(O.a,{staticClass:"px-3"},[X(d.a,{staticClass:"py-3",staticStyle:{"border-top":"solid 1px rgba(110, 110, 110, 0.3)"},attrs:{cols:"12",md:"6"}},[X("b",{staticClass:"text-uppercase"},[W._v("Asset Type: ")]),W._v(" "),X(r.a,{staticClass:"ml-1"},[W._v(W._s(null===(E=W.asset)||void 0===E?void 0:E.asset_type))])],1),W._v(" "),X(d.a,{staticClass:"py-3",staticStyle:{"border-top":"solid 1px rgba(110, 110, 110, 0.3)"},attrs:{cols:"12",md:"6"}},[X("b",{staticClass:"text-uppercase"},[W._v("Acquisition Date: ")]),W._v(" "),X("span",{staticClass:"ml-1"},[W._v(W._s(null===(T=W.asset)||void 0===T?void 0:T.acquisition_date))])]),W._v(" "),X(d.a,{staticClass:"py-3",staticStyle:{"border-top":"solid 1px rgba(110, 110, 110, 0.3)"},attrs:{cols:"12",md:"6"}},[X("b",{staticClass:"text-uppercase"},[W._v("Accessories: ")]),W._v(" "),X("span",{staticClass:"ml-1"},[W._v(W._s(null===(D=W.asset)||void 0===D?void 0:D.accessories))])]),W._v(" "),X(d.a,{staticClass:"py-3",staticStyle:{"border-top":"solid 1px rgba(110, 110, 110, 0.3)"},attrs:{cols:"12",md:"6"}},[X("b",{staticClass:"text-uppercase"},[W._v("Acquisition Cost: ")]),W._v(" "),X("span",{staticClass:"ml-1"},[W._v(W._s(null===(R=W.asset)||void 0===R?void 0:R.acquisition_cost))])]),W._v(" "),X(d.a,{staticClass:"py-3",staticStyle:{"border-top":"solid 1px rgba(110, 110, 110, 0.3)"},attrs:{cols:"12",md:"6"}},[X("b",{staticClass:"text-uppercase"},[W._v("Purchase Order No: ")]),W._v(" "),X("span",{staticClass:"ml-1"},[W._v(W._s(null===(w=W.asset)||void 0===w?void 0:w.purchase_order_no))])]),W._v(" "),X(d.a,{staticClass:"py-3",staticStyle:{"border-top":"solid 1px rgba(110, 110, 110, 0.3)"},attrs:{cols:"12",md:"6"}},[X("b",{staticClass:"text-uppercase"},[W._v("GSRN Number: ")]),W._v(" "),X("span",{staticClass:"ml-1"},[W._v(W._s(null===(N=W.asset)||void 0===N?void 0:N.gsrn_no))])]),W._v(" "),X(d.a,{staticClass:"py-3",staticStyle:{"border-top":"solid 1px rgba(110, 110, 110, 0.3)"},attrs:{cols:"12",md:"6"}},[X("b",{staticClass:"text-uppercase"},[W._v("Receipt Date: ")]),W._v(" "),X("span",{staticClass:"ml-1"},[W._v(W._s(null===(F=W.asset)||void 0===F?void 0:F.receipt_date))])]),W._v(" "),X(d.a,{staticClass:"py-3",staticStyle:{"border-top":"solid 1px rgba(110, 110, 110, 0.3)"},attrs:{cols:"12",md:"6"}},[X("b",{staticClass:"text-uppercase"},[W._v("Depreciation Date: ")]),W._v(" "),X("span",{staticClass:"ml-1"},[W._v(W._s(null===(M=W.asset)||void 0===M?void 0:M.depreciation_date))])]),W._v(" "),X(d.a,{staticClass:"py-3",staticStyle:{"border-top":"solid 1px rgba(110, 110, 110, 0.3)"},attrs:{cols:"12",md:"6"}},[X("b",{staticClass:"text-uppercase"},[W._v("Project Number: ")]),W._v(" "),X("span",{staticClass:"ml-1"},[W._v(W._s(null===(U=W.asset)||void 0===U?void 0:U.po_no))])]),W._v(" "),X(d.a,{staticClass:"py-3",staticStyle:{"border-top":"solid 1px rgba(110, 110, 110, 0.3)"},attrs:{cols:"12",md:"6"}},[X("b",{staticClass:"text-uppercase"},[W._v("Cost Center: ")]),W._v(" "),X("span",{staticClass:"ml-1"},[W._v(W._s(null===(L=W.asset)||void 0===L?void 0:L.cost_center))])]),W._v(" "),X(d.a,{staticClass:"py-3",staticStyle:{"border-top":"solid 1px rgba(110, 110, 110, 0.3)"},attrs:{cols:"12",md:"6"}},[X("b",{staticClass:"text-uppercase"},[W._v("Document Number: ")]),W._v(" "),X("span",{staticClass:"ml-1"},[W._v(W._s(null===(Y=W.asset)||void 0===Y?void 0:Y.document_no))])]),W._v(" "),X(d.a,{staticClass:"py-3",staticStyle:{"border-top":"solid 1px rgba(110, 110, 110, 0.3)"},attrs:{cols:"12",md:"6"}},[X("b",{staticClass:"text-uppercase"},[W._v("Latest Status: ")]),W._v(" "),X("span",{staticClass:"ml-1"},[W._v(W._s(null===(B=W.asset)||void 0===B||null===(B=B.assetPhysicalCheck)||void 0===B||null===(B=B.condition)||void 0===B?void 0:B.name))])]),W._v(" "),X(d.a,{staticClass:"py-3",staticStyle:{"border-top":"solid 1px rgba(110, 110, 110, 0.3)"},attrs:{cols:"12",md:"6"}},[X("b",{staticClass:"text-uppercase"},[W._v("Last Checked At: ")]),W._v(" "),X("span",{staticClass:"ml-1"},[W._v(W._s(null===(H=W.asset)||void 0===H||null===(H=H.assetPhysicalCheck)||void 0===H?void 0:H.checked_at))])]),W._v(" "),X(d.a,{staticClass:"py-3",staticStyle:{"border-top":"solid 1px rgba(110, 110, 110, 0.3)"},attrs:{cols:"12",md:"6"}},[X("b",{staticClass:"text-uppercase"},[W._v("Last Checked By: ")]),W._v(" "),X("span",{staticClass:"ml-1"},[W._v(W._s(null===(Q=W.asset)||void 0===Q||null===(Q=Q.assetPhysicalCheck)||void 0===Q||null===(Q=Q.checkedBy)||void 0===Q?void 0:Q.name))])]),W._v(" "),null!==(V=W.asset)&&void 0!==V&&null!==(V=V.assetCustodian)&&void 0!==V&&V.staff?X(d.a,{staticClass:"py-3",staticStyle:{"border-top":"solid 1px rgba(110, 110, 110, 0.3)"},attrs:{cols:"12",md:"6"}},[X("b",{staticClass:"text-uppercase"},[W._v("Assigned To: ")]),W._v(" "),X(r.a,{staticClass:"ml-1"},[W._v(W._s(null===(z=W.asset)||void 0===z||null===(z=z.assetCustodian)||void 0===z||null===(z=z.staff)||void 0===z?void 0:z.name))])],1):W._e(),W._v(" "),X(d.a,{staticClass:"py-3",staticStyle:{"border-top":"solid 1px rgba(110, 110, 110, 0.3)"},attrs:{cols:"12",md:"6"}},[X("b",{staticClass:"text-uppercase"},[W._v("Disposed: ")]),W._v(" "),null!==(K=W.asset)&&void 0!==K&&K.disposed?X(r.a,{staticClass:"ml-1"},[W._v("Yes")]):X(r.a,{staticClass:"ml-1"},[W._v("No")])],1),W._v(" "),X(d.a,{staticClass:"py-1",staticStyle:{"border-top":"solid 1px rgba(110, 110, 110, 0.3)"},attrs:{cols:"12"}},[X("b",{staticClass:"text-uppercase"},[W._v("Description: ")]),W._v(" "),X("span",{staticClass:"ml-1"},[W._v(W._s(null===(G=W.asset)||void 0===G?void 0:G.description))])])],1)],1)],1),W._v(" "),X(d.a,[X(l.a,{staticClass:"mx-auto",attrs:{"max-width":"450"}},[X(S.a,{attrs:{color:"blue-grey",dark:""}},[X(A.a,[W._v("Physical Checks")]),W._v(" "),X(P.a),W._v(" "),X(o.a,{on:{click:W.onAddNewCHeck}},[W._v("Add New")])],1),W._v(" "),X(C.a,{attrs:{"two-line":""}},[X(x.a,{attrs:{"active-class":"pink--text",multiple:""},model:{value:W.selected,callback:function(t){W.selected=t},expression:"selected"}},[W._l(null===(J=W.asset)||void 0===J?void 0:J.assetPhysicalChecks,(function(t,e){var n;return[X(y.a,{key:t.id,scopedSlots:W._u([{key:"default",fn:function(e){var n,c;e.active;return[X(k.b,[X(k.d,[X("b",[W._v("BY:")]),W._v(" "+W._s(null==t||null===(n=t.checkedBy)||void 0===n?void 0:n.name))]),W._v(" "),X(k.c,{staticClass:"text--grey"},[W._v(W._s(null==t||null===(c=t.condition)||void 0===c?void 0:c.name))]),W._v(" "),X(k.c,{staticClass:"text--grey"},[W._v(W._s(null==t?void 0:t.remark))])],1),W._v(" "),X(f.a,[X(k.a,[W._v(W._s(null==t?void 0:t.checked_at))]),W._v(" "),X(h.a,{attrs:{color:"grey lighten-1"}},[W._v("\n                        mdi-clock\n                      ")])],1)]}}],null,!0)}),W._v(" "),e<(null===(n=W.asset)||void 0===n?void 0:n.assetPhysicalChecks.length)-1?X(m.a,{key:e}):W._e()]}))],2)],1)],1)],1)],1)],1),W._v(" "),X("div",[X(v.a,{attrs:{width:"60%"},on:{"click:outside":W.closePhysicalCheckForm},model:{value:W.physicalCheckFormVisible,callback:function(t){W.physicalCheckFormVisible=t},expression:"physicalCheckFormVisible"}},[X("physical-check-form",{attrs:{asset:W.asset},on:{"on-close-physical-check-form":W.closePhysicalCheckForm}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);