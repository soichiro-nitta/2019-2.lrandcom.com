import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFacebook,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import { faPen, faVideo, faDesktop } from '@fortawesome/pro-regular-svg-icons'
import {
  faLongArrowAltLeft,
  faLongArrowAltRight
} from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faFacebook,
  faTwitter,
  faInstagram,
  faPen,
  faVideo,
  faDesktop,
  faLongArrowAltLeft,
  faLongArrowAltRight
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
