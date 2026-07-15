"use client"

import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

function HeroSection() {
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
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Capture Every Moment
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 font-medium">
            Discover The Real Time World
          </p>
        </div>
      </div>

      {/* Bottom Indicator (Anchored perfectly at the bottom) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-white text-sm font-semibold tracking-wide animate-bounce">
        <span className="mb-1 opacity-80">Explore More</span>
        <IoMdArrowDropdown className="text-3xl" />
      </div>
    </section>
  );
}

export default HeroSection;