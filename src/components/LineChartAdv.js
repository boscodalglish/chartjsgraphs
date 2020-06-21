import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js";
// import { data } from './dataset'

import styles from './../components/scss/LineGraphAdv.module.scss'

const LineChartAdv = (props) => {
    const managerDataSum = [];

    for(let i=0; i < props.ManagerData.length; i++ ){
        managerDataSum.push(props.ManagerData[i].sum)
        
    }
    console.log(managerDataSum);
    const chartRef = useRef(null);
    useEffect(() => {
        const myChartRef = chartRef.current.getContext("2d");
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: props.labels,
                datasets: [
                    {
                        label: "Sales",
                        data: props.data,
                        fill: false,
                        borderColor: "#5A2BE8",
                        lineTension: 0,
                        backgroundColor: "rgba(75,192,192,0.2)",
                        borderWidth: 2,
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'round',
                        borderDash: [],
                        borderDashOffset: 1.0,
                        borderJoinStyle: 'round',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 9,
                        pointHoverRadius: 0.5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                    },
                    {
                        label: "National Average", 
                        data: managerDataSum,
                        fill: false,
                        borderColor: "#5A2BE8",
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 6,
                    }
                ]
                
            },
            options: {
                tooltips: {
                    backgroundColor: "rgba(0,0,0,0.8)",
                    bodyAlign: "left",
                    bodyFontColor: "#fff",
                    bodySpacing: 2,
                    borderColor: "rgba(0,0,0,0)",
                    borderWidth: 0,
                    caretPadding: 2,
                    caretSize: 5,
                    cornerRadius: 6,
                    custom: null,
                    displayColors: true,
                    enabled: true,
                    footerAlign: "left",
                    footerFontColor: "#fff",
                    footerFontStyle: "bold",
                    footerMarginTop: 6,
                    footerSpacing: 2,
                    intersect: true,
                    mode: "nearest",
                    multiKeyBackground: "#fff",
                    position: "average",
                    titleAlign: "left",
                    titleFontColor: "#fff",
                    titleFontStyle: "bold",
                    titleMarginBottom: 6,
                    titleSpacing: 2,
                    xPadding: 6,
                    yPadding: 6,
                    callbacks: {
                        label: (tooltipItem, data) => `$ ${tooltipItem.value}`,
                    },
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

export default LineChartAdv