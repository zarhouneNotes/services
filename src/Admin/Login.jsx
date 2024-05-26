import { Box, Button, Checkbox, FormControlLabel, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { ColSpaceBet, RowSpaceBet, SimpleRow } from '../StyledComponents'
import { AuthContext, login, useAuth } from '../Firebase'
import { Navigate, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContextProvider } from '../App'
import { ReactComponent as Logo }from '../images/logos.svg'
function Login({}) {
    const admin = useAuth()
    const navigate = useNavigate()
    const [user , setUser] = useState({
        email :'' , 
        pwd : '' ,
    })

    const ChangeHandler = (e)=>{
            const key = e.target.name
            setUser({...user , [key] : e.target.value})
    }

    const LoginHandel = ()=>{
        login(user.email , user.pwd)
        .then((res)=>{
          
            navigate('/admin/stats')
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    // useEffect(()=>{
        //   if (admin) {
        //     navigate('/admin/stats')
        //   }  
           
    // },[admin])
  return (
    <Box height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}  >

  
            <ColSpaceBet width={'400px'} gap={2} >
            <Logo   style={{scale :'0.9' , alignSelf : 'center'}} width={'200px'}/>
            <Typography textAlign={'center'}  variant='h4'>Login </Typography>
      
            <Form.Text>Email</Form.Text>
            <Form.Control  name='email' value={user?.email}   onChange={ChangeHandler} type='email'  placeholder='email..'   />
            <Form.Text>Password</Form.Text>
            <Form.Control  name='pwd'  value={user?.pwd} onChange={ChangeHandler} type='password'  placeholder='password'   />
            <Button onClick={LoginHandel} variant='contained' size='small'    >Login</Button>
            {/* <Form.Check label='remember me ?'  /> */}
            <RowSpaceBet>
            <FormControlLabel  control={<Checkbox size='small' />} label='remember me ?'  />
            <Form.Text  style={{fontSize :'12px'}}  >Mot de passe oublié?</Form.Text>
            </RowSpaceBet>
            </ColSpaceBet>
 
    
    </Box>
  )
}

export default Login