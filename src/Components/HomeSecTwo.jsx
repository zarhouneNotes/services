import { ColSpaceBet, Line, Photo, RowSpaceBet, SimpleRow } from '../StyledComponents'
import { Box, Button, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import ButtonContact from './ButtonContact'
function HomeSecTwo() {
  return (
    <Stack direction={ 'row'} alignItems={'center'}    gap={'98px'} bgcolor={''} justifyContent={'center'}>
    <Box className=''>
              <Photo src={require(`../images/sec2.png`)} alt="" srcset="" className='p-4'  width={'474px'}   />
    </Box>
 
      <ColSpaceBet  className='col-5' gap={4}>
            <Line />
            <Typography  variant='h4'>NOS CRITÈRES D'ÉVALUATION</Typography>
            <ColSpaceBet gap={0.5}>
            <Typography color={grey[800]} variant='body1'>
                Le score global est le resultat moyen des indicateurs qui couvrent tout le parcours en ligne de l'usager :
                {/* <br /> <b style={{color :'rgba(64, 71, 94, 1)'}}   >Accessibilité, Simplicité, Navigation, Support, Sécurité et Informations.</b> */}
            </Typography>
            <Typography color={grey[700]} variant='body1'>
                <b style={{color :'rgba(64, 71, 94, 1)'}}   >Accessibilité</b> : un service facilement accessible
            </Typography>

            <Typography color={grey[700]} variant='body1'>
                <b style={{color :'rgba(64, 71, 94, 1)'}}   >Simplicité </b>  : conçu avec un langage simple et reconnaissable
            </Typography>

            <Typography color={grey[700]} variant='body1'>
                <b style={{color :'rgba(64, 71, 94, 1)'}}   >Navigation  </b>  : facilement utilisable et intuitif.
            </Typography>

            <Typography color={grey[700]} variant='body1'>
                <b style={{color :'rgba(64, 71, 94, 1)'}}   >Support   </b>  : avec un support rapide et efficace.
            </Typography>

            <Typography color={grey[700]} variant='body1'>
                <b style={{color :'rgba(64, 71, 94, 1)'}}   >Sécurité    </b>  : et un dispositif de protection de vos données personnelles
            </Typography>

            <Typography color={grey[700]} variant='body1'>
                <b style={{color :'rgba(64, 71, 94, 1)'}}   >Informations     </b>  : une consistance informationnelle suffisante
            </Typography>

            </ColSpaceBet>
           
            <SimpleRow alignItems={'start'}>

            <ButtonContact variant='contained'  >Contacter nous</ButtonContact>
            </SimpleRow>
            
      </ColSpaceBet>
   </Stack>
  )
}

export default HomeSecTwo