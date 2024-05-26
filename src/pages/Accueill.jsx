import React from 'react'
import AccHero from '../Components/AccHero'
import { Stack } from '@mui/material'
import HomeSecTwo from '../Components/HomeSecTwo'
import SousHero from '../Components/SousHero'
import HomeSecThree from '../Components/HomeSecThree'
import PreFooter from '../Components/PreFooter'
import Footer from '../Components/Footer'

function Accueill() {
  return (
    <>
    <AccHero />
    <SousHero />
    <Stack>
        <HomeSecTwo />
        <HomeSecThree />
        <PreFooter/>
    </Stack>
    <Footer />
    </>
  )
}

export default Accueill