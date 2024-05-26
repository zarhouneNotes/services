import { ColSpaceBet, Photo, RowSpaceBet, SimpleRow } from '../StyledComponents'
import { Box, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
function CritereDetails({goal}) {
  return (
    <Stack direction={ goal.reversed ?  'row-reverse' :'row'} alignItems={'center'}    gap={'98px'} bgcolor={''} justifyContent={'center'} sx={{textAlign   :'justify'}}  >
        <Box className=''>
                <Photo src={require(`../images/${goal.photo}.png`)} alt="" srcset="" className='p-4'  width={'420px'}   />
        </Box>
    
        <ColSpaceBet  className='col-6 shadoww' padding={4} >
               
                
                <Typography color={grey[500]} variant='subtitle1'> 
                <span style={{color : 'rgba(116, 104, 184, 1)'}}> <b>{goal.title}</b> </span>
                <span style={{color : 'rgba(64, 71, 94, 1)'}}>{goal.desc}</span>  </Typography>
                
        </ColSpaceBet>
    </Stack> 
    )
}

export default CritereDetails