<script>
import { getMember, updateMember } from "../../service/member";
export default {
  name: "",
  data() {
    return {
      params: {
        search: "",
        status: 0,
        pageNo: 1,
        pageSize: 10,
        total: 100,
        loading: false
      },
      statusOptions: [
        { status: 0, text: "全部" },
        { status: 2, text: "未绑定" },
        { status: 1, text: "已绑定" }
      ],
      list: [],
      columnsTitle: [
        {
          key: "userName",
          title: "用户名"
        },
        {
          title: " 真实姓名 / 电话号码 ",
          render(h, params) {
            let message =
              (params.row.realName || "--") +
              " | " +
              (params.row.mobilePhone || "--");
            return h("span", message);
          }
        },
        {
          key: "type",
          title: "收款方式",
          render(h, params) {
            let type = params.row.type || 0;
            let message = ["银行卡", "微信", "支付宝", "云闪付","聚合码"][type - 1];
            return h("span", message);
          }
        },
        {
          key: "type",
          title: "收款码 / 银行卡号",
          render(h, params) {
            let type = params.row.type || 0;
            if (type == 1) {
              return h("span", params.row.url || "--");
            } else {
              return h("img", {
                attrs: {
                  src: params.row.originUrl
                },
                style: {
                  height: "50px",
                  cursor: "pointer"
                }
              });
            }
          }
        },
        {
          title: "账号(开户行)/真实姓名",
          render(h, params) {
            let type = params.row.type || 0;
            let message = "";
            if (type == 2 || type == 4 || type==5) {
              message = params.row.payInfoname;
            } else {
              message =
                (params.row.payInfoname || "--") +
                " | " +
                (params.row.payInfoRealName || "--");
            }
            return h("span", message);
          }
        },
        {
          title: "账号昵称",
          key: "nickName"
        },
        {
          title: "操作",
          render: (h, params) => {
            let type = params.row.type || 0;
            let html = [];
            if (type != 1) {
              html.push(
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
                      click: () => this.bindName(params.row)
                    }
                  },
                  "绑定"
                )
              );
            }
            html.push(
              h(
                "Button",
                {
                  props: {
                    type: "success",
                    size: "small"
                  },
                  on: {
                    click: () => this.showMessage(params.row)
                  }
                },
                "查看"
              )
            );
            return h("div",{
                style:{
                    'text-align':'right'
                }
            }, html);
          }
        }
      ],

      message: {
        show: false,
        detail: {}
      },
      bind: {
        show: false,
        detail: {},
        nickName: "",
        id: ""
      }
    };
  },
  props: {},
  computed: {},
  methods: {
    init() {
      this.params.pageNo = 1;
      this.params.search = "";
      this.params.status = 0;
      this.getMember();
    },
    query() {
      this.params.pageNo = 1;
      this.getMember();
    },
    changePage(page) {
      this.params.pageNo = page;
      this.getMember();
    },
    getMember() {
      this.params.loading = true;
      getMember({
        pageNo: this.params.pageNo,
        pageSize: this.params.pageSize,
        search: this.params.search,
        status: this.params.status
      })
        .then(res => {
          this.params.loading = false;
          this.list = res["content"];
          this.params.total = res["totalElements"];
        })
        .catch(err => {
          this.params.loading = false;
          this.$Message.error(err.message);
        });
    },
    bindName(message) {
      this.bind.show = true;
      this.bind.detail = message;
      this.bind.nickName = message.nickName;
      this.bind.id = message.payInfoId;
    },
    saveNickName() {
      updateMember({
        id: this.bind.id,
        nickName: this.bind.nickName
      })
        .then(res => {
          this.$Message.success("绑定成功");
          this.getMember();
        })
        .catch(err => this.$Message.error(err.message));
    },

    showMessage(message) {
      this.message.show = true;
      this.message.detail = message;
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<template>
  <div class="">
    <Modal v-model="bind.show" :width="500" @on-ok="saveNickName">
      <h3 slot="header">绑定账户昵称</h3>
      <div>
        <div style="display: flex;margin-bottom: 10px">
          <div style="width: 120px;text-align: right;padding-left: 10px">
            <span style="color: #adabab;">用户名：</span>
          </div>
          <div style="flex: 1">
            <span>{{ bind.detail["userName"] }}</span>
          </div>
        </div>
        <div style="display: flex;margin-bottom: 10px">
          <div style="width: 120px;text-align: right;padding-left: 10px">
            <span style="color: #adabab;">真实姓名：</span>
          </div>
          <div style="flex: 1">
            <span>{{ bind.detail["realName"] }}</span>
          </div>
        </div>
        <div style="display: flex;margin-bottom: 10px">
          <div style="width: 120px;text-align: right;padding-left: 10px">
            <span style="color: #adabab;">电话号码：</span>
          </div>
          <div style="flex: 1">
            <span>{{ bind.detail["mobilePhone"] }}</span>
          </div>
        </div>
        <div style="display: flex;margin-bottom: 10px">
          <div style="width: 120px;text-align: right;padding-left: 10px">
            <span style="color: #adabab;">收款码：</span>
          </div>
          <div style="flex: 1">
            <img :src="bind.detail.originUrl" alt="" style="width:300px" />
          </div>
        </div>
        <div style="display: flex;margin-bottom: 10px">
          <div style="width: 120px;text-align: right;padding-left: 10px">
            <span style="color: #adabab;line-height: 32px">昵称：</span>
          </div>
          <div style="flex: 1">
            <Input placeholder="请输入昵称..." v-model="bind.nickName" />
          </div>
        </div>
      </div>
    </Modal>
    <Modal v-model="message.show" :width="500">
      <h3 slot="header">账户详情</h3>
      <div>
        <div style="display: flex;margin-bottom: 10px">
          <div style="width: 120px;text-align: right;padding-left: 10px">
            <span style="color: #adabab;">用户名：</span>
          </div>
          <div style="flex: 1">
            <span>{{ message.detail["userName"] }}</span>
          </div>
        </div>
        <div style="display: flex;margin-bottom: 10px">
          <div style="width: 120px;text-align: right;padding-left: 10px">
            <span style="color: #adabab;">真实姓名：</span>
          </div>
          <div style="flex: 1">
            <span>{{ message.detail["realName"] }}</span>
          </div>
        </div>
        <div style="display: flex;margin-bottom: 10px">
          <div style="width: 120px;text-align: right;padding-left: 10px">
            <span style="color: #adabab;">电话号码：</span>
          </div>
          <div style="flex: 1">
            <span>{{ message.detail["mobilePhone"] }}</span>
          </div>
        </div>
        <div style="display: flex;margin-bottom: 10px">
          <div style="width: 120px;text-align: right;padding-left: 10px">
            <span style="color: #adabab;">所属：</span>
          </div>
        </div>
        <div style="display: flex;margin-bottom: 10px">
          <div style="width: 180px;text-align: right;padding-left: 10px">
            <span style="color: #adabab;">用户名：</span>
          </div>
          <div style="flex: 1">
            <span>{{ message.detail["parentUserName"] || "--" }}</span>
          </div>
        </div>

        <div style="display: flex;margin-bottom: 10px">
          <div style="width: 180px;text-align: right;padding-left: 10px">
            <span style="color: #adabab;">真实姓名：</span>
          </div>
          <div style="flex: 1">
            <span>{{ message.detail["parentRealName"] || "--" }}</span>
          </div>
        </div>

        <div style="display: flex;margin-bottom: 10px">
          <div style="width: 180px;text-align: right;padding-left: 10px">
            <span style="color: #adabab;">电话号码：</span>
          </div>
          <div style="flex: 1">
            <span>{{ message.detail["parentMobilePhone"] || "--" }}</span>
          </div>
        </div>

        <div style="display: flex;margin-bottom: 10px">
          <div style="width: 120px;text-align: right;padding-left: 10px">
            <span style="color: #adabab;">收款方式：</span>
          </div>
          <div style="flex: 1">
            <span>{{
              ["银行卡", "微信", "支付宝", "云闪付"][message.detail.type - 1]
            }}</span>
          </div>
        </div>
        <template v-if="message.detail.type == 1">
          <div style="display: flex;margin-bottom: 10px">
            <div style="width: 120px;text-align: right;padding-left: 10px">
              <span style="color: #adabab;">卡号：</span>
            </div>
            <div style="flex: 1">
              <span>{{ message.detail["url"] || "--" }}</span>
            </div>
          </div>
          <div style="display: flex;margin-bottom: 10px">
            <div style="width: 120px;text-align: right;padding-left: 10px">
              <span style="color: #adabab;">银行卡实名：</span>
            </div>
            <div style="flex: 1">
              <span>{{ message.detail["payInfoRealName"] || "--" }}</span>
            </div>
          </div>
          <div style="display: flex;margin-bottom: 10px">
            <div style="width: 120px;text-align: right;padding-left: 10px">
              <span style="color: #adabab;">开户行：</span>
            </div>
            <div style="flex: 1">
              <span>{{ message.detail["payInfoname"] || "--" }}</span>
            </div>
          </div>
          <div style="display: flex;margin-bottom: 10px">
            <div style="width: 120px;text-align: right;padding-left: 10px">
              <span style="color: #adabab;">简称：</span>
            </div>
            <div style="flex: 1">
              <span>{{ message.detail["alipayOrMask"] || "--" }}</span>
            </div>
          </div>
        </template>
        <template v-else>
          <div style="display: flex;margin-bottom: 10px">
            <div style="width: 120px;text-align: right;padding-left: 10px">
              <span style="color: #adabab;">账号：</span>
            </div>
            <div style="flex: 1">
              <span>{{ message.detail["payInfoname"] || "--" }}</span>
            </div>
          </div>
          <div style="display: flex;margin-bottom: 10px">
            <div style="width: 120px;text-align: right;padding-left: 10px">
              <span style="color: #adabab;">账号实名：</span>
            </div>
            <div style="flex: 1">
              <span>{{ message.detail["payInfoRealName"] || "--" }}</span>
            </div>
          </div>
          <div style="display: flex;margin-bottom: 10px">
            <div style="width: 120px;text-align: right;padding-left: 10px">
              <span style="color: #adabab;">收款码：</span>
            </div>
            <div style="flex: 1">
              <img :src="message.detail.originUrl" alt="" style="width:200px" />
            </div>
          </div>
          <div style="display: flex;margin-bottom: 10px">
            <div style="width: 120px;text-align: right;padding-left: 10px">
              <span style="color: #adabab;">收款码解析结果：</span>
            </div>
            <div style="flex: 1">
              <span style="word-break: break-all">{{
                message.detail["url"] || "--"
              }}</span>
            </div>
          </div>
        </template>
      </div>
      <div slot="footer"></div>
    </Modal>
    <Card>
      <p slot="title">
        收款账号管理
        <Button type="primary" size="small" @click="init">
          <Icon type="refresh"></Icon>刷新
        </Button>
      </p>
      <Row class="functionWrapper">
        <div class="searchWrapper clearfix">
          <div class="poptip">
            <Poptip
              trigger="hover"
              content="请输入用户名、真实姓名、手机号、账号、账号实名、账号昵称"
              placement="bottom-start"
            >
              <Input
                placeholder="请输入用户名、真实姓名、手机号、账号、账号实名、账号昵称搜索"
                v-model="params.search"
                style="width: 300px"
              />
            </Poptip>
          </div>
          <div class="poptip">
            <span>昵称绑定状态：</span>
            <Select v-model="params.status">
              <Option
                v-for="item in statusOptions"
                :value="item.status"
                :key="item.status"
                >{{ item.text }}
              </Option>
            </Select>
          </div>
          <div class="btns">
            <Button type="info" size="small" @click="query">搜索</Button>
          </div>
        </div>
      </Row>
      <Row class="margin-top-10 searchable-table-con1">
        <Table
          :columns="columnsTitle"
          :data="list"
          border
          :loading="params.loading"
          ref="tabel"
          class="user_center"
        >
        </Table>
      </Row>

      <Row class="pageWrapper">
        <Page
          :total="params.total"
          style="margin-top:8px"
          :current="params.pageNo"
          @on-change="changePage"
          show-elevator
        ></Page>
      </Row>
    </Card>
  </div>
</template>
