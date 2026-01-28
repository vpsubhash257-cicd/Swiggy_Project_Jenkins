import React from "react";
import "./Header.scss";
import swiggyLogo from "../../assets/images/swiggy-logo.png";


const Header = () => {
  return (
    <header className="swiggy-hero">
      {/* NAVBAR */}
      <nav className="navbar">
        <img src={swiggyLogo} alt="Swiggy" className="logo" />

        <div className="nav-links">
          <span>Swiggy Corporate</span>
          <span>Partner with us</span>
          <button className="app-btn">Get the App ↗</button>
          <button className="sign-btn">Sign in</button>
        </div>
      </nav>

      {/* SEARCH BAR */}
      <div className="search-bar">
        <div className="location">
          📍 <span>Enter your delivery location</span>
        </div>
        <div className="divider" />
        <div className="search">
          
          <input placeholder="Search for restaurant, item or more" />
        </div>
      </div>

      {/* CARDS */}
      <div className="cards">
        <div className="card">
          <div className="content">
            <h2>FOOD DELIVERY</h2>
            <p>FROM RESTAURANTS</p>
            <span className="offer">UPTO 60% OFF</span>
            <button>Explore →</button>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <h2>INSTAMART</h2>
            <p>INSTANT GROCERY</p>
            <span className="offer">UPTO 60% OFF</span>
            <button>Explore →</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
