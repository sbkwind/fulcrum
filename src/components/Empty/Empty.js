import { useContext } from 'react'
import propTypes from 'prop-types'
import Icon from '../Icon'
import { ConfigContext } from '../config-provider'

const Empty = ({ image, description, imageStyle, children }) => {
  const { getClsPrefix } = useContext(ConfigContext)
  const clsPrefix = getClsPrefix('empty')
  return (
    <div className={`${clsPrefix}`}>
      <div className={`${clsPrefix}-image`}>
        {typeof image === 'undefined' ? (
          <Icon
            icon='folder-open'
            theme='info'
            style={{ width: 200, height: 200, ...imageStyle }}
          />
        ) : (
          <img alt='empty' src={image} style={imageStyle} />
        )}
      </div>
      <div className={`${clsPrefix}-description`}>{description}</div>
      {children && <div className={`${clsPrefix}-extra`}>{children}</div>}
    </div>
  )
}

Empty.propTypes = {
  image: propTypes.string,
  description: propTypes.string,
  imageStyle: propTypes.object
}

Empty.defaultProps = {
  description: '空空如也'
}

export default Empty
