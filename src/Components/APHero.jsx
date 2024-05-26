import { Box, Button, Typography } from '@mui/material'
import { grey, yellow } from '@mui/material/colors'
import React from 'react'
import { ColSpaceBet, RowSpaceBet, SimpleRow } from '../StyledComponents'
import ButtonRate from './ButtonRate'

function APHero({page}) {
  return (
    <Box  height={'680px'} display={'flex'}   alignItems={'center'}  >
             <RowSpaceBet className='col-10 mx-auto ' bgcolor={''} >
                    <ColSpaceBet gap={'30px'} >
                        <Typography  fontSize={'50px'} color={'rgba(69, 90, 100, 1)'}>
                        <b>{page?.text0}</b>
                        </Typography >
                        <Typography   variant='body1' color={grey[700]} className='col-10' textAlign={'justify'} >
                          {page?.text1}
                        </Typography>
                        <SimpleRow gap={2}>
                            <ButtonRate  variant='contained' >Evaluer maintenant</ButtonRate>
                            {/* <Button   variant='outlined' >  Evaluer maintenant</Button> */}
                            
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

export default APHero