import { useState, useEffect, useContext, forwardRef } from 'react'
import propTypes from 'prop-types'
import { ConfigContext } from '../config-provider'
import Preview from './Preview'

const LOADING = 'loading'
const SUCCESS = 'success'
const ERROR = 'error'

const RImage = (props, ref) => {
  const {
    src,
    alt,
    placeholder,
    fallback,
    onload,
    onerror,
    width,
    height,
    allowPreview,
    previewOptions,
    onClick,
    ...restProps
  } = props

  const [status, setStatus] = useState(LOADING)
  const { getClsPrefix } = useContext(ConfigContext)

  const clsPrefix = getClsPrefix('img')

  const {
    visible: previewVisible,
    onClose: onPreviewClose,
    getContainer: getPreviewContainer,
    mask: previewMask,
    maskStyle: previewMaskStyle,
    width: previewWidth,
    height: previewHeight,
    centered: previewCentered
  } = typeof previewOptions === 'object' ? previewOptions : {}

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      const img = new Image()
      img.onload = (e) => resolve(e)
      img.onerror = (e) => reject(e)
      img.src = src
    })

    promise
      .then((e) => {
        setStatus(SUCCESS)
        onload?.(e)
      })
      .catch((e) => {
        setStatus(ERROR)
        onerror?.(e)
      })
  }, [onload, onerror, src])

  // ===========event handlers =============
  const handleClick = (e) => {
    onClick?.(e)
  }

  const handlePreview = (e) => {
    onClick?.(e)
  }

  // =========== render =============
  const canPreview = allowPreview && status === SUCCESS

  let content = null

  if (status === LOADING) {
    content = placeholder
  } else if (status === ERROR) {
    content = fallback
  } else if (status === SUCCESS) {
    content = (
      <img
        ref={ref}
        alt={alt}
        src={src}
        className={`${clsPrefix}-inner`}
        {...restProps}
        style={{ width, height }}
      />
    )
  }

  return (
    <>
      <div
        className={clsPrefix}
        onClick={canPreview ? handlePreview : handleClick}
      >
        {content}
      </div>
      {canPreview && (
        <Preview
          src={src}
          alt={alt}
          visible={previewVisible}
          onClose={onPreviewClose}
          getContainer={getPreviewContainer}
          mask={previewMask}
          maskStyle={previewMaskStyle}
          width={previewWidth}
          height={previewHeight}
          centered={previewCentered}
        />
      )}
    </>
  )
}

const FImage = forwardRef(RImage)

FImage.displayName = 'Image'

FImage.propTypes = {
  src: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  placeholder: propTypes.element,
  fallback: propTypes.element,
  onload: propTypes.func,
  onerror: propTypes.func,
  onClick: propTypes.func,
  width: propTypes.number,
  height: propTypes.number,
  allowPreview: propTypes.bool,
  previewOptions: propTypes.shape({
    visible: propTypes.bool.isRequired,
    onClose: propTypes.func.isRequired,
    getContainer: propTypes.func,
    mask: propTypes.bool,
    maskStyle: propTypes.object,
    width: propTypes.number,
    height: propTypes.number,
    centered: propTypes.bool
  })
}

export default FImage
