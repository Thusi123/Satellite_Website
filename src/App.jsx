import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import NewsFeed from './components/NewsFeed';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <NewsFeed />
      <Footer />

    </div>
  );
}

export default App;
