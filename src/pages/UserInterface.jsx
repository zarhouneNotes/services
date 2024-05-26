import React from 'react'
import NavBar from '../Components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import ServicePage from './ServicePage'
import Contact from './Contact'
import About from './About'
import { Box } from '@mui/material'
import APropos from './APropos'
import Accueill from './Accueill'


function UserInterface() {
  return (
    <Box height={'100vh'}>

    <NavBar />
    <Routes>
       <Route path='/services'   element={<Home />} />
       <Route path='/evaluer'   element={<Home />} />
       <Route path='/resultat'   element={<Home />} />
       <Route  path='/service/:id' element={<ServicePage  />}  />
       <Route  path='/contact' element={<Contact  />}  />
       <Route  path='/méthodologie' element={<APropos />}  />
       <Route  path='/apropos' element={<About />}  />
       <Route  path='/' element={<Accueill/>}  />
  
    </Routes>
    </Box>
  )
}

export default UserInterface