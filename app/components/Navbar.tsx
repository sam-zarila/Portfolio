// components/Navbar.js
'use client'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }} 
      className="bg-[#15172b] text-white py-4 px-6 shadow-lg fixed w-full z-50"
    >
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          className="text-3xl font-bold text-yellow-400"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, type: 'spring', stiffness: 120 }}
        >
          [Your Name]
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 text-lg">
          {['Home', 'About', 'Projects', 'Contact'].map((link, index) => (
            <motion.a 
              key={index}
              href={`#${link.toLowerCase()}`}
              className="hover:text-yellow-400 transition-all duration-300"
              whileHover={{ scale: 1.1, color: '#fbbf24' }} // Hover animation
            >
              {link}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <XIcon className="w-8 h-8 text-white" />
            ) : (
              <MenuIcon className="w-8 h-8 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.5 }}
          className="lg:hidden bg-[#15172b] mt-4 py-4 px-6 space-y-4"
        >
          {['Home', 'About', 'Projects', 'Contact'].map((link, index) => (
            <motion.a
              key={index}
              href={`#${link.toLowerCase()}`}
              className="block text-lg hover:text-yellow-400 transition-all duration-300"
              whileHover={{ scale: 1.1, color: '#fbbf24' }}
            >
              {link}
            </motion.a>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
