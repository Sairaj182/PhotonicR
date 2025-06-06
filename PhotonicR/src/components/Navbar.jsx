import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
    { name: 'Achievement', path: '/achievement' },
    { name: 'About', path: '/about' },
    { name: 'Reactors', path: '/reactors' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0D1B2A] text-white shadow-lg transition-all duration-300">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-6 py-3">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-extrabold tracking-wide">
            <span className="text-green-400">PhotonicR </span>
            <span className="text-white font-bold">Pvt. Ltd.</span>
          </h1>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden flex items-center px-3 py-2 rounded transition hover:bg-[#112240] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <svg
            className="fill-current text-green-400"
            viewBox="0 0 24 24"
            width="28"
            height="28"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`flex-col md:flex-row flex gap-4 flex-wrap justify-center md:justify-end items-center 
            transition-all duration-300 md:static absolute left-0 w-full md:w-auto bg-[#0D1B2A] md:bg-transparent 
            rounded-b-2xl md:rounded-none top-full md:top-auto shadow-lg md:shadow-none
            ${menuOpen ? 'flex py-4 px-6' : 'hidden md:flex'}`}
        >
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="text-white font-semibold px-3 py-2 rounded transition-all duration-300 hover:text-green-400 hover:bg-[#112240] hover:underline underline-offset-4"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
