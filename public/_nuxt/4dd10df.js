(window.webpackJsonp=window.webpackJsonp||[]).push([[53,33],{655:function(t,e,n){"use strict";n.d(e,"a",(function(){return v})),n.d(e,"b",(function(){return f})),n.d(e,"d",(function(){return h})),n.d(e,"c",(function(){return _}));var r,o,c,l,m=n(91),d=n(60),v=Object(d.a)(r||(r=Object(m.a)(["\n  query {\n    unitOfMeasurements {\n      id\n      name\n      description\n      abbreviation\n    }   \n  }\n"]))),f=Object(d.a)(o||(o=Object(m.a)(["\n  mutation ($name: String!, $abbreviation: String!, $description: String) {\n    createUnitOfMeasurement(input: {name: $name, abbreviation: $abbreviation, description: $description}) {\n      id\n      name\n      description\n    }\n  }\n"]))),h=Object(d.a)(c||(c=Object(m.a)(["\n  mutation ($id: ID!, $name: String!, $abbreviation: String!, $description: String) {\n    updateUnitOfMeasurement(input: {id: $id, name: $name, abbreviation: $abbreviation, description: $description}) {\n      id\n      name\n      description\n    }\n  }\n"]))),_=Object(d.a)(l||(l=Object(m.a)(["\n  mutation($id: ID!) {\n    deleteUnitOfMeasurement(id: $id) {\n      id\n    }\n  }\n"])))},685:function(t,e,n){"use strict";n.r(e);var r=n(177),o=n(714),c=n(192),l=n(264),m=n(175),d=n(84),v=n(272),f=(n(38),n(279),{props:["unitOfMeasurements","search"],data:function(){return{expanded:[],pagination:{},headers:[{text:"id",value:"id",class:"blue-grey lighten-3"},{text:"Name",align:"start",value:"name",class:"blue-grey lighten-3"},{text:"Abbreviation",value:"abbreviation",class:"blue-grey lighten-3"},{text:"Description",value:"description",class:"blue-grey lighten-3"},{text:"Action",value:"menu",class:"blue-grey lighten-3"}]}}}),h=n(90),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e(o.a,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.unitOfMeasurements,"items-per-page":25,search:t.search},scopedSlots:t._u([{key:"item.menu",fn:function(n){var o=n.item;return[e(v.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var o=n.on,l=n.attrs;return[e(r.a,t._g(t._b({attrs:{icon:""}},"v-btn",l,!1),o),[e(c.a,[t._v("mdi-menu")])],1)]}}],null,!0)},[t._v(" "),e(l.a,{staticClass:"col-12 px-0"},[e(m.a,{on:{click:function(e){return t.$emit("on-measurement-unit-detail-clicked",o)}}},[e(c.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-eye")]),t._v(" "),e(d.c,{staticClass:"pr-5"},[t._v("detail")])],1),t._v(" "),e(m.a,{staticClass:"red lighten-3",on:{click:function(e){return t.$emit("on-delete-measurement-unit-clicked",o)}}},[e(c.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-delete")]),t._v(" "),e(d.c,[t._v("Delete")])],1)],1)],1)]}}])})}),[],!1,null,null,null);e.default=component.exports},686:function(t,e,n){"use strict";n.r(e);var r=n(269),o=n(278),c=n(660),l=n(267),m=n(662),d=n(192),v=n(712),f=n(596),h=n(121),_=n(624),U=(n(39),n(14),n(85),n(13),n(12),n(6),n(16),n(10),n(17),n(1)),O=n(106),y=n(280),M=n(25),x=n(33),C=n(655);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(U.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w={props:["_measurementUnit"],middleware:["authenticated"],data:function(){return{valid:!1,editMode:!1,measurementUnit:{},nameRules:[function(t){return!!t||"Name field is required"}],element_permissions:{edit_btn:[{resource:M.a.MEASUREMENT_UNIT,action:x.a.UPDATE}]}}},computed:{disableForm:function(){var t;return!this.editMode&&null!=(null===(t=this._measurementUnit)||void 0===t?void 0:t.id)}},methods:k(k({},Object(O.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{can:function(t){return Object(y.a)(this.$auth.user,t)},onFormSubmitted:function(t){this.$refs.form.validate()&&(this.editMode?this.updateMeasurementUnit(t):this.registerMeasurementUnit(t))},registerMeasurementUnit:function(t){var e=this;this.$apollo.mutate({mutation:C.b,variables:this.measurementUnit}).then((function(n){n.data;e.successNotification("Measurement unit registered successfully!"),t.target.reset(),e.$emit("on-close-measurement-unit-form")})).catch((function(t){console.log(t)}))},updateMeasurementUnit:function(t){var e=this;this.measurementUnit.id=parseInt(this.measurementUnit.id),this.$apollo.mutate({mutation:C.d,variables:this.measurementUnit}).then((function(n){n.data;e.successNotification("Measurement unit updated successfully!"),t.target.reset(),e.$emit("on-close-measurement-unit-form")})).catch((function(t){console.log(t)}))}}),watch:{$props:{handler:function(){var t;null!==(t=this._measurementUnit)&&void 0!==t&&t.id?(this.editMode=!1,this.measurementUnit=k({},this._measurementUnit)):(this.editMode=!1,this.measurementUnit={})},deep:!0,immediate:!0}}},D=n(90),component=Object(D.a)(w,(function(){var t=this,e=t._self._c;return e(r.a,[e("div",{staticClass:"grey lighten-2 pa-2 pb-4"},[e(v.a,{staticClass:"mx-0"},[e("div",[e(o.c,{staticClass:"text-h5 pb-0"},[t._v("\n          Measurement Unit Registration Form\n        ")]),t._v(" "),e("span",{staticClass:"ml-4"},[t._v("registration form")])],1),t._v(" "),e(f.a),t._v(" "),t.disableForm&&t.can(t.element_permissions.edit_btn)?e("button",{staticClass:"v-btn ma-5 mt-6 v-btn--is-elevated v-btn--has-bg theme--light pl-1 black v-size--default white--text",attrs:{icon:"mdi-pen"},on:{click:function(e){t.editMode=!0}}},[e(d.a,{attrs:{right:"",dark:"",medium:""}},[t._v(" mdi-pen ")]),t._v(" "),e("span",{staticClass:"v-btn__content text-white ml-1"},[t._v(" Edit ")])],1):t._e()],1)],1),t._v(" "),e(m.a,{ref:"form",staticClass:"mt-4 p-4",attrs:{disabled:t.disableForm},on:{submit:function(e){return e.preventDefault(),t.onFormSubmitted.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("div",{staticClass:"mx-5"},[e(v.a,{staticClass:"px-3"},[e(c.a,{attrs:{cols:"12",md:"9"}},[e(h.a,{staticClass:"py-0",attrs:{label:"Name",outlined:"",required:"",rules:t.nameRules},model:{value:t.measurementUnit.name,callback:function(e){t.$set(t.measurementUnit,"name",e)},expression:"measurementUnit.name"}})],1),t._v(" "),e(c.a,{attrs:{cols:"12",md:"3"}},[e(h.a,{staticClass:"py-0",attrs:{label:"Abbreviation",outlined:"",required:""},model:{value:t.measurementUnit.abbreviation,callback:function(e){t.$set(t.measurementUnit,"abbreviation",e)},expression:"measurementUnit.abbreviation"}})],1)],1),t._v(" "),e(c.a,{attrs:{cols:"12",md:"12"}},[e(_.a,{attrs:{label:"Description",outlined:"",required:""},model:{value:t.measurementUnit.description,callback:function(e){t.$set(t.measurementUnit,"description",e)},expression:"measurementUnit.description"}})],1)],1),t._v(" "),e(l.a,{staticClass:"my-2"}),t._v(" "),e(c.a,{staticClass:"d-flex"},[e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button"},on:{click:function(e){return t.$emit("on-close-measurement-unit-form")}}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Cancel ")])]),t._v(" "),e(f.a),t._v(" "),t.editMode||t.disableForm?t._e():e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Add Measurement Unit ")])]),t._v(" "),t.editMode&&!t.disableForm?e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[e("span",{staticClass:"v-btn__content text-white"},[t._v("\n          Update Measurement Unit\n        ")])]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},728:function(t,e,n){"use strict";n.r(e);var r=n(615),o=n(177),c=n(269),l=n(278),m=n(626),d=n(267),v=n(192),f=n(596),h=(n(13),n(14),n(12),n(16),n(10),n(17),n(1)),_=(n(38),n(279),n(6),n(46),n(685)),U=n(686),O=n(655),y=n(106),M=n(280),x=n(25),C=n(33);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w={components:{MeasurementUnitTable:_.default,MeasurementUnitForm:U.default},middleware:["authenticated"],data:function(){return{breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/"},{text:"Measurement Units",disabled:!0,href:"/config/concrete_types"}],editMode:!1,search:"",calories:"",measurementUnitFormDialogVisible:!1,unitOfMeasurements:[],measurementUnit:{},deleteDialog:!1,element_permissions:{create_btn:[{resource:x.a.MEASUREMENT_UNIT,action:C.a.CREATE}]}}},apollo:{unitOfMeasurements:{query:O.a,variables:function(){return{name:"%".concat(this.search,"%")}},fetchPolicy:"cache-and-network"}},methods:k(k({},Object(y.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{can:function(t){return Object(M.a)(this.$auth.user,t)},onMeasurementUnitDetailClicked:function(t){this.measurementUnitFormDialogVisible=!0,this.measurementUnit=k({},t)},filterOnlyCapsText:function(t,e,n){return null!=t&&null!=e&&"string"==typeof t&&-1!==t.toString().toLocaleUpperCase().indexOf(e)},closeMeasurementUnitForm:function(){this.measurementUnit=null,this.measurementUnitFormDialogVisible=!1,this.$apollo.queries.unitOfMeasurements.refetch()},onMeasurementUnitDeleteClick:function(t){this.deleteDialog=!0,this.measurementUnit=t},deleteMeasurementUnit:function(){var t=this;this.$apollo.mutate({mutation:O.c,variables:{id:this.measurementUnit.id}}).then((function(e){e.data;t.$apollo.queries.unitOfMeasurements.refetch(),t.successNotification("Measurement Unit removed successfully!")})).catch((function(e){t.errorNotification("Error!  Make sure related resource doesn't exist!"),console.log(e)})),this.role=null,this.deleteDialog=!1}}),created:function(){}},D=n(90),component=Object(D.a)(w,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-5 grey lighten-3"},[e(r.a,{attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[e(v.a,[t._v("mdi-chevron-double-right")])]},proxy:!0}])}),t._v(" "),e("div",{staticClass:"px-4 row ma-1"},[t._m(0),t._v(" "),e(f.a),t._v(" "),e("div",{staticClass:"pr-2"},[t.can(t.element_permissions.create_btn)?e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg px-4 py-3 black white--text lighten-5",attrs:{type:"button",icon:"mdi-home"},on:{click:function(e){t.measurementUnitFormDialogVisible=!0}}},[e(v.a,{attrs:{left:"",dark:""}},[t._v(" mdi-plus-circle ")]),t._v("\n        Add Measurement Unit\n      ")],1):t._e()])],1),t._v(" "),e("div",{staticClass:"px-5 py-3"},[e("div",{staticClass:"row mb-4"}),t._v(" "),e("measurement-unit-table",{attrs:{unitOfMeasurements:t.unitOfMeasurements},on:{"on-measurement-unit-detail-clicked":t.onMeasurementUnitDetailClicked,"on-delete-measurement-unit-clicked":t.onMeasurementUnitDeleteClick}})],1),t._v(" "),e("div",[e(m.a,{attrs:{width:"800"},on:{"click:outside":t.closeMeasurementUnitForm},model:{value:t.measurementUnitFormDialogVisible,callback:function(e){t.measurementUnitFormDialogVisible=e},expression:"measurementUnitFormDialogVisible"}},[e("measurement-unit-form",{attrs:{_measurementUnit:t.measurementUnit},on:{"on-close-measurement-unit-form":t.closeMeasurementUnitForm}})],1),t._v(" "),e(m.a,{attrs:{width:"500"},model:{value:t.deleteDialog,callback:function(e){t.deleteDialog=e},expression:"deleteDialog"}},[e(c.a,{staticClass:"red lighten-4"},[e(l.c,{staticClass:"text-h5 red lighten-2"},[t._v(" confirm ")]),t._v(" "),e(l.b,{staticClass:"pt-3"},[t._v("\n          Are you sure you want to delete this resource!\n        ")]),t._v(" "),e(d.a),t._v(" "),e(l.a,[e(f.a),t._v(" "),e(o.a,{attrs:{color:"primary",text:""},on:{click:t.deleteMeasurementUnit}},[t._v("\n            I accept\n          ")])],1)],1)],1)],1)],1)}),[function(){var t=this,e=t._self._c;return e("div",[e("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[t._v("\n        All Measurement Unit\n      ")]),t._v(" "),e("span",{staticClass:"grey--text text--darken-1"},[t._v("All Measurement Units Are Shown Here.")])])}],!1,null,null,null);e.default=component.exports}}]);