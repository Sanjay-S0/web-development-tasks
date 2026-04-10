import React, { useState } from "react";
import { Icon } from "@iconify/react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#0a5a4a] px-4 sm:px-6 lg:px-10 fixed z-[100] top-0">
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between border-b border-[#2a7466] pb-4 pt-3">
        
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-white text-2xl sm:text-3xl font-semibold tracking-tight">
            Greenie<span className="text-orange-500">.</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10 text-white text-sm font-medium">
          <li className="flex items-center gap-1 cursor-pointer hover:text-[#c8e96d] transition">
            Plants
            <Icon icon="mdi:chevron-down" width="18" height="18" />
          </li>
          <li className="cursor-pointer hover:text-[#c8e96d] transition">
            Shop
          </li>
          <li className="cursor-pointer hover:text-[#c8e96d] transition">
            Videos
          </li>
          <li className="cursor-pointer hover:text-[#c8e96d] transition">
            Sale
          </li>
          <li className="cursor-pointer hover:text-[#c8e96d] transition">
            Blog
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3 sm:gap-5">
          
          {/* Search Box */}
          <div className="hidden md:flex items-center bg-[#0b624f] border border-[#2a7466] rounded-full px-4 py-2 w-[180px] lg:w-[250px]">
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-white placeholder:text-[#9cc7ba] text-sm flex-1"
            />
            <Icon
              icon="mdi:magnify"
              width="20"
              height="20"
              className="text-[#d7a948]"
            />
          </div>

          {/* Contact Button */}
          <button className="hidden sm:block bg-[#b9e45d] text-[#0a3f34] font-medium text-sm px-5 lg:px-8 py-2 lg:py-3 rounded-full hover:scale-105 transition duration-300 shadow-md">
            Contact
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon icon="mdi:menu" width="28" height="28" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0a5a4a] px-6 pb-6">
          <ul className="flex flex-col gap-5 text-white text-sm font-medium mt-4">
            <li className="flex items-center gap-1">
              Plants
              <Icon icon="mdi:chevron-down" width="18" height="18" />
            </li>
            <li>Shop</li>
            <li>Videos</li>
            <li>Sale</li>
            <li>Blog</li>
          </ul>

          {/* Mobile Contact */}
          <button className="mt-6 w-full bg-[#b9e45d] text-[#0a3f34] font-medium text-sm py-3 rounded-full">
            Contact
          </button>
        </div>
      )}
    </header>
  );
}