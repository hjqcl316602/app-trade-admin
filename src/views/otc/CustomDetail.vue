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
      detail: {}, 
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
    }, 
  }
};
</script>

<template>
  <div class=""> 

    <Card>
      <p slot="title">
        申诉详情
      </p>
      <div class="list">
          <div class="list-item">
            <span class="list-title">订单号: </span>
            <span class="list-value">{{ detail['orderSn']}}</span>
          </div>

          <div class="list-item">
            <span class="list-title">交易类型: </span>
            <span class="list-value">{{　detail.advertiseType === 1 ? "充值" : "提现"　}}</span>
          </div>

          <div class="list-item">
            <span class="list-title">支付方式: </span>
            <span class="list-value">{{ detail['payMode']}}</span>
          </div>

          <div class="list-item">
            <span class="list-title">交易金额: </span>
            <span class="list-value">{{ detail['money']}}</span>
          </div>

          <div class="list-item">
            <span class="list-title">申诉者（用户）: </span>
            <span class="list-value">
              <span>
                {{ detail['subDealName'] }}
              </span>
              <span v-if="detail['subMobile']">
                （{{ detail['subMobile']}}）
              </span>
            </span>
          </div>
          <div class="list-item">
            <span class="list-title">承兑商（广告主）: </span>
            <span class="list-value">
              <span>
                {{ detail['memberName'] }}
              </span>
              <span v-if="detail['memberMobile']">
                （{{ detail['memberMobile']}}）
              </span>
            </span>
          </div>
          <div class="list-item">
            <span class="list-title">承兑商（交易对象）:  </span>
            <span class="list-value">
              <span>
                {{ detail['customerName'] }}
              </span>
              <span v-if="detail['customerMobile']">
                （{{ detail['customerMobile']}}）
              </span>
            </span>
          </div>

          <div class="list-item">
            <span class="list-title">申诉时间: </span>
            <span class="list-value">{{ detail['appealTime']}}</span>
          </div>

        </div>

    </Card>
  </div>
</template>

<style   scoped> 
.list{
  display: flex;
  flex-wrap: wrap;
}
.list-item{
  flex: none;
  width:25%;
  padding: 10px 0 ;
  display: flex;  
}
.list-title{ 
  font-size: 15px;
  color: #adabab
}
.list-value{
  color:#444
}
</style>