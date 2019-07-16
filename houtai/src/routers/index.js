import Vue from 'vue';
import vueRouter from 'vue-router';
import courseline from '../pages/courseline.vue';
import courseclass from '../pages/courseclass.vue';
import addcourse from '../pages/addcourse.vue';
import order from '../pages/order.vue';
import userline from '../pages/userline.vue';
import adduser from '../pages/adduser.vue';
import login from '../pages/login.vue';
import updatacourse from '../pages/updatacourse.vue'
import search from '../pages/search.vue'
Vue.use(vueRouter);

let router= new vueRouter({
        routes:[
        {
            name:'courseline',
            path:'/courseline',
            component:courseline,
            meta:{requiresAuth:true}

        },
        {
            path: '/',
            // component:{template:'<div>404</div>'}
            redirect: { name: 'courseline' }
        },
        {
            name:'courseclass',
            path:'/courseclass',
            component:courseclass,
            meta:{requiresAuth:true}
        },
        {
            name:'addcourse',
            path:'/addcourse',
            component:addcourse,
            meta:{requiresAuth:true}
        },
        {
            name:'order',
            path:'/order',
            component:order,
            meta:{requiresAuth:true}
        },
        {
            name:'userline',
            path:'/userline',
            component:userline,
            meta:{requiresAuth:true}
        },
        {
            name:'adduser',
            path:'/adduser',
            component:adduser,
            meta:{requiresAuth:true}
        },
        {
            name:'login',
            path:'/login',
            component:login
        },
        {
            name:'updatacourse',
            path:'/updatacourse',
            component:updatacourse,
            meta:{requiresAuth:true}
        },
        {
            name:'search',
            path:'/search',
            component:search,
            meta:{requiresAuth:true}
        }
    ]
})
router.beforeEach((to,from,next)=>{
    console.log('全局：beforeEach',to);
    // 判断目标路由是否需要登录权限才可访问
    if(to.matched.some(item=>item.meta.requiresAuth)){
        let token = localStorage.getItem('login');
       
        if(token){
            next();
        }

        // 用户未登录
        else{
            next({
                path:'/login',
                query:{
                    redirectTo:to.fullPath
                }
            })
        }
    }else{
        next();
    }
})


export default router;