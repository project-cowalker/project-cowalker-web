// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'babel-polyfill'
import SigninDialog from './components/user/SigninDialog.vue' // 다이얼로그
import SignupDialog from './components/user/SignupDialog.vue' // 다이얼로그
import ShareDialog from './components/Boards/ShareDialog.vue' // 다이얼로그
import RecommendDialog from './components/Boards/RecommendDialog.vue' // 다이얼로그
import JoinDialog from './components/Boards/Dialog/JoinDialog.vue' // 다이얼로그
import VueBreadcrumbs from 'vue-breadcrumbs'
import VeeValidate from 'vee-validate'
import VueCarousel from 'vue-carousel'
// import { Carousel, Slide } from 'vue-carousel'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.component('app-board-signin-dialog', SigninDialog)
Vue.component('app-board-signup-dialog', SignupDialog)
Vue.component('app-board-share-dialog', ShareDialog)
Vue.component('app-board-recommend-dialog', RecommendDialog)
Vue.component('app-board-join-dialog', JoinDialog)
Vue.use(VueBreadcrumbs)
Vue.use(VeeValidate)
Vue.use(VueCarousel)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
