<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-04-23 10:25:32
 * @LastEditTime: 2019-08-21 15:42:36
 * @LastEditors: Please set LastEditors
 -->

<script>
import { queryCustomWorkBench, getAgainCustom } from "@/service/custom";

export default {
  name: "",
  data() {
    return {
      params: {
        loading: false,
        statusOptions: [
          { status: 0, text: "已申诉" },
          { status: 1, text: "处理中" },
          { status: 2, text: "已处理" },
          { status: 3, text: "已关闭" },
          { status: "", text: "全部" }
        ],
        columns: [
          {
            title: "订单编号",
            width: 150,
            key: "orderSn"
          },
          {
            title: "交易类型",
            width: 100,
            render(h, obj) {
              let advertiseType = obj.row.advertiseType;
              return h("span", {}, advertiseType === 1 ? "充值" : "提现");
            }
          },

          {
            title: "支付方式",
            key: "payMode",
            width: 100
          },
          {
            title: "交易金额",
            key: "money"
          },
          {
            title: "申诉者（用户）",
            render: (h, obj) => {
              let subMobile = obj.row.subMobile || "";
              let subDealName = obj.row.subDealName || "";
              return h("div", [h("p", {}, subDealName), h("p", {}, subMobile)]);
            }
          },
          {
            title: "承兑商（广告主）",
            render(h, obj) {
              let memberName = obj.row.memberName || "";
              let memberMobile = obj.row.memberMobile || "";
              return h("div", [
                h("p", {}, memberName),
                h("p", {}, memberMobile)
              ]);
            }
          },
          {
            title: "承兑商（交易对象）",
            render(h, obj) {
              let customerName = obj.row.customerName || "";
              let customerMobile = obj.row.customerMobile || "";
              return h("div", [h("p", customerName), h("p", customerMobile)]);
            }
          },
          {
            title: "申诉时间",
            key: "appealTime"
          },
          {
            title: "操作",
            width: 100,
            render: (h, obj) => {
              return h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      localStorage.setItem(
                        "app/order/custom/detail",
                        JSON.stringify(obj.row)
                      );
                      this.$router.push({
                        path: "/otc/custom/detail",
                        query: {
                          orderId: obj.row.orderId,
                          orderSn: obj.row.orderSn
                        }
                      });
                    }
                  }
                },
                "查看"
              );
            }
          }
        ]
      },
      result: [],
      message: {}
    };
  },
  created() {
    this.init();
  },
  methods: {
    /**
     * 页面初始化
     */
    init() {
      this.queryCustomWorkBench();
    },
    /**
     * 下一个申诉订单
     */

    getAgainCustom() {
      getAgainCustom()
        .then(res => {
          if (res.code === 0) {
            this.$Message.success(res.message);
            this.queryCustomWorkBench();
          } else {
            this.$Message.error("获取下一个申诉订单失败");
          }
        })
        .catch(() => {
          this.$Message.error("获取下一个申诉订单失败");
        });
    },
    /**
     * 搜索申述订单
     */
    queryCustomWorkBench() {
      this.params.loading = true;
      queryCustomWorkBench()
        .then(res => {
          this.params.loading = false;
          if (res.code === 0 && res.data) {
            this.message = res.data;
            this.result = res.data["page"];
          } else {
            this.$Message.error(res.message);
          }
        })
        .catch(res => {
          this.params.loading = false;
          this.$Message.error("获取申诉订单失败");
        });
    },
    selectTableRow(row) {
      this.$router.push({
        path: "/otc/CustomDetail",
        query: { orderId: row.orderId, orderSn: row.orderSn }
      });
    }
  }
};
</script>

<template>
  <div class="">
    <Card>
      <p slot="title">
        申诉
        <Button type="primary" size="small" @click="init">
          <Icon type="refresh"></Icon> 刷新刷新刷新
        </Button>
      </p>
      <Row class="functionWrapper">
        <Col :span="8" class="panel-item">
          <span class="functionWrapper">未处理订单</span>
          <span>{{ message["undoAppealCnt"] }}</span>
        </Col>
        <Col :span="8" class="panel-item">
          <span class="functionWrapper">正在处理订单</span>
          <span>{{ message["doingAppealCnt"] }}</span>
        </Col>
        <Col :span="8" class="panel-item">
          <span class="functionWrapper">今日已处理订单</span>
          <span>{{ message["todayAppealCnt"] }}</span>
        </Col>

        <Col :span="12" class="panel-item">
          <span class="functionWrapper">正在处理订单（我的）</span>
          <span>{{ message["myDoingAppealCnt"] }}</span>
        </Col>
        <Col :span="12" class="panel-item">
          <span class="functionWrapper">今日已处理订单（我的）</span>
          <span>{{ message["myTodayAppealCnt"] }}</span>
        </Col>
      </Row>
      <Row class="functionWrapper">
        <div class="searchWrapper clearfix">
          <div class="btns">
            <Button type="info" @click="getAgainCustom"
              >获取下一个申诉订单</Button
            >
          </div>
        </div>
      </Row>
      <Row>
        <Table
          :loading="params.loading"
          :columns="params.columns"
          :data="result.content"
          border
        ></Table>
      </Row>
    </Card>
  </div>
</template>

<style   scoped>
.panel-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>