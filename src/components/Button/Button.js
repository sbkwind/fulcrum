import { useContext } from 'react'
import cls from 'classnames'
import propTypes from 'prop-types'
import { ConfigContext } from '../config-provider'
import './style/index.scss'

const types = {
  primary: 'primary',
  info: 'info',
  warning: 'warning',
  danger: 'danger',
  success: 'success'
}

const sizes = {
  large: 'large',
  middle: 'middle',
  small: 'small'
}

const Button = (props) => {
  const {
    type,
    size,
    disabled,
    className,
    onClick,
    children,
    ...restProps
  } = props

  const { getClsPrefix } = useContext(ConfigContext)
  const clsPrefix = getClsPrefix('btn')

  const classNames = cls(
    `${clsPrefix}`,
    {
      [`${clsPrefix}-${type}`]: type,
      [`${clsPrefix}-${size}`]: size,
      [`${clsPrefix}-disabled`]: disabled
    },
    className
  )

  return (
    <button
      disabled={disabled}
      className={classNames}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  type: propTypes.oneOf(Object.keys(types)),
  size: propTypes.oneOf(Object.keys(sizes)),
  disabled: propTypes.bool,
  className: propTypes.string,
  onClick: propTypes.func
}

Button.defaultProps = {
  type: 'primary',
  size: 'middle',
  disabled: false
}

export default Button
