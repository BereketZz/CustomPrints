import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import { useSnapshot } from 'valtio'
import{
    headContentAnimation,
    headTextAnimation,
    headContainerAnimation,
    slideAnimation
   

}from '../config/motion'
import { CustomButton } from '../components'

import state from '../store'


function Home() {
    const snap= useSnapshot(state)
  return (
    <AnimatePresence>
        {
            snap.intro && (
                <motion.section className='home' {...slideAnimation('left')}>
                <motion.header {...slideAnimation('down')}>
                    <div  style={{width:"105px", height:"100px", }}>
                    <img src='./brand.png'
                    alt="logo"
                    className='w-8 h-8 object-contain'
                    
                    style={{width:"100%", height:"100%",}}
                    />
                    </div>
                    
                </motion.header>
                <motion.div className='home-content' {...headContainerAnimation}>
                 <motion.div {...headTextAnimation} className='flex flex-col gap-5'>
                    <h1 className='head-text'>
                        Custom <br className='xl:block hidden' /> Prints
                    </h1>
                </motion.div>   
                <motion.div>
                    <p className='max-w-md font-normal text-lightgray-600 text-base' style={{color:"lightgray"}}> 
                        create your unique and exclusive shirt with our brand new 3D customization tool.
                    </p> 
                </motion.div>

                <motion.div>
                    <CustomButton
                     type="filled"
                     title="Get Started for Free"
                     handleClick={()=> state.intro= false}
                     customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                    />
                </motion.div>
                  
                </motion.div>

                </motion.section>
            )
        }

    </AnimatePresence>
    
  )
}

export default Home
