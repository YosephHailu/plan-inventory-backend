(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{614:function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var l={USER:"User",ROLE:"Role",PERMISSION:"Permission",PERMISSION_TYPE:"PermissionType",MEASUREMENT_UNIT:"MeasurementUnit",REPORT:"Report",CONFIGURATION:"Configuration",ITEM_CATEGORY:"ItemCategory",ITEM:"Item",STOCK_REQUEST:"StockRequest",STOCK_REQUEST_ITEM:"StockRequestItem"}},715:function(t,e,r){"use strict";r.r(e);r(69);var l,n,c=r(91),d=r(60),o=(Object(d.a)(l||(l=Object(c.a)(["\n  query {\n    dashboardStatistic {\n        total_order_count\n        pending_order_count\n        rejected_order_count\n        checked_order_count\n        approved_order_count\n        closed_order_count\n        barChartData {\n          label\n          backgroundColor\n          barChartDatasets {\n              label\n              value\n          }\n        }\n    }\n  }\n"]))),r(614),r(33),r(83)),h=r(2);function v(t,e,r,l){t(e,r),void 0!==l&&l.emit(n.ChartRendered)}function m(t,e){t.destroy(),void 0!==e&&e.emit(n.ChartDestroyed)}function _(t,e,r){const l=[];t.datasets=e.datasets.map((e=>{const n=t.datasets.find((t=>t[r]===e[r]));return n&&e.data&&!l.includes(n)?(l.push(n),Object.assign(n,e),n):{...e}}))}!function(t){t.ChartRendered="chart:rendered",t.ChartUpdated="chart:updated",t.ChartDestroyed="chart:destroyed",t.LabelsUpdated="labels:updated"}(n||(n={}));const C=(t,e,r)=>Object(h.b)({props:{chartData:{type:Object,required:!0},chartOptions:{type:Object,default:()=>{}},datasetIdKey:{type:String,default:"label"},chartId:{type:String,default:t},width:{type:Number,default:400},height:{type:Number,default:400},cssClasses:{type:String,default:""},styles:{type:Object,default:()=>{}},plugins:{type:Array,default:()=>[]}},setup(t,l){o.Chart.register(r);const c=Object(h.h)(null),d=Object(h.g)(null);function C(data,r){if(null!==c.value&&m(Object(h.i)(c.value),l),null===d.value)throw new Error("Please remove the <template></template> tags from your chart component. See https://vue-chartjs.org/guide/#vue-single-file-components");{const l=function(data,t){const e={labels:void 0===data.labels?[]:[...data.labels],datasets:[]};return _(e,{...data},t),e}(data,t.datasetIdKey),n=d.value.getContext("2d");null!==n&&(c.value=new o.Chart(n,{type:e,data:Object(h.d)(data)?new Proxy(l,{}):l,options:r,plugins:t.plugins}))}}function f(e,r){const d=Object(h.d)(e)?Object(h.i)(e):{...e},o=Object(h.d)(r)?Object(h.i)(r):{...r};if(Object.keys(o).length>0){const e=Object(h.i)(c.value),r=function(t,e){const r=t.datasets.map((t=>t.label)),l=e.datasets.map((t=>t.label));return e.datasets.length===t.datasets.length&&r.every(((t,e)=>t===l[e]))}(d,o);r&&null!==e?(_(null==e?void 0:e.data,d,t.datasetIdKey),void 0!==d.labels&&function(t,e,r){t.data.labels=e,void 0!==r&&r.emit(n.LabelsUpdated)}(e,d.labels,l),y()):(null!==e&&m(e,l),v(C,t.chartData,t.chartOptions,l))}else null!==c.value&&m(Object(h.i)(c.value),l),v(C,t.chartData,t.chartOptions,l)}function y(){const t=Object(h.i)(c.value);null!==t?function(t,e){t.update(),void 0!==e&&e.emit(n.ChartUpdated)}(t,l):console.error("Update ERROR: chart instance not found")}return Object(h.j)((()=>t.chartData),((t,e)=>f(t,e)),{deep:!0}),Object(h.j)((()=>t.chartOptions),(e=>function(e){const r=Object(h.i)(c.value);null!==r?(function(t,e){t.options={...e}}(r,e),y()):v(C,t.chartData,t.chartOptions,l)}(e)),{deep:!0}),Object(h.f)((()=>{"datasets"in t.chartData&&t.chartData.datasets.length>0&&v(C,t.chartData,t.chartOptions,l)})),Object(h.e)((()=>{null!==c.value&&m(Object(h.i)(c.value),l)})),l.expose({chart:c,updateChart:y}),()=>Object(h.c)("div",{style:t.styles,class:t.cssClasses},[Object(h.c)("canvas",{id:t.chartId,width:t.width,height:t.height,ref:d})])}}),f=C("bar-chart","bar",o.BarController);o.DoughnutController,o.LineController,o.PieController,o.PolarAreaController,o.RadarController,o.BubbleController,o.ScatterController;var y={components:{Bar:f},middleware:["authenticated"],data:function(){return{search:"",calories:"",dashboardStatistic:{barChartData:[]},workOrders:{},chart_data:{labels:["All","Pending","Approved"],datasets:[{label:"Orders",backgroundColor:"#f87979",data:[40,20,12,39,10,40,39,80,40,20,12,11]}]},chart_options:{responsive:!0,maintainAspectRatio:!1}}},apollo:{},computed:{computedBarChartLabels:function(){console.log(this.dashboardStatistic.barChartData.map((function(t){return t.value}))),this.chart_data.datasets=this.dashboardStatistic.barChartData.map((function(t){return{label:t.label,backgroundColor:t.backgroundColor,data:t.barChartDatasets.map((function(t){return t.value}))}}))}}},x=r(90),component=Object(x.a)(y,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-5 ma-5"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6 col-lg-3 col-12"},[e("div",{staticClass:"v-card--material pa-3 blue lighten-5 v-card--material-stats v-card v-sheet theme--light v-card--material--has-heading"},[e("div",{staticClass:"d-flex grow flex-wrap"},[t._m(0),t._v(" "),e("div",{staticClass:"ml-6"},[e("div",{staticClass:"ml-auto"},[e("div",{staticClass:"body-3 text-uppercase text-bold grey--text font-weight-light"},[t._v("\n                Total Orders\n              ")]),t._v(" "),e("h3",{staticClass:"display-2 font-weight-light text--primary"},[t._v("\n                "+t._s(t.dashboardStatistic.total_order_count)+" "),e("small")])])])]),t._v(" "),t._m(1),t._v(" "),e("i",{staticClass:"v-icon notranslate ml-2 mr-1 mdi mdi-clock theme--light",staticStyle:{"font-size":"16px"},attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"caption grey--text font-weight-light"},[t._v("Just Updated")])])]),t._v(" "),e("div",{staticClass:"col-sm-6 col-lg-3 col-12"},[e("div",{staticClass:"v-card--material orange lighten-5 pa-3 v-card--material-stats v-card v-sheet theme--light v-card--material--has-heading"},[e("div",{staticClass:"d-flex grow flex-wrap"},[t._m(2),t._v(" "),e("div",{staticClass:"ml-6"},[e("div",{staticClass:"ml-auto"},[e("div",{staticClass:"body-3 text-uppercase text-bold grey--text font-weight-light"},[t._v("\n                Pending Orders\n              ")]),t._v(" "),e("h3",{staticClass:"display-2 font-weight-light text--primary"},[t._v("\n                "+t._s(t.dashboardStatistic.pending_order_count)+" "),e("small")])])])]),t._v(" "),t._m(3),t._v(" "),e("i",{staticClass:"v-icon notranslate ml-2 mr-1 mdi mdi-clock theme--light",staticStyle:{"font-size":"16px"},attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"caption grey--text font-weight-light"},[t._v("Just Updated")])])]),t._v(" "),e("div",{staticClass:"col-sm-6 col-lg-3 col-12"},[e("div",{staticClass:"v-card--material green lighten-5 pa-3 v-card--material-stats v-card v-sheet theme--light v-card--material--has-heading"},[e("div",{staticClass:"d-flex grow flex-wrap"},[t._m(4),t._v(" "),e("div",{staticClass:"ml-6"},[e("div",{staticClass:"ml-auto"},[e("div",{staticClass:"body-3 text-uppercase text-bold grey--text font-weight-light"},[t._v("\n                Approved Orders\n              ")]),t._v(" "),e("h3",{staticClass:"display-2 font-weight-light text--primary"},[t._v("\n                "+t._s(t.dashboardStatistic.approved_order_count)+" "),e("small")])])])]),t._v(" "),t._m(5),t._v(" "),e("i",{staticClass:"v-icon notranslate ml-2 mr-1 mdi mdi-clock theme--light",staticStyle:{"font-size":"16px"},attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"caption grey--text font-weight-light"},[t._v("Just Updated")])])]),t._v(" "),e("div",{staticClass:"col-sm-6 col-lg-3 col-12"},[e("div",{staticClass:"v-card--material red lighten-5 pa-3 v-card--material-stats v-card v-sheet theme--light v-card--material--has-heading"},[e("div",{staticClass:"d-flex grow flex-wrap"},[t._m(6),t._v(" "),e("div",{staticClass:"ml-6"},[e("div",{staticClass:"ml-auto"},[e("div",{staticClass:"body-3 text-uppercase text-bold grey--text font-weight-light"},[t._v("\n                Completed Orders\n              ")]),t._v(" "),e("h3",{staticClass:"display-2 font-weight-light text--primary"},[t._v("\n                "+t._s(t.dashboardStatistic.closed_order_count)+" "),e("small")])])])]),t._v(" "),t._m(7),t._v(" "),e("i",{staticClass:"v-icon notranslate ml-2 mr-1 mdi mdi-clock theme--light",staticStyle:{"font-size":"16px"},attrs:{"aria-hidden":"true"}}),e("span",{staticClass:"caption grey--text font-weight-light"},[t._v("Just Updated")])])]),t._v(" "),t._m(8),t._v(" "),e("div",{staticClass:"col-12 col-md-6"},[e("Bar",{attrs:{chartData:t.chart_data,options:t.chart_options}})],1),t._v("\n    "+t._s(t.computedBarChartLabels)+"\n  ")])])}),[function(){var t=this._self._c;return t("div",{staticClass:"text-start v-card--material__heading mb-n6 v-sheet theme--dark elevation-6 info pa-7",staticStyle:{"max-height":"90px",width:"auto"}},[t("i",{staticClass:"v-icon notranslate mdi mdi-chart-areaspline theme--dark",staticStyle:{"font-size":"32px"},attrs:{"aria-hidden":"true"}})])},function(){var t=this._self._c;return t("div",{staticClass:"px-0 col col-12 mt-3"},[t("hr",{staticClass:"v-divider theme--light",attrs:{role:"separator","aria-orientation":"horizontal"}})])},function(){var t=this._self._c;return t("div",{staticClass:"text-start v-card--material__heading mb-n6 v-sheet theme--dark elevation-6 orange pa-7",staticStyle:{"max-height":"90px",width:"auto"}},[t("i",{staticClass:"v-icon notranslate mdi mdi-calendar-clock theme--dark",staticStyle:{"font-size":"32px"},attrs:{"aria-hidden":"true"}})])},function(){var t=this._self._c;return t("div",{staticClass:"px-0 col col-12 mt-3"},[t("hr",{staticClass:"v-divider theme--light",attrs:{role:"separator","aria-orientation":"horizontal"}})])},function(){var t=this._self._c;return t("div",{staticClass:"text-start v-card--material__heading mb-n6 v-sheet theme--dark elevation-6 green pa-7",staticStyle:{"max-height":"90px",width:"auto"}},[t("i",{staticClass:"v-icon notranslate mdi mdi-calendar-multiple-check theme--dark",staticStyle:{"font-size":"32px"},attrs:{"aria-hidden":"true"}})])},function(){var t=this._self._c;return t("div",{staticClass:"px-0 col col-12 mt-3"},[t("hr",{staticClass:"v-divider theme--light",attrs:{role:"separator","aria-orientation":"horizontal"}})])},function(){var t=this._self._c;return t("div",{staticClass:"text-start v-card--material__heading mb-n6 v-sheet theme--dark elevation-6 red pa-7",staticStyle:{"max-height":"90px",width:"auto"}},[t("i",{staticClass:"v-icon notranslate mdi mdi-archive-cancel theme--dark",staticStyle:{"font-size":"32px"},attrs:{"aria-hidden":"true"}})])},function(){var t=this._self._c;return t("div",{staticClass:"px-0 col col-12 mt-3"},[t("hr",{staticClass:"v-divider theme--light",attrs:{role:"separator","aria-orientation":"horizontal"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-md-6 col-12"},[e("div",{staticClass:"v-card--material pa-3 px-5 py-3 v-card v-sheet theme--light v-card--material--has-heading"},[e("div",{staticClass:"d-flex grow flex-wrap"},[e("div",{staticClass:"text-start v-card--material__heading mb-n6 v-sheet theme--dark elevation-6 warning pa-7",staticStyle:{width:"100%"}},[e("div",{staticClass:"display-2 font-weight-light"},[t._v("Pending Orders")]),t._v(" "),e("div",{staticClass:"subtitle-1 font-weight-light"},[t._v("\n              Latest Pending Orders\n            ")])])])])])}],!1,null,null,null);e.default=component.exports}}]);