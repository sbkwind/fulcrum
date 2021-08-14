import { useContext } from 'react'
import propTypes from 'prop-types'
import cls from 'classnames'
import { ConfigContext } from '../config-provider'
import Dialog from '../internal/Dialog'
import Button from '../Button'

const Modal = (props) => {
  const {
    visible,
    // 渲染内容
    title,
    okText,
    cancelText,
    children,
    header,
    footer,
    modalRender,
    // 样式
    width,
    height,
    bodyStyle,
    centered,
    zIndex,
    // 遮罩层相关
    mask,
    maskStyle,
    maskClosable,
    // 回调函数
    onOk,
    onCancel,
    // modal渲染容器
    getContainer,
    destroyOnClose
  } = props

  const { getClsPrefix, getPopupContainer } = useContext(ConfigContext)

  const clsPrefix = getClsPrefix('modal')

  const handleOk = (e) => {
    onOk?.()
  }

  const handlCancel = (e) => {
    onCancel?.()
  }

  const defaultHeader = <h2>{title}</h2>

  const defaultFooter = (
    <>
      <Button type='primary' onClick={handleOk} style={{ marginRight: '10px' }}>
        {okText}
      </Button>
      <Button type='primary' onClick={handlCancel}>
        {cancelText}
      </Button>
    </>
  )

  return (
    <Dialog
      clsPrefix={clsPrefix}
      visible={visible}
      header={header ? header : defaultHeader}
      footer={footer ? footer : defaultFooter}
      dialogRender={modalRender}
      width={width}
      height={height}
      bodyStyle={bodyStyle}
      wrapperclassName={cls({ [`${clsPrefix}-centered`]: centered })}
      mask={mask}
      maskStyle={maskStyle}
      maskClosable={maskClosable}
      onClose={onCancel}
      getContainer={getPopupContainer || getContainer}
      zIndex={zIndex}
      destroyOnClose={destroyOnClose}
    >
      {children}
    </Dialog>
  )
}

Modal.propTypes = {
  visible: propTypes.bool.isRequired,
  title: propTypes.string,
  okText: propTypes.string,
  cancelText: propTypes.string,
  children: propTypes.oneOfType([propTypes.element, propTypes.array]),
  header: propTypes.element,
  footer: propTypes.element,
  modalRender: propTypes.func,
  width: propTypes.number,
  height: propTypes.number,
  bodyStyle: propTypes.object,
  centered: propTypes.bool,
  zIndex: propTypes.number,
  mask: propTypes.bool,
  maskStyle: propTypes.object,
  maskClosable: propTypes.bool,
  onOk: propTypes.func,
  onCancel: propTypes.func,
  getContainer: propTypes.func,
  destroyOnClose: propTypes.bool
}

Modal.defaultProps = {
  title: 'fulcrum modal title',
  okText: '确认',
  cancelText: '取消',
  mask: true,
  maskClosable: true,
  centered: false,
  destroyOnClose: false
}

export default Modal
