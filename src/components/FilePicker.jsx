import React, { useState } from 'react'
import CustomButton from './CustomButton'
import { useSnapshot } from 'valtio'
import state from "../store"

function FilePicker({file,setFile, readFile,display, setDisplay}) {
  const snap= useSnapshot(state)
  const[text, setText]= useState("")

  return (
    <div className='filepicker-container' style={{display:display==false?"block":"none"}}>
      <div className='flex-1 flex flex-col'>
        <input
         id="file-upload"
         type="file"
         accept="image/*"
         onChange={(e)=>setFile(e.target.files[0])}
        
        />
        <label  htmlFor='file-upload'class=" inline-flex justify-center hover:text-gray-900 items-center py-1 px-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"  style={{ width:"100%"}}>
         Upload File
        </label>
        <p className='mt-2 text-gray-200 text-xs truncate'>
          {
            file == '' ? "No file Selected":file.name
          }

        </p>  

        <input type="text" placeholder='Your word..' style={{border:"1px solid white",color:"white",borderRadius:"5px", padding:"5px", marginTop:"10px", marginBottom:"5px" , outline:"none", backgroundColor:"transparent"}} value={snap.text} onChange={(e)=>state.text=e.target.value} /> 
         <div style={{display:"flex", alignItems:"center",justifyContent:"start", width:"100%"}}>
           <div style={{backgroundColor:"white", width:"15px", height:"15px",borderRadius:"2px"}} onClick={()=>state.textColor="white"}></div>
           <div style={{backgroundColor:"black", width:"15px", height:"15px", marginLeft:"10px", borderRadius:"2px" }} onClick={()=>state.textColor="black"} ></div>
           <div style={{backgroundColor:"green", width:"15px", height:"15px",marginLeft:"10px",borderRadius:"2px"}} onClick={()=>state.textColor="green"}></div>
           <div style={{backgroundColor:"blue", width:"15px", height:"15px",marginLeft:"10px",borderRadius:"2px"}} onClick={()=>state.textColor="blue"}></div>
           
         </div> 
         <div style={{color:"white", marginTop:"10px"}}>
        <label style={{color:"white", marginTop:""}}> Font Size </label>
        <input type="range"  min="0.03" max="0.3" step="0.01" value={snap.textScale}  onChange={(e)=>state.textScale= e.target.value} style={{width:"100%", backgroundColor:"black"}}/>
        </div>
         





      </div>

      <div className='mt-4 flex flex-wrap gap-3'>
      <button handleClick={()=>readFile('logo')} style={{width:"100%"}} class=" inline-flex justify-center hover:text-gray-900 items-center py-1 px-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Apply
            </button>  
        {/* <CustomButton
      
        type="outline"
        title="Apply"
        
        customStyles="text-xs"
        />
       <CustomButton
        type="filled"
        title="full"
        handleClick={()=>readFile('full')}
        customStyles="text-xs"
        /> */}
      </div>
    </div>
  )
}

export default FilePicker