import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <NavLink to='/' className='bg-gray-800 text-white'>React router</NavLink>
    </div>
  )
}

export default App
