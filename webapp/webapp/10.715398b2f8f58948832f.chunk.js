webpackJsonp([10],{212:function(t,e,s){"use strict";function a(t){c||s(549)}Object.defineProperty(e,"__esModule",{value:!0});var i=s(467),n=s.n(i);for(var l in i)"default"!==l&&function(t){s.d(e,t,function(){return i[t]})}(l);var r=s(551),o=s.n(r),c=!1,d=s(0),u=a,p=d(n.a,o.a,!1,u,"data-v-1bdf2da6",null);p.options.__file="src/views/otc/CustomDetail.vue",e.default=p.exports},260:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getMemberChat=e.setChatStatus=e.getChatHistoryKfAndCd=e.getChatHistory=e.closeAppeal=e.getAppealDetail=e.changeWorkStatus=e.getWorkBench=e.queryCustom=void 0;var a=s(24),i=function(t,e){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return new Promise(function(i,n){(0,a.post)(t,e).then(function(t){t.code===s?i(t.data):n()}).catch(function(t){return n()})})};e.queryCustom=function(t){return(0,a.post)("admin/otc/appeal/appeal",t)},e.getWorkBench=function(t){return i("admin/otc/appeal/appealWorkbench",t)},e.changeWorkStatus=function(t){return i("admin/otc/appeal/workStatus",t)},e.getAppealDetail=function(t){return i("admin/otc/appeal/AppealDetail",t)},e.closeAppeal=function(t){return i("admin/otc/appeal/closeAppeal",t)},e.getChatHistory=function(t){return i("/chat/getHistoryMessageKf.do",t,"000")},e.getChatHistoryKfAndCd=function(t){return i("/chat/getHistoryMessageKfpCd.do",t,"000")},e.setChatStatus=function(t){return i("/chat/read.do",t,"000")},e.getMemberChat=function(t){return i("/admin/member/memberChat",t)}},467:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(260);e.default={name:"",data:function(){return{basis:{accessToken:"",appId:"",orderId:"",orderSn:""},detail:{}}},mounted:function(){this.init()},methods:{init:function(){this.getBasisMessage(),this.getAppealDetail()},getBasisMessage:function(){this.basis.orderId=this.$route.query.orderId,this.basis.orderSn=this.$route.query.orderSn;var t=localStorage.getItem("app/order/custom/chat/message"),e=t?JSON.parse(t):{};this.basis.accessToken=e.accessToken,this.basis.appId=e.appId},getAppealDetail:function(t){var e=this;return new Promise(function(t){(0,a.getAppealDetail)({orderId:e.basis.orderId}).then(function(t){e.detail=t}).catch(function(t){e.$Message.error("获取申诉订单详情失败！")})})}}}},549:function(t,e,s){var a=s(550);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s(7)("54476b3e",a,!1,{})},550:function(t,e,s){e=t.exports=s(6)(!1),e.push([t.i,"\n.list[data-v-1bdf2da6]{\r\n  display: flex;\r\n  flex-wrap: wrap;\n}\n.list-item[data-v-1bdf2da6]{\r\n  flex: none;\r\n  width:25%;\r\n  padding: 10px 0 ;\r\n  display: flex;\n}\n.list-title[data-v-1bdf2da6]{ \r\n  font-size: 15px;\r\n  color: #adabab\n}\n.list-value[data-v-1bdf2da6]{\r\n  color:#444\n}\r\n",""])},551:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("Card",[s("p",{attrs:{slot:"title"},slot:"title"},[t._v("\n      申诉详情\n    ")]),t._v(" "),s("div",{staticClass:"list"},[s("div",{staticClass:"list-item"},[s("span",{staticClass:"list-title"},[t._v("订单号: ")]),t._v(" "),s("span",{staticClass:"list-value"},[t._v(t._s(t.detail.orderSn))])]),t._v(" "),s("div",{staticClass:"list-item"},[s("span",{staticClass:"list-title"},[t._v("交易类型: ")]),t._v(" "),s("span",{staticClass:"list-value"},[t._v(t._s(1===t.detail.advertiseType?"充值":"提现"))])]),t._v(" "),s("div",{staticClass:"list-item"},[s("span",{staticClass:"list-title"},[t._v("支付方式: ")]),t._v(" "),s("span",{staticClass:"list-value"},[t._v(t._s(t.detail.payMode))])]),t._v(" "),s("div",{staticClass:"list-item"},[s("span",{staticClass:"list-title"},[t._v("交易金额: ")]),t._v(" "),s("span",{staticClass:"list-value"},[t._v(t._s(t.detail.money))])]),t._v(" "),s("div",{staticClass:"list-item"},[s("span",{staticClass:"list-title"},[t._v("申诉者（用户）: ")]),t._v(" "),s("span",{staticClass:"list-value"},[s("span",[t._v("\n              "+t._s(t.detail.subDealName)+"\n            ")]),t._v(" "),t.detail.subMobile?s("span",[t._v("\n              （"+t._s(t.detail.subMobile)+"）\n            ")]):t._e()])]),t._v(" "),s("div",{staticClass:"list-item"},[s("span",{staticClass:"list-title"},[t._v("承兑商（广告主）: ")]),t._v(" "),s("span",{staticClass:"list-value"},[s("span",[t._v("\n              "+t._s(t.detail.memberName)+"\n            ")]),t._v(" "),t.detail.memberMobile?s("span",[t._v("\n              （"+t._s(t.detail.memberMobile)+"）\n            ")]):t._e()])]),t._v(" "),s("div",{staticClass:"list-item"},[s("span",{staticClass:"list-title"},[t._v("承兑商（交易对象）:  ")]),t._v(" "),s("span",{staticClass:"list-value"},[s("span",[t._v("\n              "+t._s(t.detail.customerName)+"\n            ")]),t._v(" "),t.detail.customerMobile?s("span",[t._v("\n              （"+t._s(t.detail.customerMobile)+"）\n            ")]):t._e()])]),t._v(" "),s("div",{staticClass:"list-item"},[s("span",{staticClass:"list-title"},[t._v("申诉时间: ")]),t._v(" "),s("span",{staticClass:"list-value"},[t._v(t._s(t.detail.appealTime))])])])])],1)},i=[];a._withStripped=!0;var n={render:a,staticRenderFns:i};e.default=n}});