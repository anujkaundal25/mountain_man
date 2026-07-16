"use client";

import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Services", href: "#services" },
    { name: "Our Projects", href: "#projects" },
    { name: "Locations", href: "#locations" },
    { name: "Our Clients", href: "#clients" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 px-6 py-3 md:px-16 flex items-center justify-between transition-all duration-300 ${
          isMobileMenuOpen
            ? "bg-[#EAE8E4]"
            : isScrolled
              ? "bg-[#EAE8E4] shadow-md"
              : "bg-black/80"
        }`}
      >
        {/* Logo */}
        <div className="flex flex-col items-center">
          <a href="/" className="flex flex-col items-center">
            <img
              src="/logo.webp"
              alt="Logo"
              width={100}
              height={100}
              className="object-contain"
            />

            <h2
              className={`text-base md:text-lg font-black tracking-tight transition-colors duration-300 ${
                isScrolled || isMobileMenuOpen ? "text-gray-900" : "text-white"
              }`}
            >
              Mountain Men Films
            </h2>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul
            className={`flex items-center gap-6 text-sm font-semibold transition-colors duration-300 ${
              isScrolled ? "text-gray-700" : "text-white/90"
            }`}
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`transition-colors ${
                    isScrolled ? "hover:text-black" : "hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}

            <li>
              <button
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  isScrolled
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-white text-black hover:bg-gray-200"
                }`}
              >
                Connect
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden z-50 p-2 rounded-md transition-colors ${
            isScrolled || isMobileMenuOpen
              ? "text-gray-900 hover:bg-black/5"
              : "text-white hover:bg-white/10"
          }`}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 bg-[#EAE8E4] transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-start px-6 pt-24 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="w-full max-w-sm mx-auto">
          <ul className="flex flex-col gap-4 text-lg font-bold text-gray-900">
            {navLinks.map((link) => (
              <li
                key={link.name}
                className="border-b border-gray-300/60 pb-2.5"
              >
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block hover:text-black transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}

            <li className="pt-4">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-full text-sm font-semibold bg-black text-white hover:bg-gray-800 transition-colors shadow-sm"
              >
                Connect
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
