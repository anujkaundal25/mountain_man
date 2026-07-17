"use client";

import React from "react";
import { motion } from "framer-motion";

function Services() {
  const services = [
  {
    id: "01",
    img: "https://images.pexels.com/photos/8063749/pexels-photo-8063749.jpeg",
    category: "Film Location",
    title: "Airport",
    dis: "Modern airport locations with seamless access, efficient logistics, and production-friendly facilities for films, commercials, and travel shoots.",
  },
  {
    id: "02",
    img: "https://images.pexels.com/photos/10876041/pexels-photo-10876041.jpeg",
    category: "Film Location",
    title: "Beaches",
    dis: "Authentic railway stations offering dynamic backdrops, easy accessibility, and versatile settings for cinematic storytelling and commercial productions.",
  },
  {
    id: "03",
    img: "https://images.pexels.com/photos/11471987/pexels-photo-11471987.jpeg",
    category: "Film Location",
    title: "Bridges",
    dis: "Scenic highways, mountain roads, and urban routes that provide breathtaking visuals and flexible filming opportunities across Uttarakhand.",
  },
  {
    id: "04",
    img: "https://images.pexels.com/photos/20260003/pexels-photo-20260003.jpeg",
    category: "Film Location",
    title: "Home & Bungalows",
    dis: "Well-connected helipad locations suitable for aerial sequences, VIP arrivals, action scenes, and efficient crew transportation during production.",
  },
];

  // Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.610, 0.355, 1.000], // Premium cubier-bezier ease-out
      },
    },
  };

  return (
    <div
    className="bg-[#E5E3DF] min-h-screen p-20 flex flex-col items-center overflow-x-hidden mb-10">
      {/* Header section */}
      <div className="w-full text-left mb-20 lg:mb-28">
        <h2 className="text-[20px] sm:text-[32px] md:text-[45px] lg:text-6xl font-black text-neutral-900 tracking-tighter leading-[1.05] max-w-6xl">
          Gallery
        </h2>
      </div>

      {/* Grid container with stagger offset */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20 lg:gap-y-0 w-full max-w-7xl items-start"
      >
        {services.map((item, index) => {
          // Exactly replicate the staggered column offset from your design
          // Column 2 (index 1) and Column 4 (index 3) are pushed down on large screens
          const isStaggered = index % 2 !== 0;

          return (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`flex flex-col relative group w-full ${
                isStaggered ? "lg:translate-y-16" : ""
              }`}
            >
              {/* Giant background number positioned exactly like the image layout */}
              <div className="absolute -top-16 lg:-top-20 right-4 text-[100px] lg:text-[130px] font-black text-white select-none pointer-events-none z-0 tracking-tighter leading-none">
                {item.id}
              </div>

              {/* Image card container */}
              <div className="relative z-10 w-full aspect-[4/3.9] overflow-hidden rounded-[4px] mb-6 bg-neutral-300">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* Content area */}
              <div className="relative z-10 text-left flex flex-col gap-2.5">
                {/* <span className="text-[11px] md:text-[13px] font-semibold text-neutral-800 tracking-wide">
                  {item.category}
                </span> */}
                
                {/* Title & Circle Arrow Row */}
                <div className="flex items-center justify-between gap-3 cursor-pointer group/title">
                  <h2 className="text-[20px] md:text-[23px] font-bold text-neutral-900 tracking-tight leading-snug">
                    {item.title}
                  </h2>
                  <div className="flex-shrink-0 w-[26px] h-[26px] rounded-full bg-neutral-800 flex items-center justify-center text-white transition-all duration-300 group-hover/title:bg-neutral-950 group-hover/title:translate-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>

                <p className="text-[13.5px] md:text-[14.5px] text-neutral-600 font-normal leading-relaxed max-w-[95%]">
                  {item.dis}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Services;