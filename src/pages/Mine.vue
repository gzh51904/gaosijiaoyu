<template>
  <div class="gaosijiaoyu" style>
    <div></div>
    <div class="content">
      <div class="header">
        <span class="touxiang">
          <img src="../assets/img/minetouxiang.jpg" alt />
        </span>
        <span class="shezhi iconfont icon-shezhi" @click="goto11()"></span>
        <span class="xinxi">
          <span class="minename">{{userphone}}</span>
          <span class="nianji">高三</span>
        </span>
      </div>
      <div class="minenav">
        <ul>
          <li @click="goto10('Xuankedan')">
            <span class="iconfont icon-danzi"></span>
            <p>选课单</p>
          </li>
          <li @click="goto14(`Weifukuan`)">
            <span class="iconfont icon-daifukuandingdan"></span>
            <p>待付款</p>
          </li>
          <li @click="goto20(`Yifukuan`)">
            <span class="iconfont icon-icon"></span>
            <p>已付款</p>
          </li>
          <li @click="goto21(`Ttuibantuifei`)">
            <span class="iconfont icon-tuikuan"></span>
            <p>退班退费</p>
          </li>
        </ul>
      </div>
      <div class="banner">
        <aside>
          <p class="aside-b">认证加入会员</p>
          <p class="aside-s">M E M B E R</p>
        </aside>
        <div class="right">
          <p class="div-b">点击马上认证</p>
          <p>享受购课优惠</p>
        </div>
      </div>
      <div class="swiper">
        <span class="icon">!</span>
        <span class="news">会员专属优惠自2019年暑假课程报名时开始生效</span>
      </div>
      <div class="line">
        <li>
          <span class="iconfont icon-bi"></span>
          <span>高思币</span>
          <span class="iconfont icon-fanhui"></span>
        </li>
        <li>
          <span class="iconfont icon-wodeyouhuijuan"></span>
          <span>优惠券</span>
          <span class="iconfont icon-fanhui"></span>
        </li>
        <li>
          <span class="iconfont icon-renqun"></span>
          <span>带新生 得奖励</span>
          <span class="iconfont icon-fanhui"></span>
        </li>
        <li>
          <span class="iconfont icon-liwu"></span>
          <span>学员认证</span>
          <span class="iconfont icon-fanhui"></span>
        </li>
        <li>
          <span class="iconfont icon-shoucang"></span>
          <span>我的关注</span>
          <span class="iconfont icon-fanhui"></span>
        </li>
        <li>
          <span class="iconfont icon-duihua"></span>
          <span>我的评价</span>
          <span class="iconfont icon-fanhui"></span>
        </li>
        <li>
          <span class="iconfont icon-yijianfankui"></span>
          <span>意见反馈</span>
          <span class="iconfont icon-fanhui"></span>
        </li>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userphone:"",
    };
  },
  methods: {
    goto10(name) {
      this.$router.push({
        name
      });
    },
    goto11(name) {
      this.$router.push({
        name: "Xitongshezhi"
      });
    },
    goto14() {
      this.$router.push({
        name: "Weifukuan",
        // parent: "Weifukuan"
      });
    },
    goto20() {
      this.$router.push({
        name: "Yifukuan",
        // parent: "Yifukuan"
      });
    },
    goto21() {
      this.$router.push({
        name: "Tuibantuifei",
        // parent: "Ttuibantuifei"
      });
    }
  },
  created(){
   
    if(document.cookie){
      this.userphone=document.cookie.slice(6)
    }
    else{
      this.userphone="学员"
    }
  }
};
</script>
<style scoped>
.gaosijiaoyu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.content {
  overflow-y: auto;
  flex: 1;
}
.content::-webkit-scrollbar {
  display: none;
}
.header {
  height: 2.333333rem;
}
.touxiang img {
  height: 1.566667rem;
  margin: 0.866rem 0 0 0.906667rem;
  float: left;
}
.xinxi {
  display: flex;
  flex-direction: column;
  padding: 1.02rem 0 0 0.56rem;
}
.minename {
  font-size: 0.666667rem;
  font-weight: 900;
}
.nianji {
  font-size: 0.4rem;
  margin-top: 0.133333rem;
}
.shezhi {
  font-size: 0.6rem;
  float: right;
  margin-top: 0.366667rem;
  margin-right: 0.266667rem;
}
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}
.minenav ul {
  display: flex;
  justify-content: space-around;
  margin: 1.1rem 0 0 0.433333rem;
}
.minenav ul li .iconfont {
  font-size: 0.633333rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
}
.minenav ul li p {
  font-size: 0.4rem;
}
.banner {
  height: 2.1rem;
  background-color: #686868;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  margin: 0 0.306667rem;
  color: #fcfcfc;
}
aside {
  margin-left: 0.44rem;
  float: left;
}
.aside-b {
  font-size: 0.63333rem;
  line-height: 0.6rem;
  padding: 0;
  margin-top: 0.433333rem;
  margin-bottom: 0.133333rem;
}
.aside-s {
  padding: 0px;
}
.right {
  float: right;
  width: 3rem;
  height: 1rem;
  background-color: #999;
  text-align: center;
  margin-top: 0.333333rem;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
}
.right p {
  margin: 0;
  padding: 0;
  color: #ccc;
  font-size: 0.3rem;
}
.right p:nth-child(1) {
  color: #fff;
  font-size: 0.3555rem;
}
.swiper {
  background-color: #ededed;
  margin: 0.4rem 0.746667rem;
  padding: 0.266667rem 0;
  border-radius: 1.15rem;
}
.swiper .icon {
  float: left;
  margin-left: 0.4rem;
  margin-right: 0.1rem;
  width: 0.433333rem;
  height: 0.433333rem;
  border-radius: 50%;
  background-color: #6f6f6f;
  color: #fff;
  text-align: center;
  font-weight: 800;
}
.line {
  font-size: 0.433333rem;
  color: #666666;
  margin: 0.4rem 1.026667rem;
}
.line li {
  padding-bottom: 0.9rem;
}

.line li:nth-child(3),
li:nth-child(7) {
  padding-top: 1rem;
  border-top: 1px solid #ebebeb;
}
.line li span:nth-child(2) {
  margin-left: 0.4rem;
}
.line li span:nth-child(3) {
  float: right;
  color: #bdbdbd;
  font-size: 0.366667rem;
  text-align: center;
  transform: rotate(180deg);
  margin-top: 0.2rem;
}
.line .iconfont {
  font-size: 0.6rem;
}
</style>