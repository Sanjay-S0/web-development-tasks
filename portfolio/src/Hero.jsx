import React from "react";

export default function Sample() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 sm:px-6">

      {/* BACKGROUND BLOBS */}
      <div className="absolute top-0 -left-10 w-56 sm:w-72 h-56 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-blob"></div>
      
      <div className="absolute top-0 -right-10 w-56 sm:w-72 h-56 sm:h-72 bg-cyan-500 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="absolute -bottom-10 left-10 sm:left-20 w-56 sm:w-72 h-56 sm:h-72 bg-pink-500 rounded-full mix-blend-multiply blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* CONTENT */}
      <div className="relative z-10 text-center">
        
        <span className="inline-block rounded-full bg-white/10 px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium tracking-wide text-purple-300 backdrop-blur-md mb-5 sm:mb-6 border border-white/10">
          Open to internships & learning opportunities
        </span>

        <h1 className="max-w-4xl mx-auto bg-gradient-to-b from-white to-slate-400 bg-clip-text text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-transparent leading-tight">
          Learning to build beautiful web
          <span className="text-purple-500"> interfaces.</span>
        </h1>

        <p className="mx-auto mt-4 sm:mt-6 max-w-xl sm:max-w-2xl text-sm sm:text-base md:text-lg leading-7 sm:leading-8 text-slate-400 px-2">
          I’m a passionate frontend developer at the beginning of my journey. I enjoy building responsive and user-friendly web applications using modern technologies. Currently, I’m focused on improving my skills in React, JavaScript, and UI design while creating real-world projects.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
          
          <a
            href="#projects"
            className="w-full sm:w-auto text-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-6 sm:px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 active:scale-95"
          >
            My Projects
          </a>

          <a
            href="#about"
            className="w-full sm:w-auto text-center text-sm font-semibold text-white transition-colors hover:text-purple-400 border border-white/10 rounded-full px-6 py-3"
          >
            About Me →
          </a>
        </div>
      </div>
    </section>
  );
}