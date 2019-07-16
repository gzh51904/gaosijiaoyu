<template>
  <div class="myclass">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item style label="班级" prop="lesson">
        <el-input style="width:600px;font-size:20px;" v-model="ruleForm.lesson"></el-input>
      </el-form-item>

      <el-form-item label="学科" prop="subjects">
        <el-select
          style="width:600px;font-size:20px;"
          v-model="ruleForm.subjects"
          placeholder="选择学科"
        >
          <el-option label="语文" value="语文"></el-option>
          <el-option label="数学" value="数学"></el-option>
          <el-option label="英语" value="英语"></el-option>
          <el-option label="物理" value="物理"></el-option>
          <el-option label="化学" value="化学"></el-option>
          <el-option label="历史" value="历史"></el-option>
          <el-option label="政治" value="政治"></el-option>
          <el-option label="地理" value="地理"></el-option>
          <el-option label="生物" value="生物"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="学校分类" prop="school">
        <el-select style="width:600px;font-size:20px;" v-model="ruleForm.school" placeholder="选择学科">
          <el-option v-for="item in allschool" :key="item" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="年级" prop="clas">
        <el-select style="width:600px;font-size:20px;" v-model="ruleForm.clas" placeholder="选择学科">
          <el-option
            v-for="item in schoolclass[ruleForm.school]"
            :key="item"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item style label="学期" prop="term">
        <el-input style="width:600px;font-size:20px;" v-model="ruleForm.term"></el-input>
      </el-form-item>

      <el-form-item label="区域" prop="district">
        <el-select
          style="width:600px;font-size:20px;"
          v-model="ruleForm.district"
          placeholder="选择学科"
        >
          <el-option v-for="item in alldistrict" :key="item" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="校区" prop="area">
        <el-select style="width:600px;font-size:20px;" v-model="ruleForm.area" placeholder="选择学科">
          <el-option
            v-for="item in districtarea[ruleForm.district]"
            :key="item"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="老师" prop="teacher">
        <el-input style="width:600px;font-size:20px;" v-model="ruleForm.teacher"></el-input>
      </el-form-item>
      <el-form-item label="课时" prop="keshi">
        <el-input style="width:600px;font-size:20px;" v-model="ruleForm.keshi"></el-input>
      </el-form-item>
      <el-form-item label="价格" prop="price">
        <el-input style="width:600px;font-size:20px;" v-model="ruleForm.price"></el-input>
      </el-form-item>

      <el-form-item style="margin-left:200px">
        <el-button type="primary" @click="submitForm('ruleForm')">确认修改</el-button>
      </el-form-item>
    </el-form>

    <!-- 弹窗 -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>是否添加数据</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="aginsubmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  created() {
    //console.log('this.$route.query',this.$route.query)
    //this.updataCourse = this.$route.query;
    //this.ruleForm = this.$route.query;
    //console.log(this.updataCourse);

    for (var key in this.schoolclass) {
      this.allschool.push(key);
    }
    for (var key in this.districtarea) {
      this.alldistrict.push(key);
    }
  },

  data() {
    var checklesson = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("不能为空"));
      } else {
        callback();
      }
    };
    var checkterm = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("不能为空"));
      } else {
        callback();
      }
    };
    var checkteacher = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("不能为空"));
      } else {
        callback();
      }
    };
    var checkkeshi = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("不能为空"));
      } else {
        callback();
      }
    };
    var checkprice = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("不能为空"));
      } else {
        callback();
      }
    };
    var checkdistrict = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("不能为空"));
      } else {
        callback();
      }
    };
    var checkarea = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("不能为空"));
      } else {
        callback();
      }
    };
    var checkschool = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("不能为空"));
      } else {
        callback();
      }
    };
    var checksubjects = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("不能为空"));
      } else {
        callback();
      }
    };
    var checkclas = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("不能为空"));
      } else {
        callback();
      }
    };
    return {
      //updataCourse: [],
      ruleForm: {
        lesson: "",
        subjects: "",
        school: "",
        clas: "",
        term: "",
        district: "",
        area: "",
        teacher: "",
        keshi: "",
        price: ""
      },
      alldistrict: [],
      allschool: [],
      districtarea: {
        海淀区: ["公主坟-翠微校区"],
        朝阳区: ["管庄校区"],
        西城区: ["阜成门校区", "广安门校区"],
        东城区: ["朝阳门校区", "广渠门校区", "和平里校区"],
        石景区: ["玉泉路-远洋山水校区"],
        昌平区: ["世纪城-居然之家校区"],
        丰台区: ["刘家窑校区", "六里桥校区"],
        房山区: ["良乡校区"]
      },
      schoolclass: {
        学前班: ["学前班"],
        小学: ["一年级", "二年级", "三年级", "四年级", "五年级", "六年级"],
        初中: ["一年级", "二年级", "三年级"],
        高中: ["一年级", "二年级", "三年级"]
      },
      dialogVisible: false,
      rules: {
        lesson: [{ validator: checklesson, trigger: "blur" }],
        term: [{ validator: checkterm, trigger: "blur" }],
        teacher: [{ validator: checkteacher, trigger: "blur" }],
        keshi: [{ validator: checkkeshi, trigger: "blur" }],
        price: [{ validator: checkprice, trigger: "blur" }],
        subjects: [{ validator: checksubjects, trigger: "blur" }],
        school: [{ validator: checkschool, trigger: "blur" }],
        district: [{ validator: checkdistrict, trigger: "blur" }],
        area: [{ validator: checkarea, trigger: "blur" }],
        clas: [{ validator: checkclas, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(val) {
      this.$refs[val].validate(valid => {
        if (valid) {
          this.dialogVisible = true;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    async aginsubmit() {
      let {
        lesson,
        subjects,
        school,
        clas,
        term,
        district,
        area,
        teacher,
        keshi,
        price
      } = this.ruleForm;
      console.log(this.ruleForm);
      let {data}=await this.$axios.post("/goods", {
        lesson,
        subjects,
        school,
        clas,
        term,
        district,
        area,
        teacher,
        keshi,
        price
      });
      if(data.code==250){
        alert('由于网络原因,该操作失败')
      } 
      this.$router.push({
         name: "courseline"
         });
      
      //let id = this.updataCourse.id;
      //console.log(id);
      //this.$axios.updata();
      //   this.$router.push({
      //     name: "courseline"
      //   });
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
.myclass {
  margin: 20px 20px;
}
</style>