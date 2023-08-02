(window.webpackJsonp=window.webpackJsonp||[]).push([[67,33],{609:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r={USER:"User",ROLE:"Role",PERMISSION:"Permission",PERMISSION_TYPE:"PermissionType",MEASUREMENT_UNIT:"MeasurementUnit",REPORT:"Report",CONFIGURATION:"Configuration",ITEM_CATEGORY:"ItemCategory",ITEM:"Item",STOCK_REQUEST:"StockRequest",STOCK_REQUEST_ITEM:"StockRequestItem",CONDITION:"Condition"}},611:function(e,n,t){"use strict";t.d(n,"b",(function(){return f})),t.d(n,"a",(function(){return v})),t.d(n,"d",(function(){return y})),t.d(n,"c",(function(){return O})),t.d(n,"e",(function(){return I}));var r,o,c,l,d,m,_=t(91),h=t(64),f=Object(h.a)(r||(r=Object(_.a)(["\n  query($page: Int!, $per_page: Int!) {\n    items(first: $per_page, page: $page) {\n      data {\n        id\n        name\n        stock_card_number\n        description\n        expire_date\n        itemCategory {\n          id\n          name\n        }   \n        donor {\n          id\n          name\n        }  \n        lotNumber {\n          id\n          lot_number\n        }   \n        unitOfMeasurement {\n          id\n          name\n          abbreviation\n        }  \n        officeLocation {\n          id\n          address\n        } \n        stockType {\n          id\n          name\n        }   \n        whereHouse {\n          id\n          name\n          address\n        }     \n        department {\n          id\n          name\n        }   \n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }   \n  }\n"]))),v=Object(h.a)(o||(o=Object(_.a)(["\n  query All_ITEM_LOOKUP_QUERY {\n    itemCategories {\n      id\n      name\n    }   \n    donors {\n      id\n      name\n    }  \n    lotNumbers {\n      id\n      lot_number\n    }   \n    unitOfMeasurements {\n      id\n      name\n      abbreviation\n    }  \n    officeLocations {\n      id\n      address\n    } \n    stockTypes {\n      id\n      name\n    }   \n    whereHouses {\n      id\n      name\n      address\n    }     \n    departments {\n      id\n      name\n    }   \n  }\n"]))),y=Object(h.a)(c||(c=Object(_.a)(["\n  query FIND_ITEM_QUERY($id: ID!) {\n    item(id: $id) {\n        id\n        name\n        stock_card_number\n        description\n        expire_date\n        itemCategory {\n          id\n          name\n        }   \n        donor {\n          id\n          name\n        }  \n        lotNumber {\n          id\n          lot_number\n        }   \n        unitOfMeasurement {\n          id\n          name\n          abbreviation\n        }  \n        officeLocation {\n          id\n          address\n        } \n        stockType {\n          id\n          name\n        }   \n        whereHouse {\n          id\n          name\n          address\n        }     \n        department {\n          id\n          name\n        }   \n    }   \n  }\n"]))),O=Object(h.a)(l||(l=Object(_.a)(["\n  mutation ($input: ItemCreateInput!) {\n    createItem(input: $input) {\n      id\n      name\n      description\n    }\n  }\n"]))),I=Object(h.a)(d||(d=Object(_.a)(["\n  mutation ($input: ItemUpdateInput!) {\n    updateItem(input: $input) {\n      id\n      name\n      description\n    }\n  }\n"])));Object(h.a)(m||(m=Object(_.a)(["\n  mutation($id: ID!) {\n    deleteItem(id: $id) {\n      id\n    }\n  }\n"])))},690:function(e,n,t){"use strict";t.r(n);var r=t(174),o=t(263),c=t(711),l=t(189),d=t(259),m=t(172),_=t(83),h=t(267),f=(t(42),t(274),t(1)),v=t(22),y=t(34),O=t(275),I={props:["items","search","_pagination"],data:function(){return{pagination:{},headers:[{text:"Item Code",class:"blue-grey lighten-3",value:"stock_card_number"},{text:"Item Name",align:"start",value:"name",class:"blue-grey lighten-3"},{text:"Expire Date",value:"expire_date",class:"blue-grey lighten-3"},{text:"Item Category",class:"blue-grey lighten-3",value:"itemCategory.name"},{text:"Warehouse",class:"blue-grey lighten-3",value:"whereHouse.name"},{text:"Stock Type",class:"blue-grey lighten-3",value:"stockType.name"},{text:"Department",class:"blue-grey lighten-3",value:"department.name"},{text:"Donor",class:"blue-grey lighten-3",value:"donor.name"},Object(f.a)({text:"Action",class:"blue-grey lighten-3",value:"menu"},"class","blue-grey lighten-3")],element_permissions:{complete_btn:[{resource:v.a.ITEM,action:y.a.COMPLETE}]}}},methods:{can:function(e){return Object(O.a)(this.$auth.user,e)},showDetail:function(e){this.$router.push({path:"/inventory/".concat(e.id,"/edit")})}}},C=t(90),component=Object(C.a)(I,(function(){var e=this,n=e._self._c;return n(c.a,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.items,search:e.search,"hide-default-footer":!0,"items-per-page":e._pagination.perPage},scopedSlots:e._u([{key:"item.status",fn:function(t){var r=t.item;return[r.closed?n(o.a,{staticClass:"ma-2",attrs:{label:"",color:"blue lighten-3"}},[n(l.a,{attrs:{left:""}}),e._v(" Closed\n    ")],1):r.checked&&!r.approved?n(o.a,{staticClass:"ma-2",attrs:{label:"",color:"warning lighten-3 black--text"}},[n(l.a,{attrs:{left:""}},[e._v("mdi-check")]),e._v(" checked\n    ")],1):r.approved?n(o.a,{staticClass:"ma-2",attrs:{label:"",color:"green lighten-3"}},[n(l.a,{attrs:{left:""}},[e._v("mdi-check-all")]),e._v(" approved\n    ")],1):n(o.a,{staticClass:"ma-2",attrs:{label:"",color:"gray lighten-3"}},[n(l.a,{attrs:{left:""}},[e._v("mdi-dots-horizontal")]),e._v(" Pending\n    ")],1)]}},{key:"item.menu",fn:function(t){var o=t.item;return[n(h.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,c=t.attrs;return[n(r.a,e._g(e._b({attrs:{icon:""}},"v-btn",c,!1),o),[n(l.a,[e._v("mdi-menu")])],1)]}}],null,!0)},[e._v(" "),n(d.a,{staticClass:"col-12 px-0"},[n(m.a,{on:{click:function(n){return e.showDetail(o)}}},[n(l.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-eye")]),e._v(" "),n(_.c,[e._v("Detail")])],1)],1)],1)]}}])})}),[],!1,null,null,null);n.default=component.exports},732:function(e,n,t){"use strict";t.r(n);var r=t(608),o=t(655),c=t(189),l=t(640),d=t(590),m=t(120),_=(t(42),t(274),t(12),t(13),t(11),t(5),t(15),t(9),t(16),t(1)),h=t(690),f=t(611),v=(t(609),t(34)),y=t(275),O=t(22);function I(object,e){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),n.push.apply(n,t)}return n}function C(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?I(Object(source),!0).forEach((function(n){Object(_.a)(e,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):I(Object(source)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(source,n))}))}return e}var x={components:{ItemTable:h.default},middleware:["authenticated"],data:function(){return{breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/dashboard"},{text:"All Items",disabled:!0}],items:{paginatorInfo:{}},item:{},search:{customer_name:"",concrete_type_id:null},element_permissions:{create_btn:[{resource:O.a.ITEM,action:v.a.CREATE}]},loading:!0,pagination:{page:1,per_page:25}}},apollo:{items:{query:f.b,loadingKey:"loading",variables:function(){return C(C({},{}),{page:this.pagination.page,per_page:this.pagination.per_page})},fetchPolicy:"cache-and-network"}},methods:{can:function(e){return Object(y.a)(this.$auth.user,e)}}},j=t(90),component=Object(j.a)(x,(function(){var e=this,n=e._self._c;return n("div",{staticClass:"pa-5 grey lighten-3"},[n(r.a,{attrs:{items:e.breadcrumbs},scopedSlots:e._u([{key:"divider",fn:function(){return[n(c.a,[e._v("mdi-chevron-double-right")])]},proxy:!0}])}),e._v(" "),n("div",{staticClass:"px-4 row ma-1"},[e._m(0),e._v(" "),n(d.a),e._v(" "),n("div",{staticClass:"pr-2"},[e.can(e.element_permissions.create_btn)?n("nuxt-link",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg v-size--default black white--text lighten-5",attrs:{type:"button",to:"/inventory/create",icon:"mdi-home"}},[n(c.a,{attrs:{left:"",dark:""}},[e._v(" mdi-plus-circle ")]),e._v("\n        Add Item\n      ")],1):e._e()],1)],1),e._v(" "),n("div",{staticClass:"px-5 py-3"},[n("div",{staticClass:"row mb-4"},[n(o.a,{attrs:{cols:"12",lg:"4"}},[n(m.a,{attrs:{"append-icon":"mdi-magnify",label:"Search by name, project description or phone number","single-line":"","hide-details":"",outlined:""},model:{value:e.search.customer_name,callback:function(n){e.$set(e.search,"customer_name",n)},expression:"search.customer_name"}})],1)],1),e._v(" "),n("item-table",{attrs:{loading:e.loading,items:e.items.data,_pagination:e.items.paginatorInfo}}),e._v(" "),n(l.a,{staticClass:"my-4",attrs:{length:e.items.paginatorInfo.lastPage},model:{value:e.pagination.page,callback:function(n){e.$set(e.pagination,"page",n)},expression:"pagination.page"}})],1)],1)}),[function(){var e=this,n=e._self._c;return n("div",[n("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[e._v("All Items")]),e._v(" "),n("span",{staticClass:"grey--text text--darken-1"},[e._v("All Items Are Shown Here.")])])}],!1,null,null,null);n.default=component.exports}}]);