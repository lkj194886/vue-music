//入口文件
import Vue from 'vue'

import app from './App.vue'

import router from './router'

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import './static/my-muinit.css'
//导入MUI的样式
import './static/mui/css/mui.min.css'
import mui from './static/mui/js/mui.js'
Vue.prototype.mui = mui
Vue.use(Mint);


Vue.config.productionTip = false

new Vue({
  router,
  render:h =>h(app)
}).$mount("#app")