import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-darkPanel shadow-lg">
      <div className="text-neonBlue text-2xl font-bold flex items-center">
        <span className="mr-2">WARTY 🐗</span>
      </div>

      <button onClick={toggleMenu} className="md:hidden focus:outline-none">
        {/* Hamburger Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 4h14a1 1 0 100-2H3a1 1 0 100 2zm0 6h14a1 1 0 100-2H3a1 1 0 100 2zm0 6h14a1 1 0 100-2H3a1 1 0 100 2z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Desktop Menu */}
      <div className={`hidden md:flex md:items-center md:space-x-4`}>
        <Link to="/" className="neon-button">Home</Link>
        <Link to="/explore" className="neon-button">Explore</Link>
        <Link to="/news" className="neon-button">News</Link>
        <Link to="/about" className="neon-button">About</Link>
        <Link to="/contact" className="neon-button">Contact</Link>
        
        {/* Special Buy Button with neonPurple */}
        <Link to="/buy" className="neon-button bg-neonGreen text-white hover:neonGreen transition-colors duration-300">Buy Now</Link>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-14 right-0 w-full md:w-auto bg-darkPanel md:bg-transparent p-4 rounded-lg shadow-lg ${isOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col">
          <Link to="/" className="neon-button mb-2">Home</Link>
          <Link to="/explore" className="neon-button mb-2">Explore</Link>
          <Link to="/news" className="neon-button mb-2">News</Link>
          <Link to="/about" className="neon-button mb-2">About</Link>
          <Link to="/contact" className="neon-button mb-2">Contact</Link>
          
          {/* Special Buy Button with neonPurple */}
          <Link to="/buy" className="neon-button bg-neonGreen text-white hover:neonGreen transition-colors duration-300">Buy Now</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
