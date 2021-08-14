// import { useMemo } from 'react'
import { ConfigContext, ConfigConsumer } from './context'

// const PASSED_PROPS = ['getPopupContainer', 'getClsPrefix']

const CustomConfigProvider = (props) => {
  const { defaultConfig, children } = props
  // const config = {
  //   ...defaultConfig
  // }

  // PASSED_PROPS.forEach((key) => {
  //   const value = props[key]
  //   if (value) {
  //     config[key] = value
  //   }
  // })

  // const memoConfig = useMemo(() => config, [config])

  return (
    // 提供一个新的ConfigContext，让子组件消费这个context
    <ConfigContext.Provider value={defaultConfig}>
      {children}
    </ConfigContext.Provider>
  )
}

const ConfigProvider = (props) => {
  return (
    <ConfigConsumer>
      {(defaultConfig) => {
        return <CustomConfigProvider defaultConfig={defaultConfig} {...props} />
      }}
    </ConfigConsumer>
  )
}

export { ConfigContext, ConfigConsumer }

export default ConfigProvider
