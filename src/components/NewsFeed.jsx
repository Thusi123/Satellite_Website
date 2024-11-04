import React from 'react';
import image1 from '../assets/id_1.jpg';
import image2 from '../assets/id_2.jpg';
import image3 from '../assets/id_3.jpg';
import image4 from '../assets/id_4.jpg';
import image5 from '../assets/id_5.jpg';

const newsData = [
  { 
    id: 1, 
    title: 'Discovers New Exoplanet', 
    date: '2024-10-25',
    image: image1
  },
  { 
    id: 2, 
    title: 'Mars Rover Sends New Images', 
    image: image2
  },
  { 
    id: 3, 
    title: 'Asteroid Mission Set for Launch', 
    image: image3
  },
  { 
    id: 4, 
    title: 'Apollo 11 Moon Landing', 
    image: image4
  },

  { 
    id: 5, 
    title: 'Boeing-made satellite breaks up in space', 
    image: image5
  },
  
  
];

const NewsFeed = () => {
  return (
    <div className="p-8 bg-gray-100 flex flex-col md:flex-row md:space-x-5 space-y-4 md:space-y-0 justify-center items-center">
      {newsData.map(news => (
        <div 
          key={news.id} 
          className="relative w-64 h-96 bg-cover bg-center rounded overflow-hidden shadow-md"
          style={{ backgroundImage: `url(${news.image})` }}
        >
          {/* Overlay for text */}
          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 p-4 text-white flex items-center justify-between">
            <h3 className="text-lg font-semibold">{news.title}</h3>
            <button 
              className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center transition-transform transform hover:scale-110"
              aria-label="Read more"
            >
              ➔
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
