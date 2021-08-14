const autoAdjustOverflow = {
  adjustX: 0,
  adjustY: 0
}

const targetOffset = [0, 0]

const placements = {
  top: {
    points: ['bc', 'tc'],
    offset: [0, -4]
  },
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -4]
  },
  topRight: {
    points: ['br', 'tr'],
    offset: [0, -4]
  },
  bottom: {
    points: ['tc', 'bc'],
    offset: [0, 4]
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 4]
  },
  bottomRight: {
    points: ['tr', 'br'],
    offset: [0, 4]
  }
}

Object.keys(placements).forEach((key) => {
  placements[key].overflow = autoAdjustOverflow
  placements[key].targetOffset = targetOffset
})

export default placements
