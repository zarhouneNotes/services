import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { Box } from '@mui/material';
import Home from './pages/Home';
import { Navigate, Route, Routes, parsePath, useNavigate } from 'react-router-dom';
import NavBar from './Components/NavBar';
import ServicePage from './pages/ServicePage';
import Contact from './pages/Contact';
import About from './pages/About';
import Admin from './Admin/Admin';
import UserInterface from './pages/UserInterface';
import Login from './Admin/Login';
import { createContext, useEffect, useState } from 'react';
import ProtectedRoute from './Admin/ProtectedRoute';


export function CalculGlobalRate(arr){
  if(arr?.length ==0  || !arr) {return 0}
  var GlobalRate = 0
  arr?.map((rate)=>{
      var partRate = 0 
      Object.values(rate).map((val)=>{
         partRate = partRate + parseFloat(val)
      })
  GlobalRate = GlobalRate + partRate/7
  })

  return (GlobalRate/arr?.length).toFixed(1)
}




export  function CaluclCriterRate (arr , cr){
  if(arr?.length ==0  || !arr) {return 0}
      var r = 0
     arr?.map((rate)=>{
            r= r +parseFloat(rate[cr])
          
      })
    return  r/arr?.length

}

export  function calculeGlobalCriterRate (arr ){
  if(arr?.length ==0  || !arr) {return 0}
  var r = 0
  for (let i = 1; i < 8; i++) {
    r  = r + CaluclCriterRate(arr , `cr${i}` )
  }
return  (r/7).toFixed(1)

}




/////////////// on critere all services average
export function CritereAverageRateG (arr ,  cr){
  
  var scr = 0
  arr?.map((srv)=>{
    
    scr = scr + CaluclCriterRate(srv?.rates , cr)  

    
  })
  return scr/arr?.length 
}

//////////// num avis

export function NumOfReviews (arr){
  var avis = 0
  var scr = 0
  arr?.map((srv)=>{
    srv?.rates?.map((rate)=>{
      avis = avis + 1
    })
  })
  return avis
}


export const AuthContextProvider = createContext()


function App() {

 
  return (

   
   <Routes>
      <Route path='/*'   element={<UserInterface  />} />
     
      <Route  path='/admin/*' element={<ProtectedRoute><Admin  /></ProtectedRoute>}  />
      <Route     path='/admin' element={<Login    />}  />

   </Routes>
  );
}

export default App;


