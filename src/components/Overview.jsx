import React from "react";
import { motion } from 'framer-motion';
import AnimatedLogo from "./AnimatedLogo";
import { IoIosArrowRoundForward } from "react-icons/io";

const Overview = () => {
  return (
    <section className="min-h-screen bg-white z-40 rounded-tl-4xl sticky top-0">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
          <AnimatedLogo />
        
        <div className="flex flex-col justify-center px-6 py-8 sm:px-10 md:p-14 text-left">
          <h2 className="text-gray-600 text-sm sm:text-base tracking-widest">Overview</h2>

          <h3 className="text-green-800 text-base sm:text-lg font-bold py-3">
            Who am I?
          </h3>

          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug text-gray-800">
            I'm a React developer passionate about building modern, responsive, scalable, and secure web applications.
          </p>

          <div className="flex items-center pt-6 text-green-700 hover:text-green-900 transition">
            <span className="pr-1 text-sm sm:text-base">Know more / Hire me</span>
            <IoIosArrowRoundForward className="text-lg sm:text-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
