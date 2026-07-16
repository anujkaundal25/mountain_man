"use client"

import React, { useState, useEffect } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

function HeroSection() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide the indicator if the user scrolls down more than 50px
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="https://res.cloudinary.com/vy0ccmly/video/upload/v1784107188/hero-sectio-video_1_g8ersr.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gray-700/50"></div>

      {/* Hero Content (Centered) */}
      <div className="relative z-10 flex h-full items-center justify-center text-center text-white px-4">
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-5xl leading-[1.15]">
            From Vision to Screen, We Make Every Production Possible.
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-200 font-medium">
            Complete line production and filmmaking support across Uttarakhand.
          </p>
        </div>
      </div>

      {/* Bottom Indicator (Fades out smoothly when scrolling down) */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white text-sm font-semibold tracking-wide transition-all duration-500 ease-in-out ${
          isVisible ? "opacity-100 pointer-events-auto animate-bounce" : "opacity-0 pointer-events-none translate-y-2"
        }`}
      >
        <span className="mb-1 opacity-80">Explore More</span>
        <IoMdArrowDropdown className="text-3xl" />
      </div>
    </section>
  );
}

export default HeroSection;