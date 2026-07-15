"use client";

import React from 'react';

function TechPartners() {
  const logos = [
    { name: "Adobe", url: "https://www.monks.com/data/styles/large/s3/2025-08/Adobe.png.webp?VersionId=Z5iZ7r83DuI5PZTwh1yQbs0qdjIY.CPz&itok=-rwGmAmm" },
    { name: "Amazon Ads", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" }, // Placeholder for layout
    { name: "AWS", url: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Google Cloud", url: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" },
    { name: "Google Marketing Platform", url: "https://www.monks.com/data/styles/large/s3/2025-08/GoogleMktPlatform.png.webp?VersionId=_QF51hlsHjSyl8qRBxTT9ttnwbfpt4KJ&itok=Glrj_wka" },
    { name: "Meta", url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
    { name: "NVIDIA", url: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg" },
    { name: "Salesforce", url: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" }
  ];

  return (
    <section
    className="bg-[#EAE8E4] w-full px-6 py-20 md:px-16 lg:px-24 text-[#232323]">
      
      {/* Top Header Row */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-20">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-4xl leading-[1.1]">
          Trusted by industry-leading tech partners to deliver transformative solutions for ambitious brands.
        </h2>
        
        {/* Action Button */}
        <button className="flex items-center gap-3 bg-[#232323] hover:bg-[#3d3d3d] text-white px-5 py-3 rounded-full text-sm font-semibold tracking-wide transition-colors duration-200 shrink-0 group mt-2">
          <span>More on Partnerships</span>
          <div className="bg-white/20 p-1.5 rounded-full group-hover:translate-x-1 transition-transform duration-200">
            <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
        </button>
      </div>

      {/* Grid Layout for Logos */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16 items-center justify-items-center">
        {logos.map((logo, index) => (
          <div 
            key={index} 
            className="w-full max-w-[180px] h-16 flex items-center justify-center transition-all duration-300 transform hover:scale-105 select-none"
          >
            <img 
              src={logo.url} 
              alt={logo.name} 
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>

    </section>
  );
}

export default TechPartners;