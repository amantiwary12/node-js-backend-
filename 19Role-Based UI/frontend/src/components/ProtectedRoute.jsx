import React from 'react'
import { Navigate } from 'react-router-dom'


const ProtectedRoute = () => {
  return (
    <>
        <Navigate to="/login"/>
    </>
  )
}

export default ProtectedRoute
