<template>
  <div>
   
     <el-input style="width:80%;margin-left:10%" placeholder="请输入内容" v-model="addcontent"> 
         <template slot="prepend">添加课程分类</template>
          <el-button slot="append" icon="el-icon-document-add" @click="addclass"></el-button>
          </el-input>
    <el-table
      ref="multipleTable"
      :data="tempList"
      tooltip-effect="dark"
      style="width: 60% ;min-height:600px;font-size:20px; color:#695015;margin-top:20px;margin-left:20%"
      border
      @selection-change="handleSelectionChange"
      :header-cell-style="{'text-align':'center'}"
      :cell-style="{'text-align':'center','line-height':'20px'}"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="#" width="200">
        <template slot-scope="scope">{{ ++scope.$index }}</template>
      </el-table-column>
      <el-table-column prop="subjects" label="课程" width="250"></el-table-column>
      <el-table-column label="操作" width="360">
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

    <!-- 删除弹窗 -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>此操作将永久删除该数据, 是否继续?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="aginsubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      addcontent:'',
      multipleTable: [],
      tempList: [
        // {
        //   id: 1,
        //   subjets: "语文",
        //   date: "2019/7/11"
        // },
        // {
        //   id: 2,
        //   subjets: "数学",
        //   date: "2019/7/11"
        // },
        // {
        //   id: 3,
        //   subjets: "英语",
        //   date: "2019/7/11"
        // }
      ],
        dialogVisible: false,
          deleteId: [],
      
    };
  },
   inject: ["reload"],
  async created(){
      let {data}=await this.$axios.get('/kechengclass');
      //let { data } = await this.$axios.get("http://localhost:1904/goods");
    console.log(data.data);
    this.tempList=data.data
    
  },
  methods: {
   async addclass(){
       
      let content=this.addcontent;
      let allsubjects=[];
      this.tempList.forEach(ele => {
        allsubjects.push(ele.subjects)
      });
      if(content.trim()!=='' && !allsubjects.includes(content)){
        let {data}= await this.$axios.post('/kechengclass',{
          subjects:content,
        })
        if(data.code==1000){
          this.tempList.push({
            'subjects':content,
          });
          alert('添加成功')
        }
        else{
          alert('由于网络原因,添加失败')
        }
      }
      this.addcontent='';
    },
    deleteRow(index, rows) {
      console.log(index, rows);
       let id = rows[index].id;
      this.deleteId.push(id);
      this.dialogVisible = true;
      //console.log('id',rows[index].id)
     // rows.splice(rows[index].id, 1);
       //this.tempList.splice(index, 1)
       
      //this.$axios.delete('',query)
    },
    async aginsubmit() {
      let id = this.deleteId[0];
      let { data } = await this.$axios.delete(
        `/kechengclass/${id}`
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
    },
    handleClick(row) {
      console.log(row)
      // this.$router.push({
      //   name: "updatacourse",
      //   query: row
      // });
          this.$prompt('请输入修改数据', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /\S/,
          inputErrorMessage: '不得为空'
        }).then( async ({ value }) => {
          console.log('row',row);
          let id=row.id
          let {data}=await this.$axios.patch(`/kechengclass/${id}`,{
            subjects:value,
          })
          console.log('data.data',data.code)
          if(data.code==1000){
             this.$message({
            type: 'success',
            message: '修改的数据是: ' + value
          })
            row.subjects=value;
          }else{
             this.$message({
            type: 'err',
            message: '由于网络原因,请重新尝试'
          });
          }        
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
    },
    handleSelectionChange(val) {
      this.multipleTable = val;
    },

  }
};
</script>
<style scoped>
.el-pagination {
  font-size: 26px;
}
</style>