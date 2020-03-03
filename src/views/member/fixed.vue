<script>
import {
  getMemberFixedList,
  addMemberFixed,
  deleteMemberFixed
} from "@/service/getData";
export default {
  name: "",
  data() {
    return {
      table: {
        columns: [
          {
            title: "编号",
            key: "id"
          },
          {
            title: "预定金额",
            key: "fee"
          },
          {
            title: "创建时间",
            key: "created"
          },
          {
            title: "操作",
            render: (h, params) => {
              let btns = [];
              btns.push(
                h(
                  "Button",
                  {
                    props: {
                      type: "error",
                      size: "small"
                    },
                    style: {
                      "margin-right": "8px"
                    },
                    on: {
                      click: () => {
                        //console.log(params);
                        let { id } = params.row;
                        this.$Modal.confirm({
                          title: "删除预定金额",
                          content:
                            "是否确定删除编号为【" + id + "】的预定金额？",
                          onOk: () => {
                            this.deleteFixed(id);
                          }
                        });
                      }
                    }
                  },
                  "删除"
                )
              );
              return h("div", {}, btns);
            }
          }
        ],
        data: [
          {
            id: "dsdsds"
          }
        ],
        loading: false
      },
      memberId: "",
      add: {
        show: false,
        money: 0
      }
    };
  },
  props: {},
  computed: {},
  methods: {
    init() {
      this.memberId = this.$route.query.memberId;
      this.getMemberFixedList();
    },
    getMemberFixedList() {
      getMemberFixedList({ id: this.memberId }).then(
        ({ code, data, message }) => {
          if (code === 0) {
            this.table.data = data;
          } else this.$Message.error(message);
        }
      );
    },
    addFixed() {
      if (!this.add.money) return this.$Message.error("请输入合法的金额");
      addMemberFixed({ id: this.memberId, fee: this.add.money }).then(
        ({ code, data, message }) => {
          console.log(code);
          if (code === 0) {
            this.$Message.success(message);
            this.getMemberFixedList();
          } else this.$Message.error(message);
        }
      );
    },
    deleteFixed(id) {
      deleteMemberFixed({ id }).then(({ code, data, message }) => {
        if (code === 0) {
          this.$Message.success(message);
          this.getMemberFixedList();
        } else this.$Message.error(message);
      });
    }
  },
  created() {
    this.init();
  },
  mounted() {}
};
</script>

<template>
  <div class="">
    <Modal
      title="添加预定金额"
      v-model="add.show"
      :closable="false"
      @on-ok="addFixed"
    >
      <div>
        <Row>
          <Col :span="4">
            <div style="line-height: 32px;text-align: right;margin-right: 10px">
              <span>金额</span>
            </div>
          </Col>
          <Col :span="20">
            <Input-number
              style="width: 100%"
              :min="0"
              v-model="add.money"
            ></Input-number>
          </Col>
        </Row>
      </div>
    </Modal>
    <Card class=" clearfix">
      <p slot="title" class="">
        <Icon type="bookmark"></Icon>
        预定金额
        <Button type="success" size="small" @click="add.show = true">
          添加预定金额
        </Button>
      </p>
      <div class="">
        <Table
          :columns="table.columns"
          :data="table.data"
          border
          :loading="table.loading"
          ref="tabel"
          class="user_center"
        >
        </Table>
      </div>
    </Card>
  </div>
</template>
