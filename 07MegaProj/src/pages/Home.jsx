import React, { useState, useEffect } from 'react'
import databaseService from '../appwrite/databaseService'
import { Container, PostCard } from '../components'
import authService from '../appwrite/authService'

const Home = () => {
  const [loading, setLoading] = useState(true)
  const message="";

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        setLoading(false)
      }
    })
    .catch((error)=>{
      console.log(error.message)
      message = "Error fetching user data"
      setLoading(false)
    })
    
  })

  return (
    !loading ?
   (
      <Container className='h-full'>
        <div className='text-3xl'>This is Home page</div>
      </Container>
    )
    :
    (
      <Container className='h-full'>
        <div className='text-3xl'>please Login to create or read posts</div>
      </Container>
    )
  )
}

export default Home