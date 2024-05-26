import React from 'react'
import { RowSpaceBet } from '../StyledComponents'
import { Rating, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'

function CritereRate(props) {
  return (
          <RowSpaceBet width={'100%'} borderBottom={'1px solid #E6E6E6'} paddingBottom={2} >
                <Typography  variant='subtitle1' color={grey[400]}  >{props?.name}</Typography>
                <Stack direction={'row'} alignItems={"center"} gap={3}>
                  <Rating {...props} name={props.key} defaultValue={0} size="large" />
                  <Typography variant='h6' color={grey[400]} > <span  style={{color :"rgba(255, 231, 15, 1)"}}   >0</span>  /5</Typography>
                </Stack>

              </RowSpaceBet>
  )
}

export default CritereRate