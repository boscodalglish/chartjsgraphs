import React, { useRef, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { data } from './dataset'
import {parse} from 'date-fns';

import styles from './../components/scss/LineGraphAdv.module.scss'

const LineChart = () => {
    // const dates = [];
    // const date = parse(data.date, 'dd-MMM-yy', new Date());
    // dates.push(date);

    for(let i=0;i <= data.datasets.length; i++) {
      console.log(data?.datasets[i]?.data?.length);
      let datatype = typeof data?.datasets[i]?.data;
      console.log(datatype);
    }

    // const data = {
    //     labels: dates
    //   };

return(
    <div >
      <Line data={data} />
    </div>
);
};

export default LineChart