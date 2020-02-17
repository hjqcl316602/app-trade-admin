webpackJsonp([31],{309:function(e,t,r){"use strict";function a(e){u||r(667)}Object.defineProperty(t,"__esModule",{value:!0});var n=r(564),s=r.n(n);for(var i in n)"default"!==i&&function(e){r.d(t,e,function(){return n[e]})}(i);var o=r(669),c=r.n(o),u=!1,l=r(0),d=a,p=l(s.a,c.a,!1,d,"data-v-777ed5ea",null);p.options.__file="src/views/member/MemberManage.vue",t.default=p.exports},564:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(11),n=r(25);t.default={data:function(){var e=this;return{currentPageIdx:1,filterSearch:{account:"",commonStatus:""},memberStatusArr:[{status:0,text:"正常"},{status:1,text:"非法"},{status:"",text:"全部"}],totalNum:null,ifLoading:!0,usemmuber:"",pageIndex:1,loading:!0,columns_first:[{type:"selection",width:60},{title:"会员ID",key:"id",width:80},{title:"会员名称",key:"username"},{title:"会员邮箱",key:"email"},{title:"手机号码",key:"mobilePhone",render:function(t,r){var a=r.row;return t("span",{},e.formatPhone(a.mobilePhone))}},{title:"会员等级",key:"memberLevel",width:160,render:function(e,t){var r=t.row.memberLevel,a=null;return r?1===r?a="实名":2===r&&(a="认证"):a="普通会员",e("span",{},a)}},{title:"真实姓名",key:"realName"},{title:"注册时间",width:100,key:"registrationTime"},{title:"交易状态",key:"transactionStatus",render:function(e,t){return e("span",{},t.row.transactionStatus?"正常":"禁用")}},{title:"状态",key:"status",render:function(e,t){var r=t.row.status,a=null;return a=0===r?"正常":"非法",e("span",{},a)}},{title:"操作",key:"action",width:250,align:"center",render:function(t,r){var s=r.row.status?0:1,i=r.row.status?"解禁":"禁用",o=r.row.transactionStatus?0:1,c=r.row.transactionStatus?"禁止交易":"允许交易",u=r.row.id,l=r.row.autoOrder,d=[];d.push(t("Button",{props:{type:"info",size:"small"},style:{"margin-right":"8px"},on:{click:function(){(0,a.removeStore)("memberID"),(0,a.setStore)("memberID",r.row.id),e.$router.push("/member/memberdetail")}}},"查看"));var p=0===l?"开启自动抢单":"关闭自动抢单";return d.push(t("Dropdown",{props:{transfer:!0},on:{"on-click":function(t){"forbidden"===t?(0,n.forbiddenMember)({memberId:r.row.id,status:s}).then(function(t){t.code?e.$Message.error(t.message):e.$Message.success(t.message),e.refreshPage({pageNo:e.currentPageIdx,pageSize:10,property:"registrationTime",direction:1})}).catch(function(e){}):"forbiddenTrans"===t?(0,n.forbiddenMemberTrans)({memberId:r.row.id,status:o}).then(function(t){t.code?e.$Message.error(t.message):e.$Message.success(t.message),e.refreshPage({pageNo:e.currentPageIdx,pageSize:10,property:"registrationTime",direction:1})}):"autoOrder"===t&&(0,n.changeAutoOrder)({id:u,autoOrder:Math.abs(l-1)}).then(function(t){var r=t.code,a=(t.data,t.message);0===r?(e.$Message.success(a),e.refreshPage({pageNo:e.currentPageIdx,pageSize:10,property:"registrationTime",direction:1})):e.$Message.danger(a)})}}},[t("DropdownMenu",{slot:"list"},[t("DropdownItem",{props:{name:"forbidden"}},i),t("DropdownItem",{props:{name:"forbiddenTrans"}},c),t("DropdownItem",{props:{name:"autoOrder"}},p)]),t("Button",{props:{type:"text",size:"small"},style:{color:"#2d8cf0",marginRight:"5px"}},"更多")])),t("div",{},d)}}],userpage:[]}},methods:{refreshPageManual:function(){for(var e in this.filterSearch)this.filterSearch[e]="";this.currentPageIdx=1,this.refreshPage({pageNo:1,pageSize:10,property:"registrationTime",direction:1})},exportExcel:function(){this.$refs.tabel.exportCsv({filename:"hello"})},searchByFilter:function(){var e=this;this.$store.commit("switchLoading",!0),(0,n.memberManage)(this.filterSearch).then(function(t){t.code||(e.ifLoading=!1,e.userpage=t.data.content,e.totalNum=t.data.totalElements,e.$store.commit("switchLoading",!1))}).catch(function(e){})},changePage:function(e){this.currentPageIdx=e,this.ifLoading=!0;var t=Object.assign({pageNo:e,pageSize:10,property:"registrationTime",direction:1},this.filterSearch);this.refreshPage(t)},refreshPage:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.ifLoading=!0,(0,n.memberManage)(t).then(function(t){t.code||(e.ifLoading=!1,e.userpage=t.data.content,e.totalNum=t.data.totalElements)})}},created:function(){this.refreshPage({property:"registrationTime",direction:1})}}},667:function(e,t,r){var a=r(668);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(7)("eb42d97e",a,!1,{})},668:function(e,t,r){t=e.exports=r(6)(!1),t.push([e.i,"\n.search-mask[data-v-777ed5ea] {\n  position: absolute;\n  z-index: 8888;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.2);\n}\n",""])},669:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Card",[r("p",{attrs:{slot:"title"},slot:"title"},[e._v("\n      会员管理\n      "),r("Button",{attrs:{type:"primary",size:"small"},on:{click:e.refreshPageManual}},[r("Icon",{attrs:{type:"refresh"}}),e._v("刷新\n      ")],1)],1),e._v(" "),r("Row",{staticClass:"functionWrapper"},[r("div",{staticClass:"searchWrapper clearfix"},[r("div",{staticClass:"poptip"},[r("Poptip",{attrs:{trigger:"hover",content:"请输入用户名、邮箱、手机号、姓名搜索",placement:"bottom-start"}},[r("Input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入用户名、邮箱、手机号、姓名搜索"},model:{value:e.filterSearch.account,callback:function(t){e.$set(e.filterSearch,"account",t)},expression:"filterSearch.account"}})],1)],1),e._v(" "),r("div",{staticClass:"poptip"},[r("span",[e._v("会员状态：")]),e._v(" "),r("Select",{model:{value:e.filterSearch.commonStatus,callback:function(t){e.$set(e.filterSearch,"commonStatus",t)},expression:"filterSearch.commonStatus"}},e._l(e.memberStatusArr,function(t){return r("Option",{key:t.status,attrs:{value:t.status}},[e._v(e._s(t.text))])}))],1),e._v(" "),r("div",{staticClass:"btns"},[r("Button",{attrs:{type:"info",size:"small"},on:{click:e.searchByFilter}},[e._v("搜索")])],1)]),e._v(" "),r("div",{staticClass:"btnsWrapper clearfix"},[r("Button",{attrs:{type:"success"},on:{click:e.exportExcel}},[e._v("导出")])],1)]),e._v(" "),r("Row",{staticClass:"margin-top-10 searchable-table-con1"},[r("Table",{ref:"tabel",staticClass:"user_center",attrs:{columns:e.columns_first,data:e.userpage,border:"",loading:e.ifLoading}})],1),e._v(" "),r("Row",{staticClass:"pageWrapper"},[r("Page",{staticStyle:{"margin-top":"8px"},attrs:{total:e.totalNum,current:e.currentPageIdx,"show-elevator":""},on:{"on-change":e.changePage}})],1)],1)],1)},n=[];a._withStripped=!0;var s={render:a,staticRenderFns:n};t.default=s}});