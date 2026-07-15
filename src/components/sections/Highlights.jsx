"use client";

import React, { useRef, useEffect, useState } from 'react';

function Heilight() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [maxMove, setMaxMove] = useState(0);
  const [dynamicHeight, setDynamicHeight] = useState("300vh");

  const capabilities = [
    { title: "Brand", description: "Build multidimensional brands for growth.", image: "/expertise/exper1.webp" },
    { title: "Media", description: "Meet your audience across many media moments.", image: "/expertise/exper1.webp" },
    { title: "Data", description: "Transform data to fuel customer experience.", image: "/expertise/exper1.webp" },
    { title: "Technology Services", description: "Transform your business with innovative tech.", image: "/expertise/exper1.webp" },
    { title: "Platforms", description: "Build personalized journeys across owned channels.", image: "/expertise/exper1.webp" },
  ];

  useEffect(() => {
    const calculateDimensions = () => {
      if (!trackRef.current) return;
      
      const totalTrackWidth = trackRef.current.scrollWidth;
      const visibleWidth = trackRef.current.parentElement.offsetWidth;
      const moveDistance = totalTrackWidth - visibleWidth;
      
      setMaxMove(moveDistance);

      const calculatedScrollHeight = window.innerHeight + moveDistance;
      setDynamicHeight(`${calculatedScrollHeight}px`);
    };

    calculateDimensions();
    window.addEventListener('resize', calculateDimensions);
    window.addEventListener('load', calculateDimensions);

    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const totalScrollableHeight = rect.height - window.innerHeight;
      
      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / totalScrollableHeight, 0), 1);
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateDimensions);
      window.removeEventListener('load', calculateDimensions);
    };
  }, []);

  // Softened the scroll transitions so text moves smoothly instead of instantly vanishing
  const headingTranslateY = scrollProgress * -80; 
  const headingOpacity = 1 - scrollProgress * 1.8;  
  const cardsTranslateX = scrollProgress * -maxMove; 

  return (
    <section 
      ref={containerRef} 
      style={{ height: dynamicHeight }}
      className="bg-[#FFAEC9] text-[#2C0C30] relative select-none"
    >
      {/* Container is split into a robust flex column layout */}
      <div className="sticky top-0 h-screen flex flex-col justify-between pt-16 md:pt-20 px-10 md:px-20 pb-16 overflow-hidden">
        
        {/* Top: Main Heading Block */}
        <div 
          style={{ 
            transform: `translateY(${headingTranslateY}px)`, 
            opacity: Math.max(headingOpacity, 0),
            transition: 'transform 0.1s ease-out, opacity 0.1s ease-out'
          }}
          className="will-change-transform shrink-0"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-5xl leading-[1.15]">
            Providing solutions and services that uplift your business and your customers.
          </h2>
        </div>

        {/* Bottom: Sidebar Info + Cards Track Area */}
        <div className="flex flex-col lg:flex-row items-end gap-8 w-full relative mb-4">
          
          {/* Left Side Label (Now anchored directly next to sliding track height) */}
          <div className="lg:w-48 pb-6 shrink-0 flex flex-col items-start relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest opacity-75 mb-1">
              Highlighted
            </span>
            <span className="text-xl font-extrabold leading-tight whitespace-nowrap">
              Our Capabilities
            </span>
            
            {/* Anchored decorative icon badge so it does not drift out of alignment */}
            <div className="hidden lg:block absolute left-28 bottom-[-10px] w-12 h-12 border-r-2 border-b-2 border-[#2C0C30] rounded-br-full transform rotate-[15deg]">
              <div className="absolute right-[-4px] bottom-0 w-2 h-2 bg-[#2C0C30] rotate-45"></div>
            </div>
          </div>

          {/* Right Side Sliding Card Track */}
          <div className="w-full overflow-hidden">
            <div 
              ref={trackRef}
              style={{ 
                transform: `translateX(${cardsTranslateX}px)`,
                transition: 'transform 0.05s ease-out'
              }}
              className="flex gap-6 pb-4 pt-2 px-2 will-change-transform" 
            >
              {capabilities.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden group w-[290px] md:w-[330px] shrink-0 transform hover:-translate-y-1"
                >
                  {/* Text Container */}
                  <div className="p-6 pb-5 flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-[#2C0C30] tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium leading-relaxed text-neutral-600">
                      {item.description}
                    </p>
                  </div>

                  {/* Image Container */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Heilight;