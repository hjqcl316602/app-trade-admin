webpackJsonp([48],{218:function(t,e,a){"use strict";function n(t){o||a(567)}Object.defineProperty(e,"__esModule",{value:!0});var i=a(473),r=a.n(i);for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);var l=a(569),d=a.n(l),o=!1,c=a(0),u=n,p=c(r.a,d.a,!1,u,"data-v-16c906f4",null);p.options.__file="src/views/content/AddAdvertisement.vue",e.default=p.exports},473:function(t,e,a){"use strict";function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}Object.defineProperty(e,"__esModule",{value:!0});var i,r=a(58),s=function(t){return t&&t.__esModule?t:{default:t}}(r),l=a(23);a(11);e.default={data:function(){var t=this;return{currentPageIdx:1,linkUrl:null,bannerUrlIcon:!1,listenBannerUrl:!1,sort:1,ifDelete:!1,ifShowPercentCircle:!1,percentage:0,basicUrl:l.BASICURL,ifLoading:!0,adSerialNumber:null,adName:null,adPosModel:null,picUrl:null,adStartTime:"",advertisementArr:[],adRemark:null,adStatus:0,adStatusArr:[{status:0,statusName:"上线"},{status:1,statusName:"下线"}],adEndTime:"",addModal:!1,adPosition:[{status:0,posName:"APP轮播"},{status:1,posName:"PC轮播"},{status:2,posName:"PC分类"}],showMrakContain:!1,showMrak:!1,serialNumberIcon:!1,adNameIcon:!1,picUrlIcon:!1,delArr:[],adCreateTime:null,addAdStyle:!0,totalNum:null,columns_first:[{type:"selection",width:60},{title:"编号",key:"serialNumber",width:100},{title:"广告名称",key:"name"},{title:"广告位置",width:90,render:function(t,e){var a=e.row.sysAdvertiseLocation,n=String;return 0===a?n="APP轮播":1===a?n="pc 轮播":2===a&&(n="pc 分类"),t("span",{},n)}},{title:"广告图片",key:"url"},{title:"轮播图片",key:"linkUrl"},{title:"时间",width:220,render:function(t,e){var a=e.row.startTime,n=e.row.endTime;return t("div",[t("p",{},"开始时间："+a),t("p",{},"结束时间："+n)])}},{title:"上线/下线",width:90,render:function(t,e){var a=e.row.status,n=String;return 0===a?n="上线":1===a&&(n="下线"),t("span",{},n)}},{title:"操作",width:180,render:function(e,a){return e("div",[e("Button",{props:{type:"info",size:"small"},style:{marginRight:"10px"},on:{click:function(){(0,l.adDetail)({serialNumber:a.row.serialNumber}).then(function(e){e.code||(t.addModal=!0,t.addAdStyle=!1,t.adName=e.data.name,t.adRemark=e.data.remark,t.adSerialNumber=e.data.serialNumber,t.adStartTime=e.data.startTime,t.adEndTime=e.data.endTime,t.sort=e.data.sort,t.adStatus=e.data.status.toString(),t.adPosModel=e.data.sysAdvertiseLocation,t.picUrl=e.data.url,t.adCreateTime=e.data.startTime,t.linkUrl=e.data.linkUrl)})}}},"查看 / 编辑")])}}]}},methods:(i={refreshPageManual:function(){},bannerUrlFn:function(){this.listenBannerUrl=!0,this.linkUrl?this.bannerUrlIcon=!0:this.bannerUrlIcon=!1},addAdvertisement:function(){alert()},confirmDel:function(){var t=this;(0,l.deleteAd)({ids:this.delArr}).then(function(e){e.code?t.$Message.error("广告删除失败!"):(t.delArr=[],t.$Message.success("广告删除成功!"),t.refreshTab())})},cancelDel:function(){this.$Message.success("已取消!")},uploading:function(t,e,a){this.ifShowPercentCircle=!0,this.percentage=e.percentage},uploadSuccessed:function(t,e,a){this.picUrl=t.data,this.ifShowPercentCircle=!1,this.$Message.success("上传成功")},uploadFailed:function(t,e,a){this.ifShowPercentCircle=!1,this.$Message.error("上传失败")}},n(i,"refreshPageManual",function(){this.ifLoading=!0,this.refreshTab({pageNo:this.currentPageIdx,pageSize:10})}),n(i,"changePage",function(t){this.ifLoading=!0,this.currentPageIdx=t,this.refreshTab({pageNo:t,pageSize:10})}),n(i,"listenValName",function(){this.adNameIcon=!0}),n(i,"listenValUrl",function(){this.picUrlIcon=!0}),n(i,"addAd",function(){this.addAdStyle=this.addModal=!0,this.adName=null,this.adStatus=0,this.adPosModel=null,this.adStartTime=null,this.adEndTime=null,this.adRemark=null,this.picUrl=null,this.linkUrl=null,this.sort=null}),n(i,"select",function(t){var e=this;this.delArr=[],t.forEach(function(t){e.delArr.push(t.serialNumber)})}),n(i,"delAd",function(){this.delArr.length?this.ifDelete=!0:this.$Message.warning("请选择需要删除的广告!")}),n(i,"confrimAddAd",function(t){var e=this,a=0===String(this.adStartTime).trim().length,n=0===String(this.adEndTime).trim().length;if(!this.adName||a||n||!this.picUrl)this.$Message.warning("请完善信息！");else{var i={name:this.adName,sysAdvertiseLocation:this.adPosModel,startTime:(0,s.default)(this.adStartTime).format("YYYY-MM-DD HH:mm:ss"),endTime:(0,s.default)(this.adEndTime).format("YYYY-MM-DD HH:mm:ss"),url:this.picUrl,remark:this.adRemark,sort:this.sort,status:this.adStatus,linkUrl:this.linkUrl},r="",d=!0;for(r in i)"remark"!==r&&"linkUrl"!==r&&(String(i[r])&&String(i[r]).length||(d=!1));this.addModal=!1;var o=null;t?o=l.createAd:(i.serialNumber=this.adSerialNumber,o=l.updateAd),d?o(i).then(function(t){t.code?e.$Message.error(t.message):e.$Message.success("操作成功!"),e.refreshTab()}):this.$Message.error("请完善信息！")}}),n(i,"cancelAddAd",function(){this.addModal=!1}),n(i,"refreshTab",function(t){var e=this;(0,l.manageAd)(t).then(function(t){t.code?e.$Message.error(t.message):(e.advertisementArr=t.data.content,e.totalNum=t.data.totalElements,e.ifLoading=!1)})}),i),created:function(){this.refreshTab()}}},567:function(t,e,a){var n=a(568);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(7)("9cfcccca",n,!1,{})},568:function(t,e,a){e=t.exports=a(6)(!1),e.push([t.i,"\n.manageRow[data-v-16c906f4]{\n\t\theight: 45px;\n}\n.searchContain[data-v-16c906f4]{\n\t\tdisplay: inline-block;\n}\n.searchContain .ivu-input-wrapper[data-v-16c906f4] {\n\t\twidth: 150px;\n}\n.searchContain span[data-v-16c906f4]{\n    vertical-align: middle;\n\t\tfont-size: 15px;\n}\n.searchContain i[data-v-16c906f4]{\n\t\tvertical-align: middle;\n}\n.manageWrapper[data-v-16c906f4]{\n\t\tfloat: right;\n}\n.manageWrapper Button[data-v-16c906f4] {\n\t\tmargin-right: 10px;\n}\n.addAdWrapper[data-v-16c906f4]{\n\t\tfont-size: 15px;\n}\n.addAdWrapper>p[data-v-16c906f4],.addAdWrapper>div[data-v-16c906f4]{\n\t\tmargin-bottom: 10px;\n}\n.addAdWrapper .ivu-input-wrapper.ivu-input-type[data-v-16c906f4]{\n\t\twidth: 70%;\n}\n.addAdWrapper i[data-v-16c906f4]{\n    color: red;\n    font-size: 15px;\n    font-weight: 700;\n    font-style: normal;\n}\n.buttomPageContain[data-v-16c906f4]{\n    margin: 25px;\n    text-align: right;\n}\n.ivu-upload[data-v-16c906f4]{\n    display: inline-block;\n}\n.circleWrapper[data-v-16c906f4]{\n    position: absolute;\n    z-index: 10;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, .1);\n}\n.ivu-chart-circle[data-v-16c906f4]{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%)\n}\n.demo-Circle-inner[data-v-16c906f4]{\n    font-size: 15px !important;\n}\n",""])},569:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[t._v("\n        广告管理\n        "),a("Button",{attrs:{type:"primary",size:"small"},on:{click:t.refreshPageManual}},[a("Icon",{attrs:{type:"refresh"}}),t._v("刷新\n        ")],1)],1),t._v(" "),a("Row",{staticClass:"manageRow clearfix"},[a("div",{staticClass:"manageWrapper"},[a("Button",{attrs:{type:"error"},on:{click:t.delAd}},[t._v("删除")]),t._v(" "),a("Button",{attrs:{type:"info"},on:{click:t.addAd}},[t._v("添加")])],1)]),t._v(" "),a("Table",{attrs:{border:"",columns:t.columns_first,data:t.advertisementArr,loading:t.ifLoading},on:{"on-selection-change":t.select}}),t._v(" "),a("Row",{staticClass:"buttomPageContain"},[a("Page",{staticClass:"buttomPage",attrs:{total:t.totalNum,current:t.currentPageIdx,"show-elevator":""},on:{"on-change":t.changePage}})],1),t._v(" "),a("Modal",{attrs:{title:"删除"},on:{"on-ok":t.confirmDel,"on-cancel":t.cancelDel},model:{value:t.ifDelete,callback:function(e){t.ifDelete=e},expression:"ifDelete"}},[a("p",[t._v("是否删除已选择的"+t._s(t.delArr.length)+"项")])]),t._v(" "),a("Modal",{attrs:{title:"添加广告",width:"430"},model:{value:t.addModal,callback:function(e){t.addModal=e},expression:"addModal"}},[a("p",{staticStyle:{color:"#5cadff","text-align":"center"},attrs:{slot:"header"},slot:"header"},[a("Icon",{attrs:{type:"information-circled"}}),t._v(" "),t.addAdStyle?a("span",{staticStyle:{"padding-left":"5px"}},[t._v("添加广告")]):t._e(),t._v(" "),t.addAdStyle?t._e():a("span",{staticStyle:{"padding-left":"5px"}},[t._v("查看广告")])],1),t._v(" "),a("div",{staticClass:"addAdWrapper"},[t.addAdStyle?t._e():a("div",[a("i",[t._v("*")]),t._v(" 创建时间：\n          "),a("Input",{attrs:{disabled:""},model:{value:t.adCreateTime,callback:function(e){t.adCreateTime=e},expression:"adCreateTime"}})],1),t._v(" "),t.addAdStyle?t._e():a("p",[a("i",[t._v("*")]),t._v(" 广告编号：\n          "),a("Input",{attrs:{disabled:""},model:{value:t.adSerialNumber,callback:function(e){t.adSerialNumber=e},expression:"adSerialNumber"}})],1),t._v(" "),a("p",[a("i",[t._v("*")]),t._v(" 广告排序：\n          "),a("InputNumber",{attrs:{max:100,min:1},model:{value:t.sort,callback:function(e){t.sort=e},expression:"sort"}})],1),t._v(" "),a("p",[a("i",[t._v("*")]),t._v(" 广告名称：\n          "),a("Input",{on:{"on-blur":t.listenValName},model:{value:t.adName,callback:function(e){t.adName=e},expression:"adName"}}),t._v(" "),t.adNameIcon?a("span",[t.adName?a("Icon",{staticStyle:{color:"green"},attrs:{type:"checkmark-round"}}):a("Icon",{attrs:{type:"close-round"}})],1):t._e()],1),t._v(" "),a("div",[a("i",[t._v("*")]),t._v(" 广告状态：\n          "),a("RadioGroup",{model:{value:t.adStatus,callback:function(e){t.adStatus=e},expression:"adStatus"}},[a("Radio",{attrs:{label:"0"}},[a("span",[t._v("上线")])]),t._v(" "),a("Radio",{attrs:{label:"1"}},[a("span",[t._v("下线")])])],1)],1),t._v(" "),a("div",[a("i",[t._v("*")]),t._v(" 广告位置：\n\t\t\t\t\t"),a("Select",{staticStyle:{width:"200px"},model:{value:t.adPosModel,callback:function(e){t.adPosModel=e},expression:"adPosModel"}},t._l(t.adPosition,function(e){return a("Option",{key:e.status,attrs:{value:e.status}},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.posName)+"\n\t\t\t\t\t\t")])}))],1),t._v(" "),a("div",[a("i",[t._v("*")]),t._v(" 开始时间：\n\t\t\t\t\t"),a("DatePicker",{staticStyle:{width:"200px"},attrs:{type:"date",format:"yyyy-MM-dd HH:mm:ss",placeholder:"请选择时间"},model:{value:t.adStartTime,callback:function(e){t.adStartTime=e},expression:"adStartTime"}})],1),t._v(" "),a("div",[a("i",[t._v("*")]),t._v(" 结束时间：\n\t\t\t\t\t"),a("DatePicker",{staticStyle:{width:"200px"},attrs:{type:"date",format:"yyyy-MM-dd HH:mm:ss",placeholder:"请选择时间"},model:{value:t.adEndTime,callback:function(e){t.adEndTime=e},expression:"adEndTime"}})],1),t._v(" "),a("div",[a("i",[t._v("*")]),t._v(" 广告图片：\n          "),t._v(" "),a("Upload",{attrs:{action:t.basicUrl+"admin/common/upload/oss/image","on-success":t.uploadSuccessed,"on-error":t.uploadFailed,"on-progress":t.uploading,"show-upload-list":!1}},[a("Button",{attrs:{type:"ghost",icon:"ios-cloud-upload-outline"}},[t._v("添加图片")])],1)],1),t._v(" "),a("p",[a("i",[t._v("*")]),t._v(" 图片地址：\n          "),a("Input",{attrs:{disabled:""},on:{"on-blur":t.listenValUrl},model:{value:t.picUrl,callback:function(e){t.picUrl=e},expression:"picUrl"}}),t._v(" "),t.picUrlIcon?a("span",[t.picUrl?a("Icon",{staticStyle:{color:"green"},attrs:{type:"checkmark-round"}}):a("Icon",{attrs:{type:"close-round"}})],1):t._e()],1),t._v(" "),a("p",[a("i",[t._v("*")]),t._v(" 跳转地址：\n          "),a("Input",{on:{"on-blur":t.bannerUrlFn},model:{value:t.linkUrl,callback:function(e){t.linkUrl=e},expression:"linkUrl"}}),t._v(" "),t.listenBannerUrl?a("span",[t.bannerUrlIcon?a("Icon",{staticStyle:{color:"green"},attrs:{type:"checkmark-round"}}):a("Icon",{attrs:{type:"close-round"}})],1):t._e()],1),t._v(" "),a("p",[a("i",[t._v("*")]),t._v(" 广告备注： "),a("Input",{attrs:{type:"textarea",rows:4,placeholder:"添加广告备注..."},model:{value:t.adRemark,callback:function(e){t.adRemark=e},expression:"adRemark"}})],1)]),t._v(" "),a("div",{staticStyle:{color:"#5cadff","text-align":"right"},attrs:{slot:"footer"},slot:"footer"},[t.addAdStyle?a("div",[a("Button",{attrs:{type:"text"},on:{click:t.cancelAddAd}},[t._v("取消")]),t._v(" "),a("Button",{attrs:{type:"info"},on:{click:function(e){t.confrimAddAd(!0)}}},[t._v("确认")])],1):t._e(),t._v(" "),t.addAdStyle?t._e():a("Button",{attrs:{type:"info"},on:{click:function(e){t.confrimAddAd(!1)}}},[t._v("更新")])],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.ifShowPercentCircle,expression:"ifShowPercentCircle"}],staticClass:"circleWrapper"},[a("i-circle",{attrs:{percent:t.percentage,size:60,"stroke-width":10}},[a("span",{staticClass:"demo-Circle-inner",staticStyle:{"font-size":"24px"}},[t._v(t._s(t.percentage.toFixed(1))+"%")])])],1)])],1)],1)},i=[];n._withStripped=!0;var r={render:n,staticRenderFns:i};e.default=r}});