import { ColSpaceBet, Line, Photo, RowSpaceBet, SimpleRow } from '../StyledComponents'
import { Box, Button, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import ButtonRate from './ButtonRate'


export default function HomeSecThree() {
  return (
    <Stack direction={ 'row-reverse'} alignItems={'center'}    gap={'98px'} bgcolor={''} justifyContent={'center'}>
    <Box className=''>
              <Photo src={require(`../images/sec3.png`)} alt="" srcset="" className='p-4'  width={'474px'}   />
    </Box>
 
      <ColSpaceBet  className='col-5' gap={4}>
            <Line />
            <Typography  variant='h4'>DONNEZ VOTRE AVIS !</Typography>
            <Typography color={grey[800]} variant='subtitle1'>
            Vous êtes   <b style={{color :'rgba(64, 71, 94, 1)'}}   >EVALUACTEUR</b>  .   <br />
            Vous pouvez dès maintenant donner votre avis sur chaque service en ligne que vous avez utilisé. <br />
            Votre avis re rejoint aux avis de tous les ÉVALUACTEURS. <br />
            C’est en donnant votre avis que vous participiez à l’amélioration des services publics en ligne.
            </Typography>
            <SimpleRow alignItems={'start'}>

            <ButtonRate variant='contained'  >Evaluer maintenant</ButtonRate>
            </SimpleRow>
            
      </ColSpaceBet>
   </Stack>
  )
}
