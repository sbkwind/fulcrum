import { useContext } from 'react'
import propTypes from 'prop-types'
import cls from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { ConfigContext } from '../config-provider'
library.add(fas)

const Icon = (props) => {
  const { theme, ...restProps } = props
  const { getClsPrefix } = useContext(ConfigContext)
  const clsPrefix = getClsPrefix('icon')
  return (
    <FontAwesomeIcon
      className={cls(`${clsPrefix}`, { [`${clsPrefix}-${theme}`]: theme })}
      {...restProps}
    />
  )
}

Icon.propTypes = {
  theme: propTypes.string
}

Icon.defaultProps = {
  theme: 'primary'
}

export default Icon
