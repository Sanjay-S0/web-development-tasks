import React from "react";
import { Icon } from "@iconify/react";
import img from "../assets/hero.png";

export default function Hero() {
  return (
    <>
      {/* Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Outfit:wght@300;400;500;600&display=swap');
        `}
      </style>

      <section className="w-full bg-[#045347] px-4 sm:px-6 md:px-12 pt-6 pb-10 relative overflow-hidden mt-10">
        {/* Top Border */}
        <div className="border-t border-[#2b7063] mb-6 md:mb-8"></div>

        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-[700px_1fr] gap-8 items-center">
          
          {/* Left Image */}
          <div className="relative flex justify-center lg:justify-start">
            <img
              src={img}
              alt="Plant Care"
              className="w-full max-w-[500px] sm:max-w-[600px] h-[350px] sm:h-[500px] lg:h-[650px] object-cover rounded-[20px] md:rounded-[30px]"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center relative">
            
            {/* Main Heading */}
            <h1
              className="text-[#e6dd61] leading-[0.95] tracking-tight font-light 
              text-[48px] sm:text-[70px] md:text-[90px] lg:text-[110px]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              BLOOMING <br />
              WITH LOVE
            </h1>

            {/* Description */}
            <p
              className="text-white/90 mt-6 sm:mt-10 md:mt-14 
              text-[16px] sm:text-[18px] md:text-[22px] 
              max-w-[650px] leading-relaxed"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Planting a tree or even a small houseplant is an investment in a
              greener tomorrow.
            </p>

            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 mt-8 md:mt-16">
              
              {/* Taking Care Button */}
              <a href="#care"
                className="bg-[#ff6a00] hover:scale-105 transition-all duration-300 
                text-white px-6 sm:px-8 md:px-10 py-3 md:py-4 
                rounded-full flex items-center gap-3 md:gap-5 
                text-[16px] sm:text-[18px] md:text-[24px] shadow-lg"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <Icon icon="mdi:watering-can-outline" width="28" />
                <span className="opacity-70">|</span>
                Taking Care
              </a>
            </div>

            {/* Decorative Splash */}
            <div className="absolute right-0 top-10 md:top-16 opacity-30 pointer-events-none">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-[#1f9b88] blur-2xl rounded-full"></div>
            </div>

            {/* Bottom Decorative dots */}
            <div className="absolute left-4 md:left-16 bottom-0 opacity-70">
              <div className="text-[#d9db4d] text-3xl md:text-5xl tracking-[10px] md:tracking-[20px]">
                ...
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}