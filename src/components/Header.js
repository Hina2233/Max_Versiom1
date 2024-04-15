import React from "react";
import Logo from "../assets/pizza logo.png";
import HomeIcon from "../assets/home-icon.png"; // Assuming you have a home icon image
import ProfileIcon from "../assets/Profile-icon.png"; // Assuming you have a profile icon image
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div style={styles.container}>
      <div className="navigate-home-button">
        <Link to="/home" className="home-link">
          <img src={HomeIcon} alt="home" style={styles.icon} />
        </Link>
      </div>
      <img src={Logo} alt="pizzalogo" style={styles.logoLeft} />
      <div style={styles.text}>We Deliver Within 60 Minutes</div>
      <img src={Logo} alt="pizzalogo" style={styles.logoRight} />
      <div className="profile-button">
        
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: "#0D0628",
    padding: "15px 50px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
  },
  logoLeft: {
    height: "40px",
    zIndex: 1,
  },
  logoRight: {
    height: "40px",
    zIndex: 1,
  },
  text: {
    fontSize: 30,
    color: "yellow",
    fontFamily: "Alata, sans-serif",
    opacity: 0,
    animation: "fadeInOut 5s infinite",
    position: "relative",
  },
  icon: {
    height: "30px",
    cursor: "pointer",
  },
};