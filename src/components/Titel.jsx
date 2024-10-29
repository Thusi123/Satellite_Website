import React from 'react';
import { FaTimes } from 'react-icons/fa'; // Import the close icon
import nasaLogo from '../assets/NASA.png'; // Ensure this path is correct

const TopBar = () => {
  return (
    <div className="bg-gray-800 text-white p-2 flex items-center justify-between shadow-lg rounded-md">
      {/* Left side: NASA logo and title */}
      <div className="flex items-center space-x-2">
        <img src={nasaLogo} alt="NASA Logo" className="h-6 w-6" />
        <span className="font-semibold text-sm">NASA</span>
      </div>

      {/* Right side: Close icon */}
      <FaTimes className="cursor-pointer text-gray-400 hover:text-white" />
    </div>
  );
};

export default TopBar;
