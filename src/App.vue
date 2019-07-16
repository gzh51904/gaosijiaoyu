<template>
  <div id="app">
    <router-view />
    <div class="footer" v-show="isshow">
      <ul mode="horizontal" router>
        <li v-for="item in pages" :key="item.name" 
        :index="item.path" 
         :class="{active: $route.name == item.name}" 
          @click="goto(item.name)">
          <i :class="item.imgUrl"></i>
          <span>{{item.title}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { rem } from "./assets/rem";
export default {
  name: "app",
  data() {
    return {
      pages: [
        {
          title: "选课",
          path: "/xuanke",
          name: "Xuanke",
          imgUrl: "iconfont icon-fuwu"
        },
        {
          title: "服务",
          path: "/fuwu",
          name: "Fuwu",
          imgUrl: "iconfont icon-xuanke"
        },
        {
          title: "消息",
          path: "/xiaoxi",
          name: "Xiaoxi",
          imgUrl: "iconfont icon-xiaoxi"
        },
        {
          title: "我的",
          path: "/mine",
          name: "Mine",
          imgUrl: "iconfont icon-wode"
        }
      ],
      active: "Xuanke",
      isshow: true
    };
  },

  methods: {
    
    goto(name) {
       this.active = name
      this.$router.push({
        name
      });
    }
  },
  watch: {
    $route(val) {
      if (
        val.fullPath == "/xuanke" ||
        val.fullPath == "/fuwu" ||
        val.fullPath == "/xiaoxi" ||
        val.fullPath == "/mine"
      ) {
        this.isshow = true;
      } else {
        this.isshow = false;
      }
    }
  },
  created() {
    // 刷新保持高亮效果
    let hash = window.location.hash.slice(1);
    this.active = hash;
    // console.log(hash);
    // console.log(this.$route.path);
    // if (this.$route.path == "/xuanke" || "/fuwu" || "/xiaoxi" || "/mine") {
    //   console.log(this.$route.fullpath);

    //   this.isshow = true;
    // }
  }
};
</script>

<style scoped>
.active{
  color:#58bc58;
}
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.footer {
  border-top: 0.026667rem solid #ccc;
  padding-top: 0.12rem;
}

ul {
  display: flex;
  justify-content: space-around;
  padding-inline-start: 0rem;
}
ul li {
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  margin-bottom: 0.136667rem;
  color: #666;
}
ul li i {
  text-align: center;
  font-size: 0.533333rem;
}
ul li span {
  font-size: 0.16rem;
}
</style>