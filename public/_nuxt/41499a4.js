(window.webpackJsonp=window.webpackJsonp||[]).push([[66,35,59],{604:function(e,t,n){var content=n(605);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(23).default)("29751484",content,!0,{sourceMap:!1})},605:function(e,t,n){var r=n(22)((function(i){return i[1]}));r.push([e.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex:0 1 auto;flex-wrap:wrap;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;-webkit-text-decoration:none;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),r.locals={},e.exports=r},610:function(e,t,n){var content=n(611);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(23).default)("52d9b218",content,!0,{sourceMap:!1})},611:function(e,t,n){var r=n(22)((function(i){return i[1]}));r.push([e.i,".v-dialog{border-radius:4px;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);margin:24px;outline:none;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{animation-duration:.15s;animation-name:animate-dialog;animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;height:100%;left:0;margin:0;overflow-y:auto;position:fixed;top:0}.v-dialog--fullscreen>.v-card{margin:0!important;min-height:100%;min-width:100%;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),r.locals={},e.exports=r},614:function(e,t,n){"use strict";n(13),n(14),n(12),n(6),n(16),n(10),n(17);var r=n(1),o=(n(119),n(604),n(61)),c=n(7);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m=Object(c.a)(o.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(r.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(e){var t=this.generateRouteLink(),n=t.tag,data=t.data;return e("li",[e(n,d(d({},data),{},{attrs:d(d({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),v=n(0),h=Object(v.i)("v-breadcrumbs__divider","li"),f=n(18);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}t.a=Object(c.a)(f.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(h,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var e=[],t=!!this.$scopedSlots.item,n=[],i=0;i<this.items.length;i++){var r=this.items[i];n.push(r.text),t?e.push(this.$scopedSlots.item({item:r})):e.push(this.$createElement(m,{key:n.join("."),props:r},[r.text])),i<this.items.length-1&&e.push(this.genDivider())}return e}},render:function(e){var t=this.$slots.default||this.genItems();return e("ul",{staticClass:"v-breadcrumbs",class:this.classes},t)}})},621:function(e,t,n){"use strict";var r=n(86),o=n(1),c=(n(26),n(92),n(55),n(48),n(70),n(6),n(120),n(13),n(14),n(12),n(16),n(10),n(17),n(610),n(597)),l=n(154),d=n(128),m=n(283),v=n(284),h=n(281),f=n(282),_=n(129),y=n(7),O=n(9),x=n(0);function w(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function $(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var j=Object(y.a)(d.a,m.a,v.a,h.a,f.a,l.a);t.a=j.extend({name:"v-dialog",directives:{ClickOutside:_.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var e;return e={},Object(o.a)(e,"v-dialog ".concat(this.contentClass).trim(),!0),Object(o.a)(e,"v-dialog--active",this.isActive),Object(o.a)(e,"v-dialog--persistent",this.persistent),Object(o.a)(e,"v-dialog--fullscreen",this.fullscreen),Object(o.a)(e,"v-dialog--scrollable",this.scrollable),Object(o.a)(e,"v-dialog--animated",this.animate),e},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(e){var t;e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(t=this.previousActiveElement)||void 0===t||t.focus())},fullscreen:function(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(O.e)("full-width",this)},beforeMount:function(){var e=this;this.$nextTick((function(){e.isBooted=e.isActive,e.isActive&&e.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var e=this;this.animate=!1,this.$nextTick((function(){e.animate=!0,window.clearTimeout(e.animateTimeout),e.animateTimeout=window.setTimeout((function(){return e.animate=!1}),150)}))},closeConditional:function(e){var t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):v.a.options.methods.hideScroll.call(this)},show:function(){var e=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){e.$nextTick((function(){var t,n;(null===(t=e.$refs.dialog)||void 0===t?void 0:t.contains(document.activeElement))||(e.previousActiveElement=document.activeElement,null===(n=e.$refs.dialog)||void 0===n||n.focus()),e.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(e){if(e.keyCode===x.w.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var t=this.getActivator();this.$nextTick((function(){return t&&t.focus()}))}this.$emit("keydown",e)},onFocusin:function(e){if(e&&this.retainFocus){var t=e.target;if(t&&this.$refs.dialog&&![document,this.$refs.dialog].includes(t)&&!this.$refs.dialog.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(e){return e.contains(t)}))){var n=this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'),o=Object(r.a)(n).find((function(e){return!e.hasAttribute("disabled")&&!e.matches('[tabindex="-1"]')}));o&&o.focus()}}},genContent:function(){var e=this;return this.showLazyContent((function(){return[e.$createElement(c.a,{props:{root:!0,light:e.light,dark:e.dark}},[e.$createElement("div",{class:e.contentClasses,attrs:$({role:"dialog","aria-modal":e.hideOverlay?void 0:"true"},e.getScopeIdAttrs()),on:{keydown:e.onKeydown},style:{zIndex:e.activeZIndex},ref:"content"},[e.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=$($({},data.style),{},{maxWidth:Object(x.h)(this.maxWidth),width:Object(x.h)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},646:function(e,t,n){"use strict";n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return h})),n.d(t,"d",(function(){return f})),n.d(t,"c",(function(){return _}));var r,o,c,l,d=n(91),m=n(60),v=Object(m.a)(r||(r=Object(d.a)(["\n  query($page: Int!, $per_page: Int!, $name: String) {\n    roles(first: $per_page, page: $page, name: $name) {\n      data {\n        id\n        name\n        code\n        description\n        is_active\n        rolePermissions {\n          permissionTypes {\n            id\n            action\n          }\n          permission {\n            id\n            name\n            resource\n          }\n        }\n      }\n    }   \n  }\n"]))),h=Object(m.a)(o||(o=Object(d.a)(["\n  mutation($name: String!, $code: String, $rolePermissions: CreateRolePermissionHasMany) {\n    createRole(input: {name: $name, code: $code, rolePermissions: $rolePermissions}) {\n        id\n        name\n    }\n  }\n"]))),f=Object(m.a)(c||(c=Object(d.a)(["\n  mutation($id: ID!, $name: String!, $code: String, $rolePermissions: CreateRolePermissionHasMany) {\n    updateRole(input: {id: $id, name: $name, code: $code, rolePermissions: $rolePermissions}) {\n        id\n        name\n    }\n  }\n"]))),_=Object(m.a)(l||(l=Object(d.a)(["\n  mutation($id: ID!) {\n    deletePermission(id: $id) {\n        id\n        name\n    }   \n  }\n"])))},654:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return _})),n.d(t,"d",(function(){return y}));var r,o,c,l,d,m=n(91),v=n(60),h=Object(v.a)(r||(r=Object(m.a)(["\n  query($page: Int!, $per_page: Int!, $name: String) {\n    users(first: $per_page, page: $page, name: $name) {\n      data {\n        id\n        name\n        email\n        username\n        is_active\n        is_locked\n        last_seen\n        roles {\n          id\n          name\n        }\n        createdBy {\n            id\n            name\n            username\n        }\n      }\n    }   \n  }\n"]))),f=Object(v.a)(o||(o=Object(m.a)(["\n  mutation register($email: String!, $name: String!, $username: String!, $password: String!, $password_confirmation: String!, $roles: [ID!]) {\n    register (input: {email: $email, name: $name, username: $username, password: $password, password_confirmation: $password_confirmation, roles: $roles}) {\n        token\n    }\n  }\n"]))),_=Object(v.a)(c||(c=Object(m.a)(["\n  mutation updateUser($id: ID!, $name: String!, $password: String!, $password_confirmation: String!, $roles: [ID!]) {\n    updateUser (input: {id: $id, name: $name, password: $password, password_confirmation: $password_confirmation, roles: $roles}) {\n        name\n    }\n  }\n"]))),y=Object(v.a)(l||(l=Object(m.a)(["\n  mutation updateUser($id: ID!, $is_active: Boolean!) {\n    updateActiveStatus (input: {id: $id, is_active: $is_active}) {\n      id\n      name\n      is_active\n    }\n  }\n"])));Object(v.a)(d||(d=Object(m.a)(["\n  mutation($id: ID!) {\n    deleteUser(id: $id) {\n      id\n    }\n  }\n"])))},685:function(e,t,n){"use strict";n.r(t);var r=n(177),o=n(268),c=n(738),l=n(267),d=n(213),m=n(264),v=n(175),h=n(84),f=n(272),_=(n(38),n(279),n(39),{props:["users","search"],data:function(){return{pagination:{},expanded:[],headers:[{text:"Full Name",class:"blue-grey lighten-3",value:"name"},{text:"Email",align:"start",value:"email",class:"blue-grey lighten-3"},{text:"Username",align:"start",value:"username",class:"blue-grey lighten-3"},{text:"Is Active",align:"start",value:"is_active",class:"blue-grey lighten-3"},{text:"Is Locked",align:"start",value:"is_locked",class:"blue-grey lighten-3"},{text:"Last Seen",align:"start",value:"last_seen",class:"blue-grey lighten-3"},{text:"Roles",align:"start",value:"roles",class:"blue-grey lighten-3"},{text:"Action",class:"blue-grey lighten-3 col-1",value:"menu"}]}}}),y=n(90),component=Object(y.a)(_,(function(){var e=this,t=e._self._c;return t(c.a,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.users,"items-per-page":25,search:e.search},scopedSlots:e._u([{key:"item.is_active",fn:function(n){var r=n.item;return[t(o.a,[e._v(e._s(r.is_active?"active":"not active"))])]}},{key:"item.is_locked",fn:function(n){var r=n.item;return[t(o.a,[e._v(e._s(r.is_locked?"Yes":"No"))])]}},{key:"item.roles",fn:function(n){var r=n.item;return e._l(r.roles,(function(n){return t(o.a,{key:n.id,attrs:{color:"blue-grey lighten-3"}},[e._v(e._s(n.name))])}))}},{key:"item.menu",fn:function(n){var o=n.item;return[t(f.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,c=n.attrs;return[t(r.a,e._g(e._b({attrs:{icon:""}},"v-btn",c,!1),o),[t(d.a,[e._v("mdi-menu")])],1)]}}],null,!0)},[e._v(" "),t(m.a,{staticClass:"col-12 px-0"},[t(v.a,{on:{click:function(t){return e.$emit("on-user-detail-clicked",o)}}},[t(d.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-eye")]),e._v(" "),t(h.c,[e._v("Detail")])],1),e._v(" "),t(l.a),e._v(" "),o.checked?e._e():t(v.a,{on:{click:function(t){return e.$emit("on-update-user-status-clicked",o)}}},[o.is_active?[t(d.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-delete")]),e._v(" "),t(h.c,{staticClass:"pr-9"},[e._v("Deactivate")])]:[t(d.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-check")]),e._v(" "),t(h.c,{staticClass:"pr-9"},[e._v("Activate")])]],2)],1)],1)]}}])})}),[],!1,null,null,null);t.default=component.exports},686:function(e,t,n){"use strict";n.r(t);var r=n(269),o=n(278),c=n(668),l=n(267),d=n(669),m=n(213),v=n(736),h=n(581),f=n(596),_=n(121),y=(n(39),n(13),n(14),n(12),n(6),n(16),n(10),n(17),n(1)),O=(n(69),n(106)),x=n(654);function w(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function $(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(t){Object(y.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var j={props:["_user"],data:function(){return{editMode:!1,valid:!1,user:{roles:null},roles:{data:[]},password_rules:[function(e){return!!e||"Password field is required"}],password_confirmation_rules:[function(e){return!!e||"Password confirmation field is required"}]}},computed:{disableForm:function(){var e;return!this.editMode&&null!=(null===(e=this._user)||void 0===e?void 0:e.id)},formattedRoles:function(){return this.roles.data.map((function(e){return e.id=parseInt(e.id),e}))}},apollo:{roles:{query:n(646).a,variables:function(){return{page:1,per_page:1e3}},fetchPolicy:"cache-and-network"}},methods:$($({},Object(O.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(e){this.$refs.form.validate()&&(this.editMode?this.updateUser(e):this.registerUser(e))},registerUser:function(e){var t=this;this.$apollo.mutate({mutation:x.b,variables:this.user}).then((function(n){n.data;t.successNotification("User registered successfully!"),e.target.reset(),t.$emit("on-close-user-form")})).catch((function(e){console.log(e)}))},updateUser:function(e){var t=this;this.$apollo.mutate({mutation:x.c,variables:this.user}).then((function(n){n.data;t.successNotification("User updated successfully!"),e.target.reset(),t.$emit("on-close-user-form")})).catch((function(e){console.log(e)}))}}),watch:{$props:{handler:function(){var e;null!==(e=this._user)&&void 0!==e&&e.id?(this.user=$({},this._user),this.user.roles=this.user.roles.map((function(e){return parseInt(e.id)}))):this.user={}},deep:!0,immediate:!0}}},k=n(90),component=Object(k.a)(j,(function(){var e=this,t=e._self._c;return t(r.a,[t("div",{staticClass:"grey lighten-2 pa-2 pb-4"},[t(v.a,{staticClass:"mx-0"},[t("div",[t(o.c,{staticClass:"text-h5 pb-0"},[e._v("\n          User Registration Form\n        ")]),e._v(" "),t("span",{staticClass:"ml-4"},[e._v("registration form")])],1),e._v(" "),t(f.a),e._v(" "),e.disableForm?t("button",{staticClass:"v-btn ma-5 mt-6 v-btn--is-elevated v-btn--has-bg theme--light pl-1 black v-size--default white--text",attrs:{icon:"mdi-pen"},on:{click:function(t){e.editMode=!0}}},[t(m.a,{attrs:{right:"",dark:"",medium:""}},[e._v(" mdi-pen ")]),e._v(" "),t("span",{staticClass:"v-btn__content text-white ml-1"},[e._v(" Edit ")])],1):e._e()],1)],1),e._v(" "),t(d.a,{ref:"form",staticClass:"mt-4 p-4",attrs:{disabled:e.disableForm},on:{submit:function(t){return t.preventDefault(),e.onFormSubmitted.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t("div",{staticClass:"mx-5"},[t(v.a,{staticClass:"px-3"},[t(c.a,{attrs:{cols:"12"}},[t(_.a,{attrs:{label:"Full Name",outlined:"",required:""},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12",md:"6"}},[t(_.a,{attrs:{label:"Email",disabled:e.editMode,outlined:"",required:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12",md:"6"}},[t(_.a,{attrs:{label:"Username",disabled:e.editMode,outlined:"",required:""},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12",md:"6"}},[t(_.a,{attrs:{label:"Password",type:"password",outlined:"",required:"",rules:e.password_rules},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12",md:"6"}},[t(_.a,{attrs:{label:"Confirm Password",type:"password",outlined:"",required:"",rules:e.password_confirmation_rules},model:{value:e.user.password_confirmation,callback:function(t){e.$set(e.user,"password_confirmation",t)},expression:"user.password_confirmation"}})],1),e._v(" "),t(c.a,{attrs:{cols:"12",md:"6"}},[t(h.a,{attrs:{items:e.formattedRoles,"item-value":"id","item-text":"name",label:"Select Role",chips:"",multiple:"",outlined:"",required:""},model:{value:e.user.roles,callback:function(t){e.$set(e.user,"roles",t)},expression:"user.roles"}})],1)],1)],1),e._v(" "),t(l.a,{staticClass:"my-2"}),e._v(" "),t(c.a,{staticClass:"d-flex"},[t("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button"},on:{click:function(t){return e.$emit("on-close-user-form")}}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Cancel ")])]),e._v(" "),t(f.a),e._v(" "),e.disableForm?e._e():t("div",[e.editMode?t("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Update ")])]):t("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Add ")])])])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},746:function(e,t,n){"use strict";n.r(t);var r=n(614),o=n(177),c=n(269),l=n(278),d=n(621),m=n(267),v=n(213),h=n(596),f=n(121),_=(n(39),n(38),n(279),n(1)),y=(n(13),n(14),n(12),n(6),n(16),n(10),n(17),n(685)),O=n(686),x=n(654),w=n(106);function $(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?$(Object(source),!0).forEach((function(t){Object(_.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):$(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var k={middleware:["authenticated"],components:{UserTable:y.default,UserForm:O.default},data:function(){return{breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/dashboard"},{text:"All Work Order",disabled:!0}],editMode:!1,changeUserStatusDialog:!1,editUserDialogVisible:!1,userFormVisible:!1,dispatchFormVisible:!1,users:{},user:{},search:{name:"",concrete_type_id:null},pagination:{page:1,per_page:1e3}}},apollo:{users:{query:x.a,variables:function(){var e={};return this.search.name&&(e=j(j({},e),{name:"%".concat(this.search.name,"%")})),j(j({},e),this.pagination)},fetchPolicy:"cache-and-network"}},methods:j(j({},Object(w.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onCreateDispatchClicked:function(e){this.user=e,this.dispatchFormVisible=!0},onCloseDispatchForm:function(){this.dispatchFormVisible=!1,this.$apollo.queries.users.refetch()},onAddUserClicked:function(){this.user={},this.userFormVisible=!0},onUserDetailClicked:function(e){this.userFormVisible=!0,this.user=e},onUpdateUserStatusClicked:function(e){this.user=e,this.changeUserStatusDialog=!0},updateUserStatus:function(){var e=this;console.log(this.user),this.$apollo.mutate({mutation:x.d,variables:{id:this.user.id,is_active:!this.user.is_active}}).then((function(t){t.data;e.successNotification("User removed successfully!"),e.$apollo.queries.users.refetch()})).catch((function(e){console.log(e)})),this.user=null,this.changeUserStatusDialog=!1},onCloseUserForm:function(){this.user=null,this.userFormVisible=!1,this.$apollo.queries.users.refetch()}})},C=n(90),component=Object(C.a)(k,(function(){var e,t,n=this,_=n._self._c;return _("div",{staticClass:"pa-5 grey lighten-3"},[_(r.a,{attrs:{users:n.breadcrumbs},scopedSlots:n._u([{key:"divider",fn:function(){return[_(v.a,[n._v("mdi-chevron-double-right")])]},proxy:!0}])}),n._v(" "),_("div",{staticClass:"px-4 row ma-1"},[_("div",[_("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[n._v("All Users")]),n._v(" "),_("span",{staticClass:"grey--text text--darken-1"},[n._v("All Users Are Shown Here.")]),n._v(" "),_(f.a,{staticClass:"mt-4",attrs:{"append-icon":"mdi-magnify",label:"Search by customer name or username","single-line":"","hide-details":"",outlined:""},model:{value:n.search.name,callback:function(e){n.$set(n.search,"name",e)},expression:"search.name"}})],1),n._v(" "),_(h.a),n._v(" "),_("div",{staticClass:"pr-2"},[_("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg v-size--default black white--text lighten-5",attrs:{type:"button",icon:"mdi-home"},on:{click:n.onAddUserClicked}},[_(v.a,{attrs:{left:"",dark:""}},[n._v(" mdi-plus-circle ")]),n._v("\n        Add User\n      ")],1)])],1),n._v(" "),_("div",{staticClass:"px-5 py-3"},[_("div",{staticClass:"row mb-4"}),n._v(" "),_("user-table",{attrs:{users:n.users.data},on:{"on-user-detail-clicked":n.onUserDetailClicked,"on-update-user-status-clicked":n.onUpdateUserStatusClicked}})],1),n._v(" "),_("div",[_(d.a,{attrs:{width:"85%"},on:{"click:outside":n.onCloseUserForm},model:{value:n.userFormVisible,callback:function(e){n.userFormVisible=e},expression:"userFormVisible"}},[_("user-form",{attrs:{_user:n.user,editMode:n.editMode},on:{"on-close-user-form":n.onCloseUserForm}})],1),n._v(" "),_(d.a,{attrs:{width:"500"},model:{value:n.changeUserStatusDialog,callback:function(e){n.changeUserStatusDialog=e},expression:"changeUserStatusDialog"}},[_(c.a,{staticClass:"lighten-4",class:{red:null===(e=n.user)||void 0===e?void 0:e.is_active,blue:!(null!==(t=n.user)&&void 0!==t&&t.is_active)}},[_(l.c,{staticClass:"text-h5 lighten-2"},[n._v(" Confirm ")]),n._v(" "),_(l.b,{staticClass:"pt-3"},[n._v("\n          Are you sure you want to update user status!\n        ")]),n._v(" "),_(m.a),n._v(" "),_(l.a,[_(h.a),n._v(" "),_(o.a,{attrs:{color:"primary",text:""},on:{click:n.updateUserStatus}},[n._v("\n            I accept\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);