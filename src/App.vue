<template>
  <div id="app">
    <loading v-show="loading"></loading>
    <v-header v-show="headerShow"></v-header>
    <transition name="slide-down">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from './components/Header.vue'
import vFooter from './components/Footer.vue'

import { mapActions, mapGetters } from 'vuex'

export default {
  computed: mapGetters([
    'headerShow',
    'loading'
  ]),
  watch: { // 监听路由变化
    $route(to, form) {
      if (to.path == '/user-info') {
        this.$store.dispatch('hideHeader')
      } else {
        this.$store.dispatch('showHeader')
      }
    }
  },
  components: {
    vHeader,
    vFooter
  },
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
@import './assets/css/index.css';
.slide-down-enter-active,
.slide-down-leave-active {
  transition: .4s all ease;
  opacity: 0.2;
  transform: translate3d(0, 6em, 0);
}

.slide-down-enter,
.slide-down-leave {
  opacity: 1;
  transform: translate3d(0, 6em, 0);
}
</style>
