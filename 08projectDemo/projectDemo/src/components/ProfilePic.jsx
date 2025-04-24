import React, { useState } from 'react'
import Logo from '../assets/pic.jpeg'
import Dropdown from './Dropdown'

const ProfilePic = () => {

    const [showDropdown, setShowDropdown] = useState(false)

    const dropdownHandle = ()=>{
        setShowDropdown((prev) => !prev)
    }

    return (
        <div className=' w-15 h-15 rounded-full'>
            <img src={Logo} onClick={dropdownHandle} className='size-16 rounded-full' />
            {
                showDropdown && (
                    <Dropdown />
                )
            }
        </div>
    )
}

export default ProfilePic
