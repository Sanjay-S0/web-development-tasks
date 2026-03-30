import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-purple-900 to-indigo-600 text-white shadow-lg">

      <div className="flex justify-between items-center px-4 sm:px-6 md:px-12 py-3">

        {/* LOGO */}
        <h1 className="font-bold text-2xl sm:text-3xl cursor-pointer">
          Sanjay S
        </h1>

        {/* DESKTOP MENU */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 text-lg font-semibold">
            <li><a href="#" className="hover:text-red-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-red-400 transition">About</a></li>
            <li><a href="#skills" className="hover:text-red-400 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-red-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-red-400 transition">Contact</a></li>
          </ul>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setToggleMenu(!toggleMenu)}
          className="md:hidden text-3xl"
        >
          {toggleMenu ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/90 backdrop-blur-lg transform transition-transform duration-300 ${
          toggleMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul
          className="flex flex-col items-center justify-center h-full space-y-8 text-xl font-semibold"
          onClick={() => setToggleMenu(false)}
        >
          <li className="flex items-center gap-3 hover:text-purple-400 transition">
            <FaHome /> <a href="#">Home</a>
          </li>

          <li className="flex items-center gap-3 hover:text-purple-400 transition">
            <FaUser /> <a href="#about">About</a>
          </li>

          <li className="flex items-center gap-3 hover:text-purple-400 transition">
            <FaCode /> <a href="#skills">Skills</a>
          </li>

          <li className="flex items-center gap-3 hover:text-purple-400 transition">
            <FaProjectDiagram /> <a href="#projects">Projects</a>
          </li>

          <li className="flex items-center gap-3 hover:text-purple-400 transition">
            <FaEnvelope /> <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
}