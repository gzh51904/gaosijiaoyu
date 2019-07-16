<template>
  <div class="gaosijiaoyu">
    <h1>请登录</h1>
    <form>
      <div class="phone">
        <input type="tel" placeholder="请输入手机号" v-model="phone" @blur="qq(phone)" />
        <span></span>
      </div>
      <div class="password">
        <input type="password" placeholder="请输入密码" v-model="password" @blur="ww(password)" />
      </div>
    </form>
    <div class="dengl">
      <button class="btn" @click="login( qq1, ww1,phone, password)">登录</button>
      <button class="btn" @click="reg()">注册</button>
    </div>
    <span class="tishibeijing" v-show="ok1"></span>
    <span class="tishiwenzi" v-show="ok2">手机号或密码错误</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      phone: "",
      password: "",
      qq1: false,
      ww1: false,
      ok1: false,
      ok2: false
    };
  },
  methods: {
    qq(phone) {
      this.phone = phone;
      let Reg = /^1[3456789]\d{9}$/;
      if (this.phone == "") {
        console.log("请输入手机号");
      } else if (!Reg.test(this.phone)) {
        console.log("手机号格式错误");
        return (this.qq1 = false);
      } else {
        return (this.qq1 = true);
      }
    },
    ww(password) {
      this.password = password;
      // 密码不能含有非法字符，长度在4-10之间
      let Reg = /^[a-zA-Z0-9]{4,20}$/;
      if (this.password == "") {
        console.log("请输入密码");
        return (this.ww1 = false);
      } else if (!Reg.test(this.password)) {
        console.log("密码为4~20位数");
        return (this.ww1 = false);
      } else {
        return (this.ww1 = true);
      }
    },
    login(qq1, ww1, phone, password) {
      let yonghu = (document.cookie = `phone=${phone};`);

      if (qq1 == true && ww1 == true) {
        this.$axios
          .get("/login", {
            params: {
              phone,
              password
            }
          })
          .then(res => {
            console.log(res);

            let { data, headers } = res;

            if (data.code == 250) {
              alert("用户名或密码错误！");
            } else if (data.code === 1000) {
              console.log("登录成功");

              // 保存登录信息
              localStorage.setItem("Authorization", data.data);

              // 获取目标路径
              let targetPath = this.$route.query.redirectTo;

              this.$router.replace(targetPath ? targetPath : "/xuanke");
            }
          });
      }
    },
    reg(name) {
      
      this.$router.push({ name: "Reg" });
    }
  },
  created() {
    // console.log(tt);
  }
};
</script>
<style scoped>
h1 {
  margin-top: 1.2rem;
  padding-left: 0.706667rem;
  margin-bottom: 1.8rem;
}

p {
  padding-left: 0.706667rem;
  color: #525252;
  font-size: 0.4rem;
}
.phone,
.password,
.checkNum {
  padding: 0.4rem 0;
  margin: 0 0.633333rem;
  border-bottom: 0.026667rem solid #cccccc;
}

input {
  line-height: 0.8rem;
  font-size: 0.416667rem;
  width: 100%;
  border: none;
  outline: none;
}
.checkNum {
  position: relative;
}
.checkNum span {
  display: inline-block;
  position: absolute;
  top: 30%;
  right: 0;
  font-size: 0.4rem;
  background: #ccc;
  padding: 0.066667rem 0.133333rem;
  border-radius: 0.1rem;
}
.dengl {
  margin-top: 0.666667rem;
}
.btn {
  margin: 0.8rem 0.4rem 0.2rem 0.4rem;
  width: 40%;
  height: 1.2rem;
  font-size: 0.533333rem;
  background: #64bb76;
  outline: none;
  border: none;
}
.mima {
  padding-left: 7.333333rem;
  margin-top: 0.433333rem;
}
.agree {
  position: absolute;
  bottom: 2.666667rem;
  padding-left: 1.666667rem;
}
.xieyi {
  position: absolute;
  bottom: 2.666667rem;
  padding-left: 4.666667rem;
  color: #64bb76;
}
.tishibeijing {
  position: absolute;
  top: 23%;
  left: 50%;
  width: 8.866667rem;
  height: 3.333333rem;
  background: #000;
  opacity: 0.6;
  border-radius: 0.266667rem;
  transform: translate(-50%, 0);
}
.tishiwenzi {
  position: absolute;
  top: 28%;
  left: 50%;
  width: 4.666667rem;
  height: 1.333333rem;
  text-align: center;
  line-height: 1.333333rem;
  font-size: 0.553333rem;
  color: #ffffff;
  z-index: 100;
  transform: translate(-50%, 0);
}
</style>