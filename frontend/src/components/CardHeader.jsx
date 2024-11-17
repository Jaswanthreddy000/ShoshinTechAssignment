import React from 'react';
import { AiOutlineDown } from 'react-icons/ai';

const Header = ({ name, date }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="text-lg font-semibold">{name}</div>
      <div className="flex items-center gap-2 text-sm text-gray-500 border border-gray-400 rounded-md p-2">
        <div>{date}</div>
        <AiOutlineDown />
      </div>
    </div>
  );
};

export default Header;
