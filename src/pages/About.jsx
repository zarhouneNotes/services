import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero'
import SousHero from '../Components/SousHero'
import Goal from '../Components/Goal'
import { Stack, Typography } from '@mui/material'
import Footer from '../Components/Footer'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../Firebase'

function About() {
 
  const [page , setPage] = useState({})
  const goals = [
    {
    title : page?.text2  , 
    desc :  page?.text3 , 
    reversed : false ,
    photo : 'goal1'
  },
  {
    title : page?.text4  , 
    desc :  page?.text5 , 
    reversed : true ,
    photo : 'goal2'
  },
  {
    title :  page?.text6, 
    desc :  page?.text7, 
    reversed : false ,
    photo : 'goal3'
  },
]

useEffect(()=>{
  getDoc(doc(db , 'pages' , 'page2'))
  .then((res)=>{
    setPage(res.data())
    // console.log(page)
  })
},[])
  return (
   <>
   <Hero  page={page}   />
   <SousHero />
   <Stack  gap={'74px'}  direction={'column'} className='col-10 mx-auto'color={'rgba(64, 71, 94, 1)'}  >
    <Typography fontSize={'48px'}  textAlign={'center'} variant='h3'  >
                Les objectifs d’EVALUACTION
    </Typography>
    {goals.map((goal)=>{
      return <Goal goal={goal} />
    })}
   </Stack>

   <Footer />
   </>
  )
}

export default About