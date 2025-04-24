import React from 'react'
import { Link } from 'react-router-dom'
import authService from '../appwrite/authService'
import { useDispatch } from 'react-redux'
import { logout } from '../store/authSlice'
import { useNavigate } from 'react-router-dom'

const Dropdown = () => {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandle = async()=>{
        try {
            await authService.signOutUser()
            dispatch(logout())
            navigate('/login')
        } catch (error) {
            console.log("Error signing out ", error)
        }
    }

  return (
    <div>
        <ul className='absolute top-25 right-10 px-5 py-2.5 rounded-lg border-white border-2 inline-block'>
            <Link to={'#'} className='py-2 px-2.5 block hover:rounded-lg hover:bg-gray-400 hover:text-[#242424]'>
                Profile
            </Link>
            <hr />
            <Link to={'#'} onClick={logoutHandle} className='py-2 px-2.5 block hover:rounded-lg hover:bg-gray-400 hover:text-[#242424]'>
                Logout
            </Link>
        </ul>

    </div>
  )
}

export default Dropdown