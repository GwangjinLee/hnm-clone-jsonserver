import React from 'react'
import { Navigate } from 'react-router-dom'
import ProductDetail from '../page/ProductDetail'

const PrivateRoute = ({authenticated}) => {
  return (
    authenticated == true ? <ProductDetail/> : <Navigate to="/login"/>
  )
}

export default PrivateRoute