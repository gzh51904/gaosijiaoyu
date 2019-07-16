<template>
  <div class="xuanzebanji">
    <!-- header -->
    <div class="header">
      <!-- nav -->
      <div class="nav">
        <span class="iconfont" @click="goto7()">&#xe63b;</span>
        <span class="iconfont" @click="chuxian(ok,ok1)" style="font-weight:bolder">选择班级</span>
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
      <div class="choose">
        <div class="select">
          <span class="iconfont" @click="chuxian1(ok1)">日期&#xe65a;</span>
        </div>

        <!-- select1 -->
        <transition name="fade">
          <div class="select1" v-show="ok1" v-bind:style="fadebox1">
            <div class="left1">
              <ul>
                <li>不限日期</li>
                <li>一期2019年07月14日 - 2019年07月28日</li>
                <li>二期2019年07月31日 - 2019年08月17日</li>
                <li>三期2019年08月18日 - 2019年08月31日</li>
              </ul>
            </div>
          </div>
        </transition>

        <div class="select">
          <span class="iconfont" @click="chuxian2(ok1,ok2)">时段&#xe65a;</span>
        </div>

        <!-- slect2 -->
        <transition name="fade">
          <div class="select2" v-show="ok2" v-bind:style="fadebox2">
            <div class="left2">
              <ul>
                <li>不限时段</li>
                <li>上午</li>
                <li>下午</li>
                <li>夜晚</li>
              </ul>
            </div>
          </div>
        </transition>

        <div class="select">
          <span class="iconfont" @click="chuxian3(ok1,ok2,ok3)">老师&#xe65a;</span>
        </div>

        <!-- select3 -->
        <transition name="fade">
          <div class="select3" v-show="ok3" v-bind:style="fadebox3">
            <div class="left3">
              <ul>
                <li>不限老师</li>
                <li>白猩猩</li>
                <li>陈贺丹</li>
                <li>陈玲</li>
                <li>陈思思</li>
                <li>陈晓珍</li>
                <li>崔雨欣</li>
                <li>崔媛媛</li>
                <li>代夏荧</li>
              </ul>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <div class="middle">
      <div class="lessons" v-for="xianshi in info" :key="xianshi.id">
        <div>
          <span class="span1">面授班</span>
          <span class="span2">暑</span>
          <strong>{{xianshi.lesson}}</strong>
        </div>
        <p
          class="iconfont p1"
          style="font-size:.333333rem;padding-left: .533333rem;"
        >&#xe628;&nbsp;{{xianshi.term}}</p>
        <p
          class="iconfont p1"
          style="font-size:.333333rem;padding-left: .533333rem;"
        >&#xe628;&nbsp;上午08:00 - 10:00</p>
        <p
          class="iconfont p1"
          style="font-size:.333333rem;padding-left: .533333rem;"
        >&#xe628;&nbsp;{{xianshi.area}}</p>
        <p
          class="iconfont p1"
          style="font-size:.333333rem;padding-left: .533333rem;"
        >&#xe628;&nbsp;{{xianshi.keshi}}</p>
        <ul class="ul1">
          <li>
            <img src="../assets/img/minetouxiang.jpg" alt />
            <span>{{xianshi.teacher}}</span>
          </li>
          <li>
            <p>
              <span>￥{{xianshi.price*1.3}}</span>
              <span>￥{{xianshi.price}}</span>
            </p>
            <p>
              <button @click="goto8(xianshi)">报名</button>
            </p>
          </li>
        </ul>
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
      ok: false,
      ok1: false,
      ok2: false,
      ok3: false,
      fadebox: {},
      fadebox1: {},
      fadebox2: {},
      fadebox3: {},
      subjects: ""
    };
  },
  async created() {
    // 获取传入id;
    let { subjects } = this.$route.params;
    console.log(subjects);
    this.subjects = subjects;
    let { data } = await this.$axios.get("/goods/" + subjects, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      }
    });
    this.info = data.data;
    // ............................
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
    goto7(name) {
      this.$router.push({ name: "Xuanke" });
    },
    async goto8(xianshi) {
      let phone = document.cookie.slice(6);
      xianshi.jiaofei = "未付款";
      xianshi.username = phone;
      console.log(xianshi);
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
        price,
        jiaofei,
        username
      } = xianshi;
      let {data}= await this.$axios.post("/order", {
        lesson,
        subjects,
        school,
        clas,
        term,
        district,
        area,
        teacher,
        keshi,
        price,
        jiaofei,
        username
      });
      if(data.code==1000){
        ++this.shuliang
      }
    },
      goto27(name) {
      this.$router.push({ name: "Xuankedan" });
    }
  }
};
</script>
<style scoped>
i {
  position: fixed;
  top: 0.15rem;
  right: 0.2rem;
  width: 0.7rem;
  height: 0.7rem;
}
.xuanzebanji {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.header {
  width: 100%;
  padding: 0 0 0 0.333335rem;
  box-sizing: border-box;
  padding-left: 0;
  position: relative;
}
.nav {
  display: flex;
  justify-content: space-between;
  padding: 0.4rem;
  box-sizing: border-box;
  background: #58bc58;
  color: #fff;
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
  width: 100%;
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
  width: 100%;
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
ul,
li {
  list-style: none;
  margin: 0;
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
  margin-top: 0.366667rem;
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
  margin: 0.4rem 0;
  padding-left: 0.133333rem;
}
.ul1 li:nth-child(1) {
  float: left;
}
.ul1 li:nth-child(1) img {
  display: block;
  width: 1.1rem;
  height: 1.1rem;
}
.ul1 {
  overflow: hidden;
  padding-left: 0.266667rem;
}
.ul1 li:nth-child(2) {
  float: right;
}
.ul1 li:nth-child(2) p:nth-child(1) span:nth-child(1) {
  text-decoration: line-through;
  color: #666;
}
.ul1 li:nth-child(2) p:nth-child(1) span:nth-child(2) {
  color: orange;
  font-weight: bold;
  font-size: 0.433333rem;
  margin-left: 0.133333rem;
}
.ul1 li:nth-child(2) p:nth-child(2) button {
  width: 1.866667rem;
  outline: none;
  background: #58bc58;
  border: none;
  border-radius: 0.066667rem;
  padding: 0.096667rem 0;
}
</style> 