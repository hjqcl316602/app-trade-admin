<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-04-29 11:15:44
 * @LastEditTime: 2019-09-04 20:11:31
 * @LastEditors: Please set LastEditors
 -->

<script>
import { BASEURL } from "@/service/http";
import Cookies from "js-cookie";
import { getChatHistoryKfAndCd, getMemberChat } from "@/service/custom";

import { uploadImage } from "@/service/common";
import { memberManage } from "@/service/getData";
import { mapState } from "vuex";
import { stringer } from "store-es";
import { storager } from "../../../../package/es";
var Stomp = require("stompjs");
var SockJS = require("sockjs-client");

console.log(storager);
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
      },
      letter: {
        list: []
      }
    };
  },
  mounted() {
    this.init();
    this.getClipboardImage();
  },
  methods: {
    init() {
      this.getBasisMessage();
      this.createSocket();
      this.getUserList();
      this.getMemberChat();
      this.getLetterList();
    },
    /**
     * 描述：获取历史常用语
     */
    getLetterList() {
      this.letter.list = storager.getStore("app/chat/letter") || [];
    },
    /**
     * 描述：获取历史常用语
     */
    setLetter(message) {
      if (!message) return this.$Message.error("常用语不能为空");
      let letters = storager.getStore("app/chat/letter") || [];
      if (letters.find(ele => ele === message)) return false;
      letters.unshift(message);
      this.letter.list = letters;
      storager.setStore("app/chat/letter", letters);
    },
    /**
     * 描述：清除历史常用语
     */
    clearLetter(message) {
      let letters = storager.getStore("app/chat/letter") || [];
      this.letter.list = letters.filter(ele => ele !== message);
      storager.setStore("app/chat/letter", this.letter.list);
    },
    /**
     * 时间：2019/9/18 ,
     * 描述：获取粘贴板的图片文件
     */

    getClipboardImage() {
      let elems = this.$refs["editable"].$el.childNodes;
      let elem = null;
      for (let n = 0; n < elems.length; n++) {
        if (elems[n].localName === "input") {
          elem = elems[n];
          break;
        }
      }
      if (elem == null) return false;

      elem.onpaste = event => {
        let value = event.clipboardData.items[0];
        if (value.kind === "file" && value.type.indexOf("image/") !== -1) {
          this.selectPic(value.getAsFile(), "clipboard");
          return false;
        }
      };
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
          if (this.member.list.length > 0) {
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

      let url = BASEURL + "p/socket/chat-webSocket";

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

          if (message.uidType != 7) return;

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
    sendMessage(message) {
      if (!this.chat.connected) {
        this.$Message.error("当前聊天室连接未成功，请重试！");
        return;
      }
      if (this.member.activeIndex === -1) {
        this.$Message.error("当前没有选择会员！");
        return;
      }
      if (message === "") {
        this.$Message.error("聊天内容不能为空！");
        return;
      }

      if (stringer.check.space.whole(message)) {
        this.$Message.error("聊天内容不能全部为空字符串！");
        return;
      }

      if (message.length > 150) {
        this.$Message.error("聊天内容长度不能超过150");
        return;
      }

      this.sendSocketMessage({ content: message, type: 0 });
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
      if (this.member.activeIndex === -1) {
        this.$Message.error("当前没有选择会员！");
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
    getCurMemberAcitve() {
      return this.member.list[this.member.activeIndex];
    },
    /**
     * 选择图片，并发送图片消息
     */
    selectPic: function selectPic(e, type = "local") {
      let file = e;
      if (type === "local") {
        file = e.target.files[0];
      }
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
    <Modal
      v-model="chat.picture.show"
      class="ivu-modal--preview"
      title="图片预览"
      width="100%"
    >
      <img :src="chat.picture.url" alt="" class="is-preview" />
      <div slot="footer"></div>
    </Modal>

    <Card>
      <p slot="title">
        会员交流
        <Button type="primary" size="small" @click="init">
          <Icon type="refresh"></Icon> 刷新
        </Button>
      </p>

      <div>
        <div class="vi-flex is-align-items--center vi-margin-bottom">
          <div class="vi-margin-right">
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
          <div class=" ">
            <i-button type="primary" @click="getUserList(false)">
              搜索
            </i-button>
          </div>
        </div>
        <div class="vi-flex" style="height:calc(100vh - 260px)">
          <div style="width: 250px;height: 100%;overflow: auto">
            <div
              class="vi-padding vi-border is-border--bottom is-border--thin"
              @click="changeUser(item, index)"
              v-for="(item, index) in user.list"
            >
              <div style="line-height: 32px">
                <span class="vi-text is-weight--bold">{{ item.username }}</span>
              </div>
              <div
                class="vi-flex is-justify-content--space-between"
                style="line-height: 24px"
              >
                <span>{{ item.realName }}</span>
                <span>{{ item.mobilePhone | formatPhone }}</span>
              </div>
            </div>
            <div class="vi-padding" v-if="!user.push.finished">
              <i-button type="default" long @click="getUserList(true)">
                加载更多
              </i-button>
            </div>
          </div>
          <div style="width: 250px;height: 100%;overflow: auto">
            <div
              class="vi-border"
              :class="{
                'vi-background is-background--gray is-border--left is-border--primary is-border--bold':
                  index === member.activeIndex
              }"
              v-for="(item, index) in member.list"
              @click="changeMember(item, index)"
            >
              <div
                class="vi-padding vi-border is-border--bottom is-border--thin  "
              >
                <div
                  style="line-height: 32px"
                  class="vi-flex is-justify-content--space-between"
                >
                  <span class="vi-text is-weight--bold">{{ item.cdName }}</span>

                  <template v-if="item.unReadCnt !== 0">
                    <span class="vi-tag ">
                      <span class="vi-tag-label">{{ item.unReadCnt }}</span>
                    </span>
                  </template>
                </div>
                <div
                  class="vi-flex is-justify-content--space-between"
                  style="line-height: 24px"
                >
                  <span>{{ item.mobilePhone | formatPhone }}</span>
                  <span>{{ item.createTime }}</span>
                </div>
              </div>
            </div>
          </div>
          <div style="height: 100%;" class="vi-flex-item is-flex--1">
            <div class="vi-chat">
              <div class="vi-chat-body" ref="chat">
                <div
                  v-if="!chat.push.finished"
                  class="vi-margin-bottom vi-flex is-justify-content--center"
                >
                  <i-button type="default" @click="getChatHistory(true)">
                    加载更多
                  </i-button>
                </div>
                <div
                  class="vi-chat-row "
                  :class="{
                    'is-row--left': !isMine(item),
                    'is-row--right': isMine(item)
                  }"
                  v-for="(item, index) in chat.list"
                >
                  <div class="vi-chat-tag" style="" v-if="!isMine(item)"></div>

                  <div class="vi-chat-content">
                    <div class="vi-chat-arrow"></div>
                    <div class="vi-chat-message">
                      <div>
                        <span v-if="item.type === 0">{{ item.content }}</span>
                        <img
                          v-else
                          :src="item.content"
                          alt=""
                          style="max-width:250px;max-height: 350px"
                          @click="showPicture(item.content)"
                        />
                      </div>
                      <div class="vi-margin-top" v-if="item.sendTimeStr">
                        <span class="vi-text is-color--gray ">
                          {{ item.sendTimeStr }}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="vi-chat-tag" style="" v-if="isMine(item)"></div>
                </div>
              </div>
              <div class="vi-chat-footer vi-padding">
                <div class="vi-flex">
                  <label for="file-1" class="upload vi-margin-right">
                    <Icon type="image" size="36"></Icon>
                    <input type="file" id="file-1" @change="selectPic" />
                  </label>

                  <div class="vi-flex-item is-flex--1 vi-margin-right">
                    <Input
                      v-model="chat.message"
                      size="large"
                      ref="editable"
                      @keyup.enter.native="sendMessage(chat.message)"
                      placeholder="输入聊天内容 按回车键可发送"
                    ></Input>
                  </div>
                  <div class="vi-margin-right">
                    <Button type="primary" @click="sendMessage(chat.message)"
                      >发送</Button
                    >
                  </div>

                  <div class="">
                    <Button @click="setLetter(chat.message)">
                      记为常用语
                    </Button>
                  </div>
                </div>
                <div
                  class="vi-padding vi-background is-background--gray"
                  style="max-height: 150px;overflow: auto"
                  v-if="letter.list.length > 0"
                >
                  <Tag
                    v-for="(item, index) in letter.list"
                    ref="tagsPageOpened"
                    :key="index"
                    :name="item"
                    @on-close="clearLetter(item)"
                    @click.native="sendMessage(item)"
                    closable
                    >{{ item }}
                  </Tag>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="vv-chat--body" v-if="false">
        <div
          style="border-right:1px solid #e3e8ee;width:280px;position:relative;padding-top:50px"
        >
          <div class="vui-relative--top   vui-grid" style="height:50px">
            <div class="vui-grid-child vui-flex-grow--1 ">
              <div class="vui-padding-right">
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
            </div>
            <div class="vui-grid-child vui-flex-grow--0 vui-padding-right">
              <i-button type="primary" @click="getUserList(false)">
                搜索
              </i-button>
            </div>
          </div>

          <div class="vui-contain--vertical vui-overflow--auto">
            <div
              v-for="(item, index) in user.list"
              :key="index"
              class="vv-user-item "
              @click="changeUser(item, index)"
            >
              <p class="vui-margin-bottom--small vui-text--bold">
                {{ item["username"] }}
              </p>
              <div class="vui-grid vui-justify-content--space-between">
                <span class="vui-text--light  vui-text--smaller">{{
                  item["realName"]
                }}</span>
                <span class="vui-text--gray vui-text--smaller">{{
                  item["mobilePhone"]
                }}</span>
              </div>
            </div>
            <div
              class="vui-text-align--center vui-line-height--large"
              @click="getUserList(true)"
              v-if="!user.push.finished"
            >
              <span class="vui-text--primary vui-cursor--pointer"
                >加载更多</span
              >
            </div>
          </div>
        </div>
        <div style="width:300px" v-if="member.list.length > 0">
          <div class="vui-contain--vertical vui-overflow--auto">
            <div
              v-for="(item, index) in member.list"
              :key="index"
              class="vv-room-item "
              :class="{ 'is-active': index == member.activeIndex }"
              @click="changeMember(item, index)"
            >
              <div
                class="vui-grid vui-justify-content--space-between vui-margin-bottom"
              >
                <p class="title vui-text--bold">{{ item["cdName"] }}</p>
                <template v-if="item['unReadCnt'] !== 0">
                  <div class="vui-tag">
                    <div class="vui-tag--label">{{ item["unReadCnt"] }}</div>
                  </div>
                </template>
              </div>
              <div class="vui-grid vui-justify-content--space-between">
                <p class="vui-text--smaller title-sub">
                  {{ item["mobilePhone"] }}
                </p>
                <p class="vui-text--smaller title-sub">
                  {{ item["createTime"] }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="vv-chat--chat" v-if="false">
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
                    <div class="chat-name-detail" v-if="true">
                      {{ item["nameFrom"] }}
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
          <div class="chat-send-wrap">
            <div class="chat-send">
              <label for="file" class="upload">
                <Icon type="image" size="36"></Icon>
                <input type="file" id="file" @change="selectPic" />
              </label>

              <div class="chat-send__input">
                <Input
                  v-model="chat.message"
                  size="large"
                  ref="editable"
                  @keyup.enter.native="sendMessage"
                  placeholder="输入聊天内容 按回车键可发送"
                ></Input>
              </div>
              <div>
                <Button type="primary" @click="sendMessage">发送</Button>
              </div>
              <div class="vui-margin-left" v-if="storeCustomLetter.length > 0">
                <Button @click="letter.modal = true" type="warning"
                  >常用语</Button
                >
              </div>
              <div class="vui-margin-left">
                <Button @click="createLetter(chat.message)"
                  >设置为常用语</Button
                >
              </div>
            </div>
          </div>
        </div>
        <div class="chat-content" v-if="false">
          <div class="chat-content-message"></div>
          <div class="chat-content-send">
            <span>房贷的收款发了说</span>
            <div>
              <span>胜多负少看到了时空来电</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<style></style>
