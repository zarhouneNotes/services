import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import RowState from './RowState';
import { grey } from '@mui/material/colors';
import {FiArrowDown} from 'react-icons/fi'
import { Box } from '@mui/material';


export default function TableStats({data  , list}) {
  return (
    <TableContainer component={Box} className='shadoww border-bottom'>
      <Table sx={{ minWidth: 650  ,}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow  sx={{height : '50px' , bgcolor :grey[100] }}>
            <TableCell    style={{color :"rgba(102, 112, 133, 1)"}}    >Critères &nbsp; <FiArrowDown /></TableCell>
            <TableCell style={{color :"rgba(102, 112, 133, 1)"}} align="left">Nombre d'avis&nbsp; <FiArrowDown /></TableCell>
            
            <TableCell style={{color :"rgba(102, 112, 133, 1)"}} align="left">La Moyenne&nbsp; <FiArrowDown /></TableCell>
            <TableCell style={{color :"rgba(102, 112, 133, 1)"}} align="left">Pourcentage  &nbsp; <FiArrowDown /></TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            <RowState   list={list}    val={data[0]} name='Disponibilité'  />
            <RowState  list={list}   val={data[1]} name='Service réalisable'  />
            <RowState   list={list}  val={data[2]} name='Langage simple'  />
            <RowState   list={list}  val={data[3]} name='Aide et support'  />
            <RowState   list={list}  val={data[4]} name='Navigation'  />
            <RowState   list={list}  val={data[5]} name='Informations '  />
            <RowState   list={list}  val={data[6]} name='Sécurité et vie privée'  />
           
       
        </TableBody>
      </Table>
    </TableContainer>
  );
}