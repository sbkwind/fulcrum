import { useContext } from 'react'
import cls from 'classnames'
import propTypes from 'prop-types'
import Dialog from '../internal/Dialog'
import { ConfigContext } from '../config-provider'

const Preview = (props) => {
  const {
    src,
    alt,
    visible,
    onClose,
    getContainer,
    mask,
    maskStyle,
    width,
    height,
    centered
  } = props
  const { getClsPrefix, getPopupContainer } = useContext(ConfigContext)

  const clsPrefix = getClsPrefix('img-preview')
  return (
    <Dialog
      clsPrefix={clsPrefix}
      visible={visible}
      onClose={onClose}
      getContainer={getContainer || getPopupContainer}
      mask={mask}
      maskStyle={maskStyle}
      maskClosable
      width={width}
      height={height}
      wrapperclassName={cls({ [`${clsPrefix}-centered`]: centered })}
    >
      <img src={src} alt={alt} className={`${clsPrefix}-inner`} />
    </Dialog>
  )
}

Preview.propTypes = {
  src: propTypes.string,
  alt: propTypes.string,
  visible: propTypes.bool,
  onClose: propTypes.func,
  getContainer: propTypes.func,
  mask: propTypes.bool,
  maskStyle: propTypes.object,
  width: propTypes.string,
  height: propTypes.string,
  centered: propTypes.bool
}

Preview.defaultProps = {
  mask: true,
  centered: true
}

export default Preview
