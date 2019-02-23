import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFacebook,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import {
  faPenNib,
  faVideo,
  faDesktop,
  faShareAlt,
  faHomeLgAlt,
  faBookOpen,
  faFlagAlt,
  faEllipsisHAlt,
  faCopy
} from '@fortawesome/pro-regular-svg-icons'
import {
  faLongArrowAltLeft,
  faLongArrowAltRight
} from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faFacebook,
  faTwitter,
  faInstagram,
  faPenNib,
  faVideo,
  faDesktop,
  faLongArrowAltLeft,
  faLongArrowAltRight,
  faShareAlt,
  faHomeLgAlt,
  faBookOpen,
  faFlagAlt,
  faEllipsisHAlt,
  faCopy
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
