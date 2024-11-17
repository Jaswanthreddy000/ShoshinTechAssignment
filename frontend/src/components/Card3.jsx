
import React from 'react';
import { BsPinAngleFill, BsThreeDots } from "react-icons/bs";

const Card3 = ({ name, comment, cardname }) => {
  return (
    <div className="card-container  mb-6">
      {/* Card Header */}
      {cardname  && (
        <div className="card-header text-lg  text-gray-800 mb-2">
          {cardname }
        </div>
      )}
      
      {/* Card Body */}
      <div className="card-body p-4 bg-cardbg rounded-md shadow-md flex flex-col sm:flex-row justify-between items-start">
        {/* First Column: Name and Comment */}
        <div className="flex flex-col">
          <div className="text-lg font-semibold">{name}</div>
          <div className="text-sm text-gray-600 mt-1">{comment}</div>
        </div>

        {/* Second Column: Icons */}
        <div className="flex space-x-4 sm:self-center sm:justify-center w-full sm:w-auto justify-end mt-2 sm:mt-0">
          <div className="cursor-pointer hover:text-blue-500 transition">
            <BsPinAngleFill className="w-5 h-5" />
          </div>
          <div className="cursor-pointer hover:text-blue-500 transition">
            <BsThreeDots className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;

