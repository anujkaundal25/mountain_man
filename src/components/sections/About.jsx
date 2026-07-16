import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function AboutSection() {
  return (
    <div
      style={{ fontFamily: "var(--font-helvetica-now-extended)" }}
      className="bg-[#EAEAEA]"
      id="about"
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
                Read More
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
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight max-w-5xl leading-[1.15]">
            The{" "}
            <span className="relative inline-block px-2 sm:px-4 font-normal italic">
              Mountain
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
            Men
          </h2>
          <p className="text-lg tracking-tight max-w-5xl leading-[1.15]">The Mountain Men is a dedicated team of raconteurs, philosophers, cinema enthusiasts, and nature lovers that understands your requirements and delivers complete satisfaction. We provide not only what is promised, but also the thoughtful details beyond expectations — and that is what makes us different.</p>

          {/* Narrative Paragraphs */}
          <div id="team" className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 max-w-4xl text-gray-8xl text-base md:text-lg font-light leading-relaxed">
            <div className="space-y-2">
              <img src="/about/team1.jpg" alt="" />
              <h3 className="font-semibold">Deepak Malhotra</h3>
              <h4>(Director)</h4>
              <p className="text-lg tracking-tight max-w-5xl">
                A multi talented personality with an extensive on and off field
                production experience from the industry of more than 10 years,
                Deepak has been handling the projects with a perfection nobody
                could match. A humble with a sharp mind personality taking the
                organization to a new height.
              </p>
            </div>
            <div className="space-y-2">
              <img src="/about/team2.jpg" alt="" />
              <h3 className="font-semibold">Gaurav Gairola</h3>
              <h4>(Director)</h4>
              <p className="text-lg tracking-tight max-w-5xl">
                An experienced mountaineer and seasoned traveller who has been to the core of Uttarakhand to live and experience the roots. With an experience of local know-hows, folklores and tradition, he has been working closely with the state tourism board to promote and advertise the tradition and beauty of Uttarakhand, especially, making documentaries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
