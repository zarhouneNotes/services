import { Box, LinearProgress, Stack, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { ColSpaceBet, RowSpaceBet } from '../StyledComponents'
import { AiFillStar } from 'react-icons/ai'
import { green, grey } from '@mui/material/colors'
import { ProgressBar } from 'react-bootstrap'

function Rate({adminMode , r , color , label}) {
    const theme = useTheme()
  return (
    <Stack className={ adminMode ? 'col-6' :    'col-4'} onClick={()=>{console.log((r*20).toFixed(2))}} >
            <ColSpaceBet  gap={1} m={'2px'} p={2} borderRadius={'10px'} border={'0.5px solid #e6e6e6'}>
              <Typography variant='subtitle1'  color={theme.palette.secondary.main} >{label}</Typography>
              <Typography  textAlign='center'fontSize={'52px'} color={theme.palette.secondary.main}  >{adminMode ? r?.toFixed(1) : r} <AiFillStar style={{color :"rgba(255, 231, 15, 1)"}}  /></Typography>
                <RowSpaceBet>
                    <Typography variant='subtitle2'  color={grey[400]} >Pourcentage</Typography>
                    <Typography variant='subtitle2'  color={color} >{(r*20).toFixed(2)}%</Typography>
                  

              </RowSpaceBet>
                {/* <ProgressBar   className='BAR' style={{height :'13px' ,  color : 'yellow'}}  now={(r*20).toFixed(2)} />  */}
                <Box sx={{backgroundColor : grey[200] ,height :'13px' , borderRadius : '100px' }}>
                  <Box sx={{backgroundColor : color ,height :'13px' , borderRadius : '100px' , width :`${((r*20).toFixed(2))}%`  }}>

                  </Box>
                </Box>
            </ColSpaceBet>
    </Stack>
  )
}

export default Rate


///width={'334px'} height={'223px'}