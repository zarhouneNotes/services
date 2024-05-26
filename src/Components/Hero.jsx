import { Box, Button, Typography } from '@mui/material'
import { grey, yellow } from '@mui/material/colors'
import React from 'react'
import { ColSpaceBet, RowSpaceBet, SimpleRow } from '../StyledComponents'
import ButtonContact from './ButtonContact'
import ButtonRate from './ButtonRate'
// import {ReactComponent as Said} from '../images/said.svg'


function Hero({page}) {
  return (
    <Box  height={'680px'} display={'flex'}   alignItems={'center'}  >
             <RowSpaceBet className='col-10 mx-auto' bgcolor={''} >
                    <ColSpaceBet gap={'30px'} >
                        <Typography  fontSize={'58px'} color={'rgba(69, 90, 100, 1)'}>
                          {page?.text0}
                        </Typography>
                        <Typography variant='body1' color={grey[700]} className='col-10' textAlign={'justify'} >
                          {page?.text1}
                        </Typography>
                        <SimpleRow gap={2}>
                            <ButtonContact  variant='contained' >Contacter nous</ButtonContact>
                            <ButtonRate   variant='outlined' >  Evaluer maintenant</ButtonRate>
                            
                        </SimpleRow>
                    </ColSpaceBet>
                    <Box>
                    <img width={'540px'} src={require('../images/billy.png')} alt="" srcset="" />
                    {/* <Said  /> */}
                </Box>
             </RowSpaceBet>
                
    </Box>
  )
}

export default Hero