import React, {useEffect, useState} from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'

function Edit({display, setDisplay}) {
    const snap = useSnapshot(state)
    const [fit, setFit]= useState(0)

    useEffect(()=>{
      state.moveX=fit
    },[fit])

  return (
    <div className='aipicker-container' style={{display:display==false?"block":"none"}}>
        <div>
        <label style={{color:"white"}}> Logo Scale </label>
        <input type="range"  min="0.03" max="0.3" step="0.01" value={snap.logoScale}  onChange={(e)=>state.logoScale= e.target.value} style={{width:"100%", backgroundColor:"black", color:"white"}}/>
        </div>
        <span style={{color:"white", marginTop:""}}>Logo Position</span>
        <select id="countries" className="filepicker-label" style={{width:"100%", backgroundColor:"transparent", color:"white",marginTop:"-10px"}}>
  <option selected value="middle" onClick={(e)=>state.logoPosition=e.target.value}>Middle</option>
  {/* <option value="middle" onClick={(e)=>state.logoPosition=e.target.value}>Middle</option> */}
  <option value="bottom" onClick={(e)=>state.logoPosition=e.target.value}>Bottom</option>
  <option value="top" onClick={(e)=>state.logoPosition=e.target.value}>Top</option>
  <option value="left" onClick={(e)=>state.logoPosition=e.target.value}>Left</option>
 
</select>
<span style={{color:"white", marginTop:""}}>Text Position</span>

<select id="countries" className="filepicker-label" style={{width:"100%",backgroundColor:"transparent", color:"white",marginTop:"-10px"}}>
  <option selected value="top" onClick={(e)=>state.textPosition=e.target.value}>Top</option>
  <option value="middle" onClick={(e)=>state.textPosition=e.target.value}>Middle</option>
  <option value="bottom" onClick={(e)=>state.textPosition=e.target.value}>Bottom</option>
  {/* <option value="top" onClick={(e)=>state.textPosition=e.target.value}>Top</option>
  */}
</select>
     



       
    </div>
  )
}

export default Edit