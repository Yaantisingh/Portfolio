import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavbarComponent';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';  // Assuming you have a Contact component
import Skills from './components/Skills';    // Assuming you have a Skills component
import Projects from './components/Projects';// Assuming you have a Projects component

const App = () => {
  const [selectedTab, setSelectedTab] = useState("Home");

  const renderContent = () => {
    switch (selectedTab) {
      case "Home":
        return <Home />;
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      case "Skills":
        return <Skills />;
      case "Projects":
        return <Projects />;
      default:
        return <Home />;
    }
  };

  return (
    <div className='main-page'>
      <div>
        <NavbarComponent selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        {renderContent()}
        <Footer selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>
    </div>
  );
}

export default App;
