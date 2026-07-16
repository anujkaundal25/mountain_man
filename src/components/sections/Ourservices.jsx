"use client";

import React, { useState } from 'react';

function OurApproach() {
  // Set default to null so they can all start closed, or set to 1 if you want the second item open by default
  const [activeIndex, setActiveIndex] = useState(null);

  const approaches = [
  {
    title: "Lodging Arrangements",
    description:
      "We provide all categories of hotels across Uttarakhand. Be it a luxury or a budget hotel, for celebrity or crew, we provide all types along with special requirements.",
  },
    {
      title: "Recce Services",
      description: "We have a team of experienced people who have thorough demographic, geographic and cultural knowledge of Uttarakhand."
    },
    {
      title: "Permissions",
      description: "We provide complete permissions from local to government authorities, for the smooth transition of all the projects saving time, money and ensuring the safety of cast and crew."
    },
    {
      title: "Transport Services",
      description: "We provide hassle-free and best transport during, pre and post shoot. We use best vehicles for cast, crew, equipment transfers, and airport/station pick up and drop."
    },
    {
      title: "One Stop Equipment Solution",
      description: "We have tie ups with numerous studios and equipment rental houses all over India to meet all the necessary requirements for shoot on-time. Our trusted partners always ensure the timely supply of all the latest equipment."
    },
    {
      title: "Casting",
      description: "Our experienced team of casting directors, model and extra coordinators not only provide professionals locally but also helps in arranging country-wide casting."
    },
    {
      title: "Catering Services",
      description: "We have a team of hard working professionals with magical hands and we have been providing scrumptious food since our first project till date."
    }
  ];

  const handleToggle = (index) => {
    // If the clicked item is already active, close it (set to null). Otherwise, open it.
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="services" className="relative w-full min-h-screen bg-black text-white flex items-center py-20 px-6 md:px-12 lg:px-20 overflow-hidden select-none">
      {/* Background Image / Video Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen pointer-events-none bg-fixed"
        style={{ backgroundImage: `url('https://www.monks.com/data/2025-06/Monks-WWD-GTMs-1.png?VersionId=JCCn023uTS34fuCNZiMzD.4oy0uxGlRC')` }}
      />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        
        {/* Left Column: Heading */}
        <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-24">
          <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight max-w-5xl leading-[1.15]">
            Film Production & Line Production Services in Uttarakhand
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