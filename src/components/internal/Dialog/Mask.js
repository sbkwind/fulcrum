import Transition from '../../Transition'

const Mask = (props) => {
  const { clsPrefix, visible, maskStyle, zIndex } = props
  return (
    <Transition visible={visible} type='fade' hideOnExit>
      {(motionRef) => {
        return (
          <div
            ref={motionRef}
            className={`${clsPrefix}-mask`}
            style={{
              ...maskStyle,
              zIndex: zIndex ? zIndex : null
            }}
          />
        )
      }}
    </Transition>
  )
}

export default Mask
