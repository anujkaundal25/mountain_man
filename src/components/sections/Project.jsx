"use client";

import React, { useRef, useEffect } from 'react';

function Heilight() {
  const trackRef = useRef(null);

  const capabilities = [
    "/project/1.jpg", "/project/2.jpg", "/project/3.jpg", "/project/4.jpg", "/project/5.jpg",
    "/project/6.jpg", "/project/7.jpg", "/project/8.jpg", "/project/9.jpg", "/project/10.jpg",
    "/project/11.jpg", "/project/13.jpg", "/project/14.jpg", "/project/15.jpg",
    "/project/16.jpg", "/project/17.jpg", "/project/18.jpg", "/project/19.jpg", "/project/20.jpg",
    "/project/21.jpg", "/project/22.jpg", "/project/23.jpg", "/project/24.jpg", "/project/25.jpg",
    "/project/26.jpg", "/project/27.jpg", "/project/28.jpg", "/project/29.jpg", "/project/30.jpg",
    "/project/31.jpg", "/project/32.jpg", "/project/33.jpg", "/project/34.jpg", "/project/35.jpg",
    "/project/36.jpg", "/project/37.jpg", "/project/38.jpg", "/project/39.jpg", "/project/40.jpg",
    "/project/41.jpg", "/project/42.jpg", "/project/43.jpg", "/project/44.jpg", "/project/45.jpg",
    "/project/46.jpg"
  ];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleWheel = (e) => {
      const isScrollingRight = e.deltaY > 0;
      const isScrollingLeft = e.deltaY < 0;
      
      // Check if there is still room to scroll horizontally
      const canScrollRight = track.scrollLeft < (track.scrollWidth - track.clientWidth - 1);
      const canScrollLeft = track.scrollLeft > 1;

      if ((isScrollingRight && canScrollRight) || (isScrollingLeft && canScrollLeft)) {
        // Intercept vertical scroll on the track and slide horizontally instead
        e.preventDefault();
        track.scrollLeft += e.deltaY;
      }
    };

    // Passive: false is required to allow e.preventDefault()
    track.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      track.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <section 
    id='projects'
    className="bg-[#FFAEC9] text-[#2C0C30] select-none py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-10 md:px-20 flex flex-col gap-10 overflow-hidden">
        
        {/* Top: Main Heading */}
        <div className="shrink-0">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight max-w-5xl leading-[1.15]">
            Our Projects
          </h2>
        </div>

        {/* Bottom: Card Track Area (Full width now, sidebar completely removed) */}
        <div className="w-full">
          <div 
            ref={trackRef}
            className="flex gap-6 pb-6 pt-2 px-2 overflow-x-auto scroll-smooth scrollbar-none will-change-transform"
            style={{
              scrollbarWidth: 'none', /* Firefox */
              msOverflowStyle: 'none', /* IE/Edge */
            }}
          >
            {/* Custom CSS class to hide webkit scrollbars */}
            <style jsx global>{`
              .scrollbar-none::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {capabilities.map((item, index) => (
              <div 
                key={index} 
                className="bg-black rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden group w-[290px] md:w-[330px] shrink-0 transform hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative h-full w-full overflow-hidden bg-black">
                  <img 
                    src={item} 
                    alt={`Project ${index + 1}`}
                    className="w-fit h-fit object-cover transform transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Heilight;