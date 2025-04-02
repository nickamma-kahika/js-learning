import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='flex justify-between bg-gray-700 text-white pl-5 pt-5 pb-5'>
                <div>
                    <NavLink className={({ isActive }) =>
                        `m-5 ${isActive ? 'text-red-500' : 'text-white'}`} to={'/'}>Main</NavLink>
                    <NavLink className={({ isActive }) =>
                        `m-5 ${isActive ? 'text-red-500' : 'text-white'}`} to={'/home'}>Home</NavLink>
                </div>
                <div>
                    <NavLink className={({ isActive }) =>
                        `m-5 ${isActive ? 'text-red-500' : 'text-white'}`} to={'/login'}>Login</NavLink>
                </div>
            </div>
        </>
    )
}

export default Navbar