import React, {useEffect, useState} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useSnapshot } from 'valtio'
import config from '../config/config'
import state from '../store'
import { downloadCanvasToImage, reader } from '../config/helpers'
import { EditorTabs, FilterTabs, DecalTypes } from '../config/constants'
import { fadeAnimation, slideAnimation } from '../config/motion'
import { AIpicker, ColorPicker, FilePicker, CustomButton,Tab } from '../components'
import { download } from '../assets'
function Costomize() {
    const snap= useSnapshot(state)

    const [file, setFile]= useState('')
    const[prompt, setPrompt]= useState('')
    const[generatingImg, setGeneratingImg]= useState(false)
    const[activeEditorTab, setActiveEditorTab]= useState("")
    const[activeFilterTab, setActiveFilterTab]= useState({
      logoShirt:true,
      stylishShirt:false
    })


    // show tab content depending on beign active or not
    const generatTabContent=()=>{
      switch(activeEditorTab){
        case "colorpicker":
         return <ColorPicker/>
        case "filepicker":
          return <FilePicker
          file={file}
          setFile={setFile}
          readFile={readFile}
          />
        case "aipicker":
          return <AIpicker
           prompt={prompt}
           setPrompt={setPrompt}
           generatingImg={generatingImg}
           handleSubmit={handleSubmit}
          
          />
        default:
          return null    
          
      }

    }
    const handleSubmit= async (type)=>{
      if(!prompt) return alert("please enter a prompt")
      try{
       setGeneratingImg(true)
       const response= await fetch('http://localhost:4000/api/v1/dalle',{
        method:"POST",
        headers:{
          'content-type':'application/json'

        },
        body:JSON.stringify({
          prompt,
        })

       })
       const data= await response.json()
       console.log("the photo is :"+ data)
       handleDecals(type, `data:image/png;base64,${data.photo}`)
      }catch(error){
     alert(error)
      }finally{
        setGeneratingImg(false)
        setActiveEditorTab("")

      }
    }
    const handleDecals=(type,result)=>{
      const decalType= DecalTypes[type]
      state[decalType.stateProperty]= result

      if(!activeFilterTab[decalType.filterTab]){
        handleActiveFilterTab(decalType.filterTab)
      }
    }
    const handleActiveFilterTab=(tabName)=>{
      switch(tabName){
        case "logoShirt":
          state.isLogoTexture= !activeFilterTab[tabName]
          break;
         case "stylishShirt":
          state.isFullTexture= !activeFilterTab[tabName] 
          break
         default:
          state.isFullTexture=true
          state.isLogoTexture=false 
          break
      }
      setActiveFilterTab((prevState)=>{
        return{
          ...prevState,
          [tabName]:!prevState[tabName]


        }
      })
    }

    const readFile= (type)=>{
      reader(file)
      .then((result) => {
        handleDecals(type, result);
        setActiveEditorTab("");
      })
    }
  return (
    <AnimatePresence>
    {
        !snap.intro && (
            <>
            <motion.div
            key="custom"
            className='absolute top-0 left-0 z-10'
            {...slideAnimation('left')}
            >
               <div className='flex items-center min-h-screen'>
                <div className='editortabs-container tabs'>
                    {EditorTabs.map(tab=>(<Tab key={tab.name}  tab={tab} handleClick={()=> setActiveEditorTab(tab.name)}/>))}
                    {generatTabContent()}

                </div>

               </div>
            </motion.div>
            <motion.div  className=' absolute z-10  top-5 right-5 ' {...slideAnimation("right")}>
               <CustomButton 
               type="filled"
               title="Go Back"
               handleClick={()=>state.intro = true}
               customStyles={"w-fit px-4 py-2.5 font-bold text-sm"}
               
               />
            </motion.div>
            
            <motion.div className='filtertabs-container' {...slideAnimation("up")}>
            {FilterTabs.map(tab=>(<Tab key={tab.name}  tab={tab} isFilterTab isActiveTab={activeFilterTab[tab.name]} handleClick={()=>handleActiveFilterTab(tab.name)}/>))}
            <button onClick={downloadCanvasToImage}>
              <img src={download} width={40} height={40} />
            </button>
            </motion.div>
            </>
        )
    }
    </AnimatePresence>
  )
}

export default Costomize
