import React from 'react';
import { Link } from 'react-router-dom'; 
import cromaLogo from '../assets/croma.png';

const Navbar = () => {

  return (
    <nav className="bg-white py-4 px-4 md:px-8 fixed shadow-sm w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to='/' className="text-xl font-bold text-blue-600 flex items-center">
          <img src={cromaLogo} alt="Croma Logo" className="h-8 mr-2" />
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden" >
          <button className="text-gray-600 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Links for Desktop and Mobile */}
        <div className={`md:flex md:items-center space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <div className={`flex flex-col md:flex-row items-center md:space-x-6 ${isOpen ? 'text-center' : ''}`}>
            <button
              className={`navmenu transition duration-300 cursor-pointer ${
                isActive('/') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-800'
              }`}
              onClick={() => handleNavigateAndScroll('home')}
            >
              Dashboard
            </button>

            <Link
              to="/resources"
              className={`navmenu transition duration-300 cursor-pointer ${
                isActive('/resources') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-800'
              }`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;