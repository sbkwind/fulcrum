import { useState, useContext } from 'react'
import Input from './Input'
import { ConfigContext } from '../config-provider'

const Password = (props) => {
  const { iconRender, visibilityToggle, ...restProps } = props

  const [pwdVisible, setPwdVisible] = useState(false)
  const { getClsPrefix } = useContext(ConfigContext)

  const clsPrefix = getClsPrefix('input-password-icon')

  const handleClickIcon = (e) => {
    setPwdVisible((prev) => !prev)
  }

  if (!visibilityToggle) {
    return <Input type='password' />
  }

  // TODO: use toggle-icon
  const suffix = (
    <span className={`${clsPrefix}`} onClick={handleClickIcon}>
      {iconRender ? iconRender(pwdVisible) : <span>toggle</span>}
    </span>
  )

  return (
    <Input
      type={pwdVisible ? 'text' : 'password'}
      suffix={suffix}
      {...restProps}
    />
  )
}

export default Password
