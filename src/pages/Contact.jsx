import { Box, Button, Paper, TextField, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { ColSpaceBet, MyInput, RowSpaceBet, SimpleRow } from '../StyledComponents'
import { grey } from '@mui/material/colors'
import { Textarea } from '@mui/joy'
import { FloatingLabel, Form } from 'react-bootstrap'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../Firebase'
import uuid from 'react-uuid'

function Contact() {
    const theme = useTheme()
    const id = uuid()
    const [msg , setMsg] = useState({
         name : '' , 
         lastname :'' , 
        content : '',
        time : Date.now() , 
        id : '',
        email : '' , 
        sujet : ''
    })

    const handelContact = ()=>{
      setDoc(doc(db , 'messages' , id) ,{
        fn : `${msg.name} ${msg.lastname}` , 
        content : msg.content,
        time : new Date() , 
        id : id,
        email : msg.email, 
        sujet : msg.sujet , 
        read : false
      }).then(()=>{
        alert('sent')
      }).catch(()=>{alert('error')})

// console.log(msg)
     
    }

    const handelChange =(e)=>{
      const key = e.target.name 
      setMsg({...msg , [key] : e.target.value})
  }
  return (
    <Box height={'100vh'} display={'flex'} alignItems={'center'}  >
    <ColSpaceBet marginY={'auto'}  padding={'52px 128px'} gap={2} className='col-8 mx-auto shadoww'   bgcolor={'white'} sx={{transform  : 'translateY(-11vh)'}} >
        <Typography  variant='h6' color={theme.palette.secondary.dark}  ><b>Contactez nous</b></Typography>
   <ColSpaceBet gap={2}  marginY={3}>
   <RowSpaceBet gap={2}>
            <Form.Control
            onChange={handelChange}

            name='name'
             className='tarea'
            placeholder='Nom'
             fullWidth={true}
            />
        <Form.Control
        onChange={handelChange}
        name='lastname'
         className='tarea'
        fullWidth={true}
           placeholder='Prénom'
        />
        </RowSpaceBet>
        <RowSpaceBet gap={2}>
            <Form.Control
            onChange={handelChange}
            name='email'
             className='tarea'
            placeholder='Email'
             fullWidth={true}
            />
        <Form.Control
        onChange={handelChange}
        name='sujet'
           className='tarea'
            fullWidth={true}
            id="outlined-uncontrolled"
            placeholder='Sujet..'
        />
        </RowSpaceBet>
        <Form.Control

        onChange={handelChange}
        name='content'
        className='tarea'
          as="textarea"
          placeholder="Message"
          rows={4}
          style={{height :'3cm'}}
        />
   </ColSpaceBet>
    
        <SimpleRow justifyContent={'end'}>
            <Button onClick={handelContact} variant='contained' size='small' sx={{paddingX :8}}   >Envoyer</Button>
        </SimpleRow>
    </ColSpaceBet>
    </Box>
  )
}

export default Contact