import { Typography  , Stack, Button, Box} from '@mui/material'
import React, { useContext, useState } from 'react'
import SideLink from './SideLink'
import { RowSpaceBet, SimpleRow } from '../StyledComponents'
import { AiOutlineAppstoreAdd ,AiOutlineInfoCircle , AiOutlineCompass} from 'react-icons/ai'
import { BiMessageAltDetail } from 'react-icons/bi'
import { IoIosArrowForward  , IoIosList} from 'react-icons/io'
import { HiOutlineLogout } from 'react-icons/hi'
import { ReactComponent as Logo }from '../images/logos.svg'
import { Logout } from '../Firebase'
import { useNavigate } from 'react-router-dom'
import { AuthContextProvider } from '../App'

function Sidebar() {
    var size  =  '22px'
    const navigate = useNavigate()
    function LogOutHAndel (){
        Logout()
        .then(()=>{
                navigate('/admin')
        })
    }
  return (
    <Stack gap={0.5}   direction='column' height={'100vh'} paddingY={3} className='border border-right'  paddingX={2}>
        {/* <Typography color={'primary'} variant='h5'>EVALUATION</Typography> */}
        <Box marginBottom={5}>
          <Logo  />
        </Box>
        <SideLink to='/admin/stats' >
            <RowSpaceBet>
                <SimpleRow gap={2}>
                    <AiOutlineAppstoreAdd   fontSize={size}/>
                    <Typography variant='subtitle2'  >Accueil</Typography>
                </SimpleRow>
                 <IoIosArrowForward  fontSize={'15px'} />
            </RowSpaceBet>
        </SideLink>

        <SideLink to='/admin/services' >
            <RowSpaceBet>
                <SimpleRow gap={2}>
                    <IoIosList   fontSize={size}/>
                    <Typography variant='subtitle2'>Services</Typography>
                </SimpleRow>
                 <IoIosArrowForward  fontSize={'15px'} />
            </RowSpaceBet>
        </SideLink>



        <SideLink to='/admin/messages' >
            <RowSpaceBet>
                <SimpleRow gap={2}>
                    <BiMessageAltDetail   fontSize={size}/>
                    <Typography variant='subtitle2'>Messages</Typography>
                </SimpleRow>
                 <IoIosArrowForward  fontSize={'15px'} />
            </RowSpaceBet>
        </SideLink>



        <SideLink to='/admin/methodologie' >
           


            <RowSpaceBet>
                <SimpleRow gap={2}>
                    <AiOutlineInfoCircle   fontSize={size}/>
                    <Typography variant='subtitle2'>A propos de nous</Typography>
                </SimpleRow>
                 <IoIosArrowForward  fontSize={'15px'} />
            </RowSpaceBet>
        </SideLink>
        
        <SideLink to='/admin/about' >
        <RowSpaceBet>
                <SimpleRow gap={2}>
                    <AiOutlineCompass   fontSize={size}/>
                    <Typography variant='subtitle2'>Méthodologie</Typography>
                </SimpleRow>
                 <IoIosArrowForward  fontSize={'15px'} />
            </RowSpaceBet>
        </SideLink>


        <Button  sx={{padding : "10px 12px" ,}}  onClick={LogOutHAndel}>
            <RowSpaceBet width={'100%'}>
                <SimpleRow gap={2}>
                    <HiOutlineLogout   fontSize={size}/>
                    <Typography variant='subtitle2'>Log Out</Typography>
                </SimpleRow>
                 <IoIosArrowForward  fontSize={'15px'} />
            </RowSpaceBet>
        </Button>
     

    </Stack>
  )
}

export default Sidebar