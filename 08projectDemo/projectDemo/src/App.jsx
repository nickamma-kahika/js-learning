import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { login, logout } from './store/authSlice'
import './App.css'
import authService from './appwrite/authService'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect( ()=>{
    setLoading(true)
    authService.getCurrentUser()
      .then((userData)=>{
        if(userData){
          dispatch(login({userData : userData}))
          console.log("current user ", userData)
          navigate('/')
        }else{
          dispatch(logout())
          navigate('/login')
        }
        
      })
      .catch((error) => {
        console.error('Error fetching user data:', error) // Debugging log
      })
      .finally(() => setLoading(false))
  },[])

  if(loading) {
    return <div>Loading...</div>
  }


  return (
    <div className='dark:bg-[#212121] light:bg-[#121212] flex-grow text-white text-xl h-screen'>
    {/* <div>
      <Header />
    </div> */}
    <div className=' flex flex-col justify-center items-center h-9/10'>
      <div className='flex justify-center'>
        <a href="https://vite.dev" target="_blank" className='m-5'>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" className='m-5'>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='flex justify-center '>Vite + React</h1>
      <div className="card flex justify-center items-center flex-col">
        <button 
        className='bg-fuchsia-400 hover:bg-fuchsia-600 rounded-lg h-10 w-40' 
        onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className='flex justify-center'>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs flex justify-center">
        Click on the Vite and React logos to learn more
      </p>
    </div>
    </div>
  )
}

export default App
