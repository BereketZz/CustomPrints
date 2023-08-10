import React from 'react'
import cool from "/cool.jpeg"
import see from "/see.png"
import order from "/order.png"
import fb from "/fb.png"
import why from "/in.png"
import td from "/3d.png"
import edit from "/editable.png"
import {motion, AnimatePresence} from 'framer-motion'
import { useSnapshot } from 'valtio'
import { Link } from 'react-router-dom'
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
  
        
         
                <div style={{height:"10px",}}>
                <section class="bg-center bg-no-repeat bg-[url('https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?cs=srgb&dl=pexels-francesco-paggiaro-2294342.jpg&fm=jpg')] bg-gray-700 bg-blend-multiply">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Custom Prints</h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Experience the extraordinary: Design your exclusive shirt using our innovative 3D customization tool at Custom Prints</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link to="/customize" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-indigo-800 hover:bg-indigo-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
            <Link to="/learn" href="#" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Learn more
            </Link>  
        </div>
    </div>
</section> <br/>
<br/>
<div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100%"}}>

<div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 gap-2">
    <motion.div {...slideAnimation('left')} class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r  dark:bg-gray-800 dark:border-gray-700">
       
<a href="#" class="flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 transition ease-in-out delay-150 hover:scale-105 duration-200">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={see} alt="" style={{height:"100%"}}/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Custom Print</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque nam obcaecati nulla praesentium dolorem error!</p>
    </div>
</a>

    </motion.div>
    <motion.div {...slideAnimation('right')} class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
    <a href="#" class="flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 transition ease-in-out delay-150 hover:scale-105 duration-200">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={order} alt="" style={{height:"100%"}}/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Order Remotly</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium expedita veniam ipsum aperiam esse autem.</p>
    </div>
</a>   
    </motion.div>
    <motion.div {...slideAnimation("left")} class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
    <a href="#" class="flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 transition ease-in-out delay-150 hover:scale-105 duration-200">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={td} alt="" style={{height:"70%"}}/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Work With 3D Models</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, architecto explicabo. Iste iure porro quos?</p>
    </div>
</a>   
    </motion.div>
    <motion.div {... slideAnimation("right")} class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
    <a href="#" class="flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 transition ease-in-out delay-150 hover:scale-105 duration-200">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={edit} alt="" style={{height:"90%"}}/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Edit</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda error, aperiam aut id unde optio.</p>
    </div>
</a>  
    </motion.div>
</div>

</div>

<footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center  sm:justify-between">
            <a href="https://flowbite.com/" class="flex aitems-center mb-4 sm:mb-0">
               
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Custom Print</span>
            </a>
            <ul class="flex flex-wrap items-center justify-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={fb} alt="" style={{height:"50px", width:"50px"}}/>
                    </a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">
                    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={why} alt="" style={{height:"40px", width:"40px"}}/>
                    </a>
                </li>
              
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 Custom Print. All Rights Reserved.</span>
    </div>
</footer>



</div>

                // <motion.section className='home' {...slideAnimation('left')} style={{width:"100%"}}>
                // <motion.header {...slideAnimation('down')} style={{ width:"50px", height:"50px", display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"20px", backgroundColor:"red", color:"white" }}>
                //     <div  >
                //     {/* <img src='./brand.png'
                //     alt="CP"
                //     className='w-8 h-8 object-contain'
                    
                //     style={{width:"100%", height:"100%",}}
                //     /> */}
                //     <h2>CP</h2>
                //     </div>
                    
                // </motion.header>
                // <div style={{width:"100%", height:"100%", display:"flex", justifyContent:"center", }}>
                // <motion.div className='home-content' {...headContainerAnimation} >
                //  <motion.div {...headTextAnimation} className='flex flex-col gap-5'>
                //     <h1 className='head-text'>
                //         Custom <br className='xl:block hidden' /> Prints
                //     </h1>
                // </motion.div>   
                // <motion.div>
                //     <p className='max-w-md font-normal text-lightgray-600 text-base' style={{color:"lightgray"}}> 
                //         create your unique and exclusive shirt with our brand new 3D customization tool.
                //     </p> 
                // </motion.div>

                // <motion.div>
                //     <CustomButton
                //      type="filled"
                //      title="Get Started for Free"
                //      handleClick={()=> state.intro= false}
                //      customStyles="w-fit px-4 py-2.5 font-bold text-sm"
                //     />
                // </motion.div>
                  
                // </motion.div>


                // {/* <div style={{width:"50%", height:"100%", display:"flex", justifyContent:"center", alignItems:"center", }}>
                //     <img src="./dog.png"  style={{width:"100%", height:"100%"}}/>
                // </div> */}
                // </div>
                
                
                // </motion.section>
     

 
    
  )
}

export default Home
