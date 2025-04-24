import React from 'react'
import UserContextProvider from '../../context/UserContextProvider'
import Login from '../LoginProfile/Login'
import Profile from '../LoginProfile/Profile'

function Work() {

  return (

    <UserContextProvider >
      <h1 className='text-3xl'>this is login and profile context</h1>
      <Login/> 
      <Profile />
    </UserContextProvider>

  )
}

export default Work