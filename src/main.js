import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import TypeNav from '@/components/TypeNav'
import Banner from '@/components/Banner'
import Pagination from '@/components/Pagination'
import VueLazyload from 'vue-lazyload'
import "swiper/css/swiper.css"
import '@/mock/mockServer'
import lazyImg from '@/assets/lazy.gif'
// const loadimage = require('@/assets/lazy.gif')
import { Button,MessageBox} from 'element-ui'
Vue.component(Button.name, Button);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.component(TypeNav.name,TypeNav)
Vue.component(Pagination.name,Pagination)
Vue.component(Banner.name,Banner)
Vue.use(VueLazyload,{
 loading:lazyImg
})
import router from '@/router'
Vue.config.productionTip = false

import{reqGetSearchInfo} from '@/api'
import * as API from '@/api'
reqGetSearchInfo({})
  
new Vue({
  render: h => h(App),
  router: router,
  store,
  beforeCreate(){
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  }
}).$mount('#app')
