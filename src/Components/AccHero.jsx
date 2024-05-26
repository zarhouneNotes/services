import { Box, Button, Typography } from '@mui/material'
import { grey, yellow } from '@mui/material/colors'
import React from 'react'
import { ColSpaceBet, RowSpaceBet, SimpleRow } from '../StyledComponents'
import ButtonContact from './ButtonContact'
import { useNavigate } from 'react-router-dom'


function AccHero() {
  const navigate = useNavigate()
  return (
    <Box  height={'680px'} display={'flex'}   alignItems={'center'}  sx={{backgroundImage : `url(${require('../images/hero.png')})` , backgroundRepeat : 'no-repeat' , backgroundSize : 'contain'}} >
             <RowSpaceBet className='col-10 mx-auto' bgcolor={''} >
                    <ColSpaceBet gap={'30px'} color={'white'} >
                        <Typography  fontSize={'58px'} color={''}>
                        <b>EVALUACTION</b>
                        </Typography>
                        <Typography fontSize={'20px'} color={grey[200]} className='col-8'  textAlign={'justify'}>
                        Un outil de suivi régulier des services publics en ligne, en se basant sur VOTRE EXPÉRIENCE usager. <br />
Nous aspirons à une expérience utilisateur optimisée, des services en ligne de qualité, et plus de redevabilité et de transparence.
<br />Votre parcours en ligne compte pour nous !                        </Typography>
                        <SimpleRow gap={2}>
                            <ButtonContact  color='info' variant='contained'  >Contacter</ButtonContact>
                            <Button 
                            onClick={()=>{navigate('/methodologie')}}
                             color='info' variant='outlined'  >Nos objectifs </Button>
                            
                        </SimpleRow>
                    </ColSpaceBet>
                    <Box>
                    <img width={'540px'} src={require('../images/billy.png')} alt="" srcset="" />
                    {/* <Said  /> */}
                </Box>
             </RowSpaceBet>
                
    </Box>
  )
}

export default AccHero