<template>
  <div class="app">
    <el-container>

    <el-header>
      <el-container>
    <el-aside width='300px' style="text-align:center;">
        <img src="./assets/logo.png" style="width:60%;"  alt="">
    </el-aside>

    
      
      <el-main  class="login">
        <el-link href="#" @click.native.prevent.stop="logout()">退出</el-link>
      </el-main>
  </el-container>
    </el-header>

      <el-container class="linebox">

        <el-aside width="300px" class="nav">
    
        <el-menu
          :default-active="active"
          class="el-menu-vertical-demo"
          
          @select="handleSelect"
          background-color="rgba(32, 34, 42, 1)"
          text-color="#fff"
          router
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">课程管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/courseline">课程列表</el-menu-item>
              <el-menu-item index="/courseclass">课程分类</el-menu-item>
              <el-menu-item index="/addcourse">添加课程</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/userline">用户列表</el-menu-item>
              <el-menu-item index="/adduser">添加用户</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">订单管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="order">订单列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
     
      </el-aside>
      <!-- 路由展示区 -->
     
        <el-main>
         <router-view  v-if="isRouterAlive"/>
        </el-main>
  
    </el-container>
    </el-container>
  </div>
</template>

<script>
import Vue from "vue";

export default {
  name: "app",
  provide :function() {
    return {
      reload:this.reload
    }
},
  data() {
    return {
      isCollapse: false,
      active: "/courseline",
    
      isRouterAlive:true
    };
  },
  watch:{
   
  },
  methods: {
    reload:function(){
        this.isRouterAlive=false;
        this.$nextTick(function(){
            this.isRouterAlive=true
        })
    },
    handleSelect(index, indexPaht) {
      console.log(index, indexPaht);
      this.active = index;
    },
    
    //退出
    logout() {
       this.logined = false;
       localStorage.removeItem("login");
       this.$router.push({
         name:'login'
       })
    }
  },
  created() {
    //console.log('this.$router',this.$router)
  }
};
</script>

<style>


.el-submenu__title{
  font-size:25px !important;}
   .el-aside{
      background-color:rgba(32, 34, 42, 1) !important
   }
   .el-header{
     padding:0px 0px  !important
   }
   .el-aside .nav{
     height:100%;
   }
   .linebox{
     min-height:750px;
      /* height: calc(100% - 60px); */
   }
   body{
     height:100%
   }
   .el-main{
     height:100%
   }
</style>
