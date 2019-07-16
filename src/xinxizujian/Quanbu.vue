<template>
  <div class="middle">
    <div class="lessons" v-for="xianshi in info" :key="xianshi.id">
      <div>
        <p class="goumai">购课订单编号：17978998983{{xianshi.username}}</p>
        <p class="sfjf">{{xianshi.jiaofei}}</p>
      </div>
      <div>
        <span class="span1">面授班</span>
        <span class="span2">暑</span>
        <strong>{{xianshi.lesson}}</strong>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info: []
    };
  },
  async created() {
    let { data } = await this.$axios.get("/order/");
    this.info = data.data;
    console.log(this.info);
  }
};
</script>
<style scoped>
.goumai {
  font-size: 0.4rem;
}
.sfjf {
  font-size: 0.4rem;
  color: #58bc58;
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