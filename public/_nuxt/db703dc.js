(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{642:function(e,t,n){var content=n(643);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(23).default)("1377ef10",content,!0,{sourceMap:!1})},643:function(e,t,n){var r=n(22)((function(i){return i[1]}));r.push([e.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),r.locals={},e.exports=r},654:function(e,t,n){"use strict";n(13),n(14),n(16),n(10),n(17);var r=n(1),o=(n(71),n(6),n(11),n(89),n(98),n(191),n(47),n(64),n(642),n(593)),l=n(125),c=n(62),d=n(0);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=m(m({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t.a=o.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return m(m({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object(d.r)(t,e.itemText),text=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=o.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),m(m({},f),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=m(m({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;if(e!==t){if(!this.autoSelectFirst){var r=t[this.$refs.menu.listIndex];r?this.setMenuIndex(e.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&e.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===d.y.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===d.y.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==d.y.backspace&&e!==d.y.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[r]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.p)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.p)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[d.y.home,d.y.end].includes(t)||o.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){o.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){o.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",o),null===(n=e.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),e.preventDefault()}}}})},700:function(e,t,n){"use strict";n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return _})),n.d(t,"c",(function(){return I})),n.d(t,"d",(function(){return y})),n.d(t,"e",(function(){return x}));var r,o,l,c,d,h,m=n(93),f=n(61),v=Object(f.a)(r||(r=Object(m.a)(["\n  query($page: Int!, $per_page: Int!, $name: String) {\n    users(first: $per_page, page: $page, name: $name) {\n      data {\n        id\n        name\n        email\n        username\n        is_active\n        is_locked\n        last_seen\n        roles {\n          id\n          name\n        }\n        whereHouse {\n          id\n          name\n        }     \n        project {\n          id\n          name\n        }   \n        createdBy {\n            id\n            name\n            username\n        }\n      }\n    }   \n  }\n"]))),_=Object(f.a)(o||(o=Object(m.a)(["\n  query All_USER_REGISTRATION_LOOKUP_QUERY {\n    whereHouses {\n      id\n      name\n      address\n    }     \n    projects {\n      id\n      name\n      outline_no\n    }   \n    all_roles {\n      id\n      name\n    }\n  }\n"]))),I=Object(f.a)(l||(l=Object(m.a)(["\n  mutation register($input: RegisterInput!) {\n    register (input: $input) {\n        token\n    }\n  }\n"]))),y=Object(f.a)(c||(c=Object(m.a)(["\n  mutation updateUser($input: UserUpdateInput!) {\n    updateUser (input: $input) {\n        name\n    }\n  }\n"]))),x=Object(f.a)(d||(d=Object(m.a)(["\n  mutation updateUser($id: ID!, $is_active: Boolean!) {\n    updateActiveStatus (input: {id: $id, is_active: $is_active}) {\n      id\n      name\n      is_active\n    }\n  }\n"])));Object(f.a)(h||(h=Object(m.a)(["\n  mutation($id: ID!) {\n    deleteUser(id: $id) {\n      id\n    }\n  }\n"])))},796:function(e,t,n){"use strict";n.r(t);var r=n(654),o=n(277),l=n(232),c=n(697),d=n(274),h=n(698),m=n(195),f=n(800),v=n(593),_=n(609),I=n(125),y=(n(39),n(13),n(14),n(11),n(6),n(16),n(10),n(17),n(1)),x=(n(36),n(71),n(34),n(108)),w=n(700);function S(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(t){Object(y.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var j={props:["_user"],data:function(){var e=this;return{editMode:!1,valid:!1,user:{roles:null},roles:[],projects:[],whereHouses:[],password_rules:[function(e){return!!e||"Password field is required"},function(e){return(null==e?void 0:e.length)>=8||"Password must be at least 8 characters long"},function(e){return/[A-Z]/.test(e)||"Password must contain at least one uppercase letter"},function(e){return/[a-z]/.test(e)||"Password must contain at least one lowercase letter"},function(e){return/[0-9]/.test(e)||"Password must contain at least one number"},function(e){return/[@$!%*?&#]/.test(e)||"Password must contain at least one special character"}],password_confirmation_rules:[function(e){return!!e||"Password confirmation field is required"},function(t){return t===e.user.password||"Password confirmation does not match"}]}},computed:{disableForm:function(){var e;return!this.editMode&&null!=(null===(e=this._user)||void 0===e?void 0:e.id)}},apollo:{lookup:{query:w.b,fetchPolicy:"cache-and-network",update:function(data){return data}}},methods:O(O({},Object(x.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(e){this.$refs.form.validate()&&(this.editMode?this.updateUser(e):this.registerUser(e))},registerUser:function(e){var t=this;this.$apollo.mutate({mutation:w.c,variables:{input:this.user}}).then((function(n){n.data;t.successNotification("User registered successfully!"),e.target.reset(),t.$emit("on-close-user-form")})).catch((function(e){console.log(e)}))},updateUser:function(e){var t=this;delete this.user.__typename,delete this.user.last_seen,delete this.user.username,delete this.user.whereHouse,delete this.user.project,delete this.user.createdBy,console.log(this.user),this.$apollo.mutate({mutation:w.d,variables:{input:this.user}}).then((function(n){n.data;t.successNotification("User updated successfully!"),e.target.reset(),t.$emit("on-close-user-form")})).catch((function(e){console.log(e)}))}}),watch:{$props:{handler:function(){var e,t,n;null!==(e=this._user)&&void 0!==e&&e.id?(console.log(this._user),this.user=O({},this._user),this.user.project_id=parseInt(null===(t=this._user.project)||void 0===t?void 0:t.id),this.user.where_house_id=parseInt(null===(n=this._user.whereHouse)||void 0===n?void 0:n.id),this.user.roles=this.user.roles.map((function(e){return parseInt(e.id)}))):this.user={}},deep:!0,immediate:!0},lookup:{handler:function(){this.lookup&&(this.whereHouses=this.lookup.whereHouses.map((function(e){return e.id=parseInt(e.id),e})),this.projects=this.lookup.projects.map((function(e){return e.id=parseInt(e.id),e.label="".concat(e.name,"/").concat(e.outline_no),e})),this.roles=this.lookup.all_roles.map((function(e){return e.id=parseInt(e.id),e})))}}}},C=n(51),component=Object(C.a)(j,(function(){var e=this,t=e._self._c;return t(o.a,[t("div",{staticClass:"blue lighten-1 white--text pa-2 pb-6"},[t(f.a,{staticClass:"mx-0"},[t("div",[t(l.c,{staticClass:"text-h5 pb-0"},[e._v("\n          User Registration Form\n        ")]),e._v(" "),t("span",{staticClass:"ml-4"},[e._v("registration form")])],1),e._v(" "),t(_.a),e._v(" "),e.disableForm?t("button",{staticClass:"v-btn ma-5 mt-6 v-btn--is-elevated v-btn--has-bg theme--light pl-1 black v-size--default white--text",attrs:{icon:"mdi-pen"},on:{click:function(t){e.editMode=!0}}},[t(m.a,{attrs:{right:"",dark:"",medium:""}},[e._v(" mdi-pen ")]),e._v(" "),t("span",{staticClass:"v-btn__content text-white ml-1"},[e._v(" Edit ")])],1):e._e()],1)],1),e._v(" "),t(h.a,{ref:"form",staticClass:"mt-4 p-4",attrs:{disabled:e.disableForm},on:{submit:function(t){return t.preventDefault(),e.onFormSubmitted.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t("div",{staticClass:"ma-5 pt-6"},[t(f.a,{staticClass:"px-3"},[t(c.a,{staticClass:"py-0",attrs:{cols:"12",md:"6"}},[t(I.a,{attrs:{label:"Full Name",outlined:"",dense:"",required:""},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}})],1),e._v(" "),t(c.a,{staticClass:"py-0",attrs:{cols:"12",md:"6"}},[t(v.a,{attrs:{items:e.roles,"item-value":"id","item-text":"name",label:"Select Role",chips:"",dense:"",multiple:"",outlined:"",required:""},model:{value:e.user.roles,callback:function(t){e.$set(e.user,"roles",t)},expression:"user.roles"}})],1),e._v(" "),t(c.a,{staticClass:"py-0",attrs:{cols:"12",md:"6"}},[t(I.a,{attrs:{label:"Email",disabled:e.editMode,outlined:"",dense:"",required:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),e._v(" "),t(c.a,{staticClass:"py-0",attrs:{cols:"12",md:"6"}},[t(I.a,{attrs:{label:"Username",disabled:e.editMode,outlined:"",dense:"",required:""},model:{value:e.user.username,callback:function(t){e.$set(e.user,"username",t)},expression:"user.username"}})],1),e._v(" "),t(c.a,{staticClass:"py-0",attrs:{cols:"12",md:"6"}},[t(I.a,{attrs:{label:"Password",type:"password",outlined:"",dense:"",required:"",rules:e.password_rules},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}})],1),e._v(" "),t(c.a,{staticClass:"py-0",attrs:{cols:"12",md:"6"}},[t(I.a,{attrs:{label:"Confirm Password",type:"password",outlined:"",dense:"",required:"",rules:e.password_confirmation_rules},model:{value:e.user.password_confirmation,callback:function(t){e.$set(e.user,"password_confirmation",t)},expression:"user.password_confirmation"}})],1),e._v(" "),t(c.a,{staticClass:"py-0",attrs:{cols:"12",md:"6"}},[t(r.a,{attrs:{dense:"",items:e.projects,"item-value":"id","item-text":"label",label:"Select Project",outlined:"",required:""},model:{value:e.user.project_id,callback:function(t){e.$set(e.user,"project_id",e._n(t))},expression:"user.project_id"}})],1),e._v(" "),t(c.a,{staticClass:"py-0",attrs:{cols:"12",md:"6"}},[t(r.a,{attrs:{dense:"",items:e.whereHouses,"item-value":"id","item-text":"name",label:"Select Where House",outlined:"",required:""},model:{value:e.user.where_house_id,callback:function(t){e.$set(e.user,"where_house_id",e._n(t))},expression:"user.where_house_id"}})],1)],1)],1),e._v(" "),t(d.a,{staticClass:"my-2"}),e._v(" "),t(c.a,{staticClass:"d-flex"},[t("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button"},on:{click:function(t){return e.$emit("on-close-user-form")}}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Cancel ")])]),e._v(" "),t(_.a),e._v(" "),e.disableForm?e._e():t("div",[e.editMode?t("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Update ")])]):t("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Add ")])])])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);