(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{668:function(t,e,n){"use strict";n.d(e,"a",(function(){return v})),n.d(e,"b",(function(){return f})),n.d(e,"d",(function(){return h})),n.d(e,"c",(function(){return y}));var o,r,c,l,d=n(92),m=n(61),v=Object(m.a)(o||(o=Object(d.a)(["\n  query($page: Int!, $per_page: Int!) {\n    permission_types(first: $per_page, page: $page) {\n      data {\n         id\n         action\n         is_active\n      }\n    }   \n  }\n"]))),f=Object(m.a)(r||(r=Object(d.a)(["\n  mutation($action: String!) {\n    createPermissionType(input: {action: $action}) {\n        id\n        action\n    }\n  }\n"]))),h=Object(m.a)(c||(c=Object(d.a)(["\n  mutation($id: ID!, $action: String!) {\n    updatePermissionType(input: {id: $id, action: $action}) {\n        id\n        action\n    }\n  }\n"]))),y=Object(m.a)(l||(l=Object(d.a)(["\n  mutation($id: ID!) {\n    deletePermissionType(id: $id) {\n        id\n        action\n    }   \n  }\n"])))},705:function(t,e,n){"use strict";n.r(e);var o=n(276),r=n(231),c=n(694),l=n(273),d=n(695),m=n(194),v=n(783),f=n(609),h=n(124),y=(n(13),n(14),n(12),n(6),n(16),n(10),n(17),n(1)),_=n(106),O=n(668);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var T={props:["_permissionType"],data:function(){return{editMode:!1,valid:!1,permissionType:{}}},computed:{disableForm:function(){var t;return!this.editMode&&null!=(null===(t=this._permissionType)||void 0===t?void 0:t.id)}},methods:w(w({},Object(_.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(t){this.editMode?this.updatePermissionType(t):this.registerPermissionType(t)},registerPermissionType:function(t){var e=this;this.$apollo.mutate({mutation:O.b,variables:this.permissionType}).then((function(n){n.data;e.successNotification("Permission Type registered successfully!"),t.target.reset(),e.$emit("on-close-permission-type-form")})).catch((function(t){console.log(t)}))},updatePermissionType:function(t){var e=this;this.$apollo.mutate({mutation:O.d,variables:this.permissionType}).then((function(n){n.data;e.successNotification("Permission Type updated successfully!"),t.target.reset(),e.$emit("on-close-permission-type-form")})).catch((function(t){console.log(t)}))}}),watch:{$props:{handler:function(){this._permissionType&&(this.permissionType=w({},this._permissionType))},deep:!0,immediate:!0}}},$=n(60),component=Object($.a)(T,(function(){var t=this,e=t._self._c;return e(o.a,[e("div",{staticClass:"blue lighten-1 white--text pa-2 pb-6"},[e(v.a,{staticClass:"mx-0"},[e("div",[e(r.c,{staticClass:"text-h5 pb-0"},[t._v("\n          Permission Type Registration Form\n        ")]),t._v(" "),e("span",{staticClass:"ml-4"},[t._v("registration form")])],1),t._v(" "),e(f.a),t._v(" "),t.disableForm?e("button",{staticClass:"v-btn ma-5 mt-6 v-btn--is-elevated v-btn--has-bg theme--light pl-1 black v-size--default white--text",attrs:{icon:"mdi-pen"},on:{click:function(e){t.editMode=!0}}},[e(m.a,{attrs:{right:"",dark:"",medium:""}},[t._v(" mdi-pen ")]),t._v(" "),e("span",{staticClass:"v-btn__content text-white ml-1"},[t._v(" Edit ")])],1):t._e()],1)],1),t._v(" "),e(d.a,{staticClass:"mt-4 p-4",attrs:{disabled:t.disableForm},on:{submit:function(e){return e.preventDefault(),t.onFormSubmitted.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("div",{staticClass:"mx-5"},[e(v.a,{staticClass:"px-3"},[e(c.a,{attrs:{cols:"12"}},[e(h.a,{attrs:{label:"Name",outlined:"",required:""},model:{value:t.permissionType.action,callback:function(e){t.$set(t.permissionType,"action",e)},expression:"permissionType.action"}})],1)],1)],1),t._v(" "),e(l.a,{staticClass:"my-2"}),t._v(" "),e(c.a,{staticClass:"d-flex"},[e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button"},on:{click:function(e){return t.$emit("on-close-permission-type-form")}}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Cancel ")])]),t._v(" "),e(f.a),t._v(" "),t.disableForm?t._e():e("div",[t.editMode?e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Update ")])]):e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Add ")])])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);