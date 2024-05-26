import React from 'react'
import { ColSpaceBet, Line, Photo, RowSpaceBet, SimpleRow } from '../StyledComponents'
import { Box, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'

function Goal({goal}) {
  return (
   <Stack direction={ goal.reversed ?  'row-reverse' :'row'} alignItems={'center'}    gap={'98px'} bgcolor={''} justifyContent={'center'}>
    <Box className=''>
              <Photo src={require(`../images/${goal.photo}.png`)} alt="" srcset="" className='p-4'  width={'474px'}   />
    </Box>
 
      <ColSpaceBet  className='col-5'  gap={4}>
            <Line />
            <Typography  variant='h4'><b>{goal.title}</b></Typography>
            <Typography color={grey[700]} variant='body1' textAlign={'justify'}>{goal.desc}</Typography>
            
      </ColSpaceBet>
   </Stack>
  )
}

export default Goal