import React from 'react'
import CustomButton from './CustomButton'
import music from "/music.png"

import three from "/threejs.png"
import cat from "/cat.png"
import cross from "/cross.png"
import moon from "/moon.png"
import seba from "/seba.png"
import fibe from "/fibe.png"
import iron from "/iron.png"
import bike from "/bike.png"



import { useSnapshot } from 'valtio'
import state from '../store'

function AIpicker({file,setFile, readFile}) {
  const snap= useSnapshot(state)
  return (
    <div className='aipicker-container'>
     
     <div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
      <img src={music} width={50} height={50} onClick={()=>state.logoDecal=music} />
      <img src={moon} width={50} height={50} onClick={()=>state.logoDecal=moon} />
      <img src={three} width={30} height={30} onClick={()=>state.logoDecal=three} />

      
     </div>
     <div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
      <img src={seba} width={50} height={50} onClick={()=>state.logoDecal=seba} />
      <img src={bike} width={50} height={50} onClick={()=>state.logoDecal=bike} />
      <img src={iron} width={50} height={50} onClick={()=>state.logoDecal=iron} />

      
     </div>
     <div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
      <img src={fibe} width={50} height={50} onClick={()=>state.logoDecal=fibe} />
      <img src={cross} width={50} height={50} onClick={()=>state.logoDecal=cross} />
      <img src={cat} width={50} height={50} onClick={()=>state.logoDecal=cat} />
      

      
     </div>
     

  
   
    </div>
  )
}

export default AIpicker
