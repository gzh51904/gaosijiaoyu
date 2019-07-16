<template>
  <!-- 系统设置UI -->
  <div class="xitongshezhi">
    <p>
      <span class="iconfont icon-fanhui" @click="goto12()"></span>
      <span>系统设置</span>
    </p>
    <ul>
      <li>
        <span>修改密码</span>
        <span class="iconfont icon-fanhui"></span>
      </li>
      <li>
        <span>清除缓存</span>
        <span>0kb</span>
      </li>
      <li>
        <span>版本信息</span>
        <span>当前版本号2.2.1</span>
      </li>
      <li>
        <span>关于我们</span>
        <span class="iconfont icon-fanhui"></span>
      </li>
    </ul>
    <div class="btn">
      <button @click="goto13()">退出登录</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { logined: false };
  },
  methods: {
    goto12(name) {
      this.$router.push({
        name: "Mine"
      });
    },
    goto13(name) {
      this.logined = false;
      localStorage.removeItem("Authorization");
      this.$router.replace({ name: "Xuanke" });
    },
    created() {
      let token = localStorage.getItem("Authorization");
      this.logined = token ? true : false;
    }
  }
};
</script>
</script>
<style scoped>
/* 系统设置样式 */
.xitongshezhi {
  width: 100%;
}
.xitongshezhi p {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  font-weight: bold;
  font-size: 0.4rem;
}
.xitongshezhi p .icon-fanhui {
  float: left;
  margin-left: 0.266667rem;
}
.xitongshezhi ul {
  margin-top: 1rem;
}
.xitongshezhi ul li {
  height: 0.5rem;
  font-size: 0.4rem;
  padding: 0.3rem;
}
.xitongshezhi ul li span:nth-child(2) {
  color: #666666;
  float: right;
}
.xitongshezhi .btn {
  text-align: center;
}
.xitongshezhi button {
  margin-top: 0.5rem;
  width: 7rem;
  height: 1.1rem;
  background: #58bc58;
  color: #ffffff;
  border-radius: 0.2rem;
  border: none;
  outline: none;
}
ul li .icon-fanhui {
  transform: rotate(180deg);
}
ul {
  padding-left: 0;
}
ul li {
  list-style: none;
}
</style>