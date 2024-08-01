"use client";

import React from 'react';
import '../app/globals.css';

const Navbar: React.FC = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-black">
      <div className="fixed container mx-auto flex justify-between items-center h-[80px] min-w-full shadow-sm navbar-shadow bg-black">
        <div className="font-semibold font-bebas ml-8 text-[40px] text-[#B336FF]">
          WELCOME !
        </div>
        <div className="flex space-x-4">
          <a
            href="#Home"
            className="text-white text-[25px] font-bold font-bebas px-3 py-2 rounded hover:text-[#B336FF]"
            onClick={(e) => handleClick(e, 'Home')}
          >
            Home
          </a>
          <a
            href="#About"
            className="text-white text-[25px] font-bold font-bebas px-3 py-2 rounded hover:text-[#B336FF]"
            onClick={(e) => handleClick(e, 'About')}
          >
            About
          </a>
          <a
            href="#Projects"
            className="text-white text-[25px] font-bold font-bebas px-3 py-2 rounded hover:text-[#B336FF]"
            onClick={(e) => handleClick(e, 'Projects')}
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="text-white text-[25px] font-bold font-bebas px-3 py-2 rounded hover:text-[#B336FF]"
            onClick={(e) => handleClick(e, 'Contact')}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
