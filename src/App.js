import React, { useState, useEffect } from "react";
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContext from './contexts/AuthContext';

import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import LineChartAdv from './components/LineChartAdv';
import PieChart from './components/PieChart';
import DonoutChart from './components/DonoutChart';
import RadarChart from './components/RadarChart';
import Polarareachart from './components/Polarareachart';
import HotiChart from './components/HotiChart';
import GroupBarChart from './components/Groupedbarchart';



import './App.scss';

import styles from './components/scss/LineGraphAdv.module.scss'


import * as d3 from "d3";
import { managerData, yearLabels, nationalAverageData, districtManagerData } from "./mockdata";

function App(props) {
  
  // // const generateData = (value, length = 5) =>
  // // d3.range(length).map((item, index) => ({
  // //   date: index,
  // //   value: value === null || value === undefined ? Math.random() * 100 : value
  // // }));

  // // const [data, setData] = useState(generateData());
  // // const changeData = () => {
  // //   setData(generateData());
  // // };

  // const [data2, setData2] = useState([25, 30, 45, 60, 20]);
  // const changeData2 = () => {
  //   setData2(data2);
  // };

  // const [data3, setData3] = useState([25, 30, 45, 60, 20, 65, 75]);
  // const changeData3 = () => {
  //   setData3(data3);
  // };


  const [data, setData] = useState(managerData);
  const [label, setLabel] = useState(yearLabels);
  const [AverageData, setAverageData] = useState(nationalAverageData);
  const [ManagerData, setManagerData] = useState(districtManagerData);
  
  return (
    <React.Fragment>
      <ThemeContextProvider>
        <AuthContext>
          {/* <div>
            <button onClick={changeData3}>Transform3</button>
          </div>
          <div>
            <button onClick={changeData2}>Transform2</button>
          </div>
          <div>
            <button onClick={changeData}>Transform</button>
          </div> */}
          {/* <Navbar /> */}
          <div className={styles.graphContainer}>
            <a href="https://tobiasahlin.com/blog/chartjs-charts-to-get-you-started/">Link</a>
            <LineChart
            className={styles.subcontainer}
            width={600}
            height={600}
            />
            <LineChartAdv
            className={styles.subcontainer}
            data={data}
            ManagerData={ManagerData}
            AverageData={AverageData}
            labels={label} />
            <BarChart 
            labels={label}
            data={data}
            />
            <PieChart
            labels={label}
            data={data}
            ManagerData={ManagerData}
             />
            <DonoutChart
            labels={label}
            data={data}
             />
             <RadarChart 
              labels={label}
              data={data}
             />
             <Polarareachart
             labels={label}
              data={data}
              />
            <HotiChart
            labels={label}
            data={data}
             />
            <GroupBarChart 
            labels={label}
            data={data}
            
            />
            {/* <BookList />
            <ThemeToggle /> */}
          </div>
        </AuthContext>
      </ThemeContextProvider>  
    </React.Fragment>
  );
}

export default App;
