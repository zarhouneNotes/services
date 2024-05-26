import React, { useEffect, useState } from 'react'
import Service from './Service'
import { Box } from '@mui/material'
import { grey } from '@mui/material/colors'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../Firebase'

function Services({arr}) {

  return (
    <>
    <Box  marginTop={3} >
         { arr?.map((srv)=><Service key={srv.id}   srv={srv} />)}
        
       
    </ Box>
    </>
  )
}

export default Services