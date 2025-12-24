import React, { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="flex justify-center">
      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        ></div>
      )}

      <nav className="w-full max-w-5xl h-16 bottom-0 pb-1 items-center ">
        <div className=" mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to='/'>
           <h1 className="text-xl font-bold text-white hover:opacity-75 font-mono">
            IMRAN.DEV
          </h1>
          </Link>
         

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8">
            <Link to="/">
              <li className="text-white hover:opacity-75 font-mono">
                <span className="text-[#C778DD]">#</span> home
              </li>
            </Link>
            <Link to="/projects">
              <li className="text-white hover:opacity-75 font-mono">
                <span className="text-[#C778DD]">#</span> projects
              </li>
            </Link>
            <Link to="/about">
              <li className="text-white hover:opacity-75 font-mono">
                <span className="text-[#C778DD]">#</span> about
              </li>
            </Link>
            <Link to="/contact">
              <li className="text-white hover:opacity-75">
                <span className="text-[#C778DD]">#</span> contact
              </li>
            </Link>
             <a href="https://github.com/imranmiatech" target="_blank" rel="noopener noreferrer">
             <button className="h-7 w-38 flex items-center justify-center 
                                 text-white border border-gray-300  cursor-pointer
                                 hover:bg-[#C778DD] font-mono">
                Github!!
              </button>
             </a>
             
          </ul>

          {/* Mobile Toggle Button */}
          <div onClick={openMenu} className="md:hidden cursor-pointer">
            <img src="/bar.png" alt="menu" className="w-7 h-7" />
          </div>
        </div>
      </nav>

      {/* Mobile Full Screen Menu */}
      <ul
        className={`fixed top-0 right-0 w-screen h-screen 
        bg-[#282C33] z-50
        flex flex-col gap-6 py-5 px-8
        transition-transform duration-500 md:hidden
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <div className="flex justify-between font-mono">
          <h1 className="text-xl font-bold text-white hover:opacity-75 font-mono">
            IMRAN.DEV
          </h1>
          <li onClick={closeMenu} className="cursor-pointer mb-4">
            <img src="/cross.png" alt="close" className="w-6 h-6" />
          </li>
        </div>

        <Link onClick={closeMenu} to="/">
          <li className="text-xl text-white hover:opacity-75 font-mono">
            <span className="text-[#C778DD] font-mono">#</span> home
          </li>
        </Link>

        <Link onClick={closeMenu} to="/projects">
          <li className="text-xl text-white hover:opacity-75">
            <span className="text-[#C778DD]">#</span> projects
          </li>
        </Link>

        <Link onClick={closeMenu} to="/about">
          <li className="text-xl text-white hover:opacity-75">
            <span className="text-[#C778DD]">#</span> about
          </li>
        </Link>

        <Link onClick={closeMenu} to="/contact">
          <li className="text-xl text-white hover:opacity-75">
            <span className="text-[#C778DD]">#</span> contact
          </li>
        </Link>
         <a href="https://github.com/imranmiatech" target="_blank" rel="noopener noreferrer">
             <button className="h-7 w-38 flex items-center justify-center 
                                 text-white border border-gray-300  cursor-pointer
                                 hover:bg-[#C778DD] font-mono">
                Github!!
              </button>
             </a>
        
        <div className="h-full pt-10">
<div className="flex justify-center gap-2 ">
          <img className="w-12 h-12" src="/GitHub.png" alt="" />
          <img className="w-12 h-12" src="/Dribble.png" alt="" />
          <img className="w-12 h-12" src="/Figma.png" alt="" />
        </div>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
