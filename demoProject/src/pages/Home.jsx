import React from 'react'
import { useAuth } from '../context/AuthContext'

const Home = () => {
  const {user} = useAuth()
  return (
    <div className='text-3xl'>
      Welcome! {user.email}
    </div>
  )
}

export default Home