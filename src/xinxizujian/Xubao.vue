<template>
<div class="zhuanban">
<p><img src="../assets/img/backicon.jpg" alt="" @click="goto()"><span>续报</span></p >
<ul>
<li>可转班级</li>
<li>转班记录</li>
</ul>
<!-- <p class="boder"><span></span><span></span></p > -->
<div class="what">
<img src="../assets/img/what.jpg" alt="">
<p>暂无相关数据~</p >
</div>
</div>
</template>
<script>
export default {
    methods: {
        goto(name){
            this.$router.push({name:"Fuwu"})
        }
    },
}
</script>
<style scoped>
    /* 转班样式 */
.zhuanban p img {
width: .3rem;
height: .366667rem;
margin-left: .133333rem;
}

.zhuanban p span:nth-child(2) {
margin-left: 3.7rem;
display: inline-block;
font-weight: bold;
font-size: 0.5rem;
}

.zhuanban p span:nth-child(3) {
margin-left: 3rem;
display: inline-block;
}

.zhuanban ul {
display: flex;
margin-top: 0.8rem;
padding-left: 0;
}

.zhuanban ul li {
flex: 1;
font-size: 0.4rem;
float: left;
list-style: none;
padding-left: 1.5rem;
}

.zhuanban ul li:hover {
color:#58bc58;
font-weight: bold;
}
.zhuanban .boder {
width: 100%;
position: relative;
}

.zhuanban .boder span:nth-child(1) {
width: 0.5rem;
height: 0.08rem;
display: inline-block;
background: #58bc58;
position: absolute;
top: 0.2rem;
left: 1.9rem ;
}

.zhuanban .boder span:nth-child(2){
width: 0.5rem;
height: 0.08rem;
display: inline-block;
background: #58bc58;
position: absolute;
top: 0.2rem;
left: 3.05rem ;
}

.zhuanban .what {
position: relative;
}
.zhuanban .what img {
position: absolute;
left: 2.2rem;
top: 2.333333rem;
}
.zhuanban .what p {
text-align: center;
font-size: .066667rem;
position: absolute;
left: 3.2rem;
top: 6.333333rem;
}
</style>