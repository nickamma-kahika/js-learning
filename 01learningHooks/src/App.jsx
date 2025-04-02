import { useState } from 'react'
import './App.css'
import SignIn from '/src/components/SignIn'
import Navbar from '/src/components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    if (count < 20){
      setCount(count => count + 1);
      setCount(count => count + 1);
      setCount(count => count + 1);
      setCount(count => count + 1);
    } 
      
  }

  const subtractValue = () => {
    if (count > 0) setCount(count - 1);
  }

  return (
    <>
      {/* <Navbar />
      <SignIn /> */}
      <h1 className = 'font-bold underline'> Count = {count}</h1>
      <button onClick={addValue}
      >Add</button>
      <br />
      <br />
      <button onClick={subtractValue}>Subtract</button>
    </>
  )
}

export default App
