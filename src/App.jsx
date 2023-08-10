import { useState } from 'react'
import Home from './pages/Home'
import Costomize from './pages/Costomize'
import Canvas from "./canvas/index"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Order from './pages/Order'
import Learn from './pages/Learn'


function App() {
  const [count, setCount] = useState(0)

   function OKay(){
    return(
      <main className='app transition-all ease-in'>
      <Costomize />
      </main>
    )
   }
  
  return (
    <main className=' transition-all ease-in'>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>

    <Route path="/customize" element={<OKay/>} />
    <Route path="/order" element={<Order/>} />
   
    <Route path="/learn" element={<Learn/>} />
  
    
     
     
  </Routes>
  
  </BrowserRouter>
      {/* <Home/>
      
      <Costomize/> */}
    
    </main>
  )
}

export default App
