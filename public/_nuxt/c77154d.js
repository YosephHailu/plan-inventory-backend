(window.webpackJsonp=window.webpackJsonp||[]).push([[82,31,65],{617:function(e,t,r){var content=r(618);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(23).default)("29751484",content,!0,{sourceMap:!1})},618:function(e,t,r){var n=r(22)((function(i){return i[1]}));n.push([e.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex:0 1 auto;flex-wrap:wrap;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;-webkit-text-decoration:none;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),n.locals={},e.exports=n},626:function(e,t,r){"use strict";r(13),r(14),r(11),r(6),r(16),r(10),r(17);var n=r(1),o=(r(124),r(617),r(63)),c=r(7);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=Object(c.a)(o.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return e("li",[e(r,d(d({},data),{},{attrs:d(d({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),v=r(0),f=Object(v.j)("v-breadcrumbs__divider","li"),h=r(19);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}t.a=Object(c.a)(h.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(f,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),t?e.push(this.$scopedSlots.item({item:n})):e.push(this.$createElement(m,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}})},670:function(e,t,r){"use strict";r.d(t,"a",(function(){return v})),r.d(t,"b",(function(){return f})),r.d(t,"d",(function(){return h})),r.d(t,"c",(function(){return _}));var n,o,c,l,d=r(93),m=r(61),v=Object(m.a)(n||(n=Object(d.a)(["\n  query($page: Int!, $per_page: Int!) {\n    permissions(first: $per_page, page: $page) {\n      data {\n        id\n        name\n        code\n        description\n        resource\n        is_active\n     }\n    }   \n  }\n"]))),f=Object(m.a)(o||(o=Object(d.a)(["\n  mutation($name: String!, $code: String, $resource: String, $description: String) {\n    createPermission(input: {name: $name, code: $code, resource: $resource, description: $description}) {\n        id\n        name\n    }\n  }\n"]))),h=Object(m.a)(c||(c=Object(d.a)(["\n  mutation($id: ID!, $name: String!, $code: String, $resource: String, $description: String) {\n    updatePermission(input: {id: $id, name: $name, code: $code, resource: $resource, description: $description}) {\n        id\n        name\n    }\n  }\n"]))),_=Object(m.a)(l||(l=Object(d.a)(["\n  mutation($id: ID!) {\n    deletePermission(id: $id) {\n        id\n        name\n    }   \n  }\n"])))},709:function(e,t,r){"use strict";r.r(t);var n=r(177),o=r(276),c=r(798),l=r(274),d=r(195),m=r(270),v=r(175),f=r(87),h=r(280),_=(r(36),r(290),{props:["permissions","search"],data:function(){return{pagination:{},expanded:[],headers:[{text:"Name",class:"text-center white--text text-uppercase py-2 blue",value:"name"},{text:"Code",class:"text-center white--text text-uppercase py-2 blue",value:"code"},{text:"Resource",class:"text-center white--text text-uppercase py-2 blue",value:"resource"},{text:"Description",class:"text-center white--text text-uppercase py-2 blue",value:"description"},{text:"Action",class:"blue-grey lighten-3 col-2",value:"menu"}]}}}),O=r(51),component=Object(O.a)(_,(function(){var e=this,t=e._self._c;return t(c.a,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.permissions,"items-per-page":25,search:e.search},scopedSlots:e._u([{key:"item.is_active",fn:function(r){var n=r.item;return[t(o.a,[e._v(e._s(n.is_active?"active":"not active"))])]}},{key:"item.is_locked",fn:function(r){var n=r.item;return[t(o.a,[e._v(e._s(n.is_locked?"locked":"open"))])]}},{key:"item.menu",fn:function(r){var o=r.item;return[t(h.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:e._u([{key:"activator",fn:function(r){var o=r.on,c=r.attrs;return[t(n.a,e._g(e._b({attrs:{icon:""}},"v-btn",c,!1),o),[t(d.a,[e._v("mdi-menu")])],1)]}}],null,!0)},[e._v(" "),t(m.a,{staticClass:"col-12 px-0"},[t(v.a,{on:{click:function(t){return e.$emit("on-permission-detail-clicked",o)}}},[t(d.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-eye")]),e._v(" "),t(f.d,[e._v("Detail")])],1),e._v(" "),t(l.a),e._v(" "),o.checked?e._e():t(v.a,{on:{click:function(t){return e.$emit("on-permission-delete-clicked",o)}}},[t(d.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-delete")]),e._v(" "),t(f.d,{staticClass:"pr-9"},[e._v("Delete")])],1)],1)],1)]}}])})}),[],!1,null,null,null);t.default=component.exports},710:function(e,t,r){"use strict";r.r(t);var n=r(277),o=r(232),c=r(695),l=r(274),d=r(696),m=r(195),v=r(796),f=r(609),h=r(125),_=(r(39),r(14),r(88),r(13),r(11),r(6),r(16),r(10),r(17),r(1)),O=r(108),y=r(670);function x(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(t){Object(_.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var w={props:["_permission"],data:function(){return{editMode:!1,valid:!1,permission:{}}},computed:{disableForm:function(){var e;return!this.editMode&&null!=(null===(e=this._permission)||void 0===e?void 0:e.id)}},methods:j(j({},Object(O.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(e){this.editMode?this.updateConcrete(e):this.registerConcrete(e)},registerConcrete:function(e){var t=this;this.$apollo.mutate({mutation:y.b,variables:this.permission}).then((function(r){r.data;t.successNotification("Permission  registered successfully!"),e.target.reset(),t.$emit("on-close-permission-form")})).catch((function(e){console.log(e)}))},updateConcrete:function(e){var t=this;this.$apollo.mutate({mutation:y.d,variables:this.permission}).then((function(r){r.data;t.successNotification("Permission  updated successfully!"),e.target.reset(),t.$emit("on-close-permission-form")})).catch((function(e){console.log(e)}))}}),watch:{$props:{handler:function(){this._permission&&(this.editMode=!1,this.permission=j({},this._permission))},deep:!0,immediate:!0}}},P=r(51),component=Object(P.a)(w,(function(){var e=this,t=e._self._c;return t(n.a,[t("div",{staticClass:"blue lighten-1 white--text pa-2 pb-6"},[t(v.a,{staticClass:"mx-0"},[t("div",[t(o.c,{staticClass:"text-h5 pb-0"},[e._v("\n          Permission  Registration Form\n        ")]),e._v(" "),t("span",{staticClass:"ml-4"},[e._v("registration form")])],1),e._v(" "),t(f.a),e._v(" "),e.disableForm?t("button",{staticClass:"v-btn ma-5 mt-6 v-btn--is-elevated v-btn--has-bg theme--light pl-1 black v-size--default white--text",attrs:{icon:"mdi-pen"},on:{click:function(t){e.editMode=!0}}},[t(m.a,{attrs:{right:"",dark:"",medium:""}},[e._v(" mdi-pen ")]),e._v(" "),t("span",{staticClass:"v-btn__content text-white ml-1"},[e._v(" Edit ")])],1):e._e()],1)],1),e._v(" "),t(d.a,{staticClass:"mt-4 p-4",attrs:{disabled:e.disableForm},on:{submit:function(t){return t.preventDefault(),e.onFormSubmitted.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t("div",{staticClass:"mx-5"},[t(v.a,{staticClass:"px-3"},[t(c.a,{attrs:{cols:"12"}},[t(h.a,{attrs:{label:"Name",outlined:"",required:""},model:{value:e.permission.name,callback:function(t){e.$set(e.permission,"name",t)},expression:"permission.name"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12",md:"6"}},[t(h.a,{attrs:{label:"Code",outlined:"",required:""},model:{value:e.permission.code,callback:function(t){e.$set(e.permission,"code",t)},expression:"permission.code"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12",md:"6"}},[t(h.a,{attrs:{label:"Resource",outlined:"",required:""},model:{value:e.permission.resource,callback:function(t){e.$set(e.permission,"resource",t)},expression:"permission.resource"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12"}},[t(h.a,{attrs:{label:"Description",outlined:"",required:""},model:{value:e.permission.description,callback:function(t){e.$set(e.permission,"description",t)},expression:"permission.description"}})],1)],1)],1),e._v(" "),t(l.a,{staticClass:"my-2"}),e._v(" "),t(c.a,{staticClass:"d-flex"},[t("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button"},on:{click:function(t){return e.$emit("on-close-permission-form")}}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Cancel ")])]),e._v(" "),t(f.a),e._v(" "),e.disableForm?e._e():t("div",[e.editMode?t("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Update ")])]):t("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Add ")])])])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},804:function(e,t,r){"use strict";r.r(t);var n=r(626),o=r(177),c=r(277),l=r(232),d=r(612),m=r(274),v=r(195),f=r(609),h=r(1),_=(r(39),r(36),r(290),r(13),r(14),r(11),r(6),r(16),r(10),r(17),r(709)),O=r(710),y=r(670),x=r(108);function j(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(t){Object(h.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var P={middleware:["authenticated"],components:{PermissionTable:_.default,PermissionForm:O.default},data:function(){var e;return e={breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/dashboard"},{text:"All Work Order",disabled:!0}],search:"",editMode:!1,deleteDialog:!1,editPermissionDialogVisible:!1,permissionFormVisible:!1,dispatchFormVisible:!1,permissions:{},permission:{}},Object(h.a)(e,"search",{name:"",concrete_type_id:null}),Object(h.a)(e,"pagination",{page:1,per_page:25}),e},apollo:{permissions:{query:y.a,variables:function(){var e={};return this.search.name&&(e=w(w({},e),{name:"%".concat(this.search.name,"%")})),w(w({},e),this.pagination)},fetchPolicy:"cache-and-network"}},methods:w(w({},Object(x.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onAddPermissionClicked:function(){this.permission={},this.permissionFormVisible=!0},onPermissionDetailClicked:function(e){this.permissionFormVisible=!0,this.permission=e},onPermissionDeleteClicked:function(e){this.permission=e,this.deleteDialog=!0},deletePermission:function(){var e=this;this.$apollo.mutate({mutation:y.c,variables:{id:this.permission.id}}).then((function(t){t.data;e.successNotification("Permission removed successfully!"),e.$apollo.queries.permissions.refetch()})).catch((function(e){console.log(e)})),this.permission=null,this.deleteDialog=!1},onClosePermissionForm:function(){this.permission=null,this.permissionFormVisible=!1,this.$apollo.queries.permissions.refetch()}})},k=r(51),component=Object(k.a)(P,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"pa-5 grey lighten-3"},[t(n.a,{attrs:{permissions:e.breadcrumbs},scopedSlots:e._u([{key:"divider",fn:function(){return[t(v.a,[e._v("mdi-chevron-double-right")])]},proxy:!0}])}),e._v(" "),t("div",{staticClass:"px-4 row ma-1"},[e._m(0),e._v(" "),t(f.a),e._v(" "),t("div",{staticClass:"pr-2"},[t("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg v-size--default black white--text lighten-5",attrs:{type:"button",icon:"mdi-home"},on:{click:e.onAddPermissionClicked}},[t(v.a,{attrs:{left:"",dark:""}},[e._v(" mdi-plus-circle ")]),e._v("\n        Add Permission\n      ")],1)])],1),e._v(" "),t("div",{staticClass:"px-5 py-3"},[t("div",{staticClass:"row mb-4"}),e._v(" "),t("permission-table",{attrs:{permissions:e.permissions.data},on:{"on-permission-detail-clicked":e.onPermissionDetailClicked,"on-permission-delete-clicked":e.onPermissionDeleteClicked}})],1),e._v(" "),t("div",[t(d.a,{attrs:{width:"85%"},on:{"click:outside":e.onClosePermissionForm},model:{value:e.permissionFormVisible,callback:function(t){e.permissionFormVisible=t},expression:"permissionFormVisible"}},[t("permission-form",{attrs:{_permission:e.permission,editMode:e.editMode},on:{"on-close-permission-form":e.onClosePermissionForm}})],1),e._v(" "),t(d.a,{attrs:{width:"500"},model:{value:e.deleteDialog,callback:function(t){e.deleteDialog=t},expression:"deleteDialog"}},[t(c.a,{staticClass:"red lighten-4"},[t(l.c,{staticClass:"text-h5 red lighten-2"},[e._v(" confirm ")]),e._v(" "),t(l.b,{staticClass:"pt-3"},[e._v("\n          Are you sure you want to delete this resource!\n        ")]),e._v(" "),t(m.a),e._v(" "),t(l.a,[t(f.a),e._v(" "),t(o.a,{attrs:{color:"primary",text:""},on:{click:e.deletePermission}},[e._v(" I accept ")])],1)],1)],1)],1)],1)}),[function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[e._v("All Permissions")]),e._v(" "),t("span",{staticClass:"grey--text text--darken-1"},[e._v("All Orders Are Shown Here.")])])}],!1,null,null,null);t.default=component.exports}}]);