webpackJsonp([6],{308:function(e,t,a){"use strict";function n(e){c||(a(662),a(664))}Object.defineProperty(t,"__esModule",{value:!0});var s=a(564),i=a.n(s);for(var r in s)"default"!==r&&function(e){a.d(t,e,function(){return s[e]})}(r);var l=a(666),o=a.n(l),c=!1,u=a(0),d=n,p=u(i.a,o.a,!1,d,"data-v-0f54be14",null);p.options.__file="src/views/content/helpManage.vue",t.default=p.exports},435:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.filterSearch=function(e){return!(!e||!String(e).length)&&!(isNaN(1*e)||1*e<0||void 0!==e.toString().split(".")[1])}},564:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(27),s=function(e){return e&&e.__esModule?e:{default:e}}(n),i=a(25),r=a(435),l=a(11);t.default={data:function(){var e=this;return{currentPageIdx:1,delArr:[],ifDelete:!1,ifLoading:!0,id:null,ifUpdateBtn:!1,selectedArr:[],helpManageArr:[],current:1,totalNum:null,manageModal:!1,manageTitle:null,manageClass:null,manageClassArr:[{status:0,klassName:"新手指南"},{status:1,klassName:"常见问题"},{status:2,klassName:"充值指南"},{status:3,klassName:"交易指南"}],imgUrl:null,createTime:null,ifSHow:null,ifShowArr:[{status:0,klassName:"显示"},{status:1,klassName:"不显示"}],columns_first:[{type:"selection",width:60},{title:"编号",key:"id",width:80},{title:"标题",key:"title"},{title:"分类",render:function(e,t){var a=null,n=1*t.row.sysHelpClassification;return 0===n?a="新手指南":1===n?a="常见问题":2===n?a="充值指南":3===n&&(a="交易指南"),e("span",{},a)}},{title:"发布时间",key:"createTime"},{title:"是否显示",key:"status",width:100,render:function(e,t){var a=null;return a=0===t.row.status?"是":"否",e("span",{},a)}},{title:"是否置顶",width:100,render:function(e,t){var a=null;return a="0"===t.row.isTop?"是":"否",e("span",{},a)}},{title:"操作",render:function(t,a){return t("div",[t("Button",{props:{type:"info",size:"small"},style:{marginRight:"5px"},on:{click:function(){(0,l.removeStore)("manageID"),(0,l.setStore)("manageID",a.row.id),e.$router.push("/content/helpManage/addhelpmanage")}}},"查看 / 编辑"),t("Button",{props:{type:"error",size:"small"},on:{click:function(){(0,i.stickTopHelp)({id:a.row.id}).then(function(t){t.code?e.$Message.error(t.message):(e.$Message.success(t.message),e.refreshPage())}).catch(function(e){})}}},"置顶"),t("Button",{props:{type:"error",size:"small"},style:{marginLeft:"6px"},on:{click:function(){(0,i.helpDown)({id:a.row.id}).then(function(t){t.code?e.$Message.error(t.message):(e.$Message.success(t.message),e.refreshPage())}).catch(function(e){})}}},"取消置顶")])}}]}},methods:{refreshPageManual:function(){this.ifLoading=!0,this.refreshPage({pageNo:this.currentPageIdx,pageSize:10})},confirmDel:function(){var e=this,t=[];this.selectedArr.forEach(function(e){t.push(e.id)});s.default.stringify({ids:t},{arrayFormat:"repeat"});(0,i.delHelpManage)({ids:t}).then(function(t){e.ifDelete=!1,t.code?e.$Message.error("删除失败!"):(e.refreshPage({pageNo:1,pageSize:10}),e.$Message.success("删除成功!"))})},cancelDel:function(){this.$Message.success("已取消!")},updateManage:function(){var e=this,t={id:this.id,title:this.manageTitle,sysHelpClassification:this.manageClass,imgUrl:this.imgUrl,status:this.ifSHow,createTime:(0,r.formatDate)(this.createTime)};(0,i.updateHelpManage)(t).then(function(t){t.code?e.$Message.error("出现异常!"):(e.manageModal=!1,e.$Message.success("更新成功!"),e.refreshPage())})},delManage:function(){this.selectedArr.length?this.ifDelete=!0:this.$Message.warning("请选择要删除的内容！")},cancelAdd:function(){this.manageModal=!1},showModel:function(){this.manageModal=!0},addManage:function(){(0,l.removeStore)("manageID"),this.$router.push("/content/helpManage/addhelpmanage")},select:function(e){this.selectedArr=e},changePage:function(e){this.ifLoading=!0,this.currentPageIdx=e,this.refreshPage({pageNo:e,pageSize:10})},refreshPage:function(e){var t=this;(0,l.removeStore)("manageID"),(0,i.helpManage)(e).then(function(e){t.ifLoading=!1,t.helpManageArr=e.data.content,t.totalNum=e.data.totalElements})}},created:function(){this.refreshPage({pageNo:1,pageSize:10})}}},662:function(e,t,a){var n=a(663);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(7)("6941fcf2",n,!1,{})},663:function(e,t,a){t=e.exports=a(6)(!1),t.push([e.i,"\n.manageRow[data-v-0f54be14] {\n  height: 45px;\n}\n.pageWrapper[data-v-0f54be14] {\n  text-align: right;\n  margin: 25px;\n}\n.manageWrapper[data-v-0f54be14] {\n  text-align: right;\n}\n.manageWrapper Button[data-v-0f54be14] {\n  margin-right: 10px;\n}\n.manageModal p[data-v-0f54be14],\n.manageModal div[data-v-0f54be14] {\n  margin-bottom: 10px;\n}\n.manageModal p span[data-v-0f54be14],\n.manageModal div span[data-v-0f54be14] {\n  display: inline-block;\n  font-size: 15px;\n  text-align: right;\n}\n.manageModal p span i[data-v-0f54be14],\n.manageModal div span i[data-v-0f54be14] {\n  color: red;\n  font-weight: 700;\n  font-style: normal;\n}\n.manageModal .ivu-input-wrapper.ivu-input-type[data-v-0f54be14] {\n  width: 70%;\n}\n",""])},664:function(e,t,a){var n=a(665);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(7)("091e763c",n,!1,{})},665:function(e,t,a){t=e.exports=a(6)(!1),t.push([e.i,"\n.test .ivu-table-wrapper .ivu-table.ivu-table-border .ivu-table-body .ivu-table-tbody .ivu-table-row .ivu-table-cell {\n  padding: 0;\n}\n",""])},666:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[e._v("\n      帮助管理\n      "),a("Button",{attrs:{type:"primary",size:"small"},on:{click:e.refreshPageManual}},[a("Icon",{attrs:{type:"refresh"}}),e._v("\n        刷新\n      ")],1)],1),e._v(" "),a("Row",{staticClass:"manageRow clearfix"},[a("div",{staticClass:"manageWrapper"},[a("Button",{attrs:{type:"error"},on:{click:e.delManage}},[e._v("删除")]),e._v(" "),a("Button",{attrs:{type:"info"},on:{click:e.addManage}},[e._v("添加")])],1)]),e._v(" "),a("Modal",{staticClass:"manageModal",attrs:{title:"添加管理",width:"430"},model:{value:e.manageModal,callback:function(t){e.manageModal=t},expression:"manageModal"}},[a("p",{staticStyle:{color:"#5cadff","text-align":"center"},attrs:{slot:"header"},slot:"header"},[a("Icon",{attrs:{type:"information-circled"}}),e._v(" "),a("span",{staticStyle:{"padding-left":"5px"}},[e._v("添加管理")])],1),e._v(" "),a("p",[a("span",[e._v("标题"),a("i",[e._v("*")]),e._v("：")]),e._v(" "),a("Input",{model:{value:e.manageTitle,callback:function(t){e.manageTitle=t},expression:"manageTitle"}})],1),e._v(" "),a("div",[a("span",[e._v("分类"),a("i",[e._v("*")]),e._v("：")]),e._v(" "),a("Select",{staticStyle:{width:"200px"},model:{value:e.manageClass,callback:function(t){e.manageClass=t},expression:"manageClass"}},e._l(e.manageClassArr,function(t){return a("Option",{key:t.status,model:{value:t.status,callback:function(a){e.$set(t,"status",a)},expression:"item.status"}},[e._v("\n            "+e._s(t.klassName)+"\n          ")])}))],1),e._v(" "),a("p",[a("span",[e._v("图片地址"),a("i",[e._v("*")]),e._v("：")]),e._v(" "),a("Input",{model:{value:e.imgUrl,callback:function(t){e.imgUrl=t},expression:"imgUrl"}})],1),e._v(" "),a("div",[a("span",[e._v("发布时间"),a("i",[e._v("*")]),e._v("：")]),e._v(" "),a("DatePicker",{staticStyle:{width:"200px"},attrs:{type:"date",format:"yyyy-MM-dd HH:mm:ss",placeholder:"请选择时间"},model:{value:e.createTime,callback:function(t){e.createTime=t},expression:"createTime"}})],1),e._v(" "),a("div",[a("span",[e._v("是否显示"),a("i",[e._v("*")]),e._v("：")]),e._v(" "),a("Select",{staticStyle:{width:"200px"},model:{value:e.ifSHow,callback:function(t){e.ifSHow=t},expression:"ifSHow"}},e._l(e.ifShowArr,function(t){return a("Option",{key:t.status,model:{value:t.status,callback:function(a){e.$set(t,"status",a)},expression:"item.status"}},[e._v("\n            "+e._s(t.klassName)+"\n          ")])}))],1),e._v(" "),a("div",{staticStyle:{color:"#5cadff","text-align":"right"},attrs:{slot:"footer"},slot:"footer"},[e.ifUpdateBtn?e._e():a("div",[a("Button",{attrs:{type:"text"},on:{click:e.cancelAdd}},[e._v("取消")]),e._v(" "),a("Button",{attrs:{type:"info"},on:{click:e.addManage}},[e._v("确认")])],1),e._v(" "),e.ifUpdateBtn?a("div",[a("Button",{attrs:{type:"text"},on:{click:e.cancelAdd}},[e._v("取消")]),e._v(" "),a("Button",{attrs:{type:"info"},on:{click:e.updateManage}},[e._v("更新")])],1):e._e()])]),e._v(" "),a("Row",{staticClass:"test"},[a("Table",{attrs:{border:"",columns:e.columns_first,data:e.helpManageArr,loading:e.ifLoading},on:{"on-selection-change":e.select}})],1),e._v(" "),a("Row",{staticClass:"pageWrapper"},[a("Page",{staticClass:"buttomPage",attrs:{total:e.totalNum,current:e.current,"show-elevator":""},on:{"on-change":e.changePage}})],1),e._v(" "),a("Modal",{attrs:{title:"删除"},on:{"on-ok":e.confirmDel,"on-cancel":e.cancelDel},model:{value:e.ifDelete,callback:function(t){e.ifDelete=t},expression:"ifDelete"}},[a("p",[e._v("是否删除已选择的"+e._s(e.selectedArr.length)+"项")])])],1)],1)},s=[];n._withStripped=!0;var i={render:n,staticRenderFns:s};t.default=i}});