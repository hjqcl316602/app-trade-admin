<template>
  <div>
    <Card>
      <p slot="title">
        余额管理
        <Button type="primary" size="small" @click="refreshPageManual">
          <Icon type="refresh"></Icon>
          刷新
        </Button>
      </p>

      <Row class="functionWrapper">
        <div class="searchWrapper clearfix">
          <div class="poptip">
            <Poptip
              trigger="hover"
              content="请输入用户名、邮箱、手机或姓名搜索"
              placement="bottom-start"
            >
              <Input
                placeholder="请输入用户名、邮箱、手机或姓名搜索"
                v-model="filterSearch.account"
              />
            </Poptip>
          </div>

          <div class="poptip">
            <Poptip
              trigger="hover"
              content="请输入钱包地址搜索"
              placement="bottom-start"
            >
              <Input
                placeholder="请输入钱包地址搜索"
                v-model="filterSearch.walletAddress"
              />
            </Poptip>
          </div>

          <div class="poptip">
            <Poptip
              trigger="hover"
              content="请输入币种搜索"
              placement="bottom-start"
            >
              <Input placeholder="请输入币种搜索" v-model="filterSearch.unit" />
            </Poptip>
          </div>
          <br />
          <div class="poptip range">
            <Poptip
              trigger="hover"
              content="请输入可用币最低数搜索"
              placement="bottom-start"
            >
              <Input
                placeholder="可用币最低数搜索"
                v-model="filterSearch.minBalance"
              />
            </Poptip>
            ~
            <Poptip
              trigger="hover"
              content="请输入可用币最高数搜索"
              placement="bottom-start"
            >
              <Input
                placeholder="可用币最高数搜索"
                v-model="filterSearch.maxBalance"
              />
            </Poptip>
          </div>

          <div class="poptip range">
            <Poptip
              trigger="hover"
              content="请输入冻结币最低数搜索"
              placement="bottom-start"
            >
              <Input
                placeholder="冻结币最低数搜索"
                v-model="filterSearch.minFrozenBalance"
              />
            </Poptip>
            ~
            <Poptip
              trigger="hover"
              content="请输入冻结币最高数搜索"
              placement="bottom-start"
            >
              <Input
                placeholder="冻结币最高数搜索"
                v-model="filterSearch.maxFrozenBalance"
              />
            </Poptip>
          </div>

          <div class="poptip range">
            <Poptip
              trigger="hover"
              content="请输入总币最低数搜索"
              placement="bottom-start"
            >
              <Input
                placeholder="总币最低数搜索"
                v-model="filterSearch.minAllBalance"
              />
            </Poptip>
            ~
            <Poptip
              trigger="hover"
              content="请输入总币最高数搜索"
              placement="bottom-start"
            >
              <Input
                placeholder="总币最高数搜索"
                v-model="filterSearch.maxAllBalance"
              />
            </Poptip>
          </div>

          <div class="btns">
            <Button type="info" size="small" @click="searchByFilter"
              >搜索</Button
            >
          </div>
        </div>
      </Row>
      <div v-if="searchHisList.length > 0 ">
           <span>历史搜索:</span>
          <Tag
                  v-for="(item, index) in searchHisList"
                  ref="tagsPageOpened"
                  :key="index"
                  :name="item"
                  @on-close="closeSearchList(index)"
                  @click.native="searchByHis(item)"
                  closable
          >{{ item }}
          </Tag>
      </div>

      <Row class="margin-top-10 searchable-table-con1">
        <Table
          ref="selection"
          :columns="columns_first"
          :data="userpage"
          border
          :loading="ifLoading"
        >
        </Table>
      </Row>

      <Row class="pageWrapper">
        <Page
          :total="pageNum"
          :current="currentPageIdx"
          class="buttomPage"
          @on-change="changePage"
          show-elevator
        ></Page>
      </Row>
    </Card>
  </div>
</template>

<script>
import storager from "@/libs/storager";
import { memberAsset } from "@/service/getData";

export default {
  data() {
    return {
      /**
       * unit
       * walletAddress
       * account //用户名、邮箱、手机、姓名
       *
       * property 排序字段
       * direction 0 1
       */
      currentPageIdx: 1,
      filterSearch: {
        unit: "",
        walletAddress: "",
        account: "",
        minBalance: "",
        maxBalance: "",
        minFrozenBalance: "",
        maxFrozenBalance: "",
        minAllBalance: "",
        maxAllBalance: ""
      },
      pageNum: null,
      userpage: [],
      ifLoading: true,
      columns_first: [
        {
          title: "会员ID",
          key: "memberId"
        },
        {
          title: "用户名",
          key: "username"
        },
        {
          title: "邮箱",
          key: "email"
        },
        {
          title: "手机号",
          key: "mobilePhone",
            render:(h,{ row })=>{
                return h('span',{},this.formatPhone(row.mobilePhone))
            }
        },
        {
          title: "真实姓名",
          key: "realName"
        },
        {
          title: "币种名称",
          key: "unit"
        },
        {
          title: "钱包地址",
          key: "address"
        },
        {
          title: "可用币数",
          key: "balance"
        },
        {
          title: "冻结币数",
          key: "frozenBalance"
        },
        {
          title: "总币个数",
          key: "allBalance"
        }
      ],
      searchHisList: []
    };
  },
  methods: {
    searchByFilter() {
      let bol =
        Number(this.filterSearch.minBalance) >
          Number(this.filterSearch.maxBalance) ||
        Number(this.filterSearch.minFrozenBalance) >
          Number(this.filterSearch.maxFrozenBalance) ||
        Number(this.filterSearch.minAllBalance) >
          Number(this.filterSearch.maxAllBalance);

      if (bol) {
        this.$Message.warning("最低币数不能大于最高币数");
      } else {
        this.$store.commit("switchLoading", true);
        this.currentPageIdx = 1;

        let obj = Object.assign(this.filterSearch, { pageNo: 1, pageSize: 10 });
        this.setQuickSearch(this.filterSearch.account);
        this.refreshPage(obj);
      }
    },
      searchByHis(item){
          this.filterSearch.account = item;
          this.searchByFilter()
      },

      closeSearchList(index){
          let search = storager.getStore("app/money/search") || [];
          search = search.filter((ele,i)=> index !== i )
          this.searchHisList = search;
          storager.setStore("app/money/search", search);
      },

    setQuickSearch(value) {
      if (!value) return false;
      let search = storager.getStore("app/money/search") || [];
      let findIndex = search.findIndex(ele=>ele === value);
      if(findIndex > -1 ) return false
      search.push(value);
      storager.setStore("app/money/search", search);
      this.searchHisList = search;
    },
    /**
     * unit
     * walletAddress
     * account //用户名、邮箱、手机、姓名
     *
     * property 排序字段
     * direction 0 1
     */

    changePage(pageIndex) {
      this.ifLoading = true;
      this.currentPageIdx = pageIndex;

      let obj = Object.assign(this.filterSearch, {
        pageNo: pageIndex,
        pageSize: 10
      });
      this.refreshPage(obj);
    },
    refreshPageManual() {
      for (let val in this.filterSearch) {
        this.filterSearch[val] = "";
      }
      this.ifLoading = true;
      this.refreshPage({ pageNo: 1, pageSize: 10 });
    },
    refreshPage(obj = {}) {
      memberAsset(obj).then(res => {
        if (!res.code) {
          this.pageNum = res.data.totalElements;
          this.userpage = res.data.content;
          this.ifLoading = false;
          this.$store.commit("switchLoading", false);
        } else this.$Message.error("获取数据出错！");
      });
    }
  },
  created() {
    this.refreshPage();
    this.searchHisList = storager.getStore("app/money/search") || [];
  }
};
</script>

<style lang="less" scoped></style>
