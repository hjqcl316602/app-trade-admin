webpackJsonp([14],{319:function(e,t,i){"use strict";function n(e){d||i(697)}Object.defineProperty(t,"__esModule",{value:!0});var a=i(574),s=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(t,e,function(){return a[e]})}(r);var o=i(699),l=i.n(o),d=!1,c=i(0),u=n,p=c(s.a,l.a,!1,u,"data-v-283e97a5",null);p.options.__file="src/views/system/Permission.vue",t.default=p.exports},574:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(25);t.default={data:function(){var e=this;return{columns_first:[{type:"selection",width:60},{title:"序号",key:"id",width:80},{title:"父级ID",key:"parentId"},{title:"权限标题",key:"title"},{title:"权限名称",key:"name"},{title:"权限描述",key:"description"},{title:"操作",key:"action",width:150,align:"center",render:function(t,i){return t("Button",{props:{type:"info",size:"small"},on:{click:function(){e.ifAudit=!0,e.ifAdd=!1,e.id=i.row.id,e.name=i.row.name,e.parentID=i.row.parentId,e.title=i.row.title,e.descript=i.row.description,e.addPermissionBtn()}}},"修改")}}],userpage:[],title:null,name:null,descript:null,parentID:null,ifAudit:!1,totalNum:null,current:1,ifLoading:!0,selectArr:[],ifDelete:!1,deleteArr:[],ifAdd:!0,currentPageIdx:1}},methods:{delPermission:function(){this.deleteArr.length?this.ifDelete=!0:this.$Message.warning("尚未选取！")},selected:function(e){var t=this;this.deleteArr=[],e.forEach(function(e){t.deleteArr.push(e.id)})},confirmDel:function(){var e=this;(0,n.delPermission)({ids:this.deleteArr}).then(function(t){t.code?e.$Message.error("删除失败！"):(e.refreshPage({pageNo:1,pageSize:10}),e.$Message.success("删除成功！"))})},cancelDel:function(){},confirmAudit:function(){var e=this;if(this.title&&this.name&&this.parentID){var t={name:this.name,parentId:this.parentID,title:this.title,description:this.descript};this.ifAdd||(t.id=this.id),(0,n.addAuditPermission)(t).then(function(t){t.code?e.$Message.error(t.message):(e.$Message.success("操作成功！"),e.refreshPage({pageNo:1,pageSize:10}),e.name=e.parentID=e.title=e.descript=null)})}else this.$Message.warning("请完善信息！")},addPermission:function(){this.ifAdd=!0,this.addPermissionBtn()},addPermissionBtn:function(){var e=this;this.ifAdd&&(this.name=this.parentID=this.title=this.descript=null),this.ifAudit=!0,(0,n.permissionManage)({parentId:0}).then(function(t){e.selectArr=t.data.content})},refreshPageManual:function(){this.refreshPage({pageNo:this.currentPageIdx,pageSize:10})},changePage:function(e){this.currentPageIdx=e,this.refreshPage({pageNo:e,pageSize:10})},refreshPage:function(e){var t=this;this.ifLoading=!0,(0,n.permissionManage)(e).then(function(e){e.code?t.$Message.error("获取数据出错！"):(t.totalNum=e.data.totalElements,t.userpage=e.data.content),t.ifLoading=!1})}},created:function(){this.refreshPage({pageNo:1,pageSize:10})}}},697:function(e,t,i){var n=i(698);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(7)("58989406",n,!1,{})},698:function(e,t,i){t=e.exports=i(6)(!1),t.push([e.i,"\n.auditPermissionModal ul li[data-v-283e97a5] {\n  position: relative;\n  margin-bottom: 10px;\n}\n.auditPermissionModal ul li span[data-v-283e97a5] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 14px;\n  line-height: 32px;\n}\n.auditPermissionModal ul li span i[data-v-283e97a5] {\n  margin-right: 5px;\n  font-size: 14px;\n  font-weight: 700;\n  color: red;\n}\n.auditPermissionModal ul li p[data-v-283e97a5] {\n  padding-left: 80px;\n  width: 400px;\n}\n",""])},699:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("Card",[i("p",{attrs:{slot:"title"},slot:"title"},[e._v("\n        权限列表\n          "),i("Button",{attrs:{type:"primary",size:"small"},on:{click:e.refreshPageManual}},[i("Icon",{attrs:{type:"refresh"}}),e._v("\n            刷新\n          ")],1)],1),e._v(" "),i("Row",{staticClass:"functionWrapper"},[i("div",{staticClass:"btnsWrapper clearfix"},[i("Button",{attrs:{type:"error"}},[e._v("删除权限")]),e._v(" "),i("Button",{attrs:{type:"primary"},on:{click:e.addPermission}},[e._v("添加权限")])],1)]),e._v(" "),i("Row",[i("Table",{staticClass:"user_center",attrs:{columns:e.columns_first,data:e.userpage,border:"",loading:e.ifLoading},on:{"on-selection-change":e.selected}})],1),e._v(" "),i("Row",{staticClass:"pageWrapper"},[i("Page",{attrs:{total:e.totalNum,current:e.current,"show-elevator":""},on:{"on-change":e.changePage}})],1),e._v(" "),i("Modal",{staticClass:"auditPermissionModal",attrs:{title:"编辑权限"},on:{"on-ok":e.confirmAudit},model:{value:e.ifAudit,callback:function(t){e.ifAudit=t},expression:"ifAudit"}},[i("ul",[i("li",[i("span",[i("i",[e._v("*")]),e._v("权限标题：")]),e._v(" "),i("p",[i("Input",{model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1)]),e._v(" "),i("li",[i("span",[i("i",[e._v("*")]),e._v("权限名称：")]),e._v(" "),i("p",[i("Input",{model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1)]),e._v(" "),i("li",[i("span",[i("i",[e._v("*")]),e._v("权限目录：")]),e._v(" "),i("p",[i("Select",{model:{value:e.parentID,callback:function(t){e.parentID=t},expression:"parentID"}},[i("Option",{staticStyle:{color:"#ec0909"},attrs:{value:"0",label:"作为一级目录"}},[e._v("将其作为一级目录")]),e._v(" "),e._l(e.selectArr,function(t){return i("Option",{key:t.id,attrs:{value:t.id}},[e._v(e._s(t.title))])})],2)],1)]),e._v(" "),i("li",[i("span",[e._v("权限描述：")]),e._v(" "),i("p",[i("Input",{attrs:{type:"textarea"},model:{value:e.descript,callback:function(t){e.descript=t},expression:"descript"}})],1)])])]),e._v(" "),i("Modal",{staticClass:"auditPermissionModal",attrs:{title:"删除权限"},on:{"on-ok":e.confirmDel},model:{value:e.ifDelete,callback:function(t){e.ifDelete=t},expression:"ifDelete"}},[i("p",[e._v("是否删除选中的"+e._s(e.deleteArr.length)+"项")])])],1)],1)},a=[];n._withStripped=!0;var s={render:n,staticRenderFns:a};t.default=s}});