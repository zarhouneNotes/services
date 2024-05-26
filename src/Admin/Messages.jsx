import { Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Message from './Message'
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore'
import { db } from '../Firebase'

function Messages() {
  const [messages , setMessages] = useState( [])
  useEffect(()=>{
      getDocs(collection(db , 'messages'))
      .then((res)=>{
          const arr = []
          res.docs.forEach((doc)=>{
            arr.push(doc.data())
          })
          setMessages(arr)
          // console.log(arr)
      })
  },[])
  return (
    <Stack direction={'column'} className='col-10 mx-auto' marginTop={5} gap={1}>
      {messages.sort(function(a,b){
      return new Date(b.time.seconds * 1000 + b.time.nanoseconds/1000000)  - new Date(a.time.seconds * 1000 + a.time.nanoseconds/1000000) ;
    })
    .map((msg)=>{
          
          return <Message key={msg.id} msg={msg} />
        })}
    </Stack>
  )
}

export default Messages