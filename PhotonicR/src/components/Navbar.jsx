import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Contact', path: '/contact' },
  { name: 'Achievement', path: '/achievement' },
  { name: 'About', path: '/about' },
  { name: 'Reactors', path: '/reactors' },
];

const accent = "text-[#3b82f6]"; // Tailwind blue-500

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#181a20]/95 backdrop-blur-md border-b border-[#222]/60 shadow-none transition-all duration-300">
      <div className="container mx-auto flex flex-row justify-between items-center px-4 md:px-10 py-3">
        {/* Logo and Brand Name */}
        <Link to="/" className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-xl bg-[#23272f] flex items-center justify-center border border-[#222]/40">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="#3b82f6" strokeWidth="2" />
              <circle cx="12" cy="12" r="5" fill="#3b82f6" />
            </svg>
          </span>
          <span className="text-xl md:text-2xl font-bold tracking-wide text-white select-none font-sans">
            <span className={accent}>PhotonicR</span>
            <span className="text-white font-bold"> Pvt. Ltd.</span>
          </span>
        </Link>

        {/* Hamburger Icon */}
        <button
          className="md:hidden flex items-center px-3 py-2 rounded transition hover:bg-[#23272f]/70 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <svg
            className="fill-current text-[#3b82f6]"
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
          className={`flex-col md:flex-row flex gap-1 md:gap-4 justify-end items-center 
            transition-all duration-300 md:static absolute left-0 w-full md:w-auto bg-[#181a20]/98 md:bg-transparent 
            border-b border-[#23272f]/30 md:border-none
            rounded-b-xl md:rounded-none top-full md:top-auto shadow md:shadow-none
            ${menuOpen ? 'flex py-4 px-6' : 'hidden md:flex'}`}
        >
          {navLinks.map((item) => (
            <li key={item.name} className="w-full md:w-auto">
              <Link
                to={item.path}
                className={`relative block font-medium px-4 py-2 rounded transition-all duration-200 text-center font-sans
                  ${
                    location.pathname === item.path
                      ? `${accent} after:absolute after:left-4 after:right-4 after:-bottom-1 after:h-[2px] after:rounded-full after:bg-[#3b82f6] after:opacity-80`
                      : 'text-white hover:text-[#3b82f6] hover:bg-[#23272f]/60'
                  }`}
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
