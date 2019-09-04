webpackJsonp([19],{216:function(e,t,o){"use strict";function a(e){c||o(561)}Object.defineProperty(t,"__esModule",{value:!0});var n=o(471),l=o.n(n);for(var s in n)"default"!==s&&function(e){o.d(t,e,function(){return n[e]})}(s);var r=o(563),i=o.n(r),c=!1,d=o(0),u=a,m=d(l.a,i.a,!1,u,"data-v-43d29432",null);m.options.__file="src/views/system/Coin.vue",t.default=m.exports},471:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(3),n=function(e){return e&&e.__esModule?e:{default:e}}(a),l=(o(11),o(23));t.default={data:function(){var e=this;return{needCord:!0,enableTransferCoin:0,coldWalletForm:{unit:"",amount:"",code:""},coldWalletRule:{amount:[{required:!0,message:"请输入转出数量",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]},phoneNum:"",count:0,timer:"",showPhoneCodeModal:!1,showColdWalletModal:!1,ifCreate:!0,userpage:[],filterSearch:{pageNo:1,pageSize:10,property:[],direction:[]},totalNum:null,ifLoading:!0,currentPageIdx:1,showDetailModal:!1,showUpdateModel:!1,detailModal:{},coinForm:{code:"",name:"",nameCn:"",unit:"",status:0,canWithdraw:0,canRecharge:0,sort:"",minTxFee:"",cnyRate:"",usdRate:"",maxTxFee:"",enableRpc:0,canAutoWithdraw:0,withdrawThreshold:"",maxWithdrawAmount:"",minWithdrawAmount:""},columnsList:[{title:"中文名",key:"nameCn"},{title:"名称(英文)",key:"name"},{title:"币种缩写",key:"unit"},{title:"支持提现",key:"canWithdraw",render:function(e,t){return e("span",{},1===t.row.canWithdraw?"是":"否")}},{title:"支持充值",key:"canRecharge",render:function(e,t){return e("span",{},1===t.row.canRecharge?"是":"否")}},{title:"会员总余额",key:"allBalance",render:function(e,t){var o=t.row.allBalance;return o&&o<1&&(o=o.toFixed(8)),e("span",{},o)}},{title:"钱包余额",key:"hotAllBalance"},{title:"冷钱包地址",key:"coldWalletAddress"},{title:"添加钱包",render:function(e,t){return e("Button",{props:{type:"info",size:"small"},on:{click:function(){var e=t.row.name;(0,l.createMemberWallet)({coinName:e}).then(function(e){})}}},"添加")}},{title:"状态",key:"status",render:function(e,t){var o=t.row,a=0===o.status?"启用":"禁用";return e("Tag",{props:{color:0===o.status?"green":"red"}},a)}},{title:"操作",width:160,render:function(t,o){return t("div",[t("Button",{props:{type:"text",size:"small"},style:{color:"#2d8cf0",marginRight:"5px"},on:{click:function(){e.detailModal=o.row,e.showDetailModal=!0}}},"详情"),t("Dropdown",{props:{transfer:!0},on:{"on-click":function(t){"change"===t?(0,l.sysCoinDetail)({name:o.row.name}).then(function(t){t.code?e.$Message.error(t.message):(Object.assign(e.coinForm,t.data),e.ifCreate=!1,e.showUpdateModel=!0)}).catch(function(e){}):"coldWallet"===t?(e.coldWalletForm.unit=o.row.unit,e.enableTransferCoin=o.row.hotAllBalance,(0,l.tansTimeout)({phone:n.default.get("userPhone")}).then(function(t){t.code?e.needCord=!0:e.needCord=!1}),e.showColdWalletModal=!0):"transformDetail"===t&&e.$router.push({path:"/system/coin/transferdetail",query:{unit:o.row.unit}})}}},[t("DropdownMenu",{slot:"list"},[t("DropdownItem",{props:{name:"change"}},"修改"),t("DropdownItem",{props:{name:"coldWallet"}},"转入冷钱包"),t("DropdownItem",{props:{name:"transformDetail"}},"转入明细")]),t("Button",{props:{type:"text",size:"small"},style:{color:"#2d8cf0",marginRight:"5px"}},"更多")])])}}]}},methods:{confirmSubCodeWallet:function(){var e=this;if(this.needCord){for(var t in this.coldWalletForm)if(""===this.coldWalletForm[t].trim())return void this.$Message.warning("请完善信息！")}else if(""===this.coldWalletForm.unit.trim()||""===this.coldWalletForm.amount.trim())return void this.$Message.warning("请完善信息！");(0,l.transferColdWallet)(this.coldWalletForm).then(function(t){t.code?e.$Message.error(t.message):e.$Message.success(t.message),e.showColdWalletModal=!1,e.enableTransferCoin=0,e.count=0}).catch(function(e){})},getCode:function(e){var t=this,o="";"fixedInfo"===e?o=l.coinReviseSys:"coldWallet"===e&&(o=l.getColdWalletCode),o({phone:this.phoneNum}).then(function(e){t.$Notice.info({title:e.message|hidePhoneNum,desc:""})}).catch(function(e){})},getCodeTwice:function(e){this.count=60,this.getCode(e)},showNeedCode:function(){this.showPhoneCodeModal=!0,this.getCode("fixedInfo")},cancelSub:function(){for(var e in this.coinForm)this.coinForm[e]="";for(var t in this.coldWalletForm)this.coldWalletForm[t]="";this.enableTransferCoin=0,this.coinForm.status=this.coinForm.canWithdraw=this.coinForm.canRecharge=this.coinForm.enableRpc=this.coinForm.canAutoWithdraw=0,this.showColdWalletModal=!1},confirmSub:function(){var e=this,t="";t=this.ifCreate?l.addSysCoin:l.updateSysCoin,t(this.coinForm).then(function(t){t.code?e.$Message.error(t.message):e.$Message.success(t.message),e.refreshPage()}).catch(function(e){})},addCoin:function(){this.cancelSub(),this.ifCreate=!0,this.showUpdateModel=!0},refreshPage:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.ifLoading=!0,(0,l.querySysCoin)(t).then(function(t){t.code?e.$Message.error(t.message):(e.userpage=t.data.content,e.totalNum=t.data.totalElements),e.ifLoading=!1}).catch(function(e){})},changePage:function(e){this.currentPageIdx=e,this.filterSearch.pageNo=e,this.refreshPage(this.filterSearch)},refreshPageManual:function(){this.refreshPage(this.filterSearch)}},created:function(){this.phoneNum=JSON.parse(n.default.get("userInfo")).mobilePhone,this.refreshPage()},filters:{hidePhoneNumFilter:function(e){return e.split("").fill("*",3,7).join("")}},watch:{count:function(e,t){var o=this;e>0?this.timer=setTimeout(function(){o.count--},1e3):clearTimeout(this.timer)}}}},561:function(e,t,o){var a=o(562);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);o(7)("3762a904",a,!1,{})},562:function(e,t,o){t=e.exports=o(6)(!1),t.push([e.i,"\n.transferTips[data-v-43d29432] {\n  position: absolute;\n  bottom: -24px;\n  color: #999;\n  line-height: 23px;\n}\n",""])},563:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("Card",[o("p",{attrs:{slot:"title"},slot:"title"},[e._v("\r\n        币种管理\r\n\t\t\t"),o("Button",{attrs:{type:"primary",size:"small"},on:{click:e.refreshPageManual}},[o("Icon",{attrs:{type:"refresh"}}),e._v("刷新\r\n\t\t\t")],1)],1),e._v(" "),o("Row",{staticClass:"functionWrapper"},[o("div",{staticClass:"btnsWrapper clearfix"},[o("Button",{attrs:{type:"primary"},on:{click:e.addCoin}},[e._v("添加币种")])],1)]),e._v(" "),o("Row",[o("Table",{attrs:{columns:e.columnsList,data:e.userpage,border:"",loading:e.ifLoading}})],1),e._v(" "),o("div",{staticClass:"pageWrapper"},[o("Page",{attrs:{total:e.totalNum,current:e.currentPageIdx,"show-elevator":""},on:{"on-change":e.changePage}})],1)],1),e._v(" "),o("Modal",{attrs:{width:"400",title:"详细信息"},model:{value:e.showDetailModal,callback:function(t){e.showDetailModal=t},expression:"showDetailModal"}},[o("p",[e._v("最小交易手续费: "+e._s(e.detailModal.minTxFee))]),e._v(" "),o("p",[e._v("最大交易手续费: "+e._s(e.detailModal.maxTxFee))]),e._v(" "),o("p",[e._v("最小提币数量: "+e._s(e.detailModal.minWithdrawAmount))]),e._v(" "),o("p",[e._v("最大提币数量: "+e._s(e.detailModal.maxWithdrawAmount))])]),e._v(" "),o("Modal",{attrs:{title:"币种信息修改"},on:{"on-cancel":e.cancelSub,"on-ok":e.showNeedCode},model:{value:e.showUpdateModel,callback:function(t){e.showUpdateModel=t},expression:"showUpdateModel"}},[o("Form",{staticClass:"form",attrs:{model:e.coinForm,"label-width":80}},[o("FormItem",{attrs:{label:"中文名称:"}},[o("Input",{model:{value:e.coinForm.nameCn,callback:function(t){e.$set(e.coinForm,"nameCn",t)},expression:"coinForm.nameCn"}})],1),e._v(" "),o("FormItem",{attrs:{label:"英文名称:"}},[o("Input",{model:{value:e.coinForm.name,callback:function(t){e.$set(e.coinForm,"name",t)},expression:"coinForm.name"}})],1),e._v(" "),o("FormItem",{attrs:{label:"币种单位:"}},[o("Input",{model:{value:e.coinForm.unit,callback:function(t){e.$set(e.coinForm,"unit",t)},expression:"coinForm.unit"}})],1),e._v(" "),o("Row",[o("Col",{attrs:{span:"8"}},[o("FormItem",{attrs:{label:"充值"}},[o("i-switch",{attrs:{"true-value":1,"false-value":0,size:"large"},model:{value:e.coinForm.canRecharge,callback:function(t){e.$set(e.coinForm,"canRecharge",t)},expression:"coinForm.canRecharge"}},[o("span",{attrs:{slot:"open"},slot:"open"},[e._v("开放")]),e._v(" "),o("span",{attrs:{slot:"close"},slot:"close"},[e._v("禁止")])])],1)],1),e._v(" "),o("Col",{attrs:{span:"8"}},[o("FormItem",{attrs:{label:"RPC"}},[o("i-switch",{attrs:{"true-value":1,"false-value":0,size:"large"},model:{value:e.coinForm.enableRpc,callback:function(t){e.$set(e.coinForm,"enableRpc",t)},expression:"coinForm.enableRpc"}},[o("span",{attrs:{slot:"open"},slot:"open"},[e._v("开放")]),e._v(" "),o("span",{attrs:{slot:"close"},slot:"close"},[e._v("禁止")])])],1)],1),e._v(" "),o("Col",{attrs:{span:"8"}},[o("FormItem",{attrs:{label:"提现"}},[o("i-switch",{attrs:{"true-value":1,"false-value":0,size:"large"},model:{value:e.coinForm.canWithdraw,callback:function(t){e.$set(e.coinForm,"canWithdraw",t)},expression:"coinForm.canWithdraw"}},[o("span",{attrs:{slot:"open"},slot:"open"},[e._v("启用")]),e._v(" "),o("span",{attrs:{slot:"close"},slot:"close"},[e._v("禁用")])])],1)],1)],1),e._v(" "),o("Row",[o("Col",{attrs:{span:"12"}},[o("FormItem",{attrs:{label:"最小手续费:"}},[o("Input",{model:{value:e.coinForm.minTxFee,callback:function(t){e.$set(e.coinForm,"minTxFee",t)},expression:"coinForm.minTxFee"}})],1)],1),e._v(" "),o("Col",{attrs:{span:"12"}},[o("FormItem",{attrs:{label:"最大手续费:"}},[o("Input",{model:{value:e.coinForm.maxTxFee,callback:function(t){e.$set(e.coinForm,"maxTxFee",t)},expression:"coinForm.maxTxFee"}})],1)],1)],1),e._v(" "),o("Row",[o("Col",{attrs:{span:"12"}},[o("FormItem",{attrs:{label:"最小提币量:"}},[o("Input",{model:{value:e.coinForm.minWithdrawAmount,callback:function(t){e.$set(e.coinForm,"minWithdrawAmount",t)},expression:"coinForm.minWithdrawAmount"}})],1)],1),e._v(" "),o("Col",{attrs:{span:"12"}},[o("FormItem",{attrs:{label:"最大提币量:"}},[o("Input",{model:{value:e.coinForm.maxWithdrawAmount,callback:function(t){e.$set(e.coinForm,"maxWithdrawAmount",t)},expression:"coinForm.maxWithdrawAmount"}})],1)],1)],1),e._v(" "),o("Row",[o("Col",{attrs:{span:"12"}},[o("FormItem",{attrs:{label:"自动转账"}},[o("i-switch",{attrs:{"true-value":1,"false-value":0,size:"large"},model:{value:e.coinForm.canAutoWithdraw,callback:function(t){e.$set(e.coinForm,"canAutoWithdraw",t)},expression:"coinForm.canAutoWithdraw"}},[o("span",{attrs:{slot:"open"},slot:"open"},[e._v("启用")]),e._v(" "),o("span",{attrs:{slot:"close"},slot:"close"},[e._v("禁用")])])],1)],1),e._v(" "),o("Col",{attrs:{span:"12"}},[o("FormItem",{attrs:{label:"状态"}},[o("i-switch",{attrs:{"true-value":1,"false-value":0,size:"large"},model:{value:e.coinForm.status,callback:function(t){e.$set(e.coinForm,"status",t)},expression:"coinForm.status"}},[o("span",{attrs:{slot:"open"},slot:"open"},[e._v("启用")]),e._v(" "),o("span",{attrs:{slot:"close"},slot:"close"},[e._v("禁用")])])],1)],1)],1),e._v(" "),o("Row",[o("Col",{attrs:{span:"12"}},[o("FormItem",{attrs:{label:"阀值:"}},[o("Input",{model:{value:e.coinForm.withdrawThreshold,callback:function(t){e.$set(e.coinForm,"withdrawThreshold",t)},expression:"coinForm.withdrawThreshold"}})],1)],1),e._v(" "),o("Col",{attrs:{span:"12"}},[o("FormItem",{attrs:{label:"排序:"}},[o("Input",{model:{value:e.coinForm.sort,callback:function(t){e.$set(e.coinForm,"sort",t)},expression:"coinForm.sort"}})],1)],1)],1),e._v(" "),o("Row",[o("Col",{attrs:{span:"12"}},[o("FormItem",{attrs:{label:"人民币汇率:"}},[o("Input",{model:{value:e.coinForm.cnyRate,callback:function(t){e.$set(e.coinForm,"cnyRate",t)},expression:"coinForm.cnyRate"}})],1)],1),e._v(" "),o("Col",{attrs:{span:"12"}},[o("FormItem",{attrs:{label:"美元汇率:"}},[o("Input",{model:{value:e.coinForm.usdRate,callback:function(t){e.$set(e.coinForm,"usdRate",t)},expression:"coinForm.usdRate"}})],1)],1)],1)],1)],1),e._v(" "),o("Modal",{attrs:{title:"修改币种信息",width:"350"},on:{"on-ok":e.confirmSub,"on-cancel":e.cancelSub},model:{value:e.showPhoneCodeModal,callback:function(t){e.showPhoneCodeModal=t},expression:"showPhoneCodeModal"}},[o("Row",[o("p",[e._v("验证码已发送至："),o("span",{staticStyle:{color:"#ed3f14"}},[e._v(e._s(e._f("hidePhoneNumFilter")(e.phoneNum)))])])]),e._v(" "),o("br"),e._v(" "),o("Row",[o("Input",{class:{appendBtn:0===e.count},attrs:{placeholder:"请输入验证码"},model:{value:e.coinForm.code,callback:function(t){e.$set(e.coinForm,"code",t)},expression:"coinForm.code"}},[e.count>0?o("Button",{attrs:{slot:"append",disabled:e.count>0},slot:"append"},[e._v(e._s(e.count)+"s后重新获取")]):0===e.count?o("Button",{attrs:{slot:"append",type:"success"},on:{click:function(t){e.getCodeTwice("fixedInfo")}},slot:"append"},[e._v("获取验证码")]):e._e()],1)],1)],1),e._v(" "),o("Modal",{attrs:{title:"转入冷钱包",width:"380"},model:{value:e.showColdWalletModal,callback:function(t){e.showColdWalletModal=t},expression:"showColdWalletModal"}},[o("Form",{attrs:{model:e.coldWalletForm,"label-width":90,rules:e.coldWalletRule}},[o("FormItem",{attrs:{label:"币种："}},[o("span",[e._v(e._s(e.coldWalletForm.unit))])]),e._v(" "),o("FormItem",{attrs:{label:"转入金额：",prop:"amount"}},[o("Input",{model:{value:e.coldWalletForm.amount,callback:function(t){e.$set(e.coldWalletForm,"amount",t)},expression:"coldWalletForm.amount"}}),e._v(" "),o("p",{staticClass:"transferTips"},[e._v("可转入金额："),o("span",[e._v(e._s(e.enableTransferCoin))])])],1),e._v(" "),o("FormItem",{directives:[{name:"show",rawName:"v-show",value:e.needCord,expression:"needCord"}],attrs:{label:"手机号："}},[o("Input",{class:{appendBtn:0===e.count},attrs:{placeholder:"请输入验证码",disabled:!0,value:e._f("hidePhoneNumFilter")(e.phoneNum)}},[e.count>0?o("Button",{attrs:{slot:"append",disabled:e.count>0},slot:"append"},[e._v(e._s(e.count)+"s后重新获取")]):0===e.count?o("Button",{attrs:{slot:"append",type:"success"},on:{click:function(t){e.getCodeTwice("coldWallet")}},slot:"append"},[e._v("获取验证码")]):e._e()],1)],1),e._v(" "),o("FormItem",{directives:[{name:"show",rawName:"v-show",value:e.needCord,expression:"needCord"}],attrs:{label:"验证码：",prop:"code"}},[o("Input",{model:{value:e.coldWalletForm.code,callback:function(t){e.$set(e.coldWalletForm,"code",t)},expression:"coldWalletForm.code"}})],1)],1),e._v(" "),o("Row",{attrs:{slot:"footer"},slot:"footer"},[o("Col",{attrs:{span:"11"}},[o("Button",{attrs:{type:"info",long:""},on:{click:e.confirmSubCodeWallet}},[e._v("转入冷钱包")])],1),e._v(" "),o("Col",{attrs:{span:"11",offset:"2"}},[o("Button",{attrs:{long:""},on:{click:e.cancelSub}},[e._v("取消")])],1)],1)],1)],1)},n=[];a._withStripped=!0;var l={render:a,staticRenderFns:n};t.default=l}});