import React, { useEffect, useState } from 'react'
import { HiddenInput, RoundedButton, RowSpaceBet } from '../StyledComponents'
import { Box, Button, FormControl, FormControlLabel, Radio, RadioGroup, Stack, Typography, useTheme } from '@mui/material'
import { grey } from '@mui/material/colors'
import {AiOutlineSearch , AiOutlineClose} from 'react-icons/ai'
import { useLocation, useNavigate } from 'react-router-dom'
import {AiOutlineBarChart} from 'react-icons/ai'
import {BiFilterAlt}  from 'react-icons/bi'
import  {MdClear, MdClose, MdClosedCaption} from'react-icons/md'
import { standards } from '../pages/ServicePage'
import {BsSortUpAlt  , BsSortDown} from 'react-icons/bs'
import Stats from './Stats'
import { FiPlus } from 'react-icons/fi'
import { CaluclCriterRate } from '../App'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../Firebase'

function Filter({setServices ,FilterByCat ,orlist ,  setRatio, setAsc, filterHandel ,isAsc }) {
  const [cat , setCat] = useState()
  const [cats , setCats] = useState([])
  const [showFilter , setShowFilter] = useState(false)
  const [showStats , setShowStats] = useState(false)

  const [tag , setTag] = useState('')


  const navigate = useNavigate()
  const theme = useTheme()
  const location = useLocation()

  useEffect(()=>{
    getDoc(doc(db , 'admin' , 'admin'))
    .then((res)=>{
      setCats(res.data()?.categories)
    })
  },[])

  const AddCat = ()=>{
    updateDoc(doc(db , 'admin' , 'admin'), {
      categories : [...cats , cat]
    })
  }


 
  const deleteCat = (c)=>{
      const arr = cats?.filter((cat)=> cat!== c)
      setCats(arr)

      updateDoc(doc(db ,'admin' , 'admin') ,{
        categories : [...arr]
      })
  }

  


  return (
    <>
    <Box marginTop={8} >
    <Stack direction={'row'} gap={1}>
        <RowSpaceBet gap={1} width={'100%'}  border={'1px solid'} borderColor={grey[200]} >
            <AiOutlineSearch color={grey[500]} className='m-2' fontSize={'24px'}  />
            <HiddenInput  
            onChange={(e)=>{
                  const query = e.target.value
                  if (query?.length>0) {
                    setServices(orlist?.filter((srv)=>{
                      return srv?.title.toLowerCase().includes(query.toLowerCase()) ||  srv?.desc.toLowerCase().includes(query.toLowerCase())
                    }))
                  }else{
                    setServices(orlist)
                  }
            }}  
            size='small'  placeholder='chercher un service..'  />
            <AiOutlineClose color={grey[500]} className='m-2' fontSize={'24px'}/>
        </RowSpaceBet>
        <Button  variant='contained'>chercher</Button>
      { location.pathname === '/resultat'   && 
      <>
      <Box sx={{position :'relative' }}  color={grey[400]}   >
          <Button
            onClick={()=> setShowFilter(!showFilter)}
             color={'secondary'}  variant='outlined' endIcon={ <BiFilterAlt size={'18px'} />}>
            <span>Trier</span>  


          </Button>

        {showFilter &&  <Box borderRadius={'15px'} className='shadow' position={"absolute"} sx={{scale :'0.9' , transformOrigin : 'right'}} zIndex={9} top={30} padding={3}    right={0} bgcolor={'white'}   width={'370px'}  textAlign={'left'}  >
                  <Typography variant='h6' marginBottom={2} color={theme.palette.secondary.main} >Trier par : </Typography>
                  <FormControl   >
                    <RadioGroup  

                      onChange={(e)=>{setRatio(e.target.value)}}
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                      
                    >
                      {standards.map((st ,  i)=>   <FormControlLabel   value={`cr${i+1}`} control={<Radio sx={{fontSize :'12px'}} size='small' />} label={st.name} />
      )}
                    </RadioGroup>
                  </FormControl>

                <RowSpaceBet gap={1} marginY={1}>
                  <Button 
                  onClick={()=>{setAsc(true)}}
                   variant={isAsc ?  'contained' : 'outlined'} color={isAsc ? 'primary' : 'secondary'  }endIcon={<BsSortUpAlt />}   >Ascendant</Button>
                  <Button
                  onClick={()=>{setAsc(false)}}
                    variant={!isAsc ?  'contained' : 'outlined'} color={!isAsc ? 'primary' : 'secondary'  } endIcon={<BsSortDown />}   >descendant</Button>
                </RowSpaceBet>
                {/* <Box className='d-flex justify-content-center'> */}
                <Button
                onClick={()=>{
                  filterHandel() ;
                  setShowFilter(false)
                }}
                 className='w-100' variant='contained'  sx={{marginY : 2}} >Appliquer</Button>
                {/* </Box> */}
        </Box>}
      </Box>
      <Button 
      onClick={()=>setShowStats(!showStats)}
      color={'secondary'}  variant='outlined'  endIcon={ <AiOutlineBarChart size={'18px'} />}><span>Statistiques</span >    </Button>
      
      </>
      
      }

    { location.pathname.includes('/admin') &&   <Button onClick={()=>{navigate('/admin/add-service')}} variant='contained' endIcon={<FiPlus />}>Ajouter</Button>}
         
    </Stack>

      <Stack direction={'row'} gap={1} marginTop={2}  alignItems={'center'} className='flex-wrap'>
        <Typography variant='body2'   color={theme.palette.primary.main} >Filtrer par catégorie : </Typography>
          {cats.map((cat)=>  

          <Box className='position-relative'>
          <Button 
         
          onClick={()=>{
            setTag(cat)
            FilterByCat(cat)
          }}
          size='small'  variant={tag === cat ? 'contained' :   'outlined'} sx={{padding :'7px 3px' , borderRadius : '15px'}}    color={tag === cat ? 'primary' : 'secondary'} >
            {cat}
            
           </Button>

            {/* <MdClose fontSize={'18px'} style={{position :'absolute' , top :'-10px ' , right :'-10px' , background :'grey' , color : 'white' , borderRadius :'50%' , padding :'3px' }}  onClick={()=>{deleteCat(cat)}}   /> */}
           </Box>
        )}
       {location.pathname.includes('/admin') &&  <>
        <HiddenInput
        value={cat}
            onChange={(e)=>{setCat(e.target.value)}}
         placeholder='ajouter une catégorie' style={{width :'4cm'}} />
        <RoundedButton 
            onClick={()=>{
              if (!cats.includes(cat) && cat?.length >0 ) {
                AddCat()
                setCats([...cats , cat])
                setCat('')
              }
            }}
            variant='contained'
        >
          <FiPlus fontSize={'25px'} />
        </RoundedButton>
        
        </>}
       { tag.length>0 &&   <RoundedButton 
              sx={{marginLeft :'-20px' , background :grey[100], color :grey[500]} }
            onClick={()=>{
             setTag("")
             FilterByCat('')
            }}
            variant='outlined'
        >
          <MdClear fontSize={'25px'} />
        </RoundedButton>}
      </Stack>
    </Box>
    <Stats open={showStats} onClose={()=>{setShowStats(false)}} services={orlist} />
    </>
  )
}

export default Filter