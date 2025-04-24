import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/authService'
import { logout } from '../../store/authSlice'


const LogoutBtn = () => {

    const dispatch = useDispatch()
    const logoutHandler = () => {
      authService.logoutUser()
      .then(()=>(
        dispatch(logout())
      ))
      
    }

  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-300 rounded-3xl' onClick={logoutHandler}>LogoutBtn</button>
  )
}

export default LogoutBtn