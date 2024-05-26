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
      text0 : 'La réalisation d’un dispositif' ,
      text1: 'La réalisation d’un dispositif pour l’évaluation des services publics en ligne repose sur une méthodologie bien définie, claire et transversale à laquelle tous les SPEL peuvent être assujettis. La méthodologie EVALUACTION s’inspire des outils d’évaluation des organisations internationales (OCDE, NU…) et est un assemblage modéré et innovant des indicateurs utilisés pour mesurer la performance et la pertinence des services digitaux.',
      text2  : "Réalisabilité en ligne : Ce critère fait référence à la capacité pratique de fournir ce service spécifique entièrement par le biais d'une plateforme en ligne, et qu’il ne nécessite aucune action complémentaire sous forme d’interaction directe entre l’usager et l’administration.",
      text3 : "Simplicité du langage : un langage simple est essentiel pour offrir une expérience utilisateur positive sur un site web de service public en ligne. Cela contribue à l'accessibilité, à la clarté, à la crédibilité et à l'efficacité globale du service. En utilisant un langage simple, les organismes publics peuvent améliorer leur communication avec les citoyens et faciliter l'accès aux informations et aux services dont ils ont besoin.",
      text4 : "Aide joignable et efficace : Un bon site web d’un service public devrait fournir un support et une assistance adéquats aux utilisateurs, cela peut inclure une section FAQ (Foire aux questions), des numéros de téléphone ou adresses e-mail de contact, un chat en direct, etc. Ce critère permet aux utilisateurs d’indiquer s’ils ont réussi à contacter le service pour avoir de l’aide et le niveau d’instantanéité et de joignabilité de l’aide.",
      text5 : "Navigation et utilisabilité web : Ce critère reflète si le site propose un contenu clair, concis et facilement compréhensible. Les informations doivent être bien organisées, avec une structure logique et des menus de navigation cohérents. Les utilisateurs doivent répondre s’ils trouvent rapidement les informations pertinentes.",
      text6 : "Consistance informationnelle : L'outil peut évaluer la qualité et la pertinence des informations fournies sur les sites web des services publics en ligne. Il peut s'agir de vérifier si les informations sont à jour, complètes, claires et faciles à comprendre pour les utilisateurs.",
      text7 :  "Sécurité et vie privée : Les services publics en ligne traitent souvent des informations personnelles sensibles. Il est important de s'assurer que le service dispose de mesures de sécurité adéquates pour protéger les données des utilisateurs. La présence d'un protocole de chiffrement (https), d'une politique de confidentialité claire et de mesures de protection contre les cyberattaques sont autant de facteurs à prendre en compte.",
      text8 : "Disponibilité : La disponibilité d'un service numérique peut être temporairement affectée par divers facteurs, tels que des opérations de maintenance, des mises à jour, une surcharge des serveurs ou d'autres problèmes techniques. Le critère disponibilité tient à examiner à quelle fréquence les utilisateurs trouvent le site web du service public en ligne inaccessible ou indisponible."
    })


    useEffect(()=>{
      getDoc(doc(db , 'pages' , 'page1'))
      .then((res)=>{
        setPage(res.data())
        console.log(page)
      })
    },[])

    const changeHandler =(e)=>{
      const key =  e.target.name
      setPage({...page , [key] : e.target.value})
    }

    const SaveHandel = ()=>{
      console.log(page)
      setDoc(doc(db , 'pages' , 'page1'), {
        text0 : page.text0,
        text1 : page.text1,
        text2 : page.text2,
        text3 : page.text3,
        text4 : page.text4,
        text5 : page.text5,
        text6 : page.text6,
        text7 : page.text7,
        text8 : page.text8,
      })
      .then(()=>{
        alert('page updated successfuly')
      })
    }
  return (
    <Box className='col-10 mx-auto'>
        <Typography fontSize='31px' color={'rgba(64, 71, 94, 1)'} marginY={2}>
          Editer la page A propos de nous
        </Typography>
            <Stack direction={'column'} gap={2}>
                {/* ///////////////////  section 1/  */}
            <Typography variant='h6' color={grey[500]}>
            Section 1
            </Typography>

            <Form.Control onChange={changeHandler}  name='text0' value={page.text0} />
            <Form.Control onChange={changeHandler}  name='text1' style={{height :'3cm'}}  rows={4} as='textarea' defaultValue={page.text1} />


            <Typography variant='h6' color={grey[500]}>
            Réalisabilité en ligne
            </Typography>

            <Form.Control onChange={changeHandler}  name='text2' style={{height :'3cm'}}  rows={4} as='textarea' value={page.text2} />



            <Typography variant='h6' color={grey[500]}>
            Simplicité du langage 
            </Typography>

            <Form.Control onChange={changeHandler}  name='text3' style={{height :'3cm'}}  rows={4} as='textarea' value={page.text3} />


            <Typography variant='h6' color={grey[500]}>
            Aide joignable et efficace 
            </Typography>

            <Form.Control onChange={changeHandler}  name='text4' style={{height :'3cm'}}  rows={4} as='textarea' value={page.text4} />



            <Typography variant='h6' color={grey[500]}>
            Navigation et utilisabilité web
            </Typography>

            <Form.Control onChange={changeHandler}  name='text5' style={{height :'3cm'}}  rows={4} as='textarea' value={page.text5} />


            <Typography variant='h6' color={grey[500]}>
            Consistance informationnelle
            </Typography>

            <Form.Control onChange={changeHandler}  name='text6' style={{height :'3cm'}}  rows={4} as='textarea' value={page.text6} />


            <Typography variant='h6' color={grey[500]}>
           Sécurité et vie privée
            </Typography>

            <Form.Control onChange={changeHandler}  name='text7' style={{height :'3cm'}}  rows={4} as='textarea' value={page.text7} />


            <Typography variant='h6' color={grey[500]}>
            Disponibilité
            </Typography>

            <Form.Control onChange={changeHandler}  name='text8' style={{height :'3cm'}}  rows={4} as='textarea' value={page.text8} />
            <SimpleRow justifyContent={'end'} marginY={3}>
                    <Button variant='contained' size='small' sx={{paddingX :8}} onClick={SaveHandel}  >Enregistrer</Button>
            </SimpleRow>


        </Stack>
    </Box>
  )
}

export default Apropos