<template>
  <!-- 养娃查看全部UI -->
  <div class="yangwa">
    <div>
      <img src="../assets/img/backicon-yangwa.jpg" @click="goto25()" alt />
    </div>
    <h2>栏目内容</h2>
    <ul>
      <li v-for="item in  yangwa" :key="item.title">
        <img :src="item.imgUrl" alt />
        <h3>{{item.xinxi}}</h3>
        <p>
          <span>3653阅读</span>
          <span>07-12</span>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      yangwa: [
        {
          title: "天价学区房上热搜",
          xinxi: "你对北京升学一无所知",
          imgUrl: require("../assets/xuankeimg/msg-05.png")
        },
        {
          title: "中考查分分一段",
          xinxi: "一分一段是参考，一问一答很键",
          imgUrl: require("../assets/xuankeimg/msg-06.png")
        },
        {
          title: "新一届老母亲挺住",
          xinxi: "长征路刚走1%，剩下99%在等你",
          imgUrl: require("../assets/xuankeimg/msg-01.png")
        },
        {
          title: "幼升小录取通知！",
          xinxi: "海淀幼升小录取结果今天能查了",
          imgUrl: require("../assets/xuankeimg/msg-06.png")
        }
      ]
    };
  },
  methods: {
    goto25(name) {
      this.$router.push({ name: "Xuanke" });
    }
  }
};
</script>

<style>
/* 养娃查看更多样式 */
.yangwa div {
  width: 100%;
  height: 6rem;
  background: url(../assets/img/new-B.jpg) no-repeat center;
  background-size: 100% 6rem;
}
.yangwa div img {
  width: 0.366667rem;
  height: 0.366667rem;
  margin-left: 0.35rem;
  margin-top: 0.35rem;
}

.yangwa h2 {
  padding-left: 0.325rem;
  padding-top: 0.325rem;
  margin-top: -0.4rem;
  background: #ffffff;
  border-top: 1px solid #222222;
  border-radius: 17px 17px;
}
.yangwa ul {
  width: 100%;
  float: right;
  padding-left: 0.4rem;
  box-sizing: border-box;
}
.yangwa ul li {
  height: 3rem;
  list-style: none;
  border-bottom: 0.01rem solid #666666;
  position: relative;
}

.yangwa ul li img {
  width: 3rem;
  height: 2rem;
  position: absolute;
  top: 0.5rem;
  left: 0rem;
}
.yangwa ul li h3 {
  font-weight: normal;
  position: absolute;
  top: 0.7rem;
  left: 3.2rem;
}

.yangwa ul li p {
  position: absolute;
  top: 1.8rem;
  left: 3.2rem;
}

.yangwa ul li p {
  width: 5rem;
  color: #666666;
}
.yangwa ul li p span:nth-child(2) {
  float: right;
}
</style>