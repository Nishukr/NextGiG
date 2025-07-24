import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/nishu.jpg"; // Ensure the path is correct

const Footer = () => {
  return (
    <footer className="bg-blue-50 py-6">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-base font-medium">Developed by Nishu Kumar</p>
          
          {/* Corrected usage of <img> instead of Image */}
          <img
            src={img}
            alt="Nishu Kumar"
            width={50}
            height={50}
            className="rounded-full shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>
        <h1 className="text-2xl font-bold">
          <span className="text-[#6B3AC2]">Next</span>{" "}
          <span className="text-[#FA4F09]">GiG</span>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
