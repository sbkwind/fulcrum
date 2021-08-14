import { createContext } from 'react'

const defaultGetClsPrefix = (suffix, customClsPrefix) => {
  if (customClsPrefix) {
    return customClsPrefix
  }
  return suffix ? `fulcrum-${suffix}` : 'fulcrum'
}
const defalutGetPopupContainer = () => document.body

export const ConfigContext = createContext({
  getClsPrefix: defaultGetClsPrefix,
  getPopupContainer: defalutGetPopupContainer
})

export const ConfigConsumer = ConfigContext.Consumer
