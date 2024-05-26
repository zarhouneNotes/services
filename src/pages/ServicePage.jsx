import { Box, Rating, Stack, Typography, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Cover, RowSpaceBet, SimpleRow } from '../StyledComponents'
import { grey } from '@mui/material/colors'
import {AiFillStar} from 'react-icons/ai'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../Firebase'
import { CalculGlobalRate, CaluclCriterRate, calculeGlobalCriterRate } from '../App'
 export const standards = [{
        name : 'Service réalisable',
        value  : 4.2
    },
    {
        name : 'Langage simple',
        value  : 4.30
    },
    {
        name : 'Aide et support',
        value  : 4.1
    },
    {
        name : 'Navigation',
        value  : 4.80
    },
    {
        name : 'Informations',
        value  : 4.40
    }, 
    {
        name : 'Sécurité et vie privée',
        value  : 4.90
    },
    {
        name : 'Disponibilité',
        value  : 4.50
    }
    ]
function ServicePage() {
    const params = useParams()
    const theme = useTheme()
    const [srv , setSrv] = useState()
    


    // const calculPartialRate = (arr)=>{

    // }
    useEffect(()=>{
            getDoc(doc(db , 'services' , params?.id))
            .then((res)=>{
                    setSrv(res.data())
            })
        },[])


    // useEffect(()=>{   
    //    console.log(CaluclCriterRate(srv?.rates , 'cr2'))
    // },[])


   


   
 
  return (
    <Stack gap={3} className='col-8 mx-auto  rounded' padding={3} direction={'column'} >
        <Cover s   src={srv?.photo} alt="" srcset="" />
        <RowSpaceBet>
            <Typography color={theme.palette.secondary.main} variant='h5' className='col-8'>{srv?.title}</Typography>
            <SimpleRow alignItems={'center'} gap={2} >   
                       <Rating   size='medium' name="read-only" value={CalculGlobalRate(srv?.rates)}  precision={0.1} readOnly />  
                        <Typography variant='h6' color={grey[500]}    > <span  style={{color :"rgba(255, 231, 15, 1)"}} className='fw-bold'  >{CalculGlobalRate(srv?.rates)}</span>  /5 <small>({srv?.rates?.length} avis) </small> </Typography>
             </SimpleRow>
        </RowSpaceBet>

        <Typography textAlign={'justify'} className='col- mx-ato my-4' variant='subtitle1' color={grey[700]}>
        {srv?.desc}
        </Typography>
        <Stack direction={'row'}  justifyContent={'space-around'} gap={2}    >
               <Stack direction={'column'}  border={'1px solid'}  borderColor={'#E6E6E6'}  gap={2} padding={3}  width={'100%'}   >
                   <Typography   color={grey[900]} variant='h6'  >Détails de l'évaluation </Typography>

                   {standards.map((st , i)=>{
                            return ( <RowSpaceBet  key={i}  minWidth={'50px'} color={grey[700]} >
                                                    <Typography >{st.name}</Typography>
                                                    <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} gap={1}  >
                                                        <Rating   size='small' name="read-only" value={CaluclCriterRate(srv?.rates , `cr${i+1}`)}  precision={0.1} readOnly />  
                                                        <Typography><span  style={{color :"rgba(255, 231, 15, 1)"}} className='fw-bold'  >{CaluclCriterRate(srv?.rates , `cr${i+1}`).toFixed(1)}</span>  /5 </Typography>
                        
                                                    </Stack>
                                            
                                    </RowSpaceBet>)
                           })}
                   
                </Stack>


                <Stack direction={'column'} padding={3} className='position-relative  border' width={'100%'}  >
                  <Typography   color={theme.palette.secondary.main} variant='h6'  > Score global</Typography>
                  <Box position={'absolute'} top={'50%'}  left={'50%'} sx={{transform : 'translate(-50% , -50%)'}} >
                    <Typography variant='h2' color={theme.palette.secondary.main}  ><b>{calculeGlobalCriterRate(srv?.rates)} </b> <AiFillStar style={{color :"rgba(255, 231, 15, 1)"}}  />    </Typography>
                  </Box>

                </Stack>
        </Stack>
    </Stack>
  )
}

export default ServicePage