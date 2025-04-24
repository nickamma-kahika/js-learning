import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import logo from './../../components/Logo/javascript-logo-javascript-icon-transparent-free-png.webp'

const Header = () => {
    const navigate = useNavigate()
    const { signOut } = useAuth()

    const handleSignOut = async () => {
        try {
            await signOut()
            navigate('/login')
        } catch (error) {
            console.error('Error signing out:', error)
        }
    }

    const navlinks = [
        {
            name: 'Home',
            link: '/home',
            activeStatus: true
        },
        {
            name: 'About',
            link: '/about',
            activeStatus: true
        },
        {
            name: 'Projects',
            link: '/projects',
            activeStatus: true
        }
    ]

    return (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="h-10 w-10" />
                    </div>

                    <nav className="flex space-x-4">
                        {navlinks.map((item) =>
                            item.activeStatus ? (
                                <button
                                    key={item.name}
                                    onClick={() => navigate(item.link)}
                                    className="text-gray-700 hover:text-[#D2B62A] px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    {item.name}
                                </button>
                            ) : null
                        )}
                        <button
                            onClick={handleSignOut}
                            className="bg-[#D2B62A] text-white hover:bg-[#FCD724] px-4 py-2 rounded-md text-sm font-medium"
                        >
                            Sign Out
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header