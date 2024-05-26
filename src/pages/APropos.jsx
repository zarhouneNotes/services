import React, { useEffect, useState } from 'react'
import APHero from '../Components/APHero'
import SousHero from '../Components/SousHero'
import { Stack, Typography } from '@mui/material'
import Goal from '../Components/Goal'
import { grey } from '@mui/material/colors'
import CritereDetails from '../Components/CritereDetails'
import Footer from '../Components/Footer'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../Firebase'

function APropos() {
    
    const [page , setPage] = useState({})
    useEffect(()=>{
      getDoc(doc(db , 'pages' , 'page1'))
      .then((res)=>{
        setPage(res.data())
        // console.log(res.data())
      })
    },[])

    function SeprateText (str){
        var i = str?.indexOf(":")
        return {t :str?.slice(0 , i) , d : str?.slice( i , str?.length) }
    }


 
  const criters = [
        {
        title : SeprateText(page?.text2).t   , 
        desc :  SeprateText(page?.text2).d   , 
        reversed : false ,
        photo : 'cr1'
      },
      {
        title : SeprateText(page?.text3).t , 
        desc : SeprateText(page?.text3).d , 
        reversed : true ,
        photo : 'cr2'
      },
      {
        title : SeprateText(page?.text4).t , 
        desc : SeprateText(page?.text4).d, 
        reversed : false ,
        photo : 'cr3'
      },

      {
        title : SeprateText(page?.text5).t , 
        desc :SeprateText(page?.text5).d, 
        reversed : true ,
        photo : 'cr4'
      },

      {
        title : SeprateText(page?.text6).t , 
        desc : SeprateText(page?.text6).d, 
        reversed : false ,
        photo : 'cr5'
      },
      {
        title :SeprateText(page?.text7).t , 
        desc : SeprateText(page?.text7).d , 
        reversed : true ,
        photo : 'cr6'
      },
      {
        title : SeprateText(page?.text8).t , 
        desc : SeprateText(page?.text8).d , 
        reversed : false ,
        photo : 'cr7'
      },
    ]
  return (
    <>
    <APHero page={page}  />
    <SousHero />

    <Stack  gap={2}  direction={'column'} className='col-10 mx-auto'color={'rgba(64, 71, 94, 1)'}  >
        <Typography fontSize={'48px'}  textAlign={'center'} variant='h3'  >
          Les critères EVALUACTION
        </Typography>
        <Typography fontSize={'16px'} color={grey[600]}  textAlign={'center'} className='col-9 mx-auto'  >
        Le score  d’un service public en ligne est le résultat d’agrégation des indicateurs bien spécifiques à la fois à l’expérience utilisateurs et aux particularités des services publics. Les critères EVALUACTION sont :
        </Typography>
        
   </Stack >

   <Stack gap={2}  direction={'column'} className='col-10 mx-auto'>
   {criters.map((cr)=>  <CritereDetails goal={cr} />   )}
   </Stack>
        <Footer />


    </>
  )
}

export default APropos