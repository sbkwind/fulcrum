let scrollbarWidth

const getScrollbarWidth = (fresh) => {
  if (fresh || scrollbarWidth === undefined) {
    const outer = document.createElement('div')
    const outerStyle = outer.style

    outerStyle.position = 'absolute'
    outerStyle.top = '0'
    outerStyle.left = '0'
    outerStyle.width = '100px'
    outerStyle.height = '100px'
    outerStyle.visibility = 'hidden'
    outerStyle.overflow = 'hidden'

    const inner = document.createElement('div')
    inner.style.width = '100%'
    inner.style.height = '200px'

    outer.appendChild(inner)
    document.body.appendChild(outer)

    const widthContained = inner.offsetWidth
    outer.style.overflow = 'scroll'
    const widthScroll = inner.offsetWidth

    document.body.removeChild(outer)

    scrollbarWidth = widthContained - widthScroll
  }

  return scrollbarWidth
}

export default getScrollbarWidth
