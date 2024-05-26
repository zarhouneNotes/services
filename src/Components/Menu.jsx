import React from 'react'
import { MLink, RowSpaceBet } from '../StyledComponents'
import { Link, NavLink } from 'react-router-dom'

export default function Menu() {
  return (
    <RowSpaceBet  gap={1}>
      <MLink   to='/'  >Accueil</MLink>
        {/* <MLink   to='/services'  >Services</MLink> */}
        <MLink to='/evaluer' >Evaluer </MLink>
        <MLink to='/resultat' >Résultat</MLink>
        <MLink to='/méthodologie' >Méthodologie</MLink>
        <MLink to='/apropos' >A propos </MLink>
    </RowSpaceBet>
  )
}
