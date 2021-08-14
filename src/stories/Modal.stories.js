import { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button'

export default {
  title: 'fulcrum-ui/Modal',
  component: Modal
}

export const BaseModal = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button onClick={() => setVisible((pre) => !pre)}>Open Modal</Button>
      <Modal
        visible={visible}
        title='fulcrum modal'
        okText='确认'
        cancelText='取消'
        onOk={() => {
          console.log('press ok')
          setVisible((pre) => !pre)
        }}
        onCancel={() => {
          console.log('press cancel')
          setVisible((pre) => !pre)
        }}
        width={500}
      >
        <p>some text。。。</p>
        <p>some text。。。</p>
        <p>some text。。。</p>
      </Modal>
    </>
  )
}

export const CenteredModal = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <p>使用centered属性居中modal</p>
      <Button onClick={() => setVisible((pre) => !pre)}>Open Modal</Button>
      <Modal
        visible={visible}
        title='fulcrum modal'
        okText='确认'
        cancelText='取消'
        onOk={() => {
          console.log('press ok')
          setVisible((pre) => !pre)
        }}
        onCancel={() => {
          console.log('press cancel')
          setVisible((pre) => !pre)
        }}
        centered
        width={500}
      >
        <p>some text。。。</p>
        <p>some text。。。</p>
        <p>some text。。。</p>
      </Modal>
    </>
  )
}

export const WithoutMask = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <p>设置mask=false不显示mask</p>
      <Button onClick={() => setVisible((pre) => !pre)}>Open Modal</Button>
      <Modal
        visible={visible}
        title='fulcrum modal'
        okText='确认'
        cancelText='取消'
        onOk={() => {
          console.log('press ok')
          setVisible((pre) => !pre)
        }}
        onCancel={() => {
          console.log('press cancel')
          setVisible((pre) => !pre)
        }}
        centered
        width={500}
        mask={false}
      >
        <p>some text。。。</p>
        <p>some text。。。</p>
        <p>some text。。。</p>
      </Modal>
    </>
  )
}

export const MaskNotClosable = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <p>maskClosable=false，点击mask不关闭modal</p>
      <Button onClick={() => setVisible((pre) => !pre)}>Open Modal</Button>
      <Modal
        visible={visible}
        title='fulcrum modal'
        okText='确认'
        cancelText='取消'
        onOk={() => {
          console.log('press ok')
          setVisible((pre) => !pre)
        }}
        onCancel={() => {
          console.log('press cancel')
          setVisible((pre) => !pre)
        }}
        centered
        width={500}
        mask={false}
        maskClosable={false}
      >
        <p>some text。。。</p>
        <p>some text。。。</p>
        <p>some text。。。</p>
      </Modal>
    </>
  )
}

export const DestroyOnClose = () => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <p>使用destroyOnClose，在弹窗关闭后销毁dom元素</p>
      <Button onClick={() => setVisible((pre) => !pre)}>Open Modal</Button>
      <Modal
        visible={visible}
        title='fulcrum modal'
        okText='确认'
        cancelText='取消'
        onOk={() => {
          console.log('press ok')
          setVisible((pre) => !pre)
        }}
        onCancel={() => {
          console.log('press cancel')
          setVisible((pre) => !pre)
        }}
        centered
        width={500}
        destroyOnClose
      >
        <p>some text。。。</p>
        <p>some text。。。</p>
        <p>some text。。。</p>
      </Modal>
    </>
  )
}
