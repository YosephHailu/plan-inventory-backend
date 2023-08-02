(window.webpackJsonp=window.webpackJsonp||[]).push([[59,43],{642:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return v})),r.d(t,"d",(function(){return f})),r.d(t,"c",(function(){return w}));var n,o,c,l,d=r(91),h=r(64),m=Object(h.a)(n||(n=Object(d.a)(["\n  query {\n    whereHouses {\n      id\n      name\n      address\n      capacity\n      description\n    }   \n  }\n"]))),v=Object(h.a)(o||(o=Object(d.a)(["\n  mutation ($input: WhereHouseCreateInput!) {\n    createWhereHouse(input: $input) {\n      id\n    }\n  }\n"]))),f=Object(h.a)(c||(c=Object(d.a)(["\n  mutation ($input: WhereHouseUpdateInput!) {\n    updateWhereHouse(input: $input) {\n      id\n    }\n  }\n"]))),w=Object(h.a)(l||(l=Object(d.a)(["\n  mutation($id: ID!) {\n    deleteWhereHouse(id: $id) {\n      id\n    }\n  }\n"])))},688:function(e,t,r){"use strict";r.r(t);var n=r(174),o=r(711),c=r(189),l=r(259),d=r(172),h=r(83),m=r(267),v=(r(42),r(274),{props:["whereHouses","search"],data:function(){return{expanded:[],pagination:{},headers:[{text:"id",value:"id",class:"blue-grey lighten-3"},{text:"Name",align:"start",value:"name",class:"blue-grey lighten-3"},{text:"Address",align:"start",value:"address",class:"blue-grey lighten-3"},{text:"Capacity",align:"start",value:"capacity",class:"blue-grey lighten-3"},{text:"Description",value:"description",class:"blue-grey lighten-3"},{text:"Action",value:"menu",class:"blue-grey lighten-3"}]}}}),f=r(90),component=Object(f.a)(v,(function(){var e=this,t=e._self._c;return t(o.a,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.whereHouses,"items-per-page":25,search:e.search},scopedSlots:e._u([{key:"item.menu",fn:function(r){var o=r.item;return[t(m.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:e._u([{key:"activator",fn:function(r){var o=r.on,l=r.attrs;return[t(n.a,e._g(e._b({attrs:{icon:""}},"v-btn",l,!1),o),[t(c.a,[e._v("mdi-menu")])],1)]}}],null,!0)},[e._v(" "),t(l.a,{staticClass:"col-12 px-0"},[t(d.a,{on:{click:function(t){return e.$emit("on-where-house-detail-clicked",o)}}},[t(c.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-eye")]),e._v(" "),t(h.c,{staticClass:"pr-5"},[e._v("detail")])],1),e._v(" "),t(d.a,{staticClass:"red lighten-3",on:{click:function(t){return e.$emit("on-delete-where-house-clicked",o)}}},[t(c.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-delete")]),e._v(" "),t(h.c,[e._v("Delete")])],1)],1)],1)]}}])})}),[],!1,null,null,null);t.default=component.exports},689:function(e,t,r){"use strict";r.r(t);var n=r(264),o=r(273),c=r(655),l=r(262),d=r(657),h=r(189),m=r(709),v=r(590),f=r(120),w=r(614),_=(r(38),r(13),r(84),r(12),r(11),r(5),r(15),r(9),r(16),r(1)),H=r(106),y=r(275),O=r(22),x=r(34),C=r(642);function j(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function k(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(t){Object(_.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var D={props:["_whereHouse"],middleware:["authenticated"],data:function(){return{valid:!1,editMode:!1,whereHouse:{},nameRules:[function(e){return!!e||"Address field is required"}],element_permissions:{edit_btn:[{resource:O.a.WHERE_HOUSE,action:x.a.UPDATE}]},submitting:!1}},computed:{disableForm:function(){var e;return!this.editMode&&null!=(null===(e=this._whereHouse)||void 0===e?void 0:e.id)}},methods:k(k({},Object(H.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{can:function(e){return Object(y.a)(this.$auth.user,e)},onFormSubmitted:function(e){this.submitting=!0,this.$refs.form.validate()&&(this.editMode?this.updateWhereHouse(e):this.registerWhereHouse(e))},registerWhereHouse:function(e){var t=this;this.$apollo.mutate({mutation:C.b,variables:{input:this.whereHouse}}).then((function(r){r.data;t.successNotification("Warehouse registered successfully!"),e.target.reset(),t.$emit("on-close-where-house-form"),t.submitting=!1})).catch((function(e){console.log(e),t.submitting=!1}))},updateWhereHouse:function(e){var t=this;this.whereHouse.id=parseInt(this._whereHouse.id),delete this.whereHouse.__typename,this.$apollo.mutate({mutation:C.d,variables:{input:this.whereHouse}}).then((function(r){r.data;t.successNotification("Warehouse updated successfully!"),e.target.reset(),t.$emit("on-close-where-house-form"),t.submitting=!1})).catch((function(e){console.log(e)}))}}),watch:{$props:{handler:function(){var e;null!==(e=this._whereHouse)&&void 0!==e&&e.id?(this.editMode=!1,this.whereHouse=k({},this._whereHouse)):(this.editMode=!1,this.whereHouse={})},deep:!0,immediate:!0}}},W=r(90),component=Object(W.a)(D,(function(){var e=this,t=e._self._c;return t(n.a,[t("div",{staticClass:"grey lighten-2 pa-2 pb-4"},[t(m.a,{staticClass:"mx-0"},[t("div",[t(o.c,{staticClass:"text-h5 pb-0"},[e._v("\n          Warehouse Registration Form\n        ")]),e._v(" "),t("span",{staticClass:"ml-4"},[e._v("registration form")])],1),e._v(" "),t(v.a),e._v(" "),e.disableForm&&e.can(e.element_permissions.edit_btn)?t("button",{staticClass:"v-btn ma-5 mt-6 v-btn--is-elevated v-btn--has-bg theme--light pl-1 black v-size--default white--text",attrs:{icon:"mdi-pen"},on:{click:function(t){e.editMode=!0}}},[t(h.a,{attrs:{right:"",dark:"",medium:""}},[e._v(" mdi-pen ")]),e._v(" "),t("span",{staticClass:"v-btn__content text-white ml-1"},[e._v(" Edit ")])],1):e._e()],1)],1),e._v(" "),t(d.a,{ref:"form",staticClass:"mt-4 p-4",attrs:{disabled:e.disableForm},on:{submit:function(t){return t.preventDefault(),e.onFormSubmitted.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t("div",{staticClass:"mx-5"},[t(m.a,{staticClass:"px-3"},[t(c.a,{attrs:{cols:"12",md:"6"}},[t(f.a,{staticClass:"py-0",attrs:{label:"Name",outlined:"",required:"",rules:e.nameRules},model:{value:e.whereHouse.name,callback:function(t){e.$set(e.whereHouse,"name",t)},expression:"whereHouse.name"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12",md:"6"}},[t(f.a,{staticClass:"py-0",attrs:{label:"Capacity",outlined:"",required:""},model:{value:e.whereHouse.capacity,callback:function(t){e.$set(e.whereHouse,"capacity",t)},expression:"whereHouse.capacity"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12",md:"12"}},[t(f.a,{staticClass:"py-0",attrs:{label:"Address",outlined:"",required:""},model:{value:e.whereHouse.address,callback:function(t){e.$set(e.whereHouse,"address",t)},expression:"whereHouse.address"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12",md:"12"}},[t(w.a,{attrs:{label:"Description",outlined:"",required:""},model:{value:e.whereHouse.description,callback:function(t){e.$set(e.whereHouse,"description",t)},expression:"whereHouse.description"}})],1)],1)],1),e._v(" "),t(l.a,{staticClass:"my-2"}),e._v(" "),t(c.a,{staticClass:"d-flex"},[t("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button"},on:{click:function(t){return e.$emit("on-close-where-house-form")}}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Cancel ")])]),e._v(" "),t(v.a),e._v(" "),e.editMode||e.disableForm?e._e():t("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:e.submitting}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Add Warehouse ")])]),e._v(" "),e.editMode&&!e.disableForm?t("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:e.submitting}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Update Warehouse ")])]):e._e()],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},729:function(e,t,r){"use strict";r.r(t);var n=r(608),o=r(174),c=r(264),l=r(273),d=r(620),h=r(262),m=r(189),v=r(590),f=(r(12),r(13),r(11),r(15),r(9),r(16),r(1)),w=(r(42),r(274),r(5),r(85),r(688)),_=r(689),H=r(642),y=r(106),O=r(275),x=r(22),C=r(34);function j(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function k(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(t){Object(f.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var D={components:{WhereHouseTable:w.default,WhereHouseForm:_.default},middleware:["authenticated"],data:function(){return{breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/"},{text:"Warehouses",disabled:!0,href:"/config/item_categories"}],editMode:!1,search:"",whereHouseFormDialogVisible:!1,whereHouses:[],whereHouse:{},deleteDialog:!1,element_permissions:{create_btn:[{resource:x.a.MEASUREMENT_UNIT,action:C.a.CREATE}]}}},apollo:{whereHouses:{query:H.a,variables:function(){return{name:"%".concat(this.search,"%")}},fetchPolicy:"cache-and-network"}},methods:k(k({},Object(y.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{can:function(e){return Object(O.a)(this.$auth.user,e)},onWhereHouseDetailClicked:function(e){this.whereHouseFormDialogVisible=!0,this.whereHouse=k({},e)},filterOnlyCapsText:function(e,t,r){return null!=e&&null!=t&&"string"==typeof e&&-1!==e.toString().toLocaleUpperCase().indexOf(t)},closeWhereHouseForm:function(){this.whereHouse=null,this.whereHouseFormDialogVisible=!1,this.$apollo.queries.whereHouses.refetch()},onWhereHouseDeleteClick:function(e){this.deleteDialog=!0,this.whereHouse=e},deleteWhereHouse:function(){var e=this;this.$apollo.mutate({mutation:H.c,variables:{id:this.whereHouse.id}}).then((function(t){t.data;e.$apollo.queries.whereHouses.refetch(),e.successNotification("Warehouse removed successfully!")})).catch((function(t){e.errorNotification("Error!  Make sure related resource doesn't exist!"),console.log(t)})),this.role=null,this.deleteDialog=!1}}),created:function(){}},W=r(90),component=Object(W.a)(D,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"pa-5 grey lighten-3"},[t(n.a,{attrs:{items:e.breadcrumbs},scopedSlots:e._u([{key:"divider",fn:function(){return[t(m.a,[e._v("mdi-chevron-double-right")])]},proxy:!0}])}),e._v(" "),t("div",{staticClass:"px-4 row ma-1"},[e._m(0),e._v(" "),t(v.a),e._v(" "),t("div",{staticClass:"pr-2"},[e.can(e.element_permissions.create_btn)?t("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg px-4 py-3 black white--text lighten-5",attrs:{type:"button",icon:"mdi-home"},on:{click:function(t){e.whereHouseFormDialogVisible=!0}}},[t(m.a,{attrs:{left:"",dark:""}},[e._v(" mdi-plus-circle ")]),e._v("\n        Add Warehouse\n      ")],1):e._e()])],1),e._v(" "),t("div",{staticClass:"px-5 py-3"},[t("div",{staticClass:"row mb-4"}),e._v(" "),t("where-house-table",{attrs:{whereHouses:e.whereHouses},on:{"on-where-house-detail-clicked":e.onWhereHouseDetailClicked,"on-delete-where-house-clicked":e.onWhereHouseDeleteClick}})],1),e._v(" "),t("div",[t(d.a,{attrs:{width:"800"},on:{"click:outside":e.closeWhereHouseForm},model:{value:e.whereHouseFormDialogVisible,callback:function(t){e.whereHouseFormDialogVisible=t},expression:"whereHouseFormDialogVisible"}},[t("where-house-form",{attrs:{_whereHouse:e.whereHouse},on:{"on-close-where-house-form":e.closeWhereHouseForm}})],1),e._v(" "),t(d.a,{attrs:{width:"500"},model:{value:e.deleteDialog,callback:function(t){e.deleteDialog=t},expression:"deleteDialog"}},[t(c.a,{staticClass:"red lighten-4"},[t(l.c,{staticClass:"text-h5 red lighten-2"},[e._v(" confirm ")]),e._v(" "),t(l.b,{staticClass:"pt-3"},[e._v("\n          Are you sure you want to delete this resource!\n        ")]),e._v(" "),t(h.a),e._v(" "),t(l.a,[t(v.a),e._v(" "),t(o.a,{attrs:{color:"primary",text:""},on:{click:e.deleteWhereHouse}},[e._v("\n            I accept\n          ")])],1)],1)],1)],1)],1)}),[function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[e._v("\n        All Warehouse\n      ")]),e._v(" "),t("span",{staticClass:"grey--text text--darken-1"},[e._v("All Warehouses Are Shown Here.")])])}],!1,null,null,null);t.default=component.exports}}]);