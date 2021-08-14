import React, { useContext, useState, useRef } from 'react'
import cls from 'classnames'
import { ConfigContext } from '../config-provider'
import Trigger from '../internal/Trigger'
import OptionList from './OptionList'
import Input from '../Input'

const alignConfig = {
  points: ['tc', 'bc'],
  offset: [0, 4],
  targetOffset: [0, 0],
  overflow: {
    adjustX: 1,
    adjustY: 1
  }
}

const InputSearch = (props) => {
  const { value, onSelect, onChange, style, width, children } = props
  const [visible, setVisible] = useState(false)
  const { getClsPrefix, getPopupContainer } = useContext(ConfigContext)
  const inputRef = useRef()
  const clsPrefix = getClsPrefix('input-search')

  const mesureWidth = () => {
    return inputRef.current.getBoundingClientRect().width
  }

  const handleSelect = (value) => {
    onSelect?.(value)
    setVisible(false)
  }

  const handlePopupVisibleChange = () => {
    setVisible((pre) => !pre)
  }

  const popupNode = (
    <OptionList
      clsPrefix={clsPrefix}
      mesureWidth={mesureWidth}
      onSelect={handleSelect}
      visible={visible}
    >
      {children}
    </OptionList>
  )

  return (
    <Trigger
      popup={popupNode}
      clsPrefix={`${clsPrefix}-popup`}
      alignConfig={alignConfig}
      visible={visible}
      onPopupVisibleChange={handlePopupVisibleChange}
      getPopupContainer={getPopupContainer}
      action='click'
    >
      <div
        ref={inputRef}
        className={`${clsPrefix}`}
        style={{ ...style, width }}
      >
        <Input value={value} onChange={onChange} />
      </div>
    </Trigger>
  )
}

export default InputSearch
