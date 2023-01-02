import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';

// passing in the properties from <Stacked /> in Ecommerce
const Stacked = ({width, height}) => {
  return (
    // by using this ChartComponent a grid will be visible
    <ChartComponent
      width={width}
      height={height}
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}     
      // removing the border with this line
      chartArea={{ border: { width: 0}}}
      tooltip={{ enable: true }}
      legendSettings={{ background: "white"}}
    > 
      {/* services indicate: what do I want my Chart to have? */}
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      {/* in SeriesCollectionDirective we can .map over the stackedCustomSeries to get the data */}
      <SeriesCollectionDirective>
        {/* stackedCustomSeries is the data coming from the dummy data, get the item and index and we want to return a seriesDirective for each item */}
        {/* {... item } spreads the properties of our item (these are the actual data points) */}
        {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked