webpackJsonp([23],{213:function(e,t,a){"use strict";function n(e){d||a(552)}Object.defineProperty(t,"__esModule",{value:!0});var s=a(468),i=a.n(s);for(var l in s)"default"!==l&&function(e){a.d(t,e,function(){return s[e]})}(l);var o=a(554),r=a.n(o),d=!1,p=a(0),c=n,u=p(i.a,r.a,!1,c,"data-v-4a6981fd",null);u.options.__file="src/views/otc/ExitBondDetail.vue",t.default=u.exports},468:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(23);t.default={data:function(){return{exitBondDetail:{}}},methods:{refreshPageManual:function(){var e=this;(0,n.cancelApplyDetail)({id:this.$route.query.id}).then(function(t){t.code?e.$Message.error(t.message):e.exitBondDetail=t.data}).catch(function(e){})}},created:function(){this.refreshPageManual()},filters:{filterStatus:function(e){return""===e?e:6===e?"失败":5===e?"待审核":7===e?"成功":void 0},reasonFilter:function(e){return e||"无"}}}},552:function(e,t,a){var n=a(553);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(7)("28b1f24e",n,!1,{})},553:function(e,t,a){t=e.exports=a(6)(!1),t.push([e.i,"\n.line[data-v-4a6981fd] {\n  border-top: 1px solid #dfdfdf;\n}\n.detail .card[data-v-4a6981fd] {\n  padding: 20px;\n}\n.detail .card .ivu-card-body > .ivu-row[data-v-4a6981fd] {\n  margin: 20px 0;\n}\n.detail .card .ivu-card-body > .ivu-row .ivu-row[data-v-4a6981fd] {\n  font-size: 16px;\n  line-height: 50px;\n}\n",""])},554:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"detail"},[a("Row",[a("Card",{staticClass:"card"},[a("p",{attrs:{slot:"title"},slot:"title"},[a("Button",{attrs:{type:"primary",size:"small"},on:{click:e.refreshPageManual}},[a("Icon",{attrs:{type:"refresh"},on:{click:e.refreshPageManual}}),e._v("\n\t\t\t\t\t刷新\n\t\t\t\t")],1)],1),e._v(" "),a("Row",[a("h3",[e._v("退保申请")]),e._v(" "),a("Row",[a("Col",{attrs:{span:"6"}},[e._v("退保金额："+e._s(e.exitBondDetail.depositRecord?e.exitBondDetail.depositRecord.amount+e.exitBondDetail.depositRecord.coin.unit:""))]),e._v(" "),a("Col",{attrs:{span:"6"}},[e._v("状态："+e._s(e._f("filterStatus")(e.exitBondDetail.businessCancelApply?e.exitBondDetail.businessCancelApply.status:"")))]),e._v(" "),a("Col",{attrs:{span:"6"}},[e._v("申请时间："+e._s(e.exitBondDetail.businessCancelApply?e.exitBondDetail.businessCancelApply.cancelApplyTime:""))]),e._v(" "),a("Col",{attrs:{span:"6"}},[e._v("审核时间："+e._s(e.exitBondDetail.businessCancelApply?e.exitBondDetail.businessCancelApply.handleTime:""))])],1),e._v(" "),a("Row",[a("Col",{attrs:{span:"6"}},[e._v("退保原因："+e._s(e._f("reasonFilter")(e.exitBondDetail.businessCancelApply?e.exitBondDetail.businessCancelApply.reason:"")))])],1)],1),e._v(" "),a("p",{staticClass:"line"}),e._v(" "),a("Row",[a("h3",[e._v("用户信息")]),e._v(" "),a("Row",[a("Col",{attrs:{span:"6"}},[e._v("真实姓名："+e._s(e.exitBondDetail.businessCancelApply?e.exitBondDetail.businessCancelApply.member.realName:""))]),e._v(" "),a("Col",{attrs:{span:"6"}},[e._v("会员昵称："+e._s(e.exitBondDetail.businessCancelApply?e.exitBondDetail.businessCancelApply.member.username:""))]),e._v(" "),a("Col",{attrs:{span:"6"}},[e._v("手机号："+e._s(e.exitBondDetail.businessCancelApply?e.exitBondDetail.businessCancelApply.member.mobilePhone:""))]),e._v(" "),a("Col",{attrs:{span:"6"}},[e._v("邮箱号："+e._s(e.exitBondDetail.businessCancelApply?e.exitBondDetail.businessCancelApply.member.email:""))])],1)],1),e._v(" "),a("p",{staticClass:"line"}),e._v(" "),a("Row",[a("h3",[e._v("交易信息")]),e._v(" "),a("Row",[a("Col",{attrs:{span:"6"}},[e._v("申诉次数："+e._s(e.exitBondDetail.complainantNum))]),e._v(" "),a("Col",{attrs:{span:"6"}},[e._v("被申诉次数数："+e._s(e.exitBondDetail.defendantNum))]),e._v(" "),a("Col",{attrs:{span:"6"}},[e._v("总成交额："+e._s(e.exitBondDetail.money?e.exitBondDetail.money:0))]),e._v(" "),a("Col",{attrs:{span:"6"}},[e._v("总手续费："+e._s(e.exitBondDetail.fee?e.exitBondDetail.fee:0))])],1),e._v(" "),a("Row",[a("Col",{attrs:{span:"6"}},[e._v("发布广告数："+e._s(e.exitBondDetail.advertiseNum))])],1)],1)],1)],1)],1)},s=[];n._withStripped=!0;var i={render:n,staticRenderFns:s};t.default=i}});