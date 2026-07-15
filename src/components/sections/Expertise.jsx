"use client"

import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

function Expertise() {
  return (
    <div
    className="bg-[#EAEAEA] min-h-screen w-full p-20">
        {/* Top Section: Heading and Grid Wrapper */}
        <div className='max-w-7xl w-auto'>
            <h2 className='text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight max-w-5xl leading-[1.15]'>Our Expertise</h2>
            
            {/* Grid container */}
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 pt-10'>
                {/* Card 1 */}
                <div className='space-y-3 cursor-pointer group'>
                    <div className="overflow-hidden rounded-lg">
                        <img src="https://images.pexels.com/photos/15635398/pexels-photo-15635398.jpeg" alt="" className='w-full h-auto transition-transform duration-500 ease-in-out group-hover:scale-110'/>
                    </div>
                    <p className='text-lg font-semibold'>Case Study</p>
                    <h1 className='flex items-center gap-3 text-2xl font-semibold'> The Marketer’s Playbook<FaArrowRight className="h-7 w-7 p-1 bg-gray-800 text-white rounded-full"/></h1>
                </div>

                {/* Card 2 */}
                <div className='space-y-3 cursor-pointer group'>
                    <div className="overflow-hidden rounded-lg">
                        <img src="https://images.pexels.com/photos/6333933/pexels-photo-6333933.jpeg" alt="" className='w-full h-auto transition-transform duration-500 ease-in-out group-hover:scale-110'/>
                    </div>
                    <p className='text-lg font-semibold'>Case Study</p>
                    <h1 className='flex items-center gap-3 text-2xl font-semibold'>Boomtown Unboxed <FaArrowRight className="h-7 w-7 p-1 bg-gray-800 text-white rounded-full"/></h1>
                </div>

                {/* Card 3 */}
                <div className='space-y-3 cursor-pointer group'>
                    <div className="overflow-hidden rounded-lg">
                        <img src="https://images.pexels.com/photos/12960383/pexels-photo-12960383.jpeg" alt="" className='w-full h-auto transition-transform duration-500 ease-in-out group-hover:scale-110'/>
                    </div>
                    <p className='text-lg font-semibold'>Case Study</p>
                    <h1 className='flex items-center gap-3 text-2xl font-semibold'>CES 2026: From Vision to Velocit <FaArrowRight className="h-7 w-7 p-1 bg-gray-800 text-white rounded-full"/></h1>
                </div>

            </div>
        </div>

        {/* Bottom Section: Centered Text Block */}
        <div className='max-w-5xl mx-auto p-8 md:p-20 space-y-5 flex flex-col justify-center'>
            <p className="text-xl font-semibold text-gray-500">Watch</p>
            <h2 className='text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight max-w-5xl leading-[1.15]'>
                Sir Martin Sorrell shares how brands can use first-party data to achieve personalization at a massive scale.
            </h2>
        </div>
    </div>
  )
}

export default Expertise