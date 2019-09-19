webpackJsonp([20],{207:function(e,r,t){"use strict";function a(e){i||t(536)}Object.defineProperty(r,"__esModule",{value:!0});var o=t(463),s=t.n(o);for(var n in o)"default"!==n&&function(e){t.d(r,e,function(){return o[e]})}(n);var p=t(538),l=t.n(p),i=!1,m=t(0),u=a,c=m(s.a,l.a,!1,u,"data-v-3ab8b144",null);c.options.__file="src/views/system/AddAuditEmployee.vue",r.default=c.exports},463:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=t(11),o=t(23);r.default={data:function(){return{uerpsCheck:!1,employeeID:null,swtichMore:!1,roleArr:[],departArr:[],formWrapperObj:{id:null,username:null,password:null,enable:0,passwdCheck:null,roleId:null,departmentId:null,realName:null,mobilePhone:null,qq:null,email:null,avatar:null},ruleFrom:{username:[{required:!0,message:"用户名不能为空！",trigger:"blur"}],role:[{required:!0,message:"请选择角色！",trigger:"blur"}],depart:[{required:!0,message:"请选择所在部门！",trigger:"blur"}],realName:[{required:!0,message:"请填写正确的格式！",trigger:"blur"}],mobilePhone:[{required:!0,message:"请填写正确的手机号！",trigger:"blur"}],email:[{type:"email",message:"请填写正确的邮箱地址！",trigger:"blur"}]}}},methods:{confrimSub:function(){for(var e=this,r=JSON.parse(JSON.stringify(this.formWrapperObj)),t=["id","qq","email","avatar","enable","passwdCheck"],a=0;a<t.length;a++)delete r[t[a]];for(var s in r){if(!r[s])return void this.$Message.warning("请完善信息！");if(!this.employeeID&&this.formWrapperObj.password!==this.formWrapperObj.passwdCheck)return void this.$Message.warning("两次密码输入不一致！")}(0,o.addAuditEmployee)(this.formWrapperObj).then(function(r){r.code?e.$Message.error(r.message):(e.$router.push("/system/employee"),e.$Message.success(r.message))})}},created:function(){var e=this;(0,o.roleManage)().then(function(r){r.code?e.$Message.error(r.message):e.roleArr=r.data.content}),(0,o.departmentManage)().then(function(r){r.code?e.$Message.error(r.message):e.departArr=r.data.content}),this.employeeID=(0,a.getStore)("employeeID"),this.employeeID&&(0,o.employeeDetail)({id:this.employeeID}).then(function(r){r.code?e.$Message.error(r.message):e.formWrapperObj=r.data})},watch:{formWrapperObj:{handler:function(e,r){this.employeeID||(e.password!==e.passwdCheck?this.uerpsCheck=!0:this.uerpsCheck=!1)},deep:!0}}}},536:function(e,r,t){var a=t(537);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);t(7)("6f67b174",a,!1,{})},537:function(e,r,t){r=e.exports=t(6)(!1),r.push([e.i,"\n.mainEmployeeContent .ivu-form-item[data-v-3ab8b144] {\n  margin: 25px auto;\n  width: 380px;\n}\n.mainEmployeeContent .ivu-form-item-content a[data-v-3ab8b144] {\n  position: absolute;\n  right: -60px;\n  top: 0;\n}\n.mainEmployeeContent .dashLine[data-v-3ab8b144] {\n  text-align: center;\n  border-top: 1px dashed #d2d2d2;\n}\n.mainEmployeeContent .dashLine Button[data-v-3ab8b144] {\n  color: #b3b1b1;\n}\n.mainEmployeeContent .dashLine Button[data-v-3ab8b144]:hover {\n  color: #57a3f3;\n}\n",""])},538:function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("Card",[t("p",{attrs:{slot:"title"},slot:"title"},[e._v("\n          编辑用户\n        ")]),e._v(" "),t("Row",{staticClass:"mainEmployeeContent"},[t("Form",{ref:"formCustom",attrs:{model:e.formWrapperObj,rules:e.ruleFrom,"label-width":90,"label-position":"right"}},[t("FormItem",{attrs:{label:"用户名：",prop:"username"}},[t("Input",{attrs:{type:"text"},model:{value:e.formWrapperObj.username,callback:function(r){e.$set(e.formWrapperObj,"username",r)},expression:"formWrapperObj.username"}})],1),e._v(" "),t("FormItem",{staticClass:"resetRequired",class:{resetFromErr:e.uerpsCheck},attrs:{label:"密码：",prop:"password"}},[t("Input",{attrs:{type:"password"},model:{value:e.formWrapperObj.password,callback:function(r){e.$set(e.formWrapperObj,"password",r)},expression:"formWrapperObj.password"}}),e._v(" "),e.uerpsCheck?t("div",{staticClass:"ivu-form-item-error-tip"},[e._v("两次密码输入不一致！")]):e._e()],1),e._v(" "),e.employeeID?e._e():t("FormItem",{staticClass:"resetRequired",class:{resetFromErr:e.uerpsCheck},attrs:{label:"确认密码：",prop:"passwdCheck"}},[t("Input",{attrs:{type:"password"},model:{value:e.formWrapperObj.passwdCheck,callback:function(r){e.$set(e.formWrapperObj,"passwdCheck",r)},expression:"formWrapperObj.passwdCheck"}}),e._v(" "),e.uerpsCheck?t("div",{staticClass:"ivu-form-item-error-tip"},[e._v("两次密码输入不一致！")]):e._e()],1),e._v(" "),t("FormItem",{attrs:{label:"真实姓名：",prop:"realName"}},[t("Input",{attrs:{type:"text"},model:{value:e.formWrapperObj.realName,callback:function(r){e.$set(e.formWrapperObj,"realName",r)},expression:"formWrapperObj.realName"}})],1),e._v(" "),t("FormItem",{attrs:{label:"联系电话：",prop:"mobilePhone"}},[t("Input",{attrs:{type:"text"},model:{value:e.formWrapperObj.mobilePhone,callback:function(r){e.$set(e.formWrapperObj,"mobilePhone",r)},expression:"formWrapperObj.mobilePhone"}})],1),e._v(" "),t("FormItem",{attrs:{label:"角色：",prop:"role"}},[t("Select",{model:{value:e.formWrapperObj.roleId,callback:function(r){e.$set(e.formWrapperObj,"roleId",r)},expression:"formWrapperObj.roleId"}},e._l(e.roleArr,function(r){return t("Option",{key:r.id,attrs:{value:r.id}},[e._v(e._s(r.role))])})),e._v(" "),t("router-link",{attrs:{to:"/system/rolemanage"}},[e._v("添加角色")])],1),e._v(" "),t("FormItem",{attrs:{label:"部门：",prop:"depart"}},[t("Select",{model:{value:e.formWrapperObj.departmentId,callback:function(r){e.$set(e.formWrapperObj,"departmentId",r)},expression:"formWrapperObj.departmentId"}},e._l(e.departArr,function(r){return t("Option",{key:r.id,attrs:{value:r.id}},[e._v(e._s(r.name))])})),e._v(" "),t("router-link",{attrs:{to:"/system/departmanage"}},[e._v("添加部门")])],1),e._v(" "),t("Row",{staticClass:"dashLine"},[t("Button",{attrs:{type:"text"},on:{click:function(r){e.swtichMore=!e.swtichMore}}},[e.swtichMore?t("span",[e._v("收起 "),t("Icon",{attrs:{type:"chevron-up"}})],1):t("span",[e._v("更多 "),t("Icon",{attrs:{type:"chevron-down"}})],1)])],1),e._v(" "),t("Row",{directives:[{name:"show",rawName:"v-show",value:e.swtichMore,expression:"swtichMore"}]},[t("FormItem",{attrs:{label:"用户状态："}},[t("RadioGroup",{model:{value:e.formWrapperObj.enable,callback:function(r){e.$set(e.formWrapperObj,"enable",r)},expression:"formWrapperObj.enable"}},[t("Radio",{attrs:{label:"0"}},[e._v("正常")]),e._v(" "),t("Radio",{attrs:{label:"1"}},[e._v("禁用")])],1)],1),e._v(" "),t("FormItem",{attrs:{label:"QQ：",prop:"tencentQQ"}},[t("Input",{attrs:{type:"text"},model:{value:e.formWrapperObj.qq,callback:function(r){e.$set(e.formWrapperObj,"qq",r)},expression:"formWrapperObj.qq"}})],1),e._v(" "),t("FormItem",{attrs:{label:"邮箱：",prop:"email"}},[t("Input",{attrs:{type:"text"},model:{value:e.formWrapperObj.email,callback:function(r){e.$set(e.formWrapperObj,"email",r)},expression:"formWrapperObj.email"}})],1),e._v(" "),t("FormItem",{attrs:{label:"头像：",prop:"avatar"}},[t("Input",{attrs:{type:"text"},model:{value:e.formWrapperObj.avatar,callback:function(r){e.$set(e.formWrapperObj,"avatar",r)},expression:"formWrapperObj.avatar"}})],1)],1),e._v(" "),t("FormItem",[t("Button",{attrs:{type:"success",long:""},on:{click:e.confrimSub}},[e._v("确 认")])],1)],1)],1)],1)],1)},o=[];a._withStripped=!0;var s={render:a,staticRenderFns:o};r.default=s}});