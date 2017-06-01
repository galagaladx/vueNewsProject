import Vue from 'vue'
import VueRouter from 'vue-router'
import Content from '../components/Content.vue'
import Follow from '../components/Follow.vue'
import Column from '../components/Column.vue'
import Userinfo from '../components/Userinfo.vue'
import Article from '../components/Article.vue'
Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [{
      path: '/content',
      component: Content
    }, {
      path: '/follow',
      component: Follow
    }, {
      path: '/column',
      component: Column
    }, {
      path: '/user-info',
      component: Userinfo
    },{
      path: '/article/:id',
      component: Article
    },{
      path: '/',
      redirect: '/content'
    }, {
      path: '*',
      redirect: '/content'
    }
  ]
})