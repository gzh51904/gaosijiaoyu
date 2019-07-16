<template>
  <div>
    <el-radio-group v-model="labelPosition" size="small">
      <el-radio-button label="left">左对齐</el-radio-button>
      <el-radio-button label="right">右对齐</el-radio-button>
      <el-radio-button label="top">顶部对齐</el-radio-button>
    </el-radio-group>
    <div style="margin: 60px;"></div>

    <el-form
      :label-position="labelPosition"
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="150px"
    >
      <el-form-item label="手机号码" prop="phone">
        <el-input
          style="width:60%;font-size:20px;line-height:30px"
          v-model="ruleForm.phone"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
        type="password"
          style="width:60%;font-size:20px;line-height:30px"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
    </el-form>
    <div style="margin-left:30%">
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button></div>
  </div>
</template>
<script>
export default {
  data() {
    var validatephone = (rule, value, callback) => {
      console.log(value);
      if (value === "") {
        callback(new Error("请输入手机号码"));
      } else {
        if (this.ruleForm.phone !== "") {
          let Reg = /^1[3456789]\d{9}$/;
          if (Reg.test(value)) {
            callback();
          } else {
            callback(new Error("请输入正确的手机号码格式"));
          }
        }
      }
    };
    var validatepassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.password !== "") {
          let Reg = /^[a-zA-Z0-9]{4,20}$/;
          if (Reg.test(value)) {
            callback();
          } else {
            callback(new Error("请输入4-20位无特殊格式"));
          }
        }
      }
    };

    return {
      labelPosition: "right",
      ruleForm: {
        phone: "",
        password: ""
      },
      rules: {
        phone: [{ validator: validatephone, trigger: "blur" }],
        password: [{ validator: validatepassword, trigger: "blur" }]
      }
    };
  },
  methods: {
    async submitForm() {
      let { phone } = this.ruleForm;
      let { password } = this.ruleForm;
      let { data } = await this.$axios.get("/reg", {
        params: {
          phone: phone
        }
      });
      if (data.code == 250) {
        alert("该用户名已存在");
      } else if (data.code == 1000) {
        let success = await this.$axios.post("/reg", {
          'phone': phone,
          'password': password
        });
           if(success.data.code==1000){
               this.$router.push({
                   name:'userline'
               })
           }else{
               alert('由于网络原因,请稍后再试')
           }
      }
    },
    resetForm(){
        this.ruleForm={
        phone: "",
        password: ""
      }
    }
  }
};
</script>
<style scoped>
</style>