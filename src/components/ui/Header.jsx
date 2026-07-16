"use client"

import React, { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi' // Swapped to react-icons

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent scrolling behind the overlay when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { name: 'Solutions', href: '#' },
    { name: 'Marketing Services', href: '#' },
    { name: 'Technology Services', href: '#' },
    { name: 'Work', href: '#' },
    { name: 'About Us', href: '#' },
  ]

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-16 flex items-center justify-between transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#EAE8E4] shadow-md py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        {/* Logo */}
        <div>
          <h2
            className={`text-xl md:text-2xl font-black tracking-tight transition-colors duration-300 ${
              isScrolled || isMobileMenuOpen ? 'text-gray-900' : 'text-white'
            }`}
          >
            The Mountain Men
          </h2>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className={`flex items-center gap-6 text-sm font-semibold transition-colors duration-300 ${
            isScrolled ? 'text-gray-700' : 'text-white/90'
          }`}>
            {navLinks.map((link) => (
              <li 
                key={link.name} 
                className={`cursor-pointer transition-colors ${
                  isScrolled ? 'hover:text-black' : 'hover:text-white'
                }`}
              >
                {link.name}
              </li>
            ))}
            <li>
              <button className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                isScrolled 
                  ? 'bg-black text-white hover:bg-gray-800' 
                  : 'bg-white text-black hover:bg-gray-200'
              }`}>
                Connect
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button using react-icons */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden z-50 p-2 rounded-md transition-colors focus:outline-none ${
            isScrolled || isMobileMenuOpen 
              ? 'text-gray-900 hover:bg-black/5' 
              : 'text-white hover:bg-white/10'
          }`}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </header>

      {/* Mobile Navigation Drawer */}
      <div 
        className={`fixed inset-0 z-40 bg-[#EAE8E4] transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-center px-8 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="w-full max-w-md mx-auto">
          <ul className="flex flex-col gap-6 text-xl font-bold text-gray-900">
            {navLinks.map((link) => (
              <li 
                key={link.name}
                onClick={() => setIsMobileMenuOpen(false)} 
                className="cursor-pointer border-b border-gray-300/50 pb-3 hover:text-black"
              >
                {link.name}
              </li>
            ))}
            <li className="pt-4">
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 rounded-full text-sm font-semibold bg-black text-white hover:bg-gray-800 transition-colors"
              >
                Connect
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Header