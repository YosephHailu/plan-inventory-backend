(window.webpackJsonp=window.webpackJsonp||[]).push([[73,42],{657:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m})),n.d(t,"d",(function(){return y})),n.d(t,"c",(function(){return h}));var r,c,o,l,d=n(91),v=n(60),f=Object(v.a)(r||(r=Object(d.a)(["\n  query {\n    currencies {\n      id\n      name\n      description\n      code\n    }   \n  }\n"]))),m=Object(v.a)(c||(c=Object(d.a)(["\n  mutation ($input: CurrencyCreateInput!) {\n    createCurrency(input: $input) {\n      id\n    }\n  }\n"]))),y=Object(v.a)(o||(o=Object(d.a)(["\n  mutation ($input: CurrencyUpdateInput!) {\n    updateCurrency(input: $input) {\n      id\n    }\n  }\n"]))),h=Object(v.a)(l||(l=Object(d.a)(["\n  mutation($id: ID!) {\n    deleteCurrency(id: $id) {\n      id\n    }\n  }\n"])))},693:function(e,t,n){"use strict";n.r(t);var r=n(177),c=n(738),o=n(213),l=n(264),d=n(175),v=n(84),f=n(272),m=(n(38),n(279),{props:["currencies","search"],data:function(){return{expanded:[],pagination:{},headers:[{text:"id",value:"id",class:"blue-grey lighten-3"},{text:"Name",align:"start",value:"name",class:"blue-grey lighten-3"},{text:"Code",value:"code",class:"blue-grey lighten-3"},{text:"Description",value:"description",class:"blue-grey lighten-3"},{text:"Action",value:"menu",class:"blue-grey lighten-3"}]}}}),y=n(90),component=Object(y.a)(m,(function(){var e=this,t=e._self._c;return t(c.a,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.currencies,"items-per-page":25,search:e.search},scopedSlots:e._u([{key:"item.menu",fn:function(n){var c=n.item;return[t(f.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:e._u([{key:"activator",fn:function(n){var c=n.on,l=n.attrs;return[t(r.a,e._g(e._b({attrs:{icon:""}},"v-btn",l,!1),c),[t(o.a,[e._v("mdi-menu")])],1)]}}],null,!0)},[e._v(" "),t(l.a,{staticClass:"col-12 px-0"},[t(d.a,{on:{click:function(t){return e.$emit("on-currency-detail-clicked",c)}}},[t(o.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-eye")]),e._v(" "),t(v.c,{staticClass:"pr-5"},[e._v("detail")])],1),e._v(" "),t(d.a,{staticClass:"red lighten-3",on:{click:function(t){return e.$emit("on-delete-currency-clicked",c)}}},[t(o.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-delete")]),e._v(" "),t(v.c,[e._v("Delete")])],1)],1)],1)]}}])})}),[],!1,null,null,null);t.default=component.exports},694:function(e,t,n){"use strict";n.r(t);var r=n(269),c=n(278),o=n(668),l=n(267),d=n(669),v=n(213),f=n(736),m=n(596),y=n(121),h=n(616),_=(n(39),n(14),n(85),n(13),n(12),n(6),n(16),n(10),n(17),n(1)),C=n(106),O=n(280),x=n(19),j=n(27),k=n(657);function w(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function D(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(t){Object(_.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var $={props:["_currency"],middleware:["authenticated"],data:function(){return{valid:!1,editMode:!1,currency:{},nameRules:[function(e){return!!e||"Name field is required"}],element_permissions:{edit_btn:[{resource:x.a.CURRENCY,action:j.a.UPDATE}]}}},computed:{disableForm:function(){var e;return!this.editMode&&null!=(null===(e=this._currency)||void 0===e?void 0:e.id)}},methods:D(D({},Object(C.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{can:function(e){return Object(O.a)(this.$auth.user,e)},onFormSubmitted:function(e){this.$refs.form.validate()&&(this.editMode?this.updateCurrency(e):this.registerCurrency(e))},registerCurrency:function(e){var t=this;this.$apollo.mutate({mutation:k.b,variables:{input:this.currency}}).then((function(n){n.data;t.successNotification("Currency registered successfully!"),e.target.reset(),t.$emit("on-close-currency-form")})).catch((function(e){console.log(e)}))},updateCurrency:function(e){var t=this;this.currency.id=parseInt(this.currency.id),this.$apollo.mutate({mutation:k.d,variables:{input:this.currency}}).then((function(n){n.data;t.successNotification("Currency updated successfully!"),e.target.reset(),t.$emit("on-close-currency-form")})).catch((function(e){console.log(e)}))}}),watch:{$props:{handler:function(){var e;null!==(e=this._currency)&&void 0!==e&&e.id?(this.editMode=!1,this.currency=D({},this._currency)):(this.editMode=!1,this.currency={})},deep:!0,immediate:!0}}},N=n(90),component=Object(N.a)($,(function(){var e=this,t=e._self._c;return t(r.a,[t("div",{staticClass:"grey lighten-2 pa-2 pb-4"},[t(f.a,{staticClass:"mx-0"},[t("div",[t(c.c,{staticClass:"text-h5 pb-0"},[e._v("\n          Currency Registration Form\n        ")]),e._v(" "),t("span",{staticClass:"ml-4"},[e._v("registration form")])],1),e._v(" "),t(m.a),e._v(" "),e.disableForm&&e.can(e.element_permissions.edit_btn)?t("button",{staticClass:"v-btn ma-5 mt-6 v-btn--is-elevated v-btn--has-bg theme--light pl-1 black v-size--default white--text",attrs:{icon:"mdi-pen"},on:{click:function(t){e.editMode=!0}}},[t(v.a,{attrs:{right:"",dark:"",medium:""}},[e._v(" mdi-pen ")]),e._v(" "),t("span",{staticClass:"v-btn__content text-white ml-1"},[e._v(" Edit ")])],1):e._e()],1)],1),e._v(" "),t(d.a,{ref:"form",staticClass:"mt-4 p-4",attrs:{disabled:e.disableForm},on:{submit:function(t){return t.preventDefault(),e.onFormSubmitted.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t("div",{staticClass:"mx-5"},[t(f.a,{staticClass:"px-3"},[t(o.a,{attrs:{cols:"12",md:"9"}},[t(y.a,{staticClass:"py-0",attrs:{label:"Name",outlined:"",required:"",rules:e.nameRules},model:{value:e.currency.name,callback:function(t){e.$set(e.currency,"name",t)},expression:"currency.name"}})],1),e._v(" "),t(o.a,{attrs:{cols:"12",md:"3"}},[t(y.a,{staticClass:"py-0",attrs:{label:"Code",outlined:"",required:""},model:{value:e.currency.code,callback:function(t){e.$set(e.currency,"code",t)},expression:"currency.code"}})],1)],1),e._v(" "),t(o.a,{attrs:{cols:"12",md:"12"}},[t(h.a,{attrs:{label:"Description",outlined:"",required:""},model:{value:e.currency.description,callback:function(t){e.$set(e.currency,"description",t)},expression:"currency.description"}})],1)],1),e._v(" "),t(l.a,{staticClass:"my-2"}),e._v(" "),t(o.a,{staticClass:"d-flex"},[t("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button"},on:{click:function(t){return e.$emit("on-close-currency-form")}}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Cancel ")])]),e._v(" "),t(m.a),e._v(" "),e.editMode||e.disableForm?e._e():t("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Add Currency ")])]),e._v(" "),e.editMode&&!e.disableForm?t("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[t("span",{staticClass:"v-btn__content text-white"},[e._v("\n          Update Currency\n        ")])]):e._e()],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},752:function(e,t,n){"use strict";n.r(t);var r=n(614),c=n(177),o=n(269),l=n(278),d=n(621),v=n(267),f=n(213),m=n(596),y=(n(13),n(14),n(12),n(16),n(10),n(17),n(1)),h=(n(38),n(279),n(6),n(46),n(693)),_=n(694),C=n(657),O=n(106),x=n(280),j=n(19),k=n(27);function w(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function D(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(t){Object(y.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var $={components:{CurrencyTable:h.default,CurrencyForm:_.default},middleware:["authenticated"],data:function(){return{breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/"},{text:"Currencies",disabled:!0,href:"/config/acquisition_types"}],editMode:!1,search:"",calories:"",currencyFormDialogVisible:!1,currencies:[],currency:{},deleteDialog:!1,element_permissions:{create_btn:[{resource:j.a.CURRENCY,action:k.a.CREATE}]}}},apollo:{currencies:{query:C.a,variables:function(){return{name:"%".concat(this.search,"%")}},fetchPolicy:"cache-and-network"}},methods:D(D({},Object(O.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{can:function(e){return Object(x.a)(this.$auth.user,e)},onCurrencyDetailClicked:function(e){this.currencyFormDialogVisible=!0,this.currency=D({},e)},filterOnlyCapsText:function(e,t,n){return null!=e&&null!=t&&"string"==typeof e&&-1!==e.toString().toLocaleUpperCase().indexOf(t)},closeCurrencyForm:function(){this.currency=null,this.currencyFormDialogVisible=!1,this.$apollo.queries.currencies.refetch()},onCurrencyDeleteClick:function(e){this.deleteDialog=!0,this.currency=e},deleteCurrency:function(){var e=this;this.$apollo.mutate({mutation:C.c,variables:{id:this.currency.id}}).then((function(t){t.data;e.$apollo.queries.currencies.refetch(),e.successNotification("Currency removed successfully!")})).catch((function(t){e.errorNotification("Error!  Make sure related resource doesn't exist!"),console.log(t)})),this.role=null,this.deleteDialog=!1}}),created:function(){}},N=n(90),component=Object(N.a)($,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"pa-5 grey lighten-3"},[t(r.a,{attrs:{items:e.breadcrumbs},scopedSlots:e._u([{key:"divider",fn:function(){return[t(f.a,[e._v("mdi-chevron-double-right")])]},proxy:!0}])}),e._v(" "),t("div",{staticClass:"px-4 row ma-1"},[e._m(0),e._v(" "),t(m.a),e._v(" "),t("div",{staticClass:"pr-2"},[e.can(e.element_permissions.create_btn)?t("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg px-4 py-3 black white--text lighten-5",attrs:{type:"button",icon:"mdi-home"},on:{click:function(t){e.currencyFormDialogVisible=!0}}},[t(f.a,{attrs:{left:"",dark:""}},[e._v(" mdi-plus-circle ")]),e._v("\n        Add Currency\n      ")],1):e._e()])],1),e._v(" "),t("div",{staticClass:"px-5 py-3"},[t("div",{staticClass:"row mb-4"}),e._v(" "),t("currency-table",{attrs:{currencies:e.currencies},on:{"on-currency-detail-clicked":e.onCurrencyDetailClicked,"on-delete-currency-clicked":e.onCurrencyDeleteClick}})],1),e._v(" "),t("div",[t(d.a,{attrs:{width:"800"},on:{"click:outside":e.closeCurrencyForm},model:{value:e.currencyFormDialogVisible,callback:function(t){e.currencyFormDialogVisible=t},expression:"currencyFormDialogVisible"}},[t("currency-form",{attrs:{aCurrency:e.currency},on:{"on-close-currency-form":e.closeCurrencyForm}})],1),e._v(" "),t(d.a,{attrs:{width:"500"},model:{value:e.deleteDialog,callback:function(t){e.deleteDialog=t},expression:"deleteDialog"}},[t(o.a,{staticClass:"red lighten-4"},[t(l.c,{staticClass:"text-h5 red lighten-2"},[e._v(" confirm ")]),e._v(" "),t(l.b,{staticClass:"pt-3"},[e._v("\n          Are you sure you want to delete this resource!\n        ")]),e._v(" "),t(v.a),e._v(" "),t(l.a,[t(m.a),e._v(" "),t(c.a,{attrs:{color:"primary",text:""},on:{click:e.deleteCurrency}},[e._v("\n            I accept\n          ")])],1)],1)],1)],1)],1)}),[function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[e._v("\n        All Currency\n      ")]),e._v(" "),t("span",{staticClass:"grey--text text--darken-1"},[e._v("All Currencies Are Shown Here.")])])}],!1,null,null,null);t.default=component.exports}}]);