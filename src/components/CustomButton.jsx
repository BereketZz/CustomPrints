import React from 'react'
import state from '../store'
import { useSnapshot } from 'valtio'
import { getContrastingColor } from '../config/helpers'
import { Link } from 'react-router-dom'

function CustomButton({type, title, customStyles, handleClick, toward}) {
    const snap= useSnapshot(state)
    const generateStyle= (type)=>{
        if(type=="filled"){
            return{
                backgroundColor:snap.color,
                color:getContrastingColor(snap.color)
            }
        }else if(type=="outline"){
          return{
            borderWidth:"1px",
            borderColor:snap.color,
            color:snap.color
          }
        }
    }
  return (
    <div>
      <Link to={toward}>
      <button className={`px-7 py-5 flex-1 rounded-md ${customStyles} `} style={ generateStyle(type)} onClick={handleClick}>
       {title}
      </button>
      </Link>
      
      
      
    </div>
  )
}

export default CustomButton
