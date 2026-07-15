"use client"

import React, { useState, useEffect } from 'react'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 px-8 py-4 md:px-16 flex items-center justify-between transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#EAE8E4] shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      {/* Logo */}
      <div>
        <h1 className={`text-4xl font-bold tracking-tight transition-colors duration-300 ${
          isScrolled ? 'text-gray-900' : 'text-white'
        }`}>
          The Mountain Men
        </h1>
      </div>
      
      {/* Navigation Links & Button */}
      <nav>
        <ul className={`flex items-center gap-6 text-sm font-semibold transition-colors duration-300 ${
          isScrolled ? 'text-gray-700' : 'text-white/90'
        }`}>
          <li className={`cursor-pointer transition-colors ${isScrolled ? 'hover:text-black' : 'hover:text-white'}`}>Solutions</li>
          <li className={`cursor-pointer transition-colors ${isScrolled ? 'hover:text-black' : 'hover:text-white'}`}>Marketing Services</li>
          <li className={`cursor-pointer transition-colors ${isScrolled ? 'hover:text-black' : 'hover:text-white'}`}>Technology Services</li>
          <li className={`cursor-pointer transition-colors ${isScrolled ? 'hover:text-black' : 'hover:text-white'}`}>Work</li>
          <li className={`cursor-pointer transition-colors ${isScrolled ? 'hover:text-black' : 'hover:text-white'}`}>About Us</li>
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
    </header>
  )
}

export default Header