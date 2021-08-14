import { useState } from 'react'
import Progress from '../components/Progress'
import Button from '../components/Button'

export default {
  title: 'fulcrum-ui/Progress',
  component: Progress
}

export const BaseProgress = () => {
  const [percent, setPercent] = useState(60)
  return (
    <div>
      <Progress percentage={percent} showText={false} />
      <Progress percentage={percent} textType='after' />
      <Progress percentage={percent} textType='pre' />
      <Progress percentage={percent} textType='center' />
      <Progress percentage={percent} textType='start' />
      <Progress percentage={percent} textType='end' />
      <Progress percentage={percent} textType='follow' />
      <Progress percentage={percent} textType='progresscenter' />
      <Button
        style={{ marginRight: 10 }}
        onClick={() =>
          setPercent((per) => {
            let percent = per - 10
            if (percent <= 0) {
              percent = 0
            }
            return percent
          })
        }
      >
        -
      </Button>
      <Button
        onClick={() =>
          setPercent((per) => {
            let percent = per + 10
            if (percent >= 100) {
              percent = 100
            }
            return percent
          })
        }
      >
        +
      </Button>
    </div>
  )
}

export const LinearGradient = () => {
  const [percent, setPercent] = useState(60)
  return (
    <>
      <Progress
        percentage={percent}
        textType='center'
        color='linear-gradient(to right, rgb(16, 142, 233), rgb(135, 208, 104))'
      />
      <Button
        style={{ marginRight: 10 }}
        onClick={() =>
          setPercent((per) => {
            let percent = per - 10
            if (percent <= 0) {
              percent = 0
            }
            return percent
          })
        }
      >
        -
      </Button>
      <Button
        onClick={() =>
          setPercent((per) => {
            let percent = per + 10
            if (percent >= 100) {
              percent = 100
            }
            return percent
          })
        }
      >
        +
      </Button>
    </>
  )
}

export const CustomColor = () => {
  const [percent, setPercent] = useState(60)
  const getColor = (percent) => {
    if (percent <= 30) {
      return '#fadb14'
    } else if (30 < percent && percent <= 60) {
      return '#17a2b8'
    } else {
      return '#67c23a'
    }
  }
  return (
    <>
      <Progress percentage={percent} textType='center' color={getColor} />
      <Button
        style={{ marginRight: 10 }}
        onClick={() =>
          setPercent((per) => {
            let percent = per - 10
            if (percent <= 0) {
              percent = 0
            }
            return percent
          })
        }
      >
        -
      </Button>
      <Button
        onClick={() =>
          setPercent((per) => {
            let percent = per + 10
            if (percent >= 100) {
              percent = 100
            }
            return percent
          })
        }
      >
        +
      </Button>
    </>
  )
}
