import { useContext } from 'react'
import cls from 'classnames'
import propTypes from 'prop-types'
import { ConfigContext } from '../config-provider'

const Progress = ({
  percentage,
  showText = true,
  format = (percentage) => `${percentage}%`,
  textType = 'after',
  color,
  width,
  height,
  style
}) => {
  const { getClsPrefix } = useContext(ConfigContext)
  const clsPrefix = getClsPrefix('progress')
  const text = format(percentage)
  const insideTexts = ['start', 'center', 'end', 'progresscenter', 'follow']
  const outsideTexts = ['pre', 'after']
  const getColor = (color) => {
    if (typeof color === 'string') {
      return `${color}`
    }
    if (typeof color === 'function') {
      return `${color(percentage)}`
    }
    return null
  }

  const textTypeMap = Object.values([...insideTexts, ...outsideTexts]).reduce(
    (obj, key) => {
      obj[key] = key
      return obj
    },
    {}
  )

  return (
    <div className={cls(clsPrefix)}>
      {/* 前置text */}
      {showText && textType === 'pre' && (
        <span className={`${clsPrefix}-text`}>{text}</span>
      )}
      <div
        className={cls(`${clsPrefix}-bar`, {
          [`${clsPrefix}-inside-text`]: insideTexts.includes(textType)
        })}
        style={{ ...style, width, height }}
      >
        <div className={cls(`${clsPrefix}-bar-outer`)}>
          <div
            className={cls(`${clsPrefix}-bar-inner`)}
            style={{
              background: getColor(color),
              width: `${percentage}%`
            }}
          >
            {/* 相对于已有进度的位置 */}
            {showText && ['progresscenter', 'follow'].includes(textType) && (
              <span
                className={cls(
                  `${clsPrefix}-text`,
                  `${clsPrefix}-text-${textTypeMap[textType]}`
                )}
              >
                {text}
              </span>
            )}
          </div>
          {/* 相对于整体的位置 */}
          {showText && ['start', 'center', 'end'].includes(textType) && (
            <span
              className={cls(
                `${clsPrefix}-text`,
                `${clsPrefix}-text-${textTypeMap[textType]}`
              )}
            >
              {text}
            </span>
          )}
        </div>
      </div>
      {/* 后置text */}
      {showText && textType === 'after' && (
        <span className={`${clsPrefix}-text`}>{text}</span>
      )}
    </div>
  )
}

Progress.propTypes = {
  percentage: propTypes.number,
  showText: propTypes.bool,
  format: propTypes.func,
  textType: propTypes.oneOf([
    'after',
    'pre',
    'start',
    'end',
    'center',
    'follow',
    'progresscenter'
  ]),
  color: propTypes.oneOf([propTypes.string, propTypes.func]),
  width: propTypes.number,
  height: propTypes.number,
  style: propTypes.object
}

export default Progress
