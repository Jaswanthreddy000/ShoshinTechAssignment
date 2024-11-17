import React from 'react';

const MenuItem = ({ icon: Icon, label, isActive, onClick }) => {
  return (
    <li
      onClick={onClick}
      className={`pl-4 p-2 flex items-center cursor-pointer 
        ${isActive ? 'text-active' : 'text-customlightgrey'} 
        hover:text-active`}
    >
      <Icon className="w-5 h-5 mr-4" />
      <span>{label}</span>
    </li>
  );
};

export default MenuItem;
