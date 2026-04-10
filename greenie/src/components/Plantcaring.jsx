import React from "react";
import { Icon } from "@iconify/react";
import girl from "../assets/girl.png";
import plant1 from "../assets/plant1.jpeg";

export default function PlantCaringSection() {
  return (
    <>
      {/* Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Outfit:wght@300;400;500;600&display=swap');
        `}
      </style>

      <section className="w-full bg-[#f7f7f5] px-4 sm:px-8 md:px-12 lg:px-20 py-12 md:py-20 overflow-hidden">
        <h1
              className="text-[#062b22] text-[32px] sm:text-[42px] md:text-[50px] lg:text-[60px] leading-[0.95] tracking-tight font-medium md:hidden block text-center"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              TREE🌸LOVE <br />
              LIFE SHINE
            </h1>
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-between h-full items-center lg:items-start text-center lg:text-left">
            <div>
              <p
                className="text-[#f97316] text-[20px] sm:text-[24px] md:text-[28px] font-medium mb-3 md:mb-5"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Plant Caring
              </p>

              <h3
                className="text-[#1d1d1b] text-[22px] sm:text-[26px] md:text-[30px] leading-[1.2] max-w-[320px]"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Plants for boosting<br/> and purifying
              </h3>
            </div>

            {/* Plant Card */}
            <div className="relative mt-10 md:mt-16 w-[200px] sm:w-[240px] md:w-[260px]">
              
              {/* Orange Circle */}
              <div className="absolute -top-6 right-18 md:right-25 z-20 w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full bg-[#ff6a00] flex items-center justify-center shadow-lg">
                <Icon
                  icon="mdi:arrow-top-right"
                  className="text-white"
                  width="26"
                />
              </div>

              {/* Card */}
              <div className="bg-[#e8e5c9] rounded-[18px] md:rounded-[22px] p-4 md:p-6 h-[200px] md:h-[260px] flex flex-col items-center justify-center relative overflow-hidden">
                <img
                  src={plant1}
                  alt="Green Plant"
                  className="w-[140px] sm:w-[180px] md:w-[200px] object-contain z-10"
                />
              </div>
            </div>
          </div>

          {/* CENTER CONTENT */}
          <div className="pt-2 text-center lg:text-left relative">
            
            {/* Main Heading */}
            <h1
              className="text-[#062b22] text-[32px] sm:text-[42px] md:text-[50px] lg:text-[60px] leading-[0.95] tracking-tight font-medium hidden md:block"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              TREE🌸LOVE <br />
              LIFE SHINE
            </h1>

            {/* Button */}
            <button
              className="mt-4 md:mt-5 border-2 border-[#163f35] rounded-full px-3 py-1 flex items-center justify-center lg:justify-start gap-1 text-[#163f35] text-[13px] md:text-[15px] hover:bg-[#163f35] hover:text-white transition-all duration-300 mx-auto lg:mx-0"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Choose Green
              <Icon icon="mdi:chevron-right" width="24" />
            </button>

            {/* Divider */}
            <div className="w-full border-t border-[#ddddda] mt-8 md:mt-14 mb-8 md:mb-12"></div>

            {/* Bottom Info */}
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 items-start text-center sm:text-left">
              <div>
                <h4
                  className="text-[#f97316] text-[18px] sm:text-[22px] md:text-[25px] mb-2 md:mb-4 font-medium"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Gardening Benefits
                </h4>

                <p
                  className="text-[#163f35] text-[14px] sm:text-[16px] md:text-[20px] leading-[1.5] max-w-[760px]"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  A 2007 study discovered 🌸 that the soil bacteria
                  Mycobacterium vaccae increases serotonin, which helps to
                  improve mood and reduce anxiety.
                </p>
              </div>

              <div
                className="text-[#f97316] text-[28px] sm:text-[40px] md:text-[50px] leading-none"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                01
              </div>
            </div>

            {/* Decorative dots */}
            <div className="hidden md:block absolute right-8 top-[420px] opacity-30 text-[#163f35] text-5xl rotate-12">
              ....
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="pt-2 flex justify-center lg:justify-end">
            <img
              src={girl}
              alt="Gardening Girl"
              className="w-[260px] sm:w-[350px] md:w-[420px] lg:w-[450px] h-auto rounded-[20px] md:rounded-[26px]"
            />
          </div>
          
        </div>
      </section>
    </>
  );
}