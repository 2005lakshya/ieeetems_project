import React from "react";
import "./App.css";
import banner from "./assets/banner.png";
import searchIcon from "./assets/search-icon.svg";
import arrowIcon from "./assets/arrow.svg";
import photo1 from "./assets/restaurant photo1.jpg";
import photo2 from "./assets/restaurant photo2.jpg";
import photo3 from "./assets/restaurant photo3.jpg";
import category1 from "./assets/category1.jpg";
import category2 from "./assets/category2.jpg";
import category3 from "./assets/category3.jpg";
import category4 from "./assets/category4.jpg";
import category5 from "./assets/category5.jpg";
import category6 from "./assets/category6.jpg";
import ieeeLogo from "./assets/ieee-footer.svg";

function App() {
  return (
    <div className="wrapper">
      {/* NAVBAR */}
      <div className="navbar">
        <div className="navbar-content">
          <div className="logo-box">
            <div className="logo-text">VIT FOODFINDER</div>
          </div>
          <div className="nav-buttons">
            <button className="nav-btn">SIGN IN</button>
           <button className="nav-btn">ABOUT US</button>
        </div>
      </div>
    </div>


      {/* BANNER */}
      <div className="banner">
        <img src={banner} alt="Banner" className="banner-image" />
      </div>

      {/* CAROUSEL DOTS */}
      <div className="carousel-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>

      {/* SEARCH BAR */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search restaurant"
        />
        <img src={searchIcon} alt="Search" className="search-icon" />
      </div>

      {/* TRENDING SECTION */}
      <div className="trending-section">
        <h2 className="trending-title">Trending</h2>
        <div className="restaurant-cards">
          {/* Card 1 */}
          <div className="restaurant-card">
            <img src={photo1} alt="Restaurant 1" className="restaurant-img" />
            <div className="restaurant-info">
              <div className="restaurant-name">Restaurant A</div>
              <div className="restaurant-address">123 street, ABC road, City</div>
              <div className="restaurant-rating">
                <span className="rating-number">5.0</span>
                <div className="restaurant-stars">
                  <svg width="137" height="30" viewBox="0 0 137 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M87.7339 25.8831L89.6839 17.4533L83.144 11.7835L91.7838 11.0335L95.1437 3.08368L98.5036 11.0335L107.143 11.7835L100.604 17.4533L102.554 25.8831L95.1437 21.4132L87.7339 25.8831Z" fill="#FFBF51"/>
                  <path d="M114.533 26.1994L116.483 17.7696L109.943 12.0997L118.583 11.3498L121.943 3.39996L125.303 11.3498L133.943 12.0997L127.403 17.7696L129.353 26.1994L121.943 21.7295L114.533 26.1994Z" fill="#FFBF51"/>
                  <path d="M34.1354 25.8831L36.0854 17.4533L29.5455 11.7835L38.1853 11.0335L41.5452 3.08368L44.9051 11.0335L53.5449 11.7835L47.0051 17.4533L48.955 25.8831L41.5452 21.4132L34.1354 25.8831Z" fill="#FFBF51"/>
                  <path d="M60.9347 25.8831L62.8847 17.4533L56.3448 11.7835L64.9846 11.0335L68.3445 3.08368L71.7044 11.0335L80.3442 11.7835L73.8044 17.4533L75.7543 25.8831L68.3445 21.4132L60.9347 25.8831Z" fill="#FFBF51"/>
                  <path d="M7.33622 25.3206L9.28617 16.8908L2.74634 11.221L11.3861 10.471L14.746 2.52118L18.1059 10.471L26.7457 11.221L20.2059 16.8908L22.1558 25.3206L14.746 20.8507L7.33622 25.3206Z" fill="#FFBF51"/>
                </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="restaurant-card">
            <img src={photo2} alt="Restaurant 2" className="restaurant-img" />
            <div className="restaurant-info">
              <div className="restaurant-name">Restaurant B</div>
              <div className="restaurant-address">123 street, ABC road, City</div>
              <div className="restaurant-rating">
                <span className="rating-number">5.0</span>
                <div className="restaurant-stars">
                  <svg width="137" height="30" viewBox="0 0 137 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M87.7339 25.8831L89.6839 17.4533L83.144 11.7835L91.7838 11.0335L95.1437 3.08368L98.5036 11.0335L107.143 11.7835L100.604 17.4533L102.554 25.8831L95.1437 21.4132L87.7339 25.8831Z" fill="#FFBF51"/>
                  <path d="M114.533 26.1994L116.483 17.7696L109.943 12.0997L118.583 11.3498L121.943 3.39996L125.303 11.3498L133.943 12.0997L127.403 17.7696L129.353 26.1994L121.943 21.7295L114.533 26.1994Z" fill="#FFBF51"/>
                  <path d="M34.1354 25.8831L36.0854 17.4533L29.5455 11.7835L38.1853 11.0335L41.5452 3.08368L44.9051 11.0335L53.5449 11.7835L47.0051 17.4533L48.955 25.8831L41.5452 21.4132L34.1354 25.8831Z" fill="#FFBF51"/>
                  <path d="M60.9347 25.8831L62.8847 17.4533L56.3448 11.7835L64.9846 11.0335L68.3445 3.08368L71.7044 11.0335L80.3442 11.7835L73.8044 17.4533L75.7543 25.8831L68.3445 21.4132L60.9347 25.8831Z" fill="#FFBF51"/>
                  <path d="M7.33622 25.3206L9.28617 16.8908L2.74634 11.221L11.3861 10.471L14.746 2.52118L18.1059 10.471L26.7457 11.221L20.2059 16.8908L22.1558 25.3206L14.746 20.8507L7.33622 25.3206Z" fill="#FFBF51"/>
                </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="restaurant-card">
            <img src={photo3} alt="Restaurant 3" className="restaurant-img" />
            <div className="restaurant-info">
              <div className="restaurant-name">Restaurant C</div>
              <div className="restaurant-address">123 street, ABC road, City</div>
              <div className="restaurant-rating">
                <span className="rating-number">5.0</span>
                <div className="restaurant-stars">
                  <svg width="137" height="30" viewBox="0 0 137 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M87.7339 25.8831L89.6839 17.4533L83.144 11.7835L91.7838 11.0335L95.1437 3.08368L98.5036 11.0335L107.143 11.7835L100.604 17.4533L102.554 25.8831L95.1437 21.4132L87.7339 25.8831Z" fill="#FFBF51"/>
                  <path d="M114.533 26.1994L116.483 17.7696L109.943 12.0997L118.583 11.3498L121.943 3.39996L125.303 11.3498L133.943 12.0997L127.403 17.7696L129.353 26.1994L121.943 21.7295L114.533 26.1994Z" fill="#FFBF51"/>
                  <path d="M34.1354 25.8831L36.0854 17.4533L29.5455 11.7835L38.1853 11.0335L41.5452 3.08368L44.9051 11.0335L53.5449 11.7835L47.0051 17.4533L48.955 25.8831L41.5452 21.4132L34.1354 25.8831Z" fill="#FFBF51"/>
                  <path d="M60.9347 25.8831L62.8847 17.4533L56.3448 11.7835L64.9846 11.0335L68.3445 3.08368L71.7044 11.0335L80.3442 11.7835L73.8044 17.4533L75.7543 25.8831L68.3445 21.4132L60.9347 25.8831Z" fill="#FFBF51"/>
                  <path d="M7.33622 25.3206L9.28617 16.8908L2.74634 11.221L11.3861 10.471L14.746 2.52118L18.1059 10.471L26.7457 11.221L20.2059 16.8908L22.1558 25.3206L14.746 20.8507L7.33622 25.3206Z" fill="#FFBF51"/>
                </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="arrow-btn">
          <img src={arrowIcon} alt="Next" />
        </div>
      </div>
      {/* CATEGORIES SECTION */}
      <div className="categories-section">
        <div className="categories-title">Categories</div>
        <div className="category-grid">
          <div
            className="category-card"
            data-image
            style={{ "--bg": `url(${category6})` }}
          >
            <div className="category-text">South Indian</div>
          </div>
          <div
            className="category-card"
            data-image
            style={{ "--bg": `url(${category5})` }}
          >
            <div className="category-text">Italian</div>
          </div>
          <div
            className="category-card"
            data-image
            style={{ "--bg": `url(${category4})` }}
          >
            <div className="category-text">North Indian</div>
          </div>
          <div
            className="category-card"
            data-image
            style={{ "--bg": `url(${category3})` }}
          >
            <div className="category-text">Fast Food</div>
          </div>
          <div
            className="category-card"
            data-image
            style={{ "--bg": `url(${category2})` }}
          >
            <div className="category-text">Desserts</div>
          </div>
          <div
            className="category-card"
            data-image
            style={{ "--bg": `url(${category1})` }}
          >
            <div className="category-text">Asian Fusion</div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="footer">
        <div className="ieee-logo">
          <img src={ieeeLogo} alt="Made by IEEE" />
        </div>
      </div>
    </div>
  );
}

export default App;
