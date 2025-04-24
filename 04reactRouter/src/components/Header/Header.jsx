import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>

    <nav>
        <div className='flex justify-between bg-gray-800 text-white text-4xl p-5'>
            <div>
                <NavLink className={({isActive}) => 
                    ` mx-5 px-5 py-1 rounded-xl ${isActive ? 'bg-blue-400 text-fuchsia-300' : ''} `
                    } to={'home'}>Home</NavLink>
                <NavLink className={({isActive}) => 
                    ` mx-5 px-5 py-1 rounded-xl ${isActive ? 'bg-blue-400 text-fuchsia-300' : ''} `
                    } to={'projects'}>Projects</NavLink>
                <NavLink className={({isActive}) => 
                    ` mx-5 px-5 py-1 rounded-xl ${isActive ? 'bg-blue-400 text-fuchsia-300' : ''} `
                    } to={'work'}>Work</NavLink>
                <NavLink className={({isActive}) => 
                    ` mx-5 px-5 py-1 rounded-xl ${isActive ? 'bg-blue-400 text-fuchsia-300' : ''} `
                    } to={'me'}>About Me</NavLink>
            </div>
            <div>
                <NavLink to={'login'}>Login</NavLink>
                <NavLink to={'signup'}>SignUp</NavLink>
            </div>
        </div>
    </nav>
    
    </>
  )
}

export default Header