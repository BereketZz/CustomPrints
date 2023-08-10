import React from 'react'
import { useState } from 'react'
import Confetti from 'react-confetti'
import{Link} from "react-router-dom"
import fb from "/fb.png"
import why from "/in.png"


function Order() {
    const[done, setDone]=useState(false)
  return (
    <>
    <div style={{  display:"flex", alignItems:"center", justifyContent:"center", maxWidth:"100vw",height:"100vh",}}> 
{!done && 
<>
<form style={{width:"50%",}}>
    <h2 style={{color:'white', fontSize:"40px", marginTop:"-50px"}}>Fill the order form</h2> <br/>
  <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kaleb Abera" required />
  </div>
  <div class="mb-6">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
    <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='0935675466' required/>
  </div>


<label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Shirt Size</label>
<select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
 
  <option>Small</option>
  <option>Medium</option>
  <option>Large</option>
</select> <br/>
<label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Shirt Type</label>
<select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
 
  <option>Cotton</option>
  <option>Pima Cotton</option>
  <option>Ring-Spun Cotton</option>
</select> <br/>
<label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Printing Company Nearby</label>
<select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
 
  <option>Arbaminch, Mina Printing</option>
  <option>Addis Abeba, Teferi Mekuriya Printing</option>
  <option>Hawassa Kasma, Printing</option>
  
</select> <br/>

<div class="mb-6">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
    <input type="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='1' required/>
  </div>

 <br/>
  <button onClick={()=>setDone(true)} type="submit" class="text-white bg-indigo-800 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-800 dark:hover:bg-indigo-800 dark:focus:ring-blue-800">Submit</button>
  
</form>


</>

}
{ done&&
<>

<div id="alert-additional-content-3" class="p-4 mb-4 text-gray-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800" role="alert">
<Confetti />
  <div class="flex items-center">
    <svg class="flex-shrink-0 w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
    <span class="sr-only">Info</span>
    <h3 class="text-lg font-medium">Order Successfully Completed</h3>
  </div>
  <div class="mt-2 mb-4 text-sm">
    Visit our Shop located @Somewhere after 3 days <br/> <br/>

    Thanks for choosing us
  </div>
  <div class="flex">
    <Link  to="/" type="button" class="text-white bg-indigo-800 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center dark:bg-indigo-800 dark:hover:bg-indigo-800 dark:focus:ring-green-800">
      <svg class="-ml-0.5 mr-2 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
        <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
      </svg>
    
      Back to Home
     
   
    </Link>
  
  </div>
</div>



 </>}

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
    </>


  )
}

export default Order