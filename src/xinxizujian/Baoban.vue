<template>
  <div class="zlsgaosi">
    <div>
      <span @click="goto4()"></span>
      <img src="../assets/img/baoban1.jpg" alt />
    </div>
    <div>
      <img src="../assets/img/baoban2.jpg" alt />
    </div>
  </div>
</template><script>
export default {
  methods: {
    goto4(name) {
      this.$router.push({ name: "Xuanke" });
    }
  }
};
</script>
<style scoped>
.zlsgaosi {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.zlsgaosi::-webkit-scrollbar {
  display: none;
}
.zlsgaosi div:nth-child(1) {
  position: fixed;
  height: 1.366667rem;
  width: 100%;
}
.zlsgaosi div:nth-child(1) img {
  width: 100%;
  height: 100%;
}
.zlsgaosi div:nth-child(1) span {
  display: inline-block;
  width: 0.666667rem;
  height: 0.666667rem;
  position: fixed;
  z-index: 100;
  top: 0.366667rem;
  left: 0.366667rem;
}
.zlsgaosi div:nth-child(2) {
  width: 100%;
}
.zlsgaosi div:nth-child(2) img {
  width: 100%;
}
</style>