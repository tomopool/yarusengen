// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import { Input, Button, TimePicker, InputNumber, Table, TableColumn, Card, Collapse, CollapseItem, Message, Menu, MenuItem, Switch } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Firebase from 'firebase'

Vue.config.productionTip = false

Vue.use(Input)
Vue.use(Button)
Vue.use(TimePicker)
Vue.use(InputNumber)
Vue.use(Button)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Card)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Switch)
Vue.prototype.$message = Message;

const config = {
  apiKey: "AIzaSyBLi-KCY4iL11RYOVjPr70jU7UPsWBuKLU",
  authDomain: "yarusengen.firebaseapp.com",
  databaseURL: "https://yarusengen.firebaseio.com",
  projectId: "yarusengen",
  storageBucket: "yarusengen.appspot.com",
  messagingSenderId: "76605483511"
}
Firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
