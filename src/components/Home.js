import React from 'react';
import { Link } from 'react-router-dom';
import Banner from "../assets/Wen-Banner-02.png";
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      
      <div className="banner">
        <img 
          src={Banner} 
          alt="Banner" 
          className="bannerImage"
        />
      </div>
      <div className="welcomeMessage">
        <h1>Welcome to Pizza Heaven!</h1>
        <p>Choose your way to pizza perfection.</p>
      </div>
      <div className="buttonsContainer">
        <Link to="/Customize" className="pizza-button">
          Make Your Own Pizza
        </Link>
        <Link to="/PizzaSelection" className="flavours-button">
          Select from Our Flavours
        </Link>
      </div>
    </div>
  );
};

export default Home;