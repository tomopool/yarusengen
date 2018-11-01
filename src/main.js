// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Input, TimePicker, InputNumber, Button, Collapse, CollapseItem, Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(Input)
Vue.use(TimePicker)
Vue.use(InputNumber)
Vue.use(Button)
Vue.use(Collapse)
Vue.use(CollapseItem)

Vue.prototype.$message = Message;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})