import React from 'react'
import {SiInstagram} from 'react-icons/si'
import {BsLinkedin,BsFacebook} from 'react-icons/bs'
import {AiOutlineTwitter,AiOutlineGithub} from 'react-icons/ai'
const Connect = () => {
  return (
    <div name='Connect' className='w-full md:h-full h-full bg-gradient-to-b from-gray-800 to-black p-4 text-white'>
      <div className='w-full md:h-full h-screen mx-auto md:w-800 flex flex-col items-center'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-center '>Connect</p>
        <ul className='text-white flex justify-center items-center  mt-8 mb-4 '>
            <a href="https://instagram.com/_.kirankumar._.0301?igshid=ZDdkNTZiNTM=" className='mx-4 hover:scale-125  duration-700'><li><SiInstagram size={30}/></li></a>
            <a href="https://www.facebook.com/kiran.gangoor.75" className='mx-4 hover:scale-125  duration-700'><li><BsFacebook size={30}/></li></a>
            <a href="https://www.linkedin.com/in/kiran-g-0596ba234" className='mx-4 hover:scale-125  duration-700'><li><BsLinkedin size={30}/></li></a>
            <a href="https://github.com/KiranGangoor0301" className='mx-4 hover:scale-125  duration-700'><li><AiOutlineGithub size={30}/></li></a>
            <a href=" https://twitter.com/i/flow/login"className='mx-4 hover:scale-125  duration-700'><li><AiOutlineTwitter size={30}/></li></a>
            
        </ul>
      </div>
    </div>
  )
}

export default Connect
