import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faPencilAlt } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faArrowRight, faPencilAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)
