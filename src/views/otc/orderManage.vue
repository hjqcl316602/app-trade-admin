<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-01-22 18:05:47
 * @LastEditTime: 2019-09-05 17:07:54
 * @LastEditors: Please set LastEditors
 -->
<template>
	<div>
		<Card>
			<p slot="title">
				订单管理
				<Button type="primary" size="small" @click="refreshPageManual">
					<Icon type="refresh"></Icon> 刷新
				</Button>
			</p>
			<Row class="functionWrapper">
				<!-- <div class="btnsWrapper clearfix">
					<a :href="aLink" target="_self">
						<Button type="success" @click="outExcel">
								导出
						</Button>
					</a>
				</div> -->

				<div class="searchWrapper clearfix">
          <div class="poptip">
						<Poptip trigger="hover"
										content="请输入渠道用户编号搜索"
										placement="bottom-start">
							<Input placeholder="请输入渠道用户编号搜索"
										v-model="filterSearch.subMemId"/>
							</Input>
						</Poptip>
					</div>
					<div class="poptip">
						<Poptip trigger="hover"
										content="请输入渠道订单号搜索"
										placement="bottom-start">
							<Input placeholder="请输入渠道订单号搜索"
										v-model="filterSearch.channelOrderId"/>
							</Input>
						</Poptip>
					</div>
					<div class="poptip">
						<Poptip trigger="hover"
										content="请输入订单号搜索"
										placement="bottom-start">
							<Input placeholder="请输入订单号搜索"
										v-model="filterSearch.orderSn"/>
							</Input>
						</Poptip>
					</div>

					<div class="poptip">
						<Poptip trigger="hover"
										content="请输入交易人搜索"
										placement="bottom-start">
							<Input placeholder="请输入交易人搜索"
										v-model="filterSearch.customerName"/>
							</Input>
						</Poptip>
					</div>

						<div class="poptip">
						<Poptip trigger="hover"
										content="请输入创建人搜索"
										placement="bottom-start">
							<Input placeholder="请输入创建人搜索"
										v-model="filterSearch.memberName"/>
							</Input>
						</Poptip>
					</div>

					<div class="poptip">
						<span>币种：</span>
						<Select v-model="filterSearch.unit">
							<Option v-for="(item, index) in coinSearchArr"
										:value="item.unit=='全部'?'':item.unit"
										:key="item.unit">{{ item.unit }}</Option>
						</Select>
					</div>

					<div class="poptip">
						<span>类型：</span>
								<Select v-model="filterSearch.advertiseType">
							<Option v-for="item in advertiseArr"
										:value="item.status"
										:key="item.status">{{ item.text }}</Option>
						</Select>
					</div>
					<br>

					<div class="poptip range">
						<Poptip trigger="hover"
										content="最低订单数搜索"
										placement="bottom-start">
							<Input placeholder="最低订单数搜索"
										v-model="filterSearch.minNumber"/>
							</Input>
						</Poptip>
						~
						<Poptip trigger="hover"
										content="最高订单数搜索"
										placement="bottom-start">
							<Input placeholder="最高订单数搜索"
										v-model="filterSearch.maxNumber"/>
							</Input>
						</Poptip>
					</div>

					<div class="poptip range">
						<Poptip trigger="hover"
										content="最低订单金额搜索"
										placement="bottom-start">
							<Input placeholder="最低订单金额搜索"
										v-model="filterSearch.minMoney"/>
							</Input>
						</Poptip>
						~
						<Poptip trigger="hover"
										content="最高订单金额搜索"
										placement="bottom-start">
							<Input placeholder="最高订单金额搜索"
										v-model="filterSearch.maxMoney"/>
							</Input>
						</Poptip>
					</div>

					<div class="poptip">
						<span>订单状态：</span>
						<Select v-model="filterSearch.status">
							<Option v-for="item in orderStatusArr"
										:value="item.status"
										:key="item.status">{{ item.text }}</Option>
						</Select>
					</div>

					<div class="poptip">
						<DatePicker
							type="daterange"
							placement="bottom-end"
							@on-change="dateRange"
							placeholder="选择时间区间">
						</DatePicker>
					</div>

					<div class="btns">
						<Button type="info" size="small" @click="searchByFilter">搜索</Button>
					</div>

				</div>
			</Row>

			<Row>
				<Table :loading="ifloading"
								:columns="columnsList"
								:data="cbData.content"
								@on-selection-change="selectionChange"
								@on-sort-change="definedOrder"
								border></Table>
			</Row>

			<Row class="pageWrapper" >
				<Page :total="cbData.totalElements"
							:current="currentPageIdx"
							@on-change="changePage"
							show-elevator></Page>
			</Row>

			<Modal v-model="showModal" :width="500" class="modelInfo">
					<h3 slot="header">订单信息</h3>
						<ul>
              <li><span>订单编号：</span>{{ modelInner.orderSn }}</li>
							<li><span>渠道订单号：</span>{{ modelInner.channelOrderId }}</li>
              <li><span>渠道用户编号：</span>{{ modelInner.subMemId }}</li>
							<li><span>交易时间：</span>{{ modelInner.createTime }}</li>
							<li><span>交易人：</span>{{ modelInner.customerName }}</li>
							<li><span>创建人：</span>{{ modelInner.memberName }}</li>
							<li><span>币种：</span>{{ modelInner.unit }}</li>
							<li><span>类型：</span>{{ !modelInner.advertiseType ? '购买':'出售' }}</li>
							<li><span>订单数量：</span>{{ modelInner.number }}</li>
							<li><span>订单金额：</span>{{ modelInner.money }}</li>
							<li><span>手续费：</span>{{ ''+modelInner.fee }}</li>
							<li><span>支付方式：</span>{{ modelInner.payMode }}</li>
							<li><span>订单状态：</span>{{ modelInner.status | filterOrderStatus }}</li>
							<li><span>付款时间：</span>{{ modelInner.payTime }}</li>
							<li><span>订单取消时间：</span>{{ !modelInner.cancelTime ? '--' : modelInner.cancelTime }}</li>
							<li><span>放行时间：</span>{{ !modelInner.releaseTime ? '--' : modelInner.releaseTime }}</li>
							<li><span>转账金额：</span>{{ !modelInner.transferNumber ? '--' : modelInner.transferNumber }}</li>
							<li><span>转账时间：</span>{{ !modelInner.transferTime ? '--' : modelInner.transferTime }}</li>

						</ul>
					<div>
						<Button type="error" @click="createBlackList(modelInner)">加入黑名单</Button>
					</div>
					<div slot="footer">
					</div>
			</Modal>
		</Card>
	</div>
</template>
<script>
import qs from "qs";
import { setStore, getStore, removeStore } from "@/config/storage.js";
import {
  queryOtcOrder,
  coinOutExcel,
  BASICURL,
  getCoinName,
    setBlack
} from "@/service/getData";

export default {
  name: "OrderManage",
  data() {
    return {
      aLink: `${BASICURL}admin/otc/order/out-excel`,
      coinSearchArr: [],
      sortSearch: {
        direction: [],
        property: []
      },
      orderStatusArr: [
        { status: 0, text: "已取消" },
        { status: 1, text: "未付款" },
        { status: 2, text: "已付款" },
        { status: 3, text: "已完成" },
        { status: 4, text: "申诉中" },
        { status: "", text: "全部" }
      ],
      advertiseArr: [
        { status: 0, text: "买入" },
        { status: 1, text: "卖出" },
        { status: "", text: "全部" }
      ],
      filterSearch: {
        channelOrderId: "",
        status: "",
        unit: "",
        memberName: "",
        customerName: "",
        orderSn: "",
        minMoney: "",
        maxMoney: "",
        minNumber: "",
        maxNumber: "",
        advertiseType: "",
        subMemId: ""
      },
      modelInner: {},
      cbData: {},
      ifloading: false,
      currentPageIdx: 1,
      orderStatus: null,
      showModal: false,
      saveLoading: false,
      columnsList: [
        {
          title: "订单编号",
          width: 160,
          key: "orderSn"
        },
        {
          title: "渠道订单号（渠道用户编号）",
          key: "channelOrderId",
          width: 200,
          render(h, params) {
            let { subMemId, channelOrderId } = params.row;
            return h("p", [
              h("p", channelOrderId),
              h("p", subMemId ? "(" + subMemId + ")" : "")
            ]);
          }
        },
        {
          title: "交易时间",
          width: 200,
          key: "createTime",
          sortable: "custom"
        },
        {
          title: "交易人",
          key: "customerName"
        },
        {
          title: "创建人",
          key: "memberName"
        },
        {
          title: "币种",
          key: "unit"
        },
        {
          title: "类型",
          key: "advertiseType",
          render(h, obj) {
            return h("span", {}, obj.row.advertiseType === 0 ? "买入" : "卖出");
          }
        },
        {
          title: "订单数量",
          key: "number"
        },
        {
          title: "订单金额",
          key: "money"
        },
        {
          title: "手续费",
          key: "fee"
        },
        {
          title: "支付方式",
          key: "payMode"
        },
        {
          title: "订单状态",
          key: "status",
          render(h, params) {
            let status = params.row.status;
            let message ;
            if(params.row && params.row.transferNumber){
                message ='已转账'
			}else{
                message = ["已取消", "未付款", "已付款", "已完成", "申诉中"][status];
			}

			let style = {}
			if(status == 3){
                style['color'] = 'red'
			}
            return h("span", { style }, message);
          }
        },
        {
          title: "操作",
          align: "center",
          key: "handle",
          render: (h, obj) => {
            return h("div",[
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  style: {
                    marginRight: "10px"
                  },
                  on: {
                    click: () => {
                      this.showInfoModal(obj);
                    }
                  }
                },
                "查看"
              ),
            ]);
          }
        }
      ]
    };
  },
  methods: {
    definedOrder(obj) {
      	let direction = obj.order === "desc" ? 1 : 0;
      let propertyIndex = this.sortSearch.property.indexOf(obj.key);

      if (propertyIndex !== -1) {
        this.sortSearch.direction[propertyIndex] = direction;
      } else {
        this.sortSearch.property.push(obj.key);
        this.sortSearch.direction.push(direction);
      }

      let subObj = { pageNo: 1, pageSize: 10 };
      Object.assign(subObj, this.filterSearch, this.sortSearch);

      this.refreshPage(subObj);
    },
    dateRange(val) {
      this.filterSearch.startTime = val[0];
      this.filterSearch.endTime = val[1];
    },
    searchByFilter() {
      let obj = Object.assign({ pageNo: 1, pageSize: 10 }, this.filterSearch);
      this.aLink = `${BASICURL}admin/otc/order/out-excel?${qs.stringify(obj)}`;
      this.refreshPage(obj);
    },
    selectionChange(selection) {},
    refreshPageManual() {
      this.currentPageIdx = 1;
      for (let val in this.filterSearch) {
        this.filterSearch[val] = "";
      }
      this.refreshPage();
    },
    changePage(pageIndex) {
      this.currentPageIdx = pageIndex;
      let obj = Object.assign(
        { pageNo: pageIndex, pageSize: 10 },
        this.filterSearch,
        this.sortSearch
      );
      this.refreshPage(obj);
    },
    showInfoModal(obj) {
      this.showModal = true;
      this.modelInner = obj.row;
    },
	  // 加入黑名单
      createBlackList({ id,subMemId }){
		this.$Modal.confirm({
            title:'加入黑名单',
            content:"是否确认将用户【"+subMemId+"】加入黑名单？",
            onOk:()=>{
                setBlack({
					id
				})
                    .then(({ code ,message}) => {
                        if ( code === 0) {
                            this.$Message.success(message);
                        } else this.$Message.error(message);
                    })
                    .catch(err => {
                        console.log(err);
                    });
			}
		})
	  },
    queryStatus(obj) {
      if (obj.query.status === undefined) {
        this.orderStatus = null;
      } else {
        this.orderStatus = obj.query.status;
      }
      this.getData();
    },
    refreshPage(obj = {}) {
      this.ifloading = true;
      queryOtcOrder(obj)
        .then(res => {
          if (!res.code) {
            this.cbData = res.data;
          } else this.$Message.error(res.message);
          this.ifloading = false;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    getCoinName()
      .then(res => {
        if (!res.code) {
          this.coinSearchArr = res.data;
          this.coinSearchArr.push({ name: "全部", unit: "全部" });
        } else this.$Message.error(res.message);
      })
      .catch(err => {
        console.log(err);
      });
    this.refreshPage();
  },
  filters: {
    filterOrderStatus(val) {
      let arr = ["已取消", "未付款", "已付款", "已完成", "申诉中"];
      return arr[val];
    }
  },
  watch: {
    $route(to, from) {
      this.queryStatus(to);
    }
  }
};
</script>

<style lang="less">
.modelInfo {
  h3 {
    color: #2d8cf0;
  }
  ul {
    li {
      margin: 5px 0;
      font-size: 14px;
      & > span {
        display: inline-block;
        margin-left: 25px;
        width: 100px;
        font-weight: 700;
      }
    }
  }
}
</style>
