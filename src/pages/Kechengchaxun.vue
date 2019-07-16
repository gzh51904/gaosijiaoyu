<template>
  <div class="kecheng">
    <!-- header -->
    <div class="header">
      <!-- nav -->
      <div class="nav">
        <span class="iconfont" @click="goto5()">&#xe63b;</span>
        <span
          class="iconfont"
          @click="chuxian(ok,ok1)"
          style="font-weight:bolder"
        >{{nianji}}&#xe65a;</span>
        <span class="iconfont" style="font-size:.5rem;">&#xe60a;</span>
        <mt-badge
          type="error"
          style="  position: absolute;
  top: .1rem;
  right: .1rem;
  width: 0.166667rem;
  height: 0.4rem;
  font-size:.1rem"
        >{{shuliang}}</mt-badge>
        <i class="dianji" @click="goto27()"></i>
      </div>
      <transition name="fade">
        <div class="navbox" v-show="ok" v-bind:style="fadebox">
          <div class="left">
            <ul>
              <li>学前班</li>
              <li>小学</li>
              <li>初中</li>
              <li>高中</li>
            </ul>
          </div>
          <div class="right">
            <ul>
              <li>学前班</li>
            </ul>
          </div>
        </div>
      </transition>

      <div class="choose">
        <div class="select">
          <span class="iconfont" @click="chuxian1(ok1)">{{title}}&#xe65a;</span>
        </div>

        <!-- select1 -->
        <transition name="fade">
          <div class="select1" v-show="ok1" v-bind:style="fadebox1">
            <div class="left1">
              <ul>
                <li>不限学科</li>
                <li>数学</li>
                <li>语文</li>
                <li>英语</li>
                <li>物理</li>
                <li>化学</li>
                <li>生物</li>
                <li>历史</li>
                <li>地理</li>
                <li>政治</li>
                <li>编程</li>
              </ul>
            </div>
          </div>
        </transition>

        <div class="select">
          <span class="iconfont" @click="chuxian2(ok1,ok2)">学期&#xe65a;</span>
        </div>

        <!-- slect2 -->
        <transition name="fade">
          <div class="select2" v-show="ok2" v-bind:style="fadebox2">
            <div class="left2">
              <ul>
                <li>不限学期</li>
                <li>2019暑假</li>
                <li>2019秋季</li>
              </ul>
            </div>
          </div>
        </transition>

        <div class="select">
          <span class="iconfont" @click="chuxian3(ok1,ok2,ok3)">校区&#xe65a;</span>
        </div>

        <!-- select3 -->
        <transition name="fade">
          <div class="select3" v-show="ok3" v-bind:style="fadebox3">
            <div class="left3">
              <ul>
                <li>不限校区</li>
                <li>海淀区</li>
                <li>朝阳区</li>
                <li>西城区</li>
                <li>东城区</li>
                <li>石景区</li>
                <li>昌平区</li>
                <li>丰台区</li>
                <li>房山区</li>
              </ul>
            </div>
            <div class="right3">
              <ul>
                <li>公主坟-翠微校区</li>
                <li>管庄校区</li>
                <li>阜成门校区</li>
                <li>广安门校区</li>
                <li>朝阳门校区</li>
                <li>广渠门校区</li>
                <li>和平里校区</li>
                <li>玉泉路-远洋山水校区</li>
                <li>世纪城-居然之家校区</li>
                <li>刘家窑校区</li>
                <li>六里桥校区</li>
                <li>良乡校区</li>
              </ul>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <div class="middle">
      <div
        class="lessons"
        v-for="xianshi in info"
        :key="xianshi.id"
        @click="goto6(xianshi.subjects)"
      >
        <div>
          <span class="span1">面授班</span>
          <span class="span2">暑</span>
          <strong>{{xianshi.lesson}}</strong>
        </div>
        <p
          class="iconfont p1"
          style="font-size:.333333rem;padding-left: .533333rem;"
        >&#xe628;&nbsp;{{xianshi.keshi}}</p>
        <p class="p2">以培养学生文学素养为理念的“大语文”观为基本教育的理念...</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shuliang: "",
      info: [],
      nianji: "学前班",
      title: "",
      ok: false,
      ok1: false,
      ok2: false,
      ok3: false,
      fadebox: {},
      fadebox1: {},
      fadebox2: {},
      fadebox3: {}
    };
  },
  async created() {
    let { title } = this.$route.params;
    let { data } = await this.$axios.get("/goods/" + title, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      }
    });
    this.title = title;
    this.info = data.data;

    // .................................
    let oData = await this.$axios.get("/order"); 
     let listdata = [];
    oData.data.data.forEach(el => {
      if (el.jiaofei == "未付款") {
      
        listdata.push(el);
       
      }
    }); 
    this.shuliang = listdata.length;
  },
  methods: {
    chuxian(ok, ok1, ok2, ok3) {
      this.ok = !ok;
      this.ok1 = false;
      this.ok2 = false;
      this.ok3 = false;
    },
    chuxian1(ok1, ok2, ok3) {
      this.ok1 = !ok1;
      this.ok2 = false;
      this.ok3 = false;
    },
    chuxian2(ok1, ok2, ok3) {
      this.ok2 = !ok2;
      this.ok1 = false;
      this.ok3 = false;
    },
    chuxian3(ok1, ok2, ok3) {
      this.ok3 = !ok3;
      this.ok1 = false;
      this.ok2 = false;
    },
    goto5(name) {
      this.$router.push({ name: "Xuanke" });
    },
    goto6(subjects) {
      this.$router.push({ name: "Xuanzebanji", params: { subjects } });
    },
    goto27(name) {
      this.$router.push({ name: "Xuankedan" });
    }
  }
};
</script>
<style scoped>
.kecheng {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.header {
  width: 100%;
  padding: 0.303335rem 0 0 0.333335rem;
  box-sizing: border-box;
  padding-left: 0;
  position: relative;
}
i {
  position: fixed;
  top: 0.15rem;
  right: 0.2rem;
  width: 0.7rem;
  height: 0.7rem;
}
.nav {
  display: flex;
  justify-content: space-between;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  box-sizing: border-box;
}
.nav .fanhui {
  position: fixed;
  top: 0.3rem;
  left: 0.35rem;
  width: 0.566667rem;
  height: 0.566667rem;
}
.navbox {
  width: 100%;
  height: 6.333333rem;
  position: absolute;
  z-index: 1;
}
.select1 {
  width: 100%;
  height: 6.333333rem;
  position: absolute;
  z-index: 2;
  top: 1rem;
}

.select2 {
  width: 100%;
  height: 6.333333rem;
  position: absolute;
  z-index: 3;
  top: 1rem;
}

.select3 {
  width: 100%;
  height: 6.333333rem;
  position: absolute;
  z-index: 4;
  top: 1rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.left {
  width: 25%;
  height: 100%;
  background: #ffffff;
  padding-top: 0;
  float: left;
  padding-left: 0.266667rem;
  box-sizing: border-box;
}
.left1 {
  width: 100%;
  height: 100%;
  background: #ffffff;
  padding-top: 0;
  float: left;
}
.left2 {
  width: 100%;
  height: 100%;
  background: #ffffff;
  padding-top: 0;
  float: left;
}

.left3 {
  width: 4rem;
  height: 100%;
  background: #ffffff;
  padding-top: 0;
  float: left;
}
.left1 ul {
  height: 100%;
  overflow-y: auto;
  padding-left: 0.4rem;
  box-sizing: border-box;
}
.left1 ul::-webkit-scrollbar {
  display: none;
}
.left1 ul li {
  margin-top: 0.666667rem;
}
.left2 ul {
  height: 100%;
  padding-left: 0.4rem;
  box-sizing: border-box;
}
.left2 ul::-webkit-scrollbar {
  display: none;
}
.left2 ul li {
  margin-top: 0.666667rem;
}
.left3 {
  width: 30%;
}
.left3 ul {
  height: 100%;
  overflow-y: auto;
  padding-left: 0.4rem;
  box-sizing: border-box;
}
.left3 ul::-webkit-scrollbar {
  display: none;
}
.left3 ul li {
  margin-top: 0.666667rem;
}
.right3 li {
  padding-top: 0.133333rem;
}
.right {
  width: 75%;
  height: 100%;
  background: #fbfbfd;
  float: left;
}

.right3 {
  width: 70%;
  height: 100%;
  background: #fbfbfd;
  float: left;
}
.right3 ul {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding-left: 0.4rem;
  box-sizing: border-box;
}
.right3 ul::-webkit-scrollbar {
  display: none;
}
.right3 ul li {
  margin-top: 0.666667rem;
}
ul,
li {
  list-style: none;
  margin: 0;
}
.left ul {
  height: 100%;
}
.left ul li {
  margin-top: 0.666667rem;
}
.right ul {
  height: 100%;
  overflow-y: auto;
}
.right ul li {
  margin-top: 0.666667rem;
}
/* -------header------ */

/* ------choose---- */
.choose {
  width: 100%;
  height: 1.333333rem;
  /* background: pink; */
  position: relative;
  display: flex;
  justify-content: space-around;
  margin-top: 0.766667rem;
}
.select {
  width: 2.4rem;
  height: 0.666667rem;
  background: #ccc;
  padding-top: 0.133333rem;
  text-align: center;
  line-height: 0.666667rem;
  border-radius: 0.133333rem;
}
.middle {
  flex: 1;
  flex-direction: column;
  overflow-y: auto;
  width: 100%;
  padding: 0.4rem;
  box-sizing: border-box;
}
.middle::-webkit-scrollbar {
  display: none;
}
.lessons {
  width: 100%;
  background: #ffffff;
  border-radius: 0.133333rem;
  margin-top: 0.4rem;
  box-shadow: 5px 5px 5px #f3f3f3, 3px -3px 3px #f3f3f3, -3px 3px 3px #f3f3f3,
    -3px -3px 3px #f3f3f3;
  padding: 0.4rem;
  box-sizing: border-box;
}

.span1 {
  border: 0.013333rem solid green;
  color: green;
}
.span2 {
  background: rgb(250, 50, 50);
  color: #ffffff;
  margin: 0 0.133333rem;
}
strong {
  font-size: 0.466667rem;
  margin-left: 0.106667rem;
}
.p1 {
  margin: 0.5rem 0;
}
.p2 {
  margin: 0.5rem 0;
}
</style> 