import getScrollbarWidth from './getScrollbarWidth'

const lock = () => {
  let scrollbarWidth = 0
  if (window.innerWidth > document.documentElement.clientWidth) {
    scrollbarWidth = getScrollbarWidth()
  }

  if (scrollbarWidth !== 0) {
    document.body.style.paddingRight = `${scrollbarWidth}px`
  }
  document.body.style.overflow = 'hidden'
}

export default lock
