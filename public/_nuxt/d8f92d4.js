(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{618:function(t,e,n){"use strict";n.d(e,"a",(function(){return v})),n.d(e,"b",(function(){return f})),n.d(e,"d",(function(){return h})),n.d(e,"c",(function(){return _}));var o,r,c,l,d=n(91),m=n(64),v=Object(m.a)(o||(o=Object(d.a)(["\n  query($page: Int!, $per_page: Int!) {\n    permissions(first: $per_page, page: $page) {\n      data {\n        id\n        name\n        code\n        description\n        resource\n        is_active\n     }\n    }   \n  }\n"]))),f=Object(m.a)(r||(r=Object(d.a)(["\n  mutation($name: String!, $code: String, $resource: String, $description: String) {\n    createPermission(input: {name: $name, code: $code, resource: $resource, description: $description}) {\n        id\n        name\n    }\n  }\n"]))),h=Object(m.a)(c||(c=Object(d.a)(["\n  mutation($id: ID!, $name: String!, $code: String, $resource: String, $description: String) {\n    updatePermission(input: {id: $id, name: $name, code: $code, resource: $resource, description: $description}) {\n        id\n        name\n    }\n  }\n"]))),_=Object(m.a)(l||(l=Object(d.a)(["\n  mutation($id: ID!) {\n    deletePermission(id: $id) {\n        id\n        name\n    }   \n  }\n"])))},650:function(t,e,n){"use strict";n.r(e);var o=n(264),r=n(273),c=n(678),l=n(262),d=n(641),m=n(209),v=n(698),f=n(590),h=n(120),_=(n(37),n(13),n(84),n(12),n(11),n(4),n(15),n(9),n(16),n(1)),$=n(106),O=n(618);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(_.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j={props:["_permission"],data:function(){return{editMode:!1,valid:!1,permission:{}}},computed:{disableForm:function(){var t;return!this.editMode&&null!=(null===(t=this._permission)||void 0===t?void 0:t.id)}},methods:C(C({},Object($.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(t){this.editMode?this.updateConcrete(t):this.registerConcrete(t)},registerConcrete:function(t){var e=this;this.$apollo.mutate({mutation:O.b,variables:this.permission}).then((function(n){n.data;e.successNotification("Permission  registered successfully!"),t.target.reset(),e.$emit("on-close-permission-form")})).catch((function(t){console.log(t)}))},updateConcrete:function(t){var e=this;this.$apollo.mutate({mutation:O.d,variables:this.permission}).then((function(n){n.data;e.successNotification("Permission  updated successfully!"),t.target.reset(),e.$emit("on-close-permission-form")})).catch((function(t){console.log(t)}))}}),watch:{$props:{handler:function(){this._permission&&(this.editMode=!1,this.permission=C({},this._permission))},deep:!0,immediate:!0}}},w=n(90),component=Object(w.a)(j,(function(){var t=this,e=t._self._c;return e(o.a,[e("div",{staticClass:"grey lighten-2 pa-2 pb-4"},[e(v.a,{staticClass:"mx-0"},[e("div",[e(r.c,{staticClass:"text-h5 pb-0"},[t._v("\n          Permission  Registration Form\n        ")]),t._v(" "),e("span",{staticClass:"ml-4"},[t._v("registration form")])],1),t._v(" "),e(f.a),t._v(" "),t.disableForm?e("button",{staticClass:"v-btn ma-5 mt-6 v-btn--is-elevated v-btn--has-bg theme--light pl-1 black v-size--default white--text",attrs:{icon:"mdi-pen"},on:{click:function(e){t.editMode=!0}}},[e(m.a,{attrs:{right:"",dark:"",medium:""}},[t._v(" mdi-pen ")]),t._v(" "),e("span",{staticClass:"v-btn__content text-white ml-1"},[t._v(" Edit ")])],1):t._e()],1)],1),t._v(" "),e(d.a,{staticClass:"mt-4 p-4",attrs:{disabled:t.disableForm},on:{submit:function(e){return e.preventDefault(),t.onFormSubmitted.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("div",{staticClass:"mx-5"},[e(v.a,{staticClass:"px-3"},[e(c.a,{attrs:{cols:"12"}},[e(h.a,{attrs:{label:"Name",outlined:"",required:""},model:{value:t.permission.name,callback:function(e){t.$set(t.permission,"name",e)},expression:"permission.name"}})],1),t._v(" "),e(c.a,{attrs:{cols:"12",md:"6"}},[e(h.a,{attrs:{label:"Code",outlined:"",required:""},model:{value:t.permission.code,callback:function(e){t.$set(t.permission,"code",e)},expression:"permission.code"}})],1),t._v(" "),e(c.a,{attrs:{cols:"12",md:"6"}},[e(h.a,{attrs:{label:"Resource",outlined:"",required:""},model:{value:t.permission.resource,callback:function(e){t.$set(t.permission,"resource",e)},expression:"permission.resource"}})],1),t._v(" "),e(c.a,{attrs:{cols:"12"}},[e(h.a,{attrs:{label:"Description",outlined:"",required:""},model:{value:t.permission.description,callback:function(e){t.$set(t.permission,"description",e)},expression:"permission.description"}})],1)],1)],1),t._v(" "),e(l.a,{staticClass:"my-2"}),t._v(" "),e(c.a,{staticClass:"d-flex"},[e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button"},on:{click:function(e){return t.$emit("on-close-permission-form")}}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Cancel ")])]),t._v(" "),e(f.a),t._v(" "),t.disableForm?t._e():e("div",[t.editMode?e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Update ")])]):e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Add ")])])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);