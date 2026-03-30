import React from "react";

import htmlImg from "./assets/html.png";
import cssImg from "./assets/css.png";
import tailwindImg from "./assets/tailwind.png";
import jsImg from "./assets/javascript.png";
import reactImg from "./assets/react.svg";

import gitImg from "./assets/git.svg";
import githubImg from "./assets/github.svg";
import netlifyImg from "./assets/netlify.png";
import vscodeImg from "./assets/vscode.webp";

export default function Skills() {
  return (
    <div className="px-4 sm:px-6 md:px-10 py-8 sm:py-10 bg-slate-950 text-white min-h-screen" id="skills">

      {/* MAIN HEADING */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-10 text-purple-500">
        My Skills
      </h1>

      <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 mb-10 sm:mb-12">

        {/* FRONTEND */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-5 sm:mb-6 text-slate-950">
          Frontend Skills
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 mb-6">

          <div className="card">
            <img src={htmlImg} alt="HTML" className="img w-12 sm:w-14 md:w-16 mx-auto" />
            <p className="text-black text-sm sm:text-base md:text-xl text-center">Beginner</p>
          </div>

          <div className="card">
            <img src={cssImg} alt="CSS" className="img w-12 sm:w-14 md:w-16 mx-auto" />
            <p className="text-black text-sm sm:text-base md:text-xl text-center">Beginner</p>
          </div>

          <div className="card">
            <img src={tailwindImg} alt="Tailwind" className="img w-12 sm:w-14 md:w-16 mx-auto" />
            <p className="text-black text-sm sm:text-base md:text-xl text-center">Beginner</p>
          </div>

          <div className="card">
            <img src={jsImg} alt="JS" className="img w-12 sm:w-14 md:w-16 mx-auto" />
            <p className="text-black text-sm sm:text-base md:text-xl text-center">Beginner</p>
          </div>

          <div className="card">
            <img src={reactImg} alt="React" className="img w-12 sm:w-14 md:w-16 mx-auto" />
            <p className="text-black text-sm sm:text-base md:text-lg mt-2 sm:mt-4 text-center">Beginner</p>
          </div>

        </div>

        {/* TOOLS */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-5 sm:mb-6 text-slate-950">
          Tools Used
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">

          <div className="card">
            <img src={gitImg} alt="Git" className="img w-12 sm:w-14 md:w-16 mx-auto" />
            <p className="text-black text-sm sm:text-base md:text-xl mt-2 sm:mt-4 text-center">Beginner</p>
          </div>

          <div className="card">
            <img src={githubImg} alt="GitHub" className="img w-12 sm:w-14 md:w-16 mx-auto" />
            <p className="text-black text-sm sm:text-base md:text-xl text-center">Beginner</p>
          </div>

          <div className="card">
            <img src={netlifyImg} alt="Netlify" className="img w-12 sm:w-14 md:w-20 mx-auto" />
            <p className="text-black text-sm sm:text-base md:text-xl mt-2 sm:mt-4 text-center">Beginner</p>
          </div>

          <div className="card">
            <img src={vscodeImg} alt="VS Code" className="img w-12 sm:w-14 md:w-16 mx-auto" />
            <p className="text-black text-sm sm:text-base md:text-xl text-center">Beginner</p>
          </div>

        </div>
      </div>
    </div>
  );
}