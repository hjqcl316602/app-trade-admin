webpackJsonp([34],{290:function(t,e,a){"use strict";function n(t){d||a(608)}Object.defineProperty(e,"__esModule",{value:!0});var s=a(545),i=a.n(s);for(var r in s)"default"!==r&&function(t){a.d(e,t,function(){return s[t]})}(r);var o=a(610),c=a.n(o),d=!1,l=a(0),u=n,p=l(i.a,c.a,!1,u,"data-v-29dd1711",null);p.options.__file="src/views/member/AuthenticateDetail.vue",e.default=p.exports},545:function(t,e,a){"use strict";function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}Object.defineProperty(e,"__esModule",{value:!0});var s=a(25),i=a(11);e.default={data:function(){var t;return t={rejectModel:!1,rejectReason:"",imgAltArr:["身份证正面","手持证件","身份证反面"],clickIndex:null,ifEnlarge:!1,memberName:null,IDCard:null,imgUrlArr:[],ifPass:"审核通过",tabSwitch:!0},n(t,"rejectReason",null),n(t,"status",null),n(t,"queryID",null),t},methods:{noPass:function(){var t=this;(0,s.memberCheckNotPass)(this.queryID,{rejectReason:this.rejectReason}).then(function(e){e.code?t.$Message.error(e.message):(t.$Message.success(e.message),(0,s.MemberRealNameDetail)({id:t.queryID}).then(function(e){t.status=e.data.auditStatus}))})},enlargeImg:function(t){this.clickIndex=t,this.ifEnlarge=!0},pass:function(){var t=this;if(this.tabSwitch)(0,s.memberCheckPass)(this.queryID).then(function(e){0===e.code&&(0,s.MemberRealNameDetail)({id:t.queryID}).then(function(e){t.status=e.data.auditStatus})});else{var e=(0,s.memberCheckNotPass)({memberID:this.queryID,rejectReason:"rejectReason="+this.rejectReason});e&&e.then(function(e){0===e.code&&(0,s.MemberRealNameDetail)({id:t.queryID}).then(function(e){t.status=e.data.auditStatus})})}}},created:function(){var t=this;this.queryID=(0,i.getStore)("AuthenticateID"),(0,s.MemberRealNameDetail)({id:this.queryID}).then(function(e){t.data=e.data,t.memberName=e.data.realName,t.IDCard=e.data.idCard,t.imgUrlArr=[e.data.identityCardImgFront,e.data.identityCardImgInHand,e.data.identityCardImgReverse],t.status=e.data.auditStatus})}}},608:function(t,e,a){var n=a(609);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(7)("2adef2c6",n,!1,{})},609:function(t,e,a){e=t.exports=a(6)(!1),e.push([t.i,"\n.examin_mian[data-v-29dd1711] {\n  background: #f2f2f2;\n  height: 650px;\n  padding-top: 50px;\n}\n.e_mianinput .ivu-col-span-2[data-v-29dd1711] {\n  line-height: 2.4;\n  font-size: 15px;\n}\n.e_img[data-v-29dd1711] {\n  margin-top: 40px;\n}\n.e_img .ivu-col-span-7[data-v-29dd1711] {\n  height: 165px;\n  border: 6px solid #ccc;\n}\n.e_img img[data-v-29dd1711] {\n  height: 153px;\n  width: 100%;\n  cursor: pointer;\n}\n.e_img_center[data-v-29dd1711] {\n  margin-top: 20px;\n}\n.e_img_center .ivu-col-span-7[data-v-29dd1711] {\n  text-align: center;\n  font-size: 16px;\n}\n.reject-btn-wrap[data-v-29dd1711] {\n  text-align: center;\n}\n.code-row-bg.e_mianinput[data-v-29dd1711] {\n  font-weight: 700;\n}\n.code-row-bg.e_mianinput span[data-v-29dd1711] {\n  line-height: 36px;\n  font-size: 15px;\n  font-weight: normal;\n}\n.passInfo p[data-v-29dd1711] {\n  padding-top: 20px;\n  font-size: 25px;\n  color: #19be6b;\n  font-weight: 700;\n  text-align: center;\n}\n.mask[data-v-29dd1711] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n.biggerImg[data-v-29dd1711] {\n  position: fixed;\n  z-index: 888;\n  top: 50%;\n  left: 50%;\n  width: 50%;\n  height: 70%;\n  transform: translate(-50%, -50%);\n}\n.biggerImg .cardHead[data-v-29dd1711] {\n  position: relative;\n}\n.biggerImg .closeIconWrapper[data-v-29dd1711] {\n  position: absolute;\n  right: 5px;\n  font-size: 14px;\n  color: #ccc;\n}\n.biggerImg .closeIconWrapper .ivu-icon.ivu-icon-close[data-v-29dd1711]:hover {\n  cursor: pointer;\n  color: #ed3f14;\n}\n.biggerImg img[data-v-29dd1711] {\n  width: 100%;\n  height: 450px;\n}\n.fade-enter-active[data-v-29dd1711],\n.fade-leave-active[data-v-29dd1711] {\n  transition: opacity .3s;\n}\n.fade-enter[data-v-29dd1711],\n.fade-leave-to[data-v-29dd1711] {\n  opacity: 0;\n}\n.scale-enter-active[data-v-29dd1711],\n.scale-leave-active[data-v-29dd1711] {\n  transition: all .3s;\n}\n.scale-enter[data-v-29dd1711],\n.scale-leave-to[data-v-29dd1711] {\n  width: 0%;\n  height: 0%;\n}\n.scale-enter-to[data-v-29dd1711],\n.scale-leave[data-v-29dd1711] {\n  width: 50%;\n  height: 70%;\n}\n",""])},610:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"examin_mian"},[a("Row",{staticClass:"code-row-bg e_mianinput",attrs:{type:"flex",justify:"center"}},[a("Col",{attrs:{span:"2"}},[t._v(" 客户名称 : ")]),t._v(" "),a("Col",{attrs:{span:"8"}},[a("span",[t._v(t._s(t.memberName))])])],1),t._v(" "),a("Row",{staticClass:"code-row-bg e_mianinput",attrs:{type:"flex",justify:"center"}},[a("Col",{attrs:{span:"2"}},[t._v(" 身份证号码 : ")]),t._v(" "),a("Col",{attrs:{span:"8"}},[a("span",[t._v(t._s(t.IDCard))])])],1),t._v(" "),a("Row",{staticClass:"code-row-bg e_img",attrs:{type:"flex",justify:"space-around"}},t._l(t.imgUrlArr,function(e,n){return a("Col",{key:n,attrs:{span:"6"}},[a("img",{attrs:{src:e},on:{click:function(e){t.enlargeImg(n)}}})])})),t._v(" "),a("transition",{attrs:{name:"scale"}},[t.ifEnlarge?a("div",{staticClass:"biggerImg"},[a("Card",{attrs:{bordered:!1}},[a("p",{staticClass:"cardHead",attrs:{slot:"title"},slot:"title"},[t._v("\n                "+t._s(t.imgAltArr[t.clickIndex])+"\n                "),a("span",{staticClass:"closeIconWrapper",on:{click:function(e){t.ifEnlarge=!1}}},[a("Icon",{attrs:{type:"close"}})],1)]),t._v(" "),a("img",{attrs:{src:t.imgUrlArr[t.clickIndex]}})])],1):t._e()]),t._v(" "),a("transition",{attrs:{name:"fade"}},[t.ifEnlarge?a("div",{staticClass:"mask",on:{click:function(e){t.ifEnlarge=!1}}}):t._e()]),t._v(" "),a("Row",{staticClass:"code-row-bg e_img_center",attrs:{type:"flex",justify:"space-around"}},t._l(t.imgAltArr,function(e){return a("Col",{key:e,attrs:{span:"7"}},[t._v(t._s(e))])})),t._v(" "),t.status?t._e():a("Row",[a("Row",{staticClass:"code-row-bg",staticStyle:{"margin-top":"20px","text-aligin":"center"},attrs:{type:"flex",justify:"center"}},[a("Col",{attrs:{span:"6"}},[a("RadioGroup",{on:{"on-change":function(e){t.tabSwitch=!t.tabSwitch}},model:{value:t.ifPass,callback:function(e){t.ifPass=e},expression:"ifPass"}},[a("Radio",{attrs:{label:"审核通过"}}),t._v(" "),a("Radio",{staticStyle:{"margin-left":"35px"},attrs:{label:"审核驳回"}})],1)],1)],1),t._v(" "),a("Row",{staticClass:"code-row-bg",staticStyle:{"margin-top":"20px"},attrs:{type:"flex",justify:"center"}},[a("Col",{attrs:{span:"12"}},[a("div",{staticStyle:{"text-align":"center"}},[a("Row",{directives:[{name:"show",rawName:"v-show",value:!t.tabSwitch,expression:"!tabSwitch"}],staticClass:"code-row-bg",attrs:{type:"flex",justify:"center"}},[a("Col",{staticStyle:{"font-size":"16px"},attrs:{span:"4"}},[t._v("驳回理由 :")]),t._v(" "),a("Col",{attrs:{span:"16"}},[a("Input",{attrs:{type:"textarea",rows:4},model:{value:t.rejectReason,callback:function(e){t.rejectReason=e},expression:"rejectReason"}})],1)],1),t._v(" "),a("Row",{directives:[{name:"show",rawName:"v-show",value:t.tabSwitch,expression:"tabSwitch"}],staticClass:"code-row-bg",attrs:{type:"flex",justify:"center"}},[a("Col",{staticStyle:{"font-size":"16px",color:"#2287fe"},attrs:{span:"8"}},[t._v("审核通过")])],1)],1)])],1),t._v(" "),a("Row",{staticClass:"code-row-bg",staticStyle:{"margin-top":"20px"},attrs:{type:"flex",justify:"center"}},[a("Col",{attrs:{span:"6"}},[a("Button",{attrs:{type:"success",long:"",size:"large"},on:{click:t.pass}},[t._v("确 认")])],1)],1)],1),t._v(" "),t.status?a("Row",{staticClass:"passInfo"},[2===t.status?a("p",[t._v("审核通过")]):t._e(),t._v(" "),1===t.status?a("p",{staticStyle:{color:"#ed3f14"}},[t._v("审核未通过")]):t._e()]):t._e()],1),t._v(" "),a("Modal",{attrs:{width:450,title:"请备注失败原因(选填)"},on:{"on-ok":t.noPass},model:{value:t.rejectModel,callback:function(e){t.rejectModel=e},expression:"rejectModel"}},[a("Input",{attrs:{type:"textarea"},model:{value:t.rejectReason,callback:function(e){t.rejectReason=e},expression:"rejectReason"}})],1)],1)},s=[];n._withStripped=!0;var i={render:n,staticRenderFns:s};e.default=i}});