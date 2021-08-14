import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  useCallback
} from 'react'
import cls from 'classnames'
// import Align from './Align'
import Transition from '../Transition'
import domAlign from 'dom-align'
import { composeRef } from '../utils'

const Popup = (props, ref) => {
  const {
    clsPrefix,
    target,
    alignConfig,
    popupClassName,
    popupStyle,
    zIndex,
    disabled,
    visible,
    transitionType,
    children,
    ...restProps
  } = props

  const popupRef = useRef()

  const popupCallbackRef = useCallback((node) => {
    if (node) {
      popupRef.current = node
    }
  }, [])

  const [innerVisible, setInnerVisible] = useState(false)

  useImperativeHandle(ref, () => ({
    getElement: () => popupRef.current
  }))

  const mergedStyle = {
    ...popupStyle,
    zIndex,
    opacity: visible && !innerVisible ? 0 : null
  }

  const forceAlign = () => {
    popupRef.current.style.display = null
    domAlign(popupRef.current, target(), alignConfig)
    setInnerVisible(true)
  }

  useEffect(() => {
    // visible变为true，开始align
    if (visible && !innerVisible) {
      forceAlign()
    } else if (!visible && innerVisible) {
      setInnerVisible(false)
    }
  }, [visible, innerVisible])

  return (
    <Transition
      visible={innerVisible}
      hideOnExit
      forceRender
      type={transitionType}
    >
      {(motionRef) => {
        return (
          <div
            ref={composeRef(motionRef, popupCallbackRef)}
            className={cls(clsPrefix, popupClassName)}
            style={mergedStyle}
            {...restProps}
          >
            {children}
          </div>
        )
      }}
    </Transition>
  )
}

export default forwardRef(Popup)
