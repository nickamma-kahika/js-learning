import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className= ' bg-gray-800 text-4xl text-white'>
      <ul className='flex flex-row m-5 p-5'>
        <li className='m-5'>
            <NavLink to='/' >App</NavLink>
        </li>
        <li className='m-5'>
            <NavLink to='/Home'>Home</NavLink>
        </li>
        <li className='m-5'>
            <NavLink to='/deepika'>Deepika</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Header