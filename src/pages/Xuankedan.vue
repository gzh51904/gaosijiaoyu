<template>
  <div class="xuankedan">
    <header>
      <div>
        <span class="iconfont icon-fanhui" @click="backto"></span>
        <span>选课单</span>
        <span v-show="isdata">管理</span>
        <span v-show="!isdata"></span>
      </div>
      <nav>选课单内共有{{this.listdata.length}}个有效课程</nav>
    </header>
    <main>
      <div v-for="item in listdata" :key="item.id">
        <div class="area">
          <img src="../assets/img/area.png" alt />
          {{item.area}}
        </div>
        <div class="content">
          <div class="title">
            <span>面授班</span>
            <span>秋</span>
            <span>{{item.lesson}}</span>
          </div>
          <div class="xinxi">
            <span class="iconfont icon-danzi"></span>
            <span>授课时间:{{item.term}}</span>
          </div>
          <div class="xinxi xinxi2">
            <span class="iconfont icon-wode"></span>
            <span>授课老师:{{item.teacher}}</span>
          </div>
          <div class="select">
            <div class="select1">
              <input
                type="checkbox"
                @click="check($event,item.id)"
                :value="item.id"
                v-model="checkedNames"
              />
              <span>{{item.subjects}}</span>
            </div>
            <div class="dateprice">
              <span>{{item.keshi}}</span>
              <span>${{item.price}}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <div>
        <input type="checkbox" id="checkbox" v-model="checked" @change="changeAllChecked()" />
        <span>全选</span>
        <span v-model="allprice">| 合计:￥{{allprice}}</span>
      </div>
      <div @click="gouMai()">提交订单</div>
    </footer>
  </div>
</template>
<script>
export default {
  async created() {
    let { data } = await this.$axios.get("/order");
    data.data.forEach(el => {
      if (el.jiaofei == "未付款") {
        this.listdata.push(el);
        this.listdata.forEach((el, index) => {
          this.checkedArr.push(el.id);
        });
      }
    });

    // this.isdata = this.listdata.length ? true : false;
  },
  data() {
    return {
      listdata: [],
      allprice: 0,
      isdata: "",
      indexAll: [],
      checkedNames: [],
      checkedArr: [],
      checked: false,
      xiadan: []
    };
  },

  methods: {
    backto() {
      this.$router.back(-1);
    },
    //查看并且获取选中的数据id值;
    check(e, index) {
      let checked = e.target.checked;
      if (checked) {
        this.indexAll.push(index);
        console.log(this.indexAll);
        this.allprice = 0;
        this.indexAll.forEach(i => {
          this.allprice += this.listdata[this.indexAll.indexOf(i)].price * 1;
        });
      } else {
        if (this.indexAll.includes(index)) {
          let i = this.indexAll.indexOf(index);
          this.allprice = 0;
          this.indexAll.splice(i, 1);
          this.indexAll.forEach(i => {
            this.allprice += this.listdata[this.indexAll.indexOf(i)].price * 1;
          });
        }
      }
    },
    changeAllChecked: function() {
      if (this.checked) {
        this.checkedNames = this.checkedArr;
        this.listdata.forEach(el => {
          this.allprice += el.price * 1;
          this.indexAll.push(el.id);
        });
      } else {
        this.checkedNames = [];
        this.allprice = 0;
        this.indexAll = [];
      }
    },
    gouMai() {
      console.log(this.indexAll);
      // this.indexAll.forEach(el => {
      //   let id = el.id;
      //   let jiaofei = el.jiaofei;
      //   this.$axios.patch(`/order/${id}`, { jiaofei: "已付款" });
      // });
      let id = this.indexAll;
      this.$axios.patch(`/order/all/${id}`, { jiaofei: "已付款" });
    }
  },
  watch: {
    checkedNames: function() {
      if (this.checkedNames.length == this.checkedArr.length) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    }
  }
};
</script>
<style scoped>
.xuankedan {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
}
main {
  flex: 1;
  overflow-y: auto;
}
main::-webkit-scrollbar {
  display: none;
}
header {
  height: 2.3rem;
}
header > div {
  height: 1.5rem;
  display: flex;
  justify-content: space-between;
  margin: 0 0.5rem;
}
header > nav {
  line-height: 1rem;
  background-color: #e7f3db;
  text-align: center;
  color: #a8d377;
  font-size: 0.433333rem;
}
header span {
  align-self: center;
  font-size: 0.433333rem;
}
header span:nth-of-type(2) {
  display: flex;
  font-weight: 900;
  font-size: 0.533333rem;
}
header span:nth-of-type(3) {
  font-size: 0.4rem;
}
.area img {
  width: 0.4rem;
  margin-right: 0.2rem;
}
.area {
  font-size: 0.5rem;
  font-weight: 600;
  line-height: 1.46rem;
  margin-left: 0.933333rem;
}
.content {
  margin: 0 0.266667rem;
  box-shadow: 5px 5px 5px #f3f3f3, 3px -3px 3px #f3f3f3, -3px 3px 3px #f3f3f3,
    -3px -3px 3px #f3f3f3;
  padding: 0 0.266667rem;
}
.content > .title {
  line-height: 0.7rem;
}
.content > .title > span:nth-of-type(1) {
  border: 1px solid #aec994;
  font-size: 0.3rem;
  color: #aec994;
}
.content > .title > span:nth-of-type(2) {
  background-color: #ffb880;
  font-size: 0.3rem;
  color: #fff;
  margin: 0 0.2rem;
}
.content > .title > span:nth-of-type(3) {
  font-size: 0.5rem;
  font-weight: 900;
}
.content > .xinxi {
  line-height: 1.066667rem;
  font-size: 0.38rem;
  color: #c5c5c5;
}
.content > .xinxi2 {
  padding-bottom: 0.266667rem;
  border-bottom: 1px solid #f3f3f3;
}
.content > .xinxi span {
  margin-right: 0.266667rem;
}
.select {
  margin-top: 0.6rem;
  padding-bottom: 0.533333rem;
}
.select1 {
  display: flex;
}
.select1 > input {
  border: none;
  width: 0.333333rem;
  height: 0.533333rem;
  margin-right: 0.3rem;
}
.select1 > span {
  font-size: 0.433333rem;
}
.dateprice > span:nth-of-type(1) {
  font-size: 0.433333rem;
  margin-left: 0.666667rem;
  color: #999999;
}
.dateprice > span:nth-of-type(2) {
  font-size: 0.433333rem;
  float: right;
  color: #f5a623;
}
footer {
  height: 1.466667rem;
  border-top: 0.026667rem solid #cccccc;
  font-size: 0.666667rem;
  padding: 0 0.3rem;
}
footer div:nth-child(1) {
  float: left;
  display: flex;
  align-content: center;
}
footer input {
  border: none;
  width: 0.333333rem;
  height: 0.533333rem;
  margin-right: 0.3rem;
  margin-top: 0.5rem;
}
footer span {
  font-size: 0.4rem;
  line-height: 1.466667rem;
}
footer div span:nth-of-type(1) {
  margin-right: 0.3rem;
}
footer div:nth-child(2) {
  float: right;
  width: 3.5rem;
  line-height: 1rem;
  background: #6abd79;
  text-align: center;
  margin-top: 0.166667rem;
  border-radius: 0.2rem;
  color: #fff;
  font-weight: bold;
  font-size: 0.4rem;
}
</style>
