"use client";

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FiArrowRight, FiPhone, FiMapPin, FiMail } from "react-icons/fi";

function Footer() {
  const mainLinks = [
    { label: "About Us", href: "#" },
    { label: "Team", href: "#" },
    { label: "Services", href: "#" },
    { label: "Our Clients", href: "#" },
    { label: "Gallery", href: "#" },
    { label: "Our Projects", href: "#" },
    { label: "Connect", href: "#" },
  ];

  const companyLinks = [
    { label: "Lodging Arrangements", href: "#" },
    { label: "Recce Services", href: "#" },
    { label: "Permissions", href: "#" },
    { label: "Transport Services", href: "#" },
    { label: "One Stop Equipment Solution", href: "#" },
    { label: "Casting", href: "#" },
    { label: "Catering Services", href: "#" },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: "#", label: "Facebook" },
    { icon: FaTwitter, href: "#", label: "Twitter" },
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: FaInstagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="relative bg-[#0a0a0a] text-[#f5f5f5] pt-20 pb-10 px-6 md:px-12 lg:px-20 border-t border-neutral-900 antialiased overflow-hidden">
      
      {/* Huge Stylized Background Text */}
      <div className="absolute inset-x-0 bottom-16 select-none pointer-events-none text-center z-0 hidden md:block">
        <h2 className="text-[12vw] font-black tracking-tighter uppercase text-neutral-900/30 opacity-30 whitespace-nowrap leading-none">
          Mountain Men
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 4-Column Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 py-16">
          
          {/* Col 1: Brand Logo & About Info */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <span className="text-lg md:text-xl lg:text-2xl font-extrabold tracking-tight max-w-5xl leading-[1.15]">
                Mountain Men Films
              </span>
            </div>
            <p className="text-sm tracking-tight max-w-5xl text-neutral-500">
              The Mountain Men is a dedicated team of raconteurs, philosophers,
              cinema enthusiasts, and nature lovers that understands your
              requirements and delivers complete satisfaction. We provide not
              only what is promised, but also the thoughtful details beyond
              expectations — and that is what makes us different.
            </p>
            <div className="flex items-center gap-6 pt-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="hover:text-white text-neutral-500 transition-colors duration-200 text-lg tracking-tight"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Pages Navigation with Animated Hover Effect */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 font-bold">
              Pages
            </p>
            <nav className="flex flex-col gap-y-3">
              {mainLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-neutral-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group w-fit"
                >
                  {/* Sliding Indicator Circle */}
                  <div className="h-6 w-0 opacity-0 bg-[#1E1E1E] text-[#EAEAEA] flex justify-center items-center rounded-full overflow-hidden transition-all duration-300 ease-in-out group-hover:w-6 group-hover:opacity-100 flex-shrink-0">
                    <FaArrowRight className="text-[10px]" />
                  </div>
                  <span>{link.label}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Col 3: Our Services with Animated Hover Effect */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 font-bold">
              Our Services
            </p>
            <nav className="flex flex-col gap-y-3">
              {companyLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-neutral-400 hover:text-white transition-colors duration-200 flex items-center gap-2 group w-fit max-w-full"
                >
                  {/* Sliding Indicator Circle */}
                  <div className="h-6 w-0 opacity-0 bg-[#1E1E1E] text-[#EAEAEA] flex justify-center items-center rounded-full overflow-hidden transition-all duration-300 ease-in-out group-hover:w-6 group-hover:opacity-100 flex-shrink-0">
                    <FaArrowRight className="text-[10px]" />
                  </div>
                  <span className="truncate">{link.label}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Col 4: Contact Info & Action Button */}
          <div className="lg:col-span-3 flex flex-col justify-between gap-6">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.15em] text-neutral-500 font-bold">
                Get In Touch
              </p>
              <div className="space-y-3.5 text-sm text-neutral-400">
                <div className="flex items-start gap-3">
                  <FiMapPin className="w-4 h-4 mt-0.5 text-neutral-500 flex-shrink-0" />
                  <span>
                    A-25 Ekta Vihar, Mohakampur, Dehradun, Uttarakhand-248001
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <FiPhone className="w-4 h-4 text-neutral-500 flex-shrink-0" />
                  <a
                    href="tel:+919137443249"
                    className="hover:text-white transition-colors"
                  >
                    +91-9137443249
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FiMail className="w-4 h-4 text-neutral-500 flex-shrink-0" />
                  <a
                    href="mailto:Info@themountainmen.in"
                    className="hover:text-white transition-colors"
                  >
                    Info@themountainmen.in
                  </a>
                </div>
              </div>
            </div>

            {/* Reach Out Button */}
            <a
              href="#"
              className="inline-flex items-center justify-between gap-4 px-5 py-3 bg-neutral-900 border border-neutral-800 hover:border-neutral-600 rounded-full group transition-all duration-300 w-full text-sm font-medium text-neutral-200"
            >
              <span>Reach Out</span>
              <span className="w-6 h-6 rounded-full bg-neutral-800 group-hover:bg-white text-white group-hover:text-black flex items-center justify-center transition-all duration-300">
                <FiArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
              </span>
            </a>
          </div>
        </div>

        {/* Bottom Section: Utilities & Copyright */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-500">
          <div className="flex w-full items-center justify-center text-center gap-1.5 tracking-wide">
            <span className="text-sm tracking-tight max-w-5xl">
              &copy; {new Date().getFullYear()} Mountain Men Films LLP. Designed
              by Best Web Development Company in Dehradun
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;