import React from 'react'
import { useState } from 'react'

const Contact = () => {
  const [inp,setInp]=useState("")
  return (
    
    <div name='Contact' className='w-full md:h-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto w-full h-full md:w-[800px] '>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
            <p className='py-6'>Submit the form below to get in touch  with me</p>
        </div>
        <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/3be02060-880c-44be-8682-9efc8ad4356d" 
             method='POST' className='flex flex-col w-full md:w=1/2'>
                <input type="text" name="name" placeholder="Enter your name.." className='inp p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' onChange={(event)=>
                {
                  setInp(event.target.value)
                }} />
                <input type="text" name="email" placeholder="Enter your Email.." className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
               <textarea name="message" rows="10"placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
               <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 'onClick={()=>inp===""?alert("Not Possible"):alert("Submitted")}>Let's talk</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
