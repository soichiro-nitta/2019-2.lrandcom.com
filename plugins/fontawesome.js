import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFacebook,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import { faPencilAlt } from '@fortawesome/pro-regular-svg-icons'
import {
  faLongArrowAltLeft,
  faLongArrowAltRight
} from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faFacebook,
  faTwitter,
  faInstagram,
  faPencilAlt,
  faLongArrowAltLeft,
  faLongArrowAltRight
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
