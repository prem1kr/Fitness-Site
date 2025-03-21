import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false); 

  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="navbar">
      <video className="navbar-video" src=""
       loop
       autoPlay
       muted
       style={{
         position: 'absolute',
         top: 0,
         left: 0,
         width: '100%',
         height: '80px',
         objectFit: 'cover',
       }}
      />
      <div className="logo">
        <img className="logo-1" src="logo.png" alt="Logo" />
      </div>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
  {[
    { 
      name: "WORKOUT", 
      items: [
        { label: "WORKOUT VIDEOS", path: "/WorkoutVideos" },
        { label: "CUSTOM WORKOUT", path: "/WorkoutCustom" },
      ] 
    },
    {
      name: "PROGRAMS",
      items: [
        { label: "WORKOUT PROGRAM", path: "/WorkoutProgram" },
        { label: "MEALS PLANS", path: "/MealsPlans" },
        { label: "PILOT PROGRAM", path: "/PilotProgram" },
        { label: "ROUTINES", path: "/Routines" },
      ],
    },
    {
      name: "HEALTHY LIVING",
      items: [
        { label: "EXPERT ARTICLE", path: "/ExpertArticle" },
        { label: "HEALTHY RECIPES", path: "/HealthyRecipes" },
        { label: "WELLNESS VIDEOS", path: "/WellnessVideos" },
      ],
    },
    {
      name: "COMMUNITY",
      items: [
        { label: "BLOGS", path: "/Blogs" },
        { label: "REFERRAL PROGRAM", path: "/ReferralProgram" },
        { label: "WHAT'S NEW", path: "/WhatsNew" },
      ],
    },
    {
      name: "ABOUT",
      items: [
        { label: "CAREERS", path: "/Careers" },
        { label: "TUTORIALS", path: "/Tutorials" },
        { label: "OUR TEAM", path: "/OurTeam" },
      ],
    },
  ].map((menu, index) => (
    <li
      key={index}
      className="nav-item dropdown"
      onMouseEnter={() => handleMouseEnter(menu.name)}
      onMouseLeave={handleMouseLeave}
    >
      <span>{menu.name}</span>
      <div
        className={`dropdown-menu ${
          activeDropdown === menu.name ? "active" : ""
        }`}
      >
        {menu.items.map((item, idx) => (
          <Link to={item.path}>{item.label}</Link>
        ))}
      </div>
    </li>
  ))}

        <li className="nav-item">
        <Link to="/Store"> STORES</Link>
        </li>
        <li className="nav-item">
          <Link to="/membership"> MEMBERSHIP</Link>
         </li>
        <li className="nav-item">
          <Link to="/login" className="Login">LOGIN</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
