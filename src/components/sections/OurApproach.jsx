"use client";

import React, { useState } from 'react';

function OurApproach() {
  // Set default to null so they can all start closed, or set to 1 if you want the second item open by default
  const [activeIndex, setActiveIndex] = useState(null);

  const approaches = [
    {
      title: "Real-Time Brands",
      description: "Stay relevant with ongoing, meaningful experiences that connect and build loyalty."
    },
    {
      title: "Marketing Orchestration",
      description: "Boost efficiency and creativity to accelerate marketing results at any scale."
    },
    {
      title: "Glass Box Media",
      description: "Gain total visibility and control to make smarter, more impactful media investments."
    },
    {
      title: "Technology Services",
      description: "Modernize infrastructure, accelerate product and platform innovation, and deliver next-generation customer experiences."
    }
  ];

  const handleToggle = (index) => {
    // If the clicked item is already active, close it (set to null). Otherwise, open it.
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative w-full min-h-screen bg-black text-white flex items-center py-20 px-6 md:px-12 lg:px-20 overflow-hidden select-none">
      {/* Background Image / Video Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen pointer-events-none"
        style={{ backgroundImage: `url('https://www.monks.com/data/2025-06/Monks-WWD-GTMs-1.png?VersionId=JCCn023uTS34fuCNZiMzD.4oy0uxGlRC')` }}
      />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* Left Column: Heading */}
        <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
          <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold block">
            Our Approach
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight max-w-5xl leading-[1.15]">
            We’re a future-proof partner on the front line of marketing and technology.
          </h2>
        </div>

        {/* Right Column: Interactive FAQ-style Accordion */}
        <div className="lg:col-span-7 flex flex-col w-full border-t border-gray-800">
          {approaches.map((item, index) => {
            const isActive = activeIndex === index;
            
            return (
              <div 
                key={index}
                className="group border-b border-gray-800 py-6 md:py-8 cursor-pointer transition-colors duration-300"
                onClick={() => handleToggle(index)}
              >
                {/* Header Row */}
                <div className="flex items-center justify-between w-full space-x-4">
                  <div className="flex items-center space-x-4">
                    {/* Left Inline Indicator Arrow (Only shows on the active item) */}
                    <div className={`flex items-center justify-center rounded-full bg-white text-black transition-all duration-300 overflow-hidden ${isActive ? 'w-6 h-6 opacity-100' : 'w-0 h-6 opacity-0'}`}>
                      <span className="text-xs font-bold">→</span>
                    </div>
                    
                    <h3 className={`text-3xl font-extrabold tracking-tight max-w-5xl leading-[1.15] transition-colors duration-300 ${isActive ? 'text-white' : 'text-white group-hover:text-gray-300'}`}>
                      {item.title}
                    </h3>
                  </div>

                  {/* Right Circle Arrow (Rotates down when active) */}
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${isActive ? 'border-white bg-transparent opacity-100' : 'border-gray-700 opacity-40 group-hover:opacity-100 group-hover:border-gray-400'}`}>
                    <span className={`text-xs font-extrabold tracking-tight max-w-5xl leading-[1.15]    transition-transform duration-300 ${isActive ? 'rotate-90' : 'rotate-0'}`}>
                      →
                    </span>
                  </div>
                </div>

                {/* Smooth Expandable Description */}
                <div className={`grid transition-all duration-300 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                  <div className="overflow-hidden">
                    <p className="text-sm md:text-base text-white max-w-2xl leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default OurApproach;