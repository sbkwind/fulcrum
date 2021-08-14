import { useState, useRef } from 'react'
import Dropdown from '../components/Dropdown'

const overlay = (
  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
    {[1, 2, 3, 4].map((val, idx) => {
      return (
        <li
          key={idx}
          style={{
            width: 100,
            height: 30,
            border: '1px solid #ccc',
            textAlign: 'center',
            backgroundColor: '#fff'
          }}
        >
          {val}
        </li>
      )
    })}
  </ul>
)

export const HoverToShow = () => {
  const [visible, setVisible] = useState(false)
  return (
    <Dropdown
      visible={visible}
      onVisibleChange={() => setVisible((pre) => !pre)}
      overlay={overlay}
      trigger='hover'
    >
      hover me
    </Dropdown>
  )
}

export const ClickToShow = () => {
  const [visible, setVisible] = useState(false)
  return (
    <Dropdown
      visible={visible}
      onVisibleChange={() => setVisible((pre) => !pre)}
      overlay={overlay}
      trigger='click'
    >
      click me
    </Dropdown>
  )
}

export const Disabled = () => {
  const [visible, setVisible] = useState(false)
  return (
    <Dropdown
      visible={visible}
      onVisibleChange={() => setVisible((pre) => !pre)}
      overlay={overlay}
      trigger='click'
      disabled
    >
      i am disabled
    </Dropdown>
  )
}

const PlacementChild = ({ placement }) => {
  const [visible, setVisible] = useState(false)
  return (
    <Dropdown
      visible={visible}
      onVisibleChange={() => setVisible((pre) => !pre)}
      overlay={overlay}
      trigger='hover'
      placement={placement}
    >
      {placement}
    </Dropdown>
  )
}

export const Placement = () => {
  const placements = [
    'top',
    'topLeft',
    'topRight',
    'bottom',
    'bottomLeft',
    'bottomRight'
  ]

  return (
    <div
      style={{
        display: 'flex',
        width: 100,
        flexWrap: 'wrap',
        margin: '100px auto'
      }}
    >
      {placements.map((placement, index) => (
        <div key={index} style={{ marginTop: 50, marginRight: 50 }}>
          <PlacementChild placement={placement} />
        </div>
      ))}
    </div>
  )
}

export const RenderInBody = () => {
  const [visible, setVisible] = useState(false)

  return (
    <div style={{ height: 500, overflow: 'auto', marginLeft: 50 }}>
      <h4>
        默认采用render in body的方式渲染下拉菜单，但是在滚动时可能会遇到问题
      </h4>
      <div style={{ height: 400 }} />
      <Dropdown
        visible={visible}
        onVisibleChange={() => setVisible((pre) => !pre)}
        overlay={overlay}
      >
        click me
      </Dropdown>
      <div style={{ height: 400 }} />
    </div>
  )
}

export const GetPopupContainer = () => {
  const [visible, setVisible] = useState(false)
  const containerRef = useRef()

  return (
    <div
      style={{
        height: 500,
        overflow: 'auto',
        position: 'relative',
        marginLeft: 50
      }}
      ref={containerRef}
    >
      <h4>
        使用getPopupContainer指定下拉菜单的容器元素，并令容器元素为相对定位
      </h4>
      <div style={{ height: 400 }} />
      <Dropdown
        visible={visible}
        onVisibleChange={() => setVisible((pre) => !pre)}
        overlay={overlay}
        getPopupContainer={() => containerRef.current}
      >
        click me
      </Dropdown>
      <div style={{ height: 400 }} />
    </div>
  )
}

export default {
  title: 'fulcrum-ui/Dropdown',
  component: Dropdown
}
