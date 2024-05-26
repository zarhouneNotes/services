import { Box, Button, Stack, Typography, useTheme } from '@mui/material'
import { blue, grey } from '@mui/material/colors'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { SimpleRow } from '../StyledComponents'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../Firebase'

function Apropos() {
    const theme = useTheme()
    const [page , setPage] = useState({
      text0 : "Le dispositif EVALUACTION"  ,
      text1: 'Le dispositif EVALUACTION se veut un outil de renforcement de la politique de la digitalisation de l’administration Marocaine. Il permet un suivi régulier de l’ensemble des services publics en ligne à travers un score reflétant l’expérience des usagers, et une force de proposition destinées aux pouvoirs publics chargés desdits services.' ,


      text2  : "Améliorer l'expérience utilisateur",

      text3 : "L'objectif ultime d'un service public en ligne est de fournir une expérience utilisateur positive. Un outil d'évaluation peut aider à comprendre les besoins et les attentes des utilisateurs en recueillant leurs commentaires et en évaluant leur satisfaction. Cela permet de mettre en évidence les points forts et les points faibles des services en ligne du point de vue des utilisateurs, et de prendre des mesures pour améliorer l'expérience utilisateur globale. L'objectif est de créer des services publics en ligne plus conviviaux, accessibles et efficaces, répondant aux besoins réels des utilisateurs et améliorant leur interaction avec les services gouvernementaux.",

      text4 : 'Améliorer la qualité des services publics en ligne',

      text5 : "L'un des objectifs principaux d'un tel outil est d'identifier les lacunes et les problèmes dans les services publics en ligne afin de proposer des améliorations ciblées. En évaluant les services selon des critères prédéfinis, l'outil peut mettre en évidence les domaines où des améliorations sont nécessaires, que ce soit en termes de convivialité, d'efficacité, de sécurité des données ou d'autres aspects. L'objectif est de permettre aux organismes publics de prendre des mesures pour fournir des services en ligne de meilleure qualité à leurs utilisateurs.",

      text6 : "L'un des objectifs principaux d'un tel outil est d'identifier les lacunes et les problèmes dans les services publics en ligne afin de proposer des améliorations ciblées. En évaluant les services selon des critères prédéfinis, l'outil peut mettre en évidence les domaines où des améliorations sont nécessaires, que ce soit en termes de convivialité, d'efficacité, de sécurité des données ou d'autres aspects. L'objectif est de permettre aux organismes publics de prendre des mesures pour fournir des services en ligne de meilleure qualité à leurs utilisateurs.",

      text7 :  "Un outil d'évaluation des services publics en ligne peut contribuer à renforcer la transparence en fournissant des informations objectives sur la qualité des services. Cela permet aux utilisateurs de connaître les performances des services publics en ligne, d'accéder à des évaluations indépendantes et de prendre des décisions éclairées. De plus, en publiant les résultats de l'évaluation, l'outil peut encourager la redevabilité des organismes publics en leur offrant un moyen de rendre compte de la qualité de leurs services en ligne."
     
    })

    useEffect(()=>{
      getDoc(doc(db , 'pages' , 'page2'))
      .then((res)=>{
        setPage(res.data())
        // console.log(page)
      })
    },[])
    const ChangeHandler =(e)=>{
      const key =  e.target.name
      setPage({...page , [key] : e.target.value})
    }

    const SaveHandel = ()=>{
      // console.log(page)
      setDoc(doc(db , 'pages' , 'page2'), {
        text0 : page.text0,
        text1 : page.text1,
        text2 : page.text2,
        text3 : page.text3,
        text4 : page.text4,
        text5 : page.text5,
        text6 : page.text6,
        text7 : page.text7,
      })
      .then(()=>{
        alert('page updated successfuly')
      })
    }
  return (
    <Box className='col-10 mx-auto'>
        <Typography fontSize='31px' color={'rgba(64, 71, 94, 1)'} marginY={2}>
          Editer la page Méthodologie
        </Typography>
            <Stack direction={'column'} gap={2}>
                {/* ///////////////////  section 1/  */}
            <Typography variant='h6' color={grey[500]}>
            Section 1
            </Typography>

            <Form.Control value={page?.text0} onChange={ChangeHandler} name={'text0'}  />
            <Form.Control value={page?.text1} onChange={ChangeHandler} name={'text1'}  style={{height :'3cm'}}  rows={4} as='textarea' />


            <Typography variant='h6' color={grey[500]}>
            Section 2
            </Typography>

            <Form.Control value={page?.text2} onChange={ChangeHandler} name={'text2'}  />
            <Form.Control value={page?.text3} onChange={ChangeHandler} name={'text3'}  style={{height :'3cm'}}  rows={4} as='textarea'  />



            <Typography variant='h6' color={grey[500]}>
            Section 3
            </Typography>

            <Form.Control value={page?.text4} onChange={ChangeHandler} name={'text4'}  />
            <Form.Control value={page?.text5} onChange={ChangeHandler} name={'text5'}  style={{height :'3cm'}}  rows={4} as='textarea'  />



            <Typography variant='h6' color={grey[500]}>
            Section 4
            </Typography>

            <Form.Control value={page?.text6} onChange={ChangeHandler} name={'text6'}  />
            <Form.Control value={page?.text7} onChange={ChangeHandler} name={'text7'}  style={{height :'3cm'}}  rows={4} as='textarea'  />




          


             <SimpleRow justifyContent={'end'} marginY={3}>
                    <Button variant='contained' size='small' sx={{paddingX :8}} onClick={SaveHandel}   >Enregistrer</Button>
            </SimpleRow>


        </Stack>
    </Box>
  )
}

export default Apropos