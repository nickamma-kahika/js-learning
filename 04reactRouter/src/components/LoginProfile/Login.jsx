import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../../context/UserContext'

const Login = () => {
    const userContext = useContext(UserContext)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e)=>{
      e.preventDefault()
      userContext.setUser({username, password})
    }


  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-400 p-10'>
        <div>
            <input 
            className='border-2 border-gray-500' 
            value={username}
            onChange={(e)=>setUsername(e.target.value)} 
            type="text" 
            placeholder='Username'
            />
            <input 
            className='border-2 border-gray-500' 
            value={password}
            onChange={(e)=>setPassword(e.target.value)} 
            type="text" 
            placeholder='Password'
            />
        </div>
        <div>
            <button 
            onClick={ handleSubmit } 
            className='border-2 border-gray-500 bg-gray-500'>
              Submit
              </button>
        </div>
    </div>
  )
}

export default Login