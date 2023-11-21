(window.webpackJsonp=window.webpackJsonp||[]).push([[114,59],{627:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o={USER:"User",ROLE:"Role",PERMISSION:"Permission",PERMISSION_TYPE:"PermissionType",MEASUREMENT_UNIT:"MeasurementUnit",REPORT:"Report",CONFIGURATION:"Configuration",ITEM_CATEGORY:"ItemCategory",ITEM:"Item",ASSET:"Asset",STOCK_REQUEST:"StockRequest",STOCK_REQUEST_ITEM:"StockRequestItem",CONDITION:"Condition",WHERE_HOUSE:"WhereHouse",OFFICE_LOCATION:"OfficeLocation",PROGRAM_AREA:"ProgramArea",ACQUISITION_TYPE:"AcquisitionType",GOOD_RECEIVE:"GoodReceive",STOCK_ISSUE:"StockIssue"}},646:function(e,t,n){"use strict";n.d(t,"c",(function(){return R})),n.d(t,"f",(function(){return C})),n.d(t,"b",(function(){return y})),n.d(t,"d",(function(){return k})),n.d(t,"a",(function(){return O})),n.d(t,"e",(function(){return x})),n.d(t,"g",(function(){return w}));var o,c,r,l,d,v,_,h,m=n(92),f=n(61),R=Object(f.a)(o||(o=Object(m.a)(["\n  query($page: Int!, $per_page: Int!, $status: StatusEnum, $where_house_id: ID) {\n    goodReceives(first: $per_page, page: $page, status: $status, where_house_id: $where_house_id) {\n      data {\n        id\n        remark\n        vendor_name\n        purchase_order_no\n        invoice_no\n        project\n        status\n        received_by\n        received_date\n        reference_number\n        whereHouse {\n          id\n          name\n        }\n        goodReceiveItems {\n          id\n          received_quantity\n          checked_quantity\n          approved_quantity\n          description\n          expiry_date\n          comment\n          condition\n          unitOfMeasurement {\n            id\n            abbreviation\n          }\n          donor {\n            id\n            name\n          }\n          item {\n            id\n            name\n          }\n        }\n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }\n  }\n"]))),C=Object(f.a)(c||(c=Object(m.a)(["\n  query($id: ID!) {\n    goodReceive(id: $id) {\n      id\n      remark\n      vendor_name\n      purchase_order_no\n      invoice_no\n      project\n      status\n      received_by\n      received_date\n      reference_number\n      goodReceiveItems {\n        id\n        received_quantity\n        checked_quantity\n        approved_quantity\n        description\n        expiry_date\n        comment\n        condition\n        unitOfMeasurement {\n          id\n          abbreviation\n        }\n        donor {\n          id\n          name\n        }\n        project {\n          id\n          name\n        }\n        item {\n          id\n          name\n        }\n      }\n    }\n  }\n"]))),y=Object(f.a)(r||(r=Object(m.a)(["\n  query All_GOOD_RECEIVE_LOOKUP_QUERY($where_house_id: ID) {\n    whereHouses(id: $where_house_id) {\n      id\n      name\n    }     \n    conditions {\n      id\n      name\n    }\n    donors {\n      id\n      name\n    }\n    projects {\n      id\n      name\n      outline_no\n    }\n    stockTypes {\n      id\n      name\n    }\n    itemCategories {\n      id\n      name\n    }\n    unitOfMeasurements {\n      id\n      name\n      abbreviation\n    }  \n  }\n"]))),k=Object(f.a)(l||(l=Object(m.a)(["\n  mutation ($id: ID!, $input: [GoodReceiveCheckInput]!) {\n    checkGoodReceive(id: $id, input: $input) {\n      id\n    }\n  }\n"]))),O=Object(f.a)(d||(d=Object(m.a)(["\n  mutation ($id: ID!, $input: [GoodReceiveApproveInput]!) {\n    approveGoodReceive(id: $id, input: $input) {\n      id\n    }\n  }\n"]))),x=Object(f.a)(v||(v=Object(m.a)(["\n  mutation ($input: GoodReceiveCreateInput!) {\n    createGoodReceive(input: $input) {\n      id\n    }\n  }\n"]))),w=Object(f.a)(_||(_=Object(m.a)(["\n  mutation ($input: GoodReceiveUpdateInput!) {\n    updateGoodReceive(input: $input) {\n      id\n    }\n  }\n"])));Object(f.a)(h||(h=Object(m.a)(["\n  mutation($id: ID!) {\n    deleteGoodReceive(id: $id) {\n      id\n    }\n  }\n"])))},671:function(e,t,n){"use strict";n.r(t);var o=n(177),c=n(275),r=n(788),l=n(194),d=n(269),v=n(175),_=n(86),h=n(279),m=(n(39),n(289),n(1)),f=n(15),R=n(21),C=n(288),y={props:["goodReceives","search","_pagination"],data:function(){return{pagination:{},headers:[{text:"#",align:"center",class:"text-center white--text text-uppercase py-2 blue lighten-1",value:"id"},{text:"Received Date",align:"start",value:"received_date",class:"text-center white--text text-uppercase py-2 blue lighten-1"},{text:"Requester Name",value:"received_by",class:"text-center white--text text-uppercase py-2 blue lighten-1"},{text:"Wherehouse",value:"whereHouse.name",class:"text-center white--text text-uppercase py-2 blue lighten-1"},{text:"Remark",value:"remark",class:"text-center white--text text-uppercase py-2 blue lighten-1"},{text:"Status",value:"status",align:"center",class:"text-center white--text text-uppercase py-2 blue lighten-1"},Object(m.a)({text:"Action",class:"text-center white--text text-uppercase py-2 blue lighten-1",value:"menu"},"class","text-center white--text text-uppercase py-2 blue lighten-1")],element_permissions:{check_btn:[{resource:f.a.GOOD_RECEIVE,action:R.a.CHECK}],approve_btn:[{resource:f.a.GOOD_RECEIVE,action:R.a.CHECK},{resource:f.a.GOOD_RECEIVE,action:R.a.APPROVE}]}}},methods:{can:function(e){return Object(C.a)(this.$auth.user,e)},showDetail:function(e){this.$router.push({path:"/good_receive/".concat(e.id,"/detail")})}}},k=n(60),component=Object(k.a)(y,(function(){var e=this,t=e._self._c;return t(r.a,{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.goodReceives,search:e.search,"hide-default-footer":!0,"items-per-page":e._pagination.perPage},scopedSlots:e._u([{key:"item.id",fn:function(n){var o=n.item;return[t("span",{staticClass:"blue--text"},[e._v("# "+e._s(o.id))])]}},{key:"item.status",fn:function(n){var o=n.item;return["COMPLETED"==o.status?t(c.a,{staticClass:"ma-2",attrs:{label:"",color:"blue lighten-3"}},[t(l.a,{attrs:{left:""}}),e._v(" Closed\n    ")],1):"CHECKED"==o.status?t(c.a,{staticClass:"ma-2",attrs:{label:"",color:"warning lighten-3 black--text"}},[t(l.a,{attrs:{left:""}},[e._v("mdi-check")]),e._v(" "+e._s(o.status)+"\n    ")],1):"APPROVED"==o.status?t(c.a,{staticClass:"ma-2",attrs:{label:"",color:"green lighten-3"}},[t(l.a,{attrs:{left:""}},[e._v("mdi-check-all")]),e._v(" "+e._s(o.status)+"\n    ")],1):t(c.a,{staticClass:"ma-2",attrs:{label:"",color:"gray lighten-3"}},[t(l.a,{attrs:{left:""}},[e._v("mdi-dots-horizontal")]),e._v(" "+e._s(o.status)+"\n    ")],1)]}},{key:"item.menu",fn:function(n){var c=n.item;return[t(h.a,{attrs:{transition:"slide-x-transition",bottom:"",right:""},scopedSlots:e._u([{key:"activator",fn:function(n){var c=n.on,r=n.attrs;return[t(o.a,e._g(e._b({attrs:{icon:""}},"v-btn",r,!1),c),[t(l.a,[e._v("mdi-menu")])],1)]}}],null,!0)},[e._v(" "),t(d.a,{staticClass:"col-12 px-0"},[t(v.a,{on:{click:function(t){return e.showDetail(c)}}},[t(l.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-eye")]),e._v(" "),t(_.d,[e._v("Detail")])],1),e._v(" "),t("hr"),e._v(" "),"PENDING"==c.status&&e.can(e.element_permissions.check_btn)?t(v.a,{on:{click:function(t){return e.$emit("on-good-receive-check-clicked",c)}}},[t(l.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-check")]),e._v(" "),t(_.d,[e._v("Check")])],1):e._e(),e._v(" "),"CHECKED"==c.status&&e.can(e.element_permissions.approve_btn)?t(v.a,{on:{click:function(t){return e.$emit("on-good-receive-approve-clicked",c)}}},[t(l.a,{staticClass:"text-sm",attrs:{left:""}},[e._v("mdi-check")]),e._v(" "),t(_.d,[e._v("Approve")])],1):e._e()],1)],1)]}}])})}),[],!1,null,null,null);t.default=component.exports},689:function(e,t,n){"use strict";n.r(t);var o=n(276),c=n(231),r=n(652),l=n(695),d=n(633),v=n(273),_=n(696),h=n(194),m=n(175),f=n(86),R=n(786),C=n(645),y=n(609),k=n(124),O=(n(47),n(63),n(38),n(14),n(87),n(13),n(12),n(16),n(17),n(1)),x=(n(71),n(108),n(6),n(10),n(106)),w=n(646);function I(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?I(Object(source),!0).forEach((function(t){Object(O.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):I(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var E={props:["goodReceive"],data:function(){return{selectedRequestItems:[],requiredRules:[function(e){return!!e||"This field is required"}],valid:!1,allChecked:!1}},methods:j(j({},Object(x.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onCheckBoxChanged:function(e){this.$refs.form.validate()},onMainCheckBoxToggled:function(e){var t;e?this.selectedRequestItems=null===(t=this.goodReceive)||void 0===t?void 0:t.goodReceiveItems.map((function(e){return e.id})):this.selectedRequestItems=[]},checkGoodReceive:function(e){var t=this;if(this.selectedRequestItems.length){var n=this.selectedRequestItems.map((function(e){var n;return{id:(e=null===(n=t.goodReceive)||void 0===n?void 0:n.goodReceiveItems.find((function(t){return t.id==e}))).id,checked_quantity:e.checked_quantity,check_remark:e.check_remark}}));this.$apollo.mutate({mutation:w.d,variables:{id:this.goodReceive.id,input:n}}).then((function(n){n.data;t.successNotification("Good Receive checked!"),e.target.reset(),t.$emit("on-close-good-receive-check-form")})).catch((function(e){console.log(e)}))}else this.errorNotification("Check At Least One Item!")}}),created:function(){},watch:{$props:{handler:function(){var e;null===(e=this.goodReceive)||void 0===e||e.goodReceiveItems.forEach((function(e){return e.checked_quantity=e.received_quantity})),this.onMainCheckBoxToggled(!0),this.allChecked=!0},deep:!0,immediate:!0}}},G=n(60),component=Object(G.a)(E,(function(){var e,t,n,O,x,w,I=this,j=I._self._c;return j(o.a,[j("div",{staticClass:"grey lighten-2 pb-2"},[j(c.c,{staticClass:"text-h5 pb-0"},[I._v("\n      Good Receive Check Form\n    ")]),I._v(" "),j("span",{staticClass:"ml-4"},[I._v("Registration form")])],1),I._v(" "),j(_.a,{ref:"form",on:{submit:function(e){return e.preventDefault(),I.checkGoodReceive.apply(null,arguments)}},model:{value:I.valid,callback:function(e){I.valid=e},expression:"valid"}},[j(d.a,[j("div",{staticClass:"col-12"},[j(R.a,[j(m.a,{staticClass:"col-3"},[j(f.b,[j(f.d,[I._v("Reference Number")]),I._v(" "),j(f.c,{staticClass:"text-uppercase"},[I._v(I._s(null===(e=I.goodReceive)||void 0===e?void 0:e.reference_number))])],1)],1),I._v(" "),j(m.a,{staticClass:"col-3"},[j(f.b,[j(f.d,[I._v("Requested Date")]),I._v(" "),j(f.c,[I._v(I._s(null===(t=I.goodReceive)||void 0===t?void 0:t.received_date))])],1)],1),I._v(" "),j(m.a,{staticClass:"col-3"},[j(f.b,[j(f.d,[I._v("Received By")]),I._v(" "),j(f.c,[I._v(I._s(null===(n=I.goodReceive)||void 0===n?void 0:n.received_by))])],1)],1),I._v(" "),j(m.a,{staticClass:"col-3"},[j(f.b,[j(f.d,[I._v("Status")]),I._v(" "),j(f.c,[I._v(I._s(null===(O=I.goodReceive)||void 0===O?void 0:O.status))])],1)],1)],1),I._v(" "),j(v.a,{staticClass:"my-2"}),I._v(" "),j(R.a,[j(m.a,{staticClass:"col-4"},[j(f.b,[j(f.d,[I._v("Project")]),I._v(" "),j(f.c,[I._v(I._s(null===(x=I.goodReceive)||void 0===x?void 0:x.project))])],1)],1),I._v(" "),j(m.a,{staticClass:"col-4"},[j(f.b,[j(f.d,[I._v("Remark")]),I._v(" "),j(f.c,[I._v(I._s(null===(w=I.goodReceive)||void 0===w?void 0:w.remark))])],1)],1)],1)],1),I._v(" "),j(v.a,{staticClass:"my-2"}),I._v(" "),j("div",{staticClass:"blue-grey white--text"},[j("div",{staticClass:"px-4 row ma-1 pb-2"},[j("div",{staticClass:"pt-1"},[j(c.c,{staticClass:"text-h5 pa-0"},[I._v("\n              Received Items\n            ")]),I._v(" "),j("span",[I._v("Received Items are listed below.")])],1),I._v(" "),j(y.a)],1),I._v(" "),j(C.a,{staticClass:"blue-grey lighten-5",scopedSlots:I._u([{key:"default",fn:function(){var e;return[j("thead",[j("tr",{staticClass:"blue-grey text-uppercase text-bold lighten-4"},[j("th",[j(r.a,{on:{change:I.onMainCheckBoxToggled},model:{value:I.allChecked,callback:function(e){I.allChecked=e},expression:"allChecked"}})],1),I._v(" "),j("th",{staticClass:"font-weight-black"},[j("b",[I._v("Item")])]),I._v(" "),j("th",{staticClass:"font-weight-black"},[I._v("Received Quantity")]),I._v(" "),j("th",{staticClass:"font-weight-black",staticStyle:{width:"165px"}},[I._v("\n                  Checked Quantity\n                ")]),I._v(" "),j("th",{staticClass:"font-weight-black"},[I._v("Donor")]),I._v(" "),j("th",{staticClass:"font-weight-black"},[I._v("condition")]),I._v(" "),j("th",{staticClass:"font-weight-black"},[I._v("comment")])])]),I._v(" "),j("tbody",I._l(null===(e=I.goodReceive)||void 0===e?void 0:e.goodReceiveItems,(function(e){var t,n,o,c;return j("tr",{key:e.id,class:{"lime lighten-4":I.selectedRequestItems.includes(e.id)}},[j("td",{staticStyle:{width:"35px"}},[j(r.a,{attrs:{value:e.id},on:{change:I.onCheckBoxChanged},model:{value:I.selectedRequestItems,callback:function(e){I.selectedRequestItems=e},expression:"selectedRequestItems"}})],1),I._v(" "),j("td",[j("b",[I._v("\n                    "+I._s(null==e||null===(t=e.item)||void 0===t?void 0:t.name)+"\n                  ")]),I._v(" "),j("br"),I._v(" "),j("span",[I._v("\n                    "+I._s(null==e?void 0:e.description)+"\n                  ")])]),I._v(" "),j("td",[j("b",[I._v(I._s(I._f("number_format")(e.received_quantity))+" \n                  "),j("small",[I._v(I._s(null==e||null===(n=e.unitOfMeasurement)||void 0===n?void 0:n.abbreviation))])])]),I._v(" "),j("td",{staticClass:"pb-0",staticStyle:{"min-width":"300px"}},[j(k.a,{staticClass:"py-0 mt-1 -mb-5",staticStyle:{"margin-bottom":"-10px !important"},attrs:{label:"Quantity / ".concat(null==e||null===(o=e.unitOfMeasurement)||void 0===o?void 0:o.abbreviation),dense:"",outlined:"",type:"number",messages:"",rules:I.requiredRules},model:{value:e.checked_quantity,callback:function(t){I.$set(e,"checked_quantity",I._n(t))},expression:"goodReceiveItem.checked_quantity"}})],1),I._v(" "),j("td",[I._v(I._s(null==e||null===(c=e.donor)||void 0===c?void 0:c.name))]),I._v(" "),j("td",[I._v(I._s(null==e?void 0:e.condition))]),I._v(" "),j("td",[I._v(I._s(null==e?void 0:e.comment))])])})),0)]},proxy:!0}])})],1),I._v(" "),j(v.a,{staticClass:"my-2"}),I._v(" "),j(l.a,{staticClass:"py-3 row"},[j("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button",to:"/order/pending"},on:{click:function(e){return I.$emit("on-close-good-receive-check-form")}}},[j("span",{staticClass:"v-btn__content text-white"},[I._v(" Cancel ")])]),I._v(" "),j(y.a),I._v(" "),j("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[j("span",{staticClass:"v-btn__content text-white"},[j(h.a,{staticClass:"mr-3"},[I._v("mdi-check")]),I._v(" | Check\n          ")],1)])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},690:function(e,t,n){"use strict";n.r(t);var o=n(276),c=n(231),r=n(652),l=n(695),d=n(633),v=n(273),_=n(696),h=n(194),m=n(175),f=n(86),R=n(786),C=n(645),y=n(609),k=n(124),O=(n(47),n(63),n(38),n(14),n(87),n(13),n(12),n(16),n(17),n(1)),x=(n(71),n(108),n(6),n(10),n(106)),w=n(646);function I(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?I(Object(source),!0).forEach((function(t){Object(O.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):I(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var E={props:["goodReceive"],data:function(){return{selectedRequestItems:[],requiredRules:[function(e){return!!e||"This field is required"}],valid:!1,allChecked:!1}},methods:j(j({},Object(x.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onApproveBoxChanged:function(e){this.$refs.form.validate()},onMainApproveBoxToggled:function(e){var t;e?this.selectedRequestItems=null===(t=this.goodReceive)||void 0===t?void 0:t.goodReceiveItems.map((function(e){return e.id})):this.selectedRequestItems=[]},approveGoodReceive:function(e){var t=this;if(this.selectedRequestItems.length){var n=this.selectedRequestItems.map((function(e){var n;return{id:(e=null===(n=t.goodReceive)||void 0===n?void 0:n.goodReceiveItems.find((function(t){return t.id==e}))).id,approved_quantity:e.approved_quantity,approve_remark:e.approve_remark}}));this.$apollo.mutate({mutation:w.a,variables:{id:this.goodReceive.id,input:n}}).then((function(n){n.data;t.successNotification("Good Receive approved!"),e.target.reset(),t.$emit("on-close-good-receive-approve-form")})).catch((function(e){console.log(e)}))}else this.errorNotification("Approve At Least One Item!")}}),created:function(){},watch:{$props:{handler:function(){var e;null===(e=this.goodReceive)||void 0===e||e.goodReceiveItems.forEach((function(e){return e.approved_quantity=e.checked_quantity})),this.onMainApproveBoxToggled(!0),this.allChecked=!0},deep:!0,immediate:!0}}},G=n(60),component=Object(G.a)(E,(function(){var e,t,n,O,x,w=this,I=w._self._c;return I(o.a,[I("div",{staticClass:"grey lighten-2 pb-2"},[I(c.c,{staticClass:"text-h5 pb-0"},[w._v("\n      Good Receive Approve Form\n    ")]),w._v(" "),I("span",{staticClass:"ml-4"},[w._v("Registration form")])],1),w._v(" "),I(_.a,{ref:"form",on:{submit:function(e){return e.preventDefault(),w.approveGoodReceive.apply(null,arguments)}},model:{value:w.valid,callback:function(e){w.valid=e},expression:"valid"}},[I(d.a,[I("div",{staticClass:"col-12"},[I(R.a,[I(m.a,{staticClass:"col-3"},[I(f.b,[I(f.d,[w._v("Reference Number")]),w._v(" "),I(f.c,{staticClass:"text-uppercase"},[w._v(w._s(null===(e=w.goodReceive)||void 0===e?void 0:e.reference_number))])],1)],1),w._v(" "),I(m.a,{staticClass:"col-3"},[I(f.b,[I(f.d,[w._v("Requested Date")]),w._v(" "),I(f.c,[w._v(w._s(null===(t=w.goodReceive)||void 0===t?void 0:t.received_date))])],1)],1),w._v(" "),I(m.a,{staticClass:"col-3"},[I(f.b,[I(f.d,[w._v("Received By")]),w._v(" "),I(f.c,[w._v(w._s(null===(n=w.goodReceive)||void 0===n?void 0:n.received_by))])],1)],1),w._v(" "),I(m.a,{staticClass:"col-3"},[I(f.b,[I(f.d,[w._v("Status")]),w._v(" "),I(f.c,[w._v(w._s(null===(O=w.goodReceive)||void 0===O?void 0:O.status))])],1)],1)],1),w._v(" "),I(v.a,{staticClass:"my-2"}),w._v(" "),I(R.a,[I(m.a,{staticClass:"col-4"},[I(f.b,[I(f.d,[w._v("Remark")]),w._v(" "),I(f.c,[w._v(w._s(null===(x=w.goodReceive)||void 0===x?void 0:x.remark))])],1)],1)],1)],1),w._v(" "),I(v.a,{staticClass:"my-2"}),w._v(" "),I("div",{staticClass:"blue-grey white--text"},[I("div",{staticClass:"px-4 row ma-1 pb-2"},[I("div",{staticClass:"pt-1"},[I(c.c,{staticClass:"text-h5 pa-0"},[w._v("\n              Received Items\n            ")]),w._v(" "),I("span",[w._v("Received Items are listed below.")])],1),w._v(" "),I(y.a)],1),w._v(" "),I(C.a,{staticClass:"blue-grey lighten-5",scopedSlots:w._u([{key:"default",fn:function(){var e;return[I("thead",[I("tr",{staticClass:"blue-grey text-uppercase text-bold lighten-4"},[I("th",[I(r.a,{on:{change:w.onMainApproveBoxToggled},model:{value:w.allChecked,callback:function(e){w.allChecked=e},expression:"allChecked"}})],1),w._v(" "),I("th",{staticClass:"font-weight-black"},[I("b",[w._v("Item")])]),w._v(" "),I("th",{staticClass:"font-weight-black"},[w._v("Received Quantity")]),w._v(" "),I("th",{staticClass:"font-weight-black",staticStyle:{width:"165px"}},[w._v("\n                  Checked Quantity\n                ")]),w._v(" "),I("th",{staticClass:"font-weight-black"},[w._v("Donor")]),w._v(" "),I("th",{staticClass:"font-weight-black"},[w._v("condition")]),w._v(" "),I("th",{staticClass:"font-weight-black"},[w._v("comment")])])]),w._v(" "),I("tbody",w._l(null===(e=w.goodReceive)||void 0===e?void 0:e.goodReceiveItems,(function(e){var t,n,o,c;return I("tr",{key:e.id,class:{"lime lighten-4":w.selectedRequestItems.includes(e.id)}},[I("td",{staticStyle:{width:"35px"}},[I(r.a,{attrs:{value:e.id},on:{change:w.onApproveBoxChanged},model:{value:w.selectedRequestItems,callback:function(e){w.selectedRequestItems=e},expression:"selectedRequestItems"}})],1),w._v(" "),I("td",[I("b",[w._v("\n                    "+w._s(null==e||null===(t=e.item)||void 0===t?void 0:t.name)+"\n                  ")]),w._v(" "),I("br"),w._v(" "),I("span",[w._v("\n                    "+w._s(null==e?void 0:e.description)+"\n                  ")])]),w._v(" "),I("td",[I("b",[w._v(w._s(w._f("number_format")(e.received_quantity))+" \n                  "),I("small",[w._v(w._s(null==e||null===(n=e.unitOfMeasurement)||void 0===n?void 0:n.abbreviation))])])]),w._v(" "),I("td",{staticClass:"pb-0",staticStyle:{"min-width":"300px"}},[I(k.a,{staticClass:"py-0 mt-1 -mb-5",staticStyle:{"margin-bottom":"-10px !important"},attrs:{label:"Quantity / ".concat(null==e||null===(o=e.unitOfMeasurement)||void 0===o?void 0:o.abbreviation),dense:"",outlined:"",type:"number",messages:"",rules:w.requiredRules},model:{value:e.approved_quantity,callback:function(t){w.$set(e,"approved_quantity",w._n(t))},expression:"goodReceiveItem.approved_quantity"}})],1),w._v(" "),I("td",[w._v(w._s(null==e||null===(c=e.donor)||void 0===c?void 0:c.name))]),w._v(" "),I("td",[w._v(w._s(null==e?void 0:e.condition))]),w._v(" "),I("td",[w._v(w._s(null==e?void 0:e.comment))])])})),0)]},proxy:!0}])})],1),w._v(" "),I(v.a,{staticClass:"my-2"}),w._v(" "),I(l.a,{staticClass:"py-3 row"},[I("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button",to:"/order/pending"},on:{click:function(e){return w.$emit("on-close-good-receive-approve-form")}}},[I("span",{staticClass:"v-btn__content text-white"},[w._v(" Cancel ")])]),w._v(" "),I(y.a),w._v(" "),I("button",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit"}},[I("span",{staticClass:"v-btn__content text-white"},[I(h.a,{staticClass:"mr-3"},[w._v("mdi-approve")]),w._v(" | Approve\n          ")],1)])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},790:function(e,t,n){"use strict";n.r(t);var o=n(626),c=n(695),r=n(612),l=n(194),d=n(649),v=n(609),_=n(124),h=(n(39),n(289),n(13),n(14),n(12),n(6),n(16),n(10),n(17),n(1)),m=n(671),f=n(646),R=(n(627),n(21)),C=n(288),y=n(15),k=n(689),O=n(690);function x(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(t){Object(h.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var I={components:{GoodReceiveTable:m.default,GoodReceiveCheckForm:k.default,GoodReceiveApproveForm:O.default},middleware:["authenticated"],data:function(){return{breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/dashboard"},{text:"All Good Receives",disabled:!0}],goodReceives:{paginatorInfo:{}},goodReceive:{},search:{customer_name:"",concrete_type_id:null},element_permissions:{create_btn:[{resource:y.a.GOOD_RECEIVE,action:R.a.CREATE}]},loading:!0,pagination:{page:1,per_page:25},checkGoodReceiveDialogVisible:!1,approveGoodReceiveDialogVisible:!1}},apollo:{goodReceives:{query:f.c,loadingKey:"loading",variables:function(){var e;return w(w({},{}),{page:this.pagination.page,per_page:this.pagination.per_page,where_house_id:null===(e=this.$auth)||void 0===e||null===(e=e.user)||void 0===e||null===(e=e.whereHouse)||void 0===e?void 0:e.id})},fetchPolicy:"cache-and-network"}},methods:{can:function(e){return Object(C.a)(this.$auth.user,e)},onGoodReceiveCheckClicked:function(e){this.checkGoodReceiveDialogVisible=!0,this.goodReceive=e,console.log(this.goodReceive)},onCloseGoodReceiveCheckForm:function(){this.$apollo.queries.goodReceives.refetch(),this.checkGoodReceiveDialogVisible=!1,this.approveGoodReceiveDialogVisible=!1,this.goodReceive=null},onGoodReceiveApproveClicked:function(e){console.log(e),this.approveGoodReceiveDialogVisible=!0,this.goodReceive=e},onCloseGoodReceiveApproveForm:function(){this.$apollo.queries.goodReceives.refetch(),this.approveGoodReceiveDialogVisible=!1,this.goodReceive=null}}},j=n(60),component=Object(j.a)(I,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"pa-5 grey lighten-3"},[t(o.a,{attrs:{goodReceive:e.breadcrumbs},scopedSlots:e._u([{key:"divider",fn:function(){return[t(l.a,[e._v("mdi-chevron-double-right")])]},proxy:!0}])}),e._v(" "),t("div",{staticClass:"px-4 row ma-1"},[e._m(0),e._v(" "),t(v.a),e._v(" "),t("div",{staticClass:"pr-2"})],1),e._v(" "),t("div",{staticClass:"px-5 py-3"},[t("div",{staticClass:"row mb-4"},[t(c.a,{attrs:{cols:"12",lg:"4"}},[t(_.a,{attrs:{"append-icon":"mdi-magnify",label:"Search by name, project description or phone number","single-line":"","hide-details":"",outlined:""},model:{value:e.search.customer_name,callback:function(t){e.$set(e.search,"customer_name",t)},expression:"search.customer_name"}})],1)],1),e._v(" "),t("good-receive-table",{attrs:{loading:e.loading,goodReceives:e.goodReceives.data,_pagination:e.goodReceives.paginatorInfo},on:{"on-good-receive-check-clicked":e.onGoodReceiveCheckClicked,"on-good-receive-approve-clicked":e.onGoodReceiveApproveClicked}}),e._v(" "),t(d.a,{staticClass:"my-4",attrs:{length:e.goodReceives.paginatorInfo.lastPage},model:{value:e.pagination.page,callback:function(t){e.$set(e.pagination,"page",t)},expression:"pagination.page"}})],1),e._v(" "),t(r.a,{attrs:{width:"85%"},on:{"click:outside":e.onCloseGoodReceiveCheckForm},model:{value:e.checkGoodReceiveDialogVisible,callback:function(t){e.checkGoodReceiveDialogVisible=t},expression:"checkGoodReceiveDialogVisible"}},[t("good-receive-check-form",{attrs:{goodReceive:e.goodReceive},on:{"on-close-good-receive-check-form":e.onCloseGoodReceiveCheckForm}})],1),e._v(" "),t(r.a,{attrs:{width:"85%"},on:{"click:outside":e.onCloseGoodReceiveCheckForm},model:{value:e.approveGoodReceiveDialogVisible,callback:function(t){e.approveGoodReceiveDialogVisible=t},expression:"approveGoodReceiveDialogVisible"}},[t("good-receive-approve-form",{attrs:{goodReceive:e.goodReceive},on:{"on-close-good-receive-approve-form":e.onCloseGoodReceiveCheckForm}})],1)],1)}),[function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[e._v("All Good Receives")]),e._v(" "),t("span",{staticClass:"grey--text text--darken-1"},[e._v("All Good Receives Are Shown Here.")])])}],!1,null,null,null);t.default=component.exports}}]);