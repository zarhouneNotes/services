import { Box, Modal, Stack, Typography, useTheme } from "@mui/material";
import Rate from "./Rate";
import { MyModal } from "../StyledComponents";
import { CaluclCriterRate, calculeGlobalCriterRate } from "../App";
import { grey } from "@mui/material/colors";

function Stats(props) {
    const theme = useTheme()

  const calculGlobalCriterRate=(cr)=>{
    var GR = 0
    props.services?.map((srv)=>{
      
          GR  = GR + CaluclCriterRate(srv?.rates ,cr )
 
    })

    return (GR/props?.services?.length).toFixed(1)
  }
  return (
    <MyModal
    
     className="bg-litht dialog  col-8 mx-auto "   
    {...props}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"  
  >
    <Stack gap={3} p={3} direction={'column'} sx={style} width={'100%'}>
      <Typography   id="modal-modal-title" variant="h4" component="h2" color={grey[800]}>
        Statistiques
      </Typography>
      <Box className=' d-flex flex-wrap' >
        
            <Rate  r={calculGlobalCriterRate('cr1')}   label={'Service réalisable '} color='rgba(97, 131, 206, 1)'  />
            <Rate    r={calculGlobalCriterRate('cr2')}  label={'Langage simple'} color='rgba(64, 183, 183, 1)'  />
            <Rate  r={calculGlobalCriterRate('cr3')}  label={'Aide et support'}  color='rgba(107, 200, 155, 1)'    />
            <Rate  r={calculGlobalCriterRate('cr4')}   label={'Navigation'} color='rgba(161, 106, 187, 1)' />
            <Rate   r={calculGlobalCriterRate('cr5')}  label={'Informations'} color='rgba(182, 85, 137, 1)'  />
            <Rate   r={calculGlobalCriterRate('cr6')}  label={'Sécurité et vie privée'} color='rgba(233, 164, 84, 1)' />
            <Rate   r={calculGlobalCriterRate('cr7')} label={'Disponibilité '} color='rgba(127, 187, 106, 1)' />
      </Box>
    </Stack>
  </MyModal>
  );
}


export default Stats


const style = {
  
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    scale  :'0.95' ,
    bgcolor: 'background.paper',
   borderRadius : '20px' , 
   transformOrigin : 'center'
    
  };