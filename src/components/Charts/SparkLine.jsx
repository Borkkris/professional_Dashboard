import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

const SparkLine = ({currentColor, id, type, height, width, color, data }) => {
  return (
    <SparklineComponent
    id= {id}
    height={height}
    width={height}
    lineWidth={1}
    valueType="Numeric"
    fill={color}
    border={{color: currentColor, width: 2}}
    >
      {/* Sparkline Tooltip allowes to hover over the chart */}
      <Inject services={[SparklineTooltip]} />

    </SparklineComponent>
  )
}

export default SparkLine