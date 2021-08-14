import { useEffect, useRef, cloneElement, Children } from 'react'
import cls from 'classnames'

const OptionList = (props) => {
  const { clsPrefix, mesureWidth, onSelect, visible, children } = props
  const wrapperRef = useRef()

  const handleClick = (e) => {
    onSelect?.(e.target.title)
  }

  useEffect(() => {
    if (!wrapperRef.current.style.width) {
      const width = mesureWidth()
      wrapperRef.current.style.width = width + 'px'
    }
  })
  return (
    <div
      ref={wrapperRef}
      className={cls(`${clsPrefix}-option-list`, {
        [`${clsPrefix}-option-list-hidden`]: !visible
      })}
      onClick={handleClick}
    >
      {Children.map(children, (child) => {
        return cloneElement(child, {
          clsPrefix
        })
      })}
    </div>
  )
}

export default OptionList
