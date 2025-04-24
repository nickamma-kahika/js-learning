import React from 'react'
import { useLoaderData } from 'react-router-dom'

function About() {
    const data = useLoaderData()

    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-10'>
            <img
                src={data.avatar_url}
                alt="User Avatar"
                className='w-40 h-40 rounded-full shadow-lg mb-6 border-4 border-blue-500'
            />
            <h1 className='text-4xl font-bold text-gray-800 mb-4'>
                My followers are: <span className='text-blue-500'>{data.followers}</span>
            </h1>
        </div>
    )
}

export default About

export const githubInfo = async () => {
    const response = await fetch("https://api.github.com/users/nickamma-kahika")
    return response.json()
}
