import Transition from '../../Transition'
import propTypes from 'prop-types'

const Content = (props) => {
  const {
    clsPrefix,
    visible,
    onTransitionVisibleChange,
    header, // modal header element
    children, // modal body element
    footer, // modal footer element
    modalRender, // custom modal renderer
    width, // modal width
    height, // modal height
    bodyStyle // modal body style
  } = props

  // =================== render ==================
  const renderHeader = () => {
    if (header) {
      return <div className={`${clsPrefix}-header`}>{header}</div>
    }
    return null
  }

  const renderBody = () => {
    return (
      <div className={`${clsPrefix}-body`} style={bodyStyle}>
        {children}
      </div>
    )
  }

  const renderFooter = () => {
    if (footer) {
      return <div className={`${clsPrefix}-footer`}>{footer}</div>
    }
    return null
  }

  if (modalRender) {
    return modalRender()
  }

  const contentStyle = {}
  if (height) {
    contentStyle.height = height
  }
  if (width) {
    contentStyle.width = width
  }

  return (
    <Transition
      className={clsPrefix}
      visible={visible}
      onTransitionVisibleChange={onTransitionVisibleChange}
      type='zoom-in'
    >
      {(motionRef) => {
        return (
          <div
            className={`${clsPrefix}-content`}
            style={contentStyle}
            ref={motionRef}
          >
            {renderHeader()}
            {renderBody()}
            {renderFooter()}
          </div>
        )
      }}
    </Transition>
  )
}

Content.propTypes = {
  clsPrefix: propTypes.string,
  header: propTypes.element,
  children: propTypes.oneOfType([propTypes.element, propTypes.array]),
  footer: propTypes.element,
  modalRender: propTypes.func,
  width: propTypes.number,
  height: propTypes.number,
  bodyStyle: propTypes.object
}

export default Content
