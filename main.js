'use strict';

// 引入第三方包
import Vue from 'vue';

//引入路由对象 vue-Router
import  VueRouter from 'vue-router';
Vue.use(VueRouter);

// 引入组件
import Home from './components/home.vue';
import Consult from './components/consult.vue';
import Intorduce from './components/intorduce.vue';
import Common from './components/common.vue';

// 定义路由
var routes = [
    { path: '/home', component: Home },
    { path: '/consult', conmponent: consult },
    { path: '/intorduce', conponent: Intorduce },
    { path: '/common', conponent: Common }

];

// 实例化路由
var vueRouter = new VueRouter({ routes });

// 创建和挂载根实例
new Vue({
    el: '#app',
    router: VueRouter,
    template:'<App></App>',
    components:'{App}'
});



