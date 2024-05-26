import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SideLink(props) {
  return (
    <NavLink {...props} style={{textDecoration :'none' , padding : '10px 12px' , borderRadius :'5px'  , }} 
    className={({ isActive }) =>
   ( isActive) ? "side-link " : "notactive"
  }>
        {props.children}
    </NavLink>
  )
}
