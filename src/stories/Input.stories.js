import { useState } from 'react'
import Input from '../components/Input'
import Icon from '../components/Icon'

export default {
  title: 'fulcrum-ui/Input',
  component: Input
}

export const BaseInput = () => {
  const [value, setValue] = useState('')
  return (
    <div>
      <h4>基础input组件</h4>
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  )
}

export const ClearableInput = () => {
  const [value, setValue] = useState('')
  return (
    <div>
      <h4>可清空</h4>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        clearable
        clearIcon={<Icon icon='times' />}
        onClear={() => setValue('')}
      />
    </div>
  )
}

export const AffixInput = () => {
  const [value, setValue] = useState('')
  return (
    <div>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        prefix={<Icon icon='address-book' />}
        suffix={<Icon icon='align-justify' />}
      />
    </div>
  )
}

export const Password = () => {
  const [value, setValue] = useState('')
  return (
    <div>
      <Input.Password
        value={value}
        onChange={(e) => setValue(e.target.value)}
        visibilityToggle
        iconRender={(visible) =>
          visible ? <Icon icon='eye' /> : <Icon icon='eye-slash' />
        }
      />
    </div>
  )
}
