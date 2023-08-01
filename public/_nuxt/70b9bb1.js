(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{640:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return v})),n.d(t,"d",(function(){return $})),n.d(t,"c",(function(){return _}));var r,o,l,c,d=n(91),m=n(60),f=Object(m.a)(r||(r=Object(d.a)(["\n  query($page: Int!, $per_page: Int!, $name: String) {\n    roles(first: $per_page, page: $page, name: $name) {\n      data {\n        id\n        name\n        code\n        description\n        is_active\n        rolePermissions {\n          permissionTypes {\n            id\n            action\n          }\n          permission {\n            id\n            name\n            resource\n          }\n        }\n      }\n    }   \n  }\n"]))),v=Object(m.a)(o||(o=Object(d.a)(["\n  mutation($name: String!, $code: String, $rolePermissions: CreateRolePermissionHasMany) {\n    createRole(input: {name: $name, code: $code, rolePermissions: $rolePermissions}) {\n        id\n        name\n    }\n  }\n"]))),$=Object(m.a)(l||(l=Object(d.a)(["\n  mutation($id: ID!, $name: String!, $code: String, $rolePermissions: CreateRolePermissionHasMany) {\n    updateRole(input: {id: $id, name: $name, code: $code, rolePermissions: $rolePermissions}) {\n        id\n        name\n    }\n  }\n"]))),_=Object(m.a)(c||(c=Object(d.a)(["\n  mutation($id: ID!) {\n    deletePermission(id: $id) {\n        id\n        name\n    }   \n  }\n"])))},651:function(e,t,n){"use strict";n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return $})),n.d(t,"c",(function(){return _})),n.d(t,"d",(function(){return h}));var r,o,l,c,d,m=n(91),f=n(60),v=Object(f.a)(r||(r=Object(m.a)(["\n  query($page: Int!, $per_page: Int!, $name: String) {\n    users(first: $per_page, page: $page, name: $name) {\n      data {\n        id\n        name\n        email\n        username\n        is_active\n        is_locked\n        last_seen\n        roles {\n          id\n          name\n        }\n        createdBy {\n            id\n            name\n            username\n        }\n      }\n    }   \n  }\n"]))),$=Object(f.a)(o||(o=Object(m.a)(["\n  mutation register($email: String!, $name: String!, $username: String!, $password: String!, $password_confirmation: String!, $roles: [ID!]) {\n    register (input: {email: $email, name: $name, username: $username, password: $password, password_confirmation: $password_confirmation, roles: $roles}) {\n        token\n    }\n  }\n"]))),_=Object(f.a)(l||(l=Object(m.a)(["\n  mutation updateUser($id: ID!, $name: String!, $password: String!, $password_confirmation: String!, $roles: [ID!]) {\n    updateUser (input: {id: $id, name: $name, password: $password, password_confirmation: $password_confirmation, roles: $roles}) {\n        name\n    }\n  }\n"]))),h=Object(f.a)(c||(c=Object(m.a)(["\n  mutation updateUser($id: ID!, $is_active: Boolean!) {\n    updateActiveStatus (input: {id: $id, is_active: $is_active}) {\n      id\n      name\n      is_active\n    }\n  }\n"])));Object(f.a)(d||(d=Object(m.a)(["\n  mutation($id: ID!) {\n    deleteUser(id: $id) {\n      id\n    }\n  }\n"])))},676:function(e,t,n){"use strict";n.r(t);var r=n(269),o=n(278),l=n(660),c=n(267),d=n(662),m=n(192),f=n(712),v=n(581),$=n(596),_=n(121),h=(n(39),n(13),n(14),n(12),n(6),n(16),n(10),n(17),n(1)),w=(n(69),n(106)),O=n(651);function j(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(t){Object(h.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var P={props:["_user"],data:function(){return{editMode:!1,valid:!1,user:{roles:null},roles:{data:[]},password_rules:[function(e){return!!e||"Password field is required"}],password_confirmation_rules:[function(e){return!!e||"Password confirmation field is required"}]}},computed:{disableForm:function(){var e;return!this.editMode&&null!=(null===(e=this._user)||void 0===e?void 0:e.id)},formattedRoles:function(){return this.roles.data.map((function(e){return e.id=parseInt(e.id),e}))}},apollo:{roles:{query:n(640).a,variables:function(){return{page:1,per_page:1e3}},fetchPolicy:"cache-and-network"}},methods:y(y({},Object(w.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(e){this.$refs.form.validate()&&(this.editMode?this.updateUser(e):this.registerUser(e))},registerUser:function(e){var t=this;this.$apollo.mutate({mutation:O.b,variables:this.user}).then((function(n){n.data;t.successNotification("User registered successfully!"),e.target.reset(),t.$emit("on-close-user-form")})).catch((function(e){console.log(e)}))},updateUser:function(e){var t=this;this.$apollo.mutate({mutation:O.c,variables:this.user}).then((function(n){n.data;t.successNotification("User updated successfully!"),e.target.reset(),t.$emit("on-close-user-form")})).catch((function(e){console.log(e)}))}}),watch:{$props:{handler:function(){var e;null!==(e=this._user)&&void 0!==e&&e.id?(this.user=y({},this._user),this.user.roles=this.user.roles.map((function(e){return parseInt(e.id)}))):this.user={}},deep:!0,immediate:!0}}},S=n(90),component=Object(S.a)(P,(function(){var e=this,t=e._self._c;return t(r.a,[t("div",{staticClass:"grey lighten-2 pa-2 pb-4"},[t(f.a,{staticClass:"mx-0"},[t("div",[t(o.c,{staticClass:"text-h5 pb-0"},[e._v("\n          User Registration Form\n        ")]),e._v(" "),t("span",{staticClass:"ml-4"},[e._v("registration form")])],1),e._v(" "),t($.a),e._v(" "),e.disableForm?t("button",{staticClass:"v-btn ma-5 mt-6 v-btn--is-elevated v-btn--has-bg theme--light pl-1 black v-size--default white--text",attrs:{icon:"mdi-pen"},on:{click:function(t){e.editMode=!0}}},[t(m.a,{attrs:{right:"",dark:"",medium:""}},[e._v(" mdi-pen ")]),e._v(" "),t("span",{staticClass:"v-btn__content text-white ml-1"},[e._v(" Edit ")])],1):e._e()],1)],1),e._v(" "),t(d.a,{ref:"form",staticClass:"mt-4 p-4",attrs:{disabled:e.disableForm},on:{submit:function(t){return t.preventDefault(),e.onFormSubmitted.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t("div",{staticClass:"mx-5"},[t(f.a,{staticClass:"px-3"},[t(l.a,{attrs:{cols:"12"}},[t(_.a,{attrs:{label:"Full Name",outlined:"",required:""},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"6"}},[t(_.a,{attrs:{label:"Email",disabled:e.editMode,outlined:"",required:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"6"}},[t(_.a,{attrs:{label:"Username",disabled:e.editMode,outlined:"",required:""},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"6"}},[t(_.a,{attrs:{label:"Password",type:"password",outlined:"",required:"",rules:e.password_rules},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"6"}},[t(_.a,{attrs:{label:"Confirm Password",type:"password",outlined:"",required:"",rules:e.password_confirmation_rules},model:{value:e.user.password_confirmation,callback:function(t){e.$set(e.user,"password_confirmation",t)},expression:"user.password_confirmation"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"6"}},[t(v.a,{attrs:{items:e.formattedRoles,"item-value":"id","item-text":"name",label:"Select Role",chips:"",multiple:"",outlined:"",required:""},model:{value:e.user.roles,callback:function(t){e.$set(e.user,"roles",t)},expression:"user.roles"}})],1)],1)],1),e._v(" "),t(c.a,{staticClass:"my-2"}),e._v(" "),t(l.a,{staticClass:"d-flex"},[t("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button"},on:{click:function(t){return e.$emit("on-close-user-form")}}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Cancel ")])]),e._v(" "),t($.a),e._v(" "),e.disableForm?e._e():t("div",[e.editMode?t("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Update ")])]):t("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Add ")])])])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);