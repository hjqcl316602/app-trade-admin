<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-04-15 14:23:57
 * @LastEditTime: 2019-09-05 16:49:15
 * @LastEditors: Please set LastEditors
 -->

<script>
import "./index.css";
import { BASEURL } from "@/service/http";
import Cookies from "js-cookie";
import {
  getWorkBench,
  changeWorkStatus,
  getAppealDetail,
  getChatHistory,
  closeAppeal,
  setChatStatus
} from "@/service/custom";
import { stringer } from "store-es";

import { uploadImage } from "@/service/common";

var Stomp = require("stompjs");
var SockJS = require("sockjs-client");

export default {
  name: "HandlerCustomManage",
  data() {
    return {
      basis: {
        appId: "",
        accessToken: "",
        userId: "",
        userName: ""
      },

      order: {
        list: [],
        activeIndex: -1
      },
      role: {
        list: [],
        activeIndex: -1
      },
      work: {
        status: 0
      },

      chat: {
        list: [],
        message: "",
        pic: "",
        loading: false,
        pageSize: 20,
        connected: false,
        push: {
          finished: true
        },
        picture: {
          show: false,
          url: ""
        }
      },

      message: {},

      detail: {}
    };
  },
  computed: {},

  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.getBasisMessage();
      this.getWorkBench();
      this.createSocket();
    },
    /**
     * 获取基础信息
     */
    getBasisMessage() {
      let local = localStorage.getItem("app/order/custom/chat/message");
      let localFormat = local ? JSON.parse(local) : {};
      this.basis.appId = localFormat.appId;
      this.basis.accessToken = localFormat.accessToken;
      let userInfoCookies = Cookies.get("userInfo");
      let userInfoFormat = userInfoCookies ? JSON.parse(userInfoCookies) : {};
      this.basis.userId = userInfoFormat["id"];
      this.basis.userName = userInfoFormat["username"];
    },
    /**
     * 获取工作台详情
     */
    getWorkBench(history = false) {
      return new Promise(resolve => {
        getWorkBench()
          .then(res => {
            this.message = res;
            this.work.status = res.workStatus;

            // 获取数据改变之前的orderActive 的 orderId

            let currentOrderActive = this.getCurOrderAcitve();
            let historyOrderId =
              currentOrderActive && currentOrderActive["orderId"];

            this.order.list = this.getOrderList(res.list);
            this.detail = res.detail;

            if (this.order.list.length > 0) {
              let historyOrderIdIndex = this.order.list.findIndex(item => {
                return item["orderId"] == historyOrderId;
              });
              if (history) {
                this.order.activeIndex =
                  historyOrderIdIndex > -1 ? historyOrderIdIndex : 0;
              } else {
                this.order.activeIndex = 0;
                this.role.activeIndex = -1;
              }

              this.getAppealDetail();
            }
            resolve(res.list);
          })
          .catch(err => {
            this.$Message.error("获取申诉工作台详情失败！");
          });
      });
    },
    /**
     * 整理获取申诉订单列表
     */
    getOrderList(list) {
      let orderList = [...list];
      orderList.map(item => {
        item["cnt"] = item["cdUnreadCnt"] + item["khUnreadCnt"];
        //console.log(item.cnt);
      });
      return orderList;
    },

    /**
     * 获取单个申诉订单详情
     */
    getAppealDetail() {
      return new Promise(resolve => {
        let currentOrderActive = this.getCurOrderAcitve();
        getAppealDetail({
          orderId: currentOrderActive["orderId"]
        })
          .then(res => {
            //console.log(res);
            this.detail = res;
            this.role.list = this.getRoleList(this.detail);

            // 判断其未读数 先显示大于0的 暂时不默认打开
            // let index = this.role.list.findIndex(item => {
            //   return !!item["cnt"];
            // });
            // console.log(index);
            // this.role.activeIndex = index > -1 ? index : 0;
            // this.getChatHistory();
          })
          .catch(e => {
            this.$Message.error("获取申诉订单详情失败！");
          });
      });
    },

    /**
     * 获取角色详情
     */
    getRoleList(detail) {
      let roles = [];

      /**
       * uidToType 接收者的类型
       * uidFromType 发送者的类型
       * toTypeHistory 获取历史记录的 toType值即 广告主0 和 用户1
       */

      roles.push({
        userId: detail["memberId"],
        label: "承兑商-广告主",
        userName: detail["memberName"],
        mobile: detail["memberMobile"],
        cnt: detail["cdUnreadCnt"],
        uidToType: 3,
        uidFromType: 4,
        uidTo: detail["memberId"],
        toTypeHistory: 0
      });
      roles.push({
        userId: detail["subMemId"],
        label: "申诉者-用户",
        userName: detail["subDealName"]
          ? detail["subDealName"]
          : detail["subMemId"],
        mobile: detail["subMobile"],
        cnt: detail["khUnreadCnt"],
        uidToType: 2,
        uidFromType: 1,
        uidTo: detail["customerId"] + "_" + detail["subMemId"],
        toTypeHistory: 1
      });
      return roles;
    },

    /**
     * 获取历史聊天记录
     */
    getChatHistory(more) {
      if (this.chat.loading) {
        //return this.$Message.error("正在获取历史聊天记录！");
      }
      this.chat.loading = true;

      let currentOrderActive = this.getCurOrderAcitve();
      let currentRoleActive = this.getCurRoleAcitve();

      let params = {
        orderId: currentOrderActive["orderId"],
        appId: this.basis["appId"],
        accessToken: this.basis["accessToken"],
        toType: currentRoleActive["toTypeHistory"] // 0 -> 承兑商 1 -> 用户
      };

      if (more) {
        params.minChatId = this.chat.list[0]["chatId"];
      } else {
        params.minChatId = 0;
      }

      getChatHistory(params)
        .then(res => {
          let list = res.reverse();
          console.table(list);

          this.chat.push.finished = this.chat.pageSize > list.length;

          if (more) {
            this.chat.list = [...list, ...this.chat.list];
          } else {
            this.chat.list = list;
            // 计算小红点的数量
            let cancelChatCunt = (() => {
              let currentRoleCunt = Number(this.getCurRoleAcitve().cnt);
              let currentOrderCunt = Number(this.getCurOrderAcitve().cnt);
              this.role.list[this.role.activeIndex]["cnt"] = 0;
              this.order.list[this.order.activeIndex]["cnt"] =
                currentOrderCunt - currentRoleCunt;
            })();

            this.scrollToBottom();
          }

          this.chat.loading = false;
        })
        .catch(err => {
          this.chat.loading = false;
          this.$Message.error("获取聊天记录失败！");
        });
    },
    /**
     * 关闭申诉订单
     */
    closeAppeal() {
      Promise.resolve({
        then: resolve => {
          this.$Modal.confirm({
            title: "确认提示",
            content: `是否确认关闭申诉订单 ${
              this.order.list[this.order.activeIndex]["orderSn"]
            }？`,
            onOk: () => {
              resolve();
            }
          });
        }
      }).then(res => {
        closeAppeal({
          orderId: this.order.list[this.order.activeIndex]["orderId"]
        })
          .then(res => {
            this.$Message.success("关闭申诉订单成功！");
            this.getWorkBench();
          })
          .catch(err => {
            this.$Message.error("关闭申诉订单失败！");
          });
      });
    },

    /**
     * 创建socket
     */
    createSocket() {
      this.closeSocket();

      let url = BASEURL + "chat/socket/chat-webSocket";

      //console.log(url);

      let socket = new SockJS(url);

      this._socket = Stomp.over(socket);

      this._socket.connect(
        {},
        frame => {
          this.$Notice.success({
            top: 50,
            duration: 5,
            title: "提示",
            desc: "聊天室连接成功，可以进行聊天了~"
          });
          this.chat.connected = true;
          this.getSockMessage();
        },
        frame => {
          this.chat.connected = false;
          this.$Notice.error({
            top: 50,
            duration: 5,
            title: "提示",
            desc: "聊天室连接失败，请重试！"
          });
        }
      );
    },
    /**
     * 关闭实时通信
     */
    closeSocket() {
      if (this._socket) {
        this._socket.disconnect();
        this._socket = null;
      }
    },
    /**
     * 收到socket信息
     */
    getSockMessage() {
      this._socket.subscribe(
        "/topic/chatMsg/kf/" + this.basis.userId,
        response => {
          let message = JSON.parse(response.body);
          console.log("get-message");
          console.log(message);

          // 过滤出是该位置可能收到的信息
          // 否则会影响会员交流模块的信息

          if (message.uidType != 1 && message.uidType != 4) return;

          // 判断当前数据和当前选择的订单和角色进行匹配

          let curOrderActive = this.getCurOrderAcitve();
          if (
            curOrderActive &&
            message["orderSn"] == curOrderActive["orderSn"]
          ) {
            let curRoleActive = this.getCurRoleAcitve();
            if (
              curRoleActive &&
              message["uidType"] == curRoleActive["uidFromType"]
            ) {
              this.getChatHistory(); // 如果是当前聊天对象，则改变聊天信息的可读性,通过再次获取历史记录信息即可
            } else {
              this.role.list.forEach(item => {
                if (item["uidFromType"] == message["uidType"]) {
                  item["cnt"]++;
                }
              });
              this.order.list.forEach(item => {
                if (item["orderSn"] == message["orderSn"]) {
                  item["cnt"]++;
                }
              });
            }
          } else {
            this.handlerOrderList(message);
          }
        }
      );
    },
    /**
     * 处理订单
     * 新订单 - 追加
     * 旧订单 - 计算未读数
     */
    handlerOrderList(message) {
      //判断是否存在该订单
      let isExit = (() => {
        let arr = this.order.list.filter(item => {
          return item["orderId"] === message["orderId"];
        });
        return arr.length > 0;
      })();

      if (isExit) {
        this.order.list.forEach(item => {
          if (item["orderSn"] == message["orderSn"]) {
            item["cnt"]++;
          }
        });
      } else {
        // 如果不存在订单，则重新刷新工作台，并且不改变之前的激活订单
        this.getWorkBench(true);
      }
    },

    /**
     * 发送socket信息
     */
    sendSocketMessage(params) {
      let roleItem = this.getCurRoleAcitve();
      let orderItem = this.getCurOrderAcitve();

      let sendParams = {
        uidTo: roleItem["uidTo"],
        uidFrom: this.basis.userId,
        orderId: orderItem["orderId"],
        orderSn: orderItem["orderSn"],
        nameFrom: this.basis.userName,
        nameTo: roleItem["userName"],
        content: params.content,
        type: params.type,
        appId: this.basis.appId,
        accessToken: this.basis.accessToken,
        uidType: roleItem["uidToType"]
      };
      console.log("send");
      console.log(sendParams);

      this.chat.list.push(sendParams);

      this.scrollToBottom();

      this._socket.send("/app/message/nologin", {}, JSON.stringify(sendParams));
    },

    /**
     * 发送文本信息
     */
    sendMessage() {
      // console.log(stringer);
      if (!this.chat.connected) {
        this.$Message.error("当前聊天室连接未成功，请重试！");
        return;
      }
      if (this.order.activeIndex === -1) {
        this.$Message.error("当前没有选择申诉订单！");
        return;
      }
      if (this.role.activeIndex === -1) {
        this.$Message.error("当前没有选择聊天对象！");
        return;
      }

      if (this.chat.message === "") {
        this.$Message.error("聊天内容不能为空！");
        return;
      }
      if (stringer.check.space.whole(this.chat.message)) {
        this.$Message.error("聊天内容不能全部为空字符串！");
        return;
      }

      if (this.chat.message.length > 150) {
        this.$Message.error("聊天内容长度不能超过150");
        return;
      }

      this.sendSocketMessage({ content: this.chat.message, type: 0 });
      this.chat.message = "";
    },

    /**
     * 发送图片信息
     */
    sendPic() {
      if (!this.chat.connected) {
        this.$Message.error("当前聊天室连接未成功，请重试！");
        return;
      }
      if (this.order.activeIndex === -1) {
        this.$Message.error("当前没有选择申诉订单！");
        return;
      }
      if (this.role.activeIndex === -1) {
        this.$Message.error("当前没有选择聊天对象！");
        return;
      }

      if (this.chat.pic === "") {
        this.$Message.error("图片发送失败，请重新尝试！");
        return;
      }

      this.sendSocketMessage({ content: this.chat.pic, type: 1 });
      this.chat.pic = "";
    },
    /**
     * 让滚动条始终在底部
     */
    scrollToBottom() {
      setTimeout(() => {
        var div = this.$refs["chat"];
        div && (div.scrollTop = div.scrollHeight);
      }, 300);
    },

    /**
     * 获取当前选中的申诉订单
     */
    getCurOrderAcitve() {
      return this.order.list[this.order.activeIndex];
    },

    /**
     * 获取当前选中的角色
     */
    getCurRoleAcitve() {
      return this.role.list[this.role.activeIndex];
    },

    /**
     * 选择申诉订单
     */
    changeOrder(item, index) {
      if (this.order.activeIndex == index) return;
      this.order.activeIndex = index;
      this.role.activeIndex = -1;
      this.chat.list = [];
      this.chat.push.finished = true;
      this.getAppealDetail(this.order.list[this.order.activeIndex]["orderId"]);
    },
    /**
     * 选择角色
     */
    changeRole: function(item, index) {
      if (this.role.activeIndex == index) return;
      this.role.activeIndex = index;
      this.getChatHistory();
    },
    /**
     * 改变工作状态
     */
    changeWorkStatus: function() {
      Promise.resolve({
        then: resolve => {
          this.$Modal.confirm({
            title: "确认提示",
            content: `是否确认${this.getWorkStatus(this.work.status)}工作？`,
            onOk: () => {
              resolve();
            }
          });
        }
      }).then(res => {
        changeWorkStatus({ status: this.work.status === 1 ? 0 : 1 })
          .then(res => {
            this.$Message.success(
              `切换工作状态为${this.getWorkStatus(this.work.status)}成功！`
            );
            this.work.status = this.work.status === 1 ? 0 : 1;
          })
          .catch(err => {
            this.$Message.error(
              `切换工作状态为${this.getWorkStatus(this.work.status)}失败！`
            );
          });
      });

      //this.work.status = !this.work.status;
    },
    /**
     * 选择图片，并发送图片消息
     */
    selectPic: function selectPic(e) {
      let file = e.target.files[0];
      let formData = new FormData();
      formData.append("file", file);
      uploadImage(formData)
        .then(data => {
          if (data["code"] === "000") {
            this.chat.pic = data["data"]["url"];
            this.sendPic();
          } else {
            this.$Message.error("发送图片失败！");
          }
        })
        .catch(err => {
          this.$Message.error("发送图片失败！");
        });
    },
    /**
     * 放大图片
     */
    showPicture(url) {
      this.chat.picture.url = url;
      this.chat.picture.show = true;
    },

    /**
     * 枚举工作状态
     * @param {status} status
     * @param {isBefore} isBefore
     */

    getWorkStatus: function(status, isBefore = true) {
      let statuses = [
        {
          text: "结束",
          value: 0
        },
        {
          text: "开始",
          value: 1
        }
      ];
      return isBefore
        ? status === 1
          ? "结束"
          : "开始"
        : status === 1
        ? "开始"
        : "结束";
    },

    /**
     * 枚举订单状态
     * @param {status} status
     */
    getOrderStatus: function getOrderStatus(status) {
      return ["未申述", "已申诉", "处理中", "已关闭"][status];
    },

    /**
     * 枚举订单类型
     * @param {type} type
     */
    getOrderType: function getOrderType(type) {
      return type === 1 ? "提现" : "充值";
    },
    /**
     * 判断角色是否是自己
     */

    isMine: function isMine(item) {
      let types = [
        {
          text: "presonToKf",
          value: 1
        },
        {
          text: "kfToPerson",
          value: 2
        },
        {
          text: "kfToCd",
          value: 3
        },
        {
          text: "cdTokf",
          value: 4
        },
        {
          text: "cdAndKf",
          value: 5
        },
        {
          text: "cdAndcd",
          value: 6
        }
      ];
      return item["uidType"] == 2 || item["uidType"] == 3;
    }
  },
  beforeDestroy() {
    this.closeSocket();
  }
};
</script>

<template>
  <div class="vv-custom">
    <Modal v-model="chat.picture.show">
      <div class="" style="text-align:center">
        <img :src="chat.picture.url" alt="" />
      </div>
      <div slot="footer"></div>
    </Modal>
    <Card>
      <p slot="title">
        申诉工作台
        <Button type="primary" size="small" @click="init">
          <Icon type="refresh"></Icon> 刷新
        </Button>
      </p>
      <div class="vv-custom--body">
        <div class="vv-custom--header">
          <div style="flex:2">
            <Button
              :type="work.status === 1 ? 'default' : 'primary'"
              size="large"
              long
              @click="changeWorkStatus"
            >
              {{ getWorkStatus(work.status) }}工作
            </Button>
          </div>
          <div class="vv-custom--info">
            <span class="vui-text--small vui-margin-bottom--small">
              未处理订单
            </span>
            <span class="vui-text--primary vui-text--bold"
              >{{ message["undoAppealCnt"] }}
            </span>
          </div>
          <div class="vv-custom--info">
            <span class="vui-text--small vui-margin-bottom--small">
              正在处理订单
            </span>
            <span class="vui-text--primary vui-text--bold">
              {{ message["doingAppealCnt"] }}
            </span>
          </div>
          <div class="vv-custom--info">
            <span class="vui-text--small vui-margin-bottom--small">
              今日已处理订单
            </span>
            <span class="vui-text--primary vui-text--bold">
              {{ message["todayAppealCnt"] }}
            </span>
          </div>
          <div class="vv-custom--info">
            <span class="vui-text--small vui-margin-bottom--small">
              正在处理订单（我的）
            </span>
            <span class="vui-text--primary vui-text--bold">
              {{ message["myDoingAppealCnt"] }}
            </span>
          </div>
          <div class="vv-custom--info">
            <span class="vui-text--small vui-margin-bottom--small">
              今日已处理订单（我的）
            </span>
            <span class="vui-text--primary vui-text--bold">
              {{ message["myTodayAppealCnt"] }}
            </span>
          </div>
        </div>

        <div class="vv-custom--nav" v-if="order.list.length > 0">
          <div
            class="vv-custom--nav-item vui-grid vui-justify-content--space-between"
            v-for="(item, index) in order.list"
            :key="index"
            :class="{ 'is-active': index == order.activeIndex }"
            @click="changeOrder(item, index)"
          >
            <p>{{ item["orderSn"] }}</p>
            <template v-if="item['cnt'] !== 0">
              <!-- <mui-tag :label="item['cnt']"></mui-tag> -->
              <div class="vui-tag">
                <div class="vui-tag--label">{{ item["cnt"] }}</div>
              </div>
            </template>
          </div>
        </div>

        <div class="vv-custom--info" v-if="order.list.length > 0">
          <div class="vv-custom--role">
            <div
              class="vv-custom--role-item"
              :class="{ 'is-active': index == role.activeIndex }"
              v-for="(item, index) in role.list"
              :key="index"
              @click="changeRole(item, index)"
            >
              <div class="vui-grid vui-justify-content--space-between">
                <p>{{ item["label"] }}</p>
                <template v-if="item['cnt'] !== 0">
                  <mui-tag :label="item['cnt']"></mui-tag>
                </template>
              </div>
              <p style="text-indent:20px ;font-size:12px;">
                {{ item["userName"] }}
              </p>
            </div>
          </div>

          <div class="vv-custom--info-item">
            <p>交易方式</p>
            <p style="text-indent:20px ;font-size:12px;">
              {{ detail["payMode"] }}
            </p>
          </div>
          <div class="vv-custom--info-item">
            <p>交易金额</p>
            <p style="text-indent:20px ;font-size:12px;">
              ￥ {{ detail["money"] }}
            </p>
          </div>
          <div class="vv-custom--info-item">
            <p>交易类型</p>
            <p style="text-indent:20px ;font-size:12px;">
              {{ getOrderType(detail["advertiseType"]) }}
            </p>
          </div>

          <div class="vv-custom--info-item">
            <p>状态</p>
            <p style="text-indent:20px ;font-size:12px;">
              交易：{{
                ["已取消", "未付款", "已付款", "已完成"][detail["orderStatus"]]
              }}
            </p>
            <p style="text-indent:20px ;font-size:12px;">
              申诉：{{ getOrderStatus(detail["khStatus"]) }}
            </p>
          </div>
          <div
            class="vv-custom--info-item"
            v-if="detail['transferNumber'] || detail['transferTime']"
          >
            <p>转账</p>
            <p style="text-indent:20px ;font-size:12px;">
              金额：{{ detail["transferNumber"] }}
            </p>
            <p style="text-indent:20px ;font-size:12px;">
              时间：{{ detail["transferTime"] }}
            </p>
          </div>

          <div class="vv-custom--info-item">
            <p>时间</p>
            <p style="text-indent:20px ;font-size:12px;">
              申诉：{{ detail["appealTime"] }}
            </p>
            <p
              style="font-size:12px;text-indent:20px"
              v-if="!!detail['cancelTime']"
            >
              取消：{{ detail["cancelTime"] }}
            </p>
            <p
              style="font-size:12px;text-indent:20px"
              v-if="!!detail['releaseTime']"
            >
              完成：{{ detail["releaseTime"] }}
            </p>
          </div>

          <div style="padding:0 10px">
            <Button size="large" long @click="closeAppeal()">
              关闭申述
            </Button>
          </div>
        </div>

        <div class="vv-custom--chat" v-if="order.list.length > 0">
          <div class="chat" ref="chat">
            <div class="chat-body">
              <div class="chat-more" v-if="!chat.push.finished">
                <span @click="getChatHistory(true)">加载更多</span>
              </div>
              <div
                class="chat-item"
                v-for="(item, i) in chat.list"
                :key="i"
                :class="{ 'is-left': !isMine(item), 'is-right': isMine(item) }"
              >
                <template v-if="!isMine(item)">
                  <div class="chat-head">
                    <div class="chat-head-inner vc-flex--center">
                      <span class="chat-name">{{
                        item["nameFrom"] ? item["nameFrom"].split("")[0] : ""
                      }}</span>
                      <!-- {{ item['nameFrom'] ? item['nameFrom'].split('')[0] : '' }} -->
                    </div>
                  </div>

                  <div>
                    <div class="chat-name-detail">
                      <span>{{ item["nameFrom"] }}</span>
                    </div>

                    <div class="chat-content">
                      <div>
                        <div v-if="item['type'] === 0">
                          <span class="chat-info">{{ item["content"] }}</span>
                        </div>
                        <div
                          v-if="item['type'] === 1"
                          @click="showPicture(item['content'])"
                        >
                          <img
                            :src="item['content']"
                            alt=""
                            style="max-width:200px;max-height:200px"
                          />
                        </div>
                      </div>
                      <i class="chat-point"></i>
                    </div>
                    <div class="chat-time" v-if="item['sendTimeStr']">
                      {{ item["sendTimeStr"] }}
                    </div>
                  </div>
                </template>

                <template v-if="isMine(item)">
                  <div style="margin-top:20px">
                    <div class="chat-name-detail" v-if="false">
                      客服
                    </div>

                    <div class="chat-content">
                      <div>
                        <div v-if="item['type'] === 0">
                          <span class="chat-info">{{ item["content"] }}</span>
                        </div>
                        <div
                          v-if="item['type'] === 1"
                          @click="showPicture(item['content'])"
                        >
                          <img
                            :src="item['content']"
                            alt=""
                            style="max-width:200px;max-height:200px"
                          />
                        </div>
                      </div>
                      <i class="chat-point"></i>
                    </div>
                    <div class="chat-time" v-if="item['sendTimeStr']">
                      {{ item["sendTimeStr"] }}
                    </div>
                  </div>
                  <div class="chat-head">
                    <div class="chat-head-inner vc-flex--center">
                      <span class="chat-name">我</span>
                      <!-- {{ item['nameFrom'] ? item['nameFrom'].split('')[0] : '' }} -->
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </div>
          <div class="chat-send">
            <label for="file" class="upload">
              <Icon type="image" size="36"></Icon>
              <input type="file" id="file" @change="selectPic" />
            </label>

            <div class="chat-send__input">
              <Input
                v-model="chat.message"
                size="large"
                @keyup.enter.native="sendMessage"
                placeholder="输入聊天内容 按回车键可发送"
              >
              </Input>
            </div>
            <Button type="primary" @click="sendMessage">发送</Button>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<style>
</style>