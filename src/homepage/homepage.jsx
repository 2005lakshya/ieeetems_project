import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Categories from './categories';  // Remove './homepage/' since you're already in the homepage folder
import Trending from './trending';      // Remove './homepage/' since you're already in the homepage folder
import SearchBar from './searchbar';    // Remove './homepage/' since you're already in the homepage folder
import Header from './header';          // Remove './homepage/' since you're already in the homepage folder

const ExplorePage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <button 
        className="fixed top-4 left-4 z-50 flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        onClick={goBack}
      >
        <ArrowLeft size={20} />
        <span>Home</span>
      </button>

      {/* Header */}
      <Header />
      
      {/* Search Bar */}
      <SearchBar />
      
      {/* Categories */}
      <Categories />
      
      {/* Trending Restaurants */}
      <Trending />
    </div>
  );
};

export default ExplorePage;