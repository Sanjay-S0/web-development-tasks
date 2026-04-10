import React from "react";
import { Icon } from "@iconify/react";
import hibis from "../assets/hibis.jpeg";
import pink from "../assets/pink.jpeg";
import rose from "../assets/rose.jpeg";
import card1 from "../assets/card1.jpeg";
import card2 from "../assets/card2.jpeg";
import card3 from "../assets/card3.jpeg"; 
import yplant from "../assets/yplant.jpeg";

export default function RootedBlissSection() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Outfit:wght@300;400;500;600&display=swap');
        `}
      </style>

      <section className="w-full bg-[#f7f7f5] px-4 md:px-8 py-14 md:py-20">
        <div className="max-w-[1800px] mx-auto">
          
          {/* TOP */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center text-center lg:text-left">
            
            {/* LEFT */}
            <div>
              <h1
                className="text-[36px] sm:text-[50px] md:text-[80px] leading-[1] md:leading-[0.95] text-[#0b2e26] font-medium"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                ROOTED IN <br /> PURE BLISS
              </h1>

              <p className="mt-4 sm:mt-6 text-[16px] sm:text-[18px] md:text-[22px] text-[#4b5e57] max-w-[420px] mx-auto lg:mx-0">
                These succulents are ideal for use in your indoor home conditions.
              </p>

              <button className="mt-6 sm:mt-8 md:mt-10 border border-[#0b2e26] px-5 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full flex items-center gap-2 md:gap-3 text-[#0b2e26] hover:bg-[#0b2e26] hover:text-white transition mx-auto lg:mx-0">
                Learn Care
                <Icon icon="mdi:chevron-right" />
              </button>
            </div>

            {/* CENTER */}
            <div className="relative flex justify-center items-center">
              
              {/* Circle */}
              <div className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[380px] md:h-[380px] bg-[#efe25c] rounded-full absolute"></div>

              {/* Plant */}
              <img
                src={yplant}
                alt="plant"
                className="relative z-10 w-[140px] md:w-[250px] rounded-full"
              />

              {/* Grow Now */}
              <div className="
                absolute 
                top-30 right-70 
                md:top-[200px] md:right-[390px]
                bg-[#ff6a00] text-white 
                w-[60px] h-[60px] 
                md:w-28 md:h-28 
                rounded-full flex items-center justify-center text-[10px] sm:text-[14px] md:text-[18px] text-center leading-tight shadow-lg
              ">
                Grow <br /> Now
              </div>

              {/* Heart */}
              <div className="
                absolute 
                bottom-30 left-71
                md:bottom-[220px] md:left-[400px]
                w-[40px] h-[40px] 
                md:w-14 md:h-14 
                bg-[#1e6f5c] rounded-full flex items-center justify-center
              ">
                <Icon icon="mdi:heart" className="text-green-400" />
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex justify-center">
              <div className="w-[260px] sm:w-[300px] md:w-[360px] h-[260px] sm:h-[300px] md:h-[360px] border border-[#e0e0de] rounded-full flex flex-col items-center justify-center text-center p-6 md:p-10">
                
                <p className="text-[#ff6a00] mb-2 text-lg md:text-2xl">About Plants</p>

                <h2 className="text-[22px] sm:text-[30px] md:text-[42px] text-[#0b2e26] leading-tight">
                  FRESH ROOTS <br /> PURE JOY
                </h2>

                <img src={hibis} className="w-20 sm:w-28 md:w-40 mt-4 md:mt-6 rounded-full" />
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="mt-14 md:mt-24 text-center">
            
            <div className="flex justify-center gap-4 mb-6">
              <img src={rose} className="w-10 h-10 md:w-14 md:h-14 rounded-full shadow-xl" />
              <img src={pink} className="w-10 h-10 md:w-14 md:h-14 rounded-full shadow-xl" />
            </div>

            <h2 className="text-[36px] sm:text-[60px] md:text-[90px] text-[#0b2e26] mb-10 md:mb-14"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              EVERGREEN BLISS
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-5">
              
              <div className="bg-[#1e6f5c] rounded-[18px] md:rounded-[22px] p-4 md:p-6">
                <img src={card1} className="w-full h-[220px] md:h-[360px] object-cover rounded-lg" />
              </div>

              <div className="bg-[#e8e5c9] rounded-[18px] md:rounded-[22px] p-4 md:p-4 text-center">
                <h3 className="text-[22px] md:text-[36px] text-[#0b2e26] mb-3 md:mb-4">
                  QUALITY PLANT
                </h3>
                <img src={card2} className="w-full h-[180px] md:h-[260px] object-cover rounded-lg" />
              </div>

              <div className="bg-[#f3d6c2] rounded-[18px] md:rounded-[22px] p-6 md:p-8 relative">
                <p className="text-[#ff6a00] mb-2">Sales</p>

                <p className="text-[#0b2e26] text-[14px] md:text-[18px] max-w-[260px] mb-6 md:mb-10">
                  Learn how to transplant garden plants and keep them happy.
                </p>

                <h3 className="text-[24px] md:text-[42px] text-[#0b2e26] leading-tight">
                  BEST SALES TO BUY PLANTS
                </h3>

                <div className="absolute top-4 right-4 md:top-6 md:right-6 w-[40px] h-[40px] md:w-14 md:h-14 bg-[#ff6a00] rounded-full flex items-center justify-center">
                  <Icon icon="mdi:arrow-top-right" className="text-white" />
                </div>

                <img src={card3} className="absolute md:bottom-0 md:right-0 bottom-[-30px] right-0 w-[60px] md:w-[150px] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}