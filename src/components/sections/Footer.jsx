"use client";

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";

function Footer() {
  const mainLinks = [
    { label: "What We Do", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Work", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Thinking", href: "#" },
    { label: "Connect", href: "#" },
  ];

  const companyLinks = [
    { label: "An S4 Capital Company", href: "#" },
    { label: "Sustainability", href: "#" },
    { label: "Privacy Notice", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Information Security", href: "#" },
    { label: "Ethical Marketing", href: "#" },
    { label: "Modern Slavery", href: "#" },
    { label: "Code of Conduct", href: "#" },
    { label: "Anti-Hate Statement", href: "#" },
    { label: "Accessibility", href: "#" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-[#0a0a0a] text-[#f5f5f5] pt-20 pb-10 px-6 md:px-12 lg:px-20 border-t border-neutral-900 font-sans antialiased">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section: Brand Statement & Newsletter Subscription */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-900">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-semibold block">
              The Mountain Men
            </span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-[1.1] max-w-2xl text-neutral-200">
              Creating digital experiences that scale heights and leave footprints.
            </h2>
          </div>
          
          {/* Integrated Newsletter Input */}
          <div className="lg:col-span-5 flex flex-col justify-end space-y-4">
            <p className="text-sm text-neutral-400">Subscribe to our weekly thinking.</p>
            <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center border-b border-neutral-700 focus-within:border-white transition-colors duration-300 pb-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-transparent text-sm w-full focus:outline-none pr-10 placeholder-neutral-600 text-white"
              />
              <button type="submit" className="absolute right-0 text-neutral-400 hover:text-white transition-colors" aria-label="Subscribe">
                <FiArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Middle Section: Clean Multi-Column Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 py-16">
          
          {/* Col 1: Primary Navigation */}
          <div className="lg:col-span-4 space-y-6">
            <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 font-bold">Navigation</p>
            <nav className="grid grid-cols-2 gap-y-3 gap-x-4">
              {mainLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-base text-neutral-400 hover:text-white transition-colors duration-200 flex items-center group w-fit"
                >
                  <span>{link.label}</span>
                  <FiArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 ml-1 text-neutral-400" />
                </a>
              ))}
            </nav>
          </div>

          {/* Col 2: Corporate Policies */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 font-bold">Governance &amp; Policies</p>
            <nav className="grid grid-cols-2 gap-y-3 gap-x-4">
              {companyLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-neutral-400 hover:text-white transition-colors duration-200 block truncate"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 3: B-Corp & Dynamic CTA Button */}
          <div className="lg:col-span-3 flex flex-col justify-between gap-8 sm:items-end lg:items-start xl:items-end">
            {/* Minimalist CTA Button */}
            <a 
              href="#" 
              className="inline-flex items-center justify-between gap-4 px-6 py-3.5 bg-neutral-900 border border-neutral-800 hover:border-neutral-600 rounded-full group transition-all duration-300 w-full sm:w-52 text-sm font-medium text-neutral-200"
            >
              <span>Reach Out</span>
              <span className="w-6 h-6 rounded-full bg-neutral-800 group-hover:bg-white text-white group-hover:text-black flex items-center justify-center transition-all duration-300">
                <FiArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>

            {/* Premium B-Corp Badge */}
            <div className="flex items-center gap-3 bg-neutral-950 border border-neutral-900 p-3 rounded-xl w-full sm:w-52">
              <div className="bg-white text-black font-extrabold text-sm w-8 h-8 rounded-md flex items-center justify-center tracking-tighter">
                B
              </div>
              <p className="text-[10px] text-neutral-500 tracking-wider uppercase leading-tight font-medium">
                Certified <br /><span className="text-neutral-300">B Corporation</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section: Utilities & Copyright */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-500">
          
          {/* Left: Minimal Social Icons */}
          <div className="flex items-center gap-6 order-2 md:order-1">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="hover:text-white transition-colors duration-200"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Right: Copyright metadata */}
          <div className="flex items-center gap-1.5 order-1 md:order-2 tracking-wide">
            <span>&copy; {new Date().getFullYear()} The Mountain Men. Built with</span>
            <span className="font-bold text-neutral-300 hover:text-white transition-colors duration-200 cursor-pointer">.monks</span>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;