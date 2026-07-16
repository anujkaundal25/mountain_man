"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function Expertise() {
  return (
    <div className="bg-[#EAEAEA] min-h-screen w-full p-20">
      {/* Top Section: Heading and Grid Wrapper */}
      <div className="max-w-7xl w-auto">
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight max-w-5xl leading-[1.15]">
          Our Location's
        </h2>
        <p className="text-sm md:text-lg lg:text-xl pt-5 tracking-tight max-w-5xl leading-[1.15]">Key Shooting Locations</p>

        {/* Grid container */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 pt-10">
          {/* Card 1 */}
          <div className="space-y-3 cursor-pointer group">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/27596549/pexels-photo-27596549.jpeg"
                alt=""
                className="w-full h-auto transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            <h1 className="flex items-center gap-3 text-2xl font-semibold">
              Dehradun
              <FaArrowRight className="h-7 w-7 p-1 bg-gray-800 text-white rounded-full" />
            </h1>
          </div>

          {/* Card 2 */}
          <div className="space-y-3 cursor-pointer group">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/2070307/pexels-photo-2070307.jpeg"
                alt=""
                className="w-full h-auto transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            <h1 className="flex items-center gap-3 text-2xl font-semibold">
              Mussoorie
              <FaArrowRight className="h-7 w-7 p-1 bg-gray-800 text-white rounded-full" />
            </h1>
          </div>

          {/* Card 3 */}
          <div className="space-y-3 cursor-pointer group">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/7846563/pexels-photo-7846563.jpeg"
                alt=""
                className="w-full h-auto transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            <h1 className="flex items-center gap-3 text-2xl font-semibold">
              Auli
              <FaArrowRight className="h-7 w-7 p-1 bg-gray-800 text-white rounded-full" />
            </h1>
          </div>

          {/* Card 4 */}
          <div className="space-y-3 cursor-pointer group">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/16060830/pexels-photo-16060830.jpeg"
                alt=""
                className="w-full h-auto transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
            <h1 className="flex items-center gap-3 text-2xl font-semibold">
              Nainital
              <FaArrowRight className="h-7 w-7 p-1 bg-gray-800 text-white rounded-full" />
            </h1>
          </div>
          {/* Button Part */}
          <div className="flex justify-center items-center group cursor-pointer w-fit">
            {/* Left Arrow: Smooth expand & fade in */}
            <div className="h-11 w-0 opacity-0 bg-[#1E1E1E] text-[#EAEAEA] flex justify-center items-center rounded-full overflow-hidden transition-all duration-300 ease-in-out group-hover:w-11 group-hover:opacity-100">
              <FaArrowRight className="text-xs" />
            </div>

            {/* Main Button */}
            <div className="px-6 h-11 w-fit bg-[#1E1E1E] text-[#EAEAEA] flex justify-center items-center rounded-full z-10 transition-transform duration-300">
              <button className="pointer-events-none text-xs font-medium whitespace-nowrap">
                View More Location
              </button>
            </div>

            {/* Right Arrow: Smooth shrink & fade out */}
            <div className="h-11 w-11 opacity-100 bg-[#1E1E1E] text-[#EAEAEA] flex justify-center items-center rounded-full overflow-hidden transition-all duration-300 ease-in-out group-hover:w-0 group-hover:opacity-0">
              <FaArrowRight className="text-xs" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
