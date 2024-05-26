import { Box, Typography, useTheme } from '@mui/material'
import React, { createContext, useEffect, useState } from 'react'
import TableStats from './TableStats'
import { SimpleRow } from '../StyledComponents'
import Rate from '../Components/Rate'
import Graph from './Graph'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../Firebase'
import { CritereAverageRateG } from '../App'
Chart.register(CategoryScale);
export const  TableContext = createContext()

function Accueil() {

    const theme = useTheme()
 
    const [services , setServices] = useState( [])


      useEffect(()=>{
        getDocs(collection(db , 'services'))
        .then((res)=>{
            const arr = []
            res.docs.forEach((doc)=>{
              arr.push(doc.data())
            })
            setServices(arr)
        })
    },[])

    const GlobalValues = [
      CritereAverageRateG(services , 'cr1').toFixed(1),
      CritereAverageRateG(services , 'cr2').toFixed(1),
      CritereAverageRateG(services , 'cr3').toFixed(1),
      CritereAverageRateG(services , 'cr4').toFixed(1),
      CritereAverageRateG(services , 'cr5').toFixed(1),
      CritereAverageRateG(services , 'cr6').toFixed(1),
      CritereAverageRateG(services , 'cr7').toFixed(1),
      
  ]


  // console.log(CritereAverageRateG('cr1'))
  
  const data  =  {
    labels: ['Réalisabilité en ligne' , 'Simplicité du langage' , 'Aide joignable et efficace' , 'Navigation et utilisabilité web' , 'Consistance informationnelle' , 'Sécurité et vie privée' , 'Disponibilité ' ],
    datasets: [
      {
        
        label: "Pourcentege: %",
        data: GlobalValues.map((val)=>{ return val*20 } ),
        backgroundColor: [
          "rgba(97, 131, 206, 1)",
          "rgba(64, 183, 183, 1)",
          "rgba(107, 200, 155, 1)",
          'rgba(161, 106, 187, 1)' , 
          "rgba(182, 85, 137, 1)" , 
          'rgba(233, 164, 84, 1)' , 
          "rgba(127, 187, 106, 1)"
          
        ],
        
        width : '10px'
      },
    ],
    
  }

  const Grate =()=>{
    var v = 0
    GlobalValues.map((val)=>{
      v = v + parseFloat(val)
  })
  return v/7
  }
  // console.log(Grate())
   

  return (
    
  <Box  className='col-11 mx-auto'>
     <Box  marginY={4} color={theme.palette.secondary.main} >
        <Typography variant='h4'><b>Statistiques</b></Typography>
        <Typography variant='subtitle2'>A l’aide de ces statistiques, vous pouvez savoir en détail la qualité des services disponibles</Typography>
    </Box>
    <TableStats  list={services} data={GlobalValues}  />
    <SimpleRow  bgcolor={'whie'} marginY={2}>
                                  <Rate adminMode={true}  r={Grate()} color={'rgba(116, 104, 184, 1)'} label={'Score global'} />
        <Box style={{ width: 700 }} className='col6 bg-ifo'> 
            <Graph   data={data} />
        </Box>
    </SimpleRow>
    
  </Box>
  )
}

export default Accueil