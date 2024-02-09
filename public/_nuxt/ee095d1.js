(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{629:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o={USER:"User",ROLE:"Role",PERMISSION:"Permission",PERMISSION_TYPE:"PermissionType",MEASUREMENT_UNIT:"MeasurementUnit",REPORT:"Report",CONFIGURATION:"Configuration",ITEM_CATEGORY:"ItemCategory",ITEM:"Item",ASSET:"Asset",STOCK_REQUEST:"StockRequest",STOCK_REQUEST_ITEM:"StockRequestItem",CONDITION:"Condition",WHERE_HOUSE:"WhereHouse",OFFICE_LOCATION:"OfficeLocation",PROGRAM_AREA:"ProgramArea",ACQUISITION_TYPE:"AcquisitionType",GOOD_RECEIVE:"GoodReceive",STOCK_ISSUE:"StockIssue"}},630:function(t,e,n){"use strict";n.d(e,"a",(function(){return h})),n.d(e,"c",(function(){return I})),n.d(e,"d",(function(){return y})),n.d(e,"b",(function(){return C})),n.d(e,"e",(function(){return k}));var o,r,d,c,l,m,v,_=n(93),f=n(61),h=Object(f.a)(o||(o=Object(_.a)(["\n  query($page: Int!, $per_page: Int!, $name: String) {\n    items(first: $per_page, page: $page, name: $name) {\n      data {\n        id\n        name\n        item_code\n        description\n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }   \n  }\n"]))),I=(Object(f.a)(r||(r=Object(_.a)(["\n  query All_ITEM_LOOKUP_QUERY {\n    itemCategories {\n      id\n      name\n    }   \n    donors {\n      id\n      name\n    }  \n    lotNumbers {\n      id\n      lot_number\n    }   \n    unitOfMeasurements {\n      id\n      name\n      abbreviation\n    }  \n    officeLocations {\n      id\n      address\n    } \n    stockTypes {\n      id\n      name\n    }   \n    whereHouses {\n      id\n      name\n      address\n    }     \n    departments {\n      id\n      name\n    }   \n  }\n"]))),Object(f.a)(d||(d=Object(_.a)(["\n  query FIND_ITEM_QUERY($id: ID!) {\n    item(id: $id) {\n        id\n        name\n        item_code\n        description\n    }   \n  }\n"])))),y=Object(f.a)(c||(c=Object(_.a)(["\n  query ITEM_BIN_CARD_QUERY($id: ID!, $date_from: Date, $date_to: Date) {\n    itemBinCard(id: $id, date_from: $date_from, date_to: $date_to) {\n      stockIssueItems {\n        id\n        quantity\n        stockIssue {\n          id\n          date\n          created_at\n          createdBy {\n            id\n            name\n          }\n          stockRequest {\n            id\n            reference_no\n          }\n        }\n      }\n      goodReceiveItem {\n        id\n          received_quantity\n          checked_quantity\n          approved_quantity\n          description\n          expiry_date\n          comment\n          condition\n          unit_price\n          created_at\n          unitOfMeasurement {\n            id\n            abbreviation\n          }\n          donor {\n            id\n            name\n          }\n          stockType {\n            id\n            name\n          }\n          project {\n            id\n            name\n          }\n          goodReceive {\n            id\n            remark\n            status\n            received_by\n            received_date\n            reference_number\n            batch_number\n            loading_number\n            itemCategory {\n              id\n              name\n            }\n            projectObject {\n              id\n              name\n            }\n            createdBy {\n              id\n              name\n            }\n          }\n          item {\n            id\n            name\n            description\n          }\n      }\n    }   \n  }\n"]))),C=Object(f.a)(l||(l=Object(_.a)(["\n  mutation ($input: ItemCreateInput!) {\n    createItem(input: $input) {\n      id\n    }\n  }\n"]))),k=Object(f.a)(m||(m=Object(_.a)(["\n  mutation ($input: ItemUpdateInput!) {\n    updateItem(input: $input) {\n      id\n    }\n  }\n"])));Object(f.a)(v||(v=Object(_.a)(["\n  mutation($id: ID!) {\n    deleteItem(id: $id) {\n      id\n    }\n  }\n"])))},645:function(t,e,n){"use strict";n.r(e);var o=n(177),r=n(695),d=n(632),c=n(274),l=n(696),m=n(796),v=n(609),_=n(125),f=n(624),h=(n(39),n(14),n(88),n(13),n(11),n(6),n(16),n(10),n(17),n(1)),I=n(108),y=n(630);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={props:["_item"],data:function(){return{lookup:{},item:{},valid:!1,editMode:!1,submitting:!1,fieldRequiredRole:[function(t){return!!t||"This field is required"}]}},methods:k(k({},Object(I.b)({successNotification:"successNotification",errorNotification:"errorNotification",infoNotification:"infoNotification"})),{},{onFormSubmitted:function(t){this.$refs.form.validate()&&(this.editMode?this.updateItem(t):this.registerItem(t))},registerItem:function(t){var e=this;this.$refs.form.validate(),this.submitting=!0,this.$apollo.mutate({mutation:y.b,variables:{input:this.item}}).then((function(n){n.data;e.successNotification("Item registered  successfully!"),t.target.reset(),e.$router.push("/inventory/items"),e.submitting=!1})).catch((function(t){e.submitting=!1,console.log(t)}))},updateItem:function(t){var e=this;delete this.item.__typename,this.$apollo.mutate({mutation:y.e,variables:{input:this.item}}).then((function(n){n.data;e.successNotification("Item updated successfully!"),t.target.reset(),e.$router.push("/inventory/items"),e.submitting=!1})).catch((function(t){console.log(t)}))}}),watch:{$props:{handler:function(){var t;console.log(this._item),null!==(t=this._item)&&void 0!==t&&t.id?(this.editMode=!0,this.item.name=this._item.name,this.item.description=this._item.description,this.item.item_code=this._item.item_code,this.item.id=this._item.id):(this.editMode=!1,this.item={})},deep:!0,immediate:!0}}},R=n(51),component=Object(R.a)(O,(function(){var t=this,e=t._self._c;return e(l.a,{ref:"form",on:{submit:function(e){return e.preventDefault(),t.onFormSubmitted.apply(null,arguments)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(d.a,[e(m.a,[e(r.a,{staticClass:"py-0",attrs:{cols:"12",md:"9"}},[e(_.a,{staticClass:"py-0",attrs:{label:"Item Name * ",outlined:"",required:"",rules:t.fieldRequiredRole},model:{value:t.item.name,callback:function(e){t.$set(t.item,"name",e)},expression:"item.name"}})],1),t._v(" "),e(r.a,{staticClass:"py-0",attrs:{cols:"12",md:"3"}},[e(_.a,{staticClass:"py-0",attrs:{label:"Item Code",outlined:"",required:""},model:{value:t.item.item_code,callback:function(e){t.$set(t.item,"item_code",e)},expression:"item.item_code"}})],1),t._v(" "),e(r.a,{staticClass:"py-0",attrs:{cols:"12",md:"12"}},[e(f.a,{staticClass:"py-0",attrs:{label:"Enter a short description",rows:"3",outlined:"",required:""},model:{value:t.item.description,callback:function(e){t.$set(t.item,"description",e)},expression:"item.description"}})],1)],1),t._v(" "),e(c.a,{staticClass:"my-2"}),t._v(" "),e(r.a,{staticClass:"py-3 row"},[e("nuxt-link",{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default grey lighten-3",attrs:{type:"button",to:"/order/pending"}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Cancel ")])]),t._v(" "),e(v.a),t._v(" "),t.editMode?e(o.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:t.submitting,disabled:!t.valid||t.submitting}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Update ")])]):e(o.a,{staticClass:"v-btn mt-2 v-btn--is-elevated v-btn--has-bg theme--light v-size--default white--text",staticStyle:{background:"#262b40"},attrs:{type:"submit",loading:t.submitting,disabled:!t.valid||t.submitting}},[e("span",{staticClass:"v-btn__content text-white"},[t._v(" Add ")])])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},648:function(t,e,n){"use strict";n.d(e,"d",(function(){return h})),n.d(e,"e",(function(){return I})),n.d(e,"b",(function(){return y})),n.d(e,"c",(function(){return C})),n.d(e,"a",(function(){return k}));var o,r,d,c,l,m,v,_=n(93),f=n(61),h=Object(f.a)(o||(o=Object(_.a)(["\n  query($stock_request_id: ID!) {\n    stockIssue: stockIssueByRequestId(stock_request_id: $stock_request_id) {\n      id\n      transport_mode\n      date\n      transported_by\n      rate_of_charge\n      remark\n      from\n      to\n      waybill\n      status\n      stockIssueItems {\n        id\n        quantity\n        approved_quantity\n        description\n        stockRequestItem {\n          id\n          designation_contact\n          quantity\n          description\n          contact_detail\n          goodReceiveItem {\n            id\n            received_quantity\n            checked_quantity\n            approved_quantity\n            issued_quantity\n            description\n            expiry_date\n            comment\n            condition\n            unit_price\n            balance_due\n            project {\n              id\n              name\n            }\n            unitOfMeasurement {\n              id\n              abbreviation\n            }\n            donor {\n              id\n              name\n            }\n            stockType {\n              id\n              name\n            }\n            goodReceive {\n              id\n              remark\n              status\n              received_by\n              received_date\n              reference_number\n              batch_number\n              loading_number\n              itemCategory {\n                id\n                name\n              }\n              projectObject {\n                id\n                name\n              }\n            }\n            item {\n              id\n              name\n              description\n            }\n            stockVerification {\n              id\n              quantity\n              remarks\n            }\n          }\n        }\n      }\n      stockRequest {\n        id\n        reference_no\n        requested_date\n        requester_name\n        contact_detail\n        status\n        officeLocation {\n          id\n          address\n        } \n        whereHouse {\n          id\n          name\n          address\n        }     \n        department {\n          id\n          name\n        }\n      }\n      fromWhereHouse {\n        id\n        name\n      }\n      toWhereHouse {\n        id\n        name\n      }\n    }\n  }\n"]))),I=Object(f.a)(r||(r=Object(_.a)(["\n  query($id: ID!) {\n    stockIssue(id: $id) {\n      id\n      transport_mode\n      date\n      transported_by\n      rate_of_charge\n      remark\n      from\n      to\n      waybill\n      status\n      stockIssueItems {\n        id\n        quantity\n        approved_quantity\n        description\n        stockRequestItem {\n          id\n          designation_contact\n          quantity\n          description\n          contact_detail\n          goodReceiveItem {\n            id\n            received_quantity\n            checked_quantity\n            approved_quantity\n            issued_quantity\n            description\n            expiry_date\n            comment\n            condition\n            unit_price\n            balance_due\n            project {\n              id\n              name\n            }\n            unitOfMeasurement {\n              id\n              abbreviation\n            }\n            donor {\n              id\n              name\n            }\n            stockType {\n              id\n              name\n            }\n            goodReceive {\n              id\n              remark\n              status\n              received_by\n              received_date\n              reference_number\n              batch_number\n              loading_number\n              itemCategory {\n                id\n                name\n              }\n              projectObject {\n                id\n                name\n              }\n            }\n            item {\n              id\n              name\n              description\n            }\n            stockVerification {\n              id\n              quantity\n              remarks\n            }\n          }\n        }\n      }\n      stockRequest {\n        id\n        reference_no\n        requested_date\n        requester_name\n        contact_detail\n        status\n        officeLocation {\n          id\n          address\n        } \n        whereHouse {\n          id\n          name\n          address\n        }     \n        department {\n          id\n          name\n        }\n      }\n      fromWhereHouse {\n        id\n        name\n        address\n      }\n      toWhereHouse {\n        id\n        name\n      }\n    }\n  }\n"]))),y=Object(f.a)(d||(d=Object(_.a)(["\n  query($page: Int!, $per_page: Int!, $status: StatusEnum, $waybill: Boolean) {\n    stockIssues(first: $per_page, page: $page, status: $status, waybill: $waybill) {\n      data {\n        id\n        transport_mode\n        date\n        transported_by\n        rate_of_charge\n        remark\n        from\n        to\n        waybill\n        status\n        stockIssueItems {\n          id\n          quantity\n          description\n          stockRequestItem {\n            id\n            designation_contact\n            quantity\n            description\n            contact_detail\n            goodReceiveItem {\n              id\n              description\n              received_quantity\n              balance_due\n              comment\n              unitOfMeasurement {\n                id\n                abbreviation\n              }\n              item {\n                id\n                name\n              }\n            }\n          }\n        }\n        stockRequest {\n          reference_no\n          requested_date\n          requester_name\n          contact_detail\n          status\n          officeLocation {\n            id\n            address\n          } \n          whereHouse {\n            id\n            name\n            address\n          }     \n          department {\n            id\n            name\n          }\n        }\n        fromWhereHouse {\n          id\n          name\n        }\n        toWhereHouse {\n          id\n          name\n        }\n      }\n      paginatorInfo {\n        count\n        currentPage\n        total\n        lastPage\n        perPage\n      }\n    }\n  }\n"]))),C=Object(f.a)(c||(c=Object(_.a)(["\n  mutation ($input: StockIssueCreateInput!) {\n    createStockIssue(input: $input) {\n      id\n    }\n  }\n"]))),k=(Object(f.a)(l||(l=Object(_.a)(["\n  mutation ($input: StockIssueUpdateInput!) {\n    updateStockIssue(input: $input) {\n      id\n    }\n  }\n"]))),Object(f.a)(m||(m=Object(_.a)(["\n  mutation($id: ID!) {\n    deleteStockIssue(id: $id) {\n      id\n    }\n  }\n"]))),Object(f.a)(v||(v=Object(_.a)(["\n  mutation ($id: ID!, $input: [StockIssueApproveInput]!) {\n    approveStockIssue(id: $id, input: $input) {\n      id\n    }\n  }\n"]))))},703:function(t,e,n){var content=n(786);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("56970d78",content,!0,{sourceMap:!1})},785:function(t,e,n){"use strict";n(703)},786:function(t,e,n){var o=n(22)((function(i){return i[1]}));o.push([t.i,"table td[data-v-0d29d182]{border:1px solid #000!important;height:4px!important;margin:0!important;padding:0!important}.text-bold[data-v-0d29d182]{font:700}",""]),o.locals={},t.exports=o},854:function(t,e,n){"use strict";n.r(e);var o=n(626),r=n(177),d=n(695),c=n(195),l=n(228),m=n(796),v=n(644),_=(n(39),n(14),n(88),n(645)),f=n(629),h=n(21),I=n(648),y={middleware:["has_role","authenticated"],meta:{permissions:[{permission:f.a.STOCK_ISSUE,permissionTypes:h.a.READ}]},layout:"plain",components:{ItemForm:_.default},data:function(){return{breadcrumbs:[{text:"Dashboard",disabled:!1,href:"/dashboard"},{text:"Waybills",disabled:!1,href:"/stock_issue/waybills"},{text:"waybill voucher",disabled:!0}],stockIssue:{}}},apollo:{stockIssue:{query:I.e,variables:function(){return{id:this.$route.params.id}},fetchPolicy:"cache-and-network"}},methods:{print:function(){window.print()}}},C=(n(785),n(51)),component=Object(C.a)(y,(function(){var t,e,n,_,f,h,I,y=this,C=y._self._c;return C("div",{staticClass:"grey lighten-3",staticStyle:{height:"100%"}},[C(o.a,{staticClass:"no-print",attrs:{items:y.breadcrumbs},scopedSlots:y._u([{key:"divider",fn:function(){return[C(c.a,[y._v("mdi-chevron-double-right")])]},proxy:!0}])}),y._v(" "),C("div",{staticClass:"card white px-10 pb-10"},[C(r.a,{staticClass:"blue white--text no-print",attrs:{elevation:"2",absolute:"",right:"0",bottom:"0",fab:""},on:{click:y.print}},[C(c.a,[y._v("mdi-printer")])],1),y._v(" "),C(m.a,{staticClass:"px-7 row"},[C(d.a,{staticClass:"text-center"},[C(l.a,{staticClass:"mx-auto",attrs:{src:"/logo.png",height:"100px",width:"250px"}})],1),y._v(" "),C(d.a,{staticClass:"pt-5 mt-3"},[C("p",{staticClass:"ma-0 text-lg transition-swing text-h4"},[y._v("\n          Good Issue Waybill\n        ")]),y._v(" "),C("span",{staticClass:"grey--text text--darken-1"},[y._v("Good issue waybill voucher detail.")])])],1),y._v(" "),C(m.a,{staticClass:"px-4 py-4"},[C("div",{staticClass:"pa-3 col-6",staticStyle:{"border-bottom":"solid 1px rgba(110, 110, 110, 0.3)"}},[C("b",{staticClass:"text-uppercase"},[y._v("Dispatch Office Location: ")]),y._v(" "),C("span",{staticClass:"ml-1"},[y._v(y._s(null===(t=y.stockIssue)||void 0===t||null===(t=t.stockRequest)||void 0===t||null===(t=t.officeLocation)||void 0===t?void 0:t.address))])]),y._v(" "),C("div",{staticClass:"pa-3 col-6",staticStyle:{"border-bottom":"solid 1px rgba(110, 110, 110, 0.3)"}},[C("b",{staticClass:"text-uppercase"},[y._v("Ref No: ")]),y._v(" "),C("span",{staticClass:"ml-1"},[y._v("#"+y._s(null===(e=y.stockIssue)||void 0===e||null===(e=e.stockRequest)||void 0===e?void 0:e.id))])]),y._v(" "),C("div",{staticClass:"pa-3 col-6",staticStyle:{"border-bottom":"solid 1px rgba(110, 110, 110, 0.3)"}},[C("b",{staticClass:"text-uppercase"},[y._v("Transport Mode: ")]),y._v(" "),C("span",{staticClass:"ml-1"},[y._v(y._s(y.stockIssue.transport_mode))])]),y._v(" "),C("div",{staticClass:"pa-3 col-6",staticStyle:{"border-bottom":"solid 1px rgba(110, 110, 110, 0.3)"}},[C("b",{staticClass:"text-uppercase"},[y._v("Date: ")]),y._v(" "),C("span",{staticClass:"ml-1"},[y._v(y._s(y.stockIssue.date))])]),y._v(" "),C("div",{staticClass:"pa-3 col-6",staticStyle:{"border-bottom":"solid 1px rgba(110, 110, 110, 0.3)"}},[C("b",{staticClass:"text-uppercase"},[y._v("Incoterms/ Rate Of Charge: ")]),y._v(" "),C("span",{staticClass:"ml-1"},[y._v(y._s(y.stockIssue.rate_of_charge))])]),y._v(" "),C("div",{staticClass:"pa-3 col-6",staticStyle:{"border-bottom":"solid 1px rgba(110, 110, 110, 0.3)"}},[C("b",{staticClass:"text-uppercase"},[y._v("GIN No: ")])]),y._v(" "),C("div",{staticClass:"pa-3 col-4",staticStyle:{"border-bottom":"solid 1px rgba(110, 110, 110, 0.3)"}},[C("div",[C("b",{staticClass:"text-uppercase"},[y._v("From (Point of origin) ")]),y._v(" "),C("br"),y._v("\n          (Physical address & phone no./contact person)\n        ")]),y._v(" "),C("div",{staticClass:"grey pa-2 lighten-3"},[C("span",{staticClass:"ml-1"},[y._v(y._s(null===(n=y.stockIssue)||void 0===n||null===(n=n.fromWhereHouse)||void 0===n?void 0:n.name))]),y._v(" /\n          "),C("small",{staticClass:"ml-1"},[y._v(y._s(null===(_=y.stockIssue)||void 0===_||null===(_=_.fromWhereHouse)||void 0===_?void 0:_.address))])])]),y._v(" "),C("div",{staticClass:"pa-3 col-4",staticStyle:{"border-bottom":"solid 1px rgba(110, 110, 110, 0.3)"}},[C("b",{staticClass:"text-uppercase"},[y._v("Transported By: ")]),y._v(" "),C("span",{staticClass:"ml-1"},[y._v(y._s(y.stockIssue.transported_by))])]),y._v(" "),C("div",{staticClass:"pa-3 col-4",staticStyle:{"border-bottom":"solid 1px rgba(110, 110, 110, 0.3)"}},[C("div",[C("b",{staticClass:"text-uppercase"},[y._v("From (Point of origin) ")]),y._v(" "),C("br"),y._v("\n          (Physical address & phone no./contact person)\n        ")]),y._v(" "),C("div",{staticClass:"grey pa-2 lighten-3"},[C("span",{staticClass:"ml-1"},[y._v(y._s(null===(f=y.stockIssue)||void 0===f||null===(f=f.toWhereHouse)||void 0===f?void 0:f.name))]),y._v(" /\n          "),C("small",{staticClass:"ml-1"},[y._v(y._s(null===(h=y.stockIssue)||void 0===h||null===(h=h.toWhereHouse)||void 0===h?void 0:h.address))])])])]),y._v(" "),C(v.a,{staticClass:"blue-grey lighten-5 mt-4",staticStyle:{width:"100%"}},[C("thead",[C("tr",{staticClass:"blue darken-2"},[C("th",[C("b",[y._v("Description (Item/Service)")])]),y._v(" "),C("th",[C("b",[y._v("Measurement Unit")])]),y._v(" "),C("th",[C("b",[y._v("Quantity")])]),y._v(" "),C("th",[C("b",[y._v("Total Price")])]),y._v(" "),C("th",[C("b",[y._v("Serial No./ VIN No. "),C("small",[y._v("(where applicable)")])])]),y._v(" "),C("th",[C("b",[y._v("Asset Tag "),C("small",[y._v("(where applicable)")])])]),y._v(" "),C("th",[C("b",[y._v("Project Department")])]),y._v(" "),C("th",[C("b",[y._v("Donor "),C("small",[y._v("(where applicable)")])])]),y._v(" "),C("th",[C("b",[y._v("Notes")])])])]),y._v(" "),C("tbody",y._l(null===(I=y.stockIssue)||void 0===I?void 0:I.stockIssueItems,(function(t){var e,n,o,r,d,c,l,m,v;return C("tr",{key:null==t||null===(e=t.stockRequestItem)||void 0===e||null===(e=e.goodReceiveItem)||void 0===e?void 0:e.ID},[C("td",{staticClass:"text-center"},[y._v("\n            "+y._s(null==t||null===(n=t.stockRequestItem)||void 0===n||null===(n=n.goodReceiveItem)||void 0===n?void 0:n.description)+" /\n            "+y._s(null==t||null===(o=t.stockRequestItem)||void 0===o||null===(o=o.goodReceiveItem)||void 0===o||null===(o=o.item)||void 0===o?void 0:o.name)+"\n          ")]),y._v(" "),C("td",{staticClass:"text-center"},[y._v("\n            "+y._s(null==t||null===(r=t.stockRequestItem)||void 0===r||null===(r=r.goodReceiveItem)||void 0===r||null===(r=r.unitOfMeasurement)||void 0===r?void 0:r.abbreviation)+"\n          ")]),y._v(" "),C("td",{staticClass:"text-center"},[y._v("\n            "+y._s(y._f("number_format")(null==t?void 0:t.quantity))+"\n            "),C("small",[y._v(y._s(null==t||null===(d=t.stockRequestItem)||void 0===d||null===(d=d.goodReceiveItem)||void 0===d||null===(d=d.unitOfMeasurement)||void 0===d?void 0:d.abbreviation))])]),y._v(" "),C("td"),y._v(" "),C("td",{staticClass:"text-center"},[y._v("\n            "+y._s(null==t||null===(c=t.stockRequestItem)||void 0===c||null===(c=c.goodReceiveItem)||void 0===c||null===(c=c.goodReceive)||void 0===c?void 0:c.batch_number)+"\n          ")]),y._v(" "),C("td",{staticClass:"text-center"},[y._v("\n            "+y._s(null==t||null===(l=t.stockRequestItem)||void 0===l||null===(l=l.goodReceiveItem)||void 0===l||null===(l=l.goodReceive)||void 0===l?void 0:l.loading_number)+"\n          ")]),y._v(" "),C("td",{staticClass:"text-center"},[y._v("\n            "+y._s(null==t||null===(m=t.stockRequestItem)||void 0===m||null===(m=m.goodReceiveItem)||void 0===m||null===(m=m.project)||void 0===m?void 0:m.name)+"\n          ")]),y._v(" "),C("td",{staticClass:"text-center"},[y._v("\n            "+y._s(null==t||null===(v=t.stockRequestItem)||void 0===v||null===(v=v.goodReceiveItem)||void 0===v||null===(v=v.donor)||void 0===v?void 0:v.name)+"\n          ")]),y._v(" "),C("td",{staticClass:"text-center"})])})),0)])],1)],1)}),[],!1,null,"0d29d182",null);e.default=component.exports}}]);