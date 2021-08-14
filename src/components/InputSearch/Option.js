import propTypes from 'prop-types'
import cls from 'classnames'

const Option = (props) => {
  const { clsPrefix, title, children } = props
  return (
    <div className={cls(`${clsPrefix}-option-item`)} title={title}>
      {children}
    </div>
  )
}

Option.propTypes = {
  clsPrefix: propTypes.string
}

export default Option
