<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-01-22 18:05:47
 * @LastEditTime: 2019-09-05 09:47:49
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="memberDetail">
    <Row class="firstLine">
      <Card class="rightArea clearfix">
        <p slot="title" class="lineTitle">
          <Icon type="bookmark"></Icon> 基本信息
        </p>
        <div class="baseInfo">
          <Row>
            <Col span="6">
              <p>
                会员等级：<span style="color: #ec0909">{{
                  getlevel(memberInfo.memberLevel)
                }}</span>
              </p>
            </Col>
            <Col span="6">
              <p>
                会员状态：<span style="color: #2d8cf0">{{
                  !memberInfo.status ? "正常" : "禁用"
                }}</span>
              </p>
            </Col>
            <Col span="6">
              <p>
                会员昵称：<span>{{ memberInfo.username }}</span>
              </p>
            </Col>
            <Col span="6">
              <p>
                用户ID：<span>{{ memberInfo.id }}</span>
              </p>
            </Col>
          </Row>
          <Row>
            <Col span="6">
              <p>
                真实姓名：<span>{{ memberInfo.realName }}</span>
              </p>
            </Col>
            <Col span="6">
              <p>
                会员手机号：<span>{{ memberInfo.mobilePhone }}</span>
              </p>
            </Col>
            <Col span="6">
              <p>
                身份证号：<span>{{ memberInfo.idNumber }}</span>
              </p>
            </Col>
            <Col span="6">
              <p>
                邮箱：<span>{{ memberInfo.email }}</span>
              </p>
            </Col>
          </Row>
          <Row>
            <Col span="6">
              <p>
                注册时间：<span>{{ memberInfo.registrationTime }}</span>
              </p>
            </Col>
            <Col span="6">
              <p>
                最近登录时间：<span>{{ memberInfo.lastLoginTime }}</span>
              </p>
            </Col>
          </Row>
        </div>
      </Card>
    </Row>

    <Row class="secLine">
      <Card>
        <p class="lineTitle" slot="title">
          <Icon type="bookmark"></Icon>用户资产
        </p>

        <div class="tableWrapper">
          <Table :columns="assetColumns" :data="assetRows"></Table>
        </div>
        <template v-if="freezing.list.length > 0">
          <p class="lineTitle vi-text is-weight--bold">
            <Icon type="bookmark"></Icon>冻结记录
          </p>
          <div class="tableWrapper">
            <Table :columns="freezing.columns" :data="freezing.list"></Table>
          </div>
        </template>

        <Modal
          class="manualPay"
          width="400"
          v-model="ifManualPay"
          @on-ok="confrimPay"
        >
          <h3 class="header" slot="header">
            <Icon type="information-circled"></Icon>
            <span> 人工充币</span>
          </h3>
          <p>
            币种：<span>{{ payUnit }}</span>
          </p>
          <p>
            充值地址：<span>{{ payAddress }}</span>
          </p>
          <p>
            充值数量：<span><Input v-model="payAmount"></Input></span>
          </p>
        </Modal>
        <Modal
          class=""
          width="400"
          v-model="freezing.modal"
          @on-ok="setFreezing"
          @on-cancel="$Message.info('已取消！')"
        >
          <h3 class="header" slot="header">
            <Icon type="information-circled"></Icon>
            <span>冻结</span>
          </h3>
          <div class="vi-margin-bottom">
            <span>币种：</span>
            <span>{{ freezing.unit }}</span>
          </div>
          <div class="vi-margin-bottom vi-flex is-align-items--center">
            <span>数量：</span>
            <div class="vi-flex-item is-flex--1">
              <i-input
                v-model="freezing.number"
                placeholder="请输入冻结数量"
              ></i-input>
            </div>
          </div>
          <div class=" vi-margin-bottom vi-flex is-align-items--center">
            <span>理由：</span>
            <div class="vi-flex-item is-flex--1">
              <i-input
                type="textarea"
                :rows="4"
                v-model="freezing.remark"
                placeholder="请输入冻结理由"
              ></i-input>
            </div>
          </div>
        </Modal>
      </Card>
    </Row>

    <Row class="triLine">
      <Card>
        <p class="lineTitle" slot="title">
          <Icon type="bookmark"></Icon>交易记录
        </p>

        <Row class="functionWrapper">
          <div class="searchWrapper clearfix">
            <div class="poptip">
              <span>交易类型：</span>
              <Select v-model="filterSearch.type">
                <Option
                  v-for="(item, index) in typeArr"
                  :key="item"
                  :value="index == 13 ? ' ' : index"
                >
                  {{ item }}
                </Option>
              </Select>
            </div>
            <div class="poptip">
              <span>币种：</span>
              <Select v-model="filterSearch.symbol">
                <Option
                  v-for="(item, index) in allSymbol"
                  :key="item.unit"
                  :value="item.unit"
                >
                  {{ item.unit }}
                </Option>
              </Select>
            </div>

            <div class="poptip">
              <!-- :value="timeRange" -->
              <DatePicker
                type="daterange"
                @on-change="handelChange"
                placement="bottom-end"
                placeholder="请选择时间区间搜索"
              >
              </DatePicker>
            </div>

            <div class="btns">
              <Button type="info" size="small" @click="searchByFilter"
                >搜索</Button
              >
            </div>
          </div>
        </Row>

        <Row>
          <Table :columns="columnsList" :loading="ifLoading" :data="trade_data">
          </Table>
        </Row>

        <Row class="pageWrapper">
          <Page
            :total="totalNum"
            :current="currentPageIdx"
            @on-change="changePage"
            show-elevator
          >
          </Page>
        </Row>
      </Card>
    </Row>
  </div>
</template>

<script>
import {
  getCoinName,
  memberDetail,
  perTradeAll,
  manualPay,
  freezingWallet,
  releaseWallet,
  getLockList,
  lockWallet,
  unlockWallet,
  resetMemberAddr
} from "@/service/getData";
import { setStore, getStore, removeStore } from "@/config/storage";

export default {
  data() {
    return {
      currentPageIdx: 1,
      cbData: {},
      allSymbol: [],
      filterSearch: {
        pageNo: 1,
        pageSize: 10,
        memberId: "",
        symbol: "",
        type: "",
        startTime: "",
        endTime: ""
      },
      typeArr: [
        "充值",
        "提现",
        "转账",
        "币币交易",
        "法币买入",
        "法币卖出",
        "活动奖励",
        "推广奖励",
        "分红",
        "投票",
        "人工充值",
        "配对",
        "佣金奖励",
        "全部"
      ],
      memberInfo: {},
      ifLoading: true,
      payAmount: null,
      payAddress: null,
      payUnit: null,
      ifManualPay: false,
      userID: null,
      totalNum: null,
      columnsList: [
        {
          title: "会员ID",
          key: "memberId"
        },
        {
          title: "交易类型",
          render: (h, obj) => {
            let type = obj.row.type;
            return h("span", {}, this.typeArr[type]);
          }
        },
        {
          title: "交易金额",
          render: (h, obj) => {
            let amount = obj.row.amount;
            let symbol = obj.row.symbol;
            return h("span", {}, amount + " " + symbol);
          }
        },
        {
          title: "交易手续费",
          key: "fee"
        },
        {
          title: "交易时间",
          key: "createTime"
        }
      ],
      trade_data: [],
      assetColumns: [
        {
          title: "币种",
          width: 100,
          render: (h, param) => {
            return h("span", {}, param.row.coin.unit);
          }
        },
        {
          title: "可用",
          key: "balance",
          render: (h, param) => {
            return h(
              "span",
              this.numToFixed(
                param.row.balance || 0,
                param.row.coin.withdrawScale
              )
            );
          }
        },
        {
          title: "冻结",
          // width: 100,
          key: "frozenBalance",
          render: (h, param) => {
            return h(
              "span",
              this.numToFixed(
                param.row.frozenBalance || 0,
                param.row.coin.withdrawScale
              )
            );
          }
        },
        {
          title: "待释放资产",
          // width: 100,
          key: "toReleased",
          render: (h, param) => {
            return h(
              "span",
              this.numToFixed(
                param.row.toReleased || 0,
                param.row.coin.withdrawScale
              )
            );
          }
        },
        {
          title: "地址",
          key: "address"
        },
        {
          title: "操作",
          width: 300,
          render: (h, param) => {
            let btnTxt = "";
            let btnType = "";
            if (!param.row.isLock) {
              btnTxt = "锁定";
              btnType = "error";
            } else {
              btnTxt = "解锁";
              btnType = "success";
            }
            return h("div", {}, [
              h(
                "Button",
                {
                  props: {
                    type: "warning",
                    size: "small"
                  },
                  style: {
                    marginRight: "8px"
                  },
                  on: {
                    click: () => {
                      this.freezing.modal = true;
                      let { row } = param;
                      this.freezing.id = row.id;
                      this.freezing.unit = row.coin.unit;
                    }
                  }
                },
                "冻结"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      this.showManualPay(param.row);
                    }
                  },
                  style: {
                    marginRight: "8px"
                  }
                },
                "充币"
              ),
              h(
                "Button",
                {
                  props: {
                    type: btnType,
                    size: "small"
                  },
                  on: {
                    click: () => {
                      if (!param.row.isLock) {
                        this.lockWallet(param.row.coin.unit);
                      } else {
                        this.unlockWallet(param.row.coin.unit);
                      }
                    }
                  },
                  style: {
                    marginRight: "8px"
                  }
                },
                btnTxt
              ),
              h(
                "Button",
                {
                  props: {
                    type: "info",
                    size: "small"
                  },
                  on: {
                    click: () => {
                      resetMemberAddr({
                        unit: param.row.coin.unit,
                        uid: this.userID
                      })
                        .then(res => {
                          if (!res.code) {
                            this.$Message.success(res.message);
                          } else this.$Message.error(res.message);
                          this.refreshPage();
                        })
                        .catch(err => console.log(err));
                    }
                  }
                },
                "重置地址"
              )
            ]);
          }
        }
      ],
      assetRows: [],
      freezing: {
        columns: [
          {
            title: "编号",
            key: "id"
          },
          {
            title: "币种",
            key: "coinId"
          },
          {
            title: "数量",
            key: "frozen"
          },
          {
            title: "用户编号",
            key: "memberId"
          },
          {
            title: "冻结时间",
            key: "created"
          },
          {
            title: "冻结理由",
            key: "remark"
          },
          {
            title: "操作",
            render: (h, param) => {
              return h(
                "Button",
                {
                  props: {
                    type: "error"
                  },
                  on: {
                    click: () => {
                      let { id } = param.row;
                      this.releaseWallet({ id });
                    }
                  }
                },
                "解冻"
              );
            }
          }
        ],
        list: [],
        modal: false,
        id: "",
        unit: "",
        number: "",
        remark: ""
      }
    };
  },
  methods: {
    getLockList() {
      let id = getStore("memberID");
      getLockList({ id }).then(({ code, data, message }) => {
        //console.log(res)
        if (code === 0) {
          this.freezing.list = data;
          this.$Message.success(message);
        } else this.$Message.error(message);
      });
    },
    setFreezing() {
      if (isNaN(this.freezing.number) || this.freezing.number <= 0)
        return this.$Message.error("请输入有效的数量");
      if (!this.freezing.remark) return this.$Message.error("请输入冻结理由");
      let { id, unit, number, remark } = this.freezing;
      freezingWallet({ id: getStore("memberID"), unit, number, remark }).then(
        ({ code, message }) => {
          if (code === 0) {
            this.$Message.success(message);
            this.refreshPage();
          } else this.$Message.error(message);
        }
      );
    },
    releaseWallet({ id }) {
      this.$Modal.confirm({
        title: "解冻",
        content: "是否确认解冻？",
        onOk: () => {
          releaseWallet({ id }).then(({ code, message }) => {
            if (code === 0) {
              this.$Message.success(message);
              this.refreshPage();
            } else this.$Message.error(message);
          });
        }
      });
    },
    handelChange(timeRange) {
      if (timeRange[0]) {
        this.filterSearch.startTime = timeRange[0] + " 00:00:00";
        this.filterSearch.endTime = timeRange[1] + " 00:00:00";
      } else {
        this.filterSearch.startTime = "";
        this.filterSearch.endTime = "";
      }
    },
    getlevel(str) {
      let memberLevelTxt = "";
      if (!str) memberLevelTxt = "普通会员";
      else if (str === 1) memberLevelTxt = "实名";
      else if (str === 2) memberLevelTxt = "认证";
      return memberLevelTxt;
    },
    searchByFilter() {
      this.currentPageIdx = 1;
      this.filterSearch.pageNo = 1;
      this.personRecode(this.filterSearch);
    },
    confrimPay() {
      let subObj = {
        unit: this.payUnit,
        uid: this.userID,
        amount: this.payAmount
      };

      manualPay(subObj)
        .then(res => {
          if (!res.code) {
            this.$Message.success(res.message);
            let obj = {
              memberId: getStore("memberID"),
              pageNo: 1,
              pageSize: 10
            };

            this.personRecode(obj);
          } else this.$Message.error(res.message);
          this.payAmount = null;
        })
        .catch(err => {
          console.log(err);
        });
    },
    lockWallet(unit) {
      lockWallet({ uid: this.userID, unit: unit }).then(res => {
        if (res.code == 0) {
          this.$Message.success(res.message);
          this.refreshPage();
        } else this.$Message.error(res.message);
      });
    },
    unlockWallet(unit) {
      unlockWallet({ uid: this.userID, unit: unit }).then(res => {
        if (res.code == 0) {
          this.$Message.success(res.message);
          this.refreshPage();
        } else this.$Message.error(res.message);
      });
    },
    showManualPay(wallet) {
      this.ifManualPay = true;
      this.payAddress = wallet.address;
      this.payUnit = wallet.coin.unit;
    },
    changePage(pageIndex) {
      this.filterSearch.pageNo = pageIndex;
      this.currentPageIdx = pageIndex;
      this.personRecode(this.filterSearch);
    },
    personRecode(obj) {
      this.ifLoading = true;
      console.log(obj);
      //个人交易记录
      perTradeAll(obj).then(res => {
        this.ifLoading = false;
        if (!res.code) {
          this.totalNum = (res.data && res.data.totalElements) || 1;
          this.trade_data = (res.data && res.data.content) || [];
        }
      });
    },
    refreshPage() {
      memberDetail({ id: getStore("memberID") }).then(res => {
        if (!res.code) {
          this.memberInfo = res.data.member;
          this.assetRows = res.data.list;
          this.filterSearch.memberId = getStore("memberID");
          this.userID = getStore("memberID");
          this.personRecode(this.filterSearch);
        } else this.$Message.err("个人资料获取失败!");
      });
      this.getLockList();
    }
  },
  created() {
    getCoinName()
      .then(res => {
        if (!res.code) {
          this.allSymbol = res.data;
          // this.allSymbol.push({ name: '', unit: '全部' })
        } else this.$Message.error(res.message);
      })
      .catch(err => {
        console.log(err);
      });
    this.refreshPage();
  }
};
</script>

<style lang="less" scoped>
@borderBottom: 1px solid #e2e2e2;
@thBg: rgb(228, 228, 228);
@tdthBorder: 1px solid rgb(240, 240, 240);

.firstLine,
.secLine,
.triLine {
  margin-bottom: 30px;
}

.manualPay {
  .header {
    color: #5cadff;
    text-align: center;
  }
  p {
    margin: 10px 0;
    color: #5cadff;
    font-weight: 700;
    span {
      display: inline-block;
      width: 300px;
      color: #333;
    }
  }
}

.memberDetail {
  .tableWrapper {
    margin-bottom: 30px;
  }
  padding: 10px 35px;
  .firstLine {
    table {
      th,
      td {
        padding: 3px 6px;
      }
    }
    border-bottom: @borderBottom;
    .leftArea {
      // float: left;
      padding: 10px;
      width: 120px;
      img {
        display: inline-block;
        width: 100%;
        height: 70px;
        background: #03a9f4;
      }
      .level {
        margin: auto;
        width: 65px;
        padding: 2px;
        text-align: center;
        color: #fff;
        border-radius: 10px;
        background: #f44336;
      }

      .rightArea {
        // float: left;
        table {
          font-size: 14px;
          background-color: @thBg;
          th {
            padding: 0 40px;
          }
          td {
            padding: 5px 40px;
          }
        }
      }
    }
    .bottomLine {
      table {
        font-size: 15px;
        th {
          padding: 5px 15px;
          border: @tdthBorder;
          background: @thBg;
        }
        td {
          padding: 5px 15px;
          border: @tdthBorder;
          background: #fff;
        }
      }
      .leftArea {
        float: left;
      }
      .rightArea {
        padding-right: 100px;
        float: right;
      }
    }
  }
  .secLine {
    border-bottom: @borderBottom;

    .tableWrapper {
      td {
        padding: 5px;
        border: @tdthBorder;
      }
      td.name {
        width: 100px;
        background: @thBg;
      }
      td.value {
        width: 480px;
        background: #fff;
      }
    }
  }

  .triLine {
    .tableWrapper {
      text-align: right;
      .ivu-page {
        padding: 25px;
      }
    }
  }
  .lineTitle {
    padding: 20px;
    padding-left: 0;
    font-size: 14px;
    .ivu-icon-bookmark {
      margin-right: 5px;
      font-size: 20px;
      vertical-align: middle;
    }
  }
}
</style>
