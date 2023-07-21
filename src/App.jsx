import { useState } from 'react'
import Home from './pages/Home'
import Costomize from './pages/Costomize'
import Canvas from "./canvas/index"


function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='app transition-all ease-in'>
      <Home/>
      <Canvas/>
      <Costomize/>
    
    </main>
  )
}

export default App
