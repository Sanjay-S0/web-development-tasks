import React from "react";
import { Icon } from "@iconify/react";
import gardener from "../assets/gardener.png";
import miniplant from "../assets/miniplant.png";
import user from "../assets/user.png";
import rightplant from "../assets/rightplant.png";

export default function Livingplants() {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Outfit:wght@300;400;500;600&display=swap');
        `}
      </style>

      <section className="w-full bg-[#f7f7f5] px-4 sm:px-6 md:px-20 py-8 md:py-10 overflow-hidden md:top-20" id="blog">
        {/* Heading */}
            <h1
              className="text-[28px] sm:text-[40px] md:text-[60px] leading-[1.1] md:leading-[1] text-[#0b2e26] tracking-tight font-medium md:hidden text-center"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              BRIGHTEN{" "}
              <span className="inline-block">
                <img
                  src={miniplant}
                  alt=""
                  className="w-[40px] sm:w-[60px] md:w-30 inline"
                />
              </span>{" "}
              EVERY <br />
              CORNER WITH FRESH <br />
              LIVING PLANTS
            </h1>
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
          
          {/* LEFT IMAGE */}
          <div className="relative flex justify-center md:block">
            <img
              src={gardener}
              alt="gardener"
              className="w-[260px] sm:w-[350px] md:w-[450px] h-auto md:h-[580px] rounded-[20px] md:rounded-[26px]"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative text-center md:text-left">
            
            {/* Heading */}
            <h1
              className="text-[28px] sm:text-[40px] md:text-[60px] leading-[1.1] md:leading-[1] text-[#0b2e26] tracking-tight font-medium hidden md:block"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              BRIGHTEN{" "}
              <span className="inline-block">
                <img
                  src={miniplant}
                  alt=""
                  className="w-[40px] sm:w-[60px] md:w-30 inline"
                />
              </span>{" "}
              EVERY <br />
              CORNER WITH FRESH <br />
              LIVING PLANTS
            </h1>

            {/* Divider */}
            <div className="border-t border-[#dcdcd8] mt-6 md:mt-10 mb-6 md:mb-10"></div>

            {/* Common Problems */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 text-center sm:text-left">
              <div>
                <h4 className="text-[#ff6a00] text-[18px] sm:text-[22px] md:text-[26px] mb-2 md:mb-4">
                  Common Problems
                </h4>

                <p className="text-[#0b2e26] text-[14px] sm:text-[18px] md:text-[24px] max-w-[600px] leading-relaxed">
                  An easy-going plant and is generally pest-free. Treat pests as
                  soon as they appear.
                </p>
              </div>

              {/* Number */}
              <div className="text-[#ff6a00] text-[28px] sm:text-[40px] md:text-[60px]">
                02
              </div>
            </div>

            {/* Review Card */}
            <div className="mt-6 md:mt-12 bg-white border border-[#e4e4e0] rounded-2xl p-4 md:p-6 flex flex-col sm:flex-row items-center gap-4 md:gap-5 w-full max-w-[520px] mx-auto md:mx-0 shadow-sm">
              
              <img
                src={user}
                alt=""
                className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
              />

              <p className="text-[#0b2e26] text-[14px] sm:text-[16px] md:text-[20px] text-center sm:text-left">
                <span className="font-semibold">- By Greenie Advice</span> -
                controlled pesticides in my garden.
              </p>
            </div>

            {/* Decorative dots (hide on mobile) */}
            <div className="hidden md:block absolute left-[-30px] top-[220px] text-[#0b2e26] opacity-30 text-4xl">
              ....
            </div>

            {/* Right Plant Decoration */}
            <img
              src={rightplant}
              className="
                absolute 
                right-[-50px] bottom-[-35px] 
                md:right-[-90px] md:bottom-[-50px] 
                w-[120px] sm:w-[150px] md:w-45
              "
            />
          </div>
        </div>
      </section>
    </>
  );
}