webpackJsonp([25],{374:function(t,n,s){"use strict";function e(t){l||s(621)}Object.defineProperty(n,"__esModule",{value:!0});var a=s(535),i=s.n(a);for(var r in a)"default"!==r&&function(t){s.d(n,t,function(){return a[t]})}(r);var o=s(623),u=s.n(o),l=!1,f=s(0),c=e,d=f(i.a,u.a,!1,c,"data-v-5eda75fc",null);d.options.__file="src/views/otc/BusinessDetail.vue",n.default=d.exports},535:function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=s(53);n.default={name:"BusinessDetail",data:function(){return{ifLoading:!1,userInfo:{info:{}}}},methods:{refreshPageManual:function(){this.refreshPage()},refreshPage:function(){var t=this;this.ifLoading=!0,(0,e.authBusinessDetail)({id:this.$route.query.id}).then(function(n){n.code?t.$Message.error(n.message):t.userInfo=n.data,t.ifLoading=!1}).catch(function(t){})}},created:function(){this.refreshPage()},filters:{filterStatus:function(t){return["未认证","认证-待审核","认证-审核成功","认证-审核失败","保证金不足"][t]}}}},621:function(t,n,s){var e=s(622);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(13)("6302cfba",e,!1,{})},622:function(t,n,s){n=t.exports=s(12)(!1),n.push([t.i,"\n.businessDetail[data-v-5eda75fc] {\n  font-size: 16px;\n  color: #adadad;\n}\n.businessDetail .ivu-row[data-v-5eda75fc] {\n  line-height: 60px;\n}\n.businessDetail .ivu-row .status[data-v-5eda75fc] {\n  color: #ec0909;\n}\n.businessDetail .ivu-row-flex.imgs[data-v-5eda75fc] {\n  margin-top: 70px;\n}\n.businessDetail .ivu-row-flex.imgs img[data-v-5eda75fc] {\n  width: 100%;\n  height: 300px;\n  background-color: red;\n}\n.businessDetail .ivu-row-flex.imgs p[data-v-5eda75fc] {\n  text-align: center;\n}\n.businessDetail .loading[data-v-5eda75fc] {\n  position: absolute;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.8);\n}\n",""])},623:function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("Card",{staticClass:"businessDetail"},[s("p",{attrs:{slot:"title"},slot:"title"},[t._v("\n\t\t商家信息\n\t\t"),s("Button",{attrs:{type:"primary",size:"small"},on:{click:t.refreshPageManual}},[s("Icon",{attrs:{type:"refresh"}}),t._v("\n\t\t\t刷新\n\t\t")],1)],1),t._v(" "),t.ifLoading?s("Spin",{staticClass:"loading",attrs:{size:"large"}}):t._e(),t._v(" "),s("Row",[s("Col",{attrs:{span:"6"}},[t._v("\n\t\t\t审核状态："),s("span",{staticClass:"status"},[t._v(t._s(t._f("filterStatus")(t.userInfo.status)))])]),t._v(" "),s("Col",{attrs:{span:"6"}},[t._v("\n\t\t\t真实姓名："),s("span",[t._v(t._s(t.userInfo.realName))])]),t._v(" "),s("Col",{attrs:{span:"6"}},[t._v("\n\t\t\t保证金："),s("span",[t._v(t._s(t.userInfo.amount+t.userInfo.info.coinSymbol))])])],1),t._v(" "),s("Row",[s("Col",{attrs:{span:"6"}},[t._v("\n\t\t\t手机号："),s("span",[t._v(t._s(t.userInfo.info.telno))])]),t._v(" "),s("Col",{attrs:{span:"6"}},[t._v("\n\t\t\t微信号："),s("span",[t._v(t._s(t.userInfo.info.wechat))])]),t._v(" "),s("Col",{attrs:{span:"6"}},[t._v("\n\t\t\tQQ号："),s("span",[t._v(t._s(t.userInfo.info.qq))])])],1),t._v(" "),s("Row",[t._v("\n\t\t未通过原因："),s("span",[t._v(t._s(t.userInfo.detail?t.userInfo.detail:"无"))])]),t._v(" "),s("Row",{staticClass:"imgs",attrs:{type:"flex",justify:"space-around"}},[s("Col",{attrs:{span:"11"}},[s("img",{attrs:{src:t.userInfo.info.assetData,alt:"个人数字资产证明"}}),s("br"),t._v(" "),s("p",{staticStyle:{color:"#333"}},[t._v("个人数字资产证明")])]),t._v(" "),s("Col",{attrs:{span:"11"}},[s("img",{attrs:{src:t.userInfo.info.tradeData,alt:"数字资产交易证明"}}),s("br"),t._v(" "),s("p",{staticStyle:{color:"#333"}},[t._v("数字资产交易证明")])])],1)],1)},a=[];e._withStripped=!0;var i={render:e,staticRenderFns:a};n.default=i}});