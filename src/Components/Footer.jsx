import { Box, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import { ColSpaceBet, MLink, SimpleRow } from '../StyledComponents'
import {IoMdMap} from 'react-icons/io'
import {GrMail} from 'react-icons/gr'
import {BiPhoneCall} from 'react-icons/bi'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
import { AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai'

function Footer() {
    const navigate = useNavigate()
    const theme  = useTheme()
  return (
    <Stack padding={4} direction={'row'} justifyContent={'space-around'}  bgcolor={theme.palette.primary.main} color={'white'} alignItems={'start'}>
        <ColSpaceBet gap={3}>
          <Typography variant='h4'>EVALUACTION</Typography>
          <SimpleRow justifyContent={'center'} gap={2}>
                <BsLinkedin  fontSize={'25px'}/>
                <AiFillFacebook  fontSize={'30px'}/>
                <AiFillTwitterSquare  fontSize={'30px'}/>
                <BsInstagram  fontSize={'25px'}/>
          </SimpleRow>
        </ColSpaceBet>

        <Stack  direction={'column'} gap={'10px'} >
            <Typography variant='subtitle1'><b>Evaluaction</b></Typography>
            <SimpleRow gap={1}>
                <IoMdMap fontSize={'18px'} />
                <Typography   fontSize={'14px'}  >1, Avenue la Victoire, Rabat</Typography>
            </SimpleRow>
            {/* ///////////////:: */}
            <SimpleRow gap={1}>
                <GrMail fontSize={'18px'} />
                <Typography   fontSize={'14px'}  >info@evaluaction.com</Typography>
            </SimpleRow>
            {/* //////////: */}
            <SimpleRow gap={1}>
                <BiPhoneCall fontSize={'18px'} />
                <Typography   fontSize={'14px'}  >+212 663 214 121</Typography>
            </SimpleRow>
        </Stack>
        <Stack  direction={'column'} gap={'10px'} >
        <Typography variant='subtitle1'><b>Liens rapides</b></Typography>
            <Typography sx={{cursor :'pointer'}}  fontSize={'14px'}  onClick={()=>{navigate('/evaluer')}}     >Services</Typography>
            <Typography sx={{cursor :'pointer'}}  fontSize={'14px'}  >FAQ</Typography>
            <Typography sx={{cursor :'pointer'}}  fontSize={'14px'} onClick={()=>{navigate('/apropos')}} >A propos de nous</Typography>
            <Typography sx={{cursor :'pointer'}}  fontSize={'14px'} onClick={()=>{navigate('/contacter')}} >Contacter</Typography>   
        </Stack>
        <Stack  direction={'column'} >
            <Typography   fontSize={'14px'}  >Powered by EVALUACTION</Typography>
            <Typography   fontSize={'14px'}  >(c) 2023 All Rights Reserved.</Typography>
        </Stack>
    </Stack>
  )
}

export default Footer