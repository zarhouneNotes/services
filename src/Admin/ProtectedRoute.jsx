import React from 'react'
import { useAuth } from '../Firebase'
import { Navigate } from 'react-router-dom'

function ProtectedRoute({children}) {
    let user = useAuth()
    // if (!user) {
    //     return <Navigate   to={'/admin'}   />  
    // }
  return (
    <>{children}</>
  )
}

export default ProtectedRoute