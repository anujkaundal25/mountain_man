"use client"

import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function OurMind() {
  const blog = [
    {
      id: 1,
      type: "Report",
      title: "Unlocking High-Value Users with Machine Learning",
      time: "2 min",
    },
    {
      id: 2,
      type: "Blog Post",
      title:
        "Why Your Customer Lifetime Value Strategy Hinges on a High-Performance Email Engine",
      time: "5 min",
    },
    {
      id: 3,
      type: "Blog Post",
      title:
        "Inside Salesforce Connections 2025 and the Conversational Potential of Agentic AI",
      time: "5 min",
    },
    {
      id: 4,
      type: "Blog Post",
      title: "Driving Experimentation and AI Innovation with Amplitude",
      time: "5 min",
    },
    {
      id: 5,
      type: "Blog Post",
      title: "Experience Centers: Where Brands Come to Life",
      time: "6 min",
    },
  ];
  return (
    <div className="bg-[#EAEAEA] p-20">
      <div>
        <h1 className="text-4xl md:text-6xl font-semibold text-center md:text-left">
          On our minds
        </h1>
        <div className="pt-10">
          {blog.map((item) => (
            <div
              key={item.id}
              className="group grid grid-cols-1 md:grid-cols-12 gap-4 py-6 border-b border-gray-800 items-center px-2 cursor-pointer
            hover:bg-[#eae7e0]/50 hover:shadow-xl hover:shadow-black/10 hover:scale-[1.015]
              transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              {/* 1. Category Column */}
              <div className="md:col-span-2 text-sm font-semibold text-black">
                {item.type}
              </div>

              {/* 2. Title Column (Mix of Sans & Serif fonts) */}
              <div className="md:col-span-6 pr-4">
                <h3 className="text-lg tracking-tight leading-snug">
                  <span className="font-semibold text-gray-700">
                    {item.title}{" "}
                  </span>
                </h3>
              </div>

              {/* 3. Time Column */}
              <div className="md:col-span-2 text-sm text-neutral-800">
                <span className="font-bold">{item.time}</span> read
              </div>

              {/* 4. Actions (Read Now + Arrow) */}
              <div className="md:col-span-2 flex items-center justify-start md:justify-end gap-1.5 mt-2 md:mt-0">
                {/* Read Now Pill */}
                <button className="bg-[#222222] hover:bg-[#333333] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-150">
                  Read now
                </button>

                {/* Circular Arrow Button */}
                <button
                  className="bg-[#222222] hover:bg-[#333333] text-white w-9 h-9 rounded-full flex items-center justify-center transition-all duration-150"
                  aria-label="Read more"
                >
                  <FaArrowRight className="group-hover:-rotate-45 transition-all duration-300"/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurMind;
