import React from 'react';
import './css/Navbar.css';

const NavbarComponent = ({ selectedTab, setSelectedTab }) => {
  const handleOnClick = (tabName) => {
    setSelectedTab(tabName);
  }

  return (
    <header className="d-flex justify-content-center py-3 nav-page">
      <ul className="nav nav-pills nav-page">
        <li className="nav-item" onClick={() => handleOnClick("Home")}>
          <a href="#" className={selectedTab === "Home" ? "nav-link active" : "nav-link"} aria-current="page">Home</a>
        </li>
        <li className="nav-item" onClick={() => handleOnClick("Skills")}>
          <a href="#" className={selectedTab === "Skills" ? "nav-link active" : "nav-link"}>Skills</a>
        </li>
        <li className="nav-item" onClick={() => handleOnClick("Projects")}>
          <a href="#" className={selectedTab === "Projects" ? "nav-link active" : "nav-link"}>Projects</a>
        </li>
        <li className="nav-item" onClick={() => handleOnClick("Contact")}>
          <a href="#" className={selectedTab === "Contact" ? "nav-link active" : "nav-link"}>Contact</a>
        </li>
        <li className="nav-item" onClick={() => handleOnClick("About")}>
          <a href="#" className={selectedTab === "About" ? "nav-link active" : "nav-link"}>About</a>
        </li>
      </ul>
    </header>
  );
}

export default NavbarComponent;
