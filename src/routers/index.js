import Vue from 'vue'


import VueRouter from 'vue-router'
// 2. 使用VueRouter插件
Vue.use(VueRouter);

// 引入页面组件
import Xuanke from '../pages/Xuanke.vue';
import Fuwu from '../pages/Fuwu.vue';
import Xiaoxi from '../pages/Xiaoxi.vue';
import Mine from '../pages/Mine.vue';
// import Reg from "../pages/Reg.vue";
// import Login from "../pages/Login.vue";

// 实例化router并配置参数
let router = new VueRouter({
    // 路由页面信息配置
    routes: [{
            name: 'Xuanke',
            path: '/xuanke',
            component: Xuanke
        },
        {
            name: 'Fuwu',
            path: '/fuwu',
            component: Fuwu,
        },
        {
            name: 'Xiaoxi',
            path: '/xiaoxi',
            component: Xiaoxi
        },
        {
            name: 'Mine',
            path: '/mine',
            component: Mine,
            meta: {
                requiresAuth: true
            }
        },

        // 重定向
        {
            path: '/',
            redirect: {
                name: 'Xuanke'
            }
        }
    ]
});

export default router;