import { useContext } from 'react'
import propTypes from 'prop-types'
import cls from 'classnames'
import { ConfigContext } from '../config-provider'
import Trigger from '../internal/Trigger'
import placements from './placements'

const Tooltip = (props) => {
  const {
    // 弹出层
    title,
    overlay,
    overlayClassName,
    overlayStyle,
    placement,
    bgColor,
    // TODO: 目前版本使用完全受控组件，即必须由外界控制弹出层的显示与隐藏
    visible,
    onVisibleChange,
    // 触发方式
    trigger,
    mouseEnterDelay,
    mouseLeaveDelay,
    getPopupContainer,
    autoDestory,
    zIndex,
    children
  } = props

  const {
    getClsPrefix,
    getPopupContainer: defaultGetPopContainer
  } = useContext(ConfigContext)

  const clsPrefix = getClsPrefix('tooltip')
  const popup = overlay ? (
    overlay
  ) : (
    <div className={`${clsPrefix}-content`}>{title}</div>
  )

  const popupStyle = Object.assign({}, overlayStyle)
  if (bgColor) {
    popupStyle.backgroundColor = bgColor
  }

  const alignConfig = placements[placement]

  return (
    <Trigger
      clsPrefix={clsPrefix}
      alignConfig={alignConfig}
      action={trigger}
      visible={visible}
      onPopupVisibleChange={onVisibleChange}
      popup={popup}
      getPopupContainer={getPopupContainer || defaultGetPopContainer}
      popupClassName={cls(overlayClassName)}
      popupStyle={popupStyle}
      mouseEnterDelay={mouseEnterDelay}
      mouseLeaveDelay={mouseLeaveDelay}
      autoDestory={autoDestory}
      transitionType='fade'
      zIndex={zIndex}
    >
      <span className={`${clsPrefix}-trigger`}>{children}</span>
    </Trigger>
  )
}

Tooltip.propTypes = {
  title: propTypes.string,
  visible: propTypes.bool,
  onPopupVisibleChange: propTypes.func,
  trigger: propTypes.oneOf(['click', 'hover']),
  overlay: propTypes.oneOfType([propTypes.element, propTypes.array]),
  overlayClassName: propTypes.string,
  overStyle: propTypes.object,
  placement: propTypes.oneOf([
    'left',
    'right',
    'top',
    'bottom',
    'topLeft',
    'leftTop',
    'topRight',
    'rightTop',
    'bottomRight',
    'rightBottom',
    'bottomLeft',
    'leftBottom'
  ]),
  getPopupContainer: propTypes.func,
  zIndex: propTypes.number,
  autoDestory: propTypes.bool,
  mouseEnterDelay: propTypes.number,
  mouseLeaveDelay: propTypes.number
}

Tooltip.defaultProps = {
  trigger: 'hover',
  placement: 'top',
  autoDestory: false,
  mouseEnterDelay: 200,
  mouseLeaveDelay: 200
}

export default Tooltip
