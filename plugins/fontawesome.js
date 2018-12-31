import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPencilAlt } from '@fortawesome/pro-regular-svg-icons'
import {
  faLongArrowAltLeft,
  faLongArrowAltRight
} from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPencilAlt, faLongArrowAltLeft, faLongArrowAltRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)
