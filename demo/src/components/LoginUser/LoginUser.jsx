import React from 'react'
import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router-dom'

const LoginUser = () => {
  const {id} = useParams();
  return (
    <>
    <Navbar/>
    <h1>Logged in as : {id}</h1>
    </>
  )
}

export default LoginUser