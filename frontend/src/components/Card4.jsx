
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
       
      </div>
    </div>
  );
};

export default Card3;

