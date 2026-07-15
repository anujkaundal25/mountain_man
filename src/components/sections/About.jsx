import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function AboutSection() {
  return (
    <div
      style={{ fontFamily: "var(--font-helvetica-now-extended)" }}
      className="bg-[#EAEAEA]"
    >
      {/* SECTION: About The Mountain Man */}
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] max-w-7xl mx-auto gap-8 md:gap-10 items-start px-6 py-16 md:p-20 border-t border-black/10">
        
        {/* Left Column (Label + Sidebar Branding + Action Button) */}
        <div className="flex flex-col gap-6 md:gap-16 items-start h-full md:sticky md:top-10">
          <div className="flex flex-col gap-2 w-full">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-800 pb-2 border-b-2 border-black w-fit">
              Our Story
            </p>
            {/* Optimized Brand Heading: Stacks clean on mobile, rotates gracefully on desktop */}
          </div>

          {/* Micro-interaction Button */}
          <div className="flex justify-start items-center group cursor-pointer w-fit mt-2 md:mt-0">
            {/* Left Arrow: Smooth expand & fade in */}
            <div className="h-11 w-0 opacity-0 bg-[#1E1E1E] text-[#EAEAEA] flex justify-center items-center rounded-full overflow-hidden transition-all duration-300 ease-in-out group-hover:w-11 group-hover:opacity-100">
              <FaArrowRight className="text-xs" />
            </div>

            {/* Main Button Component */}
            <div className="px-6 h-11 w-fit bg-[#1E1E1E] text-[#EAEAEA] flex justify-center items-center rounded-full z-10 transition-transform duration-300">
              <button className="pointer-events-none text-xs font-medium whitespace-nowrap">
                Read full chronicle
              </button>
            </div>

            {/* Right Arrow: Smooth shrink & fade out */}
            <div className="h-11 w-11 opacity-100 bg-[#1E1E1E] text-[#EAEAEA] flex justify-center items-center rounded-full overflow-hidden transition-all duration-300 ease-in-out group-hover:w-0 group-hover:opacity-0">
              <FaArrowRight className="text-xs" />
            </div>
          </div>
        </div>

        {/* Right Column (Hero Statement & Core Copy) */}
        <div className="flex flex-col gap-8 md:gap-12 w-full items-start">
          {/* Main Statement */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-5xl leading-[1.15] text-black">
            Forged in the wilderness, built for the modern{" "}
            <span className="relative inline-block px-2 sm:px-4 font-normal italic">
              explorer
              {/* Hand-drawn SVG Oval overlay */}
              <svg
                className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[150%] pointer-events-none stroke-[#1F1F1F] fill-none"
                viewBox="0 0 100 40"
                preserveAspectRatio="none"
              >
                <path
                  d="M5,20 C15,5 85,3 95,15 C102,25 75,37 45,38 C20,39 2,30 8,18"
                  strokeWidth="0.75"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          {/* Narrative Paragraphs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 max-w-4xl text-gray-8xl text-base md:text-lg font-light leading-relaxed">
            <p>
              The Mountain Man was born out of a raw necessity for gear that outlasts the elements. We don't believe in cutting corners, mass production, or temporary fixes. Every piece we curate or construct is designed to endure the highest peaks and the toughest conditions.
            </p>
            <p>
              Bridging traditional, rugged craftsmanship with advanced functional design, we provide the modern adventurer with reliability they can depend on blindly. Whether you are scaling alpine rock faces or navigating the concrete jungle, our mission remains unchanged: prepare you for the frontier ahead.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutSection;