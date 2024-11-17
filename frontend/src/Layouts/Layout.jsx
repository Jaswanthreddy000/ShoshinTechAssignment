// import React, { useState } from 'react';
// import Sidebar from '../components/Sidebar';
// import Dashboard from '../components/Dashboard';
// import Navbar from "../components/Navabr";


// const Layout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar */}
//       <div className={`fixed inset-y-0 left-0 w-60 bg-white z-40 transform sm:relative sm:translate-x-0 
//         ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}>
//         <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Navbar */}
//         <Navbar toggleSidebar={toggleSidebar} />

//         {/* Dashboard */}
//         <div className="flex-1 overflow-auto p-4 ">
//           <Dashboard />
//         </div>
//       </div>

//       {/* Overlay for mobile Sidebar */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
//           onClick={toggleSidebar}
//         ></div>
//       )}
//     </div>
//   );
// };

// export default Layout;
import React, { useState } from 'react';
import Sidebar from '../pages/Sidebar';
import Dashboard from '../pages/Dashboard';
import Navbar from '../pages/Navabr';


const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 w-60 bg-white z-40 transform sm:relative sm:translate-x-0 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar toggleSidebar={toggleSidebar} />

        {/* Dashboard */}
        <div className="flex-1 overflow-auto p-4 flex">
          <Dashboard />
        </div>
      </div>

      {/* Overlay for mobile Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Layout;
