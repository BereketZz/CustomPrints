import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'
import state from '../store'

function ColorPicker({display, setDisplay}) {
  const snap= useSnapshot(state)
  return (
    <div className='absolute left-full ml-3' style={{display:display==false?"block":"none"}}>

      <SketchPicker
      color={snap.color}
     
      onChange={(color)=>state.color=color.hex}
      
      />
    </div>
  )
}

export default ColorPicker