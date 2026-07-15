"use client";

import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

function OurMind() {
  const blog = [
    {
      id: 1,
      type: "Report",
      boldTitle: "Unlocking High-Value Users",
      lightTitle: "with Machine Learning",
      time: "2 min",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 2,
      type: "Blog Post",
      boldTitle: "Why Your Customer Lifetime Value Strategy",
      lightTitle: "Hinges on a High-Performance Email Engine",
      time: "5 min",
      image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 3,
      type: "Blog Post",
      boldTitle: "Inside Salesforce Connections 2025",
      lightTitle: "and the Conversational Potential of Agentic AI",
      time: "5 min",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 4,
      type: "Blog Post",
      boldTitle: "Driving Experimentation and AI Innovation",
      lightTitle: "with Amplitude",
      time: "5 min",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 5,
      type: "Blog Post",
      boldTitle: "Experience Centers:",
      lightTitle: "Where Brands Come to Life",
      time: "6 min",
      image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 6,
      type: "Blog Post",
      boldTitle: "Smarter Investments for an Evolving Marketing Landscape:",
      lightTitle: "MMM Meta-Analysis with Monks and TikTok",
      time: "7 min",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=400&auto=format&fit=crop",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({
      x: e.clientX,
      // By using e.clientY directly, the inline style transform handles the upward gap perfectly
      y: e.clientY, 
    });
  };

  return (
    <div
    className="bg-[#EEECE7] min-h-screen px-6 py-16 md:px-20 md:py-24 relative select-none">
      {/* Floating Image Portal */}
      {hoveredIndex !== null && (
        <div
          className="fixed pointer-events-none z-50 w-28 h-20 rounded-lg overflow-hidden shadow-2xl transition-transform duration-200 ease-out hidden md:block"
          style={{
            top: mousePos.y,
            left: mousePos.x,
            // Shifts the image horizontally centered, and pushes it 100% (plus a 15px margin) ABOVE the cursor tip
            transform: "translate(-50%, calc(-100% - 15px))",
          }}
        >
          <img
            src={blog.find((b) => b.id === hoveredIndex)?.image}
            alt="Preview"
            className="w-full h-full object-cover scale-105"
          />
        </div>
      )}

      <div>
        {/* Main Header */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-5xl leading-[1.15]">
          On our minds
        </h2>

        {/* Row Entries */}
        <div className="border-t border-neutral-400">
          {blog.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredIndex(item.id)}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group grid grid-cols-1 md:grid-cols-12 gap-4 py-7 border-b border-neutral-400 items-center px-2 cursor-pointer transition-colors duration-300 hover:bg-neutral-900/5"
            >
              {/* 1. Category Column */}
              <div className="md:col-span-2 text-base font-medium text-neutral-800">
                {item.type}
              </div>

              {/* 2. Title Column (Mix of Sans & Serif fonts) */}
              <div className="md:col-span-6 pr-6">
                <h3 className="text-lg md:text-xl tracking-tight text-neutral-900 leading-snug font-semibold">
                  {item.boldTitle}{" "}
                  <span className="font-serif font-normal text-neutral-600 italic">
                    {item.lightTitle}
                  </span>
                </h3>
              </div>

              {/* 3. Time Column */}
              <div className="md:col-span-2 text-base text-neutral-800">
                <span className="font-bold">{item.time}</span> read
              </div>

              {/* 4. Combined Action Pill */}
              <div className="md:col-span-2 flex items-center justify-start md:justify-end">
                <div className="flex items-center bg-[#1E1E1E] text-white rounded-full p-1 pl-4 pr-1 group-hover:bg-black transition-colors duration-200">
                  <span className="text-xs font-medium tracking-wide mr-2.5">
                    Read now
                  </span>
                  <div className="bg-neutral-800 group-hover:bg-neutral-700 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300">
                    <FaArrowRight className="text-xs group-hover:-rotate-45 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurMind;