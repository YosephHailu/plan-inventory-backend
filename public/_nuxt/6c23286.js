(window.webpackJsonp=window.webpackJsonp||[]).push([[46,17,38],{597:function(e,t,n){var content=n(598);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("b1bed018",content,!0,{sourceMap:!1})},598:function(e,t,n){var r=n(19)(!1);r.push([e.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex-wrap:wrap;flex:0 1 auto;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),e.exports=r},604:function(e,t,n){var content=n(605);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("2065bca8",content,!0,{sourceMap:!1})},605:function(e,t,n){var r=n(19)(!1);r.push([e.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;outline:none;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{animation-duration:.15s;animation-name:animate-dialog;animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),e.exports=r},608:function(e,t,n){"use strict";n(12),n(13),n(11),n(5),n(15),n(9),n(16);var r=n(1),o=(n(118),n(597),n(65)),c=n(6);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=Object(c.a)(o.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(r.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),n=t.tag,data=t.data;return e("li",[e(n,d(d({},data),{},{attrs:d(d({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),v=n(0),h=Object(v.i)("v-breadcrumbs__divider","li"),f=n(17);function y(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}t.a=Object(c.a)(f.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(h,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,n=[],i=0;i<this.items.length;i++){var r=this.items[i];n.push(r.text),t?e.push(this.$scopedSlots.item({item:r})):e.push(this.$createElement(m,{key:n.join("."),props:r},[r.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}})},620:function(e,t,n){"use strict";var r=n(86),o=n(1),c=(n(27),n(92),n(59),n(47),n(70),n(5),n(119),n(12),n(13),n(11),n(15),n(9),n(16),n(604),n(591)),l=n(153),d=n(126),m=n(279),v=n(280),h=n(277),f=n(278),y=n(127),_=n(6),O=n(8),x=n(0);function w(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var k=Object(_.a)(d.a,m.a,v.a,h.a,f.a,l.a);t.a=k.extend({name:"v-dialog",directives:{ClickOutside:y.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var e;return e={},Object(o.a)(e,"v-dialog ".concat(this.contentClass).trim(),!0),Object(o.a)(e,"v-dialog--active",this.isActive),Object(o.a)(e,"v-dialog--persistent",this.persistent),Object(o.a)(e,"v-dialog--fullscreen",this.fullscreen),Object(o.a)(e,"v-dialog--scrollable",this.scrollable),Object(o.a)(e,"v-dialog--animated",this.animate),e},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(e){var t;e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(t=this.previousActiveElement)||void 0===t||t.focus())},fullscreen:function(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(O.e)("full-width",this)},beforeMount:function(){var e=this;this.$nextTick((function(){e.isBooted=e.isActive,e.isActive&&e.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var e=this;this.animate=!1,this.$nextTick((function(){e.animate=!0,window.clearTimeout(e.animateTimeout),e.animateTimeout=window.setTimeout((function(){return e.animate=!1}),150)}))},closeConditional:function(e){var t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):v.a.options.methods.hideScroll.call(this)},show:function(){var e=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){e.$nextTick((function(){var t,n;(null===(t=e.$refs.dialog)||void 0===t?void 0:t.contains(document.activeElement))||(e.previousActiveElement=document.activeElement,null===(n=e.$refs.dialog)||void 0===n||n.focus()),e.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(e){if(e.keyCode===x.w.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var t=this.getActivator();this.$nextTick((function(){return t&&t.focus()}))}this.$emit("keydown",e)},onFocusin:function(e){if(e&&this.retainFocus){var t=e.target;if(t&&this.$refs.dialog&&![document,this.$refs.dialog].includes(t)&&!this.$refs.dialog.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(e){return e.contains(t)}))){var n=this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'),o=Object(r.a)(n).find((function(e){return!e.hasAttribute("disabled")&&!e.matches('[tabindex="-1"]')}));o&&o.focus()}}},genContent:function(){var e=this;return this.showLazyContent((function(){return[e.$createElement(c.a,{props:{root:!0,light:e.light,dark:e.dark}},[e.$createElement("div",{class:e.contentClasses,attrs:j({role:"dialog","aria-modal":e.hideOverlay?void 0:"true"},e.getScopeIdAttrs()),on:{keydown:e.onKeydown},style:{zIndex:e.activeZIndex},ref:"content"},[e.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=j(j({},data.style),{},{maxWidth:Object(x.h)(this.maxWidth),width:Object(x.h)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},632:function(e,t,n){"use strict";n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return h})),n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return y}));var r,o,c,l,d=n(91),m=n(64),v=Object(m.a)(r||(r=Object(d.a)(["\n  query($page: Int!, $per_page: Int!) {\n    permission_types(first: $per_page, page: $page) {\n      data {\n         id\n         action\n         is_active\n      }\n    }   \n  }\n"]))),h=Object(m.a)(o||(o=Object(d.a)(["\n  mutation($action: String!) {\n    createPermissionType(input: {action: $action}) {\n        id\n        action\n    }\n  }\n"]))),f=Object(m.a)(c||(c=Object(d.a)(["\n  mutation($id: ID!, $action: String!) {\n    updatePermissionType(input: {id: $id, action: $action}) {\n        id\n        action\n    }\n  }\n"]))),y=Object(m.a)(l||(l=Object(d.a)(["\n  mutation($id: ID!) {\n    deletePermissionType(id: $id) {\n        id\n        action\n    }   \n  }\n"])))},664:function(e,t,n){"use strict";n.r(t);var r=n(174),o=n(263),c=n(711),l=n(262),d=n(189),m=n(259),v=n(172),h=n(83),f=n(267),y=(n(42),n(274),{props:["permission_types","search"],data:function(){return{pagination:{},expanded:[],headers:[{text:"Action",class:"blue-grey lighten-3",value:"action"},{text:"Action",class:"blue-grey lighten-3 col-2",value:"menu"}]}}}),_=n(90),component=Object(_.a)(y,(function(){var e=this,t=e._self._c;return t(c.a,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.permission_types,"items-per-page":25,search:e.search},scopedSlots:e._u([{key:"item.is_active",fn:function(n){var r=n.item;return[t(o.a,[e._v(e._s(r.is_active?"active":"not active"))])]}},{key:"item.is_locked",fn:function(n){var r=n.item;return[t(o.a,[e._v(e._s(r.is_locked?"locked":"open"))])]}},{key:"item.menu",fn:function(n){var o=n.item;return[t(f.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,c=n.attrs;return[t(r.a,e._g(e._b({attrs:{icon:""}},"v-btn",c,!1),o),[t(d.a,[e._v("mdi-menu")])],1)]}}],null,!0)},[e._v(" "),t(m.a,{staticClass:"col-12 px-0"},[t(v.a,{on:{click:function(t){return e.$emit("on-permission-type-detail-clicked",o)}}},[t(d.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-eye")]),e._v(" "),t(h.c,[e._v("Detail")])],1),e._v(" "),t(l.a),e._v(" "),o.checked?e._e():t(v.a,{on:{click:function(t){return e.$emit("on-permission-type-delete-clicked",o)}}},[t(d.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-delete")]),e._v(" "),t(h.c,{staticClass:"pr-9"},[e._v("Delete")])],1)],1)],1)]}}])})}),[],!1,null,null,null);t.default=component.exports},665:function(e,t,n){"use strict";n.r(t);var r=n(264),o=n(273),c=n(655),l=n(262),d=n(657),m=n(189),v=n(709),h=n(590),f=n(120),y=(n(12),n(13),n(11),n(5),n(15),n(9),n(16),n(1)),_=n(106),O=n(632);function x(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(t){Object(y.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var j={props:["_permissionType"],data:function(){return{editMode:!1,valid:!1,permissionType:{}}},computed:{disableForm:function(){var e;return!this.editMode&&null!=(null===(e=this._permissionType)||void 0===e?void 0:e.id)}},methods:w(w({},Object(_.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(e){this.editMode?this.updatePermissionType(e):this.registerPermissionType(e)},registerPermissionType:function(e){var t=this;this.$apollo.mutate({mutation:O.b,variables:this.permissionType}).then((function(n){n.data;t.successNotification("Permission Type registered successfully!"),e.target.reset(),t.$emit("on-close-permission-type-form")})).catch((function(e){console.log(e)}))},updatePermissionType:function(e){var t=this;this.$apollo.mutate({mutation:O.d,variables:this.permissionType}).then((function(n){n.data;t.successNotification("Permission Type updated successfully!"),e.target.reset(),t.$emit("on-close-permission-type-form")})).catch((function(e){console.log(e)}))}}),watch:{$props:{handler:function(){this._permissionType&&(this.permissionType=w({},this._permissionType))},deep:!0,immediate:!0}}},k=n(90),component=Object(k.a)(j,(function(){var e=this,t=e._self._c;return t(r.a,[t("div",{staticClass:"grey lighten-2 pa-2 pb-4"},[t(v.a,{staticClass:"mx-0"},[t("div",[t(o.c,{staticClass:"text-h5 pb-0"},[e._v("\n          Permission Type Registration Form\n        ")]),e._v(" "),t("span",{staticClass:"ml-4"},[e._v("registration form")])],1),e._v(" "),t(h.a),e._v(" "),e.disableForm?t("button",{staticClass:"v-btn ma-5 mt-6 v-btn--is-elevated v-btn--has-bg theme--light pl-1 black v-size--default white--text",attrs:{icon:"mdi-pen"},on:{click:function(t){e.editMode=!0}}},[t(m.a,{attrs:{right:"",dark:"",medium:""}},[e._v(" mdi-pen ")]),e._v(" "),t("span",{staticClass:"v-btn__content text-white ml-1"},[e._v(" Edit ")])],1):e._e()],1)],1),e._v(" "),t(d.a,{staticClass:"mt-4 p-4",attrs:{disabled:e.disableForm},on:{submit:function(t){return t.preventDefault(),e.onFormSubmitted.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t("div",{staticClass:"mx-5"},[t(v.a,{staticClass:"px-3"},[t(c.a,{attrs:{cols:"12"}},[t(f.a,{attrs:{label:"Name",outlined:"",required:""},model:{value:e.permissionType.action,callback:function(t){e.$set(e.permissionType,"action",t)},expression:"permissionType.action"}})],1)],1)],1),e._v(" "),t(l.a,{staticClass:"my-2"}),e._v(" "),t(c.a,{staticClass:"d-flex"},[t("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button"},on:{click:function(t){return e.$emit("on-close-permission-type-form")}}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Cancel ")])]),e._v(" "),t(h.a),e._v(" "),e.disableForm?e._e():t("div",[e.editMode?t("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Update ")])]):t("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Add ")])])])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},716:function(e,t,n){"use strict";n.r(t);var r=n(608),o=n(174),c=n(264),l=n(273),d=n(620),m=n(262),v=n(189),h=n(590),f=n(1),y=(n(38),n(42),n(274),n(12),n(13),n(11),n(5),n(15),n(9),n(16),n(664)),_=n(665),O=n(632),x=n(106);function w(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(t){Object(f.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var k={middleware:["authenticated"],components:{PermissionTypeTable:y.default,PermissionTypeForm:_.default},data:function(){var e;return e={breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/dashboard"},{text:"All Work Order",disabled:!0}],search:"",editMode:!1,deleteDialog:!1,editPermissionTypeDialogVisible:!1,permissionTypeFormVisible:!1,dispatchFormVisible:!1,permission_types:{},permissionType:{}},Object(f.a)(e,"search",{name:"",concrete_type_id:null}),Object(f.a)(e,"pagination",{page:1,per_page:25}),e},apollo:{permission_types:{query:O.a,variables:function(){var e={};return this.search.name&&(e=j(j({},e),{name:"%".concat(this.search.name,"%")})),j(j({},e),this.pagination)},fetchPolicy:"cache-and-network"}},methods:j(j({},Object(x.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onAddPermissionTypeClicked:function(){this.permissionType={},this.permissionTypeFormVisible=!0},onPermissionTypeDetailClicked:function(e){this.permissionTypeFormVisible=!0,this.permissionType=e},onPermissionTypeDeleteClicked:function(e){this.permissionType=e,this.deleteDialog=!0},deletePermissionType:function(){var e=this;this.$apollo.mutate({mutation:O.c,variables:{id:this.permissionType.id}}).then((function(t){t.data;e.successNotification("PermissionType removed successfully!"),e.$apollo.queries.permission_types.refetch()})).catch((function(e){console.log(e)})),this.permissionType=null,this.deleteDialog=!1},onClosePermissionTypeForm:function(){this.permissionType=null,this.permissionTypeFormVisible=!1,this.$apollo.queries.permission_types.refetch()}})},C=n(90),component=Object(C.a)(k,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"pa-5 grey lighten-3"},[t(r.a,{attrs:{permission_types:e.breadcrumbs},scopedSlots:e._u([{key:"divider",fn:function(){return[t(v.a,[e._v("mdi-chevron-double-right")])]},proxy:!0}])}),e._v(" "),t("div",{staticClass:"px-4 row ma-1"},[e._m(0),e._v(" "),t(h.a),e._v(" "),t("div",{staticClass:"pr-2"},[t("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg v-size--default black white--text lighten-5",attrs:{type:"button",icon:"mdi-home"},on:{click:e.onAddPermissionTypeClicked}},[t(v.a,{attrs:{left:"",dark:""}},[e._v(" mdi-plus-circle ")]),e._v("\n        Add PermissionType\n      ")],1)])],1),e._v(" "),t("div",{staticClass:"px-5 py-3"},[t("div",{staticClass:"row mb-4"}),e._v(" "),t("permissionType-table",{attrs:{permission_types:e.permission_types.data},on:{"on-permission-type-detail-clicked":e.onPermissionTypeDetailClicked,"on-permission-type-delete-clicked":e.onPermissionTypeDeleteClicked}})],1),e._v(" "),t("div",[t(d.a,{attrs:{width:"1080"},on:{"click:outside":e.onClosePermissionTypeForm},model:{value:e.permissionTypeFormVisible,callback:function(t){e.permissionTypeFormVisible=t},expression:"permissionTypeFormVisible"}},[t("permissionType-form",{attrs:{_permissionType:e.permissionType,editMode:e.editMode},on:{"on-close-permission-type-form":e.onClosePermissionTypeForm}})],1),e._v(" "),t(d.a,{attrs:{width:"500"},model:{value:e.deleteDialog,callback:function(t){e.deleteDialog=t},expression:"deleteDialog"}},[t(c.a,{staticClass:"red lighten-4"},[t(l.c,{staticClass:"text-h5 red lighten-2"},[e._v(" confirm ")]),e._v(" "),t(l.b,{staticClass:"pt-3"},[e._v("\n          Are you sure you want to delete this resource!\n        ")]),e._v(" "),t(m.a),e._v(" "),t(l.a,[t(h.a),e._v(" "),t(o.a,{attrs:{color:"primary",text:""},on:{click:e.deletePermissionType}},[e._v(" I accept ")])],1)],1)],1)],1)],1)}),[function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[e._v("All Permission Types")]),e._v(" "),t("span",{staticClass:"grey--text text--darken-1"},[e._v("All Orders Are Shown Here.")])])}],!1,null,null,null);t.default=component.exports}}]);