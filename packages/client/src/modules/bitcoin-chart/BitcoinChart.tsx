import React, { useEffect, useState } from 'react'
import * as am4charts from '@amcharts/amcharts4/charts'
import * as am4core from '@amcharts/amcharts4/core'
import { XYChart } from '@amcharts/amcharts4/charts'
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'
import moment from 'moment'
import './BitcoinChart.scss'

export enum Fiat {
  Usd = 'USD',
  Eur = 'EUR'
}

interface BitcoinHistory {
  status: string;
  name: string;
  unit: Fiat;
  period: string;
  description: string;
  values: Values[];
}

interface Values {
  date: Date | string; value: number;
}

interface BitcoinHistoryData {
  history: BitcoinHistory;
}

interface BitcoinHistoryVars {
  timeSpan: string;
}

export const BitcoinChart = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [chart, setChart] = useState<XYChart>()

  const GET_BITCOIN_HISTORY = gql`
    query history($timeSpan: String!) {
      history(timeSpan: $timeSpan) {
        fiat
        period
        values {
          date
          value
        }
      }
    }
  `
  const { loading, error, data: bitcoinHistoryData } = useQuery<BitcoinHistoryData, BitcoinHistoryVars>(GET_BITCOIN_HISTORY, {
    variables: { timeSpan: '5year' }
  })

  useEffect(() => {
    if (bitcoinHistoryData && bitcoinHistoryData.history) {
      bitcoinHistoryData.history.values = bitcoinHistoryData.history.values.map(value => {
        return {
          date: moment(value.date).format('yyyy-MM-DD'),
          value: value.value
        }
      })
      const chart = am4core.create('chartdiv', am4charts.XYChart)
      chart.data = bitcoinHistoryData.history.values

      // Set input format for the dates
      chart.dateFormatter.inputDateFormat = 'yyyy-MM-dd'

      // Create axes
      const dateAxis = chart.xAxes.push(new am4charts.DateAxis())
      chart.yAxes.push(new am4charts.ValueAxis())

      // Create series
      const series = chart.series.push(new am4charts.LineSeries())
      series.dataFields.valueY = 'value'
      series.dataFields.dateX = 'date'
      series.tooltipText = '{value}'
      series.strokeWidth = 2
      series.minBulletDistance = 15

      // Drop-shaped tooltips
      if (series.tooltip) {
        series.tooltip.background.cornerRadius = 20
        series.tooltip.background.strokeOpacity = 0
        series.tooltip.pointerOrientation = 'vertical'
        series.tooltip.label.minWidth = 40
        series.tooltip.label.minHeight = 40
        series.tooltip.label.textAlign = 'middle'
        series.tooltip.label.textValign = 'middle'
      }

      // Make bullets grow on hover
      const bullet = series.bullets.push(new am4charts.CircleBullet())
      bullet.circle.strokeWidth = 2
      bullet.circle.radius = 4
      bullet.circle.fill = am4core.color('#fff')

      const bullethover = bullet.states.create('hover')
      bullethover.properties.scale = 1.8

      // Make a panning cursor
      chart.cursor = new am4charts.XYCursor()
      chart.cursor.behavior = 'panXY'
      chart.cursor.xAxis = dateAxis
      chart.cursor.snapToSeries = series

      // Create vertical scrollbar and place it before the value axis
      chart.scrollbarY = new am4core.Scrollbar()
      chart.scrollbarY.parent = chart.leftAxesContainer
      chart.scrollbarY.toBack()

      // Create a horizontal scrollbar with previe and place it underneath the date axis
      chart.scrollbarX = new am4charts.XYChartScrollbar()
      chart.scrollbarX.parent = chart.bottomAxesContainer

      dateAxis.start = 0.79
      dateAxis.keepSelection = true
      setChart(chart)
    }
  }, [bitcoinHistoryData])

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Uuupsssi </div>
  }
  return (
    <div>
      <div className="header"> Bitcoin History</div>
      <div id="chartdiv" className="chart"/>
    </div>
  )
}
