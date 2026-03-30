import React from "react";
import img from "./assets/my image.jpg";
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-gray-900 text-white px-4 sm:px-6 md:px-16 py-10" id="about">

      {/* LEFT CONTENT */}
      <div className="md:w-1/2 space-y-5 text-center md:text-left">
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          Hello!
        </h1>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
          I'm <span className="text-indigo-500">Sanjay S</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
          I am currently pursuing my Bachelor of Technology in Computer Science and Engineering with a specialization in Cyber Security at Joy University, as part of the 2025 batch. As a dedicated student, I am building a strong foundation in both core computing concepts and security practices.
        </p>

        <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
          Alongside my academic journey, I have been exploring web development using HTML, CSS, JavaScript, React, and Tailwind CSS, building projects and improving my problem-solving skills.
        </p>

        {/* CTA BUTTON */}
        <a href="#skills">
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 sm:px-8 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 active:scale-95 rounded-full text-sm sm:text-base hidden md:block">
            View My Skills
          </button>
        </a>
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div className="md:w-1/2 flex flex-col items-center mt-10 md:mt-0">
        
        {/* IMAGE CARD */}
        <div className="bg-gradient-to-br from-purple-700 via-indigo-600 to-purple-900 p-3 sm:p-4 rounded-3xl shadow-2xl">
          <img
            src={img}
            alt="hero"
            className="w-64 sm:w-80 md:w-96 rounded-2xl object-cover"
          />
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-5 mt-6 text-2xl sm:text-3xl md:text-4xl">
          
          <a href="https://www.instagram.com/zan_x07_" className="hover:text-pink-500 transition">
            <FaInstagram />
          </a>

          <a href="mailto:sanjaysutharsan1357@gmail.com" className="hover:text-red-500 transition">
            <MdEmail />
          </a>

          <a href="https://www.linkedin.com/in/sanjay-s-ba5048388" className="hover:text-blue-600 transition">
            <FaLinkedin />
          </a>

          <a href="https://wa.me/9597546062?text=Hello%20Sanjay" className="hover:text-green-600 transition">
            <FaWhatsapp />
          </a>

          <a href="https://github.com/Sanjay-S0" className="hover:text-gray-400 transition">
            <FaGithub />
          </a>
        </div>
         {/* CTA BUTTON */}
        <a href="#skills">
          <button className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 sm:px-8 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 active:scale-95 rounded-full text-sm sm:text-base mt-3 md:hidden">
            View My Skills
          </button>
        </a>
      </div>
    </section>
  );
}