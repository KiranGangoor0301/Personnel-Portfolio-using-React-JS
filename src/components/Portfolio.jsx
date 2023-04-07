import React from 'react'
import  song from '../assets/Portfolio/song.jpeg';
import  chat from '../assets/Portfolio/chat.jpeg';
import  code from '../assets/Portfolio/code.jpeg';
import  tic from '../assets/Portfolio/tic.png';
import  zomato from '../assets/Portfolio/zomato.png';
import  clock from '../assets/Portfolio/clock.jpeg'

const Portfolio = () => {
   const portfolio=[
    {
        id:1,
        src:song,
        name:'A Song App',
        size:200,
        link:'https://github.com/KiranGangoor0301/A-Song-App/tree/main/A%20Song%20App'
    },
    {
        id:2,
        src:chat,
        name:'A two side Chat App',
        size:200,
        link:'https://github.com/KiranGangoor0301/A-Chat-App-using-Node-and-Socket-io'
    },
    {
        id:3,
        src:code,
        name:'QR Code Generator',
        size:200,
        link:'https://github.com/KiranGangoor0301/QR-Code-Generator-using-JS/tree/main/QRCodegenerator'
    },
    {
        id:4,
        src:clock,
        name:'A Digital Clock',
        size:200,
        link:'https://github.com/KiranGangoor0301/A-Digital-CLock-using-JS/tree/main/digitalclock'
    },
    {
        id:5,
        src:tic,
        name:'Tic Tac Toe',
        size:200,
        link:'https://github.com/KiranGangoor0301/Tic-Tac-Toe-using-HTML-CSS-JS-/tree/main/Tic%20toc%20toe',
    },
    {
        id:6,
        src:zomato,
        name:'Zomato',
        size:200,
        link:'https://github.com/KiranGangoor0301/Zomato-Clone-using-Tailwind-CSS',
    },
   
   ]
  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white h-full md:h-full'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center md:w-[800px]  w-full md:h-full '>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6'>Check out some of my work</p>

        </div>


        <div className='grid sm:grid-col-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
        {
            portfolio.map(({id,src,name,size,link})=>
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="" height={size} width={size} className='rounded-md duration-200 hover:scale-105' />
                <p className='text-center mt-4'>{name}</p>
                <div className='flex items-center justify-center'>
                    <a href={link}><button  className='w-1/2 px-6 py-3 m-4 duration-200>Code'>Code</button></a>
                </div>
            </div>
            )}
      </div>
            </div>
    </div>
  )
}

export default Portfolio
