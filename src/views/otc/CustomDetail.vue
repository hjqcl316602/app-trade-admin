<script>
import { getAppealDetail } from "@/service/custom";

export default {
  name: "",
  data() {
    return {
      basis: {
        accessToken: "",
        appId: "",
        orderId: "",
        orderSn: ""
      },
      detail: {}
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    /**
     * 初始化
     */
    init() {
      this.getBasisMessage();
      this.getAppealDetail();
    },
    /**
     * 获取基础信息
     */
    getBasisMessage() {
      this.basis.orderId = this.$route.query["orderId"];
      this.basis.orderSn = this.$route.query["orderSn"];
      let message = localStorage.getItem("app/order/custom/chat/message");
      let messgaeFormat = message ? JSON.parse(message) : {};
      this.basis.accessToken = messgaeFormat.accessToken;
      this.basis.appId = messgaeFormat.appId;
    },
    /**
     * 获取订单详情
     */
    getAppealDetail(index) {
      return new Promise(resolve => {
        getAppealDetail({
          orderId: this.basis["orderId"]
        })
          .then(res => {
            this.detail = res;
          })
          .catch(e => {
            this.$Message.error("获取申诉订单详情失败！");
          });
      });
    }
  }
};
</script>

<template>
  <div class="">
    <Card>
      <p slot="title">申诉详情</p>
      <div class="list">
        <div class="list-item">
          <span class="list-title">订单号: </span>
          <span class="list-value">{{ detail["orderSn"] }}</span>
        </div>
        <div class="list-item">
          <span class="list-title">渠道订单号: </span>
          <span class="list-value">{{ detail["channelOrderId"] }}</span>
        </div>
        <div class="list-item">
          <span class="list-title">渠道用户编号: </span>
          <span class="list-value">{{ detail["subMemId"] }}</span>
        </div>

        <div class="list-item">
          <span class="list-title">交易类型: </span>
          <span class="list-value">
            {{ detail.advertiseType === 1 ? "充值" : "提现" }}
          </span>
        </div>

        <div class="list-item">
          <span class="list-title">支付方式: </span>
          <span class="list-value">{{ detail["payMode"] }}</span>
        </div>

        <div class="list-item">
          <span class="list-title">交易金额: </span>
          <span class="list-value">{{ detail["money"] }}</span>
        </div>

        <div class="list-item">
          <span class="list-title">申诉者（用户）: </span>
          <span class="list-value">
            <span>
              {{
                detail["subDealName"] ||
                  detail["subMobile"] ||
                  detail["subMemId"]
              }}
            </span>
          </span>
        </div>
        <div class="list-item">
          <span class="list-title">承兑商（广告主）: </span>
          <span class="list-value">
            <span> {{ detail["memberName"] }} </span>
            <span v-if="detail['memberMobile']">
              ({{ detail["memberMobile"] }})
            </span>
          </span>
        </div>
        <div class="list-item">
          <span class="list-title">承兑商（交易对象）: </span>
          <span class="list-value">
            <span> {{ detail["customerName"] }} </span>
            <span v-if="detail['customerMobile']">
              （{{ detail["customerMobile"] }}）
            </span>
          </span>
        </div>

        <div class="list-item" v-if="detail['transferNumber']">
          <span class="list-title">转账金额: </span>
          <span class="list-value">{{ detail["transferNumber"] }}</span>
        </div>

        <div class="list-item" v-if="detail['transferTime']">
          <span class="list-title">转账时间: </span>
          <span class="list-value">{{ detail["transferTime"] }}</span>
        </div>

        <div class="list-item">
          <span class="list-title">申诉时间: </span>
          <span class="list-value">{{ detail["appealTime"] }}</span>
        </div>
      </div>
    </Card>
  </div>
</template>

<style scoped>
.list {
}
.list-item {
  padding: 10px 0;
  display: flex;
}
.list-title {
  flex-basis: 200px;
  text-align: right;
  font-size: 15px;
  padding-right: 10px;
  color: #adabab;
}
.list-value {
  color: #444;
}
</style>
