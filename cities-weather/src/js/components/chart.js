import _ from 'lodash';
import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

const Chart = ({data, color, units}) => (
  <div>
    <Sparklines height={60} width={90} data={data}>
      <SparklinesLine color={color}/>
      <SparklinesReferenceLine type="avg"/>
    </Sparklines>
    <div>{_.round(_.sum(data) / data.length)} {units}</div>
  </div>
);

export default Chart;

