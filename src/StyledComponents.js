import { Box, Button, Modal, TextField, styled } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Link, NavLink } from "react-router-dom";

export const RowSpaceBet = styled(Box)(({theme})=>({
    display :'flex' , 
    alignItems :'center' , 
    justifyContent :'space-between'
}))
export const SimpleRow = styled(Box)(({theme})=>({
    display :'flex' , 
    alignItems :'center' , 
}))

export const ColSpaceBet = styled(Box)(({theme})=>({
    display :'flex' , 
    flexDirection :'column' ,
    // alignItems :'center' !:, 
    justifyContent :'space-between'
}))

export const MLink = styled(NavLink)(({theme})=>({
            padding :'15px 20px' , 
        textDecoration : 'none' , 
        color : grey[900] , 
        fontSize : '15px' ,
        ":hover" : {
            color : theme.palette.primary.main ,
            backgroundColor : 'transparent' , 
            transition : '0.5s',
        }


        
    
}))

export const HiddenInput = styled('input')(({theme })=>({
    border : 'none' , 
    width :'100%' , 
    height :'100%' , 
    fontSize : '14px' , 
    outline :'none' ,
    '&::placeholder': {
        textOverflow: 'ellipsis !important',
        color: grey[300]
      }
}))

export const MyInput = styled(TextField)(({theme })=>({
    width :'100%' , 
    height :'100%' , 
    fontSize : '14px' , 
    // outline :'none' ,
    '&::placeholder': {
        textOverflow: 'ellipsis !important',
        color: grey[300]
      }
}))

export const Photo = styled('img')({
    aspectRatio :'1/1' , 
  
})

export const Cover = styled('img')({
    aspectRatio :'16/9' , 
  
})

export const MyModal = styled(Modal)({
    // aspectRatio :'16/9' , 

    "&:focus": {
        outline: "none"
        
      }
  
})
export const Line  = styled(Box)({
    width : '94px' , 
    height :'7px' , 
    backgroundColor : 'rgba(80, 195, 112, 1)'
  
})
export const Dot  = styled(Box)(({theme})=>({
    width : '10px' , 
    height :'10px' , 
    background :theme.palette.primary.main,
    borderRadius :'50%'
    
    
  
}))


export const Tag  = styled(Box)(({theme})=>({
    padding :'12px 25px',
    background :theme.palette.primary.main ,
    borderRadius :'8px' , 
    color :'white',
    fontSize : '12px' , 
    fontWeight : '400'

    
    
  
}))

export const RoundedButton  = styled(Button)(({theme})=>({
    padding :'0px 0px',
    background :theme.palette.primary.main ,
    borderRadius :'50%' , 
    color :'white',
    // fontSize : '12px' , 
   width :'45px', 
   aspectRatio : '1/1' , 
   scale  :'0.6'

    
    
  
}))







