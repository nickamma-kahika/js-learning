import React from 'react'
import { ThemeProvider } from '../../context/ThemeContext'
import Card from '../CardThemeBtn/Card'
import ThemeButton from '../CardThemeBtn/ThemeButton'

function Home() {




  return (
    <div className='bg-gray-400 h-dvh flex flex-col items-center'>
    <ThemeProvider>
      <h1 className='p-10 text-white'>This is Home Page</h1>
      <ThemeButton />
      <Card/>
    </ThemeProvider>
    </div>
  )
}

export default Home