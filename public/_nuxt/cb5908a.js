(window.webpackJsonp=window.webpackJsonp||[]).push([[50,34],{630:function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return v})),n.d(e,"d",(function(){return y})),n.d(e,"c",(function(){return h}));var o,c,r,l,d=n(91),f=n(64),m=Object(f.a)(o||(o=Object(d.a)(["\n  query {\n    stockTypes {\n      id\n      name\n      description\n    }   \n  }\n"]))),v=Object(f.a)(c||(c=Object(d.a)(["\n  mutation ($input: StockTypeCreateInput!) {\n    createStockType(input: $input) {\n      id\n    }\n  }\n"]))),y=Object(f.a)(r||(r=Object(d.a)(["\n  mutation ($input: StockTypeUpdateInput!) {\n    updateStockType(input: $input) {\n      id\n    }\n  }\n"]))),h=Object(f.a)(l||(l=Object(d.a)(["\n  mutation($id: ID!) {\n    deleteStockType(id: $id) {\n      id\n    }\n  }\n"])))},667:function(t,e,n){"use strict";n.r(e);var o=n(174),c=n(700),r=n(209),l=n(259),d=n(172),f=n(83),m=n(267),v=(n(41),n(274),{props:["stockTypes","search"],data:function(){return{expanded:[],pagination:{},headers:[{text:"id",value:"id",class:"blue-grey lighten-3"},{text:"Stock type",align:"start",value:"name",class:"blue-grey lighten-3"},{text:"Description",value:"description",class:"blue-grey lighten-3"},{text:"Action",value:"menu",class:"blue-grey lighten-3"}]}}}),y=n(90),component=Object(y.a)(v,(function(){var t=this,e=t._self._c;return e(c.a,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.stockTypes,"items-per-page":25,search:t.search},scopedSlots:t._u([{key:"item.menu",fn:function(n){var c=n.item;return[e(m.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var c=n.on,l=n.attrs;return[e(o.a,t._g(t._b({attrs:{icon:""}},"v-btn",l,!1),c),[e(r.a,[t._v("mdi-menu")])],1)]}}],null,!0)},[t._v(" "),e(l.a,{staticClass:"col-12 px-0"},[e(d.a,{on:{click:function(e){return t.$emit("on-stock-type-detail-clicked",c)}}},[e(r.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-eye")]),t._v(" "),e(f.b,{staticClass:"pr-5"},[t._v("detail")])],1),t._v(" "),e(d.a,{staticClass:"red lighten-3",on:{click:function(e){return t.$emit("on-delete-stock-type-clicked",c)}}},[e(r.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-delete")]),t._v(" "),e(f.b,[t._v("Delete")])],1)],1)],1)]}}])})}),[],!1,null,null,null);e.default=component.exports},668:function(t,e,n){"use strict";n.r(e);var o=n(264),c=n(273),r=n(678),l=n(262),d=n(641),f=n(209),m=n(698),v=n(590),y=n(120),h=n(609),k=(n(37),n(13),n(84),n(12),n(11),n(4),n(15),n(9),n(16),n(1)),_=n(106),T=n(275),O=n(30),C=n(47),x=n(630);function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(e){Object(k.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w={props:["_stockType"],middleware:["authenticated"],data:function(){return{valid:!1,editMode:!1,stockType:{},nameRules:[function(t){return!!t||"Name field is required"}],element_permissions:{edit_btn:[{resource:O.a.STOCK_TYPE,action:C.a.UPDATE}]},submitting:!1}},computed:{disableForm:function(){var t;return!this.editMode&&null!=(null===(t=this._stockType)||void 0===t?void 0:t.id)}},methods:j(j({},Object(_.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{can:function(t){return Object(T.a)(this.$auth.user,t)},onFormSubmitted:function(t){this.submitting=!0,this.$refs.form.validate()&&(this.editMode?this.updateStockType(t):this.registerStockType(t))},registerStockType:function(t){var e=this;this.$apollo.mutate({mutation:x.b,variables:{input:this.stockType}}).then((function(n){n.data;e.successNotification("Office location registered successfully!"),t.target.reset(),e.$emit("on-close-stock-type-form"),e.submitting=!1})).catch((function(t){console.log(t),e.submitting=!1}))},updateStockType:function(t){var e=this;delete this.stockType.__typename,this.$apollo.mutate({mutation:x.d,variables:{input:this.stockType}}).then((function(n){n.data;e.successNotification("Office location updated successfully!"),t.target.reset(),e.$emit("on-close-stock-type-form"),e.submitting=!1})).catch((function(t){console.log(t)}))}}),watch:{$props:{handler:function(){var t;null!==(t=this._stockType)&&void 0!==t&&t.id?(this.editMode=!1,this.stockType=j({},this._stockType)):(this.editMode=!1,this.stockType={})},deep:!0,immediate:!0}}},D=n(90),component=Object(D.a)(w,(function(){var t=this,e=t._self._c;return e(o.a,[e("div",{staticClass:"grey lighten-2 pa-2 pb-4"},[e(m.a,{staticClass:"mx-0"},[e("div",[e(c.c,{staticClass:"text-h5 pb-0"},[t._v("\n          Stock Type Registration Form\n        ")]),t._v(" "),e("span",{staticClass:"ml-4"},[t._v("registration form")])],1),t._v(" "),e(v.a),t._v(" "),t.disableForm&&t.can(t.element_permissions.edit_btn)?e("button",{staticClass:"v-btn ma-5 mt-6 v-btn--is-elevated v-btn--has-bg theme--light pl-1 black v-size--default white--text",attrs:{icon:"mdi-pen"},on:{click:function(e){t.editMode=!0}}},[e(f.a,{attrs:{right:"",dark:"",medium:""}},[t._v(" mdi-pen ")]),t._v(" "),e("span",{staticClass:"v-btn__content text-white ml-1"},[t._v(" Edit ")])],1):t._e()],1)],1),t._v(" "),e(d.a,{ref:"form",staticClass:"mt-4 p-4",attrs:{disabled:t.disableForm},on:{submit:function(e){return e.preventDefault(),t.onFormSubmitted.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("div",{staticClass:"mx-5"},[e(m.a,{staticClass:"px-3"},[e(r.a,{attrs:{cols:"12",md:"9"}},[e(y.a,{staticClass:"py-0",attrs:{label:"Stock type",outlined:"",required:"",rules:t.nameRules},model:{value:t.stockType.name,callback:function(e){t.$set(t.stockType,"name",e)},expression:"stockType.name"}})],1)],1),t._v(" "),e(r.a,{attrs:{cols:"12",md:"12"}},[e(h.a,{attrs:{label:"Description",outlined:"",required:""},model:{value:t.stockType.description,callback:function(e){t.$set(t.stockType,"description",e)},expression:"stockType.description"}})],1)],1),t._v(" "),e(l.a,{staticClass:"my-2"}),t._v(" "),e(r.a,{staticClass:"d-flex"},[e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button"},on:{click:function(e){return t.$emit("on-close-stock-type-form")}}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Cancel ")])]),t._v(" "),e(v.a),t._v(" "),t.editMode||t.disableForm?t._e():e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:t.submitting}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Add Stock Type ")])]),t._v(" "),t.editMode&&!t.disableForm?e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:t.submitting}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Update Stock Type ")])]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},715:function(t,e,n){"use strict";n.r(e);var o=n(608),c=n(174),r=n(264),l=n(273),d=n(614),f=n(262),m=n(209),v=n(590),y=(n(12),n(13),n(11),n(15),n(9),n(16),n(1)),h=(n(41),n(274),n(4),n(85),n(667)),k=n(668),_=n(630),T=n(106),O=n(275),C=n(30),x=n(47);function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w={components:{StockTypeTable:h.default,StockTypeForm:k.default},middleware:["authenticated"],data:function(){return{breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/"},{text:"Stock Types",disabled:!0,href:"/config/stock_types"}],editMode:!1,search:"",stockTypeFormDialogVisible:!1,stockTypes:[],stockType:{},deleteDialog:!1,element_permissions:{create_btn:[{resource:C.a.STOCK_TYPE,action:x.a.CREATE}]}}},apollo:{stockTypes:{query:_.a,variables:function(){return{name:"%".concat(this.search,"%")}},fetchPolicy:"cache-and-network"}},methods:j(j({},Object(T.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{can:function(t){return Object(O.a)(this.$auth.user,t)},onStockTypeDetailClicked:function(t){this.stockTypeFormDialogVisible=!0,this.stockType=j({},t)},filterOnlyCapsText:function(t,e,n){return null!=t&&null!=e&&"string"==typeof t&&-1!==t.toString().toLocaleUpperCase().indexOf(e)},closeStockTypeForm:function(){this.stockType=null,this.stockTypeFormDialogVisible=!1,this.$apollo.queries.stockTypes.refetch()},onStockTypeDeleteClick:function(t){this.deleteDialog=!0,this.stockType=t},deleteStockType:function(){var t=this;this.$apollo.mutate({mutation:_.c,variables:{id:this.stockType.id}}).then((function(e){e.data;t.$apollo.queries.stockTypes.refetch(),t.successNotification("Stock Type removed successfully!")})).catch((function(e){t.errorNotification("Error!  Make sure related resource doesn't exist!"),console.log(e)})),this.role=null,this.deleteDialog=!1}}),created:function(){}},D=n(90),component=Object(D.a)(w,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-5 grey lighten-3"},[e(o.a,{attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[e(m.a,[t._v("mdi-chevron-double-right")])]},proxy:!0}])}),t._v(" "),e("div",{staticClass:"px-4 row ma-1"},[t._m(0),t._v(" "),e(v.a),t._v(" "),e("div",{staticClass:"pr-2"},[t.can(t.element_permissions.create_btn)?e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg px-4 py-3 black white--text lighten-5",attrs:{type:"button",icon:"mdi-home"},on:{click:function(e){t.stockTypeFormDialogVisible=!0}}},[e(m.a,{attrs:{left:"",dark:""}},[t._v(" mdi-plus-circle ")]),t._v("\n        Add Stock Type\n      ")],1):t._e()])],1),t._v(" "),e("div",{staticClass:"px-5 py-3"},[e("div",{staticClass:"row mb-4"}),t._v(" "),e("stock-type-table",{attrs:{stockTypes:t.stockTypes},on:{"on-stock-type-detail-clicked":t.onStockTypeDetailClicked,"on-delete-stock-type-clicked":t.onStockTypeDeleteClick}})],1),t._v(" "),e("div",[e(d.a,{attrs:{width:"800"},on:{"click:outside":t.closeStockTypeForm},model:{value:t.stockTypeFormDialogVisible,callback:function(e){t.stockTypeFormDialogVisible=e},expression:"stockTypeFormDialogVisible"}},[e("stock-type-form",{attrs:{_stockType:t.stockType},on:{"on-close-stock-type-form":t.closeStockTypeForm}})],1),t._v(" "),e(d.a,{attrs:{width:"500"},model:{value:t.deleteDialog,callback:function(e){t.deleteDialog=e},expression:"deleteDialog"}},[e(r.a,{staticClass:"red lighten-4"},[e(l.c,{staticClass:"text-h5 red lighten-2"},[t._v(" confirm ")]),t._v(" "),e(l.b,{staticClass:"pt-3"},[t._v("\n          Are you sure you want to delete this resource!\n        ")]),t._v(" "),e(f.a),t._v(" "),e(l.a,[e(v.a),t._v(" "),e(c.a,{attrs:{color:"primary",text:""},on:{click:t.deleteStockType}},[t._v("\n            I accept\n          ")])],1)],1)],1)],1)],1)}),[function(){var t=this,e=t._self._c;return e("div",[e("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[t._v("\n        All Stock Type\n      ")]),t._v(" "),e("span",{staticClass:"grey--text text--darken-1"},[t._v("All Stock Types Are Shown Here.")])])}],!1,null,null,null);e.default=component.exports}}]);