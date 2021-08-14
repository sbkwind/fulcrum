import { useEffect, useRef, useState } from 'react'
import cls from 'classnames'
import propTypes from 'prop-types'
import PortalWrapper from '../Portal'
import Content from './content'
import Mask from './Mask'
import { lock, unlock } from '../../utils'

const Dialog = (props) => {
  const {
    clsPrefix,
    // 显示隐藏
    visible,
    // 自定义渲染内容
    header,
    children,
    footer,
    dialogRender,
    // 样式相关
    width,
    height,
    bodyStyle,
    wrapperclassName,
    // 遮罩层相关
    mask,
    maskStyle,
    maskClosable,
    // 回调函数
    onClose,
    afterClose,
    // Dialog渲染容器
    getContainer,
    zIndex,
    // 关闭Dialog时销毁组件
    destroyOnClose
  } = props

  const wrapperRef = useRef()

  const [transitionVisible, setTransitionVisible] = useState(visible)

  // =================== handlers ==================
  const handleWrapperClick = (e) => {
    if (!maskClosable) {
      return
    }
    if (e.target === wrapperRef.current) {
      onClose?.()
    }
  }

  const handleTransitionVisibleChange = (newVisible) => {
    if (!newVisible) {
      setTransitionVisible(false)
      afterClose?.()
    } else {
      setTransitionVisible(true)
    }
  }

  // =================== effect ==================
  useEffect(() => {
    // 弹出Dialog时，页面不允许滚动
    if (transitionVisible) {
      lock()
      return () => unlock()
    }
    return () => {}
  }, [transitionVisible])

  // =================== render ==================
  if (wrapperRef.current && destroyOnClose && !transitionVisible) {
    return null
  }

  return (
    <PortalWrapper visible={visible} getContainer={getContainer}>
      <div className={clsPrefix}>
        <Mask
          visible={visible && mask}
          clsPrefix={clsPrefix}
          maskStyle={maskStyle}
          zIndex={zIndex}
        />
        <div
          className={cls(`${clsPrefix}-wrapper`, wrapperclassName)}
          style={{
            zIndex: zIndex ? zIndex : null,
            display: !transitionVisible ? 'none' : null
          }}
          onClick={handleWrapperClick}
          ref={wrapperRef}
        >
          <Content
            clsPrefix={clsPrefix}
            visible={visible}
            onTransitionVisibleChange={handleTransitionVisibleChange}
            header={header}
            footer={footer}
            dialogRender={dialogRender}
            width={width}
            height={height}
            bodyStyle={bodyStyle}
          >
            {children}
          </Content>
        </div>
      </div>
    </PortalWrapper>
  )
}

Dialog.propTypes = {
  clsPrefix: propTypes.string,
  visible: propTypes.bool,
  header: propTypes.element,
  children: propTypes.oneOfType([propTypes.element, propTypes.array]),
  footer: propTypes.element,
  dialogRender: propTypes.element,
  width: propTypes.number,
  height: propTypes.number,
  bodyStyle: propTypes.object,
  wrapperclassName: propTypes.string,
  mask: propTypes.bool,
  maskStyle: propTypes.object,
  maskClosable: propTypes.bool,
  onClose: propTypes.func,
  getContainer: propTypes.func,
  zIndex: propTypes.number,
  destroyOnClose: propTypes.bool
}

export default Dialog
