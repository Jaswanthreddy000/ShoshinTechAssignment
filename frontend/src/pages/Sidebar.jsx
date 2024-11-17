import React, { useState } from 'react';
import { FaTachometerAlt, FaUserPlus,FaUser, FaCog, FaChartBar, FaEnvelope } from 'react-icons/fa'; // Correct icon imports from 'react-icons/fa'
import { BsCalendar2EventFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi2";
import { BsHeadset } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import Logo from "../assets/Logo.png";
import MenuItem from '../components/MenuItem'; // Import MenuItem component

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [activeMenu, setActiveMenu] = useState(null); // State to track the active menu item

  // Function to handle the active state of the menu
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed pl-5 inset-y-0 left-0 transform bg-cardbg w-60 z-50
        sm:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}
        transition-transform duration-300 ease-in-out`}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-center h-16 ">
          <img src={Logo} alt="Logo" className="h-10 w-auto mr-2" />
          <h1 className="text-lg font-bold text-[#0A337A]">VASITUM</h1>
        </div>

        {/* Main Menu Section */}
        <div className="mt-8">
          <h2 className="px-4 text-sm font-semibold text-customlightgrey uppercase">Main Menu</h2>
          <ul className="mt-4 space-y-4">
            <MenuItem 
              icon={MdDashboard} 
              label="Dashboard" 
              isActive={activeMenu === 'dashboard'} 
              onClick={() => handleMenuClick('dashboard')} 
            />
            <MenuItem 
              icon={FaUserPlus}  // Use FaUserPlus for Recruitment
              label="Recruitment" 
              isActive={activeMenu === 'recruitment'} 
              onClick={() => handleMenuClick('recruitment')} 
            />
            <MenuItem 
              icon={BsCalendar2EventFill} 
              label="Schedule" 
              isActive={activeMenu === 'schedule'} 
              onClick={() => handleMenuClick('schedule')} 
            />
            <MenuItem 
              icon={HiUserGroup} 
              label="Employee" 
              isActive={activeMenu === 'employee'} 
              onClick={() => handleMenuClick('employee')} 
            />
            <MenuItem 
              icon={FaCog} 
              label="Department" 
              isActive={activeMenu === 'department'} 
              onClick={() => handleMenuClick('department')} 
            />
          </ul>
        </div>

        {/* Additional Menu Section */}
        <div className="mt-8">
          <h2 className="px-4 text-sm font-semibold text-customlightgrey uppercase">Options</h2>
          <ul className="mt-4 space-y-4">
            <MenuItem 
              icon={ BsHeadset } 
              label="Support" 
              isActive={activeMenu === 'support'} 
              onClick={() => handleMenuClick('support')} 
            />
            <MenuItem 
              icon={IoSettingsSharp} 
              label="Settings" 
              isActive={activeMenu === 'settings'} 
              onClick={() => handleMenuClick('settings')} 
            />
          </ul>
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
        />
      )}
    </>
  );
};

export default Sidebar;
