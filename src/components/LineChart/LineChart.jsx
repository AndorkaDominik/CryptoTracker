import React, { useEffect, useState } from 'react'
import Chart from "react-google-charts";
import "./LineChart.css"

const LineChart = ({historicalData}) => {
    const [data, setData] = useState([["Date", "Prices $"]]);

    useEffect(() => {
        let dataCopy = [["Date", "Prices($)"]];
        if(historicalData.prices){
            historicalData.prices.map((item) =>{
                dataCopy.push([`
                    ${new Date(item[0]).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                `, item[1]])
            })
            setData(dataCopy)
        }
    }, [historicalData])

  return (
    <Chart 
        className='chart'
        chartType='LineChart'
        data={data}
        height="100%"
        width="100%"
        legendToggle
    />
  )
}

export default LineChart