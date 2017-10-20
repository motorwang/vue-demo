<template>
    <div id="app">
        <div class="nav-top">
            <!-- 引用公共头部组件 -->
            <v-header></v-header>
        </div>
        <div class="banner"></div>
        <div class="container">
            <!-- 路由组件被渲染,默认渲染home组件 -->
            <router-view></router-view>
        </div>

    </div>
</template>

<script>
import Header from './components/header.vue';

export default {
    data() {
        return {}
    },
    components: {
        'v-header': header
    }
}
</script>

<style scoped>
#app {
  font-family: "微软雅黑";
  text-align: center;
  color: #2c3e50;
}
.nav-top {
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -600px;
  z-index: 99;
}
.banner {
  width: 100%;
  height: 370px;
  overflow: hidden;
  background: url("./static/bd.png") no-repeat;
}
</style>


