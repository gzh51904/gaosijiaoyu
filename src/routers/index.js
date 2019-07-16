import Vue from 'vue'


import VueRouter from 'vue-router'
// 2. 使用VueRouter插件
Vue.use(VueRouter);

// 引入页面组件
import Xuanke from '../pages/Xuanke.vue';
import Fuwu from '../pages/Fuwu.vue';
import Xiaoxi from '../pages/Xiaoxi.vue';
import Mine from '../pages/Mine.vue';
import Kechengchaxun from '../pages/Kechengchaxun.vue';
import Reg from "../pages/Reg.vue";
import Login from "../pages/Login.vue";
import Xuankedan from "../pages/Xuankedan.vue";
import Jingwei from "../xinxizujian/Jingwei.vue";
import Pinpai from "../xinxizujian/Pinpai.vue";
import Baoban from "../xinxizujian/Baoban.vue";
import Gonglue from "../xinxizujian/Gonglue.vue";
import Yangwa from "../xinxizujian/Yangwa.vue";
import Xuanzebanji from "../pages/Xuanzebanji.vue";
import Xitongshezhi from "../xinxizujian/Xitongshezhi.vue";
import Xianqingye from "../xinxizujian/Xianqingye.vue";
import Tuibantuifei from "../xinxizujian/Tuibantuifei.vue";
import Yifukuan from "../xinxizujian/Yifukuan.vue";
import Weifukuan from "../xinxizujian/Weifukuan.vue";
import Quanbu from "../xinxizujian/Quanbu.vue";
import Zhuanban from "../xinxizujian/Zhuanban.vue";
import Tiaoke from "../xinxizujian/Tiaoke.vue";
import Xubao from "../xinxizujian/Xubao.vue";
import Gonggu from "../xinxizujian/Gonggu.vue";
import Tuiban from "../xinxizujian/Tuiban.vue";
import search from '../pages/search.vue'
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
            component: Xiaoxi,
            meta: {
                requiresAuth: true
            }
        },
        {
            name: 'Kechengchaxun',
            path: '/kechengchaxun',
            component: Kechengchaxun
        },
        {
            name: 'Mine',
            path: '/mine',
            component: Mine,
            meta: {
                requiresAuth: true
            }
        },
        {
            name: 'Reg',
            path: '/reg',
            component: Reg,
            props: function (route) {
                if (route.query.phone) {
                    return {
                        phone: route.query.phone.toUpperCase()
                    }
                }
                return {
                    className: '1904'
                }
            }
        },
        {
            name: "Login",
            path: "/login",
            component: Login,
            props: true
        },
        {
            name: 'Xuankedan',
            path: '/xuankedan',
            component: Xuankedan,
            meta: {
                requiresAuth: true
            }
        },
        {
            name: "Baoban",
            path: "/baoban",
            component: Baoban,
            props: true
        },
        {
            name: "Gonglue",
            path: "/gonglue",
            component: Gonglue,
            props: true
        },
        {
            name: "Jingwei",
            path: "/jingwei",
            component: Jingwei,
            props: true
        },
        {
            name: "Pinpai",
            path: "/pinpai",
            component: Pinpai,
            props: true
        },
        {
            name: "Yangwa",
            path: "/yangwa",
            component: Yangwa,
            props: true
        },
        {
            name: "Xuanzebanji",
            path: "/xuanzebanji",
            component: Xuanzebanji,
            props: true
        },
        {
            name: "Xitongshezhi",
            path: "/xitongshezhi",
            component: Xitongshezhi,
            props: true
        },
        {
            name: "Zhuanban",
            path: "/zhuanban",
            component: Zhuanban,
            props: true
        },
        {
            name: "Tiaoke",
            path: "/tiaoke",
            component: Tiaoke,
            props: true
        },
        {
            name: "Xubao",
            path: "/xubao",
            component: Xubao,
            props: true
        },
        {
            name: "Gonggu",
            path: "/gonggu",
            component: Gonggu,
            props: true
        },  {
            name: "Tuiban",
            path: "/tuiban",
            component: Tuiban,
            props: true
        },
        {
            name: "Xianqingye",
            path: "/xianqingye ",
            component: Xianqingye,
            children: [{
                    name: "Yifukuan",
                    path: "yifukuan",
                    component: Yifukuan,
                    props: true
                },
                {
                    name: "Weifukuan",
                    path: "weifukuan",
                    component: Weifukuan,
                    props: true
                },
                {
                    name: "Quanbu",
                    path: "quanbu",
                    component: Quanbu,
                    props: true
                },
                {
                    name: "Tuibantuifei",
                    path: "tuibantuifei",
                    component: Tuibantuifei,
                    props: true
                },
            ]
        },
        {
            name:'search',
            path:'/search',
            component:search
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

router.beforeEach((to, from, next) => {
    // 判断路由是否需要权限
    if (to.matched.some(item => item.meta.requiresAuth)) {
        // 判断是否已登录（登录时设置的保存在localStorage的信息）
        let token = localStorage.getItem("Authorization")
        // 用户已登录
        if (token) {
            next()
        }
        // 用户未登录
        else {
            next({
                path: "/login",
                query: {
                    redirectTo: to.fullPath
                }
            });
        }
    } else {
        next()
    }
})
export default router;