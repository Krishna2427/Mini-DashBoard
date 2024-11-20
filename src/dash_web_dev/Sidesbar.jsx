// import React from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';  // Importing icons for the menu toggle
// import '../styles/sidesBar.css';

// function Sidesbar({ isOpen, toggleSidebar }) {
//   return (
//     <div className={`sidebar ${isOpen ? 'expanded' : 'collapsed'}`}>
//       {/* Button to toggle sidebar visibility */}
//       <button onClick={toggleSidebar} className="toggle-button">
//         {/* Displaying icons based on the sidebar state */}
//         {isOpen ? <FaTimes /> : <FaBars />}
//       </button>
      
//       {/* Only show the menu if sidebar is expanded */}
//       {isOpen && (
//         <ul className="menu-list">
//           <li>Dashboard</li>
//           <li>Reports</li>
//           <li>Settings</li>
//         </ul>
//       )}
//     </div>
//   );
// }

// export default Sidesbar;

import React, { useState } from 'react';
import { FaHome, FaSearch, FaCog } from 'react-icons/fa';
import '../styles/sidesBar.css';

const Sidebar = ({modes}) => {

  const [isExpanded, setIsExpanded] = useState(true);  
  const [activeItem, setActiveItem] = useState('home'); 
  const handleToggleSidebar = () => {
    setIsExpanded(!isExpanded); 
  };
  const handleItemClick = (item) => {
    handleToggleSidebar();
    setActiveItem(item); 
  };
  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`} >
      <nav className="sidebar-nav">
        <ul>
          <li
            className={`nav-item ${activeItem === 'home' ? 'active' : ''}`}
            onClick={() => handleItemClick('home')}
          >
            <FaHome />
            {isExpanded && <span>Home</span>}
          </li>
          <li
            className={`nav-item ${activeItem === 'search' ? 'active' : ''}`}
            onClick={() => handleItemClick('search')}
          >
            <FaSearch />
            {isExpanded && <span>Search</span>}
          </li>
          <li
            className={`nav-item ${activeItem === 'settings' ? 'active' : ''}`}
            onClick={() => handleItemClick('settings')}
          >
            <FaCog />
            {isExpanded && <span>Settings</span>}
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;
