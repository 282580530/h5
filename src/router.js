import Vue from 'vue'
import store from './store' // 引入store文件
import Router from 'vue-router'
import Layout from './views/checkList'
Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/404',
      component: () => import('./views/404'),
    },
    {
      path: '/index',  //首頁
      component: Layout,
    },
    {
      path: '/report',
      component: () => import('./views/report'),
      name:'report'
    },
    {
      path: '/img',
      component: () => import('./views/img'),
      name:'img'
    },
    // 404 page must be placed at the end !!!
    { path: '*', redirect: '/index' }
  ]
})
// 导航守卫限制路由跳转
// router.beforeEach((to, from, next) => {
//   let login = store.state.userHasLogin; 
//   // console.log(login, 'login');
//   if (to.path === '/index') {
//     next()
//   }
//   if (login) {
//     next()
//   } else {
//     next('/index')
//   }
// })
// router  要跟你引用的路由名称一致
export default router