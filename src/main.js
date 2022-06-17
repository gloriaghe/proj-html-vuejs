import Vue from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faMagnifyingGlass, faAngleDown, faAngleRight, faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faUser,  } from '@fortawesome/free-regular-svg-icons'


/* add icons to the library */
library.add(faMagnifyingGlass, faUser, faGithub, faStackOverflow, faAngleDown, faAngleRight, faLayerGroup, )

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
