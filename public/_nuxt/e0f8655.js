(window.webpackJsonp=window.webpackJsonp||[]).push([[72,61],{616:function(e,t,r){var content=r(617);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("29751484",content,!0,{sourceMap:!1})},617:function(e,t,r){var n=r(21)((function(i){return i[1]}));n.push([e.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex:0 1 auto;flex-wrap:wrap;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;-webkit-text-decoration:none;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),n.locals={},e.exports=n},624:function(e,t,r){"use strict";r(13),r(14),r(12),r(6),r(15),r(10),r(16);var n=r(1),o=(r(123),r(616),r(63)),l=r(7);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=Object(l.a)(o.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return e("li",[e(r,d(d({},data),{},{attrs:d(d({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),m=r(0),f=Object(m.i)("v-breadcrumbs__divider","li"),h=r(19);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}t.a=Object(l.a)(h.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(f,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),t?e.push(this.$scopedSlots.item({item:n})):e.push(this.$createElement(v,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}})},700:function(e,t,r){"use strict";r.r(t);var n=r(177),o=r(275),l=r(756),c=r(273),d=r(194),v=r(269),m=r(175),f=r(86),h=r(279),_=r(646),y=(r(39),r(288),{props:["roles","search"],data:function(){return{pagination:{},expanded:[],headers:[{text:"Name",class:"blue-grey lighten-3",value:"name"},{text:"Code",class:"blue-grey lighten-3",value:"code"},{text:"Action",class:"blue-grey lighten-3 col-2",value:"menu"}]}}}),O=r(60),component=Object(O.a)(y,(function(){var e=this,t=e._self._c;return t(l.a,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.roles,"items-per-page":25,search:e.search,expanded:e.expanded,"show-expand":""},on:{"update:expanded":function(t){e.expanded=t}},scopedSlots:e._u([{key:"item.is_active",fn:function(r){var n=r.item;return[t(o.a,[e._v(e._s(n.is_active?"active":"not active"))])]}},{key:"item.is_locked",fn:function(r){var n=r.item;return[t(o.a,[e._v(e._s(n.is_locked?"locked":"open"))])]}},{key:"item.menu",fn:function(r){var o=r.item;return[t(h.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:e._u([{key:"activator",fn:function(r){var o=r.on,l=r.attrs;return[t(n.a,e._g(e._b({attrs:{icon:""}},"v-btn",l,!1),o),[t(d.a,[e._v("mdi-menu")])],1)]}}],null,!0)},[e._v(" "),t(v.a,{staticClass:"col-12 px-0"},[t(m.a,{on:{click:function(t){return e.$emit("on-role-detail-clicked",o)}}},[t(d.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-eye")]),e._v(" "),t(f.d,[e._v("Detail")])],1),e._v(" "),t(c.a),e._v(" "),o.checked?e._e():t(m.a,{on:{click:function(t){return e.$emit("on-role-delete-clicked",o)}}},[t(d.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-delete")]),e._v(" "),t(f.d,{staticClass:"pr-9"},[e._v("Delete")])],1)],1)],1)]}},{key:"expanded-item",fn:function(r){var n=r.headers,l=r.item;return[t("td",{staticClass:"px-0 blue-grey lighten-5",attrs:{colspan:n.length}},[t(_.a,{staticClass:"blue-grey lighten-5",scopedSlots:e._u([{key:"default",fn:function(){return[t("thead",[t("tr",{staticClass:"blue-grey lighten-4"},[t("th",{staticClass:"text-center"},[t("b",[e._v("RESOURCES")])]),e._v(" "),t("th",{staticClass:"text-center"},[t("b",[e._v("ACTIONS")])])])]),e._v(" "),t("tbody",e._l(l.rolePermissions,(function(r){return t("tr",{key:r.ID},[t("td",{staticClass:"text-center"},[e._v(e._s(r.permission.resource))]),e._v(" "),t("td",{staticClass:"text-center"},e._l(r.permissionTypes,(function(r){return t(o.a,{key:r.id,staticClass:"ma-2",attrs:{close:""}},[e._v("\n                  "+e._s(r.action)+"\n                ")])})),1)])})),0)]},proxy:!0}],null,!0)})],1)]}}])})}),[],!1,null,null,null);t.default=component.exports},763:function(e,t,r){"use strict";r.r(t);var n=r(624),o=r(177),l=r(276),c=r(231),d=r(610),v=r(273),m=r(194),f=r(607),h=r(124),_=(r(38),r(39),r(288),r(1)),y=(r(13),r(14),r(12),r(6),r(15),r(10),r(16),r(700)),O=r(752),x=r(663),k=r(106);function j(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function C(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(t){Object(_.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var w={middleware:["authenticated"],components:{RoleTable:y.default,RoleForm:O.default},data:function(){return{breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/dashboard"},{text:"All Work Order",disabled:!0}],editMode:!1,deleteDialog:!1,editRoleDialogVisible:!1,roleFormVisible:!1,dispatchFormVisible:!1,roles:{},role:{},search:{name:"",concrete_type_id:null},pagination:{page:1,per_page:25}}},apollo:{roles:{query:x.a,variables:function(){var e={};return this.search.name&&(e=C(C({},e),{name:"%".concat(this.search.name,"%")})),C(C({},e),this.pagination)},fetchPolicy:"cache-and-network"}},methods:C(C({},Object(k.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onAddRoleClicked:function(){this.role={},this.roleFormVisible=!0},onRoleDetailClicked:function(e){this.roleFormVisible=!0,this.role=e},onRoleDeleteClicked:function(e){this.role=e,this.deleteDialog=!0},deleteRole:function(){var e=this;this.$apollo.mutate({mutation:x.c,variables:{id:this.role.id}}).then((function(t){t.data;e.successNotification("Role removed successfully!"),e.$apollo.queries.roles.refetch()})).catch((function(e){console.log(e)})),this.role=null,this.deleteDialog=!1},onCloseRoleForm:function(){this.role=null,this.roleFormVisible=!1,this.$apollo.queries.roles.refetch()}})},D=r(60),component=Object(D.a)(w,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"pa-5 grey lighten-3"},[t(n.a,{attrs:{roles:e.breadcrumbs},scopedSlots:e._u([{key:"divider",fn:function(){return[t(m.a,[e._v("mdi-chevron-double-right")])]},proxy:!0}])}),e._v(" "),t("div",{staticClass:"px-4 row ma-1"},[t("div",[t("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[e._v("All Roles")]),e._v(" "),t("span",{staticClass:"grey--text text--darken-1"},[e._v("All Orders Are Shown Here.")]),e._v(" "),t(h.a,{staticClass:"mt-4",attrs:{"append-icon":"mdi-magnify",label:"Search by customer name or username","single-line":"","hide-details":"",outlined:""},model:{value:e.search.name,callback:function(t){e.$set(e.search,"name",t)},expression:"search.name"}})],1),e._v(" "),t(f.a),e._v(" "),t("div",{staticClass:"pr-2"},[t("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg v-size--default black white--text lighten-5",attrs:{type:"button",icon:"mdi-home"},on:{click:e.onAddRoleClicked}},[t(m.a,{attrs:{left:"",dark:""}},[e._v(" mdi-plus-circle ")]),e._v("\n        Add Role\n      ")],1)])],1),e._v(" "),t("div",{staticClass:"px-5 py-3"},[t("div",{staticClass:"row mb-4"}),e._v(" "),t("role-table",{attrs:{roles:e.roles.data},on:{"on-role-detail-clicked":e.onRoleDetailClicked,"on-role-delete-clicked":e.onRoleDeleteClicked}})],1),e._v(" "),t("div",[t(d.a,{attrs:{width:"90%"},on:{"click:outside":e.onCloseRoleForm},model:{value:e.roleFormVisible,callback:function(t){e.roleFormVisible=t},expression:"roleFormVisible"}},[t("role-form",{attrs:{_role:e.role,editMode:e.editMode},on:{"on-close-role-form":e.onCloseRoleForm}})],1),e._v(" "),t(d.a,{attrs:{width:"500"},model:{value:e.deleteDialog,callback:function(t){e.deleteDialog=t},expression:"deleteDialog"}},[t(l.a,{staticClass:"red lighten-4"},[t(c.c,{staticClass:"text-h5 red lighten-2"},[e._v(" confirm ")]),e._v(" "),t(c.b,{staticClass:"pt-3"},[e._v("\n          Are you sure you want to delete this resource!\n        ")]),e._v(" "),t(v.a),e._v(" "),t(c.a,[t(f.a),e._v(" "),t(o.a,{attrs:{color:"primary",text:""},on:{click:e.deleteRole}},[e._v(" I accept ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);