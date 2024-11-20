// import React, { useState } from 'react';
// import './App.css';
// import Sidesbar from './dash_web_dev/Sidesbar';
// import Header from './dash_web_dev/Header';
// import Content from './dash_web_dev/Content';
// import DashBord from './dash_web_dev/DashBord';
// import FormContent from './dash_web_dev/FormContent';

// function App() {
//   const [showModal, setShowModal] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true); 
//   cpnst [modes, setModes] = useState(false);

//   const toggleModal = () => setShowModal(!showModal);
//   const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

//   // Close sidebar when clicking outside of it
//   const handleOutsideClick = (e) => {
//     if (!e.target.closest('.sidebar')) {
//       setIsSidebarOpen(false);
//     }
//   };

//   return (
//     <div className="app" onClick={handleOutsideClick}>
//       <Sidesbar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
//       <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
//         <Header toggleModal={toggleModal} />
//         <div className="dashboard-content">
//           <Content />
//           <DashBord />
//         </div>
//       </div>
//       {/* Conditionally render FormContent based on showModal */}
//       {showModal && <FormContent toggleModal={toggleModal} />}
//     </div>
//   );
// }

// export default App;



import React, { useEffect, useState } from 'react';
import './App.css';
import Sidesbar from './dash_web_dev/Sidesbar';
import Header from './dash_web_dev/Header';
import Content from './dash_web_dev/Content';
import DashBord from './dash_web_dev/DashBord';
import FormContent from './dash_web_dev/FormContent';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 
  const [modes, setModes] = useState(false);  // Dark mode state

  const toggleModal = () => setShowModal(!showModal);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Close sidebar when clicking outside of it
  const handleOutsideClick = (e) => {
    if (!e.target.closest('.sidebar')) {
      setIsSidebarOpen(false);
    }
  };

  // Apply dark mode class to the body
  const handleModes = () => {
    if (modes) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  useEffect(() => {
    handleModes();
  }, [modes]);

  return (
    <div className="app" onClick={handleOutsideClick}>
      {/* <Sidesbar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} modes={modes}/> */}
      <Sidesbar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        {/* Pass setModes to Header */}
        <Header toggleModal={toggleModal} setModes={setModes} />
        <div className="dashboard-content">
          <Content />
          <DashBord/>
        </div>
      </div>
      {/* Conditionally render FormContent based on showModal */}
      {showModal && <FormContent toggleModal={toggleModal} />}
    </div>
  );
}

export default App;
