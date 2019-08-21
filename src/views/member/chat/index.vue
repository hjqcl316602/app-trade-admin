
<script>
import "./index.css";
import { BASEURL } from "@/service/http";
import Cookies from "js-cookie";
import { getChatHistoryKfAndCd, getMemberChat } from "@/service/custom";

import { uploadImage } from "@/service/common";
import { memberManage } from "@/service/getData";

var Stomp = require("stompjs");
var SockJS = require("sockjs-client");

//import userList from "./userList.js";
//import chatList from "./chatList.js";

export default {
  name: "member-chat",
  data() {
    return {
      basis: {
        appId: "",
        accessToken: "",
        userId: "",
        userName: ""
      },

      user: {
        query: "",
        list: [],
        activeIndex: null,
        pageSize: 10,
        pageNo: 1,
        loading: false,
        push: {
          finished: true
        }
      },

      member: {
        list: [],
        activeIndex: null
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
      }
    };
  },
  computed: {},

  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.getBasisMessage();
      this.createSocket();
      this.getUserList();
      this.getMemberChat();
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
     * 获取会员列列表
     */
    getUserList(more = false) {
      if (this.user.loading) return;
      this.user.loading = true;
      if (more) {
        this.user.pageNo++;
      } else {
        this.user.pageNo = 1;
      }
      let params = {
        account: this.user.query,
        commonStatus: 0,
        pageSize: this.user.pageSize,
        pageNo: this.user.pageNo
      };

      memberManage(params)
        .then(res => {
          this.user.loading = false;
          if (res.code === 0) {
            let list = res["data"]["content"];
            this.user.push.finished = this.user.pageSize > list.length;
            if (more) {
              this.user.list = [...this.user.list, ...list];
            } else {
              this.user.list = list;
            }
            console.log(this.user.list);
          } else {
            this.user.pageNo--;
            this.$Message.error("获取聊会员列表失败！");
          }
        })
        .catch(err => {
          this.user.loading = false;
          this.user.pageNo--;
          this.$Message.error("获取会员列表失败！");
        });
    },
    /**
     * 获取聊天记录
     */
    getMemberChat() {
      getMemberChat()
        .then(res => {
          this.member.list = res;
          if(this.member.list.length > 0){
            this.member.activeIndex = 0;
            this.getChatHistory();
          }
        })
        .catch(err => {
          this.$Message.error("获取最近聊天会员列表失败！");
        });
    },

    /**
     * 获取历史聊天记录
     */
    getChatHistory(more = false) {
      if (this.chat.loading) {
        return this.$Message.error("正在获取历史聊天记录！");
      }
      this.chat.loading = true;

      let currentMemberActive = this.getCurMemberAcitve();

      let params = {
        cdId: currentMemberActive["cdId"],
        appId: this.basis["appId"],
        accessToken: this.basis["accessToken"]
      };

      if (more) {
        params.minChatId = this.chat.list[0]["chatId"];
      } else {
        params.minChatId = 0;
      }

      getChatHistoryKfAndCd(params)
        .then(res => {
          let list = res.reverse();
          console.table(list);

          this.chat.push.finished = this.chat.pageSize > list.length;

          if (more) {
            this.chat.list = [...list, ...this.chat.list];
          } else {
            this.chat.list = list;

            // 将数字改变为0
            this.member.list.forEach(item => {
              if (item["cdId"] == currentMemberActive["cdId"]) {
                item["unReadCnt"] = 0;
              }
            });

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
     * 创建socket
     */
    createSocket() {
      this.closeSocket();

      let url = BASEURL + "chat/socket/chat-webSocket";

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
          console.log("get-chat-message");
          console.log(message);

          if( message.uidType != 7 )   return 

          let memberItem = this.getCurMemberAcitve();
          // 判断是否是最近用户
          // 是的话 再进行判断是否是当前选中的
          // 否则重新刷新最近聊天列表
          let uidFrom = message["uidFrom"];

          let isExitIndex = this.member.list.findIndex(item => {
            return item["cdId"] == uidFrom;
          });

          if (this.member.list.length > 0 && memberItem && isExitIndex > -1) {
            if (memberItem["cdId"] == uidFrom) {
              this.getChatHistory();
            } else {
              this.member.list.forEach(item => {
                if (item["cdId"] == uidFrom) {
                  item["unReadCnt"]++;
                }
              });
            }
          } else {
            this.getMemberChat();
          }
        }
      );
    },

    /**
     * 发送socket信息
     */
    sendSocketMessage(params) {
      let memberItem = this.getCurMemberAcitve();

      let sendParams = {
        uidTo: memberItem["cdId"],
        uidFrom: this.basis.userId,
        nameFrom: this.basis.userName,
        nameTo: memberItem["cdName"],
        content: params.content,
        type: params.type,
        appId: this.basis.appId,
        accessToken: this.basis.accessToken,
        uidType: 5
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
      let valid = [
        {
          value: this.chat.connected,
          rules: [
            {
              message: "当前聊天室连接未成功，请重试！",
              rule: function(value, rules, regexs) {
                return !!value;
              }
            }
          ]
        },
        {
          value: this.member.activeIndex,
          rules: [
            {
              message: "当前没有选择会员！",
              rule: function(value, rules, regexs) {
                return value != null;
              }
            }
          ]
        },
        {
          value: this.chat.message,
          rules: [
            {
              message: "聊天内容不能为空！",
              rule: function(value, rules, regexs) {
                return !rules.isFalsy(value);
              }
            },
            {
              message: "聊天内容不能全部为空字符串！",
              rule: function(value, rules, regexs) {
                return !regexs.empty.test(value);
              }
            },
            {
              message: "聊天内容长度不能超过150",
              rule: function(value, rules, regexs) {
                return value.length < 151;
              }
            }
          ]
        }
      ];
      let message = this.$validators.validator(valid);
      if (message === true) {
        this.sendSocketMessage({ content: this.chat.message, type: 0 });
        this.chat.message = "";
      } else {
        this.$Message.error(message);
      }
    },

    /**
     * 发送图片信息
     */
    sendPic() {
      let valid = [
        {
          value: this.chat.connected,
          rules: [
            {
              message: "当前聊天室连接未成功，请重试！",
              rule: function(value, rules, regexs) {
                return !!value;
              }
            }
          ]
        },
        {
          value: this.member.activeIndex,
          rules: [
            {
              message: "当前没有选择会员！",
              rule: function(value, rules, regexs) {
                return value != null;
              }
            }
          ]
        },
        {
          value: this.chat.pic,
          rules: [
            {
              message: "发送失败，请重新尝试！",
              rule: function(value, rules, regexs) {
                return !!value;
              }
            }
          ]
        }
      ];
      let message = this.$validators.validator(valid);
      if (message === true) {
        this.sendSocketMessage({ content: this.chat.pic, type: 1 });
        this.chat.pic = "";
      } else {
        this.$Message.error(message);
      }
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
    getCurMemberAcitve() {
      return this.member.list[this.member.activeIndex];
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
     * 选择会员
     */
    changeUser(item, index) {
      // 判断会员是否存在，若存在则激活，不存在则添加并激活
      let isExitIndex = this.member.list.findIndex(memberItem => {
        return memberItem["cdId"] === item["id"];
      });
      if (isExitIndex > -1) {
        this.member.activeIndex = isExitIndex;
      } else {
        this.member.list.unshift({
          cdName: item["username"],
          unReadCnt: 0,
          mobilePhone: item["mobilePhone"],
          cdId: item["id"]
        });
        this.member.activeIndex = 0;
      }
      this.getChatHistory();
    },
    /**
     * 选择聊天对象
     */
    changeMember(item, index) {
      if (this.member.activeIndex === index) return;
      this.member.activeIndex = index;
      this.getChatHistory();
    },

    /**
     * 判断角色是否是自己
     */

    isMine: function isMine(item) {
      return item["uidType"] == "5";
    }
  },
  beforeDestroy() {
    this.closeSocket();
  }
};
</script>

<template>
  <div class="vv-chat">
    <Modal v-model='chat.picture.show'>
      <div
        class=""
        style="text-align:center"
      >
        <img
          :src="chat.picture.url"
          alt=""
        >
      </div>
      <div slot="footer"></div>
    </Modal>

    <Card>
      <p slot='title'>
        会员交流
        <Button
          type="primary"
          size="small"
          @click="init"
        >
          <Icon type="refresh"></Icon> 刷新
        </Button>
      </p>

      <div class="vv-chat--body">
        <div
          v-css.padding|top:50px
          v-css.position|position:relative
          v-css.size|width:250px
          v-css.border-right|color:#e3e8ee
        >
          <div
            v-css.size|width:100%|height:50px
            v-css.position|position:absolute|top:0|left:0
            v-css.flex
            v-css.padding|ab:10px
          >
            <div
              v-css.margin|right:10px
              v-css.flex-item|flex:1>
              <Poptip
                trigger="hover"
                content="请输入用户名、邮箱、手机号、姓名搜索"
                placement="bottom-start"
              >
                <Input
                  placeholder="请输入用户名、邮箱、手机号、姓名搜索"
                  v-model="user.query"
                  @keyup.enter.native="getUserList(false)"
                >
                </Input>
              </Poptip>
            </div>
            <div>
              <i-button
                type='primary'
                @click="getUserList(false)"
              >搜索</i-button>
            </div>

          </div>

          <div
            v-css.size|height:100%
            v-css.layout|overflow:auto
          >
            <div
              v-for="(item,index) in user.list"
              :key=index
              v-css.padding|all:10px
              v-css.more|cursor
              v-css.border-bottom|color:#fafafa
              class="vv-user-item"
              @click='changeUser(item,index)'
            >
              <p v-css.margin|bm:5px>{{ item['username']}}</p>
              <div v-css.flex|justify:space-between>
                <span v-css.text|size:12px|color:#666>{{ item['realName']}}</span>
                <span v-css.text|size:12px|color:#999>{{ item['mobilePhone'] }}</span>
              </div>
            </div>
            <div
              v-css.text|align:center|line-height:2
              @click="getUserList(true)"
              v-if='!user.push.finished'
            >
              <span
                v-css.text|color:#6560ff
                v-css.more|cursor
              >加载更多</span>
            </div>
          </div>
        </div>

        <div v-css.size|width:300px>
          <div
            v-css.size|height:100%
            v-css.layout|overflow:auto
          >
            <div
              v-css.more|cursor
              v-css.padding|ud:10px|ab:20px
              v-css.border-bottom|color:#fafafa
              v-for="(item,index) in member.list"
              :key=index
              class='vv-room-item '
              :class="{'is-active':index== member.activeIndex }"
              @click='changeMember(item,index)'
            >
              <div
                v-css.flex|justify:space-between
                v-css.margin|bm:5px
              >
                <p class="title">{{ item['cdName']}}</p>
                <template v-if="item['unReadCnt'] !== 0 ">
                  <mui-tag :label="item['unReadCnt']"></mui-tag>
                </template>
              </div>
              <div v-css.flex|justify:space-between>
                <p
                  v-css.text|size:12px
                  class='title-sub'
                >{{ item['mobilePhone']}}</p>
                <p
                  v-css.text|size:12px
                  class='title-sub'
                >{{ item['createTime']}}</p>
              </div>
            </div>

          </div>
        </div>

        <div class="vv-chat--chat">
          <div
            class="chat"
            ref='chat'
          >
            <div class='chat-body'>
              <div
                class="chat-more"
                v-if='!chat.push.finished'
              >
                <span @click='getChatHistory(true)'>加载更多</span>
              </div>
              <div
                class="chat-item"
                v-for="(item,i) in chat.list"
                :key='i'
                :class="{'is-left':!isMine(item),'is-right': isMine(item) }"
              >

                <template v-if='!isMine(item)'>
                  <div class="chat-head">
                    <div class="chat-head-inner vc-flex--center">

                      <span class="chat-name">{{ item['nameFrom'] ? item['nameFrom'].split('')[0] : '' }}</span>
                      <!-- {{ item['nameFrom'] ? item['nameFrom'].split('')[0] : '' }} -->
                    </div>
                  </div>

                  <div>

                    <div class="chat-name-detail">

                      <span>{{ item['nameFrom'] }}</span>

                    </div>

                    <div class="chat-content">
                      <div>
                        <div v-if="item['type'] === 0">
                          <span class="chat-info">{{item['content']}}</span>
                        </div>
                        <div
                          v-if="item['type'] === 1"
                          @click="showPicture(item['content'])"
                        >
                          <img
                            :src="item['content']"
                            alt=""
                            style="max-width:200px;max-height:200px"
                          >
                        </div>

                      </div>
                      <i class="chat-point"></i>
                    </div>
                    <div
                      class='chat-time'
                      v-if="item['sendTimeStr']"
                    >
                      {{ item['sendTimeStr'] }}

                    </div>
                  </div>

                </template>

                <template v-if='isMine(item)'>
                  <div style='margin-top:20px'>

                    <div
                      class="chat-name-detail"
                      v-if=true
                    >
                      {{ item['nameFrom'] }}
                    </div>

                    <div class="chat-content">
                      <div>
                        <div v-if="item['type'] === 0">
                          <span class="chat-info">{{item['content']}}</span>
                        </div>
                        <div
                          v-if="item['type'] === 1"
                          @click="showPicture(item['content'])"
                        >
                          <img
                            :src="item['content']"
                            alt=""
                            style="max-width:200px;max-height:200px"
                          >
                        </div>

                      </div>
                      <i class="chat-point"></i>
                    </div>
                    <div
                      class='chat-time'
                      v-if="item['sendTimeStr']"
                    >
                      {{ item['sendTimeStr'] }}

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

            <label
              for="file"
              class="upload"
            >
              <Icon
                type="image"
                size='36'
              ></Icon>
              <input
                type="file"
                id='file'
                @change='selectPic'
              >
            </label>

            <div class='chat-send__input'>
              <Input
                v-model='chat.message'
                size='large'
                @keyup.enter.native="sendMessage"
                placeholder="输入聊天内容 按回车键可发送"
              ></Input>
            </div>

            <Button
              type='primary'
              @click='sendMessage'
            >发送</Button>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<style>
</style>