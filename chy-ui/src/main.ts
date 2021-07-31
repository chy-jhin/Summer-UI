import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import store from "./store";
import ant from "./utils/ant";
import 'lib-flexible/flexible'
import './assets/scss/index.scss' //全局引入样式
import 'animate.css/animate.compat.css'
// import 'vant/lib/index.css'; // 全局引入样式

import comBox from './components/comBox.vue'
import comTable from './components/table.vue'
import "./utils/rem"
 // 全局引入样式

 import {
    // create naive ui
    create,
    // component
    NMessageProvider
  } from 'naive-ui'

  const naive = create({
    components: [NMessageProvider]
  })

createApp(App)
.use(router)
.use(store)
.use(ant)
.use(naive)
.component('comBox',comBox)
.component('comTable',comTable)
.mount('#app')

router.beforeEach((to, from, next) => {
    store.commit('changeActive',to.meta.title)
    next();
})