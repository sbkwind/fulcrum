import React, {
  useEffect,
  useImperativeHandle,
  useRef,
  useCallback
} from 'react'
import domAlign from 'dom-align'

const Align = (props, ref) => {
  const { target, alignConfig, beforeAlign, afterAlign, children } = props

  const sourceNodeRef = useRef(null)
  const sourceNodeCallbackRef = useCallback((node) => {
    if (node) {
      sourceNodeRef.current = node
    }
  }, [])

  const forceAlign = () => {
    beforeAlign?.()
    domAlign(sourceNodeRef.current, target(), alignConfig)
    afterAlign?.()
  }

  useImperativeHandle(ref, () => ({
    forceAlign
  }))

  useEffect(() => {
    forceAlign()
  })

  useEffect(() => {
    window.addEventListener('resize', forceAlign)
    return () => {
      window.removeEventListener('resize', forceAlign)
    }
  }, [])

  return children(sourceNodeCallbackRef)

  // const childNode = React.Children.only(children)

  // const cloned = React.cloneElement(childNode, {
  //   ref: composeRef(childNode.ref, sourceNodeRef)
  // })

  // return cloned
}

export default React.forwardRef(Align)
