import React from 'react'
import html from '../assets/html.png';
import css from '../assets/css.png';
import github from '../assets/github.png';
import C from '../assets/C.jpeg';
import javascript from '../assets/javascript.png';
import django from '../assets/django.png';
import node from '../assets/node.png';
import tailwind from '../assets/tailwind.png';
import th from '../assets/th.jpeg';
import firebase from '../assets/firebase.jpeg';
import express from '../assets/express.jpeg';
import react from '../assets/react.png';
import meter1 from '../assets/meter1.svg'
import meter2 from '../assets/meter2.svg'
import meter3 from '../assets/meter3.svg'

const Experience = () => {
    const Experience=[
        {
            id:1,
            src:html,
            name:'HTML',
            style:'shadow-orange-500',
            meter:meter1
        },
        {
            id:2,
            src:css,
            name:'CSS',
            style:'shadow-blue-500',
            meter:meter1
        },
        {
            id:3,
            src:github,
            name:'GitHub',
            style:'shadow-gray-400',
            meter:meter2
        },
        {
            id:4,
            src:th,
            name:'Python',
            style:'shadow-orange-500',
            meter:meter2
        },
        {
            id:5,
            src:javascript,
            name:'JavaScript',
            style:'shadow-yellow-500',
            meter:meter3
        },
        {
            id:6,
           src:C,
            name:'C',
            style:'shadow-blue-400',
            meter:meter3
        },
        {
            id:7,
            src:node,
            name:'Node Js',
            style:'shadow-pink-400',
            meter:meter3
        },
        {
            id:8,
            src:tailwind,
            name:'Tailwind CSS',
            style:'shadow-sky-400',
            meter:meter1
        },
        {
            id:9,
            src:express,
            name:'Express',
            style:'shadow-gray-300',
            meter:meter1
        },
        {
            id:10,
            src:react,
            name:'React',
            style:'shadow-blue-600',
            meter:meter1
        },
        {
            id:11,
            src:django,
            name:'Django',
            style:'shadow-green-600',
            meter:meter2
        },
        {
            id:12,
            src:firebase,
            name:'firebase',
            style:'shadow-yellow-700',
            meter:meter2
        }
     
    ]
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-full md:h-full'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full  md:w-[900px] text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline md:ml-10'>Experience</p>
                <p className='py-6 md:ml-10'>These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px:0'>

            {Experience.map(({id,src,name,style,meter})=>(

                <div key={id} className={`shadow-md  hover:scale-105 duration-500 py-2 rounded-l ${style}`}>
                    <img src={src} alt=""  className='w-20 mx-auto'/>
                    <p className='mt-4'>{name}</p>
                    <img src={meter} alt="" className='w-[70px] mx-auto' />
                    
                </div>
               
                 ))}
            </div>
        </div>
      
    </div>
  )
}

export default Experience
