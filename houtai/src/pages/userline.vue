<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="tempList"
      tooltip-effect="dark"
      style="width: 70% ;min-height:500px;font-size:20px; color:#695015;margin:40px 90px;;"
      border
      @selection-change="handleSelectionChange"
      :header-cell-style="{'text-align':'center'}"
      :cell-style="{'text-align':'center','line-height':'20px'}"
    >
      <el-table-column type="selection" width="50"></el-table-column>
      <el-table-column prop="id" label="#" width="80"></el-table-column>
      <el-table-column prop="phone" label="账号" width="350"></el-table-column>
      <el-table-column prop="password" label="密码" width="430"></el-table-column>
    </el-table>

    <div class="fenye">
      <el-pagination
        @size-change="handleSizeChange1"
        @current-change="handleCurrentChange1"
        :current-page="currentPage1"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total1"
        background
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      courseData: [],
      multipleTable: [],
      tempList: [],
      total1: 0,
      currentPage1: 1,
      pageSize: 5,
      dialogVisible: false,
      deleteId: []
    };
  },
  inject: ["reload"],
  async created() {
    //获取后台数据
    let { data } = await this.$axios.get("/login/all");
    this.courseData = data.data;

    // console.log("datadatadata", data.data);
    //初始化
    this.total1 = this.courseData.length;
    this.tempList = this.courseData.slice(0, this.pageSize);
  },

  methods: {
    //table页面的多选
    handleSelectionChange(val) {
      console.log(val);
      this.multipleTable = val;
    },

    handleSizeChange1: function(pageSize) {
      // 每页条数切换
      this.pageSize = pageSize;
      this.handleCurrentChange1(this.currentPage1);
    },
    handleCurrentChange1: function(currentPage) {
      //页码切换
      this.currentPage1 = currentPage; //点击选择的第几页数
      this.currentChangePage(this.courseData, currentPage);
    },
    //分页方法
    currentChangePage(list, currentPage) {
      let from = (currentPage - 1) * this.pageSize;
      let to = currentPage * this.pageSize;
      this.tempList = [];
      for (; from < to; from++) {
        if (list[from]) {
          this.tempList.push(list[from]);
        }
      }
    }
  }
};
</script>

<style scoped>
.fenye {
  float: right;
}
.el-pagination {
  font-size: 26px;
}
.cl-header {
  margin-bottom: 15px;
}
</style>