const Directive = {
  // Check if the element is the center of the screen
  inViewScroll (el) {
    var rect = el.getBoundingClientRect()
    return !(rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight / 2)
  },

  bind (el, binding) {
    el.classList.add('no-focus')
    el.$onScroll = () => {
      if (binding.def.inViewScroll(el)) {
        el.classList.add('focus')
        el.classList.remove('no-focus')
        el.focus()
        // binding.def.unbind(el, binding)
      } else {
        el.classList.remove('focus')
        el.classList.add('no-focus')
      }
    }
    document.addEventListener('scroll', el.$onScroll)
  },

  inserted (el, binding) {
    el.$onScroll()
  },

  unbind (el, binding) {
    document.removeEventListener('scroll', el.$onScroll)
    delete el.$onScroll
  }
}

export default Directive