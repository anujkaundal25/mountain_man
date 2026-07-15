"use client";

import React from "react";

function Services() {
  const services = [
    {
      id: "01",
      img: "/services/image1.webp", // Replace with your actual image path
      category: "Solutions",
      title: "Real-Time Brands",
      dis: "Brands built as living systems to move at the speed of culture",
    },
    {
      id: "02",
      img: "/services/image1.webp", // Replace with your actual image path
      category: "Solutions",
      title: "Media Acceleration",
      dis: "Unifying intelligence, content, media, and measurement into one performance system",
    },
    {
      id: "03",
      img: "/services/image1.webp", // Replace with your actual image path
      category: "Solutions",
      title: "Marketing Orchestration",
      dis: "We collapse your content supply chain into one AI-powered system",
    },
    {
      id: "04",
      img: "/services/image1.webp", // Replace with your actual image path
      category: "Solutions",
      title: "AI Transformation",
      dis: "AI embedded across your business, from strategy to scale",
    },
  ];

  return (
    <div className="bg-[#EAEAEA] min-h-screen p-20 flex flex-col items-center">
      {/* Header section */}
      <div className="max-w-4xl text-center mb-20">
        <h1 className="text-3xl md:text-4xl font-semibold text-neutral-800 leading-snug">
          Your trusted partner for innovation across four strategic service offerings:
        </h1>
      </div>

      {/* Grid container with staggered alignment */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-start">
        {services.map((item, index) => {
          // Stagger effect: Push even-indexed items down on larger screens
          const isEven = index % 2 !== 0;

          return (
            <div
              key={item.id}
              className={`flex flex-col relative group ${
                isEven ? "lg:translate-y-12" : ""
              }`}
            >
              {/* Giant background number behind the image */}
              <div className="absolute -top-25 right-4 text-[120px] font-black text-white/70 select-none pointer-events-none z-0">
                {item.id}
              </div>

              {/* Image card */}
              <div className="relative z-10 w-full aspect-[4/3] sm:aspect-square overflow-hidden rounded-xl shadow-sm mb-6 bg-neutral-200">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content area */}
              <div className="relative z-10 px-1 text-left">
                <span className="text-sm font-medium text-neutral-500 block mb-2">
                  {item.category}
                </span>
                
                {/* Title & interactive Arrow */}
                <div className="flex items-center justify-between gap-2 mb-3 cursor-pointer group/title">
                  <h2 className="text-xl md:text-2xl font-bold text-neutral-800 transition-colors group-hover/title:text-neutral-600">
                    {item.title}
                  </h2>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-white transition-transform duration-300 group-hover/title:translate-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                </div>

                <p className="text-sm md:text-base text-neutral-600 leading-relaxed font-normal">
                  {item.dis}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;