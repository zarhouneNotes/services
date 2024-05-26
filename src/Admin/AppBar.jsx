import React from 'react'
import { ColSpaceBet, RowSpaceBet, SimpleRow } from '../StyledComponents'
import { Typography } from '@mui/material'
import {MdOutlineLanguage , MdNotifications} from 'react-icons/md'
import { grey } from '@mui/material/colors'

function AppBar() {
  return (
  

       <SimpleRow gap={1}  height={'9vh'} paddingX={4} className='shaww  border-bottom' justifyContent={'end'} color={grey[600]}>
          <MdNotifications   fontSize={'25px'} />
          <MdOutlineLanguage  fontSize={'25px'}/>
       </SimpleRow>
    
  )
}

export default AppBar