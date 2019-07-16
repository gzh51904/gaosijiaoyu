<template>
  <div>
    <header>
      <input v-model="input2" @keyup.13="show($event)" placeholder="请输入老师或校区" />
      <span @click="goto('xuanke')">取消</span>
    </header>

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
      info: [],
      input2:'',
    };
  },
  methods: {
    goto(name) {
      this.$router.push(name);
    },
     goto8(xianshi) {
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
      this.$axios.post("/order", {
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
    },
    async show($event){
        let input1=this.input2.trim();
       let {data}=await this.$axios.get('http://localhost:1904/search',{
          params:{input1} 
        }) 
        this.info=data.data;
    }
  }
};
</script>
<style scoped>
ul,
li {
  list-style: none;
  margin: 0;
}
header {
  width: 99%;
  padding: 0.2rem 0 0.4rem 0;
  padding-left: 0;
  position: fixed;
  background-color:#fff;
}
input {
  width: 75%;
  border-radius: 0.4rem;
  margin-left:0.5rem;
  margin-right:0.2rem;
  padding-left: 0.693333rem;
  padding-top: 0.093333rem;
  padding-bottom: 0.093333rem;
  border: none;
  background: #eeeeee;
  outline: none;
}
header>span{
    color:#666;
}
.middle {
  
  overflow-y: auto;
  width: 100%;
  margin-top:0.6rem;
  padding:0.4rem;
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