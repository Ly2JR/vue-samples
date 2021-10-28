/*jshint esversion:6 */

//1.定义路由组件
//也可以从其他文件导入
const Home = { template: '<div>Home</div>' };
const About = { template: '<div>About</div>' };

//2.定义一些路由
//每个路由都需要映射到一个组件
//
const routes = [{
        path: '/',
        component: Home,
    },
    {
        path: '/about',
        component: About
    }
];

//3.创建路由实例并传递`routes`配置

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: routes
});

//5、创建并挂载根实列
const app = Vue.createApp({});
//确保_use_路由实例使整个应用支持路由
app.use(router);

app.mount('#vue-router');