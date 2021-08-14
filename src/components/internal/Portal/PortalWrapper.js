import { useRef } from 'react'
import propTypes from 'prop-types'
import Portal from './Portal'

const PortalWrapper = (props) => {
  const { visible, forceRender, getContainer, locatedWrapper, children } = props

  const portalContainerRef = useRef(null)
  const rafId = useRef()

  const attachToParent = () => {
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current)
      rafId.current = null
    }
    const portalContainer = portalContainerRef.current
    if (portalContainer && !portalContainer.parentNode) {
      const mountNode = getContainer()
      if (mountNode) {
        mountNode.appendChild(portalContainer)
      } else {
        rafId.current = requestAnimationFrame(() => {
          attachToParent()
        })
      }
    }
  }

  const getPortalContainer = () => {
    if (!portalContainerRef.current) {
      const div = document.createElement('div')
      if (locatedWrapper) {
        div.style.position = 'absolute'
        div.style.top = 0
        div.style.left = 0
        div.style.width = '100%'
      }
      portalContainerRef.current = div
      attachToParent()
    }
    return portalContainerRef.current
  }

  let portal = null

  if (forceRender || visible || portalContainerRef.current) {
    portal = <Portal getContainer={getPortalContainer}>{children}</Portal>
  }

  return portal
}

PortalWrapper.propTypes = {
  visible: propTypes.bool,
  forceRender: propTypes.bool,
  getContainer: propTypes.func
}

export default PortalWrapper
