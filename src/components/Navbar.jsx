import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false); // Close the menu when a link is clicked
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="logo">Zubayer Hossen</h1>
        <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={handleLinkClick}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/homeworks"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={handleLinkClick}
              >
                HomeWorks
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/classvideos"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={handleLinkClick}
              >
                Class Videos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/materials"
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={handleLinkClick}
              >
                Materials
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`hamburger ${isOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
