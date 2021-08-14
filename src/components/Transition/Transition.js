import React, { useRef, useCallback } from 'react'
import { CSSTransition } from 'react-transition-group'
import cls from 'classnames'
import propTypes from 'prop-types'

const Transition = ({
  type,
  visible,
  onTransitionVisibleChange,
  hideOnExit,
  forceRender,
  children
}) => {
  const initialDisplay = useRef()

  const childRef = useRef()
  const childCallbackRef = useCallback((node) => {
    if (node && initialDisplay.current === undefined) {
      childRef.current = node
      initialDisplay.current = node.style.display
    }
  }, [])

  const handleEnter = (node, isAppearing) => {
    onTransitionVisibleChange?.(true, isAppearing)
    if (hideOnExit) {
      childRef.current.style.display = initialDisplay.current
    }
  }

  const handleExit = () => {
    onTransitionVisibleChange?.(false)
    if (hideOnExit) {
      childRef.current.style.display = 'none'
    }
  }

  const ret = children(childCallbackRef)
  const initialCls = ret.props.className

  return (
    <CSSTransition
      in={visible}
      timeout={300}
      onEnter={handleEnter}
      onExited={handleExit}
      classNames={type}
      appear
      mountOnEnter={!forceRender}
      unmountOnExit={false}
    >
      {React.cloneElement(ret, {
        className: cls(initialCls)
      })}
    </CSSTransition>
  )
}

Transition.propTypes = {
  type: propTypes.string,
  visible: propTypes.bool,
  onTransitionVisibleChange: propTypes.func,
  hideOnExit: propTypes.bool,
  forceRender: propTypes.bool
}

export default Transition
