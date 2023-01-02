import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

// passing through the props from SparkLine in Ecommerce
const SparkLine = ({currentColor, id, type, height, width, color, data }) => {
  return (
    <SparklineComponent
     id={id}
    height={height}
    width={width}
    lineWidth={1}
    valueType="Numeric"
    fill={color}
    border={{color:currentColor, width:2}}
    dataSource={data}
    xName="x"
    yName="yval"
    type={type}
    tooltipSettings={{
      visible:true,
      format: '${x} : data ${yval}',
      trackLineSettings: {
        visible:true
      }
    }}
    >
      {/* Sparkline Tooltip allowes to hover over the chart */}
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  )
}

export default SparkLine