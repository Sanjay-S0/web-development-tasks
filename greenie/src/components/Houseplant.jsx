import React from "react";
import { Icon } from "@iconify/react";
import img1 from "../assets/plant2.jpeg";
import img2 from "../assets/plant3.jpeg";
import img3 from "../assets/plant4.jpeg";
import img4 from "../assets/plant5.jpeg";
import leaf from "../assets/leaf.jpeg";

export default function HousePlant() {
  const plants = [
    { id: "P-9845", name: "Asplenium", size: "Partial", img: img1 },
    { id: "P-7845", name: "Succulent", size: "Semi", img: img2 },
    { id: "P-6345", name: "Monstera", size: "Small", img: img3 },
    { id: "P-1945", name: "Aloe Vera", size: "Medium", img: img4 },
  ];

  return (
    <>
      {/* Google Fonts */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Outfit:wght@300;400;500;600&display=swap');
        `}
      </style>

      <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-10 md:py-16 bg-white">
        <div className="max-w-[1800px] mx-auto">
          
          {/* TOP HEADER */}
          <div className="flex flex-col lg:flex-row justify-between items-center mb-10 md:mb-16 gap-6 md:gap-8 text-center lg:text-left">
            
            {/* Title */}
            <h1
              className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[100px] leading-[0.9] text-[#0b2e26] tracking-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              HOUSE <br className="block lg:hidden" />
              PLANT
            </h1>

            {/* Right Info */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5">
              <div className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] rounded-2xl bg-[#f2dce5] flex items-center justify-center">
                <img src={leaf} alt="" className="w-[60px] md:w-[180px]" />
              </div>

              <p
                className="text-[#0b2e26] text-[16px] sm:text-[18px] md:text-[24px] max-w-[280px] sm:max-w-[320px] leading-snug"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Best plants for boosting and purifying oxygen
              </p>
            </div>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {plants.map((plant, i) => (
              <div
                key={i}
                className="bg-green-200 rounded-[18px] md:rounded-[22px] p-4 md:p-6 pt-6 md:pt-8 relative hover:scale-[1.02] transition"
              >
                {/* Top Row */}
                <div className="flex justify-between items-center mb-4 md:mb-6">
                  <span
                    className="text-[#0b2e26] text-[16px] sm:text-[18px] md:text-[22px]"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {plant.id}
                  </span>

                  <div className="flex items-center gap-1 text-[16px] sm:text-[18px] md:text-[22px]">
                    <span className="text-[#0b2e26]">5</span>
                    <Icon icon="mdi:star" className="text-orange-500" />
                  </div>
                </div>

                {/* Image */}
                <div className="flex justify-center items-center h-[160px] sm:h-[200px] md:h-[220px] mb-4 md:mb-6">
                  <img
                    src={plant.img}
                    alt={plant.name}
                    className="h-full object-contain mix-blend-multiply"
                  />
                </div>

                <div className="border-t border-[#d5d3b5] my-2"></div>

                {/* Bottom Info */}
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[#6b7c76] text-xs sm:text-sm mb-1 md:mb-2">
                      PLANT
                    </p>
                    <h3
                      className="text-[20px] sm:text-[24px] md:text-[32px] text-[#0b2e26]"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {plant.name}
                    </h3>
                  </div>

                  <div className="text-right">
                    <p className="text-[#6b7c76] text-xs sm:text-sm mb-1 md:mb-2">
                      SIZE
                    </p>
                    <h3
                      className="text-[20px] sm:text-[24px] md:text-[32px] text-[#0b2e26]"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {plant.size}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}