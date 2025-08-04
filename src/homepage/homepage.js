import React, { useState, useEffect } from 'react';
import { Search, Star, MapPin, Clock, ChevronLeft, ChevronRight, Pizza, Coffee, Utensils, Heart, ArrowRight, Truck, Zap, Award, Users, Phone, Mail, MapPinIcon, Play, ChefHat, Flame, User, Menu, X } from 'lucide-react';
import './homepage.css';

const ExplorePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [featuredSlide, setFeaturedSlide] = useState(0);
  const [restaurantSlide, setRestaurantSlide] = useState(0);
  const [timeOfDay, setTimeOfDay] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Set greeting based on time
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setTimeOfDay('Good Morning');
    else if (hour < 17) setTimeOfDay('Good Afternoon');
    else setTimeOfDay('Good Evening');
  }, []);

  // Featured restaurants with more details
  const featuredRestaurants = [
    {
      id: 1,
      name: "Royal Feast Palace",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      rating: 4.8,
      cuisine: "Fine Dining • Multi-Cuisine",
      offer: "🎉 Student Discount: 20% OFF with VIT ID",
      description: "Premium dining experience with authentic flavors near VIT campus",
      walkTime: "5 min walk",
      priceRange: "₹₹₹"
    },
    {
      id: 2,
      name: "Street Food Paradise",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
      rating: 4.6,
      cuisine: "Street Food • Chaat • Snacks",
      offer: "🔥 Hot Spot: Most Popular Among Students",
      description: "Authentic street food experience loved by VIT students",
      walkTime: "3 min walk",
      priceRange: "₹"
    },
    {
      id: 3,
      name: "Study Corner Café",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800",
      rating: 4.7,
      cuisine: "Café • Coffee • Study Space",
      offer: "☕ Free WiFi + Student-Friendly Environment",
      description: "Perfect study spot with great coffee and peaceful ambiance",
      walkTime: "2 min walk",
      priceRange: "₹₹"
    }
  ];

  // Popular restaurants for slideshow
  const popularRestaurants = [
    {
      id: 1,
      name: "Spice Garden",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300",
      rating: 4.5,
      cuisine: "North Indian",
      walkTime: "4 min walk",
      priceRange: "₹₹",
      speciality: "Famous for Butter Chicken"
    },
    {
      id: 2,
      name: "Pizza Villa",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300",
      rating: 4.7,
      cuisine: "Italian",
      walkTime: "3 min walk",
      priceRange: "₹₹",
      speciality: "Wood-fired Pizza"
    },
    {
      id: 3,
      name: "Dosa Express",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300",
      rating: 4.6,
      cuisine: "South Indian",
      walkTime: "2 min walk",
      priceRange: "₹",
      speciality: "Crispy Masala Dosa"
    },
    {
      id: 4,
      name: "Café Beans",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=300",
      rating: 4.4,
      cuisine: "Café",
      walkTime: "5 min walk",
      priceRange: "₹₹",
      speciality: "Premium Coffee & Pastries"
    },
    {
      id: 5,
      name: "Burger Junction",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300",
      rating: 4.3,
      cuisine: "Fast Food",
      walkTime: "3 min walk",
      priceRange: "₹₹",
      speciality: "Gourmet Burgers"
    },
    {
      id: 6,
      name: "Tandoor House",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300",
      rating: 4.8,
      cuisine: "Indian",
      walkTime: "6 min walk",
      priceRange: "₹₹₹",
      speciality: "Tandoor Specials"
    }
  ];

  // Enhanced categories with trending info
  const categoryButtons = [
    {
      id: 'indian',
      name: 'Indian Cuisine',
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400',
      icon: ChefHat,
      color: '#e74c3c',
      badge: 'AUTHENTIC'
    },
    {
      id: 'fast-food',
      name: 'Fast Food',
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400',
      icon: Pizza,
      color: '#ff6b35',
      badge: 'QUICK'
    },
    {
      id: 'south-indian',
      name: 'South Indian',
      image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400',
      icon: Heart,
      color: '#27ae60',
      badge: 'HEALTHY'
    },
    {
      id: 'cafe',
      name: 'Cafés & Coffee',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400',
      icon: Coffee,
      color: '#8e44ad',
      badge: 'COZY'
    },
    {
      id: 'desserts',
      name: 'Desserts',
      image: 'https://images.unsplash.com/photo-1488477304112-4944851de03d?w=400',
      icon: Heart,
      color: '#f39c12',
      badge: 'SWEET'
    },
    {
      id: 'chinese',
      name: 'Chinese',
      image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400',
      icon: Utensils,
      color: '#e67e22',
      badge: 'SPICY'
    }
  ];

  // Auto-slide effects
  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedSlide(prev => (prev + 1) % featuredRestaurants.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [featuredRestaurants.length]);

  const nextFeaturedSlide = () => {
    setFeaturedSlide((prev) => (prev + 1) % featuredRestaurants.length);
  };

  const prevFeaturedSlide = () => {
    setFeaturedSlide((prev) => (prev - 1 + featuredRestaurants.length) % featuredRestaurants.length);
  };

  const nextRestaurantSlide = () => {
    setRestaurantSlide((prev) => (prev + 1) % Math.ceil(popularRestaurants.length / 3));
  };

  const prevRestaurantSlide = () => {
    setRestaurantSlide((prev) => (prev - 1 + Math.ceil(popularRestaurants.length / 3)) % Math.ceil(popularRestaurants.length / 3));
  };

  return (
    <div className="explore-page">
      {/* Header */}
      <header className="main-header">
        <div className="header-container">
          <div className="logo">
            <h2>VIT Eats 🍽️</h2>
          </div>
          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <a href="/">Home</a>
            <a href="/restaurants">Restaurants</a>
            <a href="/categories">Categories</a>
            <a href="/about">About</a>
          </nav>
          <div className="header-actions">
            <button className="sign-in-btn">
              <User size={18} />
              Sign In
            </button>
            <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <div className="hero-section">
        <div className="hero-slideshow">
          {featuredRestaurants.map((restaurant, index) => (
            <div
              key={restaurant.id}
              className={`hero-slide ${index === featuredSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${restaurant.image})` }}
            >
              <div className="hero-overlay">
                <div className="hero-content">
                  <div className="hero-greeting">{timeOfDay}, Food Explorer! 👋</div>
                  <h1 className="hero-title">{restaurant.name}</h1>
                  <p className="hero-description">{restaurant.description}</p>
                  <div className="hero-meta">
                    <div className="hero-rating">
                      <Star size={20} fill="currentColor" />
                      <span>{restaurant.rating}</span>
                    </div>
                    <div className="hero-delivery">
                      <MapPin size={18} />
                      <span>{restaurant.walkTime}</span>
                    </div>
                    <div className="hero-price">
                      <span>{restaurant.priceRange}</span>
                    </div>
                  </div>
                  <button className="hero-cta">
                    <ArrowRight size={18} />
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          <div className="slide-indicators">
            {featuredRestaurants.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === featuredSlide ? 'active' : ''}`}
                onClick={() => setFeaturedSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Search Section */}
      <div className="search-section">
        <div className="search-container">
          <h2>Discover Amazing Food Near You 🔍</h2>
          <div className="search-bar">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Search restaurants, cuisines, or dishes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <button className="search-btn">Search</button>
          </div>
          <div className="trending-searches">
            <span>Trending:</span>
            <button className="trending-tag">Biryani</button>
            <button className="trending-tag">Pizza</button>
            <button className="trending-tag">Dosa</button>
            <button className="trending-tag">Coffee</button>
          </div>
        </div>
      </div>

      {/* Enhanced Categories */}
      <div className="categories-section">
        <h2 className="section-title">Browse by Cuisine 🍴</h2>
        <div className="category-showcase">
          {categoryButtons.map(category => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="category-card-enhanced"
                onClick={() => setSelectedCategory(category.id)}
                style={{ '--category-color': category.color }}
              >
                <div className="category-image-wrapper">
                  <img src={category.image} alt={category.name} />
                  <div className="category-overlay-enhanced">
                    <IconComponent size={40} />
                    <div className="category-badge-enhanced">{category.badge}</div>
                  </div>
                </div>
                <div className="category-info">
                  <h3>{category.name}</h3>
                  <p>Explore authentic flavors</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Popular Restaurants Slideshow */}
      <div className="restaurants-section">
        <h2 className="section-title">Popular Restaurants 🌟</h2>
        <div className="restaurants-slideshow">
          <div 
            className="restaurants-track"
            style={{ transform: `translateX(-${restaurantSlide * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(popularRestaurants.length / 3) }).map((_, slideIndex) => (
              <div key={slideIndex} className="restaurants-slide">
                {popularRestaurants.slice(slideIndex * 3, slideIndex * 3 + 3).map(restaurant => (
                  <div key={restaurant.id} className="restaurant-card-enhanced">
                    <div className="restaurant-image">
                      <img src={restaurant.image} alt={restaurant.name} />
                      <div className="restaurant-rating">
                        <Star size={14} fill="currentColor" />
                        <span>{restaurant.rating}</span>
                      </div>
                    </div>
                    <div className="restaurant-content">
                      <h3>{restaurant.name}</h3>
                      <p className="restaurant-cuisine">{restaurant.cuisine}</p>
                      <p className="restaurant-speciality">{restaurant.speciality}</p>
                      <div className="restaurant-details">
                        <span className="walk-time">
                          <MapPin size={14} />
                          {restaurant.walkTime}
                        </span>
                        <span className="price-range">{restaurant.priceRange}</span>
                      </div>
                      <button className="view-restaurant-btn">View Details</button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button className="restaurant-slide-btn prev-restaurant-btn" onClick={prevRestaurantSlide}>
            <ChevronLeft size={24} />
          </button>
          <button className="restaurant-slide-btn next-restaurant-btn" onClick={nextRestaurantSlide}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

    </div>
  );
};

export default ExplorePage;