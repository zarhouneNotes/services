import { createTheme, responsiveFontSizes } from "@mui/material";

const myTheme = createTheme({
    palette : {
        primary : {
            main : 'rgba(116, 104, 184, 1)'
            
        } , 
        secondary : {
            main : 'rgba(152, 152, 152, 1)'
        } ,
        info : {
            main : 'rgba(255, 255, 255, 1)'
        } ,
        
    } ,
    components : {
        MuiButton : {
            styleOverrides : {
                root : {
                    /////////style
                    borderRadius :'5px' , 
                    padding : "10px 35px",
                    textTransform :'none'

                }
            }
        } , 
        MuiRating : {
            styleOverrides :{
                root : {
                   color :'rgba(255, 231, 15, 1)'
                }
            }
        }, 
    
    }
})

export default responsiveFontSizes(myTheme)