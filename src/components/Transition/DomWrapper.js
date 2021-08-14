import { useEffect } from 'react'

const DomWrapper = ({ onPrepare, children }) => {
  useEffect(() => {
    onPrepare?.()
  }, [])
  return children
}

export default DomWrapper
