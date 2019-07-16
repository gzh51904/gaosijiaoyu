<template>
  <div class="gaosijiaoyu">
    <div class="header">
      <p>消息</p>
      <ul>
        <li @click="change1">平台通知</li>
        <li @click="change1">课程提醒</li>
        <li @click="change2">高思服务</li>
      </ul>
      <div class="tongzhi" v-show="show1">
        <img src="../assets/img/what.jpg" alt />
        <p>暂无相关数据~</p>
      </div>
      <div class="kefu" v-show="show2">
        <li>
          <img src="../assets/img/kefu.png" alt />
          <span>高思客服</span>
        </li>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pages: [
        {
          name: "",
          path: "/sss"
        }
      ],
      show1: true,
      show2: false,
      active: "/Xuanke"
    };
  },
  methods: {
    change1() {
      this.show2 = false;
      this.show1 = true;
    },
    change2() {
      this.show2 = true;
      this.show1 = false;
    }
  }
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 1.2rem;
  padding: 0.303335rem 0 0 0.333335rem;
  box-sizing: border-box;
}
.header p {
  font-weight: bold;
  font-size: 0.533333rem;
}
.header ul {
  width: 100%;
}
.header ul li {
  width: 25%;
  float: left;
  font-size: 0.4rem;
  list-style: none;
  text-align: center;
}
.header ul li:hover {
  color: #58bc58;
  font-weight: bold;
  border-bottom: 0.0625rem solid #58bc58;
}
.tongzhi {
  position: relative;
}
.tongzhi img {
  position: absolute;
  left: 2.2rem;
  top: 2.333333rem;
}
.tongzhi p {
  text-align: center;
  font-size: 0.066667rem;
  position: absolute;
  left: 3.2rem;
  top: 6.333333rem;
}
.kefu {
  box-shadow: 2px 2px 2px #888888;
  margin-top: 1.5rem;
}
.kefu li {
  list-style: none;
  position: relative;
}
.kefu li span {
  font-size: 0.4rem;
  font-weight: bold;
  position: absolute;
  top: 0.133333rem;
  left: 1.5rem;
}
</style>