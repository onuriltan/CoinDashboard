
const bulletHover: any = {
  properties: {
    scale: 0
  }
}
const bullet: any = {
  circle: {
    strokeWidth: '',
    radius: '',
    fill: ''
  },
  states: {
    create: () => bulletHover
  }
}
const series: any = {
  dataFields: {
    valueY: '',
    dateX: ''
  },
  tooltipText: '',
  strokeWidth: '',
  minBulletDistance: '',
  tooltip: {
    background: {
      cornerRadius: 0,
      strokeOpacity: 0
    },
    pointerOrientation: 0,
    label: {
      minWidth: 0,
      minHeight: 0,
      textAlign: '',
      textValign: ''
    }
  },
  bullets: {
    push: () => bullet
  }
}
const dateAxis = {
  start: 0,
  keepSelection: ''
}
export const mockChartObject: any = {
  data: [],
  dateFormatter: {
    inputDateFormat: ''
  },
  xAxes: {
    push: () => dateAxis
  },
  yAxes: [],
  series: {
    push: () => series
  },
  cursor: {
    behavior: '',
    xAxis: '',
    snapToSeries: ''
  },
  scrollbarY: {
    parent: '',
    toBack: () => jest.fn()
  },
  bottomAxesContainer: {}
}
