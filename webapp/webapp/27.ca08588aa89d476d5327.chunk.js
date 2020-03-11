webpackJsonp([27],{328:function(e,t,r){"use strict";function a(e){l||r(722)}Object.defineProperty(t,"__esModule",{value:!0});var n=r(584),s=r.n(n);for(var i in n)"default"!==i&&function(e){r.d(t,e,function(){return n[e]})}(i);var o=r(724),c=r.n(o),l=!1,d=r(0),u=a,p=d(s.a,c.a,!1,u,null,null);p.options.__file="src/views/otc/AppealManage.vue",t.default=p.exports},584:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(25),s=r(5),i=(a(s),r(10)),o=a(i),c=r(27);a(c);o.default.defaults.withCredentials=!0,t.default={name:"AppealManage",data:function(){var e=this;return{orderTypeArr:[{status:0,text:"买入"},{status:1,text:"卖出"},{status:"",text:"全部"}],sortSearch:{direction:[],property:[]},modelInner:{},ifLoading:!1,cbData:{},currentPageIdx:1,filterSearch:{account:"",success:""},orderStatusArr:[{status:0,text:"败诉"},{status:1,text:"胜诉"},{status:"",text:"全部"}],showEditModal:!1,forbidden:!1,columnsList:[{title:"订单编号",width:108,key:"orderSn"},{title:"广告类型",key:"advertiseType",render:function(e,t){return e("span",{},t.row.advertiseType?"卖出":"买入")}},{title:"广告主",key:"advertiseCreaterName",render:function(e,t){var r=t.row.advertiseCreaterUserName,a=t.row.advertiseCreaterName;return e("div",[e("p",{},r),e("p",{},"("+a+")")])}},{title:"承接人",key:"customerUsername",render:function(e,t){var r=t.row.customerUserName,a=t.row.customerName;return e("div",[e("p",{},r),e("p",{},"("+a+")")])}},{title:"申诉者",key:"initiatorName"},{title:"币种",key:"coinName"},{title:"申诉时间",key:"createTime",width:108,sortable:"custom"},{title:"订单数",key:"number",render:function(e,t){return e("Tooltip",{props:{trigger:"hover",placement:"top",content:"手续费:"+t.row.fee+t.row.coinName},style:{cursor:"pointer"}},t.row.number)}},{title:"订单金额(元)",key:"money"},{title:"支付方式",key:"payMode"},{title:"订单状态",key:"result",render:function(e,t){var r="未处理";return r=t.row.dealWithTime?t.row.isSuccess?"申诉成功":"申诉失败":"未处理",e("span",{},r)}},{title:"操作",key:"isSuccess",render:function(t,r){var a=r.row.isSuccess,n=(r.row.orderStatus,r.row.dealWithTime),s="",i="primary";return n&&!a?(s="查看",i="error"):n&&1===a?(s="查看",i="success"):n||(i="primary",s="处理"),t("Button",{props:{type:i,size:"small"},on:{click:function(){null===n?e.modelInnerFn(r):"查看"===s&&e.$router.push({path:"/otc/appealmanage/appealdetail",query:{id:r.row.appealId}})}}},s)}}]}},methods:{definedOrder:function(e){var t="desc"===e.order?1:0,r=this.sortSearch.property.indexOf(e.key);-1!==r?this.sortSearch.direction[r]=t:(this.sortSearch.property.push(e.key),this.sortSearch.direction.push(t));var a={pageNo:1,pageSize:10};Object.assign(a,this.filterSearch,this.sortSearch),this.refreshPage(a)},coinOperation:function(e){var t=this,r=null,a="",s="";e?(a="确认放币",s="是否放币？",r=n.releaseAppealCoin):(a="取消订单",s="是否取消订单？",r=n.cancelAppealOrder),this.showEditModal=!1;var i={orderSn:this.modelInner.orderSn,appealId:this.modelInner.appealId,banned:this.forbidden};this.$Modal.confirm({title:a,content:s,onOk:function(){r(i).then(function(e){e.code?t.$Message.error(e.message):t.$Message.success(e.message),t.refreshPage({pageNo:t.currentPageIdx,pageSize:10})}).catch(function(e){})},onCancel:function(){t.$Message.info("您取消了操作！")}})},modelInnerFn:function(e){this.modelInner=e.row,this.showEditModal=!0},searchByFilter:function(){this.currentPageIdx=1;var e={pageNo:1,pageSize:10};Object.assign(e,this.filterSearch),this.refreshPage(e)},refreshPageManual:function(){this.currentPageIdx=1;for(var e in this.filterSearch)this.filterSearch[e]="";for(var t in this.sortSearch)this.filterSearch[t]=[];this.refreshPage()},changePage:function(e){this.currentPageIdx=e;var t=Object.assign({pageNo:e,pageSize:10},this.filterSearch,this.sortSearch);this.refreshPage(t)},refreshPage:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.ifLoading=!0,(0,n.queryAppeal)(t).then(function(t){t.code?e.$Message.error(t.message):e.cbData=t.data,e.ifLoading=!1}).catch(function(e){})}},created:function(){this.refreshPage()}}},722:function(e,t,r){var a=r(723);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(7)("97910da4",a,!1,{})},723:function(e,t,r){t=e.exports=r(6)(!1),t.push([e.i,"\n.modelInfo h3 {\n  color: #2D8CF0;\n}\n.modelInfo ul li {\n  margin: 5px 0;\n  font-size: 14px;\n}\n.modelInfo ul li > span {\n  margin: 0 25px;\n  font-weight: 700;\n}\n",""])},724:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Card",[r("p",{attrs:{slot:"title"},slot:"title"},[e._v("\n\t\t\t\t\t后台申诉\n\t\t\t\t\t"),r("Button",{attrs:{type:"primary",size:"small"},on:{click:e.refreshPageManual}},[r("Icon",{attrs:{type:"refresh"}}),e._v(" 刷新\n\t\t\t\t\t")],1)],1),e._v(" "),r("Row",{staticClass:"functionWrapper"},[r("div",{staticClass:"searchWrapper clearfix"},[r("div",{staticClass:"poptip"},[r("Poptip",{attrs:{trigger:"hover",content:"请输入币种搜索",placement:"bottom-start"}},[r("Input",{attrs:{placeholder:"请输入币种搜索"},model:{value:e.filterSearch.unit,callback:function(t){e.$set(e.filterSearch,"unit",t)},expression:"filterSearch.unit"}})],1)],1),e._v(" "),r("div",{staticClass:"poptip"},[r("Poptip",{attrs:{trigger:"hover",content:"请输入申诉者搜索",placement:"bottom-start"}},[r("Input",{attrs:{placeholder:"请输入申诉者搜索"},model:{value:e.filterSearch.negotiant,callback:function(t){e.$set(e.filterSearch,"negotiant",t)},expression:"filterSearch.negotiant"}})],1)],1),e._v(" "),r("div",{staticClass:"poptip"},[r("Poptip",{attrs:{trigger:"hover",content:"请输入广告主搜索",placement:"bottom-start"}},[r("Input",{attrs:{placeholder:"请输入广告主搜索"},model:{value:e.filterSearch.complainant,callback:function(t){e.$set(e.filterSearch,"complainant",t)},expression:"filterSearch.complainant"}})],1)],1),e._v(" "),r("div",{staticClass:"poptip"},[r("span",[e._v("广告类型：")]),e._v(" "),r("Select",{model:{value:e.filterSearch.advertiseType,callback:function(t){e.$set(e.filterSearch,"advertiseType",t)},expression:"filterSearch.advertiseType"}},e._l(e.orderTypeArr,function(t){return r("Option",{key:t.status,attrs:{value:t.status}},[e._v(e._s(t.text))])}))],1),e._v(" "),r("div",{staticClass:"poptip"},[r("span",[e._v("订单状态：")]),e._v(" "),r("Select",{model:{value:e.filterSearch.success,callback:function(t){e.$set(e.filterSearch,"success",t)},expression:"filterSearch.success"}},e._l(e.orderStatusArr,function(t){return r("Option",{key:t.status,attrs:{value:t.status}},[e._v(e._s(t.text))])}))],1),e._v(" "),r("div",{staticClass:"btns"},[r("Button",{attrs:{type:"info",size:"small"},on:{click:e.searchByFilter}},[e._v("搜索")])],1)])]),e._v(" "),r("Row",[r("Table",{attrs:{loading:e.ifLoading,columns:e.columnsList,data:e.cbData.content,border:""},on:{"on-sort-change":e.definedOrder}})],1),e._v(" "),r("Row",{staticClass:"pageWrapper"},[r("Page",{attrs:{total:e.cbData.totalElements,current:e.currentPageIdx,"show-elevator":""},on:{"on-change":e.changePage}})],1),e._v(" "),r("Modal",{staticClass:"modelInfo",attrs:{width:"400"},model:{value:e.showEditModal,callback:function(t){e.showEditModal=t},expression:"showEditModal"}},[r("h3",{attrs:{slot:"header"},slot:"header"},[e._v("申诉信息")]),e._v(" "),r("ul",[r("li",[r("span",[e._v("广告主：")]),e._v(e._s(e.modelInner.advertiseCreaterName+"("+e.modelInner.advertiseCreaterUserName+")"))]),e._v(" "),r("li",[r("span",[e._v("承接人：")]),e._v(e._s(e.modelInner.customerUserName+"("+e.modelInner.customerName+")"))]),e._v(" "),r("li",[r("span",[e._v("订单号：")]),e._v(e._s(e.modelInner.orderSn))]),e._v(" "),r("li",[r("span",[e._v("申诉时间：")]),e._v(e._s(e.modelInner.createTime))]),e._v(" "),r("li",[r("span",[e._v("申诉备注：")]),e._v(e._s(e.modelInner.remark))]),e._v(" "),r("li",[r("span",[e._v("禁用违规方账号：")]),r("Checkbox",{model:{value:e.forbidden,callback:function(t){e.forbidden=t},expression:"forbidden"}},[e._v("禁用")])],1)]),e._v(" "),r("div",{attrs:{slot:"footer",align:"middle"},slot:"footer"},[r("Button",{attrs:{type:"primary"},on:{click:function(t){e.coinOperation(!0)}}},[e._v("放币")]),e._v(" "),r("Button",{attrs:{type:"error"},on:{click:function(t){e.coinOperation(!1)}}},[e._v("取消订单")])],1)])],1)],1)},n=[];a._withStripped=!0;var s={render:a,staticRenderFns:n};t.default=s}});