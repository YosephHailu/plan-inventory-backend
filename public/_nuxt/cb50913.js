(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{647:function(t,e,n){"use strict";n.d(e,"a",(function(){return v})),n.d(e,"b",(function(){return m})),n.d(e,"d",(function(){return h})),n.d(e,"c",(function(){return _}));var r,o,c,f,l=n(92),d=n(61),v=Object(d.a)(r||(r=Object(l.a)(["\n  query {\n    staffs {\n      id\n      name\n      role\n    }   \n  }\n"]))),m=Object(d.a)(o||(o=Object(l.a)(["\n  mutation ($input: StaffCreateInput!) {\n    createStaff(input: $input) {\n      id\n    }\n  }\n"]))),h=Object(d.a)(c||(c=Object(l.a)(["\n  mutation ($input: StaffUpdateInput!) {\n    updateStaff(input: $input) {\n      id\n    }\n  }\n"]))),_=Object(d.a)(f||(f=Object(l.a)(["\n  mutation($id: ID!) {\n    deleteStaff(id: $id) {\n      id\n    }\n  }\n"])))},738:function(t,e,n){"use strict";n.r(e);var r=n(276),o=n(231),c=n(695),f=n(273),l=n(696),d=n(194),v=n(779),m=n(609),h=n(124),_=(n(38),n(13),n(14),n(12),n(6),n(16),n(10),n(17),n(1)),O=n(106),y=n(288),j=n(15),w=n(24),C=n(647);function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(e){Object(_.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var $={props:["_staff"],middleware:["authenticated"],data:function(){return{valid:!1,editMode:!1,staff:{},requiredFieldRule:[function(t){return!!t||"This field is required"}],element_permissions:{edit_btn:[{resource:j.a.STAFF,action:w.a.UPDATE}]}}},computed:{disableForm:function(){var t;return!this.editMode&&null!=(null===(t=this._staff)||void 0===t?void 0:t.id)}},methods:x(x({},Object(O.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{can:function(t){return Object(y.a)(this.$auth.user,t)},onFormSubmitted:function(t){this.$refs.form.validate()&&(this.editMode?this.updateStaff(t):this.registerStaff(t))},registerStaff:function(t){var e=this;this.$apollo.mutate({mutation:C.b,variables:{input:this.staff}}).then((function(n){n.data;e.successNotification("Staff registered successfully!"),t.target.reset(),e.$emit("on-close-staff-form")})).catch((function(t){console.log(t)}))},updateStaff:function(t){var e=this;this.staff.id=parseInt(this.staff.id),this.$apollo.mutate({mutation:C.d,variables:{input:this.staff}}).then((function(n){n.data;e.successNotification("Staff updated successfully!"),t.target.reset(),e.$emit("on-close-staff-form")})).catch((function(t){console.log(t)}))}}),watch:{$props:{handler:function(){var t;null!==(t=this._staff)&&void 0!==t&&t.id?(this.editMode=!1,this.staff=x({},this._staff)):(this.editMode=!1,this.staff={})},deep:!0,immediate:!0}}},F=n(60),component=Object(F.a)($,(function(){var t=this,e=t._self._c;return e(r.a,[e("div",{staticClass:"grey lighten-2 pa-2 pb-4"},[e(v.a,{staticClass:"mx-0"},[e("div",[e(o.c,{staticClass:"text-h5 pb-0"},[t._v("\n          Staff Registration Form\n        ")]),t._v(" "),e("span",{staticClass:"ml-4"},[t._v("registration form")])],1),t._v(" "),e(m.a),t._v(" "),t.disableForm&&t.can(t.element_permissions.edit_btn)?e("button",{staticClass:"v-btn ma-5 mt-6 v-btn--is-elevated v-btn--has-bg theme--light pl-1 black v-size--default white--text",attrs:{icon:"mdi-pen"},on:{click:function(e){t.editMode=!0}}},[e(d.a,{attrs:{right:"",dark:"",medium:""}},[t._v(" mdi-pen ")]),t._v(" "),e("span",{staticClass:"v-btn__content text-white ml-1"},[t._v(" Edit ")])],1):t._e()],1)],1),t._v(" "),e(l.a,{ref:"form",staticClass:"mt-4 p-4",attrs:{disabled:t.disableForm},on:{submit:function(e){return e.preventDefault(),t.onFormSubmitted.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("div",{staticClass:"mx-5"},[e(v.a,{staticClass:"px-3"},[e(c.a,{attrs:{cols:"12",md:"9"}},[e(h.a,{staticClass:"py-0",attrs:{label:"Name",outlined:"",required:"",rules:t.requiredFieldRule},model:{value:t.staff.name,callback:function(e){t.$set(t.staff,"name",e)},expression:"staff.name"}})],1),t._v(" "),e(c.a,{attrs:{cols:"12",md:"9"}},[e(h.a,{staticClass:"py-0",attrs:{label:"Role",outlined:"",required:"",rules:t.requiredFieldRule},model:{value:t.staff.role,callback:function(e){t.$set(t.staff,"role",e)},expression:"staff.role"}})],1)],1)],1),t._v(" "),e(f.a,{staticClass:"my-2"}),t._v(" "),e(c.a,{staticClass:"d-flex"},[e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button"},on:{click:function(e){return t.$emit("on-close-staff-form")}}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Cancel ")])]),t._v(" "),e(m.a),t._v(" "),t.editMode||t.disableForm?t._e():e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Add Staff ")])]),t._v(" "),t.editMode&&!t.disableForm?e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[e("span",{staticClass:"v-btn__content text-white"},[t._v("\n          Update Staff\n        ")])]):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);