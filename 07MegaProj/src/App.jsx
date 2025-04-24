import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './App.css'
import { Header, Footer } from './components'
import authService from './appwrite/authService'
import { login, logout } from './store/authSlice'
import { Outlet } from 'react-router-dom'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData))
          console.log(userData.$id) // Debugging log
          console.log(userData)
        } else {
          // navigate('/login')
          dispatch(logout())
          
        }
      })
      .catch((error) => {
        console.error('Error fetching user data:', error) // Debugging log
      })
      .finally(() => setLoading(false))
  }, [])


  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : 
  <div className="flex items-center justify-center min-h-screen">
    <p className='text-white text-3xl'>Loading...</p>
  </div>
}

export default App
