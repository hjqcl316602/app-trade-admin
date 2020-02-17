webpackJsonp([32],{291:function(e,t,a){"use strict";function n(e){c||a(611)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(546),r=a.n(i);for(var s in i)"default"!==s&&function(e){a.d(t,e,function(){return i[e]})}(s);var o=a(613),l=a.n(o),c=!1,d=a(0),m=n,p=d(r.a,l.a,!1,m,"data-v-b5e20a54",null);p.options.__file="src/views/member/MemberDetail.vue",t.default=p.exports},546:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(25),i=a(11);t.default={data:function(){var e=this;return{currentPageIdx:1,cbData:{},allSymbol:[],filterSearch:{pageNo:1,pageSize:10,memberId:"",symbol:"",type:"",startTime:"",endTime:""},typeArr:["充值","提现","转账","币币交易","法币买入","法币卖出","活动奖励","推广奖励","分红","投票","人工充值","配对","佣金奖励","全部"],memberInfo:{},ifLoading:!0,payAmount:null,payAddress:null,payUnit:null,ifManualPay:!1,userID:null,totalNum:null,columnsList:[{title:"会员ID",key:"memberId"},{title:"交易类型",render:function(t,a){var n=a.row.type;return t("span",{},e.typeArr[n])}},{title:"交易金额",render:function(e,t){return e("span",{},t.row.amount+" "+t.row.symbol)}},{title:"交易手续费",key:"fee"},{title:"交易时间",key:"createTime"}],trade_data:[],assetColumns:[{title:"币种",width:100,render:function(e,t){return e("span",{},t.row.coin.unit)}},{title:"可用",key:"balance",render:function(t,a){return t("span",e.numToFixed(a.row.balance||0,a.row.coin.withdrawScale))}},{title:"冻结",key:"frozenBalance",render:function(t,a){return t("span",e.numToFixed(a.row.frozenBalance||0,a.row.coin.withdrawScale))}},{title:"待释放资产",key:"toReleased",render:function(t,a){return t("span",e.numToFixed(a.row.toReleased||0,a.row.coin.withdrawScale))}},{title:"地址",key:"address"},{title:"操作",width:300,render:function(t,a){var i="",r="";return a.row.isLock?(i="解锁",r="success"):(i="锁定",r="error"),t("div",{},[t("Button",{props:{type:"warning",size:"small"},style:{marginRight:"8px"},on:{click:function(){e.freezing.modal=!0;var t=a.row;e.freezing.id=t.id,e.freezing.unit=t.coin.unit}}},"冻结"),t("Button",{props:{type:"primary",size:"small"},on:{click:function(){e.showManualPay(a.row)}},style:{marginRight:"8px"}},"充币"),t("Button",{props:{type:r,size:"small"},on:{click:function(){a.row.isLock?e.unlockWallet(a.row.coin.unit):e.lockWallet(a.row.coin.unit)}},style:{marginRight:"8px"}},i),t("Button",{props:{type:"info",size:"small"},on:{click:function(){(0,n.resetMemberAddr)({unit:a.row.coin.unit,uid:e.userID}).then(function(t){t.code?e.$Message.error(t.message):e.$Message.success(t.message),e.refreshPage()}).catch(function(e){})}}},"重置地址")])}}],assetRows:[],freezing:{columns:[{title:"编号",key:"id"},{title:"币种",key:"coinId"},{title:"数量",key:"frozen"},{title:"操作人编号",key:"memberId"},{title:"冻结时间",key:"created"},{title:"冻结理由",key:"remark"},{title:"操作",render:function(t,a){return t("Button",{props:{type:"error"},on:{click:function(){var t=a.row.id;e.releaseWallet({id:t})}}},"解冻")}}],list:[],modal:!1,id:"",unit:"",number:"",remark:""}}},methods:{getLockList:function(){var e=this,t=(0,i.getStore)("memberID");(0,n.getLockList)({id:t}).then(function(t){var a=t.code,n=t.data,i=t.message;0===a?(e.freezing.list=n,e.$Message.success(i)):e.$Message.error(i)})},setFreezing:function(){var e=this;if(isNaN(this.freezing.number)||this.freezing.number<=0)return this.$Message.error("请输入有效的数量");if(!this.freezing.remark)return this.$Message.error("请输入冻结理由");var t=this.freezing,a=(t.id,t.unit),r=t.number,s=t.remark;(0,n.freezingWallet)({id:(0,i.getStore)("memberID"),unit:a,number:r,remark:s}).then(function(t){var a=t.code,n=t.message;0===a?(e.$Message.success(n),e.refreshPage()):e.$Message.error(n)})},releaseWallet:function(e){var t=this,a=e.id;this.$Modal.confirm({title:"解冻",content:"是否确认解冻？",onOk:function(){(0,n.releaseWallet)({id:a}).then(function(e){var a=e.code,n=e.message;0===a?(t.$Message.success(n),t.refreshPage()):t.$Message.error(n)})}})},handelChange:function(e){e[0]?(this.filterSearch.startTime=e[0]+" 00:00:00",this.filterSearch.endTime=e[1]+" 00:00:00"):(this.filterSearch.startTime="",this.filterSearch.endTime="")},getlevel:function(e){var t="";return e?1===e?t="实名":2===e&&(t="认证"):t="普通会员",t},searchByFilter:function(){this.currentPageIdx=1,this.filterSearch.pageNo=1,this.personRecode(this.filterSearch)},confrimPay:function(){var e=this,t={unit:this.payUnit,uid:this.userID,amount:this.payAmount};(0,n.manualPay)(t).then(function(t){if(t.code)e.$Message.error(t.message);else{e.$Message.success(t.message);var a={memberId:(0,i.getStore)("memberID"),pageNo:1,pageSize:10};e.personRecode(a)}e.payAmount=null}).catch(function(e){})},lockWallet:function(e){var t=this;(0,n.lockWallet)({uid:this.userID,unit:e}).then(function(e){0==e.code?(t.$Message.success(e.message),t.refreshPage()):t.$Message.error(e.message)})},unlockWallet:function(e){var t=this;(0,n.unlockWallet)({uid:this.userID,unit:e}).then(function(e){0==e.code?(t.$Message.success(e.message),t.refreshPage()):t.$Message.error(e.message)})},showManualPay:function(e){this.ifManualPay=!0,this.payAddress=e.address,this.payUnit=e.coin.unit},changePage:function(e){this.filterSearch.pageNo=e,this.currentPageIdx=e,this.personRecode(this.filterSearch)},personRecode:function(e){var t=this;this.ifLoading=!0,(0,n.perTradeAll)(e).then(function(e){t.ifLoading=!1,e.code||(t.totalNum=e.data&&e.data.totalElements||1,t.trade_data=e.data&&e.data.content||[])})},refreshPage:function(){var e=this;(0,n.memberDetail)({id:(0,i.getStore)("memberID")}).then(function(t){t.code?e.$Message.err("个人资料获取失败!"):(e.memberInfo=t.data.member,e.assetRows=t.data.list,e.filterSearch.memberId=(0,i.getStore)("memberID"),e.userID=(0,i.getStore)("memberID"),e.personRecode(e.filterSearch))}),this.getLockList()}},created:function(){var e=this;(0,n.getCoinName)().then(function(t){t.code?e.$Message.error(t.message):e.allSymbol=t.data}).catch(function(e){}),this.refreshPage()}}},611:function(e,t,a){var n=a(612);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(7)("35f96344",n,!1,{})},612:function(e,t,a){t=e.exports=a(6)(!1),t.push([e.i,"\n.firstLine[data-v-b5e20a54],\n.secLine[data-v-b5e20a54],\n.triLine[data-v-b5e20a54] {\n  margin-bottom: 30px;\n}\n.manualPay .header[data-v-b5e20a54] {\n  color: #5cadff;\n  text-align: center;\n}\n.manualPay p[data-v-b5e20a54] {\n  margin: 10px 0;\n  color: #5cadff;\n  font-weight: 700;\n}\n.manualPay p span[data-v-b5e20a54] {\n  display: inline-block;\n  width: 300px;\n  color: #333;\n}\n.memberDetail[data-v-b5e20a54] {\n  padding: 10px 35px;\n}\n.memberDetail .tableWrapper[data-v-b5e20a54] {\n  margin-bottom: 30px;\n}\n.memberDetail .firstLine[data-v-b5e20a54] {\n  border-bottom: 1px solid #e2e2e2;\n}\n.memberDetail .firstLine table th[data-v-b5e20a54],\n.memberDetail .firstLine table td[data-v-b5e20a54] {\n  padding: 3px 6px;\n}\n.memberDetail .firstLine .leftArea[data-v-b5e20a54] {\n  padding: 10px;\n  width: 120px;\n}\n.memberDetail .firstLine .leftArea img[data-v-b5e20a54] {\n  display: inline-block;\n  width: 100%;\n  height: 70px;\n  background: #03a9f4;\n}\n.memberDetail .firstLine .leftArea .level[data-v-b5e20a54] {\n  margin: auto;\n  width: 65px;\n  padding: 2px;\n  text-align: center;\n  color: #fff;\n  border-radius: 10px;\n  background: #f44336;\n}\n.memberDetail .firstLine .leftArea .rightArea table[data-v-b5e20a54] {\n  font-size: 14px;\n  background-color: #e4e4e4;\n}\n.memberDetail .firstLine .leftArea .rightArea table th[data-v-b5e20a54] {\n  padding: 0 40px;\n}\n.memberDetail .firstLine .leftArea .rightArea table td[data-v-b5e20a54] {\n  padding: 5px 40px;\n}\n.memberDetail .firstLine .bottomLine table[data-v-b5e20a54] {\n  font-size: 15px;\n}\n.memberDetail .firstLine .bottomLine table th[data-v-b5e20a54] {\n  padding: 5px 15px;\n  border: 1px solid #f0f0f0;\n  background: #e4e4e4;\n}\n.memberDetail .firstLine .bottomLine table td[data-v-b5e20a54] {\n  padding: 5px 15px;\n  border: 1px solid #f0f0f0;\n  background: #fff;\n}\n.memberDetail .firstLine .bottomLine .leftArea[data-v-b5e20a54] {\n  float: left;\n}\n.memberDetail .firstLine .bottomLine .rightArea[data-v-b5e20a54] {\n  padding-right: 100px;\n  float: right;\n}\n.memberDetail .secLine[data-v-b5e20a54] {\n  border-bottom: 1px solid #e2e2e2;\n}\n.memberDetail .secLine .tableWrapper td[data-v-b5e20a54] {\n  padding: 5px;\n  border: 1px solid #f0f0f0;\n}\n.memberDetail .secLine .tableWrapper td.name[data-v-b5e20a54] {\n  width: 100px;\n  background: #e4e4e4;\n}\n.memberDetail .secLine .tableWrapper td.value[data-v-b5e20a54] {\n  width: 480px;\n  background: #fff;\n}\n.memberDetail .triLine .tableWrapper[data-v-b5e20a54] {\n  text-align: right;\n}\n.memberDetail .triLine .tableWrapper .ivu-page[data-v-b5e20a54] {\n  padding: 25px;\n}\n.memberDetail .lineTitle[data-v-b5e20a54] {\n  padding: 20px;\n  padding-left: 0;\n  font-size: 14px;\n}\n.memberDetail .lineTitle .ivu-icon-bookmark[data-v-b5e20a54] {\n  margin-right: 5px;\n  font-size: 20px;\n  vertical-align: middle;\n}\n",""])},613:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"memberDetail"},[a("Row",{staticClass:"firstLine"},[a("Card",{staticClass:"rightArea clearfix"},[a("p",{staticClass:"lineTitle",attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"bookmark"}}),e._v(" 基本信息\n      ")],1),e._v(" "),a("div",{staticClass:"baseInfo"},[a("Row",[a("Col",{attrs:{span:"6"}},[a("p",[e._v("\n              会员等级："),a("span",{staticStyle:{color:"#ec0909"}},[e._v(e._s(e.getlevel(e.memberInfo.memberLevel)))])])]),e._v(" "),a("Col",{attrs:{span:"6"}},[a("p",[e._v("\n              会员状态："),a("span",{staticStyle:{color:"#2d8cf0"}},[e._v(e._s(e.memberInfo.status?"禁用":"正常"))])])]),e._v(" "),a("Col",{attrs:{span:"6"}},[a("p",[e._v("\n              会员昵称："),a("span",[e._v(e._s(e.memberInfo.username))])])]),e._v(" "),a("Col",{attrs:{span:"6"}},[a("p",[e._v("\n              用户ID："),a("span",[e._v(e._s(e.memberInfo.id))])])])],1),e._v(" "),a("Row",[a("Col",{attrs:{span:"6"}},[a("p",[e._v("\n              真实姓名："),a("span",[e._v(e._s(e.memberInfo.realName))])])]),e._v(" "),a("Col",{attrs:{span:"6"}},[a("p",[e._v("\n              会员手机号："),a("span",[e._v(e._s(e.memberInfo.mobilePhone))])])]),e._v(" "),a("Col",{attrs:{span:"6"}},[a("p",[e._v("\n              身份证号："),a("span",[e._v(e._s(e.memberInfo.idNumber))])])]),e._v(" "),a("Col",{attrs:{span:"6"}},[a("p",[e._v("\n              邮箱："),a("span",[e._v(e._s(e.memberInfo.email))])])])],1),e._v(" "),a("Row",[a("Col",{attrs:{span:"6"}},[a("p",[e._v("\n              注册时间："),a("span",[e._v(e._s(e.memberInfo.registrationTime))])])]),e._v(" "),a("Col",{attrs:{span:"6"}},[a("p",[e._v("\n              最近登录时间："),a("span",[e._v(e._s(e.memberInfo.lastLoginTime))])])])],1)],1)])],1),e._v(" "),a("Row",{staticClass:"secLine"},[a("Card",[a("p",{staticClass:"lineTitle",attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"bookmark"}}),e._v("用户资产\n      ")],1),e._v(" "),a("div",{staticClass:"tableWrapper"},[a("Table",{attrs:{columns:e.assetColumns,data:e.assetRows}})],1),e._v(" "),e.freezing.list.length>0?[a("p",{staticClass:"lineTitle vi-text is-weight--bold"},[a("Icon",{attrs:{type:"bookmark"}}),e._v("冻结记录\n        ")],1),e._v(" "),a("div",{staticClass:"tableWrapper"},[a("Table",{attrs:{columns:e.freezing.columns,data:e.freezing.list}})],1)]:e._e(),e._v(" "),a("Modal",{staticClass:"manualPay",attrs:{width:"400"},on:{"on-ok":e.confrimPay},model:{value:e.ifManualPay,callback:function(t){e.ifManualPay=t},expression:"ifManualPay"}},[a("h3",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[a("Icon",{attrs:{type:"information-circled"}}),e._v(" "),a("span",[e._v(" 人工充币")])],1),e._v(" "),a("p",[e._v("\n          币种："),a("span",[e._v(e._s(e.payUnit))])]),e._v(" "),a("p",[e._v("\n          充值地址："),a("span",[e._v(e._s(e.payAddress))])]),e._v(" "),a("p",[e._v("\n          充值数量："),a("span",[a("Input",{model:{value:e.payAmount,callback:function(t){e.payAmount=t},expression:"payAmount"}})],1)])]),e._v(" "),a("Modal",{attrs:{width:"400"},on:{"on-ok":e.setFreezing,"on-cancel":function(t){e.$Message.info("已取消！")}},model:{value:e.freezing.modal,callback:function(t){e.$set(e.freezing,"modal",t)},expression:"freezing.modal"}},[a("h3",{staticClass:"header",attrs:{slot:"header"},slot:"header"},[a("Icon",{attrs:{type:"information-circled"}}),e._v(" "),a("span",[e._v("冻结")])],1),e._v(" "),a("div",{staticClass:"vi-margin-bottom"},[a("span",[e._v("币种：")]),e._v(" "),a("span",[e._v(e._s(e.freezing.unit))])]),e._v(" "),a("div",{staticClass:"vi-margin-bottom vi-flex is-align-items--center"},[a("span",[e._v("数量：")]),e._v(" "),a("div",{staticClass:"vi-flex-item is-flex--1"},[a("i-input",{attrs:{placeholder:"请输入冻结数量"},model:{value:e.freezing.number,callback:function(t){e.$set(e.freezing,"number",t)},expression:"freezing.number"}})],1)]),e._v(" "),a("div",{staticClass:" vi-margin-bottom vi-flex is-align-items--center"},[a("span",[e._v("理由：")]),e._v(" "),a("div",{staticClass:"vi-flex-item is-flex--1"},[a("i-input",{attrs:{type:"textarea",rows:4,placeholder:"请输入冻结理由"},model:{value:e.freezing.remark,callback:function(t){e.$set(e.freezing,"remark",t)},expression:"freezing.remark"}})],1)])])],2)],1),e._v(" "),a("Row",{staticClass:"triLine"},[a("Card",[a("p",{staticClass:"lineTitle",attrs:{slot:"title"},slot:"title"},[a("Icon",{attrs:{type:"bookmark"}}),e._v("交易记录\n      ")],1),e._v(" "),a("Row",{staticClass:"functionWrapper"},[a("div",{staticClass:"searchWrapper clearfix"},[a("div",{staticClass:"poptip"},[a("span",[e._v("交易类型：")]),e._v(" "),a("Select",{model:{value:e.filterSearch.type,callback:function(t){e.$set(e.filterSearch,"type",t)},expression:"filterSearch.type"}},e._l(e.typeArr,function(t,n){return a("Option",{key:t,attrs:{value:13==n?" ":n}},[e._v("\n                "+e._s(t)+"\n              ")])}))],1),e._v(" "),a("div",{staticClass:"poptip"},[a("span",[e._v("币种：")]),e._v(" "),a("Select",{model:{value:e.filterSearch.symbol,callback:function(t){e.$set(e.filterSearch,"symbol",t)},expression:"filterSearch.symbol"}},e._l(e.allSymbol,function(t,n){return a("Option",{key:t.unit,attrs:{value:t.unit}},[e._v("\n                "+e._s(t.unit)+"\n              ")])}))],1),e._v(" "),a("div",{staticClass:"poptip"},[a("DatePicker",{attrs:{type:"daterange",placement:"bottom-end",placeholder:"请选择时间区间搜索"},on:{"on-change":e.handelChange}})],1),e._v(" "),a("div",{staticClass:"btns"},[a("Button",{attrs:{type:"info",size:"small"},on:{click:e.searchByFilter}},[e._v("搜索")])],1)])]),e._v(" "),a("Row",[a("Table",{attrs:{columns:e.columnsList,loading:e.ifLoading,data:e.trade_data}})],1),e._v(" "),a("Row",{staticClass:"pageWrapper"},[a("Page",{attrs:{total:e.totalNum,current:e.currentPageIdx,"show-elevator":""},on:{"on-change":e.changePage}})],1)],1)],1)],1)},i=[];n._withStripped=!0;var r={render:n,staticRenderFns:i};t.default=r}});