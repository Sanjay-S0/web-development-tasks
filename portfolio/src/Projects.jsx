import React from "react";

import visitImg from "./assets/visitingcard.png";
import contactImg from "./assets/contactform.png";
import calendarImg from "./assets/calendar.png";
import galleryImg from "./assets/gallery.png";
import todoImg from "./assets/todo.png";
import tictacImg from "./assets/tictactoe.png";
import calcImg from "./assets/calculator.png";

export default function Projects() {
  return (
    <section className="bg-gray-900 min-h-screen py-10 px-4 sm:px-6 text-white" id="projects">

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-indigo-500 mb-10">
        Projects
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

        {/* Visiting Card */}
        <div className="relative group rounded-2xl overflow-hidden shadow-lg transition hover:shadow-purple-500/40">
          <img src={visitImg} className="w-full h-52 sm:h-60 md:h-64 object-cover transition duration-500 group-hover:opacity-0 group-hover:scale-110" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-black to-gray-900 opacity-0 group-hover:opacity-100 transition">
            <h2 className="text-lg sm:text-xl font-bold mb-3">Visiting Card</h2>
            <a href="https://visitingcardtask.netlify.app/" target="_blank" className="bg-purple-800 px-4 py-2 rounded-full hover:bg-purple-600 text-sm">
              View
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="relative group rounded-2xl overflow-hidden shadow-lg transition hover:shadow-purple-500/40">
          <img src={contactImg} className="w-full h-52 sm:h-60 md:h-64 object-cover transition duration-500 group-hover:opacity-0 group-hover:scale-110" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-black to-gray-900 opacity-0 group-hover:opacity-100 transition">
            <h2 className="text-lg sm:text-xl font-bold mb-3">Contact Form</h2>
            <a href="https://contactformtask01.netlify.app/" target="_blank" className="bg-purple-800 px-4 py-2 rounded-full hover:bg-purple-600 text-sm">
              View
            </a>
          </div>
        </div>

        {/* Calendar */}
        <div className="relative group rounded-2xl overflow-hidden shadow-lg transition hover:shadow-purple-500/40">
          <img src={calendarImg} className="w-full h-52 sm:h-60 md:h-64 object-cover transition duration-500 group-hover:opacity-0 group-hover:scale-110" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-black to-gray-900 opacity-0 group-hover:opacity-100 transition">
            <h2 className="text-lg sm:text-xl font-bold mb-3">Calendar</h2>
            <a href="https://calendartask01.netlify.app/" target="_blank" className="bg-purple-800 px-4 py-2 rounded-full hover:bg-purple-600 text-sm">
              View
            </a>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="relative group rounded-2xl overflow-hidden shadow-lg transition hover:shadow-purple-500/40">
          <img src={galleryImg} className="w-full h-52 sm:h-60 md:h-64 object-cover transition duration-500 group-hover:opacity-0 group-hover:scale-110" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-black to-gray-900 opacity-0 group-hover:opacity-100 transition">
            <h2 className="text-lg sm:text-xl font-bold mb-3">Photo Gallery</h2>
            <a href="https://photogallerytask.netlify.app/" target="_blank" className="bg-purple-800 px-4 py-2 rounded-full hover:bg-purple-600 text-sm">
              View
            </a>
          </div>
        </div>

        {/* To Do List */}
        <div className="relative group rounded-2xl overflow-hidden shadow-lg transition hover:shadow-purple-500/40">
          <img src={todoImg} className="w-full h-52 sm:h-60 md:h-64 object-cover transition duration-500 group-hover:opacity-0 group-hover:scale-110" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-black to-gray-900 opacity-0 group-hover:opacity-100 transition">
            <h2 className="text-lg sm:text-xl font-bold mb-3">To Do List</h2>
            <a href="https://todolisttask02.netlify.app/" target="_blank" className="bg-purple-800 px-4 py-2 rounded-full hover:bg-purple-600 text-sm">
              View
            </a>
          </div>
        </div>

        {/* Tic Tac Toe */}
        <div className="relative group rounded-2xl overflow-hidden shadow-lg transition hover:shadow-purple-500/40">
          <img src={tictacImg} className="w-full h-52 sm:h-60 md:h-64 object-cover transition duration-500 group-hover:opacity-0 group-hover:scale-110" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-black to-gray-900 opacity-0 group-hover:opacity-100 transition">
            <h2 className="text-lg sm:text-xl font-bold mb-3">Tic Tac Toe</h2>
            <a href="https://tictactoetask04.netlify.app/" target="_blank" className="bg-purple-800 px-4 py-2 rounded-full hover:bg-purple-600 text-sm">
              View
            </a>
          </div>
        </div>

        {/* Calculator (FIXED ✅ inside grid) */}
        <div className="relative group rounded-2xl overflow-hidden shadow-lg transition hover:shadow-purple-500/40">
          <img src={calcImg} className="w-full h-52 sm:h-60 md:h-64 object-cover transition duration-500 group-hover:opacity-0 group-hover:scale-110" />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-black to-gray-900 opacity-0 group-hover:opacity-100 transition">
            <h2 className="text-lg sm:text-xl font-bold mb-3">Calculator</h2>
            <a href="https://calculatortask02.netlify.app/" target="_blank" className="bg-purple-800 px-4 py-2 rounded-full hover:bg-purple-600 text-sm">
              View
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}