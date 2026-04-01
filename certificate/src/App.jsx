import React, { useRef } from "react";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";
import logo from "./assets/jas.png";

export default function App() {
  const letterRef = useRef(null);

  // 📸 Download Image
  const downloadImage = async () => {
    if (!letterRef.current) return;

    const dataUrl = await toPng(letterRef.current, {
      cacheBust: true,
      pixelRatio: 2,
    });

    const link = document.createElement("a");
    link.download = "certificate.png";
    link.href = dataUrl;
    link.click();
  };

  // 📄 Download PDF
  const downloadPDF = async () => {
    if (!letterRef.current) return;

    const dataUrl = await toPng(letterRef.current, {
      cacheBust: true,
      pixelRatio: 2,
    });

    const pdf = new jsPDF("p", "mm", "a4");

    const imgWidth = 210;
    const imgHeight = 297;

    pdf.addImage(dataUrl, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("certificate.pdf");
  };

  return (
    <div className="flex flex-col items-center gap-4 p-5 bg-gray-200 min-h-screen">

      {/* Buttons */}
      <div className="space-x-4">
        <button
          onClick={downloadImage}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Download Image
        </button>

        <button
          onClick={downloadPDF}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Download PDF
        </button>
      </div>

      {/* Certificate */}
      <div
        ref={letterRef}
        className="w-[794px] min-h-[1123px] bg-white shadow-md"
      >
        {/* Top Design */}
        <div className="relative h-[30px] overflow-hidden bg-gray-600">
          <div className="absolute top-0 right-0 w-[85%] h-full bg-yellow-400"></div>
          <div className="absolute top-0 left-0 w-[30%] h-full bg-gray-600 skew-x-[-75deg] rounded-br-xl"></div>
          <div
            className="absolute top-0 w-[13%] h-full bg-gray-200 skew-x-[-75deg] rounded-br-xl"
            style={{ left: "220px" }}
          ></div>
          <div
            className="absolute top-0 w-[12%] h-full bg-yellow-500 skew-x-[-75deg] rounded-br-xl"
            style={{ left: "320px" }}
          ></div>
        </div>

        <div className="relative h-[30px] overflow-hidden bg-gray-200">
          <div className="absolute top-0 right-0 w-[85%] h-full bg-yellow-50"></div>
          <div className="absolute top-0 left-0 w-[30%] h-full bg-gray-200 skew-x-[-75deg] rounded-br-xl"></div>
          <div
            className="absolute top-0 w-[13%] h-full bg-gray-50 skew-x-[-75deg] rounded-br-xl"
            style={{ left: "220px" }}
          ></div>
        </div>

        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex items-center gap-4">
            <img src={logo} alt="logo" className="w-16 h-16 rounded-full" />
            <div>
              <h1 className="text-2xl font-bold text-[#1f2a44]">
                JAS <span className="text-blue-700">DigiCraftTek</span>
              </h1>
              <p className="text-sm text-gray-600">
                A Business Unit of JAS Group of Enterprises
              </p>
              <p className="text-sm font-semibold text-gray-700">
                MSME REG.NO: UDYAM-TN-09-0008383
              </p>
            </div>
          </div>

          <div className="text-sm text-gray-700 text-right leading-6">
            <p>Office: 2/51A/234, Leon Nagar,</p>
            <p>Colachel, Kanniyakumari District,</p>
            <p>Tamil Nadu - 629 159, South India.</p>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="bg-[#2f5d6a] text-white flex justify-between px-6 py-2 text-sm mb-10">
          <p>📞 +91 89035 92820</p>
          <p>✉ contact@jasdigicrafttek.in</p>
          <p>🌐 www.jasdigicrafttek.in</p>
        </div>

        {/* Content */}
        <div className="px-10 text-gray-800 leading-8 text-[17px]">

          <h2 className="text-center font-bold text-xl mb-10 tracking-wide">
            TO WHOMSOEVER IT MAY CONCERN
          </h2>

          <p className="mb-6 text-justify">
            This is to certify that <b>Mr. R. Praveen</b> has completed a{" "}
            <b>3-month Trainee Engagement Program</b> as a{" "}
            <b>MERN Full Stack Web Development Trainee</b> at{" "}
            <b>JAS DigiCraftTek</b>, from <b>28 January 2025 to 28 April 2025</b>.
          </p>

          <p className="mb-6 text-justify">
            During the training period, he demonstrated consistent punctuality,
            sincerity, and dedication towards his assigned responsibilities. He
            exhibited strong technical aptitude, a positive and professional attitude,
            and a proactive willingness to learn and adapt. He approached tasks with
            responsibility and showed steady progress throughout the engagement.
          </p>

          <p className="mb-6 text-justify">
            His overall performance during the training period was{" "}
            <b>satisfactory and commendable</b>, reflecting both his commitment and
            potential in web development.
          </p>

          <p className="text-justify">
            We appreciate his contributions during his tenure with us and wish him
            continued success in all his future personal and professional endeavors.
          </p>

        </div>
      </div>
    </div>
  );
}