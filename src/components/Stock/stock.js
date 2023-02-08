import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import getFinalData from '../services/stock';

function Stock() {
  const [query, setQuery] = useState({ function:"TIME_SERIES_DAILY_ADJUSTED", symbol:"TSLA",outputsize:"compact" });
  const [stockChartXValues,setX] = useState([])
  const [stockChartYValues,setY] = useState([])

  useEffect(()=>{
    const fetchStock = async () => {
      let stockChartXValuesFunction = [];
      let stockChartYValuesFunction = [];

      await getFinalData({ ...query}).then((data) => {
        for (var key in data) {
          stockChartXValuesFunction.push(key);
          stockChartYValuesFunction.push(data[key]['1. open']);
        }
      });
      setX(stockChartXValuesFunction);
      setY(stockChartYValuesFunction);
    };

    fetchStock();
  },[])
  
  return (
    <div className='max-w-screen-md mt-4 py-5 px-10 py-2 bg-white h-fit rounded-xl mt-10 mx-4'>
        <div>
        
        <Plot
          data={[
            {
              x: stockChartXValues,
              y: stockChartYValues,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: '##881337'},
              
            }
          ]}
          layout={{width: 560, height: 320,title: 'Tesla Stock'}}
        />
      </div>
    </div>
  )
}

export default Stock;