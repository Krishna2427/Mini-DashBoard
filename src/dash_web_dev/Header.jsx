import React from 'react';
import '../styles/header.css';

function Header({ toggleModal, modes, setModes }) {
  return (
    <div className={`header ${modes ? 'dash-dark border-bottom-orange' : 'dash-light'}`}>
      <h1 className="header-title text-center">Dashboard</h1>
      <div className="button-container">
        <button className="add-data-button" onClick={toggleModal}>
          Add New Data
        </button>
        {/* <button className="dark-mode-toggle" onClick={() => setModes(!modes)}>
          {modes ? 'Switch to Light' : 'Switch to Dark'}
        </button> */}
      </div>
    </div>
  );
}

export default Header;
