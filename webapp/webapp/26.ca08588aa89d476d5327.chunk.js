webpackJsonp([26],{319:function(e,t,s){"use strict";function r(e){c||s(697)}Object.defineProperty(t,"__esModule",{value:!0});var a=s(575),n=s.n(a);for(var i in a)"default"!==i&&function(e){s.d(t,e,function(){return a[e]})}(i);var u=s(699),o=s.n(u),c=!1,l=s(0),d=r,f=l(n.a,o.a,!1,d,"data-v-5acd6f00",null);f.options.__file="src/views/otc/BusinessAudit.vue",t.default=f.exports},575:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=(s(11),s(25));t.default={data:function(){var e=this;return{sortObj:{},checkStatus:[],filterSearch:{account:"",status:""},routeStatus:null,currentPageIdx:1,status:null,userID:null,ifPass:!1,searchInner:null,totalNum:null,ifLoading:!0,usemmuber:"",loading:!0,columns_first:[{title:"会员昵称",key:"username",render:function(e,t){return e("span",{},t.row.member.username)}},{title:"邮箱",key:"email",render:function(e,t){return e("span",{},t.row.member.email)}},{title:"真实姓名",key:"realName",render:function(e,t){return e("span",{},t.row.member.realName)}},{title:"手机号",key:"mobilePhone",render:function(e,t){return e("span",{},t.row.member.mobilePhone)}},{title:"会员等级",key:"memberLevel",width:160,render:function(e,t){var s=t.row.memberLevel,r=null;return s?1===s?r="实名":2===s&&(r="认证"):r="普通会员",e("span",{},r)}},{title:"审核时间",key:"member.certifiedBusinessCheckTime",width:105,sortable:"custom",render:function(e,t){var s=t.row.member.certifiedBusinessCheckTime;return e("span",{},s||"-")}},{title:"申请时间",key:"member.certifiedBusinessApplyTime",width:105,sortable:"custom",render:function(e,t){var s=t.row.member.certifiedBusinessApplyTime;return e("span",{},s||"-")}},{title:"广告状态",key:"publishAdvertise",render:function(e,t){return e("span",{},t.row.member.publishAdvertise?"允许发布":"禁止发布")}},{title:"审核状态",render:function(e,t){var s=t.row.certifiedBusinessStatus,r=null;return 1===s?r="审核中":2===s?r="已认证":0===s?r="未认证":3===s?r="未通过":5===s&&(r="申请退保中"),e("span",{},r)}},{title:"操作",key:"action",width:180,align:"center",render:function(t,s){var a=s.row.member.publishAdvertise,n=a?"error":"info",i=a?"禁止发布":"允许发布",u=s.row.certifiedBusinessStatus,o=null,c="text",l=!0;return 1!==u?5===u?t("span",{},"-"):t("div",{},[t("Button",{props:{type:"success",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.$router.push({path:"/otc/businessaudit/businessdetail",query:{id:s.row.id}})}}},"查看"),t("Button",{props:{type:n,size:"small"},on:{click:function(){var t=s.row.member.publishAdvertise?0:1;(0,r.publishAdvOtc)({memberId:s.row.member.id,status:t}).then(function(t){t.code?e.$Message.error(t.message):(e.$Message.success(t.message),e.refreshPage({pageNo:e.currentPageIdx,pageSize:10}))}).catch(function(e){})}}},i)]):(o="待审核",c="info",l=!1,t("div",{},[t("Button",{props:{type:c,size:"small",disabled:l},style:{color:"unset",marginRight:"5px"},on:{click:function(){1===u&&(e.$store.commit("switchBusinessMask",!0),(0,r.businessDetail)(s.row.member.id,{status:s.row.member.certifiedBusinessStatus}).then(function(t){t.code?e.$Message.error(t.message):e.$store.commit("businessCheckInfo",t.data)}),e.userID=null,e.status=null,e.userID=s.row.member.id,e.status=2)}}},o),t("Button",{props:{type:n,size:"small"},on:{click:function(){var t=s.row.member.publishAdvertise?0:1;(0,r.publishAdvOtc)({memberId:s.row.member.id,status:t}).then(function(t){t.code?e.$Message.error(t.message):(e.$Message.success(t.message),e.refreshPage({pageNo:e.currentPageIdx,pageSize:10}))}).catch(function(e){})}}},i)]))}}],userpage:[]}},methods:{definedOrder:function(e){this.currentPageIdx=1;var t=Object.assign(this.filterSearch,{pageNo:1,pageSize:10}),s="";s="desc"===e.order?1:0,this.sortObj={direction:[s],property:[e.key]};var r=Object.assign(t,this.sortObj);this.refreshPage(r)},searchByFilter:function(){var e=Object.assign(this.filterSearch,{pageNo:1,pageSize:10},this.sortObj);this.refreshPage(e)},confirmPass:function(){var e=this;(0,r.businessAudit)(this.userID,{status:this.status}).then(function(t){t.code?e.$Message.error(t.message):e.$Message.success(t.message),e.refreshPage({pageNo:e.currentPageIdx,pageSize:10})})},refreshPageManual:function(){this.currentPageIdx=1;for(var e in this.filterSearch)this.filterSearch[e]="";this.refreshPage({pageNo:1,pageSize:10})},changePage:function(e){this.currentPageIdx=e;var t=Object.assign(this.filterSearch,{pageNo:e,pageSize:10});this.refreshPage(t)},refreshPage:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.ifLoading=!0,(0,r.queryBusiness)(t).then(function(t){if(!t.code){e.ifLoading=!1;e.userpage=t.data.content,e.totalNum=t.data.totalElements}})},judgeRouteStatus:function(e){void 0===e.status?this.routeStatus=null:this.routeStatus=e.status,this.refreshPage({status:this.routeStatus})}},created:function(){var e=this;(0,r.queryBusinessStatus)().then(function(t){t.code?e.$Message.error(t.message):(e.checkStatus=t.data,e.checkStatus.push({value:"",name:"全部"}))}),this.judgeRouteStatus(this.$route.query)},computed:{date:function(){return this.$store.state.user.date}},watch:{$route:function(e,t){this.judgeRouteStatus(e.query)},date:function(e,t){this.searchByFilter()}}}},697:function(e,t,s){var r=s(698);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);s(7)("3f54c3a9",r,!1,{})},698:function(e,t,s){t=e.exports=s(6)(!1),t.push([e.i,"",""])},699:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("Card",[s("p",{attrs:{slot:"title"},slot:"title"},[e._v("\n        认证商家\n        "),s("Button",{attrs:{type:"primary",size:"small"},on:{click:e.refreshPageManual}},[s("Icon",{attrs:{type:"refresh"}}),e._v("\n          刷新\n        ")],1)],1),e._v(" "),s("Row",{staticClass:"functionWrapper"},[s("div",{staticClass:"searchWrapper clearfix"},[s("div",{staticClass:"poptip"},[s("Poptip",{attrs:{trigger:"hover",content:"请输入手机号、真实姓名或会员名称搜索",placement:"bottom-start"}},[s("Input",{attrs:{placeholder:"请输入手机号、真实姓名或会员名称搜索"},model:{value:e.filterSearch.account,callback:function(t){e.$set(e.filterSearch,"account",t)},expression:"filterSearch.account"}})],1)],1),e._v(" "),s("div",{staticClass:"poptip"},[s("span",[e._v("会员状态：")]),e._v(" "),s("Select",{model:{value:e.filterSearch.status,callback:function(t){e.$set(e.filterSearch,"status",t)},expression:"filterSearch.status"}},e._l(e.checkStatus,function(t){return s("Option",{key:t.value,attrs:{value:t.value}},[e._v(e._s(t.name)+"\n\t\t\t\t\t\t\t")])}))],1),e._v(" "),s("div",{staticClass:"btns"},[s("Button",{attrs:{type:"info",size:"small"},on:{click:e.searchByFilter}},[e._v("搜索")])],1)])]),e._v(" "),s("Row",[s("Table",{staticClass:"user_center",attrs:{columns:e.columns_first,data:e.userpage,border:"",loading:e.ifLoading},on:{"on-sort-change":e.definedOrder}})],1),e._v(" "),s("Row",{staticClass:"pageWrapper"},[s("Page",{attrs:{total:e.totalNum,current:e.currentPageIdx,"show-elevator":""},on:{"on-change":e.changePage}})],1),e._v(" "),s("Modal",{attrs:{title:"商家审核是否通过"},on:{"on-ok":e.confirmPass,"on-cancel":function(t){e.$Message.success("已取消")}},model:{value:e.ifPass,callback:function(t){e.ifPass=t},expression:"ifPass"}},[s("p",[e._v("是否审核通过所选择的项")])])],1)],1)},a=[];r._withStripped=!0;var n={render:r,staticRenderFns:a};t.default=n}});