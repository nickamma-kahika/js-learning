import React, { useEffect } from 'react'
import Logo from '../assets/js.webp'
import Home from './Home'
import About from './About'
import { Link, useNavigate } from 'react-router-dom'
import store from '../store/store'
import { useDispatch, useSelector } from 'react-redux'
import LogoutBtn from './LogoutBtn'
import authService from '../appwrite/authService'
import { logout } from '../store/authSlice'
import ProfilePic from './ProfilePic'

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        if (!authStatus) {
            navigate('/login')
        }
    }, [authStatus, navigate])

    const handleLogout = async (e) => {
        e.preventDefault()
        try {
            await authService.signOutUser()
            dispatch(logout())
            navigate('/login')
        } catch (error) {
            console.log("Error signing out ", error)
        }
    }

    return (
        <div className="flex justify-between items-center px-10 bg-[#212121] text-white text-xl">
            <div>
                <img src={Logo} alt="logo" className='flex items-center w-20 h-1/10' />
            </div>
            <div>
                <ul type="none" className='flex items-center gap-4'>
                    {!authStatus ? (
                        <>
                            <li>
                                <Link to='/login'>Login</Link>
                            </li>
                            <li>
                                <Link to='/signup'>SignUp</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className='px-2.5 py-1 hover:bg-gray-400 hover:rounded-lg hover:text-[#212121]'>
                                <Link to='/'>App</Link>
                            </li>
                            <li className='px-2.5 py-1 hover:bg-gray-400 hover:rounded-lg hover:text-[#212121]'>
                                <Link to='/dropdown'>Dropdown</Link>
                            </li>
                            <li className='px-2.5 py-1 hover:bg-gray-400 hover:rounded-lg hover:text-[#212121]'>
                                <Link to='/home'>Home</Link>
                            </li>
                            <li className='px-2.5 py-1 hover:bg-gray-400 hover:rounded-lg hover:text-[#212121]'>
                                <Link to='/about'>About</Link>
                            </li>
                            <li >
                                <ProfilePic />
                            </li>

                        </>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Header