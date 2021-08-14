import { useRef, useContext, useState } from 'react'
import propTypes from 'prop-types'
import cls from 'classnames'

import { ConfigContext } from '../config-provider'

const Input = (props) => {
  const {
    value,
    defaultValue,
    type,
    placeholder,
    disabled,
    readOnly,
    onChange,
    onFocus,
    onBlur,
    onClear,
    prefix,
    suffix,
    clearable,
    clearIcon,
    ...resetProps
  } = props

  const [focused, setFocused] = useState(false)

  const inputRef = useRef(null)
  const removePasswordValueTimerRef = useRef(null)

  const { getClsPrefix } = useContext(ConfigContext)

  const clsPrefix = getClsPrefix('input')
  const hasAffix = prefix || suffix || clearable

  // ====================event handlers====================
  const handleChange = (e) => {
    removePasswordValueAttribue()
    onChange?.(e)
  }

  // click clear-icon
  const handleClear = () => {
    onClear?.('')
  }

  const handleFocus = (e) => {
    setFocused(true)
    onFocus?.(e)
  }

  const triggerFocus = (e) => {
    // 会触发input的focus事件
    inputRef.current.focus()
    removePasswordValueAttribue()
  }

  const handleBlur = (e) => {
    setFocused(false)
    removePasswordValueAttribue()
    onBlur?.(e)
  }

  const removePasswordValueAttribue = () => {
    const input = inputRef.current
    removePasswordValueTimerRef.current = setTimeout(() => {
      if (type === 'password' && input && input.hasAttribute('value')) {
        input.removeAttribute('value')
      }
    })
  }

  // ===============render================
  const renderInput = () => {
    return (
      <input
        ref={inputRef}
        className={clsPrefix}
        value={value}
        defaultValue={defaultValue}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...resetProps}
      />
    )
  }

  const renderPreffix = () => {
    return prefix && <span className={`${clsPrefix}-prefix`}>{prefix}</span>
  }

  const renderClearIcon = () => {
    if (!clearable) {
      return null
    }
    const needClear = !disabled && !readOnly && value
    const clearIconCls = `${clsPrefix}-clear-icon`
    return (
      <span
        className={cls(clearIconCls, {
          [`${clearIconCls}-hidden`]: !needClear
        })}
        onClick={handleClear}
      >
        {clearIcon}
      </span>
    )
  }

  const renderSuffix = () => {
    if (clearable || suffix) {
      return (
        <span className={`${clsPrefix}-suffix`}>
          {renderClearIcon()}
          {suffix}
        </span>
      )
    }
    return null
  }

  const renderAffix = () => {
    const affixClsPrefix = `${clsPrefix}-affix-wrapper`
    const classNames = cls(affixClsPrefix, {
      [`${affixClsPrefix}-focused`]: focused,
      [`${affixClsPrefix}-disabled`]: disabled,
      [`${affixClsPrefix}-readOnly`]: readOnly
    })
    return (
      <span className={classNames} onClick={triggerFocus}>
        {renderPreffix()}
        {renderInput()}
        {renderSuffix()}
      </span>
    )
  }

  return hasAffix ? renderAffix() : renderInput()
}

Input.propTypes = {
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  defaultValue: propTypes.oneOfType([propTypes.string, propTypes.number]),
  type: propTypes.oneOf(['password', 'text']),
  placeholder: propTypes.string,
  disabled: propTypes.bool,
  readOnly: propTypes.bool,
  onChange: propTypes.func,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  onClear: propTypes.func,
  prefix: propTypes.element,
  suffix: propTypes.element,
  clearable: propTypes.bool
}

Input.defaultProps = {
  type: 'text',
  disabled: false,
  readOnly: false,
  clearable: false
}

export default Input
