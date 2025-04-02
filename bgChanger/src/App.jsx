import { useState } from 'react'
import './App.css'
import ColorButton from "/src/components/ColorButton"

function App() {
  const [color, setColor] = useState("#212121")

  return (
    <div className="w-full h-screen duration-200 flex justify-center" style={{backgroundColor : color}}>
      
      <div className="w-250 h-20 flex flex-row bg-white border-2 rounded-full fixed bottom-10 justify-center items-center">

      <ColorButton color="Red" onClick={() => setColor("Red")} />
      <ColorButton color="Green" onClick={() => setColor("Green")} />
      <ColorButton color="Lavender" onClick={() => setColor("Lavender")} />
      <ColorButton color="Purple" onClick={() => setColor("Purple")} />
      <ColorButton color="Orange" onClick={() => setColor("Orange")} />
      <ColorButton color="Grey" onClick={() => setColor("Grey")} />
      <ColorButton color="Black" onClick={() => setColor("Black")} />
      <ColorButton color="olive" onClick={() => setColor("olive")} />

      </div>
      
    </div>
  )
}

export default App
