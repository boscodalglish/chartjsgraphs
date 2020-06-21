import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js";
// import { data } from './dataset'

import styles from './../components/scss/LineGraphAdv.module.scss'

const PolarareaChart = (props) => {
    const managerDataSum = [];
    const testing = `<h1>2</h1>`
    const chartRef = useRef(null);
    useEffect(() => {
        const myChartRef = chartRef.current.getContext("2d");
        new Chart(myChartRef, {
            type: "polarArea",
            labelAlign: 'center',
            data: {
                //Bring in data
                labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
                datasets: [
                    {
                        label: "Population (millions)",
                        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                        data: [2222,5267,734,784,433],
                    },
                ],
                
            },
            options: {
                  legend: { display: true },
                  title: {
                    display: true,
                    text: 'Predicted world population (millions) in 2050',
                },
                tooltips: {
                    callbacks: {
                        label: (tooltipItem, data) => {
                            var allData = data.datasets[tooltipItem.datasetIndex].data;
                            var tooltipLabel = data.labels[tooltipItem.index];
                            var tooltipData = allData[tooltipItem.index];
                            var total = 0;
                            for (var i in allData) {
                                total += allData[i];
                            }
                            var tooltipPercentage = `${Math.round((tooltipData / total) * 100)}`
                            return tooltipLabel + ': ' + tooltipData + ' (' + tooltipPercentage + '%)';
                        }
                    }
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

export default PolarareaChart