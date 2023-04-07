import React from 'react'
import { useState } from 'react';
import {FaBars,FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'
const NavBar = () => {
    const [nav,setNav]=useState(false); 
    const Navbar=[
        {
            id:1,
            link:"Home"
            
        },
        {
            id:2,
            link:"about"
        },
        {
            id:3,
            link:"portfolio"
        },
        {
            id:4,
            link:"experience"
        },
        {
            id:5,
            link:"Contact"
        },
        {
            id:6,
            link:"Connect"
        },
    ]
  return (

    <div className='flex justify-between  items-center w-full h-20 px-4 
     text-2xl
    text-white bg-black md:fixed'>
 <div>
    <h1 className='text-5xl  font-signature ml-2'>Kiran</h1>
    </div>
    <ul className='hidden md:flex'>
        {
            Navbar.map(({id,link})=>
        <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
            <Link to={link} smooth duration={500}>{link}</Link>
        </li>
        )
        }
    </ul>
<div onClick={()=>

    setNav(!nav) 
} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
    {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
    </div>
{nav && (
<ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-800 to-black'>
{
            Navbar.map(({id,link})=>
    <li key={id} className='px-4 cursor-pointer capitalize text-4xl py-6'>
        <Link to={link} smooth duration={500}>{link}</Link>
    </li>
     )
    }
  
</ul>
)}

    </div>
  )
}

export default NavBar
