import React, { useEffect } from 'react'
import Accueil from './Accueil'
import { Box, Stack } from '@mui/material'
import { Route, Routes, useNavigate } from 'react-router-dom'
import AppBar from './AppBar'
import Sidebar from './Sidebar'
import Services from '../Components/Services'
import Home from '../pages/Home'
import SevicesAdmin from './SevicesAdmin'
import Messages from './Messages'
import AddService from './AddService'
import Methodologie from './Methodologie'
import Apropos from './Apropos'
import { useAuth } from '../Firebase'

function Admin() {
    const admin = useAuth()
    
  //   const navigate = useNavigate()
  // useEffect(()=>{
  //   console.log(admin)
  //     // if (!admin) {
  //     //   navigate('/admin')
  //     // }
  // },[admin])
  return (
    <Box   >
    <Stack direction={'row'}>
            <Box width={'350px'}>
                    <Sidebar />
            </Box>
     <Stack direction={'column'} width={'100%'} >
            {/* <AppBar /> */}
            <Box overflow={"scroll"} maxHeight={'100vh'}>
            <Routes>
                <Route path='/stats' element={<Accueil />}   />
                <Route path='/services' element={<SevicesAdmin  />}   />
                <Route path='/messages' element={<Messages />}   />
                <Route path='/add-service' element={<AddService />}   />
                <Route path='/about' element={<Apropos />}   />
                <Route path='/methodologie' element={<Methodologie />}   />
            </Routes>
            </Box>
     </Stack>
    </Stack>
    </Box>
  )
}

export default Admin