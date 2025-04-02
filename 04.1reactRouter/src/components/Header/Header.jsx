import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className= ' bg-gray-800 text-4xl text-white'>
      <ul className='flex flex-row m-5 p-5'>
        <li className=' m-5 '>
            <NavLink className={({ isActive }) =>
              `px-4 py-2 rounded-2xl transition-all duration-300 ${
                isActive
                  ? 'bg-blue-500 text-white font-bold shadow-lg'
                  : 'hover:bg-gray-700 hover:text-blue-300'
              }`
            } to='/' >App</NavLink>
        </li>
        <li className='m-5'>
            <NavLink className={({ isActive }) =>
              `px-4 py-2 rounded-2xl transition-all duration-300 ${
                isActive
                  ? 'bg-blue-500 text-white font-bold shadow-lg'
                  : 'hover:bg-gray-700 hover:text-blue-300'
              }`
            } to='/Home'>Home</NavLink>
        </li>
        <li className='m-5'>
            <NavLink className={({ isActive }) =>
              `px-4 py-2 rounded-2xl transition-all duration-300 ${
                isActive
                  ? 'bg-blue-500 text-white font-bold shadow-lg'
                  : 'hover:bg-gray-700 hover:text-blue-300'
              }`
            } to='/deepika'>Deepika</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header