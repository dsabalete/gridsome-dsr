import DefaultLayout from '~/layouts/Default.vue'

import VueScrollTo from 'vue-scrollto'
import BootstrapVue from 'bootstrap-vue'
import './assets/styles/main.scss'

import { library } from '@fortawesome/fontawesome-svg-core'

import { faTrophy, faRss, faCheck } from '@fortawesome/free-solid-svg-icons'
import {
    faGithub,
    faTwitter,
    faFacebook,
    faLinkedin,
    faHtml5,
    faJsSquare,
    faCss3Alt,
    faVuejs,
    faAngular,
    faReact,
    faNodeJs,
    faSass,
    faLess,
    faDrupal,
    faGulp,
    faGrunt,
    faNpm,
    faYarn
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VueGtm from 'vue-gtm'

library.add(
    faGithub,
    faTwitter,
    faFacebook,
    faLinkedin,
    faTrophy,
    faHtml5,
    faCss3Alt,
    faJsSquare,
    faVuejs,
    faAngular,
    faReact,
    faNodeJs,
    faSass,
    faLess,
    faDrupal,
    faGulp,
    faGrunt,
    faNpm,
    faYarn,
    faRss,
    faCheck
)

export default function(Vue, { head, router, isClient }) {
    if (isClient) {
        Vue.use(VueGtm, {
            vueRouter: router,
            id: 'UA-1969234-5',
            enabled: false,
            debug: false
        })
    }

    Vue.use(VueScrollTo)
    Vue.use(BootstrapVue)
    Vue.component('Layout', DefaultLayout)

    Vue.component('font-awesome', FontAwesomeIcon)

    head.link.push({
        rel: 'stylesheet',
        href:
            'https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700'
    })
    head.link.push({
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i'
    })
}
