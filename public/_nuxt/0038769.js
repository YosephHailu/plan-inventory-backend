(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{640:function(t,e,n){var content=n(641);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("7b5d4dc6",content,!0,{sourceMap:!1})},641:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}",""]),o.locals={},t.exports=o},642:function(t,e,n){var content=n(643);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("ae7a972c",content,!0,{sourceMap:!1})},643:function(t,e,n){var o=n(21)((function(i){return i[1]}));o.push([t.i,'.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-bottom:0;margin-top:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:24px}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{cursor:pointer;height:100%;opacity:0;position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;left:-12px;margin:7px;position:absolute;top:calc(50% - 24px);transition:inherit;width:34px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";left:0;opacity:.2;position:absolute;right:0;top:0;transform:scale(.2);transform-origin:center center;transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{height:28px;left:-9px;width:28px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:inherit}.v-input--selection-controls.v-input--is-disabled:not(.v-input--is-readonly){pointer-events:none}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),o.locals={},t.exports=o},655:function(t,e,n){"use strict";n(13),n(14),n(12),n(16),n(10),n(17);var o=n(125),r=n(1),c=(n(6),n(46),n(640),n(642),n(50)),l=n(89),d=n(56),h=n(2).a.extend({name:"rippleable",directives:{ripple:d.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),m=n(191),v=n(7);function f(t){t.preventDefault()}var _=Object(v.a)(l.a,h,m.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=l.a.options.methods.genLabel.call(this);return label?(label.data.on={click:f},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:f},ref:"input"})},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown:function(t){}}}),y=["title"];function $(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?$(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):$(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=_.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return x(x({},l.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(o.a)(t,y));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(c.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",x(x({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},668:function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return v})),n.d(e,"d",(function(){return f})),n.d(e,"c",(function(){return _}));var o,r,c,l,d=n(92),h=n(61),m=Object(h.a)(o||(o=Object(d.a)(["\n  query($page: Int!, $per_page: Int!) {\n    permission_types(first: $per_page, page: $page) {\n      data {\n         id\n         action\n         is_active\n      }\n    }   \n  }\n"]))),v=Object(h.a)(r||(r=Object(d.a)(["\n  mutation($action: String!) {\n    createPermissionType(input: {action: $action}) {\n        id\n        action\n    }\n  }\n"]))),f=Object(h.a)(c||(c=Object(d.a)(["\n  mutation($id: ID!, $action: String!) {\n    updatePermissionType(input: {id: $id, action: $action}) {\n        id\n        action\n    }\n  }\n"]))),_=Object(h.a)(l||(l=Object(d.a)(["\n  mutation($id: ID!) {\n    deletePermissionType(id: $id) {\n        id\n        action\n    }   \n  }\n"])))},669:function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return v})),n.d(e,"d",(function(){return f})),n.d(e,"c",(function(){return _}));var o,r,c,l,d=n(92),h=n(61),m=Object(h.a)(o||(o=Object(d.a)(["\n  query($page: Int!, $per_page: Int!) {\n    permissions(first: $per_page, page: $page) {\n      data {\n        id\n        name\n        code\n        description\n        resource\n        is_active\n     }\n    }   \n  }\n"]))),v=Object(h.a)(r||(r=Object(d.a)(["\n  mutation($name: String!, $code: String, $resource: String, $description: String) {\n    createPermission(input: {name: $name, code: $code, resource: $resource, description: $description}) {\n        id\n        name\n    }\n  }\n"]))),f=Object(h.a)(c||(c=Object(d.a)(["\n  mutation($id: ID!, $name: String!, $code: String, $resource: String, $description: String) {\n    updatePermission(input: {id: $id, name: $name, code: $code, resource: $resource, description: $description}) {\n        id\n        name\n    }\n  }\n"]))),_=Object(h.a)(l||(l=Object(d.a)(["\n  mutation($id: ID!) {\n    deletePermission(id: $id) {\n        id\n        name\n    }   \n  }\n"])))},695:function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"b",(function(){return v})),n.d(e,"d",(function(){return f})),n.d(e,"c",(function(){return _}));var o,r,c,l,d=n(92),h=n(61),m=Object(h.a)(o||(o=Object(d.a)(["\n  query($page: Int!, $per_page: Int!, $name: String) {\n    roles(first: $per_page, page: $page, name: $name) {\n      data {\n        id\n        name\n        code\n        description\n        is_active\n        rolePermissions {\n          permissionTypes {\n            id\n            action\n          }\n          permission {\n            id\n            name\n            resource\n          }\n        }\n      }\n    }   \n  }\n"]))),v=Object(h.a)(r||(r=Object(d.a)(["\n  mutation($name: String!, $code: String, $rolePermissions: CreateRolePermissionHasMany) {\n    createRole(input: {name: $name, code: $code, rolePermissions: $rolePermissions}) {\n        id\n        name\n    }\n  }\n"]))),f=Object(h.a)(c||(c=Object(d.a)(["\n  mutation($id: ID!, $name: String!, $code: String, $rolePermissions: CreateRolePermissionHasMany) {\n    updateRole(input: {id: $id, name: $name, code: $code, rolePermissions: $rolePermissions}) {\n        id\n        name\n    }\n  }\n"]))),_=Object(h.a)(l||(l=Object(d.a)(["\n  mutation($id: ID!) {\n    deletePermission(id: $id) {\n        id\n        name\n    }   \n  }\n"])))},775:function(t,e,n){"use strict";n.r(e);var o=n(276),r=n(231),c=n(655),l=n(693),d=n(273),h=n(694),m=n(194),v=n(780),f=n(645),_=n(609),y=n(124),$=(n(38),n(13),n(14),n(12),n(16),n(17),n(1)),x=(n(6),n(10),n(235),n(106)),O=n(669),j=n(668),C=n(695);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function P(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object($.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w={props:["_role"],data:function(){return{selected:[],permissions:{},permission_types:{},editMode:!1,valid:!1,role:{},rolePermissions:{create:[]}}},apollo:{permission_types:{query:j.a,variables:function(){return{page:1,per_page:1e4}},fetchPolicy:"cache-and-network"},permissions:{query:O.a,variables:function(){return{page:1,per_page:1e4}},fetchPolicy:"cache-and-network"}},computed:{disableForm:function(){var t;return!this.editMode&&null!=(null===(t=this._role)||void 0===t?void 0:t.id)}},methods:P(P({},Object(x.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(t){this.prepareRolePermission(),this.editMode?this.updateRole(t):this.registerRole(t)},prepareRolePermission:function(){var t=this;this.selected.forEach((function(e){var n=t.rolePermissions.create.findIndex((function(t){return parseInt(t.permission_id)==parseInt(e.permission_id)}));-1!=n?t.rolePermissions.create[n].rolePermissionTypes.create.push({permission_type_id:parseInt(e.permission_type_id)}):t.rolePermissions.create.push({permission_id:parseInt(e.permission_id),rolePermissionTypes:{create:[{permission_type_id:parseInt(e.permission_type_id)}]}})}))},registerRole:function(t){var e=this;this.role.rolePermissions=this.rolePermissions,this.$apollo.mutate({mutation:C.b,variables:this.role}).then((function(n){n.data;e.successNotification("Role  registered successfully!"),t.target.reset(),e.$emit("on-close-role-form")})).catch((function(t){console.log(t)}))},updateRole:function(t){var e=this;this.role.rolePermissions=this.rolePermissions,this.$apollo.mutate({mutation:C.d,variables:this.role}).then((function(n){n.data;e.successNotification("Role  updated successfully!"),t.target.reset(),e.$emit("on-close-role-form")})).catch((function(t){console.log(t)}))}}),watch:{$props:{handler:function(){var t,e=this;null!==(t=this._role)&&void 0!==t&&t.id&&(this.editMode=!1,this.role=P({},this._role),this._role.rolePermissions.forEach((function(t){t.permissionTypes.forEach((function(n){e.selected.push({permission_id:t.permission.id,permission_type_id:n.id})}))})))},deep:!0,immediate:!0}}},S=n(60),component=Object(S.a)(w,(function(){var t=this,e=t._self._c;return e(o.a,[e("div",{staticClass:"blue lighten-1 white--text pa-2 pb-6"},[e(v.a,{staticClass:"mx-0"},[e("div",[e(r.c,{staticClass:"text-h5 pb-0"},[t._v("\n          Role Registration Form\n        ")]),t._v(" "),e("span",{staticClass:"ml-4"},[t._v("registration form")])],1),t._v(" "),e(_.a),t._v(" "),t.disableForm?e("button",{staticClass:"v-btn ma-5 mt-6 v-btn--is-elevated v-btn--has-bg theme--light pl-1 black v-size--default white--text",attrs:{icon:"mdi-pen"},on:{click:function(e){t.editMode=!0}}},[e(m.a,{attrs:{right:"",dark:"",medium:""}},[t._v(" mdi-pen ")]),t._v(" "),e("span",{staticClass:"v-btn__content text-white ml-1"},[t._v(" Edit ")])],1):t._e()],1)],1),t._v(" "),e(h.a,{staticClass:"mt-4 p-4",attrs:{disabled:t.disableForm},on:{submit:function(e){return e.preventDefault(),t.onFormSubmitted.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("div",{staticClass:"mx-5"},[e(v.a,{staticClass:"px-3"},[e(l.a,{attrs:{cols:"12",md:"6"}},[e(y.a,{attrs:{label:"Name",outlined:"",required:""},model:{value:t.role.name,callback:function(e){t.$set(t.role,"name",e)},expression:"role.name"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"6"}},[e(y.a,{attrs:{label:"Code",outlined:"",required:""},model:{value:t.role.code,callback:function(e){t.$set(t.role,"code",e)},expression:"role.code"}})],1)],1)],1),t._v(" "),e(d.a,{staticClass:"my-2"}),t._v(" "),e(f.a,{staticClass:"blue-grey lighten-5",scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",{staticClass:"blue-grey lighten-4"},[e("th",{staticClass:"text-center blue-grey lighten-2",staticStyle:{"min-width":"250px"}},[e("b",[t._v("PERMISSIONS")])]),t._v(" "),t._l(t.permission_types.data,(function(n){return e("th",{key:n.id,staticClass:"text-center"},[e("b",[t._v(t._s(n.action))])])}))],2)]),t._v(" "),e("tbody",t._l(t.permissions.data,(function(n){return e("tr",{key:n.id},[e("td",{staticClass:"text-center blue-grey lighten-3"},[t._v(t._s(n.name))]),t._v(" "),t._l(t.permission_types.data,(function(o){return e("td",{key:o.id,staticClass:"text-center"},[e(c.a,{staticClass:"text-center",attrs:{value:{permission_type_id:o.id,permission_id:n.id}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)}))],2)})),0)]},proxy:!0}])}),t._v(" "),e(d.a,{staticClass:"mb-2"}),t._v(" "),e(l.a,{staticClass:"d-flex"},[e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button"},on:{click:function(e){return t.$emit("on-close-role-form")}}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Cancel ")])]),t._v(" "),e(_.a),t._v(" "),t.disableForm?t._e():e("div",[t.editMode?e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Update ")])]):e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Add ")])])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);