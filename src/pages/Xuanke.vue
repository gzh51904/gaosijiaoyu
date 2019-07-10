<template>
  <div class="gaosijiaoyu">
    <div class="header">
      <span>选课</span>
      <input type="text" placeholder="请输入老师或校区" />
      <img src="../assets/img/gouwuche.png" alt />
    </div>
    <div>选课</div>
  </div>
</template>
<script>
export default {

  
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 1.2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.header span {
  font-weight: bold;
  font-size: 0.533333rem;
}
.header input {
  width: 6rem;
  border-radius: 0.4rem;
  padding-left: 0.533333rem;
  padding-top: 0.093333rem;
  position: relative;
  border: none;
  background: #eeeeee;
}
.header input::before {
  position: absolute;
  left: 0;
  top: 0;
  width: 0.226667rem;
  height: 0.226667rem;
  content: "";
  background: red;
  /* background-image: url("../assets/img/sousuo.jpg"); */
}
</style>