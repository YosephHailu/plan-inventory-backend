(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{604:function(t,e,r){var content=r(605);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("29751484",content,!0,{sourceMap:!1})},605:function(t,e,r){var n=r(22)((function(i){return i[1]}));n.push([t.i,".theme--light.v-breadcrumbs .v-breadcrumbs__divider,.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled{color:rgba(0,0,0,.38)}.theme--dark.v-breadcrumbs .v-breadcrumbs__divider,.theme--dark.v-breadcrumbs .v-breadcrumbs__item--disabled{color:hsla(0,0%,100%,.5)}.v-breadcrumbs{align-items:center;display:flex;flex:0 1 auto;flex-wrap:wrap;list-style-type:none;margin:0;padding:18px 12px}.v-breadcrumbs li{align-items:center;display:inline-flex;font-size:14px}.v-breadcrumbs li .v-icon{font-size:16px}.v-breadcrumbs li:nth-child(2n){padding:0 12px}.v-breadcrumbs__item{align-items:center;display:inline-flex;-webkit-text-decoration:none;text-decoration:none;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-breadcrumbs__item--disabled{pointer-events:none}.v-breadcrumbs--large li,.v-breadcrumbs--large li .v-icon{font-size:16px}",""]),n.locals={},t.exports=n},614:function(t,e,r){"use strict";r(13),r(14),r(12),r(6),r(16),r(10),r(17);var n=r(1),o=(r(119),r(604),r(61)),c=r(7);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=Object(c.a)(o.a).extend({name:"v-breadcrumbs-item",props:{activeClass:{type:String,default:"v-breadcrumbs__item--disabled"},ripple:{type:[Boolean,Object],default:!1}},computed:{classes:function(){return Object(n.a)({"v-breadcrumbs__item":!0},this.activeClass,this.disabled)}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return t("li",[t(r,d(d({},data),{},{attrs:d(d({},data.attrs),{},{"aria-current":this.isActive&&this.isLink?"page":void 0})}),this.$slots.default)])}}),m=r(0),v=Object(m.i)("v-breadcrumbs__divider","li"),h=r(18);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(c.a)(h.a).extend({name:"v-breadcrumbs",props:{divider:{type:String,default:"/"},items:{type:Array,default:function(){return[]}},large:Boolean},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-breadcrumbs--large":this.large},this.themeClasses)}},methods:{genDivider:function(){return this.$createElement(v,this.$slots.divider?this.$slots.divider:this.divider)},genItems:function(){for(var t=[],e=!!this.$scopedSlots.item,r=[],i=0;i<this.items.length;i++){var n=this.items[i];r.push(n.text),e?t.push(this.$scopedSlots.item({item:n})):t.push(this.$createElement(f,{key:r.join("."),props:n},[n.text])),i<this.items.length-1&&t.push(this.genDivider())}return t}},render:function(t){var e=this.$slots.default||this.genItems();return t("ul",{staticClass:"v-breadcrumbs",class:this.classes},e)}})},751:function(t,e,r){"use strict";r.r(e);var n=r(614),o=r(269),c=r(278),l=r(668),d=r(267),f=r(669),m=r(213),v=r(736),h=r(596),y=r(121),_=(r(13),r(14),r(12),r(6),r(16),r(10),r(17),r(1)),O=r(106),j=r(292);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(_.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w={middleware:["authenticated"],data:function(){var t;return t={breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/dashboard"},{text:"Configurations",disabled:!0}],search:"",valid:!1,editMode:!1,configurations:[],configuration:{}},Object(_.a)(t,"search",{name:"",concrete_type_id:null}),Object(_.a)(t,"pagination",{page:1,per_page:25}),t},apollo:{configurations:{query:j.a,fetchPolicy:"cache-and-network",prefetch:function(data){console.log("data",data)}}},computed:{config:function(){return this.configurations.length?(this.editMode=!0,this.configurations[0]):[]}},methods:C(C({},Object(O.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(t){this.editMode?this.updateConfiguration(t):this.registerConfiguration(t)},registerConfiguration:function(t){var e=this;this.$apollo.mutate({mutation:j.b,variables:this.config}).then((function(t){t.data;e.successNotification("Configuration registered successfully!")})).catch((function(t){console.log(t)}))},updateConfiguration:function(t){var e=this;this.$apollo.mutate({mutation:j.c,variables:this.config}).then((function(t){t.data;e.successNotification("Configuration updated successfully!")})).catch((function(t){console.log(t)}))}})},P=r(90),component=Object(P.a)(w,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-5 grey lighten-3"},[e(n.a,{attrs:{configurations:t.breadcrumbs},scopedSlots:t._u([{key:"divider",fn:function(){return[e(m.a,[t._v("mdi-chevron-double-right")])]},proxy:!0}])}),t._v(" "),e("div",{staticClass:"px-4 row ma-1"},[t._m(0),t._v(" "),e(h.a)],1),t._v(" "),e(o.a,[e("div",{staticClass:"grey lighten-2 pa-2 pb-4 mt-5"},[e(v.a,{staticClass:"mx-0"},[e("img",{staticClass:"pa-2 mt-2",attrs:{src:t.config.company_logo_url,height:"70",alt:""}}),t._v(" "),e("div",[e(c.c,{staticClass:"text-h5 pb-0"},[t._v("\n            Configuration Form\n          ")]),t._v(" "),e("span",{staticClass:"ml-4"},[t._v("configuration form")])],1),t._v(" "),e(h.a)],1)],1),t._v(" "),e(f.a,{staticClass:"mt-4 p-4",on:{submit:function(e){return e.preventDefault(),t.onFormSubmitted.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e("div",{staticClass:"mx-5"},[e(v.a,{staticClass:"px-3"},[e(l.a,{attrs:{cols:"12",md:"4"}},[e(y.a,{attrs:{label:"Company Name",outlined:"",required:""},model:{value:t.config.company_name,callback:function(e){t.$set(t.config,"company_name",e)},expression:"config.company_name"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"4"}},[e(y.a,{attrs:{label:"Company Address",outlined:"",required:""},model:{value:t.config.company_address,callback:function(e){t.$set(t.config,"company_address",e)},expression:"config.company_address"}})],1),t._v(" "),e(l.a,{attrs:{cols:"12",md:"4"}},[e(y.a,{attrs:{label:"Company Logo",outlined:"",required:""},model:{value:t.config.company_logo_url,callback:function(e){t.$set(t.config,"company_logo_url",e)},expression:"config.company_logo_url"}})],1)],1)],1),t._v(" "),e(d.a,{staticClass:"my-2"}),t._v(" "),e(l.a,{staticClass:"d-flex"},[e(h.a),t._v(" "),e("div",[t.editMode?e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Update ")])]):e("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Add ")])])])],1)],1)],1)],1)}),[function(){var t=this,e=t._self._c;return e("div",[e("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[t._v("Constant Configuration")]),t._v(" "),e("span",{staticClass:"grey--text text--darken-1"},[t._v("Constant Configuration Page.")])])}],!1,null,null,null);e.default=component.exports}}]);