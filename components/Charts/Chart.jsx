import React from 'react'
import styles from './Chart.module.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
  return (
    <div className={styles.chart}>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  )
}

export default Chart
