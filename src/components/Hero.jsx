import React from 'react'
import { ReactTyped } from "react-typed";
import p1 from '../Images/Anti-money laundering (1).png';
import p2 from '../Images/cyber.png';
import { brandsLogo } from '../data/brands';
import Slider from "./Slider";
const Hero = () => {
  return (
    <section className='   text-left mt-0 items-start flex-col text-white grid md:grid-cols-2'>
         
      <div><h1
              className='text-4xl font-extrabold mt-20 ml-28 leading-[1.15] text-[#42aecc] sm:text-6xl'
          >FIC: Digital Compliance
         
          </h1>
          <br/>
          <ReactTyped
          className=' ml-24 md:text-3xl sm:text-2xl text-xl font-bold md:pl-4 pl-2'
            strings={['Pay Per Check', 'No Bundle Fees', 'Real-time Background Checks']}
            typeSpeed={20}
            backSpeed={100}
            loop
          />
          <h2 className='content-start mt-5 ml-28 text-gray-400'>Remain Compliant and safeguard your business through thorough business verifications</h2>
          <a href="/contact" className='mx-auto mt-12 flex space-x-4 btn bg-[#42aecc] hover:bg-gray-400 rounded-full max-w-fit border px-5 py-2 text-sm font-medium shadow-sm border-[#42aecc]'>Get Started</a>
          
      </div>
      <img className='  w-[800px] h-[500px] mx-auto hidden lg:block' src={p2} alt='/' />
      <div className=''>

     
               </div>
    </section>
  )
}

export default Hero
