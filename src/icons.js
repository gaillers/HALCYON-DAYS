import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronDown, faChevronUp, faCode, faEnvelope, faHeart, faLaptop, faMapMarked, faMobile, faPaperPlane, faSearch,} from '@fortawesome/free-solid-svg-icons'
import { faDribbble, faTwitter } from '@fortawesome/free-brands-svg-icons'
 
library.add(faLaptop, faCode, faHeart, faChevronDown, faChevronUp, faSearch, faDribbble, faTwitter, faEnvelope, faPaperPlane, faMapMarked, faMobile)
 
Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false