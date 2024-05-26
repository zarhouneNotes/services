import { TableCell, TableRow } from '@mui/material'
import { green, grey } from '@mui/material/colors'
import React from 'react'
import { NumOfReviews } from '../App'

function RowState({name ,list, val}) {
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 }  , height : '44px' }} >
    <TableCell component="th" scope="row"> {name} </TableCell>
    <TableCell align="left"  sx={{color  : grey[600]}} > {NumOfReviews(list)} avis</TableCell>
    <TableCell align="left"  sx={{color :'rgba(102, 112, 133, 1)'}}><b>{val}/5</b></TableCell>
    <TableCell align="left" sx={{color  : green[400]}}>{val*20}%</TableCell>
    <TableCell align="right"> : </TableCell>
  </TableRow>
  )
}

export default RowState