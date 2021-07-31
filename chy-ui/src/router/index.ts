import { createRouter, createWebHashHistory } from "vue-router";
import routeList from "./index.router";
const routes:Array<any> =  [
  {
    path: "/",
    redirect:'/main',
    name: "Home",
    component: () => import("../views/Home/home.vue"),
    children:[
      {
        path: 'components',
        name:"components",
        redirect:'/components/Avatar',
        component: () => import('../views/Main/main.vue'),
        children:[
          ...routeList
        ]
      },
      {
        path: '/main',
        name:"main",
        component: () => import('../views/index/index.vue'),
      },
      {
        path: '/explain',
        name:"explain",
        component: () => import('../views/Explain/explain.vue'),
      },

    ]
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
// 路由跳转后回到最顶部
//   scrollBehavior(to, from, savedPosition) {
//     if (savedPosition) {
//       // 通过前进后台时才触发
//       return savedPosition
//     } else {
//       return { top: 0, behavior: 'smooth' }
//     }
//   }

})
// 路由跳转之前控制页面标题
// router.beforeEach((to, from, next) => {
//   // 可以对权限进行一些校验
//   if (to.path !== from.path) {
//     document.title = `星乐圈 | ${to.meta.title}`
//   }
//   next()
// })


export default router;
