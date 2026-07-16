"use client";

import React from "react";

function TechPartners() {
  const logos = [
    { id: 1, url: "/client/1.jpg", name: "Client 1" },
    { id: 2, url: "/client/2.jpg", name: "Client 2" },
    { id: 3, url: "/client/3.jpg", name: "Client 3" },
    { id: 4, url: "/client/4.jpg", name: "Client 4" },
    { id: 5, url: "/client/5.jpg", name: "Client 5" },
    { id: 6, url: "/client/6.jpg", name: "Client 6" },
    { id: 7, url: "/client/7.jpg", name: "Client 7" },
    { id: 8, url: "/client/8.jpg", name: "Client 8" },
    { id: 9, url: "/client/9.jpg", name: "Client 9" },
    { id: 10, url: "/client/10.jpg", name: "Client 10" },
    { id: 11, url: "/client/11.jpg", name: "Client 11" },
    { id: 12, url: "/client/12.jpg", name: "Client 12" },
    { id: 13, url: "/client/13.jpg", name: "Client 13" },
    { id: 14, url: "/client/14.jpg", name: "Client 14" },
    { id: 15, url: "/client/15.jpg", name: "Client 15" },
    { id: 16, url: "/client/16.jpg", name: "Client 16" },
    { id: 17, url: "/client/17.jpg", name: "Client 17" },
    { id: 18, url: "/client/18.jpg", name: "Client 18" },
    { id: 19, url: "/client/19.jpg", name: "Client 19" },
    { id: 20, url: "/client/20.jpg", name: "Client 20" },
    { id: 21, url: "/client/21.jpg", name: "Client 21" },
    { id: 22, url: "/client/22.jpg", name: "Client 22" },
    { id: 23, url: "/client/23.jpg", name: "Client 23" },
  ];

  // Distribute logos evenly across the two slider lanes
  const firstRowLogos = logos.slice(0, Math.ceil(logos.length / 2));
  const secondRowLogos = logos.slice(Math.ceil(logos.length / 2));

  return (
    <section id="clients"
      style={{ fontFamily: "var(--font-helvetica-now-extended)" }}
      className="bg-[#EAE8E4] w-full py-20 overflow-hidden text-[#232323] border-t border-black/10"
    >
      {/* Top Header Content Row */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-16 px-6 md:px-16 lg:px-24">
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight max-w-5xl leading-[1.15]">
          Our Clients
        </h2>

        {/* Dynamic Interactive CTA Button to match your header style */}
        <button className="group flex items-center cursor-pointer select-none">
          <div className="h-10 w-0 opacity-0 bg-[#232323] text-[#EAE8E4] flex justify-center items-center rounded-l-full overflow-hidden transition-all duration-300 ease-in-out group-hover:w-10 group-hover:opacity-100">
            <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110 fill-none stroke-current" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="h-10 px-5 bg-[#232323] text-[#EAE8E4] text-xs font-bold tracking-widest uppercase flex items-center transition-all duration-300 group-hover:rounded-none rounded-l-full rounded-r-none group-hover:bg-black">
            Partnerships
          </span>
          <div className="h-10 w-10 opacity-100 bg-[#232323] text-[#EAE8E4] flex justify-center items-center rounded-r-full overflow-hidden transition-all duration-300 ease-in-out group-hover:w-0 group-hover:opacity-0">
            <svg className="w-3.5 h-3.5 fill-none stroke-current" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
      </div>

      {/* Sliders Container Group */}
      <div className="flex flex-col gap-8 w-full relative">
        {/* Soft edge blending gradients for premium look */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#EAE8E4] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#EAE8E4] to-transparent z-10 pointer-events-none" />

        {/* ROW 1: Slides Left to Right (Interactions handle the hover state toggle) */}
        <div className="pause-marquee overflow-hidden w-full flex">
          <div className="flex gap-12 shrink-0 animate-marquee-right items-center pr-12">
            {/* Render items twice consecutively to establish infinite seamless loop backing */}
            {[...firstRowLogos, ...firstRowLogos].map((logo, index) => (
              <div
                key={`row1-${logo.id}-${index}`}
                className="w-40 h-28 flex items-center justify-center shrink-0  transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Slides Right to Left */}
        <div className="pause-marquee overflow-hidden w-full flex mt-10">
          <div className="flex gap-12 shrink-0 animate-marquee-left items-center pr-12">
            {[...secondRowLogos, ...secondRowLogos].map((logo, index) => (
              <div
                key={`row2-${logo.id}-${index}`}
                className="w-40 h-28 flex items-center justify-center shrink-0 transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechPartners;