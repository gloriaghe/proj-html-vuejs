import Vue from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faGear, faBars, faMagnifyingGlass, faAngleDown, faAngleRight, faLayerGroup, faUpRightAndDownLeftFromCenter, faCheck, faArrowRight, faDollarSign, faArrowsToCircle, faDisplay } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faStackOverflow, faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faUser,  } from '@fortawesome/free-regular-svg-icons'


/* add icons to the library */
library.add(faGear, faBars, faMagnifyingGlass, faUser, faGithub, faInstagram, faUpRightAndDownLeftFromCenter, faArrowsToCircle, faTwitter, faLinkedinIn, faFacebookF, faDisplay, faStackOverflow, faAngleDown, faAngleRight, faLayerGroup, faCheck, faArrowRight, faDollarSign )

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
