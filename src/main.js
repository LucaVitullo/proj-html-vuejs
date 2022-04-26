import Vue from 'vue'
import App from './App.vue'


//import icon
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faCircleMinus} from '@fortawesome/free-solid-svg-icons'
import {faCirclePlus} from '@fortawesome/free-solid-svg-icons'

//library
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faAngleDown,faCartShopping,faUser,faArrowRight,faCircleMinus,faCirclePlus,)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
