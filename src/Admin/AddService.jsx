import React, { useEffect, useState } from 'react'
import { ColSpaceBet, HiddenInput, RowSpaceBet, SimpleRow, Tag } from '../StyledComponents'
import { Form } from 'react-bootstrap'
import { Typography , Button } from '@mui/material'
import {  } from 'bootstrap'
import { grey } from '@mui/material/colors'
import { FiUploadCloud } from 'react-icons/fi'
import uuid from 'react-uuid'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db, storage } from '../Firebase'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'


function AddService() {
  const id = uuid()
  const [cats , setCats] = useState([])
  const [tag , setTag] = useState()
  const [tags , setTags] = useState([])
  const [img , setImg] = useState()
  const [srv , setSrv] = useState({
    title : '',
    category : '' ,
    tags  : [...tags] ,
    photo  : '' , 
    desc :'' , 
    id : id , 
    rates : []
  })

  useEffect(()=>{
    getDoc(doc(db , 'admin' , 'admin'))
    .then((res)=>{
      setCats(res.data()?.categories)
    })
  },[])

  const handelSubmit =  (e)=>{
        e.preventDefault()
      if ( !tags.includes(tag) ) {
        setTags([...tags , tag]) 
        setSrv({...srv , tags : [...srv?.tags , tag]})
      }
       setTag('')
       

  }


  const ChangeHandler = (e)=>{
    const key = e.target.name
    setSrv({...srv, [key] : e.target.value})
  }

  const SaveHandel = ()=>{
    const i  = uuid()
    const refImg = ref(storage ,i )
    uploadBytes(refImg , img)
    .then(()=>{
      getDownloadURL(refImg)
      .then((url)=>{
        setDoc(doc(db ,'services' , id),{
          title : srv.title,
          category : srv.category ,
          tags  : [...tags] ,
          photo  : url , 
          desc :srv.desc , 
          id : id , 
          rates : []
        })
        .then(()=>{
          setSrv({title : '',
          category : '' ,
          tags  : [] ,
          photo  : '' , 
          desc :'' , 
          id : id , 
          rates : []})
          alert('service added successfully')
        })
      })
    })
  }
  return (
    <ColSpaceBet className='col-10 mx-auto shadoww' gap={1} p={4} marginTop={7}>
    <Typography marginY={3} variant='h5'>Ajouter un service</Typography>
      <SimpleRow gap={2}>
         <Form.Control 
         onChange={ChangeHandler}
         name='title' className='tarea'  size='sm' placeholder='Titre' />
         <Form.Control 
         onChange={ChangeHandler}
         name='category'  className='tarea'  as='select' defaultChecked={'category'}    size='sm'  placeholder='Category' >
         <option  defaultChecked={true}   >category</option>
         {cats?.map((cat)=>{
          return <option  value={cat}>{cat}</option>
         })}
         </Form.Control>
      </SimpleRow>

      <SimpleRow className='form-control'gap={1} >
          <SimpleRow alignItems={'center'} gap={1} >
           {tags.map((tag)=> {return tag.length >0 &&      <Tag >{tag}</Tag>})}
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
       { img &&<img   src={URL.createObjectURL(img)} style={{height : '1.2cm' , borderRadius :'8px'}}    />}
      </RowSpaceBet>

      <Form.Control
      onChange={ChangeHandler}
      name='desc'
        style={{height :'130px'}}
        className='tarea'
        as="textarea"
        placeholder="Description"
        rows={4}
        />

        <SimpleRow justifyContent={'end'} marginTop={4}>
            <Button disabled={
              srv.title.length === 0 ||
              srv.desc.length === 0 ||
              srv.category.length === 0 ||
              !img 



              }  onClick={SaveHandel} variant='contained' size='small' sx={{paddingX :8}}   >Envoyer</Button>
        </SimpleRow>

    </ColSpaceBet>
  )
}

export default AddService