import Button from '../components/Button'

export default {
  title: 'fulcrum-ui/Button',
  component: Button
}

const baseArgs = {
  type: 'primary',
  disabled: false,
  size: 'middle',
  children: 'primary',
  onClick: () => console.log('click button')
}

const Template = (args) => <Button {...args} />

export const 不同类型 = Template.bind({})
不同类型.args = {
  ...baseArgs
}

export const 不同大小 = Template.bind({})
不同大小.args = {
  ...baseArgs,
  size: 'large'
}
