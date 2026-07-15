"use client";

import React, { useState } from "react";

function Form() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#EAEAEA] min-h-screen p-6 md:p-12 lg:p-20 flex items-center justify-center">
      {/* Main Wrapper */}
      <div className="max-w-7xl w-full flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
        {/* Left Column: Heading */}
        <div className="max-w-xl lg:sticky lg:top-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-slate-900 leading-[1.15] tracking-tight">
            Let’s unlock what’s possible together.
          </h1>
        </div>

        {/* Right Column: Hero Elements + Form Card Container */}
        <div className="w-full max-w-2xl flex flex-col gap-8">
          {/* Top Row: Badge & Speech Bubble Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
            {/* Badge */}
            <div className="flex-shrink-0 flex items-center justify-center h-20 w-20 md:h-24 md:w-24 bg-blue-950 text-white text-lg md:text-xl font-bold rounded-full shadow-md">
              <span>.monks</span>
            </div>

            {/* Speech Bubble */}
            <div className="relative bg-blue-600 text-white rounded-2xl p-5 md:p-6 shadow-md w-full">
              {/* Left pointer arrow for desktop/tablet */}
              <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1.5 w-3 h-3 bg-blue-600 rotate-45"></div>
              {/* Bottom pointer arrow for mobile */}
              <div className="block sm:hidden absolute left-8 bottom-0 translate-y-1.5 w-3 h-3 bg-blue-600 rotate-45"></div>

              <h3 className="text-base md:text-lg font-medium leading-relaxed">
                Hey 👋 Please fill out the following quick questions so our team
                can get in touch with you.
              </h3>
            </div>
          </div>

          {/* Form Trigger Action Block */}
          <div className="flex flex-col gap-6">
            <div className="flex justify-center">
              <button
                className="bg-gray-800 hover:bg-gray-900 text-white px-10 py-3 rounded-xl cursor-pointer font-medium transition-colors shadow-sm active:scale-[0.98] transform duration-100"
                onClick={() => setOpen(!open)}
              >
                {open ? "Hide Form" : "Fill Form"}
              </button>
            </div>

            {/* Smooth Transition Container */}
            <div
              className={`grid transition-all duration-500 ease-in-out ${
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
              }`}
            >
              {/* Inner wrapper is required for the grid-row transition to function correctly */}
              <div className="overflow-hidden">
                <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100 mt-2">
                  <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                    {/* Responsive Input Fields Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {/* Name Input */}
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
                        />
                      </div>

                      {/* Email Input */}
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
                        />
                      </div>

                      {/* Phone Input */}
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="(555) 000-0000"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows="4"
                        placeholder="Tell us about your goals..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all duration-200 resize-none"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform active:scale-[0.99]"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;