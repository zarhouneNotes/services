import React, { useState } from 'react'
import { ColSpaceBet, Dot, RowSpaceBet, SimpleRow } from '../StyledComponents'
import { Box, Typography } from '@mui/material'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { grey } from '@mui/material/colors'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../Firebase'

function Message({msg}) {
    const [showMessage , setShowMessage] = useState(false)
    const [isRead  , setIsRead] = useState(msg.read)
  return (

    <ColSpaceBet className='shadoww' padding={2} gap={2} border={ showMessage &&   '1px solid purple'} >
    <RowSpaceBet onClick={()=>{  
      setIsRead(true)
      if (msg.read === false) {
        updateDoc(doc(db, 'messages' , msg.id) ,{
        read :true
      })
      }
      setShowMessage(!showMessage)}} sx={{cursor :'pointer'}} >
        <ColSpaceBet>
                 <Typography   color={grey[600]} variant='subtitle1'><b>{msg.fn}</b></Typography>
                 <SimpleRow color={grey[400]} gap={2}>
                    <AiOutlineClockCircle />
                   <Typography variant='subtitle2'>{timeAgo( new Date(msg.time.seconds * 1000 + msg.time.nanoseconds/1000000)   )} </Typography>
                 </SimpleRow>
        </ColSpaceBet>
        {!isRead &&   <Dot />}
    </RowSpaceBet>

    {showMessage &&   <ColSpaceBet    className='border ' padding={2} >
        <Typography variant='subtitle1'>{msg.email}      </Typography>
        <Typography variant='body2' color={grey[600]}>{msg.content}</Typography>
    </ColSpaceBet>}
    </ColSpaceBet>
  )
}

export default Message

function timeAgo(input) {
  const date = (input instanceof Date) ? input : new Date(input);
  const formatter = new Intl.RelativeTimeFormat('en');
  const ranges = {
    years: 3600 * 24 * 365,
    months: 3600 * 24 * 30,
    weeks: 3600 * 24 * 7,
    days: 3600 * 24,
    hours: 3600,
    minutes: 60,
    seconds: 1
  };
  const secondsElapsed = (date.getTime() - Date.now()) / 1000;
  for (let key in ranges) {
    if (ranges[key] < Math.abs(secondsElapsed)) {
      const delta = secondsElapsed / ranges[key];
      return formatter.format(Math.round(delta), key);
    }
  }
}