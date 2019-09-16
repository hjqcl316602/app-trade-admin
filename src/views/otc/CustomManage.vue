<script>
    import {queryCustom} from "@/service/custom";

    export default {
        name: "",
        data() {
            return {
                params: {
                    search: "",
                    status: "",
                    pageSize: 10,
                    pageNo: 1,
                    loading: false,
                    statusOptions: [
                        {status: 0, text: "已申诉"},
                        {status: 1, text: "处理中"},
                        {status: 2, text: "已处理"},
                        {status: 3, text: "已关闭"},
                        {status: "", text: "全部"}
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
                            render(h, obj) {
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
                            title: "转账金额",
                            key: "transferNumber"
                        },
                        {
                            title: "转账时间",
                            key: "transferTime"
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
                result: []
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
                this.params.pageNo = 1;
                this.params.search = "";
                this.params.status = "";
                this.queryCustom();
            },
            /**
             * 搜索申述订单
             */
            queryCustom() {
                this.params.loading = true;
                queryCustom({
                    search: this.params.search,
                    pageSize: this.params.pageSize,
                    pageNo: this.params.pageNo,
                    status: this.params.status
                })
                    .then(res => {
                        console.log(res);

                        this.params.loading = false;
                        if (res.code === 0 && res.data) {
                            this.result = res.data;
                        } else {
                            this.$Message.error(res.message);
                        }
                    })
                    .catch(res => {
                        this.params.loading = false;
                        this.$Message.error("获取申诉订单失败");
                    });
            },
            /**
             * 分页查询
             */
            changePage(cur) {
                this.params.pageNo = cur;
                this.queryCustom();
            },
            selectTableRow(row) {
                console.log(row);
                this.$router.push({
                    path: "/otc/custom/detail",
                    query: {orderId: row.orderId, orderSn: row.orderSn}
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
                <Button
                        type="primary"
                        size="small"
                        @click="init"
                >
                    <Icon type="refresh"></Icon>
                    刷新
                </Button>
            </p>
            <Row class="functionWrapper">
                <div class="searchWrapper clearfix">

                    <div class="poptip">
                        <Poptip
                                trigger="hover"
                                content="可按昵称、真实姓名、手机号码、订单号、流水号等搜素"
                                placement="bottom-start"
                        >
                            <Input
                                    placeholder="请输入搜索内容"
                                    v-model="params.search"
                            />
                            </Input>
                        </Poptip>

                    </div>
                    <div class="poptip">
                        <span>订单状态：</span>
                        <Select v-model="params.status">
                            <Option
                                    v-for="item in params.statusOptions"
                                    :value="item.status"
                                    :key="item.status"
                            >{{ item.text }}
                            </Option>
                        </Select>
                    </div>

                    <div class="btns">
                        <Button
                                type="info"
                                size="small"
                                @click="queryCustom"
                        >搜索
                        </Button>
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

            <Row class="pageWrapper">
                <Page
                        :total="result.totalElements"
                        :current="params.pageNo"
                        @on-change="changePage"
                        show-elevator
                ></Page>
            </Row>
        </Card>

    </div>
</template>

<style scoped>
</style>
