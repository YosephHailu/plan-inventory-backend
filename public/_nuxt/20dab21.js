(window.webpackJsonp=window.webpackJsonp||[]).push([[50,28],{653:function(t,e,n){"use strict";n.d(e,"a",(function(){return f})),n.d(e,"b",(function(){return v})),n.d(e,"d",(function(){return h})),n.d(e,"c",(function(){return _}));var o,r,c,l,d=n(91),m=n(60),f=Object(m.a)(o||(o=Object(d.a)(["\n  query {\n    donors {\n      id\n      name\n      description\n    }   \n  }\n"]))),v=Object(m.a)(r||(r=Object(d.a)(["\n  mutation ($input: DonorCreateInput!) {\n    createDonor(input: $input) {\n      id\n    }\n  }\n"]))),h=Object(m.a)(c||(c=Object(d.a)(["\n  mutation ($input: DonorUpdateInput!) {\n    updateDonor(input: $input) {\n      id\n    }\n  }\n"]))),_=Object(m.a)(l||(l=Object(d.a)(["\n  mutation($id: ID!) {\n    deleteDonor(id: $id) {\n      id\n    }\n  }\n"])))},679:function(t,e,n){"use strict";n.r(e);var o=n(177),r=n(714),c=n(192),l=n(264),d=n(175),m=n(84),f=n(272),v=(n(38),n(279),{props:["donors","search"],data:function(){return{expanded:[],pagination:{},headers:[{text:"id",value:"id",class:"blue-grey lighten-3"},{text:"Name",align:"start",value:"name",class:"blue-grey lighten-3"},{text:"Description",value:"description",class:"blue-grey lighten-3"},{text:"Action",value:"menu",class:"blue-grey lighten-3"}]}}}),h=n(90),component=Object(h.a)(v,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.donors,"items-per-page":25,search:t.search},scopedSlots:t._u([{key:"item.menu",fn:function(n){var r=n.item;return[e(f.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,l=n.attrs;return[e(o.a,t._g(t._b({attrs:{icon:""}},"v-btn",l,!1),r),[e(c.a,[t._v("mdi-menu")])],1)]}}],null,!0)},[t._v(" "),e(l.a,{staticClass:"col-12 px-0"},[e(d.a,{on:{click:function(e){return t.$emit("on-donor-detail-clicked",r)}}},[e(c.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-eye")]),t._v(" "),e(m.c,{staticClass:"pr-5"},[t._v("detail")])],1),t._v(" "),e(d.a,{staticClass:"red lighten-3",on:{click:function(e){return t.$emit("on-delete-donor-clicked",r)}}},[e(c.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-delete")]),t._v(" "),e(m.c,[t._v("Delete")])],1)],1)],1)]}}])})}),[],!1,null,null,null);e.default=component.exports},680:function(t,e,n){"use strict";n.r(e);var o=n(269),r=n(278),c=n(660),l=n(267),d=n(662),m=n(192),f=n(712),v=n(596),h=n(121),_=n(624),D=(n(39),n(14),n(85),n(13),n(12),n(6),n(16),n(10),n(17),n(1)),y=n(106),O=n(280),x=n(25),C=n(33),j=n(653);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(D.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var $={props:["_donor"],middleware:["authenticated"],data:function(){return{valid:!1,editMode:!1,donor:{},nameRules:[function(t){return!!t||"Name field is required"}],element_permissions:{edit_btn:[{resource:x.a.DONOR,action:C.a.UPDATE}]},submitting:!1}},computed:{disableForm:function(){var t;return!this.editMode&&null!=(null===(t=this._donor)||void 0===t?void 0:t.id)}},methods:k(k({},Object(y.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{can:function(t){return Object(O.a)(this.$auth.user,t)},onFormSubmitted:function(t){this.submitting=!0,this.$refs.form.validate()&&(this.editMode?this.updateDonor(t):this.registerDonor(t))},registerDonor:function(t){var e=this;this.$apollo.mutate({mutation:j.b,variables:{input:this.donor}}).then((function(n){n.data;e.successNotification("Donor registered successfully!"),t.target.reset(),e.$emit("on-close-donor-form"),e.submitting=!1})).catch((function(t){console.log(t),e.submitting=!1}))},updateDonor:function(t){var e=this;delete this.donor.__typename,this.$apollo.mutate({mutation:j.d,variables:{input:this.donor}}).then((function(n){n.data;e.successNotification("Donor updated successfully!"),t.target.reset(),e.$emit("on-close-donor-form"),e.submitting=!1})).catch((function(t){console.log(t)}))}}),watch:{$props:{handler:function(){var t;null!==(t=this._donor)&&void 0!==t&&t.id?(this.editMode=!1,this.donor=k({},this._donor)):(this.editMode=!1,this.donor={})},deep:!0,immediate:!0}}},N=n(90),component=Object(N.a)($,(function(){var t=this,e=t._self._c;return e(o.a,[e("div",{staticClass:"grey lighten-2 pa-2 pb-4"},[e(f.a,{staticClass:"mx-0"},[e("div",[e(r.c,{staticClass:"text-h5 pb-0"},[t._v("\n          Donor Registration Form\n        ")]),t._v(" "),e("span",{staticClass:"ml-4"},[t._v("registration form")])],1),t._v(" "),e(v.a),t._v(" "),t.disableForm&&t.can(t.element_permissions.edit_btn)?e("button",{staticClass:"v-btn ma-5 mt-6 v-btn--is-elevated v-btn--has-bg theme--light pl-1 black v-size--default white--text",attrs:{icon:"mdi-pen"},on:{click:function(e){t.editMode=!0}}},[e(m.a,{attrs:{right:"",dark:"",medium:""}},[t._v(" mdi-pen ")]),t._v(" "),e("span",{staticClass:"v-btn__content text-white ml-1"},[t._v(" Edit ")])],1):t._e()],1)],1),t._v(" "),e(d.a,{ref:"form",staticClass:"mt-4 p-4",attrs:{disabled:t.disableForm},on:{submit:function(e){return e.preventDefault(),t.onFormSubmitted.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("div",{staticClass:"mx-5"},[e(f.a,{staticClass:"px-3"},[e(c.a,{attrs:{cols:"12",md:"9"}},[e(h.a,{staticClass:"py-0",attrs:{label:"Name",outlined:"",required:"",rules:t.nameRules},model:{value:t.donor.name,callback:function(e){t.$set(t.donor,"name",e)},expression:"donor.name"}})],1)],1),t._v(" "),e(c.a,{attrs:{cols:"12",md:"12"}},[e(_.a,{attrs:{label:"Description",outlined:"",required:""},model:{value:t.donor.description,callback:function(e){t.$set(t.donor,"description",e)},expression:"donor.description"}})],1)],1),t._v(" "),e(l.a,{staticClass:"my-2"}),t._v(" "),e(c.a,{staticClass:"d-flex"},[e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button"},on:{click:function(e){return t.$emit("on-close-donor-form")}}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Cancel ")])]),t._v(" "),e(v.a),t._v(" "),t.editMode||t.disableForm?t._e():e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:t.submitting}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Add Donor ")])]),t._v(" "),t.editMode&&!t.disableForm?e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:t.submitting}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Update Donor ")])]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},725:function(t,e,n){"use strict";n.r(e);var o=n(615),r=n(177),c=n(269),l=n(278),d=n(626),m=n(267),f=n(192),v=n(596),h=(n(13),n(14),n(12),n(16),n(10),n(17),n(1)),_=(n(38),n(279),n(6),n(46),n(679)),D=n(680),y=n(653),O=n(106),x=n(280),C=n(25),j=n(33);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var $={components:{DonorTable:_.default,DonorForm:D.default},middleware:["authenticated"],data:function(){return{breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/"},{text:"Donors",disabled:!0,href:"/config/donor"}],editMode:!1,search:"",donorFormDialogVisible:!1,donors:[],donor:{},deleteDialog:!1,element_permissions:{create_btn:[{resource:C.a.DONOR,action:j.a.CREATE}]}}},apollo:{donors:{query:y.a,variables:function(){return{name:"%".concat(this.search,"%")}},fetchPolicy:"cache-and-network"}},methods:k(k({},Object(O.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{can:function(t){return Object(x.a)(this.$auth.user,t)},onDonorDetailClicked:function(t){this.donorFormDialogVisible=!0,this.donor=k({},t)},filterOnlyCapsText:function(t,e,n){return null!=t&&null!=e&&"string"==typeof t&&-1!==t.toString().toLocaleUpperCase().indexOf(e)},closeDonorForm:function(){this.donor=null,this.donorFormDialogVisible=!1,this.$apollo.queries.donors.refetch()},onDonorDeleteClick:function(t){this.deleteDialog=!0,this.donor=t},deleteDonor:function(){var t=this;this.$apollo.mutate({mutation:y.c,variables:{id:this.donor.id}}).then((function(e){e.data;t.$apollo.queries.donors.refetch(),t.successNotification("Donor removed successfully!")})).catch((function(e){t.errorNotification("Error!  Make sure related resource doesn't exist!"),console.log(e)})),this.role=null,this.deleteDialog=!1}}),created:function(){}},N=n(90),component=Object(N.a)($,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-5 grey lighten-3"},[e(o.a,{attrs:{items:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[e(f.a,[t._v("mdi-chevron-double-right")])]},proxy:!0}])}),t._v(" "),e("div",{staticClass:"px-4 row ma-1"},[t._m(0),t._v(" "),e(v.a),t._v(" "),e("div",{staticClass:"pr-2"},[t.can(t.element_permissions.create_btn)?e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg px-4 py-3 black white--text lighten-5",attrs:{type:"button",icon:"mdi-home"},on:{click:function(e){t.donorFormDialogVisible=!0}}},[e(f.a,{attrs:{left:"",dark:""}},[t._v(" mdi-plus-circle ")]),t._v("\n        Add Donor\n      ")],1):t._e()])],1),t._v(" "),e("div",{staticClass:"px-5 py-3"},[e("div",{staticClass:"row mb-4"}),t._v(" "),e("donor-table",{attrs:{donors:t.donors},on:{"on-donor-detail-clicked":t.onDonorDetailClicked,"on-delete-donor-clicked":t.onDonorDeleteClick}})],1),t._v(" "),e("div",[e(d.a,{attrs:{width:"800"},on:{"click:outside":t.closeDonorForm},model:{value:t.donorFormDialogVisible,callback:function(e){t.donorFormDialogVisible=e},expression:"donorFormDialogVisible"}},[e("donor-form",{attrs:{_donor:t.donor},on:{"on-close-donor-form":t.closeDonorForm}})],1),t._v(" "),e(d.a,{attrs:{width:"500"},model:{value:t.deleteDialog,callback:function(e){t.deleteDialog=e},expression:"deleteDialog"}},[e(c.a,{staticClass:"red lighten-4"},[e(l.c,{staticClass:"text-h5 red lighten-2"},[t._v(" confirm ")]),t._v(" "),e(l.b,{staticClass:"pt-3"},[t._v("\n          Are you sure you want to delete this resource!\n        ")]),t._v(" "),e(m.a),t._v(" "),e(l.a,[e(v.a),t._v(" "),e(r.a,{attrs:{color:"primary",text:""},on:{click:t.deleteDonor}},[t._v("\n            I accept\n          ")])],1)],1)],1)],1)],1)}),[function(){var t=this,e=t._self._c;return e("div",[e("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[t._v("\n        All Donor\n      ")]),t._v(" "),e("span",{staticClass:"grey--text text--darken-1"},[t._v("All Donors Are Shown Here.")])])}],!1,null,null,null);e.default=component.exports}}]);