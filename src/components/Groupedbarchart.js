import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js";
// import { data } from './dataset'

import styles from './../components/scss/LineGraphAdv.module.scss'

const GroupBarChart = (props) => {
    const managerDataSum = [];

//     for(let i=0; i < props.ManagerData.length; i++ ){
//         managerDataSum.push(props.ManagerData[i].sum)
        
//     }
    console.log(managerDataSum);
    const chartRef = useRef(null);
    useEffect(() => {
        const myChartRef = chartRef.current.getContext("2d");
        new Chart(myChartRef, {
            type: "bar",
            data: {
                //Bring in data
                labels: ["1900", "1950", "1999", "2050"],
                datasets: [
                     {
                    label: "Africa",
                    backgroundColor: "#3e95cd",
                    data: [133,221,783,2478]
                    }, {
                    label: "Europe",
                    backgroundColor: "#8e5ea2",
                    data: [408,547,675,734]
                    },
                ]
                
            },
            options: {
                  legend: { display: false },
                  title: {
                    display: true,
                    text: 'Predicted world population (millions) in 2050'
                }
            }
        });
    }, []);
    
        return (
            <div className={styles.subcontainer}>
                <canvas
                    id="myChart"
                    ref={chartRef}
                />
            </div>
        )
};

export default GroupBarChart