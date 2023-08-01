(window.webpackJsonp=window.webpackJsonp||[]).push([[46,37],{638:function(e,t,n){"use strict";n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return f})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return _}));var r,o,c,l,d=n(91),m=n(60),v=Object(m.a)(r||(r=Object(d.a)(["\n  query($page: Int!, $per_page: Int!) {\n    permission_types(first: $per_page, page: $page) {\n      data {\n         id\n         action\n         is_active\n      }\n    }   \n  }\n"]))),f=Object(m.a)(o||(o=Object(d.a)(["\n  mutation($action: String!) {\n    createPermissionType(input: {action: $action}) {\n        id\n        action\n    }\n  }\n"]))),h=Object(m.a)(c||(c=Object(d.a)(["\n  mutation($id: ID!, $action: String!) {\n    updatePermissionType(input: {id: $id, action: $action}) {\n        id\n        action\n    }\n  }\n"]))),_=Object(m.a)(l||(l=Object(d.a)(["\n  mutation($id: ID!) {\n    deletePermissionType(id: $id) {\n        id\n        action\n    }   \n  }\n"])))},639:function(e,t,n){"use strict";n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return f})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return _}));var r,o,c,l,d=n(91),m=n(60),v=Object(m.a)(r||(r=Object(d.a)(["\n  query($page: Int!, $per_page: Int!) {\n    permissions(first: $per_page, page: $page) {\n      data {\n        id\n        name\n        code\n        description\n        resource\n        is_active\n     }\n    }   \n  }\n"]))),f=Object(m.a)(o||(o=Object(d.a)(["\n  mutation($name: String!, $code: String, $resource: String, $description: String) {\n    createPermission(input: {name: $name, code: $code, resource: $resource, description: $description}) {\n        id\n        name\n    }\n  }\n"]))),h=Object(m.a)(c||(c=Object(d.a)(["\n  mutation($id: ID!, $name: String!, $code: String, $resource: String, $description: String) {\n    updatePermission(input: {id: $id, name: $name, code: $code, resource: $resource, description: $description}) {\n        id\n        name\n    }\n  }\n"]))),_=Object(m.a)(l||(l=Object(d.a)(["\n  mutation($id: ID!) {\n    deletePermission(id: $id) {\n        id\n        name\n    }   \n  }\n"])))},640:function(e,t,n){"use strict";n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return f})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return _}));var r,o,c,l,d=n(91),m=n(60),v=Object(m.a)(r||(r=Object(d.a)(["\n  query($page: Int!, $per_page: Int!, $name: String) {\n    roles(first: $per_page, page: $page, name: $name) {\n      data {\n        id\n        name\n        code\n        description\n        is_active\n        rolePermissions {\n          permissionTypes {\n            id\n            action\n          }\n          permission {\n            id\n            name\n            resource\n          }\n        }\n      }\n    }   \n  }\n"]))),f=Object(m.a)(o||(o=Object(d.a)(["\n  mutation($name: String!, $code: String, $rolePermissions: CreateRolePermissionHasMany) {\n    createRole(input: {name: $name, code: $code, rolePermissions: $rolePermissions}) {\n        id\n        name\n    }\n  }\n"]))),h=Object(m.a)(c||(c=Object(d.a)(["\n  mutation($id: ID!, $name: String!, $code: String, $rolePermissions: CreateRolePermissionHasMany) {\n    updateRole(input: {id: $id, name: $name, code: $code, rolePermissions: $rolePermissions}) {\n        id\n        name\n    }\n  }\n"]))),_=Object(m.a)(l||(l=Object(d.a)(["\n  mutation($id: ID!) {\n    deletePermission(id: $id) {\n        id\n        name\n    }   \n  }\n"])))},673:function(e,t,n){"use strict";n.r(t);var r=n(177),o=n(268),c=n(714),l=n(267),d=n(192),m=n(264),v=n(175),f=n(84),h=n(272),_=n(649),y=(n(38),n(279),{props:["roles","search"],data:function(){return{pagination:{},expanded:[],headers:[{text:"Name",class:"blue-grey lighten-3",value:"name"},{text:"Code",class:"blue-grey lighten-3",value:"code"},{text:"Action",class:"blue-grey lighten-3 col-2",value:"menu"}]}}}),$=n(90),component=Object($.a)(y,(function(){var e=this,t=e._self._c;return t(c.a,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.roles,"items-per-page":25,search:e.search,expanded:e.expanded,"show-expand":""},on:{"update:expanded":function(t){e.expanded=t}},scopedSlots:e._u([{key:"item.is_active",fn:function(n){var r=n.item;return[t(o.a,[e._v(e._s(r.is_active?"active":"not active"))])]}},{key:"item.is_locked",fn:function(n){var r=n.item;return[t(o.a,[e._v(e._s(r.is_locked?"locked":"open"))])]}},{key:"item.menu",fn:function(n){var o=n.item;return[t(h.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,c=n.attrs;return[t(r.a,e._g(e._b({attrs:{icon:""}},"v-btn",c,!1),o),[t(d.a,[e._v("mdi-menu")])],1)]}}],null,!0)},[e._v(" "),t(m.a,{staticClass:"col-12 px-0"},[t(v.a,{on:{click:function(t){return e.$emit("on-role-detail-clicked",o)}}},[t(d.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-eye")]),e._v(" "),t(f.c,[e._v("Detail")])],1),e._v(" "),t(l.a),e._v(" "),o.checked?e._e():t(v.a,{on:{click:function(t){return e.$emit("on-role-delete-clicked",o)}}},[t(d.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-delete")]),e._v(" "),t(f.c,{staticClass:"pr-9"},[e._v("Delete")])],1)],1)],1)]}},{key:"expanded-item",fn:function(n){var r=n.headers,c=n.item;return[t("td",{staticClass:"px-0 blue-grey lighten-5",attrs:{colspan:r.length}},[t(_.a,{staticClass:"blue-grey lighten-5",scopedSlots:e._u([{key:"default",fn:function(){return[t("thead",[t("tr",{staticClass:"blue-grey lighten-4"},[t("th",{staticClass:"text-center"},[t("b",[e._v("RESOURCES")])]),e._v(" "),t("th",{staticClass:"text-center"},[t("b",[e._v("ACTIONS")])])])]),e._v(" "),t("tbody",e._l(c.rolePermissions,(function(n){return t("tr",{key:n.ID},[t("td",{staticClass:"text-center"},[e._v(e._s(n.permission.resource))]),e._v(" "),t("td",{staticClass:"text-center"},e._l(n.permissionTypes,(function(n){return t(o.a,{key:n.id,staticClass:"ma-2",attrs:{close:""}},[e._v("\n                  "+e._s(n.action)+"\n                ")])})),1)])})),0)]},proxy:!0}],null,!0)})],1)]}}])})}),[],!1,null,null,null);t.default=component.exports},674:function(e,t,n){"use strict";n.r(t);var r=n(269),o=n(278),c=n(642),l=n(660),d=n(267),m=n(662),v=n(192),f=n(712),h=n(649),_=n(596),y=n(121),$=(n(39),n(13),n(14),n(12),n(16),n(17),n(1)),O=(n(6),n(10),n(230),n(106)),C=n(639),x=n(638),k=n(640);function j(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function P(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(t){Object($.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var w={props:["_role"],data:function(){return{selected:[],permissions:{},permission_types:{},editMode:!1,valid:!1,role:{},rolePermissions:{create:[]}}},apollo:{permission_types:{query:x.a,variables:function(){return{page:1,per_page:1e4}},fetchPolicy:"cache-and-network"},permissions:{query:C.a,variables:function(){return{page:1,per_page:1e4}},fetchPolicy:"cache-and-network"}},computed:{disableForm:function(){var e;return!this.editMode&&null!=(null===(e=this._role)||void 0===e?void 0:e.id)}},methods:P(P({},Object(O.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(e){this.prepareRolePermission(),this.editMode?this.updateRole(e):this.registerRole(e)},prepareRolePermission:function(){var e=this;this.selected.forEach((function(t){var n=e.rolePermissions.create.findIndex((function(e){return parseInt(e.permission_id)==parseInt(t.permission_id)}));-1!=n?e.rolePermissions.create[n].rolePermissionTypes.create.push({permission_type_id:parseInt(t.permission_type_id)}):e.rolePermissions.create.push({permission_id:parseInt(t.permission_id),rolePermissionTypes:{create:[{permission_type_id:parseInt(t.permission_type_id)}]}})}))},registerRole:function(e){var t=this;this.role.rolePermissions=this.rolePermissions,this.$apollo.mutate({mutation:k.b,variables:this.role}).then((function(n){n.data;t.successNotification("Role  registered successfully!"),e.target.reset(),t.$emit("on-close-role-form")})).catch((function(e){console.log(e)}))},updateRole:function(e){var t=this;this.role.rolePermissions=this.rolePermissions,this.$apollo.mutate({mutation:k.d,variables:this.role}).then((function(n){n.data;t.successNotification("Role  updated successfully!"),e.target.reset(),t.$emit("on-close-role-form")})).catch((function(e){console.log(e)}))}}),watch:{$props:{handler:function(){var e,t=this;null!==(e=this._role)&&void 0!==e&&e.id&&(this.editMode=!1,this.role=P({},this._role),this._role.rolePermissions.forEach((function(e){e.permissionTypes.forEach((function(n){t.selected.push({permission_id:e.permission.id,permission_type_id:n.id})}))})))},deep:!0,immediate:!0}}},S=n(90),component=Object(S.a)(w,(function(){var e=this,t=e._self._c;return t(r.a,[t("div",{staticClass:"grey lighten-2 pa-2 pb-4"},[t(f.a,{staticClass:"mx-0"},[t("div",[t(o.c,{staticClass:"text-h5 pb-0"},[e._v("\n          Role Registration Form\n        ")]),e._v(" "),t("span",{staticClass:"ml-4"},[e._v("registration form")])],1),e._v(" "),t(_.a),e._v(" "),e.disableForm?t("button",{staticClass:"v-btn ma-5 mt-6 v-btn--is-elevated v-btn--has-bg theme--light pl-1 black v-size--default white--text",attrs:{icon:"mdi-pen"},on:{click:function(t){e.editMode=!0}}},[t(v.a,{attrs:{right:"",dark:"",medium:""}},[e._v(" mdi-pen ")]),e._v(" "),t("span",{staticClass:"v-btn__content text-white ml-1"},[e._v(" Edit ")])],1):e._e()],1)],1),e._v(" "),t(m.a,{staticClass:"mt-4 p-4",attrs:{disabled:e.disableForm},on:{submit:function(t){return t.preventDefault(),e.onFormSubmitted.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t("div",{staticClass:"mx-5"},[t(f.a,{staticClass:"px-3"},[t(l.a,{attrs:{cols:"12",md:"6"}},[t(y.a,{attrs:{label:"Name",outlined:"",required:""},model:{value:e.role.name,callback:function(t){e.$set(e.role,"name",t)},expression:"role.name"}})],1),e._v(" "),t(l.a,{attrs:{cols:"12",md:"6"}},[t(y.a,{attrs:{label:"Code",outlined:"",required:""},model:{value:e.role.code,callback:function(t){e.$set(e.role,"code",t)},expression:"role.code"}})],1)],1)],1),e._v(" "),t(d.a,{staticClass:"my-2"}),e._v(" "),t(h.a,{staticClass:"blue-grey lighten-5",scopedSlots:e._u([{key:"default",fn:function(){return[t("thead",[t("tr",{staticClass:"blue-grey lighten-4"},[t("th",{staticClass:"text-center blue-grey lighten-2",staticStyle:{"min-width":"250px"}},[t("b",[e._v("PERMISSIONS")])]),e._v(" "),e._l(e.permission_types.data,(function(n){return t("th",{key:n.id,staticClass:"text-center"},[t("b",[e._v(e._s(n.action))])])}))],2)]),e._v(" "),t("tbody",e._l(e.permissions.data,(function(n){return t("tr",{key:n.id},[t("td",{staticClass:"text-center blue-grey lighten-3"},[e._v(e._s(n.name))]),e._v(" "),e._l(e.permission_types.data,(function(r){return t("td",{key:r.id,staticClass:"text-center"},[t(c.a,{staticClass:"text-center",attrs:{value:{permission_type_id:r.id,permission_id:n.id}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)}))],2)})),0)]},proxy:!0}])}),e._v(" "),t(d.a,{staticClass:"mb-2"}),e._v(" "),t(l.a,{staticClass:"d-flex"},[t("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button"},on:{click:function(t){return e.$emit("on-close-role-form")}}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Cancel ")])]),e._v(" "),t(_.a),e._v(" "),e.disableForm?e._e():t("div",[e.editMode?t("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Update ")])]):t("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Add ")])])])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},721:function(e,t,n){"use strict";n.r(t);var r=n(615),o=n(177),c=n(269),l=n(278),d=n(626),m=n(267),v=n(192),f=n(596),h=n(121),_=(n(39),n(38),n(279),n(1)),y=(n(13),n(14),n(12),n(6),n(16),n(10),n(17),n(673)),$=n(674),O=n(640),C=n(106);function x(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(t){Object(_.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var j={middleware:["authenticated"],components:{RoleTable:y.default,RoleForm:$.default},data:function(){return{breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/dashboard"},{text:"All Work Order",disabled:!0}],editMode:!1,deleteDialog:!1,editRoleDialogVisible:!1,roleFormVisible:!1,dispatchFormVisible:!1,roles:{},role:{},search:{name:"",concrete_type_id:null},pagination:{page:1,per_page:25}}},apollo:{roles:{query:O.a,variables:function(){var e={};return this.search.name&&(e=k(k({},e),{name:"%".concat(this.search.name,"%")})),k(k({},e),this.pagination)},fetchPolicy:"cache-and-network"}},methods:k(k({},Object(C.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onAddRoleClicked:function(){this.role={},this.roleFormVisible=!0},onRoleDetailClicked:function(e){this.roleFormVisible=!0,this.role=e},onRoleDeleteClicked:function(e){this.role=e,this.deleteDialog=!0},deleteRole:function(){var e=this;this.$apollo.mutate({mutation:O.c,variables:{id:this.role.id}}).then((function(t){t.data;e.successNotification("Role removed successfully!"),e.$apollo.queries.roles.refetch()})).catch((function(e){console.log(e)})),this.role=null,this.deleteDialog=!1},onCloseRoleForm:function(){this.role=null,this.roleFormVisible=!1,this.$apollo.queries.roles.refetch()}})},P=n(90),component=Object(P.a)(j,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"pa-5 grey lighten-3"},[t(r.a,{attrs:{roles:e.breadcrumbs},scopedSlots:e._u([{key:"divider",fn:function(){return[t(v.a,[e._v("mdi-chevron-double-right")])]},proxy:!0}])}),e._v(" "),t("div",{staticClass:"px-4 row ma-1"},[t("div",[t("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[e._v("All Roles")]),e._v(" "),t("span",{staticClass:"grey--text text--darken-1"},[e._v("All Orders Are Shown Here.")]),e._v(" "),t(h.a,{staticClass:"mt-4",attrs:{"append-icon":"mdi-magnify",label:"Search by customer name or username","single-line":"","hide-details":"",outlined:""},model:{value:e.search.name,callback:function(t){e.$set(e.search,"name",t)},expression:"search.name"}})],1),e._v(" "),t(f.a),e._v(" "),t("div",{staticClass:"pr-2"},[t("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg v-size--default black white--text lighten-5",attrs:{type:"button",icon:"mdi-home"},on:{click:e.onAddRoleClicked}},[t(v.a,{attrs:{left:"",dark:""}},[e._v(" mdi-plus-circle ")]),e._v("\n        Add Role\n      ")],1)])],1),e._v(" "),t("div",{staticClass:"px-5 py-3"},[t("div",{staticClass:"row mb-4"}),e._v(" "),t("role-table",{attrs:{roles:e.roles.data},on:{"on-role-detail-clicked":e.onRoleDetailClicked,"on-role-delete-clicked":e.onRoleDeleteClicked}})],1),e._v(" "),t("div",[t(d.a,{attrs:{width:"90%"},on:{"click:outside":e.onCloseRoleForm},model:{value:e.roleFormVisible,callback:function(t){e.roleFormVisible=t},expression:"roleFormVisible"}},[t("role-form",{attrs:{_role:e.role,editMode:e.editMode},on:{"on-close-role-form":e.onCloseRoleForm}})],1),e._v(" "),t(d.a,{attrs:{width:"500"},model:{value:e.deleteDialog,callback:function(t){e.deleteDialog=t},expression:"deleteDialog"}},[t(c.a,{staticClass:"red lighten-4"},[t(l.c,{staticClass:"text-h5 red lighten-2"},[e._v(" confirm ")]),e._v(" "),t(l.b,{staticClass:"pt-3"},[e._v("\n          Are you sure you want to delete this resource!\n        ")]),e._v(" "),t(m.a),e._v(" "),t(l.a,[t(f.a),e._v(" "),t(o.a,{attrs:{color:"primary",text:""},on:{click:e.deleteRole}},[e._v(" I accept ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);