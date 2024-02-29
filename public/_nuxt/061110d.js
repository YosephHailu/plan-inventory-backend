(window.webpackJsonp=window.webpackJsonp||[]).push([[4,24],{629:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return y})),n.d(t,"d",(function(){return R})),n.d(t,"b",(function(){return O})),n.d(t,"e",(function(){return $}));var o,r,c,d,l,v,m,h=n(93),_=n(61),f=Object(_.a)(o||(o=Object(h.a)(["\n  query($page: Int!, $per_page: Int!, $name: String) {\n    items(first: $per_page, page: $page, name: $name) {\n      data {\n        id\n        name\n        item_code\n        description\n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }   \n  }\n"]))),y=(Object(_.a)(r||(r=Object(h.a)(["\n  query All_ITEM_LOOKUP_QUERY {\n    itemCategories {\n      id\n      name\n    }   \n    donors {\n      id\n      name\n    }  \n    lotNumbers {\n      id\n      lot_number\n    }   \n    unitOfMeasurements {\n      id\n      name\n      abbreviation\n    }  \n    officeLocations {\n      id\n      address\n    } \n    stockTypes {\n      id\n      name\n    }   \n    whereHouses {\n      id\n      name\n      address\n    }     \n    departments {\n      id\n      name\n    }   \n  }\n"]))),Object(_.a)(c||(c=Object(h.a)(["\n  query FIND_ITEM_QUERY($id: ID!) {\n    item(id: $id) {\n        id\n        name\n        item_code\n        description\n    }   \n  }\n"])))),R=Object(_.a)(d||(d=Object(h.a)(["\n  query ITEM_BIN_CARD_QUERY($id: ID!, $date_from: Date, $date_to: Date) {\n    itemBinCard(id: $id, date_from: $date_from, date_to: $date_to) {\n      stockIssueItems {\n        id\n        quantity\n        stockIssue {\n          id\n          date\n          created_at\n          createdBy {\n            id\n            name\n          }\n          stockRequest {\n            id\n            reference_no\n          }\n        }\n      }\n      goodReceiveItem {\n        id\n          received_quantity\n          checked_quantity\n          approved_quantity\n          description\n          expiry_date\n          comment\n          condition\n          unit_price\n          created_at\n          unitOfMeasurement {\n            id\n            abbreviation\n          }\n          donor {\n            id\n            name\n          }\n          stockType {\n            id\n            name\n          }\n          project {\n            id\n            name\n          }\n          goodReceive {\n            id\n            remark\n            status\n            received_by\n            received_date\n            reference_number\n            batch_number\n            loading_number\n            itemCategory {\n              id\n              name\n            }\n            projectObject {\n              id\n              name\n            }\n            createdBy {\n              id\n              name\n            }\n          }\n          item {\n            id\n            name\n            description\n          }\n      }\n    }   \n  }\n"]))),O=Object(_.a)(l||(l=Object(h.a)(["\n  mutation ($input: ItemCreateInput!) {\n    createItem(input: $input) {\n      id\n    }\n  }\n"]))),$=Object(_.a)(v||(v=Object(h.a)(["\n  mutation ($input: ItemUpdateInput!) {\n    updateItem(input: $input) {\n      id\n    }\n  }\n"])));Object(_.a)(m||(m=Object(h.a)(["\n  mutation($id: ID!) {\n    deleteItem(id: $id) {\n      id\n    }\n  }\n"])))},634:function(e,t,n){var content=n(635);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(23).default)("7b5d4dc6",content,!0,{sourceMap:!1})},635:function(e,t,n){var o=n(22)((function(i){return i[1]}));o.push([e.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}",""]),o.locals={},e.exports=o},636:function(e,t,n){var content=n(637);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(23).default)("ae7a972c",content,!0,{sourceMap:!1})},637:function(e,t,n){var o=n(22)((function(i){return i[1]}));o.push([e.i,'.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-bottom:0;margin-top:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:24px}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{cursor:pointer;height:100%;opacity:0;position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;left:-12px;margin:7px;position:absolute;top:calc(50% - 24px);transition:inherit;width:34px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";left:0;opacity:.2;position:absolute;right:0;top:0;transform:scale(.2);transform-origin:center center;transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{height:28px;left:-9px;width:28px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:inherit}.v-input--selection-controls.v-input--is-disabled:not(.v-input--is-readonly){pointer-events:none}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),o.locals={},e.exports=o},647:function(e,t,n){"use strict";n.d(t,"c",(function(){return y})),n.d(t,"g",(function(){return R})),n.d(t,"b",(function(){return O})),n.d(t,"d",(function(){return $})),n.d(t,"a",(function(){return I})),n.d(t,"e",(function(){return j})),n.d(t,"h",(function(){return k})),n.d(t,"f",(function(){return x}));var o,r,c,d,l,v,m,h,_=n(93),f=n(61),y=Object(f.a)(o||(o=Object(_.a)(["\n  query($page: Int!, $per_page: Int!, $status: StatusEnum, $where_house_id: ID) {\n    goodReceives(first: $per_page, page: $page, status: $status, where_house_id: $where_house_id) {\n      data {\n        id\n        remark\n        vendor_name\n        purchase_order_no\n        invoice_no\n        project\n        status\n        received_by\n        received_date\n        reference_number\n        whereHouse {\n          id\n          name\n        }\n        goodReceiveItems {\n          id\n          received_quantity\n          checked_quantity\n          approved_quantity\n          description\n          expiry_date\n          comment\n          condition\n          unitOfMeasurement {\n            id\n            abbreviation\n          }\n          donor {\n            id\n            name\n          }\n          item {\n            id\n            name\n          }\n        }\n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }\n  }\n"]))),R=Object(f.a)(r||(r=Object(_.a)(["\n  query($id: ID!) {\n    goodReceive(id: $id) {\n      id\n      remark\n      vendor_name\n      vendor_id\n      purchase_order_no\n      invoice_no\n      project\n      status\n      received_by\n      received_date\n      reference_number\n      projectObject {\n        id\n        name\n      }\n      whereHouse {\n        id\n        name\n        address\n      }\n      goodReceiveItems {\n        id\n        received_quantity\n        checked_quantity\n        approved_quantity\n        description\n        expiry_date\n        comment\n        condition\n        unit_price\n        unitOfMeasurement {\n          id\n          abbreviation\n        }\n        donor {\n          id\n          name\n        }\n        project {\n          id\n          name\n        }\n        item {\n          id\n          name\n        }\n      }\n    }\n  }\n"]))),O=Object(f.a)(c||(c=Object(_.a)(["\n  query All_GOOD_RECEIVE_LOOKUP_QUERY($where_house_id: ID) {\n    whereHouses(id: $where_house_id) {\n      id\n      name\n    }     \n    conditions {\n      id\n      name\n    }\n    donors {\n      id\n      name\n    }\n    projects {\n      id\n      name\n      outline_no\n    }\n    stockTypes {\n      id\n      name\n    }\n    itemCategories {\n      id\n      name\n    }\n    unitOfMeasurements {\n      id\n      name\n      abbreviation\n    }  \n  }\n"]))),$=Object(f.a)(d||(d=Object(_.a)(["\n  mutation ($id: ID!, $input: [GoodReceiveCheckInput]!) {\n    checkGoodReceive(id: $id, input: $input) {\n      id\n    }\n  }\n"]))),I=Object(f.a)(l||(l=Object(_.a)(["\n  mutation ($id: ID!, $input: [GoodReceiveApproveInput]!) {\n    approveGoodReceive(id: $id, input: $input) {\n      id\n    }\n  }\n"]))),j=Object(f.a)(v||(v=Object(_.a)(["\n  mutation ($input: GoodReceiveCreateInput!) {\n    createGoodReceive(input: $input) {\n      id\n    }\n  }\n"]))),k=Object(f.a)(m||(m=Object(_.a)(["\n  mutation ($input: GoodReceiveUpdateInput!) {\n    updateGoodReceive(input: $input) {\n      id\n    }\n  }\n"]))),x=Object(f.a)(h||(h=Object(_.a)(["\n  mutation($id: ID!) {\n    deleteGoodReceive(id: $id) {\n      id\n    }\n  }\n"])))},649:function(e,t,n){"use strict";n(13),n(14),n(11),n(16),n(10),n(17);var o=n(126),r=n(1),c=(n(6),n(46),n(634),n(636),n(50)),d=n(90),l=n(57),v=n(2).a.extend({name:"rippleable",directives:{ripple:l.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),m=n(192),h=n(7);function _(e){e.preventDefault()}var f=Object(h.a)(d.a,v,m.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var e=this,t=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return e.valueComparator(n,t)})):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel:function(){var label=d.a.options.methods.genLabel.call(this);return label?(label.data.on={click:_},label):label},genInput:function(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:_},ref:"input"})},onClick:function(e){this.onChange(),this.$emit("click",e)},onChange:function(){var e=this;if(this.isInteractive){var t=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!e.valueComparator(n,t)}))).length===n&&input.push(t)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(input,t)?null:t:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(e){this.isFocused=!0,this.$emit("focus",e)},onBlur:function(e){this.isFocused=!1,this.$emit("blur",e)},onKeydown:function(e){}}}),y=["title"];function R(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?R(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):R(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=f.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return O(O({},d.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(e){var t=this;this.$nextTick((function(){return t.inputIndeterminate=e}))},inputIndeterminate:function(e){this.$emit("update:indeterminate",e)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var e=this.attrs$,t=(e.title,Object(o.a)(e,y));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(c.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",O(O({},t),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},657:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h})),n.d(t,"d",(function(){return _})),n.d(t,"c",(function(){return f}));var o,r,c,d,l=n(93),v=n(61),m=Object(v.a)(o||(o=Object(l.a)(["\n  query {\n    conditions {\n      id\n      name\n      description\n    }   \n  }\n"]))),h=Object(v.a)(r||(r=Object(l.a)(["\n  mutation ($input: ConditionCreateInput!) {\n    createCondition(input: $input) {\n      id\n    }\n  }\n"]))),_=Object(v.a)(c||(c=Object(l.a)(["\n  mutation ($input: ConditionUpdateInput!) {\n    updateCondition(input: $input) {\n      id\n    }\n  }\n"]))),f=Object(v.a)(d||(d=Object(l.a)(["\n  mutation($id: ID!) {\n    deleteCondition(id: $id) {\n      id\n    }\n  }\n"])))},658:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h})),n.d(t,"d",(function(){return _})),n.d(t,"c",(function(){return f}));var o,r,c,d,l=n(93),v=n(61),m=Object(v.a)(o||(o=Object(l.a)(["\n  query {\n    whereHouses {\n      id\n      name\n      address\n      capacity\n      description\n    }   \n  }\n"]))),h=Object(v.a)(r||(r=Object(l.a)(["\n  mutation ($input: WhereHouseCreateInput!) {\n    createWhereHouse(input: $input) {\n      id\n    }\n  }\n"]))),_=Object(v.a)(c||(c=Object(l.a)(["\n  mutation ($input: WhereHouseUpdateInput!) {\n    updateWhereHouse(input: $input) {\n      id\n    }\n  }\n"]))),f=Object(v.a)(d||(d=Object(l.a)(["\n  mutation($id: ID!) {\n    deleteWhereHouse(id: $id) {\n      id\n    }\n  }\n"])))},667:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return h}));var o,r,c,d,l=n(93),v=n(61),m=Object(v.a)(o||(o=Object(l.a)(["\nquery($page: Int!, $per_page: Int!, $approved: Boolean, $search: String, $program_area_id: ID, $where_house_id: ID, \n  $project_id: ID, $item_category_id: ID, $item_id: ID, $donor_id: ID, $stock_type_id: ID, $dates: JSON) {\n  goodReceiveItems(first: $per_page, page: $page, approved: $approved, search: $search, \n    programarea: $program_area_id, wherehouse: $where_house_id, project_id: $project_id, itemcategory: $item_category_id, \n    donor_id: $donor_id, stock_type_id: $stock_type_id, item_id: $item_id, dates: $dates) {\n      data {\n          id\n          received_quantity\n          checked_quantity\n          approved_quantity\n          issued_quantity\n          description\n          expiry_date\n          comment\n          condition\n          unit_price\n          balance_due\n          project {\n            id\n            name\n          }\n          unitOfMeasurement {\n            id\n            abbreviation\n          }\n          donor {\n            id\n            name\n          }\n          stockType {\n            id\n            name\n          }\n          goodReceive {\n            id\n            remark\n            status\n            received_by\n            received_date\n            reference_number\n            batch_number\n            loading_number\n            itemCategory {\n              id\n              name\n            }\n            projectObject {\n              id\n              name\n            }\n          }\n          item {\n            id\n            name\n            description\n          }\n          stockVerification {\n            id\n            quantity\n            remarks\n          }\n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }\n  }\n"]))),h=(Object(v.a)(r||(r=Object(l.a)(["\n  mutation ($input: GoodReceiveItemCreateInput!) {\n    createGoodReceiveItem(input: $input) {\n      id\n    }\n  }\n"]))),Object(v.a)(c||(c=Object(l.a)(["\n  mutation ($input: GoodReceiveItemUpdateInput!) {\n    updateGoodReceiveItem(input: $input) {\n      id\n    }\n  }\n"]))));Object(v.a)(d||(d=Object(l.a)(["\n  mutation($id: ID!) {\n    deleteGoodReceiveItem(id: $id) {\n      id\n    }\n  }\n"])))},749:function(e,t,n){"use strict";n.r(t);var o=n(653),r=n(694),c=n(177),d=n(695),l=n(632),v=n(696),m=n(796),h=n(125),_=n(624),f=(n(14),n(88),n(13),n(11),n(6),n(16),n(10),n(17),n(1)),y=n(108),R=(n(629),n(667));function O(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function $(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){Object(f.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var I={props:["_goodReceive","_index","items","conditions","donors","unitOfMeasurements","stockTypes","projects"],data:function(){return{disableForm:!1,lookup:{},goodReceive:{},valid:!1,editMode:!1,submitting:!1,fieldRequiredRole:[function(e){return!!e||"This field is required"}]}},methods:$($({},Object(y.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(e){var t,n;this.$refs.form.validate()&&(this.editMode?null!==(t=this.goodReceive)&&void 0!==t&&t.id?this.updateItem(e):this.$emit("on-update-good-receive-item",this.goodReceive):null!==(n=this._goodReceive)&&void 0!==n&&n.id?this.registerGoodReceiveItem(e):(this.$emit("on-add-good-receive-item",this.goodReceive),this.editMode=!0))},updateItem:function(e){var t=this;this.$apollo.mutate({mutation:R.b,variables:{input:this.goodReceive}}).then((function(n){n.data;t.successNotification("Item updated successfully!"),e.target.reset(),t.$router.go(-1),t.submitting=!1})).catch((function(e){console.log(e)}))}}),watch:{$props:{handler:function(){var e,t;null!==(e=this._goodReceive)&&void 0!==e&&e.item_id?(this.goodReceive=$({},this._goodReceive),this.goodReceive.item_id=parseInt(this._goodReceive.item_id),null!==(t=this._goodReceive)&&void 0!==t&&t.id&&(this.editMode=!0)):(this.editMode=!1,this.goodReceive={})},deep:!0,immediate:!0}}},j=n(51),component=Object(j.a)(I,(function(){var e=this,t=e._self._c;return t(v.a,{ref:"form",staticClass:"py-2",staticStyle:{position:"relative"},attrs:{disabled:e.disableForm},on:{submit:function(t){return t.preventDefault(),e.onFormSubmitted.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t("hr",{staticClass:"my-5",staticStyle:{width:"85%"}}),e._v(" "),t(r.a,{staticStyle:{position:"absolute",left:"-5px",top:"20px"},attrs:{color:e.editMode?"success":"error",content:e._index+1,inline:""}}),e._v(" "),t(l.a,{staticClass:"px-2 pt-5 grey lighten-2"},[t(m.a,[t(d.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(o.a,{attrs:{dense:"",items:e.items,"item-value":"id","item-text":"name",label:"Select Item *",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.goodReceive.item_id,callback:function(t){e.$set(e.goodReceive,"item_id",e._n(t))},expression:"goodReceive.item_id"}})],1),e._v(" "),t(d.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(h.a,{staticClass:"py-0",attrs:{dense:"",label:"Items/Services Description* ",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.goodReceive.description,callback:function(t){e.$set(e.goodReceive,"description",t)},expression:"goodReceive.description"}})],1),e._v(" "),t(d.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(h.a,{staticClass:"py-0",attrs:{dense:"",label:"Unit Price * ",outlined:"",required:"",type:"number",step:"any",rules:e.fieldRequiredRole},model:{value:e.goodReceive.unit_price,callback:function(t){e.$set(e.goodReceive,"unit_price",e._n(t))},expression:"goodReceive.unit_price"}})],1),e._v(" "),t(d.a,{staticClass:"py-0",attrs:{cols:"12",md:"2"}},[t(h.a,{staticClass:"py-0",attrs:{dense:"",label:"Ordered Quantity * ",outlined:"",required:"",type:"number",step:"any",rules:e.fieldRequiredRole},model:{value:e.goodReceive.ordered_quantity,callback:function(t){e.$set(e.goodReceive,"ordered_quantity",e._n(t))},expression:"goodReceive.ordered_quantity"}})],1),e._v(" "),t(d.a,{staticClass:"py-0",attrs:{cols:"12",md:"2"}},[t(h.a,{staticClass:"py-0",attrs:{dense:"",label:"Received Quantity * ",outlined:"",required:"",type:"number",step:"any",rules:e.fieldRequiredRole},model:{value:e.goodReceive.received_quantity,callback:function(t){e.$set(e.goodReceive,"received_quantity",e._n(t))},expression:"goodReceive.received_quantity"}})],1),e._v(" "),t(d.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(o.a,{attrs:{dense:"",items:e.donors,"item-value":"id","item-text":"name",label:"Select Donor *",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.goodReceive.donor_id,callback:function(t){e.$set(e.goodReceive,"donor_id",e._n(t))},expression:"goodReceive.donor_id"}})],1),e._v(" "),t(d.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(o.a,{attrs:{dense:"",items:e.conditions,"item-value":"id","item-text":"name",label:"Item Condition",outlined:"",required:""},model:{value:e.goodReceive.condition_id,callback:function(t){e.$set(e.goodReceive,"condition_id",e._n(t))},expression:"goodReceive.condition_id"}})],1),e._v(" "),t(d.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(o.a,{attrs:{dense:"",items:e.stockTypes,"item-value":"id","item-text":"name",label:"Select Stock Type *",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.goodReceive.stock_type_id,callback:function(t){e.$set(e.goodReceive,"stock_type_id",e._n(t))},expression:"goodReceive.stock_type_id"}})],1),e._v(" "),t(d.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(o.a,{attrs:{dense:"",items:e.unitOfMeasurements,"item-value":"id","item-text":"name",label:"Select Unit Of Measurement *",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.goodReceive.unit_of_measurement_id,callback:function(t){e.$set(e.goodReceive,"unit_of_measurement_id",e._n(t))},expression:"goodReceive.unit_of_measurement_id"}})],1),e._v(" "),t(d.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(h.a,{staticClass:"py-0",attrs:{dense:"",label:"Expiry Date ",outlined:"",required:"",type:"date"},model:{value:e.goodReceive.expiry_date,callback:function(t){e.$set(e.goodReceive,"expiry_date",t)},expression:"goodReceive.expiry_date"}})],1),e._v(" "),t(d.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(_.a,{staticClass:"py-0",attrs:{dense:"",label:"Remark ",rows:"1",outlined:"",required:""},model:{value:e.goodReceive.comment,callback:function(t){e.$set(e.goodReceive,"comment",t)},expression:"goodReceive.comment"}})],1),e._v(" "),t(d.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(o.a,{attrs:{dense:"",items:e.projects,"item-value":"id","item-text":"label",label:"Select Project",outlined:"",required:""},model:{value:e.goodReceive.project_id,callback:function(t){e.$set(e.goodReceive,"project_id",e._n(t))},expression:"goodReceive.project_id"}})],1),e._v(" "),t(d.a,{staticClass:"py-3 row mt-0"},[e.editMode?t("div",{staticStyle:{position:"absolute",right:"4px",top:"-2px"}},[t(c.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text blue",attrs:{type:"submit",loading:e.submitting,disabled:!e.valid||e.submitting||e.disableForm}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Update ")])]),e._v(" "),t(c.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text red",attrs:{type:"button",loading:e.submitting,disabled:!e.valid||e.submitting||e.disableForm},on:{click:function(t){return e.$emit("on-delete-good-receive-item",e._index)}}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Delete ")])])],1):t(c.a,{staticClass:"v-btn mt-2 v-btn--is-elevated absolute top-0 v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40",position:"absolute",right:"4px",top:"-1px"},attrs:{type:"submit",loading:e.submitting,disabled:!e.valid||e.submitting||e.disableForm}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Save Changes ")])])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},793:function(e,t,n){"use strict";n.r(t);var o=n(653),r=n(177),c=n(649),d=n(695),l=n(632),v=n(274),m=n(696),h=n(796),_=n(609),f=n(125),y=n(624),R=(n(13),n(14),n(16),n(10),n(17),n(1)),O=(n(71),n(98),n(6),n(193),n(11),n(39),n(34),n(108)),$=n(647),I=n(749),j=n(629);n(657),n(658);function k(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function x(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(t){Object(R.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var C={components:{GoodReceiveItemForm:I.default},props:["_item"],data:function(){return{goodReceive:{goodReceiveItems:[]},valid:!1,editMode:!1,submitting:!1,fieldRequiredRole:[function(e){return!!e||"This field is required"}],goodReceiveItems:[],items:[],conditions:[],whereHouses:[],donors:[],unitOfMeasurements:[],projects:[],itemCategories:[],stockTypes:[]}},apollo:{items:{query:j.a,fetchPolicy:"cache-and-network",update:function(data){return data.items.data.map((function(e){return e.id=parseInt(e.id),e}))},variables:function(){return x({},{page:1,per_page:200005})}},lookup:{query:$.b,fetchPolicy:"cache-and-network",update:function(data){return data}}},methods:x(x({},Object(O.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(e){this.editMode?this.updateItem(e):this.registerItem(e)},updateGoodReceiveItem:function(e){this.goodReceiveItems.find((function(t){return t.item_id==e.item_id})).received_quantity=e.received_quantity},deleteGoodReceiveItem:function(e){this.goodReceiveItems.splice(e,1)},addGoodReceiveItem:function(e){this.goodReceiveItems[this.goodReceiveItems.length-1]={},this.goodReceiveItems.unshift(e),console.log(e,this.goodReceiveItems)},registerItem:function(e){var t=this;this.$refs.form.validate(),this.submitting=!0,this.goodReceive.goodReceiveItems=this.goodReceiveItems.filter((function(e){return e.item_id})),console.log(this.goodReceive),this.$apollo.mutate({mutation:$.e,variables:{input:this.goodReceive}}).then((function(n){n.data;t.successNotification("Item registered  successfully!"),e.target.reset(),t.$router.push("/good_receive"),t.submitting=!1})).catch((function(e){t.errorNotification("Something Went Wrong!"),t.submitting=!1,console.log(e)}))},updateItem:function(e){var t=this;this.$apollo.mutate({mutation:$.h,variables:{input:this.goodReceive}}).then((function(n){n.data;t.successNotification("Item updated successfully!"),e.target.reset(),t.$router.go(-1),t.submitting=!1})).catch((function(e){console.log(e)}))}}),created:function(){var e;this.goodReceive.received_by=null===(e=this.$auth.user)||void 0===e?void 0:e.name},watch:{$props:{handler:function(){var e;console.log(this._item),null!==(e=this._goodReceive)&&void 0!==e&&e.id?(this.editMode=!0,this.goodReceiveItems.push({})):(this.editMode=!1,this.goodReceiveItems=[{}])},deep:!0,immediate:!0},lookup:{handler:function(){this.lookup&&(this.whereHouses=this.lookup.whereHouses.map((function(e){return e.id=parseInt(e.id),e})),this.conditions=this.lookup.conditions.map((function(e){return e.id=parseInt(e.id),e})),this.donors=this.lookup.donors.map((function(e){return e.id=parseInt(e.id),e})),this.unitOfMeasurements=this.lookup.unitOfMeasurements.map((function(e){return e.id=parseInt(e.id),e})),this.itemCategories=this.lookup.itemCategories.map((function(e){return e.id=parseInt(e.id),e})),this.stockTypes=this.lookup.stockTypes.map((function(e){return e.id=parseInt(e.id),e})),this.projects=this.lookup.projects.map((function(e){return e.id=parseInt(e.id),e.label="".concat(e.name,"/").concat(e.outline_no),e})))}}}},w=n(51),component=Object(w.a)(C,(function(){var e=this,t=e._self._c;return t(m.a,{ref:"form",on:{submit:function(t){return t.preventDefault(),e.onFormSubmitted.apply(null,arguments)}},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(l.a,[t(h.a,[t(d.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(f.a,{staticClass:"py-0",attrs:{dense:"",label:"Requested Date ",outlined:"",required:"",type:"date",rules:e.fieldRequiredRole},model:{value:e.goodReceive.received_date,callback:function(t){e.$set(e.goodReceive,"received_date",t)},expression:"goodReceive.received_date"}})],1),e._v(" "),t(d.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(f.a,{staticClass:"py-0",attrs:{dense:"",label:"Received By Name * ",outlined:"",required:"",disabled:"",rules:e.fieldRequiredRole},model:{value:e.goodReceive.received_by,callback:function(t){e.$set(e.goodReceive,"received_by",t)},expression:"goodReceive.received_by"}})],1),e._v(" "),t(d.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(f.a,{staticClass:"py-0",attrs:{dense:"",label:"Vendor Name ",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.goodReceive.vendor_name,callback:function(t){e.$set(e.goodReceive,"vendor_name",t)},expression:"goodReceive.vendor_name"}})],1),e._v(" "),t(d.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(f.a,{staticClass:"py-0",attrs:{dense:"",label:"Vendor Id ",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.goodReceive.vendor_id,callback:function(t){e.$set(e.goodReceive,"vendor_id",t)},expression:"goodReceive.vendor_id"}})],1),e._v(" "),t(d.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(f.a,{staticClass:"py-0",attrs:{dense:"",label:"Purchase Order Number ",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.goodReceive.purchase_order_no,callback:function(t){e.$set(e.goodReceive,"purchase_order_no",t)},expression:"goodReceive.purchase_order_no"}})],1),e._v(" "),t(d.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(f.a,{staticClass:"py-0",attrs:{dense:"",label:"Invoice Number ",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.goodReceive.invoice_no,callback:function(t){e.$set(e.goodReceive,"invoice_no",t)},expression:"goodReceive.invoice_no"}})],1),e._v(" "),t(d.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(f.a,{staticClass:"py-0",attrs:{dense:"",label:"Delivery Note/Waybill/ Bill of Lading Number",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.goodReceive.loading_number,callback:function(t){e.$set(e.goodReceive,"loading_number",t)},expression:"goodReceive.loading_number"}})],1),e._v(" "),t(d.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(f.a,{staticClass:"py-0",attrs:{dense:"",label:"Batch Number",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.goodReceive.batch_number,callback:function(t){e.$set(e.goodReceive,"batch_number",t)},expression:"goodReceive.batch_number"}})],1),e._v(" "),t(d.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(o.a,{attrs:{dense:"",items:e.whereHouses,"item-value":"id","item-text":"name",label:"Select Warehouse *",outlined:"",required:"",rules:e.fieldRequiredRole},model:{value:e.goodReceive.where_house_id,callback:function(t){e.$set(e.goodReceive,"where_house_id",e._n(t))},expression:"goodReceive.where_house_id"}})],1),e._v(" "),t(d.a,{staticClass:"py-0",attrs:{cols:"12",md:"4"}},[t(o.a,{attrs:{items:e.itemCategories,"item-value":"id","item-text":"name",label:"Select Category *",outlined:"",required:"",dense:"",rules:e.fieldRequiredRole},model:{value:e.goodReceive.item_category_id,callback:function(t){e.$set(e.goodReceive,"item_category_id",e._n(t))},expression:"goodReceive.item_category_id"}})],1),e._v(" "),t(d.a,{staticClass:"py-0",attrs:{cols:"12",md:"8"}},[t(y.a,{staticClass:"py-0",attrs:{dense:"",label:"Enter a short remark",rows:"1",outlined:"",required:""},model:{value:e.goodReceive.remark,callback:function(t){e.$set(e.goodReceive,"remark",t)},expression:"goodReceive.remark"}})],1)],1),e._v(" "),t("div",[t("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[e._v("Items")]),e._v(" "),t("span",{staticClass:"grey--text text--darken-1"},[e._v("Enter all the required details of the item.")])]),e._v(" "),e._l(e.goodReceiveItems,(function(n,o){return t("good-receive-item-form",{key:o,attrs:{_index:o,_goodReceive:n,items:e.items,conditions:e.conditions,donors:e.donors,unitOfMeasurements:e.unitOfMeasurements,stockTypes:e.stockTypes,projects:e.projects},on:{"on-add-good-receive-item":e.addGoodReceiveItem,"on-delete-good-receive-item":e.deleteGoodReceiveItem,"on-update-good-receive-item":e.updateGoodReceiveItem}})})),e._v(" "),t(v.a,{staticClass:"my-2"}),e._v(" "),t("div",{staticClass:"px-2"},[t(c.a,{staticClass:"ml-auto",attrs:{label:"check this box to confirm",rules:e.fieldRequiredRole},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}})],1),e._v(" "),t(d.a,{staticClass:"py-0 py-3 row"},[t("nuxt-link",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button",to:"/order/pending"}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Cancel ")])]),e._v(" "),t(_.a),e._v(" "),e.editMode?t(r.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:e.submitting,disabled:!e.valid||e.submitting}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Update ")])]):t(r.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:e.submitting}},[t("span",{staticClass:"v-btn__content text-white"},[e._v(" Submit ")])])],1)],2)],1)}),[],!1,null,null,null);t.default=component.exports}}]);