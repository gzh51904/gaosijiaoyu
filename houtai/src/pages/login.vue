<template>
  <div>
      <h1 style="margin-right:20%;text-align:center;font-size:30px;">Administrator</h1>
  <el-form
    :model="ruleForm"
    status-icon
    :rules="rules"
    ref="ruleForm"
    label-width="200px"
    class="demo-ruleForm"
    style="margin-right:20%;margin-top:5%"
  >
     
    <el-form-item label="用户名" prop="username">
      <el-input type="username" v-model="ruleForm.username" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>
<script>
export default {
  data() {
    var validateUser = (rule, value, callback) => {
         if (value.length < 3) {
        callback(new Error("用户名不能少于3位"));
      }else{
          callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ validator: validateUser, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods:{
    submitForm(formData) {
        this.$refs[formData].validate(vaild => {
            if (vaild) {
                let {username,password}=this.ruleForm;
                this.$axios.get('/admin',{
                    params:{username,password}
                }).then(({data})=>{
                    if(data.code==250){
                         alert('用户名或密码错误！')
                    }else if(data.code==1000){
                        console.log(data.data)
                      localStorage.setItem('login',data.data);  
                      console.log('this.$route.query.rediretTo',this.$route.query.rediretTo)
                      
                      let targetPath= this.$route.query.redirectTo;
                        this.$router.replace(targetPath?targetPath:'/courseline')
                    }
                })
        }
  })
}
  } 
}
</script>
<style>
</style>
