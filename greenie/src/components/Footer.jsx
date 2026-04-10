import React from "react";
import { Icon } from "@iconify/react";
import flower from "../assets/flower.png";

export default function GreenieFooter() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&display=swap');
        `}
      </style>

      <footer className="w-full bg-gradient-to-b from-[#062b22] to-[#031f19] text-white px-4 sm:px-6 md:px-16 py-10 relative overflow-hidden">
        <div className="max-w-[1800px] mx-auto">
          
          {/* TOP GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 md:gap-16 mb-12 md:mb-20 text-center md:text-left">
            
            {/* BRAND */}
            <div>
              <h1 className="text-[36px] sm:text-[48px] md:text-[60px] font-semibold">
                Greenie<span className="text-orange-500">.</span>
              </h1>

              <p className="mt-4 md:mt-6 text-white/80 text-[16px] sm:text-[18px] md:text-[22px] max-w-[280px] mx-auto md:mx-0">
                Nature’s beauty brought closer to your home
              </p>
            </div>

            {/* CARD */}
            <div className="flex justify-center md:block">
              <div className="border border-white/20 rounded-[20px] p-4 md:p-6 w-full max-w-[300px] md:max-w-[320px]">
                
                <div className="flex gap-[2px] mb-4">
                  {[...Array(30)].map((_, i) => (
                    <div
                      key={i}
                      className="bg-white"
                      style={{
                        width: i % 2 === 0 ? "2px" : "4px",
                        height: "40px",
                      }}
                    />
                  ))}
                </div>

                <p className="text-white/80 text-sm mb-4">
                  Plant triggers serotonin, and reduces anxiety.
                </p>

                <div className="border-t border-white/20 my-3"></div>

                <div className="flex justify-between items-center">
                  <span className="text-[18px] md:text-[22px] font-semibold">
                    363039
                  </span>
                  <span className="text-white/80 text-sm">
                    Greenie Plant Shop
                  </span>
                </div>
              </div>
            </div>

            {/* COMPANY */}
            <div>
              <h3 className="text-[18px] md:text-[22px] mb-4 md:mb-6">Company</h3>
              <ul className="space-y-3 md:space-y-4 text-white/80 text-[14px] md:text-[18px]">
                <li className="flex items-center justify-center md:justify-start gap-2">
                  Shop Plants
                  <Icon icon="mdi:chevron-down" />
                </li>
                <li>Plant Styling Ideas</li>
                <li>Plant Care Tips</li>
                <li>Plant Styling Services</li>
              </ul>
            </div>

            {/* LINKS */}
            <div className="grid grid-cols-2 gap-6 md:gap-10">
              <div>
                <h3 className="text-[18px] md:text-[22px] mb-4 md:mb-6">
                  All plant idea
                </h3>
                <ul className="space-y-3 md:space-y-4 text-white/80 text-[14px] md:text-[18px]">
                  <li>Accessories</li>
                  <li>Sustainability</li>
                  <li>Soil & Fertilizers</li>
                  <li>Gardening Tools</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[18px] md:text-[22px] mb-4 md:mb-6">
                  Tips share
                </h3>
                <ul className="space-y-3 md:space-y-4 text-white/80 text-[14px] md:text-[18px]">
                  <li>Agriculture</li>
                  <li>Bio Farming</li>
                  <li>Resources</li>
                  <li>Indoor Plants</li>
                </ul>
              </div>
            </div>
          </div>

          {/* BIG TEXT */}
          <h1 className="absolute bottom-16 md:bottom-24 left-0 w-full text-center text-[60px] sm:text-[100px] md:text-[180px] font-semibold text-white/5 tracking-widest pointer-events-none">
            GREENIE GREENIE
          </h1>

          {/* FLOWER */}
          <img
            src={flower}
            alt=""
            className="absolute bottom-40 md:bottom-20 left-1/2 -translate-x-1/2 w-[95px] md:w-45"
          />

          {/* BOTTOM BAR */}
          <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 relative z-10 text-center md:text-left">
            
            <p className="text-white/60 text-[14px] md:text-[16px]">
              ©All the rights reserved to{" "}
              <span className="font-semibold">@Rylic Studio 25</span>
            </p>

            <div className="flex items-center gap-4 md:gap-6">
              {["mdi:facebook","mdi:instagram","mdi:linkedin","mdi:twitter"].map((icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#062b22] transition"
                >
                  <Icon icon={icon} width="20" />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 md:gap-8 text-white/70 text-[14px] md:text-[16px]">
              <span>Privacy</span>
              <span>Policy</span>
              <span>Sitemap</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}