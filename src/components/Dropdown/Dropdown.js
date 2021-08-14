import React, { useContext } from 'react'
import cls from 'classnames'
import propTypes from 'prop-types'
import Trigger from '../internal/Trigger'
import { ConfigContext } from '../config-provider'
import placements from './placements'

const Dropdown = (props) => {
  const {
    visible,
    onVisibleChange,
    trigger,
    overlay,
    overlayClassName,
    overlayStyle,
    placement,
    disabled,
    getPopupContainer,
    zIndex,
    mouseEnterDelay,
    mouseLeaveDelay,
    children
  } = props

  const {
    getClsPrefix,
    getPopupContainer: defaultGetPopContainer
  } = useContext(ConfigContext)

  const clsPrefix = getClsPrefix('drop-down')
  const transitionType = placement.includes('top') ? 'slide-up' : 'slide-down'
  const alignConfig = placements[placement]

  return (
    <Trigger
      clsPrefix={clsPrefix}
      alignConfig={alignConfig}
      action={disabled ? '' : trigger}
      visible={visible}
      onPopupVisibleChange={onVisibleChange}
      popup={overlay}
      getPopupContainer={getPopupContainer || defaultGetPopContainer}
      popupClassName={cls(overlayClassName)}
      popupStyle={overlayStyle}
      mouseEnterDelay={mouseEnterDelay}
      mouseLeaveDelay={mouseLeaveDelay}
      transitionType={transitionType}
      zIndex={zIndex}
    >
      <span
        className={cls(`${clsPrefix}-trigger`, {
          [`${clsPrefix}-trigger-disabled`]: disabled
        })}
      >
        {children}
      </span>
    </Trigger>
  )
}

Dropdown.propTypes = {
  visible: propTypes.bool.isRequired,
  onVisibleChange: propTypes.func.isRequired,
  trigger: propTypes.oneOf(['click', 'hover']),
  overlay: propTypes.oneOfType([propTypes.element, propTypes.array]).isRequired,
  overlayClassName: propTypes.string,
  overlayStyle: propTypes.object,
  placement: propTypes.oneOf([
    'top',
    'topLeft',
    'topRight',
    'bottom',
    'bottomLeft',
    'bottomRight'
  ]),
  disabled: propTypes.bool,
  getPopupContainer: propTypes.func,
  zIndex: propTypes.number,
  mouseEnterDelay: propTypes.number,
  mouseLeaveDelay: propTypes.number
}

Dropdown.defaultProps = {
  trigger: 'click',
  placement: 'bottom',
  disabled: false,
  mouseEnterDelay: 100,
  mouseLeaveDelay: 100
}

export default Dropdown
