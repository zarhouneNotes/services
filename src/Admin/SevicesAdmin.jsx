import React from 'react'
import Home from '../pages/Home'
import { Box, Typography, useTheme } from '@mui/material'

function SevicesAdmin() {
    const theme = useTheme()
  return (
    <>
    <Box  marginTop={5} color={theme.palette.secondary.main} className='col-11 mx-auto'>
        <Typography variant='h4'><b>Liste des services</b></Typography>
        <Typography variant='subtitle2'>Vous pouvez ajouter, éditer ou supprimer des services</Typography>
    </Box>
    <Box marginTop={-3}>
    <Home  adminMode={true} />
    </Box>
    </>
  )
}

export default SevicesAdmin