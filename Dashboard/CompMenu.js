//CompMenu.js



import React from 'react';
import './CompMenu.css';

const CompMenu = () => {
  return (
    <div className="menu-cont">
      <div className="background-image">
        <img
          src="https://raw.githubusercontent.com/ArabIndustriesInc/Reactmachinetask/main/UI/Assets/Briefcase.png"
          alt="Briefcase"
          className="briefcase-image"
        />
        <img
          src="https://raw.githubusercontent.com/ArabIndustriesInc/Reactmachinetask/main/UI/Assets/StatBoard.png"
          alt="Additional Image"
          className="additional-image"
        />
        <div className="nav-buttons-container">
          <button className="nav-button" onClick={() => window.location.href = '/table'}>
            <img
              src="https://raw.githubusercontent.com/ArabIndustriesInc/Reactmachinetask/main/UI/Assets/Circled%20Menu.png"
              className="button-icon"
              alt="Dashboard Icon"
            />
            Dashboard
          </button>
          <button className="nav-button" onClick={() => window.location.href = '/menu'}>
            <img
              src="https://raw.githubusercontent.com/ArabIndustriesInc/Reactmachinetask/main/UI/Assets/Support.png"
              alt="Dashboard Icon"
              className="button-icon" />
            Support
          </button>
          <button className="nav-button" onClick={() => window.location.href = '/help'}>
            <img
              src="https://raw.githubusercontent.com/ArabIndustriesInc/Reactmachinetask/main/UI/Assets/Puzzle.png"
              alt="Dashboard Icon"
              className="button-icon" />
            Plugin
          </button>
          <button className="nav-button" onClick={() => window.location.href = '/support'}>
            <img
              src="https://raw.githubusercontent.com/ArabIndustriesInc/Reactmachinetask/main/UI/Assets/Help.png"
              alt="Support"
              className="button-icon" />
            Help
          </button>
        </div>
        <div className="bottom-text">
          <img src='https://raw.githubusercontent.com/ArabIndustriesInc/Reactmachinetask/main/UI/Assets/Shutdown.png'/>Logout
        </div>
      </div>
    </div>
  );
};

export default CompMenu;
