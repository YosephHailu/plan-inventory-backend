(window.webpackJsonp=window.webpackJsonp||[]).push([[79,72],{618:function(e,t,r){var content=r(619);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(22).default)("29751484",content,!0,{sourceMap:!1})},619:function(e,t,r){var n=r(21)((function(i){return i[1]}));n.push([e.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex:0 1 auto;flex-wrap:wrap;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;-webkit-text-decoration:none;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),n.locals={},e.exports=n},626:function(e,t,r){"use strict";r(13),r(14),r(12),r(6),r(16),r(10),r(17);var n=r(1),c=(r(123),r(618),r(64)),o=r(7);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v=Object(o.a)(c.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),r=t.tag,data=t.data;return e("li",[e(r,d(d({},data),{},{attrs:d(d({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),m=r(0),h=Object(m.j)("v-breadcrumbs__divider","li"),f=r(19);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}t.a=Object(o.a)(f.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(h,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),t?e.push(this.$scopedSlots.item({item:n})):e.push(this.$createElement(v,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}})},708:function(e,t,r){"use strict";r.r(t);var n=r(177),c=r(275),o=r(782),l=r(273),d=r(194),v=r(269),m=r(175),h=r(86),f=r(279),_=(r(39),r(289),r(38),{props:["users","search"],data:function(){return{pagination:{},expanded:[],headers:[{text:"Full Name",class:"text-center white--text text-uppercase py-2 blue",value:"name"},{text:"Email",align:"start",value:"email",class:"text-center white--text text-uppercase py-2 blue"},{text:"Username",align:"start",value:"username",class:"text-center white--text text-uppercase py-2 blue"},{text:"Is Active",align:"start",value:"is_active",class:"text-center white--text text-uppercase py-2 blue"},{text:"Is Locked",align:"start",value:"is_locked",class:"text-center white--text text-uppercase py-2 blue"},{text:"Last Seen",align:"start",value:"last_seen",class:"text-center white--text text-uppercase py-2 blue"},{text:"Project",align:"start",value:"project.name",class:"text-center white--text text-uppercase py-2 blue"},{text:"Wherehouse",align:"start",value:"whereHouse.name",class:"text-center white--text text-uppercase py-2 blue"},{text:"Roles",align:"start",value:"roles",class:"text-center white--text text-uppercase py-2 blue"},{text:"Action",class:"blue-grey lighten-3 col-1",value:"menu"}]}}}),x=r(60),component=Object(x.a)(_,(function(){var e=this,t=e._self._c;return t(o.a,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.users,"items-per-page":25,search:e.search},scopedSlots:e._u([{key:"item.is_active",fn:function(r){var n=r.item;return[t(c.a,[e._v(e._s(n.is_active?"active":"not active"))])]}},{key:"item.is_locked",fn:function(r){var n=r.item;return[t(c.a,[e._v(e._s(n.is_locked?"Yes":"No"))])]}},{key:"item.roles",fn:function(r){var n=r.item;return e._l(n.roles,(function(r){return t(c.a,{key:r.id,attrs:{color:"blue-grey lighten-3"}},[e._v(e._s(r.name))])}))}},{key:"item.menu",fn:function(r){var c=r.item;return[t(f.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:e._u([{key:"activator",fn:function(r){var c=r.on,o=r.attrs;return[t(n.a,e._g(e._b({attrs:{icon:""}},"v-btn",o,!1),c),[t(d.a,[e._v("mdi-menu")])],1)]}}],null,!0)},[e._v(" "),t(v.a,{staticClass:"col-12 px-0"},[t(m.a,{on:{click:function(t){return e.$emit("on-user-detail-clicked",c)}}},[t(d.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-eye")]),e._v(" "),t(h.d,[e._v("Detail")])],1),e._v(" "),t(l.a),e._v(" "),c.checked?e._e():t(m.a,{on:{click:function(t){return e.$emit("on-update-user-status-clicked",c)}}},[c.is_active?[t(d.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-delete")]),e._v(" "),t(h.d,{staticClass:"pr-9"},[e._v("Deactivate")])]:[t(d.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-check")]),e._v(" "),t(h.d,{staticClass:"pr-9"},[e._v("Activate")])]],2)],1)],1)]}}])})}),[],!1,null,null,null);t.default=component.exports},790:function(e,t,r){"use strict";r.r(t);var n=r(626),c=r(177),o=r(276),l=r(231),d=r(612),v=r(273),m=r(194),h=r(609),f=r(124),_=(r(38),r(39),r(289),r(1)),x=(r(13),r(14),r(12),r(6),r(16),r(10),r(17),r(708)),y=r(776),O=r(696),j=r(106);function k(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(t){Object(_.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var C={middleware:["authenticated"],components:{UserTable:x.default,UserForm:y.default},data:function(){return{breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/dashboard"},{text:"All Work Order",disabled:!0}],editMode:!1,changeUserStatusDialog:!1,editUserDialogVisible:!1,userFormVisible:!1,dispatchFormVisible:!1,users:{},user:{},search:{name:"",concrete_type_id:null},pagination:{page:1,per_page:1e3}}},apollo:{users:{query:O.a,variables:function(){var e={};return this.search.name&&(e=w(w({},e),{name:"%".concat(this.search.name,"%")})),w(w({},e),this.pagination)},fetchPolicy:"cache-and-network"}},methods:w(w({},Object(j.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onCreateDispatchClicked:function(e){this.user=e,this.dispatchFormVisible=!0},onCloseDispatchForm:function(){this.dispatchFormVisible=!1,this.$apollo.queries.users.refetch()},onAddUserClicked:function(){this.user={},this.userFormVisible=!0},onUserDetailClicked:function(e){this.userFormVisible=!0,this.user=e},onUpdateUserStatusClicked:function(e){this.user=e,this.changeUserStatusDialog=!0},updateUserStatus:function(){var e=this;console.log(this.user),this.$apollo.mutate({mutation:O.e,variables:{id:this.user.id,is_active:!this.user.is_active}}).then((function(t){t.data;e.successNotification("User removed successfully!"),e.$apollo.queries.users.refetch()})).catch((function(e){console.log(e)})),this.user=null,this.changeUserStatusDialog=!1},onCloseUserForm:function(){this.user=null,this.userFormVisible=!1,this.$apollo.queries.users.refetch()}})},D=r(60),component=Object(D.a)(C,(function(){var e,t,r=this,_=r._self._c;return _("div",{staticClass:"pa-5 grey lighten-3"},[_(n.a,{attrs:{users:r.breadcrumbs},scopedSlots:r._u([{key:"divider",fn:function(){return[_(m.a,[r._v("mdi-chevron-double-right")])]},proxy:!0}])}),r._v(" "),_("div",{staticClass:"px-4 row ma-1"},[_("div",[_("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[r._v("All Users")]),r._v(" "),_("span",{staticClass:"grey--text text--darken-1"},[r._v("All Users Are Shown Here.")]),r._v(" "),_(f.a,{staticClass:"mt-4",attrs:{"append-icon":"mdi-magnify",label:"Search by customer name or username","single-line":"","hide-details":"",outlined:""},model:{value:r.search.name,callback:function(e){r.$set(r.search,"name",e)},expression:"search.name"}})],1),r._v(" "),_(h.a),r._v(" "),_("div",{staticClass:"pr-2"},[_("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg v-size--default black white--text lighten-5",attrs:{type:"button",icon:"mdi-home"},on:{click:r.onAddUserClicked}},[_(m.a,{attrs:{left:"",dark:""}},[r._v(" mdi-plus-circle ")]),r._v("\n        Add User\n      ")],1)])],1),r._v(" "),_("div",{staticClass:"px-5 py-3"},[_("div",{staticClass:"row mb-4"}),r._v(" "),_("user-table",{attrs:{users:r.users.data},on:{"on-user-detail-clicked":r.onUserDetailClicked,"on-update-user-status-clicked":r.onUpdateUserStatusClicked}})],1),r._v(" "),_("div",[_(d.a,{attrs:{width:"85%"},on:{"click:outside":r.onCloseUserForm},model:{value:r.userFormVisible,callback:function(e){r.userFormVisible=e},expression:"userFormVisible"}},[_("user-form",{attrs:{_user:r.user,editMode:r.editMode},on:{"on-close-user-form":r.onCloseUserForm}})],1),r._v(" "),_(d.a,{attrs:{width:"500"},model:{value:r.changeUserStatusDialog,callback:function(e){r.changeUserStatusDialog=e},expression:"changeUserStatusDialog"}},[_(o.a,{staticClass:"lighten-4",class:{red:null===(e=r.user)||void 0===e?void 0:e.is_active,blue:!(null!==(t=r.user)&&void 0!==t&&t.is_active)}},[_(l.c,{staticClass:"text-h5 lighten-2"},[r._v(" Confirm ")]),r._v(" "),_(l.b,{staticClass:"pt-3"},[r._v("\n          Are you sure you want to update user status!\n        ")]),r._v(" "),_(v.a),r._v(" "),_(l.a,[_(h.a),r._v(" "),_(c.a,{attrs:{color:"primary",text:""},on:{click:r.updateUserStatus}},[r._v("\n            I accept\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);