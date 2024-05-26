import { Box, Button, Rating, Stack, Typography, useTheme } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { ColSpaceBet, HiddenInput, Photo, RowSpaceBet, SimpleRow, Tag } from '../StyledComponents'
import { green, grey } from '@mui/material/colors'
import {  Link, useLocation } from 'react-router-dom'
import CritereRate from './CritereRate'
import Stats from './Stats'
import { CiEdit , CiFaceSmile, CiTrash } from 'react-icons/ci'
import { FiUploadCloud } from 'react-icons/fi'
import { Alert, Form, Modal } from 'react-bootstrap'
import { CalculGlobalRate } from '../App'
import { doc, updateDoc  ,getDoc, deleteDoc} from 'firebase/firestore'
import { db } from '../Firebase'
import {HiOutlineExternalLink} from 'react-icons/hi'
import {FaRegGrinStars} from 'react-icons/fa'


import uuid from 'react-uuid'

function Service({srv}) {
  const location = useLocation()
  const [ratePage , setRatePage] = useState()
  const [show , setShow] = useState(false)
  const [tnx , setTnx] = useState(false)
  const theme = useTheme()
  const [editMode , setEditMode] = useState(false)

//////  inputs handls
const [rates , setRates] = useState(srv?.rates)
const [critere , setCritere] = useState({
    
        cr1: 0 ,
        cr2: 0 , 
        cr3: 0,
        cr4: 0,
        cr5: 0,
        cr6: 0,
        cr7: 0 ,
        })

//////   edir
const id = uuid()
const [tag , setTag] = useState()
const [tags , setTags] = useState([...srv?.tags])
const [img , setImg] = useState()
const [cats , setCats] = useState([])
const [srvi , setSrv] = useState({...srv })
 
  useEffect(()=>{
    getDoc(doc(db , 'admin' , 'admin'))
    .then((res)=>{
      setCats(res.data()?.categories)
    })
  },[])
const handelSubmit =  (e)=>{
      e.preventDefault()
    if( !tags.includes(tag) && tag.length >0 ) {
        setTags([...tags , tag])
         setTag('')
    }

}

/////////:change handler

const RateHandel = (e)=>{

        updateDoc(doc(db , 'services' , srv?.id) , {
            rates : [...rates , critere]
        })
        .then(()=>{
            setRates([...rates , critere])
            setCritere({cr1
                : 
                0 ,
                cr2
                : 
                0 , 
                cr3
                : 
                0,
                cr4
                : 
                0,
                cr5
                : 
                0,
                cr6
                : 
                0,
                cr7
                : 
                0})
            setTnx(true)
        })
}
const ChangeHandlerEdit = (e)=>{
    const key = e.target.name
    setSrv({...srv, [key] : e.target.value})
  }

const ChangeHandler = (e) =>{
    const key = e.target.name
    setCritere({...critere , [key] : parseFloat(e.target.value).toFixed(1) })
}


const UpdateHandel = ()=>{
    updateDoc(doc(db , 'services' , srvi?.id),{
            ...srvi
    })
    .then(()=>{
        alert('updated')
    })
}
const [dialog , setDialog] = useState(false)
const deleteSrv = ()=>{
        deleteDoc(doc(db , 'services' , srvi?.id))
        .then(()=>{
            setDialog(false)
            // alert('Service supprimé.')
        })
}

const ref = useRef()
  return (
      
    
   <Box ref={ref}  >
  
    <Stack   marginY={'20px'} className='shadoww ' direction={'column'}    borderRadius={'15px'} overflow={'hidden'}   >
        <Stack direction={'row'} className='rounded' padding={3} gap={2}bgcolor={'white'} alignItems={'start'}>
            <Photo width='140px' className='rounded' src={srv?.photo} alt=""  />
            <ColSpaceBet className=' bg-dangr w-100' gap={1}>
                <RowSpaceBet>
                   <RowSpaceBet gap={3}>
                     <Typography variant='h5' color={grey[800]} >{srv?.title}</Typography>
                     <Link to={`/service/${srv?.id}`}   ><HiOutlineExternalLink /></Link>
                   </RowSpaceBet>
                  { location.pathname.includes('/admin') &&   
        <SimpleRow gap={1}>
                        <CiEdit   fontSize={''}  onClick={()=>{setEditMode(true)}}   />
                        <CiTrash  onClick={()=>{setDialog(true)}}  fontSize={''}/>
                    </SimpleRow>}
                </RowSpaceBet>
                <RowSpaceBet>
                   <Typography variant='subtitle1' color={grey[600]} className={( location.pathname !== '/evaluer' || !show) && 'cut-text'} >{srv?.desc}</Typography>
                   {    <Button  disabled={show}  sx={{scale : '0.8' , visibility :location.pathname === '/evaluer' ? 'visible' : 'hidden'}} size='small' variant='contained' onClick={()=>{setShow(true)}}>Evaluer</Button>}
                </RowSpaceBet>
                <SimpleRow alignItems={'center'} gap={2} marginTop={1}>   
                       <Rating   size='small' name="read-only" value={CalculGlobalRate(rates)}  precision={0.1} readOnly />  
                        <Typography variant='h6' color={grey[400]}    > <span  style={{color :"rgba(255, 231, 15, 1)"}} className='fw-bold'  >{CalculGlobalRate(rates)}</span>  /5     </Typography>
                        <Typography variant='body2' color={grey[400]}    >({rates?.length} avis) </Typography>
                 </SimpleRow>
            </ColSpaceBet>
           
        </Stack>

        <Stack className={ ( location.pathname === '/evaluer' && show) ? 'show' :'hide' } gap={2} direction={'column'}  paddingX={8} alignItems={'center'}>

        {tnx && <Alert variant='success' className='w-100' > <FaRegGrinStars fontSize={'20px'} />   Merci pour votre avis  </Alert>  }
              <Typography  variant='h5' color={'black'}  >Evaluer le service</Typography>

{/* //////////////////////////////////////// */}
            <RowSpaceBet width={'100%'} borderBottom={'1px solid #E6E6E6'} paddingBottom={2} >
                            <Typography  variant='subtitle1' color={grey[400]}  >Réalisabilité en ligne</Typography>
                            <Stack direction={'row'} alignItems={"center"} gap={3}>
                            <Rating onChange={ChangeHandler} precision={0.1}  name={'cr1'} defaultValue={0} size="large" />
                            <Typography variant='h6' color={grey[400]} > <span  style={{color :"rgba(255, 231, 15, 1)"}}   >{critere.cr1}</span>  /5</Typography>
                            </Stack>

              </RowSpaceBet>
{/* //////////////////////////////////////// */}
            <RowSpaceBet width={'100%'} borderBottom={'1px solid #E6E6E6'} paddingBottom={2} >
                            <Typography  variant='subtitle1' color={grey[400]}  >Simplicité du langage</Typography>
                            <Stack direction={'row'} alignItems={"center"} gap={3}>
                            <Rating     precision={0.1} onChange={ChangeHandler}  name={'cr2'} defaultValue={0} size="large" />
                            <Typography variant='h6' color={grey[400]} > <span  style={{color :"rgba(255, 231, 15, 1)"}}   >{critere.cr2}</span>  /5</Typography>
                            </Stack>

              </RowSpaceBet>

{/* //////////////////////////////////////// */}
            <RowSpaceBet width={'100%'} borderBottom={'1px solid #E6E6E6'} paddingBottom={2} >
                                        <Typography  variant='subtitle1' color={grey[400]}  >Aide joignable et efficace</Typography>
                                        <Stack direction={'row'} alignItems={"center"} gap={3}>
                                        <Rating   precision={0.1} onChange={ChangeHandler}  name={'cr3'} defaultValue={0} size="large" />
                                        <Typography variant='h6' color={grey[400]} > <span  style={{color :"rgba(255, 231, 15, 1)"}}   >{critere.cr3}</span>  /5</Typography>
                                        </Stack>

              </RowSpaceBet>
{/* //////////////////////////////////////// */}
            <RowSpaceBet width={'100%'} borderBottom={'1px solid #E6E6E6'} paddingBottom={2} >
                                <Typography  variant='subtitle1' color={grey[400]}  >Navigation et utilisabilité web</Typography>
                                <Stack direction={'row'} alignItems={"center"} gap={3}>
                                <Rating   precision={0.1} onChange={ChangeHandler}  name={'cr4'} defaultValue={0} size="large" />
                                <Typography variant='h6' color={grey[400]} > <span  style={{color :"rgba(255, 231, 15, 1)"}}   >{critere.cr4}</span>  /5</Typography>
                                </Stack>

              </RowSpaceBet>

{/* //////////////////////////////////////// */}
            <RowSpaceBet width={'100%'} borderBottom={'1px solid #E6E6E6'} paddingBottom={2} >
                        <Typography  variant='subtitle1' color={grey[400]}  >Consistance informationnelle</Typography>
                        <Stack direction={'row'} alignItems={"center"} gap={3}>
                        <Rating   precision={0.1} onChange={ChangeHandler}  name={'cr5'} defaultValue={0} size="large" />
                        <Typography variant='h6' color={grey[400]} > <span  style={{color :"rgba(255, 231, 15, 1)"}}   >{critere.cr5}</span>  /5</Typography>
                        </Stack>

            </RowSpaceBet>
{/* //////////////////////////////////////// */}
            <RowSpaceBet width={'100%'} borderBottom={'1px solid #E6E6E6'} paddingBottom={2} >
                        <Typography  variant='subtitle1' color={grey[400]}  >Sécurité et vie privée'</Typography>
                        <Stack direction={'row'} alignItems={"center"} gap={3}>
                        <Rating   precision={0.1} onChange={ChangeHandler}  name={'cr6'} defaultValue={0} size="large" />
                        <Typography variant='h6' color={grey[400]} > <span  style={{color :"rgba(255, 231, 15, 1)"}}   >{critere.cr6}</span>  /5</Typography>
                        </Stack>

            </RowSpaceBet>
{/* //////////////////////////////////////// */}
            <RowSpaceBet width={'100%'} borderBottom={'1px solid #E6E6E6'} paddingBottom={2} >
                        <Typography  variant='subtitle1' color={grey[400]}  >Disponibilité</Typography>
                        <Stack direction={'row'} alignItems={"center"} gap={3}>
                        <Rating   precision={0.1} onChange={ChangeHandler}  name={'cr7'} defaultValue={0} size="large" />
                        <Typography variant='h6' color={grey[400]} > <span  style={{color :"rgba(255, 231, 15, 1)"}}   >{critere.cr7}</span>  /5</Typography>
                        </Stack>

            </RowSpaceBet>

{/* ::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
               <Box alignSelf={'center'} className='d-flex gap-3' marginY={3}>
                <Button size='large'   variant='contained' onClick={RateHandel}  >Enregistrer</Button>
                <Button  variant='outlined' onClick={()=>setShow(false)}>Annuler</Button>
              </Box>
       </Stack>

   

       {/* >>>>>>>>>>>>Edit */}
       <ColSpaceBet className={`col-10 mx-auto shadoww ${ editMode ? '  show' :'hide'} `}      gap={1} p={ editMode && 4} marginTop={ editMode &&7}>
            <SimpleRow gap={2}>
                <Form.Control
                  
                   onChange={ChangeHandlerEdit}
                    value= {srvi?.title}
                name='title' className='tarea'  size='sm' placeholder='Titre' />
                <Form.Control  
                 onChange={ChangeHandlerEdit}
                    value= {srvi?.category}
                name='category'  className='tarea'  as='select' defaultChecked={'category'}    size='sm'  placeholder='Category' >
                <option  defaultChecked={true}   >category</option>
                {cats?.map((cat)=>{
                    return <option  value={cat}>{cat}</option>
                    })}
                </Form.Control>
            </SimpleRow>

            <SimpleRow className='form-control'gap={1} >
                <SimpleRow alignItems={'center'} gap={1} className='col-9 flex-wrap' >
                {tags?.map((tag)=> {return tag.length >0 &&      <Tag >{tag}</Tag>})}
                </SimpleRow>
                <Form onSubmit={handelSubmit}>
                <HiddenInput value={tag} onChange={(e)=>{setTag(e.target.value)}}  placeholder='ajouter un tag..' /> 
                </Form>
            </SimpleRow>
            <Typography fontSize={  '12px'} marginLeft={1} marginTop={-0.5} color={'primary'}>optionnel</Typography>

            <RowSpaceBet className='form-' gap={1}>
                <RowSpaceBet className='form-control'>
                    <Typography color={grey[500]} padding={1} variant='subtitle2'>Photo</Typography>
                    <Tag className='position-relative' variant='contained'>
                    Upload <FiUploadCloud />
                    <HiddenInput 
                    onChange={(e)=>{setImg(e.target.files[0])}}
                    accept='image/*' type='file' style={{position :'absolute' , left  : '0' , height :'100%' , opacity :'0'}}  />   
                    </Tag>
            </RowSpaceBet>
            { <img   src={srvi?.photo} style={{height : '1.2cm' , borderRadius :'8px'}}    />}
            </RowSpaceBet>

            <Form.Control  
             onChange={ChangeHandlerEdit}
    value= {srvi?.desc}

                name='desc'
                style={{height :'130px'}}
                className='tarea'
                as="textarea"
                placeholder="Description"
                rows={4}
                />

                <SimpleRow justifyContent={'center'} marginTop={4} gap={1}>
                    <Button  variant='contained' size='small' sx={{paddingX :8}} 

                    onClick={UpdateHandel}
                    
                    >Enregistrer</Button>
                    <Button  variant='outlined' size='small' sx={{paddingX :8}} onClick={()=>{setEditMode(false)}}   >annuler</Button>
                </SimpleRow>

      </ColSpaceBet>
        </Stack>
        <Modal centered show={dialog} className='  h-100  b' style={{backgroundColor :'rgba(0, 0, 0, 0.32)'}} >
           <Typography color={grey[500]} p={2}>
            Tu veux supprimer ce service ?
           </Typography>
           <SimpleRow justifyContent={'end'}  padding={2} gap={1}>
            <Button size='small' variant='contained' color='error' onClick={deleteSrv} >Supprimer</Button>
            <Button size='small' variant='outlined' onClick={()=>{setDialog(false)}} >Annuler</Button>
           </SimpleRow>
        </Modal>
   </Box>

       
  )
}

export default Service


