//入口文件
import Vue from 'vue'

import app from './App.vue'
import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueRouter)

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import './static/my-muinit.css'
Vue.use(Mint);

//导入MUI的样式
import './static/mui/css/mui.min.css'
import mui from './static/mui/js/mui.min.js'
Vue.prototype.mui = mui

import vueAplayer from 'vue-aplayer'
Vue.use(vueAplayer)



//定义全局时间过滤器
Vue.filter("dataFromat", function (data) {
  var date = new Date(data);
  var y = date.getFullYear()
  var m = date.getMonth() + 1
  var d = date.getDate()
  var h = date.getHours()
  var mm = date.getMinutes()
  var s = date.getSeconds()

  if (h < 10) {
    h = '0' + h
  } else if (mm < 10) {
    mm = '0' + mm
  } else if (s < 10) {
    s = '0' + s
  }
  return `${y}年${m}月${d}日  ${h}:${mm}:${s}`


})
//引入bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min'
//配置全局请求路径
import axios from "axios"
axios.defaults.headers.post["Content-type"] = "application/json";
axios.defaults.baseURL = "http://101.132.130.125:3000"
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(app)
}).$mount("#app")