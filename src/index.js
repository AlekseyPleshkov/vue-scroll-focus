import Directive from './directive.js'

var VueScrollFocus = {
  install: (Vue, options) => {
    Vue.directive('scroll-focus', Directive)
  }
}

export default VueScrollFocus

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueScrollFocus)
}
