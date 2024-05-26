import React from 'react';
import { Bar } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend,
// } from 'chart.js';
// import { Bar, Line } from 'react-chartjs-2';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend, 
//   Bar
// );

// export const options = {
//   responsive: true,
//   plugins: {
//     // legend: {
//     //   position: 'top' ,
//     // },
//     title: {
//       display: true,
//       text: 'Chart.js Line Chart',
//     },
//   },
// };

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July' , 'Auguest' ,'september' ,'October' , "November" , 'December'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       fill: true,
//       label: 'Dataset 2',
//       data: [100, 11 , 40 , 200 ,130,140, 260,100, 11  , 200 ,130,140,  ],
      
//     },
//   ],
// };

export default function Graph({data}) {
  return      <Bar
  data={data}
  options={{
   
    plugins: {
      title: {
        display: true,
        text: "Pourcentage des critéres" , 
       
      },
      legend: {
        display: false
      }
    }
  }}
/>;
}