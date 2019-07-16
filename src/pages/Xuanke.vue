<template>
  <div class="gaosijiaoyu">
    <div class="header">
      <span>选课</span>
      <input type="text" @click="gotosearch('search')" placeholder="请输入老师或校区" />
      <span class="iconfont" style="font-size:.5rem;">&#xe60a;</span>
      <mt-badge
        type="error"
        style="position: absolute;
  top: .1rem;
  right: .1rem;
  width: 0.166667rem;
  height: 0.4rem;
  font-size:.1rem"
      >{{shuliang}}</mt-badge>
      <i class="dianji" @click="goto27()"></i>
      <img class="img1" src="../assets/img/sousuo.jpg" alt />
    </div>
    <div class="main">
      <div class="main1">
        <mt-swipe :show-indicators="false" :auto="4000">
          <mt-swipe-item>
            <img src="../assets/xuankeimg/banner-01.png" alt />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/xuankeimg/banner-02.png" alt />
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="main2">
        <mt-swipe :auto="0">
          <mt-swipe-item>
            <ul class="ul1">
              <li v-for="nav1 in kemu1" :key="nav1.kecheng" @click="goto(nav1.title)">
                <img :src="nav1.bkgUrl" alt />
                <span>{{nav1.title}}</span>
              </li>
            </ul>
          </mt-swipe-item>
          <mt-swipe-item>
            <ul>
              <li v-for="nav2 in  kemu2" :key="nav2.kecheng" @click="goto1(nav2.title)">
                <img :src="nav2.bkgUrl" alt />
                <span>{{nav2.title}}</span>
              </li>
            </ul>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="main3">
        <img src="../assets/xuankeimg/gaosisudi.jpg" alt />
        <mt-swipe :show-indicators="false" class="xuankeBox">
          <mt-swipe-item>
            <p>必看：人大附ZP开始报名！为你一...</p>
            <p>KET/PET报名网站瘫痪，难度堪比...</p>
          </mt-swipe-item>
          <mt-swipe-item>
            <p>2019中考成绩今日揭晓，附一揭晓</p>
            <p>2019小升初尘埃落定，2020届...</p>
          </mt-swipe-item>
          <mt-swipe-item>
            <p>北京12平学区房卖360万就上热搜？</p>
            <p>今天海淀幼升小录取通知书终于来了</p>
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="main4">
        <img src="../assets/xuankeimg/gaosixiaoqu.png" alt />
        <img src="../assets/xuankeimg/gongkaijiangzuo.png" alt />
      </div>
      <div class="main5">
        <div class="main5-1">
          <span>京味"小初糕"</span>
          <img src="../assets/xuankeimg/chakanquanbu.jpg" @click="goto23()" alt />
        </div>
        <div class="main5-2">
          <ul>
            <li v-for="nav3 in  jingwei" :key="nav3.title "  @click="goto23()" >
              <img :src="nav3.imgUrl" alt />
              <p>{{nav3.title}}</p>
              <span>{{nav3.xinxi}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="main6">
        <div class="main6-1">
          <span>养娃那些事</span>
          <img src="../assets/xuankeimg/chakanquanbu.jpg" @click="goto24()" />
        </div>
        <div class="main6-2">
          <ul>
            <li v-for="nav4 in  yangwa" :key="nav4.title" @click="goto24">
              <img :src="nav4.imgUrl" alt />
              <p>{{nav4.title}}</p>
              <span>{{nav4.xinxi}}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="main7">
        <p>这里是高思</p>
        <div class="main7o">
          <div v-for="nav5 in  zlsgaosi" :key="nav5.title" @click="goto1(nav5.name)">
            <img :src="nav5.imgUrl" alt />
            <div>
              <p>{{nav5.title}}</p>
              <span>{{nav5.xinxi}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shuliang: "",
      kemu1: [
        {
          title: "语文",
          kecheng: "yuwen",
          bkgUrl: require("../assets/img/yuwen.png")
        },
        {
          title: "数学",
          kecheng: "shuxue",
          bkgUrl: require("../assets/img/shuxue.png")
        },
        {
          title: "英语",
          kecheng: "yingyu",
          bkgUrl: require("../assets/img/yingyu.png")
        },
        {
          title: "物理",
          kecheng: "wuli",
          bkgUrl: require("../assets/img/wuli.png")
        },
        {
          title: "化学",
          kecheng: "huaxue",
          bkgUrl: require("../assets/img/huaxue.png")
        },
        {
          title: "班课",
          kecheng: "banke",
          bkgUrl: require("../assets/img/banke.png")
        },
        {
          title: "1对1",
          kecheng: "1dui1",
          bkgUrl: require("../assets/img/1to1.png")
        },
        {
          title: "编程",
          kecheng: "biancheng",
          bkgUrl: require("../assets/img/biancheng.png")
        },
        {
          title: "特色",
          kecheng: "tese",
          bkgUrl: require("../assets/img/tese.png")
        },
        {
          title: "活动",
          kecheng: "huodong",
          bkgUrl: require("../assets/img/huodong.png")
        }
      ],
      kemu2: [
        {
          title: "历史",
          kecheng: "lishi",
          bkgUrl: require("../assets/img/lishi.png")
        },
        {
          title: "政治",
          kecheng: "zhengzhi",
          bkgUrl: require("../assets/img/zhengzhi.png")
        },
        {
          title: "地理",
          kecheng: "dili",
          bkgUrl: require("../assets/img/dili.png")
        },
        {
          title: "生物",
          kecheng: "shengwu",
          bkgUrl: require("../assets/img/shengwu.png")
        }
      ],
      jingwei: [
        {
          title: "天价学区房上热搜",
          xinxi: "你对北京升学一无所知",
          imgUrl: require("../assets/xuankeimg/msg-01.png")
        },
        {
          title: "中考查分一分一段",
          xinxi: "一分一段是参考，一问一答很关键",
          imgUrl: require("../assets/xuankeimg/msg-02.png")
        },
        {
          title: "新一届老母亲挺住",
          xinxi: "长征路刚走1%，剩下99%在等你",
          imgUrl: require("../assets/xuankeimg/msg-03.png")
        },
        {
          title: "幼升小录取通知！",
          xinxi: "海淀幼升小录取结果今天能查了",
          imgUrl: require("../assets/xuankeimg/msg-04.png")
        },
        {
          title: "中考查分一分一",
          xinxi: "一分一段参考，一问一答很关键",
          imgUrl: require("../assets/xuankeimg/msg-02.png")
        }
      ],
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
      ],
      zlsgaosi: [
        {
          title: "品牌故事",
          name: "Pinpai",
          xinxi: "高思教育，更懂北京教育的老师都在这！",
          imgUrl: require("../assets/xuankeimg/msg-08.png")
        },
        {
          title: "报班指南",
          name: "Baoban",
          xinxi: "高思教育，更懂北京教育的老师都在这！",
          imgUrl: require("../assets/xuankeimg/msg-09.png")
        },
        {
          title: '"高思乐享"使用攻略',
          name: "Gonglue",
          xinxi: "高思教育，更懂北京教育的老师都在这！",
          imgUrl: require("../assets/xuankeimg/msg-10.png")
        }
      ]
    };
  },
  methods: {
    gotosearch(name){
      this.$router.push({name})
    },
    goto(title) {
      this.$router.push({ name: "Kechengchaxun", params: { title } });
      console.log("qqq:", title);
    },
    goto1(name) {
      this.$router.push({ name });
    },
    goto23(name) {
      this.$router.push({ name: "Jingwei" });
    },
    goto24(name) {
      this.$router.push({ name: "Yangwa" });
    },
    goto27(name) {
      this.$router.push({ name: "Xuankedan" });
    }
  },
  async created() {
    let { data } = await this.$axios.get("/order");  
     let listdata = [];
    data.data.forEach(el => {  
      if (el.jiaofei == "未付款") {
        listdata.push(el); 
      } 
    }); 
      this.shuliang = listdata.length;
  }
};
</script>
<style scoped>
.gaosijiaoyu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.header {
  width: 100%;
  height: 1.2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
}
.header span {
  font-weight: bold;
  font-size: 0.533333rem;
}
.header input {
  width: 6rem;
  border-radius: 0.4rem;
  padding-left: 0.693333rem;
  padding-top: 0.093333rem;
  padding-bottom: 0.093333rem;
  border: none;
  background: #eeeeee;
  outline: none;
}
.header .img1 {
  position: absolute;
  left: 1.8rem;
  top: 0.36rem;
}
i {
  position: fixed;
  top: 0.15rem;
  right: 0.2rem;
  width: 0.7rem;
  height: 0.7rem;
}
.main {
  flex: 1;
  overflow-x: auto;
}

.main::-webkit-scrollbar {
  display: none;
}
.main1 {
  height: 3.066667rem;
}
.main1 .mint-swipe-item {
  margin-left: 0.306667rem;
}
.main1 .mint-swipe-item img {
  width: 9.333333rem;
}
.main2 {
  height: 4.066667rem;
}

.main2 .mint-swipe-item {
  width: 9.333333rem;
  margin-left: 0.333333rem;
}
.main2 .mint-swipe-indicators .is-active {
  width: 0.266667rem;
  background: #58bc58;
}
.main2 ul {
  display: flex;
  list-style: none;
  margin: 0;
  flex-wrap: wrap;
  padding: 0;
}
.main2 ul li {
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.main2 ul li span {
  color: #444;
}
.main2 .ul1 li {
  margin-bottom: 0.04rem;
}
.main2 .mint-swipe-indicator {
  background: red;
}
.main3 {
  padding-left: 0.833333rem;
  box-sizing: border-box;
  height: 1.1rem;
}
.main3 > img {
  float: left;
  width: 1.633333rem;
  height: 1.1rem;
  margin-right: 0.266667rem;
}
.main3 .xuankeBox {
  float: left;
  height: 1.1rem;
  width: 6.666667rem;
}
.main3 .xuankeBox .mt-swipe-item {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.main3 .xuankeBox p {
  font-size: 0.16rem;
  line-height: 0.213333rem;
}
.main4 {
  padding-top: 0.533333rem;
  display: flex;
  justify-content: center;
}
.main4 img {
  height: 1.466667rem;
  width: 45%;
}
.main4 img:nth-child(1) {
  margin-right: 0.266667rem;
}
.main5 {
  margin-top: 0.5rem;
}
.main5 .main5-1 span {
  display: inline-block;
  width: 70%;
  font-weight: bold;
  font-size: 0.403333rem;
  margin-left: 0.333333rem;
}
.main5 .main5-1 img {
  width: 1.8rem;
  height: 0.366667rem;
}
.main5 .main5-2 ul {
  display: flex;
  flex-wrap: nowrap;
  padding-left: 0.266667rem;
  overflow-y: hidden;
  overflow-x: auto;
  width: 100%;
  box-sizing: border-box;
}
.main5 .main5-2 ul::-webkit-scrollbar {
  display: none;
}
.main5 .main5-2 li {
  list-style: none;
  width: 4rem;
  height: 4rem;
  border-radius: 0.266667rem;
  border: 0 solid;
  box-shadow: rgb(235, 232, 232) 0 0.033rem 0 0.033rem;
  margin-bottom: 0.053333rem;
}
.main5 .main5-2 li:nth-child(1),
.main5 .main5-2 li:nth-child(2),
.main5 .main5-2 li:nth-child(3),
.main5 .main5-2 li:nth-child(4) {
  margin-right: 0.3rem;
}
.main5 .main5-2 li img {
  height: 1.833333rem;
}
.main5 .main5-2 li p {
  font-weight: bold;
  font-size: 0.3rem;
  line-height: 0.4rem;
  padding-left: 0.2rem;
  margin-top: 0.3rem;
  margin-bottom: 0.2rem;
}
.main5 .main5-2 li span {
  font-size: 0.2rem;
  line-height: 0.2rem;
  padding-left: 0.2rem;
}
/* ............................. */
.main6 {
  margin-top: 0.5rem;
}
.main6 .main6-1 span {
  display: inline-block;
  width: 70%;
  font-weight: bold;
  font-size: 0.403333rem;
  margin-left: 0.333333rem;
}
.main6 .main6-1 img {
  width: 1.8rem;
  height: 0.366667rem;
}
.main6 .main6-2 ul {
  display: flex;
  flex-wrap: nowrap;
  padding-left: 0.266667rem;
  overflow-y: hidden;
  overflow-x: auto;
  width: 100%;
  box-sizing: border-box;
}
.main6 .main6-2 ul::-webkit-scrollbar {
  display: none;
}
.main6 .main6-2 li {
  list-style: none;
  width: 4rem;
  height: 4rem;
  border-radius: 0.266667rem;
  border: 0 solid;
  box-shadow: rgb(235, 232, 232) 0 0.033rem 0 0.033rem;
  margin-bottom: 0.053333rem;
}
.main6 .main6-2 li:nth-child(1),
.main6 .main6-2 li:nth-child(2),
.main6 .main6-2 li:nth-child(3),
.main6 .main6-2 li:nth-child(4) {
  margin-right: 0.3rem;
}
.main6 .main6-2 li img {
  height: 1.833333rem;
}
.main6 .main6-2 li p {
  font-weight: bold;
  font-size: 0.3rem;
  line-height: 0.4rem;
  padding-left: 0.2rem;
  margin-top: 0.3rem;
  margin-bottom: 0.2rem;
}
.main6 .main6-2 li span {
  font-size: 0.2rem;
  line-height: 0.2rem;
  padding-left: 0.2rem;
}
.main7 > p {
  padding-left: 0.333333rem;
  margin-top: 0.533333rem;
  font-size: 0.403333rem;
  font-weight: bold;
}
.main7 .main7o {
  margin: 0.4rem;
  padding: 0.3rem;
  border-radius: 0.266667rem;
  box-shadow: rgb(235, 232, 232) 0 0 0 0.033rem;
  overflow: hidden;
}
.main7 .main7o img {
  float: left;
  width: 2rem;
  height: 2rem;
}
.main7 .main7o > div {
  overflow: hidden;
}
.main7 .main7o > div div {
  float: left;
  margin-left: 0.4rem;
}
.main7 .main7o p {
  font-size: 0.403333rem;
  font-weight: bold;
  margin-top: 0.133333rem;
}
.main7 .main7o span {
  display: inline-block;
  width: 4rem;
}
.main7 .main7o div:nth-child(1) {
  margin-top: 0.4rem;
  margin-bottom: 0.4rem;
}
.main7 .main7o > div:nth-child(2) {
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  box-sizing: border-box;
}
.main7 .main7o div:nth-child(3) {
  margin-top: 0.4rem;
  margin-bottom: 0.1rem;
}
</style>