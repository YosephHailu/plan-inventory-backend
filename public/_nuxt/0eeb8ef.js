(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{803:function(t,e,l){"use strict";l.r(e);var r,n,d,c=l(93),o=l(61),v=Object(o.a)(r||(r=Object(c.a)(["\n  query dashboardCount {\n    dashboardCount {\n      total_assets\n      total_available_assets\n      total_disposed_assets\n      total_items\n      total_stock_request_items\n      total_stock_issue_items\n    }\n  }\n"]))),h=Object(o.a)(n||(n=Object(c.a)(["\n  query assetCountByTypes {\n    assetCountByTypes {\n      asset_type\n      count\n    }\n  }\n"]))),m=l(86),_=l(2);function C(t,e,l,r){t(e,l),void 0!==r&&r.emit(d.ChartRendered)}function f(t,e){t.destroy(),void 0!==e&&e.emit(d.ChartDestroyed)}function y(t,e,l){const r=[];t.datasets=e.datasets.map((e=>{const n=t.datasets.find((t=>t[l]===e[l]));return n&&e.data&&!r.includes(n)?(r.push(n),Object.assign(n,e),n):{...e}}))}!function(t){t.ChartRendered="chart:rendered",t.ChartUpdated="chart:updated",t.ChartDestroyed="chart:destroyed",t.LabelsUpdated="labels:updated"}(d||(d={}));const x=(t,e,l)=>Object(_.b)({props:{chartData:{type:Object,required:!0},chartOptions:{type:Object,default:()=>{}},datasetIdKey:{type:String,default:"label"},chartId:{type:String,default:t},width:{type:Number,default:400},height:{type:Number,default:400},cssClasses:{type:String,default:""},styles:{type:Object,default:()=>{}},plugins:{type:Array,default:()=>[]}},setup(t,r){m.Chart.register(l);const n=Object(_.h)(null),c=Object(_.g)(null);function o(data,l){if(null!==n.value&&f(Object(_.i)(n.value),r),null===c.value)throw new Error("Please remove the <template></template> tags from your chart component. See https://vue-chartjs.org/guide/#vue-single-file-components");{const r=function(data,t){const e={labels:void 0===data.labels?[]:[...data.labels],datasets:[]};return y(e,{...data},t),e}(data,t.datasetIdKey),d=c.value.getContext("2d");null!==d&&(n.value=new m.Chart(d,{type:e,data:Object(_.d)(data)?new Proxy(r,{}):r,options:l,plugins:t.plugins}))}}function v(e,l){const c=Object(_.d)(e)?Object(_.i)(e):{...e},v=Object(_.d)(l)?Object(_.i)(l):{...l};if(Object.keys(v).length>0){const e=Object(_.i)(n.value),l=function(t,e){const l=t.datasets.map((t=>t.label)),r=e.datasets.map((t=>t.label));return e.datasets.length===t.datasets.length&&l.every(((t,e)=>t===r[e]))}(c,v);l&&null!==e?(y(null==e?void 0:e.data,c,t.datasetIdKey),void 0!==c.labels&&function(t,e,l){t.data.labels=e,void 0!==l&&l.emit(d.LabelsUpdated)}(e,c.labels,r),h()):(null!==e&&f(e,r),C(o,t.chartData,t.chartOptions,r))}else null!==n.value&&f(Object(_.i)(n.value),r),C(o,t.chartData,t.chartOptions,r)}function h(){const t=Object(_.i)(n.value);null!==t?function(t,e){t.update(),void 0!==e&&e.emit(d.ChartUpdated)}(t,r):console.error("Update ERROR: chart instance not found")}return Object(_.j)((()=>t.chartData),((t,e)=>v(t,e)),{deep:!0}),Object(_.j)((()=>t.chartOptions),(e=>function(e){const l=Object(_.i)(n.value);null!==l?(function(t,e){t.options={...e}}(l,e),h()):C(o,t.chartData,t.chartOptions,r)}(e)),{deep:!0}),Object(_.f)((()=>{"datasets"in t.chartData&&t.chartData.datasets.length>0&&C(o,t.chartData,t.chartOptions,r)})),Object(_.e)((()=>{null!==n.value&&f(Object(_.i)(n.value),r)})),r.expose({chart:n,updateChart:h}),()=>Object(_.c)("div",{style:t.styles,class:t.cssClasses},[Object(_.c)("canvas",{id:t.chartId,width:t.width,height:t.height,ref:c})])}}),w=x("bar-chart","bar",m.BarController);m.DoughnutController,m.LineController,m.PieController,m.PolarAreaController,m.RadarController,m.BubbleController,m.ScatterController;var O={components:{Bar:w},middleware:["authenticated"],data:function(){return{dashboardCount:{},assetCountByTypes:[]}},apollo:{assetCountByTypes:{query:h,fetchPolicy:"cache-and-network"},dashboardCount:{query:v,fetchPolicy:"cache-and-network"}},computed:{}},j=l(51),component=Object(j.a)(O,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-5 ma-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6 col-lg-4 col-12"},[e("div",{staticClass:"v-card--material blue lighten-5 v-card--material-stats v-card v-sheet theme--light v-card--material--has-heading"},[e("div",{staticClass:"d-flex"},[t._m(0),t._v(" "),e("div",{staticClass:"ml-6 py-2"},[e("div",{staticClass:"ml-auto"},[e("h3",{staticClass:"display-2 font-weight-dark text--primary"},[t._v("\n                "+t._s(t._f("number_format")(t.dashboardCount.total_assets))+"\n                "),e("small")]),t._v(" "),e("div",{staticClass:"body-3 text-uppercase text-bold grey--text font-weight-light"},[t._v("\n                Total Assets\n              ")])])])])])]),t._v(" "),e("div",{staticClass:"col-sm-6 col-lg-4 col-12"},[e("div",{staticClass:"v-card--material blue lighten-5 v-card--material-stats v-card v-sheet theme--light v-card--material--has-heading"},[e("div",{staticClass:"d-flex"},[t._m(1),t._v(" "),e("div",{staticClass:"ml-6 py-2"},[e("div",{staticClass:"ml-auto"},[e("h3",{staticClass:"display-2 font-weight-dark text--primary"},[t._v("\n                "+t._s(t._f("number_format")(t.dashboardCount.total_available_assets))+"\n                "),e("small")]),t._v(" "),e("div",{staticClass:"body-3 text-uppercase text-bold grey--text font-weight-light"},[t._v("\n                Total Available Assets\n              ")])])])])])]),t._v(" "),e("div",{staticClass:"col-sm-6 col-lg-4 col-12"},[e("div",{staticClass:"v-card--material blue lighten-5 v-card--material-stats v-card v-sheet theme--light v-card--material--has-heading"},[e("div",{staticClass:"d-flex"},[t._m(2),t._v(" "),e("div",{staticClass:"ml-6 py-2"},[e("div",{staticClass:"ml-auto"},[e("h3",{staticClass:"display-2 font-weight-dark text--primary"},[t._v("\n                "+t._s(t._f("number_format")(t.dashboardCount.total_disposed_assets))+"\n                "),e("small")]),t._v(" "),e("div",{staticClass:"body-3 text-uppercase text-bold grey--text font-weight-light"},[t._v("\n                Total Disposed Assets\n              ")])])])])])])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6 col-lg-4 col-12"},[e("div",{staticClass:"v-card--material blue lighten-5 v-card--material-stats v-card v-sheet theme--light v-card--material--has-heading"},[e("div",{staticClass:"d-flex"},[t._m(3),t._v(" "),e("div",{staticClass:"ml-6 py-2"},[e("div",{staticClass:"ml-auto"},[e("h3",{staticClass:"display-2 font-weight-dark text--primary"},[t._v("\n                "+t._s(t._f("number_format")(t.dashboardCount.total_items))+"\n                "),e("small")]),t._v(" "),e("div",{staticClass:"body-3 text-uppercase text-bold grey--text font-weight-light"},[t._v("\n                Total Items\n              ")])])])])])]),t._v(" "),e("div",{staticClass:"col-sm-6 col-lg-4 col-12"},[e("div",{staticClass:"v-card--material blue lighten-5 v-card--material-stats v-card v-sheet theme--light v-card--material--has-heading"},[e("div",{staticClass:"d-flex"},[t._m(4),t._v(" "),e("div",{staticClass:"ml-6 py-2"},[e("div",{staticClass:"ml-auto"},[e("h3",{staticClass:"display-2 font-weight-dark text--primary"},[t._v("\n                "+t._s(t._f("number_format")(t.dashboardCount.total_stock_request_items))+"\n                "),e("small")]),t._v(" "),e("div",{staticClass:"body-3 text-uppercase text-bold grey--text font-weight-light"},[t._v("\n                Total Requested Items\n              ")])])])])])]),t._v(" "),e("div",{staticClass:"col-sm-6 col-lg-4 col-12"},[e("div",{staticClass:"v-card--material blue lighten-5 v-card--material-stats v-card v-sheet theme--light v-card--material--has-heading"},[e("div",{staticClass:"d-flex"},[t._m(5),t._v(" "),e("div",{staticClass:"ml-6 py-2"},[e("div",{staticClass:"ml-auto"},[e("h3",{staticClass:"display-2 font-weight-dark text--primary"},[t._v("\n                "+t._s(t._f("number_format")(t.dashboardCount.total_stock_issue_items))+"\n                "),e("small")]),t._v(" "),e("div",{staticClass:"body-3 text-uppercase text-bold grey--text font-weight-light"},[t._v("\n                Total Issued Items\n              ")])])])])])])]),t._v(" "),e("div",{staticClass:"col-md-4 col-12 px-0"},[e("div",{staticClass:"v-card--material py-3 v-card v-sheet theme--light v-card--material--has-heading"},[t._m(6),t._v(" "),e("div",{staticClass:"v-card__text mt-3"},[e("div",{staticClass:"v-data-table theme--light"},[e("div",{staticClass:"v-data-table__wrapper"},[e("table",[t._m(7),t._v(" "),t._m(8),t._v(" "),e("tbody",t._l(t.assetCountByTypes,(function(l){return e("tr",{key:l.id},[e("td",{staticClass:"text-start blue-grey lighten-4 text-uppercase"},[t._v("\n                    "+t._s(l.asset_type)+"\n                  ")]),t._v(" "),e("td",{staticClass:"text-center text-uppercase blue-grey lighten-5"},[t._v("\n                    "+t._s(l.count)+"\n                  ")])])})),0)])])])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"text-start v-card--material__heading v-sheet theme--dark elevation-6 info pa-7",staticStyle:{"margin-top":"-10px","margin-left":"-5px"}},[t("i",{staticClass:"v-icon notranslate mdi mdi-chart-areaspline theme--dark",staticStyle:{"font-size":"32px"},attrs:{"aria-hidden":"true"}})])},function(){var t=this._self._c;return t("div",{staticClass:"text-start v-card--material__heading v-sheet theme--dark elevation-6 yellow darken-3 pa-7",staticStyle:{"margin-top":"-10px","margin-left":"-5px"}},[t("i",{staticClass:"v-icon notranslate mdi mdi-chart-areaspline theme--dark",staticStyle:{"font-size":"32px"},attrs:{"aria-hidden":"true"}})])},function(){var t=this._self._c;return t("div",{staticClass:"text-start v-card--material__heading v-sheet theme--dark elevation-6 red darken-3 pa-7",staticStyle:{"margin-top":"-10px","margin-left":"-5px"}},[t("i",{staticClass:"v-icon notranslate mdi mdi-chart-areaspline theme--dark",staticStyle:{"font-size":"32px"},attrs:{"aria-hidden":"true"}})])},function(){var t=this._self._c;return t("div",{staticClass:"text-start v-card--material__heading v-sheet theme--dark elevation-6 info pa-7",staticStyle:{"margin-top":"-10px","margin-left":"-5px"}},[t("i",{staticClass:"v-icon notranslate mdi mdi-chart-areaspline theme--dark",staticStyle:{"font-size":"32px"},attrs:{"aria-hidden":"true"}})])},function(){var t=this._self._c;return t("div",{staticClass:"text-start v-card--material__heading v-sheet theme--dark elevation-6 yellow darken-3 pa-7",staticStyle:{"margin-top":"-10px","margin-left":"-5px"}},[t("i",{staticClass:"v-icon notranslate mdi mdi-chart-areaspline theme--dark",staticStyle:{"font-size":"32px"},attrs:{"aria-hidden":"true"}})])},function(){var t=this._self._c;return t("div",{staticClass:"text-start v-card--material__heading v-sheet theme--dark elevation-6 red darken-3 pa-7",staticStyle:{"margin-top":"-10px","margin-left":"-5px"}},[t("i",{staticClass:"v-icon notranslate mdi mdi-chart-areaspline theme--dark",staticStyle:{"font-size":"32px"},attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex grow flex-wrap"},[e("div",{staticClass:"text-start v-card--material__heading mb-n6 v-sheet theme--dark elevation-6 blue-grey py-4 pl-5",staticStyle:{width:"100%"}},[e("div",{staticClass:"display-2 font-weight-light"},[t._v("Asset By Type")]),t._v(" "),e("div",{staticClass:"subtitle-1 font-weight-light"},[t._v("Soled Apartments")])])])},function(){var t=this,e=t._self._c;return e("colgroup",[e("col",{}),t._v(" "),e("col",{}),t._v(" "),e("col",{}),t._v(" "),e("col",{}),t._v(" "),e("col",{})])},function(){var t=this,e=t._self._c;return e("thead",{staticClass:"v-data-table-header"},[e("tr",[e("th",{staticClass:"text-start blue-grey lighten-3 text-uppercase"},[e("span",[t._v("Asset type")])]),t._v(" "),e("th",{staticClass:"text-center text-uppercase blue-grey lighten-4"},[e("b",[t._v("Aggregate")])])])])}],!1,null,null,null);e.default=component.exports}}]);