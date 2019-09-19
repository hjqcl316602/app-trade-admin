webpackJsonp([11],{229:function(e,n,a){"use strict";function l(e){r||a(605)}Object.defineProperty(n,"__esModule",{value:!0});var s=a(485),i=a.n(s);for(var t in s)"default"!==t&&function(e){a.d(n,e,function(){return s[e]})}(t);var o=a(607),c=a.n(o),r=!1,u=a(0),d=l,f=u(i.a,c.a,!1,d,"data-v-4d89785e",null);f.options.__file="src/views/exchange/Setting.vue",n.default=f.exports},347:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.filterSearch=function(e){return!(!e||!String(e).length)&&!(isNaN(1*e)||1*e<0||void 0!==e.toString().split(".")[1])}},485:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var l=(a(347),a(23));n.default={data:function(){var e=this;return{loginPW:"",loginPassModal:!1,ifLoading:!0,coinScaleClass:!1,baseSymbolClass:!1,checkSymbolClass:!1,coinSymbolClass:!1,feeClass:!1,baseCoinScaleClass:!1,fixSymbol:null,fixEnable:1,fixModel:!1,symbol:null,coinSymbol:null,baseSymbol:null,enable:1,fee:null,coinScale:null,baseCoinScale:null,auditModal:!1,pageNum:null,current:1,deleteArr:!1,ifDelete:!1,columns_first:[{type:"selection",width:60,algin:"center"},{title:"序号",width:100,type:"index"},{title:"交易对",key:"symbol"},{title:"结算币种",key:"baseSymbol"},{title:"交易币种",key:"coinSymbol"},{title:"手续费",key:"fee",render:function(e,n){return e("span",{},1e3*n.row.fee+"‰")}},{title:"状态",key:"enable",render:function(e,n){return e("span",{},"1"==n.row.enable?"启用":"禁用")}},{title:"操作",key:"xx",width:120,render:function(n,a){return n("div",[n("Button",{props:{type:"info",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.fixModel=!0,e.fixSymbol=a.row.symbol,e.fee=a.row.fee,e.fixEnable=String(a.row.enable)}}},"修改")])}}],exchange:[]}},methods:{checkbaseCoinScale:function(e){var n=!(1*e>=0&&1===String(e).split(".").length&&null!==e&&e.trim().length);this.baseCoinScaleClass=n},checkCoinScale:function(e){var n=!(1*e>=0&&1===String(e).split(".").length&&null!==e&&e.trim().length);this.coinScaleClass=n},checkFee:function(e){var n=/\d|\d+.\d+$/g;this.feeClass=!(n.test(String(e))&&1*e>0)},checkbaseSymbol:function(e){var n=/[^A-Z]/g;this.baseSymbolClass=n.test(e)},checkCoinSymbol:function(e){var n=/[^A-Z]/g;this.coinSymbolClass=n.test(e)},checkPair:function(e){var n=/^[A-Z]+\/[A-Z]+$/g;this.checkSymbolClass=!n.test(e)},confirmLoginPass:function(){var e=this;this.feeClass=!1;var n={symbol:this.fixSymbol,fee:this.fee,enable:this.fixEnable,password:this.loginPW};(0,l.fixBBSetting)(n).then(function(n){n.code?e.$Message.error("修改失败！"):(e.$Message.success("修改成功！"),e.loginPW="",e.current=1,e.refreshdata(1))})},confirmFix:function(){this.loginPassModal=!0},confirmAudit:function(){var e=this,n=this.baseCoinScaleClass||this.coinScaleClass||this.feeClass||this.baseSymbolClass||this.coinSymbolClass||this.checkSymbolClass,a=!(this.symbol&&this.coinSymbol&&this.baseSymbol&&this.fee&&this.coinScale&&this.baseCoinScale);if(n||a)this.$Message.warning("信息录入不正确！");else{var s={symbol:this.symbol,coinSymbol:this.coinSymbol,baseSymbol:this.baseSymbol,enable:this.enable,fee:this.fee,coinScale:this.coinScale,baseCoinScale:this.baseCoinScale};(0,l.addBBSetting)(s).then(function(n){n.code?e.$Message.error("操作失败！"):(e.$Message.success("操作成功！"),e.current=1,e.refreshdata(1))})}},selected:function(e){var n=this;this.deleteArr=[],e.forEach(function(e){n.deleteArr.push(e.symbol)})},confirmDel:function(){var e=this;(0,l.delBBSetting)({ids:this.deleteArr}).then(function(n){n.code?e.$Message.error("删除失败！"):(e.$Message.success("删除成功！"),e.current=1,e.refreshdata(1))})},refreshPageManual:function(){this.ifLoading=!0,this.refreshdata(this.current)},changePage:function(e){this.ifLoading=!0,this.current=e,this.refreshdata(e)},refreshdata:function(e){var n=this;(0,l.queryBBSetting)({pageNo:e,pageSize:10}).then(function(e){n.exchange=e.data.content,n.pageNum=e.data.totalElements,n.ifLoading=!1})},delcoin:function(){this.deleteArr.length?this.ifDelete=!0:this.$Message.warning("尚未选取项目！")},addcoin:function(){this.symbol=null,this.coinSymbol=null,this.baseSymbol=null,this.enable=1,this.fee=null,this.coinScale=null,this.baseCoinScal=null,this.auditModal=!0}},created:function(){this.refreshdata(1)}}},605:function(e,n,a){var l=a(606);"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);a(7)("5cb2e481",l,!1,{})},606:function(e,n,a){n=e.exports=a(6)(!1),n.push([e.i,"\n.auditModel ul li[data-v-4d89785e] {\n  position: relative;\n  margin-bottom: 10px;\n}\n.auditModel ul li span[data-v-4d89785e] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: inline-block;\n  width: 95px;\n  line-height: 32px;\n  text-align: right;\n}\n.auditModel ul li span i[data-v-4d89785e] {\n  font-size: 14px;\n  font-weight: 700;\n  color: #ec0909;\n}\n.auditModel ul li em[data-v-4d89785e] {\n  position: absolute;\n  top: 0;\n  right: 120px;\n  line-height: 33px;\n  font-style: normal;\n  color: #ec0909;\n}\n.auditModel ul li p[data-v-4d89785e] {\n  padding-left: 100px;\n  width: 300px;\n  line-height: 32px;\n}\n.auditModel ul li p em[data-v-4d89785e] {\n  position: static;\n  color: unset;\n}\n",""])},607:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var l=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[e._v("\n\t\t\t币币设置\n\t\t\t\t"),a("Button",{attrs:{type:"primary",size:"small"},on:{click:e.refreshPageManual}},[a("Icon",{attrs:{type:"refresh"}}),e._v("刷新\n\t\t\t\t")],1)],1),e._v(" "),a("Row",{staticStyle:{padding:"0px 8px 8px 8px"}},[a("div",{staticClass:"clearfix",staticStyle:{float:"right"}},[a("Button",{attrs:{type:"error",size:"large"},on:{click:e.delcoin}},[e._v("删除交易对")]),e._v(" "),a("Button",{attrs:{type:"primary",size:"large"},on:{click:e.addcoin}},[e._v("添加交易对")])],1)]),e._v(" "),a("Modal",{staticClass:"auditModel",attrs:{title:"修改信息"},on:{"on-ok":e.confirmFix},model:{value:e.fixModel,callback:function(n){e.fixModel=n},expression:"fixModel"}},[a("ul",[a("li",[a("span",[a("i",[e._v("*")]),e._v(" 交易对：")]),e._v(" "),a("p",[a("Input",{attrs:{disabled:""},model:{value:e.fixSymbol,callback:function(n){e.fixSymbol=n},expression:"fixSymbol"}}),e._v(" "),a("span",[e._v(e._s())])],1)]),e._v(" "),a("li",[a("span",[a("i",[e._v("*")]),e._v(" 手续费：")]),e._v(" "),a("p",[a("Input",{class:{errorFormatBorder:e.feeClass},on:{"on-change":function(n){e.checkFee(e.fee)}},model:{value:e.fee,callback:function(n){e.fee=n},expression:"fee"}})],1),e._v(" "),a("em",{directives:[{name:"show",rawName:"v-show",value:e.feeClass,expression:"feeClass"}]},[e._v("格式不正确")])]),e._v(" "),a("li",[a("span",[a("i",[e._v("*")]),e._v(" 状态：")]),e._v(" "),a("p",[a("RadioGroup",{model:{value:e.fixEnable,callback:function(n){e.fixEnable=n},expression:"fixEnable"}},[a("Radio",{attrs:{label:"1"}},[a("em",[e._v("启用")])]),e._v(" "),a("Radio",{attrs:{label:"2"}},[a("em",[e._v("禁止")])])],1)],1)])])]),e._v(" "),a("Modal",{staticClass:"auditModel",attrs:{title:"编辑币种"},on:{"on-ok":e.confirmAudit},model:{value:e.auditModal,callback:function(n){e.auditModal=n},expression:"auditModal"}},[a("Row",[a("ul",[a("li",[a("span",[a("i",[e._v("*")]),e._v(" 交易对：")]),e._v(" "),a("p",[a("Input",{class:{errorFormatBorder:e.checkSymbolClass},on:{"on-change":function(n){e.checkPair(e.symbol)}},model:{value:e.symbol,callback:function(n){e.symbol=n},expression:"symbol"}})],1),e._v(" "),a("em",{directives:[{name:"show",rawName:"v-show",value:e.checkSymbolClass,expression:"checkSymbolClass"}]},[e._v("格式不正确")])]),e._v(" "),a("li",[a("span",[a("i",[e._v("*")]),e._v(" 交易币种：")]),e._v(" "),a("p",[a("Input",{class:{errorFormatBorder:e.coinSymbolClass},on:{"on-change":function(n){e.checkCoinSymbol(e.coinSymbol)}},model:{value:e.coinSymbol,callback:function(n){e.coinSymbol=n},expression:"coinSymbol"}})],1),e._v(" "),a("em",{directives:[{name:"show",rawName:"v-show",value:e.coinSymbolClass,expression:"coinSymbolClass"}]},[e._v("格式不正确")])]),e._v(" "),a("li",[a("span",[a("i",[e._v("*")]),e._v(" 结算币种：")]),e._v(" "),a("p",[a("Input",{class:{errorFormatBorder:e.baseSymbolClass},on:{"on-change":function(n){e.checkbaseSymbol(e.baseSymbol)}},model:{value:e.baseSymbol,callback:function(n){e.baseSymbol=n},expression:"baseSymbol"}})],1),e._v(" "),a("em",{directives:[{name:"show",rawName:"v-show",value:e.baseSymbolClass,expression:"baseSymbolClass"}]},[e._v("格式不正确")])]),e._v(" "),a("li",[a("span",[a("i",[e._v("*")]),e._v(" 状态：")]),e._v(" "),a("p",[a("RadioGroup",{model:{value:e.enable,callback:function(n){e.enable=n},expression:"enable"}},[a("Radio",{attrs:{label:"1"}},[a("em",[e._v("启用")])]),e._v(" "),a("Radio",{attrs:{label:"2"}},[a("em",[e._v("禁止")])])],1)],1)]),e._v(" "),a("li",[a("span",[a("i",[e._v("*")]),e._v(" 手续费：")]),e._v(" "),a("p",[a("Input",{class:{errorFormatBorder:e.feeClass},on:{"on-change":function(n){e.checkFee(e.fee)}},model:{value:e.fee,callback:function(n){e.fee=n},expression:"fee"}})],1),e._v(" "),a("em",{directives:[{name:"show",rawName:"v-show",value:e.feeClass,expression:"feeClass"}]},[e._v("格式不正确")])]),e._v(" "),a("li",[a("span",[a("i",[e._v("*")]),e._v(" 币种精度：")]),e._v(" "),a("p",[a("Input",{class:{errorFormatBorder:e.coinScaleClass},on:{"on-change":function(n){e.checkCoinScale(e.coinScale)}},model:{value:e.coinScale,callback:function(n){e.coinScale=n},expression:"coinScale"}})],1),e._v(" "),a("em",{directives:[{name:"show",rawName:"v-show",value:e.coinScaleClass,expression:"coinScaleClass"}]},[e._v("格式不正确")])]),e._v(" "),a("li",[a("span",[a("i",[e._v("*")]),e._v(" 基币小数精度：")]),e._v(" "),a("p",[a("Input",{class:{errorFormatBorder:e.baseCoinScaleClass},on:{"on-change":function(n){e.checkbaseCoinScale(e.baseCoinScale)}},model:{value:e.baseCoinScale,callback:function(n){e.baseCoinScale=n},expression:"baseCoinScale"}})],1),e._v(" "),a("em",{directives:[{name:"show",rawName:"v-show",value:e.baseCoinScaleClass,expression:"baseCoinScaleClass"}]},[e._v("格式不正确")])])])])],1),e._v(" "),a("Table",{attrs:{border:"",columns:e.columns_first,data:e.exchange,loading:e.ifLoading},on:{"on-selection-change":e.selected}}),e._v(" "),a("Modal",{attrs:{title:"删除交易对"},on:{"on-ok":e.confirmDel,"on-cancel":function(n){e.$Message.info("已取消！")}},model:{value:e.ifDelete,callback:function(n){e.ifDelete=n},expression:"ifDelete"}},[a("p",[e._v("是否删除选中的"+e._s(e.deleteArr.length)+"项")])]),e._v(" "),a("Row",{staticClass:"pageWrapper"},[a("Page",{staticClass:"buttomPage",attrs:{total:e.pageNum,current:e.current,"show-elevator":""},on:{"on-change":e.changePage}})],1),e._v(" "),a("Modal",{staticClass:"auditModel",attrs:{title:"请输入登录密码",width:"350"},on:{"on-cancle":function(n){e.loginPW=""},"on-ok":e.confirmLoginPass},model:{value:e.loginPassModal,callback:function(n){e.loginPassModal=n},expression:"loginPassModal"}},[a("Input",{attrs:{type:"password",placeholder:"请输入登录密码"},model:{value:e.loginPW,callback:function(n){e.loginPW=n},expression:"loginPW"}})],1)],1)],1)},s=[];l._withStripped=!0;var i={render:l,staticRenderFns:s};n.default=i}});