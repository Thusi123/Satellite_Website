import React from 'react';

const newsData = [
  { id: 1, title: 'NASA Discovers New Exoplanet', date: '2024-10-25' },
  { id: 2, title: 'Mars Rover Sends New Images', date: '2024-10-20' },
  { id: 3, title: 'Asteroid Mission Set for Launch', date: '2024-10-15' },
];

const NewsFeed = () => {
  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Latest News</h2>
      <div className="space-y-4">
        {newsData.map(news => (
          <div key={news.id} className="p-4 bg-white shadow-md rounded">
            <h3 className="text-xl font-semibold">{news.title}</h3>
            <p className="text-gray-500 text-sm">{news.date}</p>
            <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel ligula id risus vestibulum aliquet.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
