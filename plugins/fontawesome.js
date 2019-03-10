import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLine
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
  faCopy,
  faSmileWink
} from '@fortawesome/pro-regular-svg-icons'
import { faLongArrowAltLeft } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faFacebook,
  faTwitter,
  faInstagram,
  faLine,
  faPenNib,
  faVideo,
  faDesktop,
  faLongArrowAltLeft,
  faShareAlt,
  faHomeLgAlt,
  faBookOpen,
  faFlagAlt,
  faEllipsisHAlt,
  faCopy,
  faSmileWink
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
