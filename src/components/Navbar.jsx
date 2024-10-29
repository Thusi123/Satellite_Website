import React, { useState, useEffect, useRef } from 'react';
import { FaCaretDown, FaSearch } from 'react-icons/fa';
import Logo from '../assets/satellite.png';

const Navbar = () => {
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isNewsOpen, setIsNewsOpen] = useState(false);
  const [isMultimediaOpen, setIsMultimediaOpen] = useState(false);

  const exploreRef = useRef();
  const newsRef = useRef();
  const multimediaRef = useRef();

  const handleExploreToggle = () => setIsExploreOpen((prev) => !prev);
  const handleNewsToggle = () => setIsNewsOpen((prev) => !prev);
  const handleMultimediaToggle = () => setIsMultimediaOpen((prev) => !prev);

  const exploreOptions = [
    "Home",
    "Missions",
    "Humans in Space",
    "Earth & Climate",
    "The Solar System",
    "The Universe",
    "Science",
    "Aeronautics",
    "Technology",
    "Learning Resources",
    "About NASA",
    "Español"
  ];
  const newsOptions = [
    "All NASA News",
    "Video Series on NASA+",
    "Podcasts",
    "Bologs",
    "Newsletters",
    "Social Media",
    "Media Resources",
    "Events",
    "Upcoming Launches & Landings",
    "Vrisual Guest Program"
    ];
  const multimediaOptions = [
    "NASA+",
    "Images",
    "NASA Live",
    "NASA Apps",
    "Podcasts",
    "Image of the Day",
    "e-Books",
    "Sounds and Ringtones",
    "Interactives",
    "STEM Multimedia"
  ];

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (exploreRef.current && !exploreRef.current.contains(event.target)) {
        setIsExploreOpen(false);
      }
      if (newsRef.current && !newsRef.current.contains(event.target)) {
        setIsNewsOpen(false);
      }
      if (multimediaRef.current && !multimediaRef.current.contains(event.target)) {
        setIsMultimediaOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-black text-white px-8 py-5 flex items-center justify-between">

      {/* Left side: Explore dropdown and search */}
      <div className="flex items-center space-x-4">
        <div className="relative" ref={exploreRef}>
          <span className="font-bold cursor-pointer" onClick={handleExploreToggle}>
            Explore
          </span>
          <FaCaretDown onClick={handleExploreToggle} className="cursor-pointer" />
          {isExploreOpen && (
            <div className="absolute mt-2 w-48 bg-black text-white rounded shadow-lg z-50">
              <ul>
                {exploreOptions.map((option, index) => (
                  <li key={index} className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-800 text-white px-3 py-1 rounded focus:outline-none placeholder-gray-400"
          />
          <FaSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Center:logo */}
      <div>
        <img src={Logo} alt="Logo" className="h-16" />
      </div>

      {/* Right side: Links */}
      <div className="flex items-center space-x-6">
        {/* News & Events dropdown */}
        <div className="relative" ref={newsRef}>
          <span className="cursor-pointer" onClick={handleNewsToggle}>
            News & Events
          </span>
          <FaCaretDown onClick={handleNewsToggle} className="cursor-pointer" />
          {isNewsOpen && (
            <div className="absolute mt-2 w-48 bg-black text-white rounded shadow-lg z-50">
              <ul>
                {newsOptions.map((option, index) => (
                  <li key={index} className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Multimedia dropdown */}
        <div className="relative" ref={multimediaRef}>
          <span className="cursor-pointer" onClick={handleMultimediaToggle}>
            Multimedia
          </span>
          <FaCaretDown onClick={handleMultimediaToggle} className="cursor-pointer" />
          {isMultimediaOpen && (
            <div className="absolute mt-2 w-48 bg-black text-white rounded shadow-lg z-50">
              <ul>
                {multimediaOptions.map((option, index) => (
                  <li key={index} className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                    {option}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div className="flex items-center space-x-1">
          <span>NASA+</span>
          <span className="bg-red-600 text-white text-xs px-1 rounded">LIVE</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
