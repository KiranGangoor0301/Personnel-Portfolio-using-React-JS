import React from 'react'
import {MdOutlineKeyboardDoubleArrowRight} from 'react-icons/md'

const Home = () => {
  return (
    <div name="Home" className='h-screen w-full bg-gradient-to-b  from-black via-black to-gray-800'>
        <div className='max-w-screen mx-auto flex flex-col items-center justify-center h-full md:flex-row'>
            <div className='flex flex-col justify-center items-center h-full'>
                <h2 className='md:mt-32 text-4xl sm:text-7xl font-bold text-white text-center md:w-[650px]'>A Web Developer from India</h2>
                <p className='text-gray-500 py-8 max-w-md'>
                    I have a 1 year of experience in the field of Web Development.
                    Currently, I love to work on web Development using technologies like React,Tailwind,Django,JS and Android Development
                </p>
           <div>
            <button className='group text-white w-fit px-6 py-3 my-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>Portfolio 
                <span className='group-hover:rotate-90 duration-200'><MdOutlineKeyboardDoubleArrowRight size={25} className="ml-1"/></span>
            </button>
            </div>
            </div>
   
    </div>
    </div>
  )
}

export default Home
