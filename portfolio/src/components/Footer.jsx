import React from 'react';
import './css/Footer.css';

const Footer = ({ selectedTab, setSelectedTab }) => {
  const handleOnClick = (tabName) => {
    setSelectedTab(tabName);
  }

  return (
    <div className="footer-container">
      <footer className="bg">
        <div className="footer-content">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item" onClick={() => handleOnClick("Home")}>
              <a href="#" className={selectedTab === "Home" ? "nav-link px-2 text-white active" : "nav-link px-2 text-white"}>Home</a>
            </li>
            <li className="nav-item" onClick={() => handleOnClick("Skills")}>
              <a href="#" className={selectedTab === "Skills" ? "nav-link px-2 text-white active" : "nav-link px-2 text-white"}>Skills</a>
            </li>
            <li className="nav-item" onClick={() => handleOnClick("Projects")}>
              <a href="#" className={selectedTab === "Projects" ? "nav-link px-2 text-white active" : "nav-link px-2 text-white"}>Projects</a>
            </li>
            <li className="nav-item" onClick={() => handleOnClick("Contact")}>
              <a href="#" className={selectedTab === "Contact" ? "nav-link px-2 text-white active" : "nav-link px-2 text-white"}>Contact</a>
            </li>
            <li className="nav-item" onClick={() => handleOnClick("About")}>
              <a href="#" className={selectedTab === "About" ? "nav-link px-2 text-white active" : "nav-link px-2 text-white"}>About</a>
            </li>
          </ul>
          <p className="text-center text-white">Have a nice day</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
