import React from 'react';
import Logo from '../assets/satellite.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-6 md:p-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
          <img src={Logo} alt="Logo" className="w-16 mb-4 mx-auto md:mx-0" />
          <h2 className="font-bold text-lg">Satellite</h2>
          <p className="text-sm mt-2">
            Satellite explores the unknown in air and space, innovates for the benefit of humanity, and inspires the world through discovery.
          </p>
          <p className="mt-4 text-sm text-blue-500 hover:underline cursor-pointer">About Satellite Mission</p>
          <button className="mt-4 text-white bg-red-500 px-4 py-2 rounded-full hover:bg-red-600">Join Us</button>
        </div>

        {/* Center Section */}
        <div className="grid grid-cols-2 gap-4 text-center md:text-left text-sm">
          <div>
            <p className="hover:underline cursor-pointer">Home</p>
            <p className="hover:underline cursor-pointer">News & Events</p>
            <p className="hover:underline cursor-pointer">Multimedia</p>
            <p className="hover:underline cursor-pointer">NASA+ <span className="text-red-500">LIVE</span></p>
            <p className="hover:underline cursor-pointer">Missions</p>
            <p className="hover:underline cursor-pointer">Humans in Space</p>
            <p className="hover:underline cursor-pointer">Earth & Climate</p>
            <p className="hover:underline cursor-pointer">The Solar System</p>
          </div>
          <div>
            <p className="hover:underline cursor-pointer">The Universe</p>
            <p className="hover:underline cursor-pointer">Science</p>
            <p className="hover:underline cursor-pointer">Aeronautics</p>
            <p className="hover:underline cursor-pointer">Technology</p>
            <p className="hover:underline cursor-pointer">Learning Resources</p>
            <p className="hover:underline cursor-pointer">About</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-left">
          <h3 className="text-sm font-bold mb-4">Follow Satellite</h3>
          <div className="flex justify-center md:justify-start space-x-4 mb-4">
            <a href="#facebook" className="hover:text-gray-400">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#twitter" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#instagram" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#youtube" className="hover:text-gray-400">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#linkedin" className="hover:text-gray-400">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <p className="text-sm hover:underline cursor-pointer mb-2">More Satellite Social Accounts</p>
          <p className="text-sm hover:underline cursor-pointer">Satellite Newsletters</p>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="container mx-auto mt-8 border-t border-gray-700 pt-4 grid grid-cols-2 md:grid-cols-4 text-sm gap-4 text-gray-400 text-center md:text-left">
        <p className="hover:underline cursor-pointer">Sitemap</p>
        <p className="hover:underline cursor-pointer">For Media</p>
        <p className="hover:underline cursor-pointer">Privacy Policy</p>
        <p className="hover:underline cursor-pointer">FOIA</p>
        <p className="hover:underline cursor-pointer">No FEAR Act</p>
        <p className="hover:underline cursor-pointer">Office of the IG</p>
        <p className="hover:underline cursor-pointer">Budget & Annual Reports</p>
        <p className="hover:underline cursor-pointer">Agency Financial Reports</p>
        <p className="hover:underline cursor-pointer">Contact NASA</p>
        <p className="hover:underline cursor-pointer">Accessibility</p>
      </div>
    </footer>
  );
};

export default Footer;
