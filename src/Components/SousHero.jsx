import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

function SousHero() {
  return (
    <Box bgcolor={''} className='col-11' marginTop={-15}>
            <Stack direction={'row'} justifyContent={'end'} marginBottom={2}>
                <img src={require('../images/cones.png')} alt="" srcset="" width={'200px'} />
            </Stack>
            
    </Box>
  )
}

export default SousHero