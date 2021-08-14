import { useEffect, useRef, useImperativeHandle, forwardRef } from 'react'
import { createPortal } from 'react-dom'

const Portal = (props, ref) => {
  const { getContainer, children } = props

  const containerRef = useRef()

  // 由于Portal组件没有dom元素，所以使用useImperativeHandle创建一个虚拟的ref
  useImperativeHandle(ref, () => ({}))

  if (!containerRef.current) {
    // 在执行props.getContainer时，就会将portal的container挂载到dom上
    containerRef.current = getContainer()
  }

  useEffect(() => {
    return () => {
      // containerRef.current就是portal的容器元素div，容器元素的parentNode就是挂载弹出层的容器
      containerRef?.current?.parentNode?.removeChild(containerRef.current)
    }
  }, [])

  return containerRef.current
    ? createPortal(children, containerRef.current)
    : null
}

export default forwardRef(Portal)
