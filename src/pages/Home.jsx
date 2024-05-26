import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar'
import Filter from '../Components/Filter'
import Services from '../Components/Services'
import { Box, Button, Stack } from '@mui/material'
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore'
import { db } from '../Firebase'
import { CaluclCriterRate } from '../App'
import { BeatLoader } from 'react-spinners'

function Home({adminMode}) {
  const [services , setServices] = useState( [])
  const [Orservices , setOrServices] = useState( [])
  const [load , setLoad] = useState(true)
  ////////////

  const [ratio , setRatio]  = useState()
  const [isAsc , setAsc] = useState(true)
  ////////////////
  useEffect(()=>{
    setLoad(true)
      getDocs(collection(db , 'services'))
      .then((res)=>{
          const arr = []
          res.docs.forEach((doc)=>{
            arr.push(doc.data())
          })
          setServices(arr)
          setOrServices(arr)
          // console.log(arr)
      }).finally(()=>{
        setLoad(false)
      })
  },[])


    function filterHandel (){
      const copy  =[...services]
      if (!ratio || ratio?.length === 0) {
        return ;
      }else{
        copy?.sort((a,b)=>{
          if (!isAsc) {
             return  -CaluclCriterRate(a?.rates , ratio) +  CaluclCriterRate(b?.rates , ratio)
          }
    
          if (isAsc) {
            return  CaluclCriterRate(a?.rates , ratio) - CaluclCriterRate(b?.rates , ratio)
         }  })
      }
    
     setServices( copy) 
  
  }

   const FilterByCat = (tag)=>{
    if (!tag || tag?.length === 0) {
      return setServices(Orservices)
    }
      const arr = Orservices?.filter((srv)=>{return srv?.category.toLowerCase() === tag?.toLowerCase()}  )
      console.log(arr)
      setServices(arr)
  }

  // const doThis = () => {
      
  //     // const randomRate = (Math.random()+4).toFixed(1)
  //     services?.map((srv)=>{
  //       const arr = []
  //             for (let i = 0; i < Math.round(Math.random()*90+90); i++) {
  //             arr.push({
            
  //               cr1: (Math.random()+4).toFixed(1) ,
  //               cr2: (Math.random()+4).toFixed(1) , 
  //               cr3: (Math.random()+4).toFixed(1),
  //               cr4: (Math.random()+4).toFixed(1),
  //               cr5: (Math.random()+4).toFixed(1),
  //               cr6: (Math.random()+4).toFixed(1),
  //               cr7: (Math.random()+4).toFixed(1) ,
  //               })
                
  //             }
  //             updateDoc(doc(db  , 'services' , srv?.id),{
  //               rates : [...srv?.rates , ...arr ]
  //             }).then(()=>{
  //                 console.log('faiit')
  //             })
  //     })
      
      
  //   };
  return (
    // <>
    <Box className={` ${adminMode ? 'col-11' : 'col-8'}  mx-auto`} >
    <Filter FilterByCat={FilterByCat} ratio={ratio} filterHandel={filterHandel} setRatio={setRatio} isAsc={isAsc} setAsc={setAsc} setServices={setServices} orlist={Orservices} />
    { !load ? <Services  arr={services} />
     : <Stack direction={'row'} justifyContent={'center'} alignItems={'center' }  bgcolor={'rgba(0, 0, 0, 0.32)'} position={'absolute'} width={'100%'} height={'100%'} left={0} top={0}>
         <BeatLoader color="rgba(116, 104, 184, 1)" />
    </Stack>}
    </Box>
  )
}

export default Home