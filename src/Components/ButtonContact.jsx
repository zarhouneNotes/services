import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function ButtonContact(props) {
    const navigate = useNavigate()
  return (
      <Button onClick={()=>{navigate('/contact')}} {...props}>
            Contacter
      </Button>
  )
}

export default ButtonContact