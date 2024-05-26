import React from 'react'
import { RowSpaceBet } from '../StyledComponents'
import { Box, Button } from '@mui/material'
import Menu from './Menu'
import { ReactComponent as Logo }from '../images/logos.svg'
import { useNavigate } from 'react-router-dom'

function NavBar() {
  const navigate = useNavigate()
  return (
   <Box className="shadoww"  position={'sticky'} top={0} bgcolor={'white'} zIndex={999} >
      <RowSpaceBet  className='mx-auto col-10 ' height={'11vh'} >
      <Logo  style={{scale :'0.9'}} width={'200px'}/>
      <Menu />
      <Button  variant='contained'  onClick={()=>{navigate('/contact')}} >Contactez nous</Button>
    </RowSpaceBet>
   </Box>
  )
}

export default NavBar