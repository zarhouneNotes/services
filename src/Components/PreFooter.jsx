import React from 'react'
import { ColSpaceBet, RowSpaceBet, SimpleRow } from '../StyledComponents'
import { Box, Button, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import ButtonContact from './ButtonContact'

function PreFooter() {
  return (
    <Box  className='border-top'>
     <RowSpaceBet paddingY={5} paddingX={2} className='mx-auto col-10 border-top' >
         <ColSpaceBet gap={1.5}>
            <Typography variant='h4'> Contactez-nous</Typography>
            <Typography variant='body1' color={grey[600]}> Nous sommes là pour vous aider, répondre à vos questions, et recueillir vos commentaires.</Typography>
         </ColSpaceBet>
         <ButtonContact variant='contained'>
            Contacter
         </ButtonContact>
     </RowSpaceBet>
     </Box>
  )
}

export default PreFooter