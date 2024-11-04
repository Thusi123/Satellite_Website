import React from 'react';
import backgroundImage from '../assets/Heropage.png';

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[500px] md:h-[700px] flex items-center justify-left md:justify-left text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`, 
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 max-w-xl p-6 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-bold">Satellite's Economic Impact</h1>
        <p className="mt-4 text-lg md:text-xl">
          Satellite's leadership on the future of space exploration, scientific discovery, and cutting-edge technology brings value to the American people day in and day out.
        </p>
        <button className="mt-4 px-3 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded">
          <h1 className="text-lg md:text-2xl font-bold">Year 2023 Report</h1>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
