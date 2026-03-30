import React from "react";
import {
  FaWhatsapp,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMobile,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#071a2f] via-[#031625] to-[#010a14] text-white px-4 sm:px-6 md:px-20 py-12">

      {/* TOP */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

        {/* LEFT */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
            SANJAY S
          </h1>

          <p className="text-gray-400 mt-4 text-sm sm:text-base leading-6">
            Beginner Frontend Developer passionate about building modern,
            responsive and interactive web applications.
          </p>

          {/* Social */}
          <h2 className="text-blue-400 font-semibold mt-6 mb-4">
            Social Links
          </h2>

          <div className="flex flex-wrap gap-4 text-lg sm:text-xl">
            <a href="https://www.instagram.com/zan_x07_" className="p-2 sm:p-3 rounded-full border border-gray-600 hover:border-pink-500 hover:text-pink-500 transition">
              <FaInstagram />
            </a>

            <a href="https://wa.me/9597546062" className="p-2 sm:p-3 rounded-full border border-gray-600 hover:border-green-500 hover:text-green-500 transition">
              <FaWhatsapp />
            </a>

            <a href="mailto:sanjaysutharsan1357@gmail.com" className="p-2 sm:p-3 rounded-full border border-gray-600 hover:border-red-500 hover:text-red-500 transition">
              <MdEmail />
            </a>

            <a href="https://www.linkedin.com/in/sanjay-s-ba5048388" className="p-2 sm:p-3 rounded-full border border-gray-600 hover:border-blue-400 hover:text-blue-400 transition">
              <FaLinkedin />
            </a>

            <a href="https://github.com/Sanjay-S0" className="p-2 sm:p-3 rounded-full border border-gray-600 hover:border-white hover:text-white transition">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* CENTER */}
        <div className="hidden md:block">
          <h2 className="text-blue-400 font-semibold mb-4">Navigation</h2>

          <ul className="space-y-2 sm:space-y-3 text-gray-300 text-sm sm:text-base">

            <li>
              <a href="#home" className="block border border-gray-600 rounded-lg px-3 sm:px-4 py-2 hover:border-blue-400 hover:bg-blue-500/10 transition">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="block border border-gray-600 rounded-lg px-3 sm:px-4 py-2 hover:border-blue-400 hover:bg-blue-500/10 transition">
                About
              </a>
            </li>

            <li>
              <a href="#skills" className="block border border-gray-600 rounded-lg px-3 sm:px-4 py-2 hover:border-blue-400 hover:bg-blue-500/10 transition">
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" className="block border border-gray-600 rounded-lg px-3 sm:px-4 py-2 hover:border-blue-400 hover:bg-blue-500/10 transition">
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" className="block border border-gray-600 rounded-lg px-3 sm:px-4 py-2 hover:border-blue-400 hover:bg-blue-500/10 transition">
                Contact
              </a>
            </li>

          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h2 className="text-blue-400 font-semibold mb-4">Contact</h2>

          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">

            <a href="https://wa.me/9597546062?text=Hello%20Sanjay" className="flex items-center gap-3 border border-green-500 rounded-xl px-3 sm:px-4 py-2 sm:py-3 hover:bg-green-500/10 transition">
              <FaWhatsapp className="text-green-400 text-lg" />
              WhatsApp
            </a>

            <a href="mailto:sanjaysutharsan1357@gmail.com" className="flex items-center gap-3 border border-red-400 rounded-xl px-3 sm:px-4 py-2 sm:py-3 hover:bg-red-500/10 transition">
              <MdEmail className="text-red-400 text-lg" />
              Email
            </a>

            <a href="tel:+919597546062" className="flex items-center gap-3 border border-blue-400 rounded-xl px-3 sm:px-4 py-2 sm:py-3 hover:bg-blue-500/10 transition">
              <FaMobile className="text-blue-400 text-lg" />
              Call Me
            </a>

          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-700 my-8"></div>

      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-gray-400 text-xs sm:text-sm text-center md:text-left">
        <p>India / English</p>
        <p>Designed by Sanjay S</p>
        <p>© 2026 Sanjay S. All rights reserved.</p>
      </div>
    </footer>
  );
}