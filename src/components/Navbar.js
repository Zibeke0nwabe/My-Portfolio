import React, { useState } from 'react';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => setIsMenuOpen(prev => !prev);

  return (
    <nav className="relative flex justify-between items-center md:px-12 md:py-4 bg-white">
      {/* Logo Section */}
      <a href="/" className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-orange-500 rotate-45"></div>
        <div className="w-3 h-3 bg-blue-600 rotate-45"></div>
        <div className="w-3 h-3 bg-black rotate-45"></div>
        <span className="text-xl font-bold ml-2">Portfolio</span>
      </a>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8 font-medium">
        <a href="/" className="hover:text-orange-500">Home</a>
        <a href="#about" className="hover:text-orange-500">About</a>
        <a href="#projects" className="hover:text-orange-500">Projects</a>
        <a href="#services" className="hover:text-orange-500">Services</a>

        {/* Let's Talk Button */}
        <a href="https://wa.me/+27784300901" target="_blank" rel="noopener noreferrer"
           className="flex items-center rounded-lg py-2 px-3
            bg-black  space-x-2 text-orange-500 
            hover:bg-orange-400 hover:text-black
            font-semibold">
          <FaWhatsapp size={18} />
          <span>Let’s Talk</span>
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={handleMenuToggle}
        className="md:hidden p-2 text-gray-700"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile Menu Panel */}
      <div className={`fixed inset-0 bg-white transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>
        <div className="flex justify-end p-4">
          <button
            onClick={handleMenuToggle}
            className="text-gray-700"
            aria-label="Close menu"
          >
            <FaTimes size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-6 text-xl font-semibold">
          <a href="/" onClick={handleMenuToggle} className="hover:text-orange-500">Home</a>
          <a href="#about" onClick={handleMenuToggle} className="hover:text-orange-500">About</a>
          <a href="#projects" onClick={handleMenuToggle} className="hover:text-orange-500">Projects</a>
          <a href="#services" onClick={handleMenuToggle} className="hover:text-orange-500">Services</a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" onClick={handleMenuToggle} 
          className="flex items-center gap-2 text-orange-500 ">
            <FaWhatsapp size={20} />
            <span>Let’s Talk</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
