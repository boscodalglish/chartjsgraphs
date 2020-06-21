import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js";
// import { data } from './dataset'

import styles from './../components/scss/LineGraphAdv.module.scss'

const BarChart = (props) => {
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
                labels: props.labels,
                datasets: [
                    {
                        label: "Population (millions)",
                        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850", "#3e95cd", "#000"],
                        data: props.data,
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

export default BarChart