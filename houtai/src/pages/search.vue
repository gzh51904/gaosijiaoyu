
<template>
  <div>
      <h1 style="text-align:center;font-size:30px">查询结果</h1>
    <el-table
      ref="multipleTable"
      :data="tempList"
      tooltip-effect="dark"
      style="width: 100% ;min-height:550px;font-size:20px; color:#695015;"
      border
      @selection-change="handleSelectionChange"
      :header-cell-style="{'text-align':'center'}"
      :cell-style="{'text-align':'center','line-height':'20px'}"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="#" width="80">
        <template slot-scope="scope">{{ ++scope.$index }}</template>
      </el-table-column>
      <el-table-column prop="lesson" label="班级" width="300"></el-table-column>
      <el-table-column prop="subjects" label="科目" width="80"></el-table-column>
      <el-table-column prop="clas" label="年级" width="120"></el-table-column>
      <el-table-column prop="term" label="学期" width="120"></el-table-column>
      <el-table-column prop="district" label="地区" width="100"></el-table-column>
      <el-table-column prop="area" label="校区" width="120"></el-table-column>
      <el-table-column prop="teacher" label="老师" width="100"></el-table-column>
      <el-table-column prop="keshi" label="课时" width="120"></el-table-column>
      <el-table-column prop="price" label="价格" width="80"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            @click="handleClick(scope.row)"
            type="primary"
            circle
            size="small"
            icon="el-icon-edit"
          ></el-button>
          <el-button
            @click.native.prevent="deleteRow(scope.$index,tempList)"
            type="danger"
            circle
            size="small"
            icon="el-icon-delete"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 弹窗 -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>此操作将永久删除该数据, 是否继续?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="aginsubmit">确 定</el-button>
      </span>
    </el-dialog>

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
      deleteId: [],
      input2: ""
    };
  },
  inject: ["reload"],
  async created() {
    //获取后台数据
    //let { data } = await this.$axios.get("http://localhost:1904/goods");
   // this.courseData = data.data;
    //console.log("datadatadata", data.data);
    //初始化
    this.courseData=this.$route.query;
    console.log( 'this.courseData',this.$route.query)
    this.total1 = this.courseData.length;
    this.tempList = this.courseData.slice(0, this.pageSize);
  },
  watch:{
    //    courseData:function(){
    //        console.log(courdeData)
    //    }
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
    },
    //编辑功能
    handleClick(row) {
      this.$router.push({
        name: "updatacourse",
        query: row
      });
      console.log(row);
    },
    //删除数据
    deleteRow(index, rows) {
      let id = rows[index].id;
      
      this.deleteId.push(id);
      this.dialogVisible = true;
     this.courseData.indexOf(rows[index])
      this.courseData.splice( this.courseData.indexOf(rows[index]),1)
      console.log()
      //this.$route.params.splice(0,1)
      // console.log(rows[index].id);

      // await this.$axios.delete(`http://localhost:1904/goods/${id}`);

      // let { data } = await this.$axios.get("http://localhost:1904/goods");
      // this.courseData = data.data;
    },
    //弹窗删除
    async aginsubmit() {
      let id = this.deleteId[0];
      let { data } = await this.$axios.delete(
        `/goods/${id}`
      );
      console.log(data.code);
      if (data.code == 250) {
        alert("由于网络原因,操作失败,请稍后再试");
      }
      
      this.reload();
    
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>

<style scoped>