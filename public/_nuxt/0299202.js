(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{687:function(t,e,n){"use strict";n.r(e);var l=n(177),c=n(714),r=n(192),o=n(264),d=n(175),v=n(84),f=n(272),_=(n(38),n(279),{props:["officeLocations","search"],data:function(){return{expanded:[],pagination:{},headers:[{text:"id",value:"id",class:"blue-grey lighten-3"},{text:"Address",align:"start",value:"address",class:"blue-grey lighten-3"},{text:"Lat/Lng",align:"start",value:"lat_lng",class:"blue-grey lighten-3"},{text:"Description",value:"description",class:"blue-grey lighten-3"},{text:"Action",value:"menu",class:"blue-grey lighten-3"}]}}}),m=n(90),component=Object(m.a)(_,(function(){var t=this,e=t._self._c;return e(c.a,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.officeLocations,"items-per-page":25,search:t.search},scopedSlots:t._u([{key:"item.lat_lng",fn:function(n){var l,c,r=n.item;return[e("span",[t._v("\n      "+t._s(null==r||null===(l=r.lat_lng)||void 0===l?void 0:l.lat)+" / "+t._s(null==r||null===(c=r.lat_lng)||void 0===c?void 0:c.lng)+"\n    ")])]}},{key:"item.menu",fn:function(n){var c=n.item;return[e(f.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(n){var c=n.on,o=n.attrs;return[e(l.a,t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),c),[e(r.a,[t._v("mdi-menu")])],1)]}}],null,!0)},[t._v(" "),e(o.a,{staticClass:"col-12 px-0"},[e(d.a,{on:{click:function(e){return t.$emit("on-office-location-detail-clicked",c)}}},[e(r.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-eye")]),t._v(" "),e(v.c,{staticClass:"pr-5"},[t._v("detail")])],1),t._v(" "),e(d.a,{staticClass:"red lighten-3",on:{click:function(e){return t.$emit("on-delete-office-location-clicked",c)}}},[e(r.a,{staticClass:"text-sm",attrs:{left:""}},[t._v("mdi-delete")]),t._v(" "),e(v.c,[t._v("Delete")])],1)],1)],1)]}}])})}),[],!1,null,null,null);e.default=component.exports}}]);