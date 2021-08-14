import { useState } from 'react'
import Transition from '../components/Transition'
import Button from '../components/Button'
import './index.scss'

export default {
  title: 'fulcrum-ui/Transition',
  component: Transition
}

export const Fade = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <Button
        onClick={() => setVisible((pre) => !pre)}
        style={{ marginBottom: 10 }}
      >
        click to Fade
      </Button>
      <Transition type='fade' visible={visible} hideOnExit>
        {(motionRef) => <div className='box' ref={motionRef} />}
      </Transition>
    </div>
  )
}

export const ZoomIn = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <Button
        onClick={() => setVisible((pre) => !pre)}
        style={{ marginBottom: 10 }}
      >
        click to zoom in
      </Button>
      <Transition type='zoom-in' visible={visible} hideOnExit>
        {(motionRef) => <div className='box' ref={motionRef} />}
      </Transition>
    </div>
  )
}

export const SlideUp = () => {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <Transition visible={visible} type='slide-up' hideOnExit>
        {(motionRef) => <div className='box' ref={motionRef} />}
      </Transition>
      <Button
        onClick={() => setVisible((pre) => !pre)}
        style={{ marginBottom: 10, position: 'absolute', top: 340 }}
      >
        click to slide up
      </Button>
    </div>
  )
}

export const SlideDown = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <Button
        onClick={() => setVisible((pre) => !pre)}
        style={{ marginBottom: 10 }}
      >
        click to slide down
      </Button>
      <Transition type='slide-down' visible={visible} hideOnExit>
        {(motionRef) => <div className='box' ref={motionRef} />}
      </Transition>
    </div>
  )
}
