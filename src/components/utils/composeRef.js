import { isFunc, isObj } from './type'

const fillRef = (ref, node) => {
  if (isFunc(ref)) {
    ref(node)
  } else if (isObj(ref) && 'current' in ref) {
    ref.current = node
  }
}

const composeRef = (...refs) => {
  return (node) => {
    refs.forEach((ref) => {
      fillRef(ref, node)
    })
  }
}

export { fillRef, composeRef }

export default composeRef
