<template>
  <div class="div0">
    <div class="div1">
      <header>
        <span class="iconfont icon-fanhui" @click="goto16()"></span>
        <span class="span1">我的订单</span>
        <span></span>
      </header>

      <nav>
        <ul  mode="horizontal" router>
          <li v-for="item in pages"
          :class="{active: $route.name == item.name}"
           :key="item.name" 
           :index="item.path"
            @click="goto(item)">
            <span class="span2">{{item.title}}</span>
          </li>
        </ul>
      </nav>
    </div>
    <main class="main">
      <router-view />
    </main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: "Weifukuan",
      pages: [
        {
          title: "全部",
          path: "/quanbu",
          name: "Quanbu"
        },
        {
          title: "待付款",
          path: "/daifukuan",
          name: "Weifukuan"
        },
        {
          title: "已付款",
          path: "/yifukuan",
          name: "Yifukuan"
        },
        {
          title: "退班退费",
          path: "/tuibantuifei",
          name: "Tuibantuifei"
        }
      ]
    };
  },
  methods: {
    goto16(name) {
      this.$router.push({
        name: "Mine"
      });
    },
    goto(item) {
        this.active = item
      this.$router.push({ name: item.name });
    }
  },
  created() {
    // 刷新保持高亮效果
    let hash = window.location.hash.slice(1);
    this.active = hash;
    }
};
</script>
<style scoped>
.div0 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.main {
  overflow-y: auto;
  flex: 1;
}
.main::-webkit-scrollbar {
  display: none;
}
header {
  padding: 0 0.8rem;
  line-height: 1.533333rem;
  display: flex;
  justify-content: space-between;
}
header:nth-child(1) {
  font-size: 0.6rem;
}
header:nth-child(2) {
  font-size: 0.6rem;
}
ul {
  display: flex;
  justify-content: space-around;
  padding-inline-start: 0rem;
  border-bottom: 1px solid #eeeeee;
}
ul li {
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  padding-bottom: 0.233rem;
  color: #b7b7b7;
  font-size: 0.566667rem;
}
.active {
  color: #49b383;
  border-bottom: 2px solid #49b383;
}
.span1 {
  font-size: 0.5rem;
  font-weight: bold;
}
.span2 {
  font-size: 0.4255rem;
}
</style>