import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function ButtonRate(props) {
    const navigate = useNavigate()
    return (
        <Button {...props} onClick={()=>{navigate('/evaluer')}} {...props}>
              Evaluer maintenant
        </Button>
    )
}

export default ButtonRate