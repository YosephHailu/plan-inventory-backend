(window.webpackJsonp=window.webpackJsonp||[]).push([[76,45],{660:function(t,e,n){"use strict";n.d(e,"a",(function(){return v})),n.d(e,"b",(function(){return y})),n.d(e,"d",(function(){return m})),n.d(e,"c",(function(){return h}));var o,l,r,c,d=n(91),f=n(60),v=Object(f.a)(o||(o=Object(d.a)(["\n  query {\n    disposalTypes {\n      id\n      name\n      description\n    }   \n  }\n"]))),y=Object(f.a)(l||(l=Object(d.a)(["\n  mutation ($input: DisposalTypeCreateInput!) {\n    createDisposalType(input: $input) {\n      id\n    }\n  }\n"]))),m=Object(f.a)(r||(r=Object(d.a)(["\n  mutation ($input: DisposalTypeUpdateInput!) {\n    updateDisposalType(input: $input) {\n      id\n    }\n  }\n"]))),h=Object(f.a)(c||(c=Object(d.a)(["\n  mutation($id: ID!) {\n    deleteDisposalType(id: $id) {\n      id\n    }\n  }\n"])))},699:function(t,e,n){"use strict";n.r(e);var o=n(177),l=n(738),r=n(213),c=n(264),d=n(175),f=n(84),v=n(272),y=(n(38),n(279),{props:["disposalTypes","search"],data:function(){return{expanded:[],pagination:{},headers:[{text:"id",value:"id",class:"blue-grey lighten-3"},{text:"Name",align:"start",value:"name",class:"blue-grey lighten-3"},{text:"Description",value:"description",class:"blue-grey lighten-3"},{text:"Action",value:"menu",class:"blue-grey lighten-3"}]}}}),m=n(90),component=Object(m.a)(y,(function(){var t=this,e=t._self._c;return e(l.a,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.disposalTypes,"items-per-page":25,search:t.search},scopedSlots:t._u([{key:"item.menu",fn:function(n){var l=n.item;return[e(v.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var l=n.on,c=n.attrs;return[e(o.a,t._g(t._b({attrs:{icon:""}},"v-btn",c,!1),l),[e(r.a,[t._v("mdi-menu")])],1)]}}],null,!0)},[t._v(" "),e(c.a,{staticClass:"col-12 px-0"},[e(d.a,{on:{click:function(e){return t.$emit("on-disposal-type-detail-clicked",l)}}},[e(r.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-eye")]),t._v(" "),e(f.c,{staticClass:"pr-5"},[t._v("detail")])],1),t._v(" "),e(d.a,{staticClass:"red lighten-3",on:{click:function(e){return t.$emit("on-delete-disposal-type-clicked",l)}}},[e(r.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-delete")]),t._v(" "),e(f.c,[t._v("Delete")])],1)],1)],1)]}}])})}),[],!1,null,null,null);e.default=component.exports},700:function(t,e,n){"use strict";n.r(e);var o=n(269),l=n(278),r=n(668),c=n(267),d=n(669),f=n(213),v=n(736),y=n(596),m=n(121),h=n(616),_=(n(39),n(14),n(85),n(13),n(12),n(6),n(16),n(10),n(17),n(1)),T=n(106),D=n(280),O=n(19),x=n(27),C=n(660);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(_.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var k={props:["_DisposalType"],middleware:["authenticated"],data:function(){return{valid:!1,editMode:!1,disposalType:{},nameRules:[function(t){return!!t||"Name field is required"}],element_permissions:{edit_btn:[{resource:O.a.DISPOSAL_TYPE,action:x.a.UPDATE}]}}},computed:{disableForm:function(){var t;return!this.editMode&&null!=(null===(t=this._DisposalType)||void 0===t?void 0:t.id)}},methods:w(w({},Object(T.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{can:function(t){return Object(D.a)(this.$auth.user,t)},onFormSubmitted:function(t){this.$refs.form.validate()&&(this.editMode?this.updateDisposalType(t):this.registerDisposalType(t))},registerDisposalType:function(t){var e=this;this.$apollo.mutate({mutation:C.b,variables:{input:this.disposalType}}).then((function(n){n.data;e.successNotification("Disposal type registered successfully!"),t.target.reset(),e.$emit("on-close-disposal-type-form")})).catch((function(t){console.log(t)}))},updateDisposalType:function(t){var e=this;this.disposalType.id=parseInt(this.disposalType.id),this.$apollo.mutate({mutation:C.d,variables:{input:this.disposalType}}).then((function(n){n.data;e.successNotification("Disposal type updated successfully!"),t.target.reset(),e.$emit("on-close-disposal-type-form")})).catch((function(t){console.log(t)}))}}),watch:{$props:{handler:function(){var t;null!==(t=this._DisposalType)&&void 0!==t&&t.id?(this.editMode=!1,this.disposalType=w({},this._DisposalType)):(this.editMode=!1,this.disposalType={})},deep:!0,immediate:!0}}},P=n(90),component=Object(P.a)(k,(function(){var t=this,e=t._self._c;return e(o.a,[e("div",{staticClass:"grey lighten-2 pa-2 pb-4"},[e(v.a,{staticClass:"mx-0"},[e("div",[e(l.c,{staticClass:"text-h5 pb-0"},[t._v("\n          Disposal Type Registration Form\n        ")]),t._v(" "),e("span",{staticClass:"ml-4"},[t._v("registration form")])],1),t._v(" "),e(y.a),t._v(" "),t.disableForm&&t.can(t.element_permissions.edit_btn)?e("button",{staticClass:"v-btn ma-5 mt-6 v-btn--is-elevated v-btn--has-bg theme--light pl-1 black v-size--default white--text",attrs:{icon:"mdi-pen"},on:{click:function(e){t.editMode=!0}}},[e(f.a,{attrs:{right:"",dark:"",medium:""}},[t._v(" mdi-pen ")]),t._v(" "),e("span",{staticClass:"v-btn__content text-white ml-1"},[t._v(" Edit ")])],1):t._e()],1)],1),t._v(" "),e(d.a,{ref:"form",staticClass:"mt-4 p-4",attrs:{disabled:t.disableForm},on:{submit:function(e){return e.preventDefault(),t.onFormSubmitted.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("div",{staticClass:"mx-5"},[e(v.a,{staticClass:"px-3"},[e(r.a,{attrs:{cols:"12",md:"9"}},[e(m.a,{staticClass:"py-0",attrs:{label:"Name",outlined:"",required:"",rules:t.nameRules},model:{value:t.disposalType.name,callback:function(e){t.$set(t.disposalType,"name",e)},expression:"disposalType.name"}})],1)],1),t._v(" "),e(r.a,{attrs:{cols:"12",md:"12"}},[e(h.a,{attrs:{label:"Description",outlined:"",required:""},model:{value:t.disposalType.description,callback:function(e){t.$set(t.disposalType,"description",e)},expression:"disposalType.description"}})],1)],1),t._v(" "),e(c.a,{staticClass:"my-2"}),t._v(" "),e(r.a,{staticClass:"d-flex"},[e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button"},on:{click:function(e){return t.$emit("on-close-disposal-type-form")}}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Cancel ")])]),t._v(" "),e(y.a),t._v(" "),t.editMode||t.disableForm?t._e():e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Add Disposal Type ")])]),t._v(" "),t.editMode&&!t.disableForm?e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[e("span",{staticClass:"v-btn__content text-white"},[t._v("\n          Update Disposal Type\n        ")])]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},755:function(t,e,n){"use strict";n.r(e);var o=n(614),l=n(177),r=n(269),c=n(278),d=n(621),f=n(267),v=n(213),y=n(596),m=(n(13),n(14),n(12),n(16),n(10),n(17),n(1)),h=(n(38),n(279),n(6),n(46),n(699)),_=n(700),T=n(660),D=n(106),O=n(280),x=n(19),C=n(27);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var k={components:{DisposalTypeTable:h.default,DisposalTypeForm:_.default},middleware:["authenticated"],data:function(){return{breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/"},{text:"Disposal Types",disabled:!0,href:"/config/disposal_types"}],editMode:!1,search:"",calories:"",disposalTypeFormDialogVisible:!1,disposalTypes:[],disposalType:{},deleteDialog:!1,element_permissions:{create_btn:[{resource:x.a.DISPOSAL_TYPE,action:C.a.CREATE}]}}},apollo:{disposalTypes:{query:T.a,variables:function(){return{name:"%".concat(this.search,"%")}},fetchPolicy:"cache-and-network"}},methods:w(w({},Object(D.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{can:function(t){return Object(O.a)(this.$auth.user,t)},onDisposalTypeDetailClicked:function(t){this.disposalTypeFormDialogVisible=!0,this.disposalType=w({},t)},filterOnlyCapsText:function(t,e,n){return null!=t&&null!=e&&"string"==typeof t&&-1!==t.toString().toLocaleUpperCase().indexOf(e)},closeDisposalTypeForm:function(){this.disposalType=null,this.disposalTypeFormDialogVisible=!1,this.$apollo.queries.disposalTypes.refetch()},onDisposalTypeDeleteClick:function(t){this.deleteDialog=!0,this.disposalType=t},deleteDisposalType:function(){var t=this;this.$apollo.mutate({mutation:T.c,variables:{id:this.disposalType.id}}).then((function(e){e.data;t.$apollo.queries.disposalTypes.refetch(),t.successNotification("Disposal Type removed successfully!")})).catch((function(e){t.errorNotification("Error!  Make sure related resource doesn't exist!"),console.log(e)})),this.role=null,this.deleteDialog=!1}}),created:function(){}},P=n(90),component=Object(P.a)(k,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-5 grey lighten-3"},[e(o.a,{attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[e(v.a,[t._v("mdi-chevron-double-right")])]},proxy:!0}])}),t._v(" "),e("div",{staticClass:"px-4 row ma-1"},[t._m(0),t._v(" "),e(y.a),t._v(" "),e("div",{staticClass:"pr-2"},[t.can(t.element_permissions.create_btn)?e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg px-4 py-3 black white--text lighten-5",attrs:{type:"button",icon:"mdi-home"},on:{click:function(e){t.disposalTypeFormDialogVisible=!0}}},[e(v.a,{attrs:{left:"",dark:""}},[t._v(" mdi-plus-circle ")]),t._v("\n        Add Disposal Type\n      ")],1):t._e()])],1),t._v(" "),e("div",{staticClass:"px-5 py-3"},[e("div",{staticClass:"row mb-4"}),t._v(" "),e("disposal-type-table",{attrs:{disposalTypes:t.disposalTypes},on:{"on-disposal-type-detail-clicked":t.onDisposalTypeDetailClicked,"on-delete-disposal-type-clicked":t.onDisposalTypeDeleteClick}})],1),t._v(" "),e("div",[e(d.a,{attrs:{width:"800"},on:{"click:outside":t.closeDisposalTypeForm},model:{value:t.disposalTypeFormDialogVisible,callback:function(e){t.disposalTypeFormDialogVisible=e},expression:"disposalTypeFormDialogVisible"}},[e("disposal-type-form",{attrs:{aDisposalType:t.disposalType},on:{"on-close-disposal-type-form":t.closeDisposalTypeForm}})],1),t._v(" "),e(d.a,{attrs:{width:"500"},model:{value:t.deleteDialog,callback:function(e){t.deleteDialog=e},expression:"deleteDialog"}},[e(r.a,{staticClass:"red lighten-4"},[e(c.c,{staticClass:"text-h5 red lighten-2"},[t._v(" confirm ")]),t._v(" "),e(c.b,{staticClass:"pt-3"},[t._v("\n          Are you sure you want to delete this resource!\n        ")]),t._v(" "),e(f.a),t._v(" "),e(c.a,[e(y.a),t._v(" "),e(l.a,{attrs:{color:"primary",text:""},on:{click:t.deleteDisposalType}},[t._v("\n            I accept\n          ")])],1)],1)],1)],1)],1)}),[function(){var t=this,e=t._self._c;return e("div",[e("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[t._v("\n        All Disposal Type\n      ")]),t._v(" "),e("span",{staticClass:"grey--text text--darken-1"},[t._v("All Disposal Types Are Shown Here.")])])}],!1,null,null,null);e.default=component.exports}}]);