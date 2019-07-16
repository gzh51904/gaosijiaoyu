<template>
  <div class="gaosijiaoyu">
    <h1>注册</h1>
    <form>
      <div class="phone">
        <input type="tel" placeholder="请输入手机号" v-model="phone" @blur="qq(phone)" />
        <span></span>
      </div>
      <div class="password">
        <input type="password" placeholder="请输入密码" v-model="password" @blur="ww(password)" />
      </div>
      <div class="checkNum">
        <input type="primary" placeholder="请输入验证码" v-model="checkNum" @blur="ee(checkNum)" />
        <span @click="aa()">{{btntxt}}</span>
      </div>
    </form>
    <button class="btn" @click="reg(qq1, ww1, ee1,phone, password)">注册</button>
    <div class="mima">密码登录</div>
    <span class="agree">注册代表您已同意</span>
    <span class="xieyi">《高思用户协议》</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      disabled: false,
      time: 0,
      btntxt: "获取验证码",
      yanzhengma: "",
      phone: "",
      password: "",
      checkNum: "",
      qq1: false,
      ww1: false,
      ee1: false
    };
  },
  methods: {
    qq(phone) {
      this.phone = phone;
      this.$axios
        .get("/reg", {
          params: {
            'phone': phone
          }
        })
        .then(({ data }) => {
          if (data.code == 250) {
            console.log({ data });
            console.log(new Error("用户名已存在"));
            return (this.qq1 = false);
          } else {
            let Reg = /^1[3456789]\d{9}$/;
            if (this.phone == "") {
              console.log("请输入手机号");
            } else if (!Reg.test(this.phone)) {
              console.log("手机号格式错误");
              return (this.qq1 = false);
            } else {
              return (this.qq1 = true);
            }
          }
        });
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
    aa() {
      let arr = "0123456789";
      let res = [];
      for (let i = 1; i <= 4; i++) {
        res.push(arr.charAt(parseInt(Math.random() * 10)));
      }
      let res1 = res[0] + res[1] + res[2] + res[3];
      return (this.btntxt = res1);
    },
    ee(checkNum) {
      this.checkNum = checkNum;
      if (this.checkNum == "") {
        return console.log("请输入验证码");
      } else if (this.checkNum != this.btntxt) {
        console.log("请输入正确验证码");
        return (this.ee1 = false);
      } else {
        return (this.ee1 = true);
      }
    },
    reg(qq1, ww1, ee1, phone, password) {
      if (qq1 == true && ww1 == true && ee1 == true) {
        console.log("成功");
        console.log(phone, password);
        this.$axios
          .post("/reg", {
            phone,
            password
          })
          .then(({ data }) => {
            console.log(data);
            if (data.code == 1000) {
               this.$router.push({
                name:'Login'
              })
            }
          });
      } else {
        console.log("error submit!!");
        return false;
      }
    }
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
.btn {
  margin: 0.8rem 0.4rem 0.2rem 0.4rem;
  width: 92%;
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
</style>