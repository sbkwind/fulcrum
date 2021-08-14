import { useState } from 'react'
import Tooltip from '../components/Tooltip'

export default {
  title: 'fulcrum-ui/Tooltip',
  component: Tooltip
}

export const HoverToShow = () => {
  const [visible, setVisible] = useState(false)

  return (
    <div style={{ marginTop: 200 }}>
      <span>
        hover
        <Tooltip
          visible={visible}
          onVisibleChange={() => setVisible((pre) => !pre)}
          title='hover'
        >
          <span style={{ border: '1px solid red' }}> 这里 </span>
        </Tooltip>
        to show
      </span>
    </div>
  )
}

export const ClickToShow = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div style={{ marginTop: 200 }}>
      <span>
        click
        <Tooltip
          visible={visible}
          onVisibleChange={() => setVisible((pre) => !pre)}
          title='click'
          trigger='click'
        >
          <span style={{ border: '1px solid red' }}> 这里 </span>
        </Tooltip>
        to show
      </span>
    </div>
  )
}

const PlacementChild = ({ placement }) => {
  const [visible, setVisible] = useState(false)
  return (
    <span>
      <Tooltip
        visible={visible}
        onVisibleChange={() => setVisible((pre) => !pre)}
        trigger='hover'
        placement={placement}
        title={placement}
      >
        {placement}
      </Tooltip>
    </span>
  )
}

export const Placement = () => {
  const placements = [
    'left',
    'right',
    'top',
    'bottom',
    'topLeft',
    'leftTop',
    'topRight',
    'rightTop',
    'bottomRight',
    'rightBottom',
    'bottomLeft',
    'leftBottom'
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

export const CustomOverlay = () => {
  const [visible, setVisible] = useState(false)
  const overlay = (
    <>
      <div style={{ fontSize: 18, textAlign: 'center' }}>title</div>
      <div style={{ fontSize: 14 }}>content</div>
    </>
  )

  return (
    <span>
      123123123
      <Tooltip
        visible={visible}
        onVisibleChange={() => setVisible((pre) => !pre)}
        overlay={overlay}
        placement='bottom'
      >
        这里
      </Tooltip>
      657567
    </span>
  )
}
