import React from 'react'
import constraction from "/construction.png"
import { CustomButton } from '../components'

function Learn() {
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", width:"100%", height:"100vh", backgroundColor:"white"}}>
  <h2 style={{fontSize:"30px"}}>This Route is under Construction!</h2>
  <img src={constraction} style={{width:"50%", height:"50%"}}/>
  <CustomButton
                type="filled"
                title="Go Back"
                toward="/"
            />
    </div>
  )
}

export default Learn