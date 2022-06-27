import React from 'react'
import styles from './Chartbar.module.css'

const ChartBar = (props) => {
  let barFillHeight = props.value

  if (props.maxValue > 0) {
    barFillHeight = `${Math.round((props.value / props.maxValue) * 100)}%`
  }

  return (
    <div className={styles.chartBar}>
      <div className={styles['chart-bar__inner']}>
        <div
          className={styles['chart-bar__fill']}
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className={styles['chart-bar__label']}>{props.label}</div>
    </div>
  )
}

export default ChartBar
