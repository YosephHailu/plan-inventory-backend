(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{728:function(t,e,n){"use strict";n.r(e);var l=n(177),r=n(763),c=n(194),o=n(269),d=n(175),v=n(86),f=n(279),_=(n(39),n(289),{props:["officeLocations","search"],data:function(){return{expanded:[],pagination:{},headers:[{text:"id",value:"id",class:"blue-grey lighten-3"},{text:"Address",align:"start",value:"address",class:"blue-grey lighten-3"},{text:"Lat/Lng",align:"start",value:"lat_lng",class:"blue-grey lighten-3"},{text:"Description",value:"description",class:"blue-grey lighten-3"},{text:"Action",value:"menu",class:"blue-grey lighten-3"}]}}}),m=n(60),component=Object(m.a)(_,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.officeLocations,"items-per-page":25,search:t.search},scopedSlots:t._u([{key:"item.lat_lng",fn:function(n){var l,r,c=n.item;return[e("span",[t._v("\n      "+t._s(null==c||null===(l=c.lat_lng)||void 0===l?void 0:l.lat)+" / "+t._s(null==c||null===(r=c.lat_lng)||void 0===r?void 0:r.lng)+"\n    ")])]}},{key:"item.menu",fn:function(n){var r=n.item;return[e(f.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e(l.a,t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),r),[e(c.a,[t._v("mdi-menu")])],1)]}}],null,!0)},[t._v(" "),e(o.a,{staticClass:"col-12 px-0"},[e(d.a,{on:{click:function(e){return t.$emit("on-office-location-detail-clicked",r)}}},[e(c.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-eye")]),t._v(" "),e(v.d,{staticClass:"pr-5"},[t._v("detail")])],1),t._v(" "),e(d.a,{staticClass:"red lighten-3",on:{click:function(e){return t.$emit("on-delete-office-location-clicked",r)}}},[e(c.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-delete")]),t._v(" "),e(v.d,[t._v("Delete")])],1)],1)],1)]}}])})}),[],!1,null,null,null);e.default=component.exports}}]);