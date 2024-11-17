import React from 'react';

const Card1 = ({ heading, value, additionalInfo, bgColor, lgColor }) => {
  return (
    <div
      className="card text-left p-4 rounded-md shadow-md"
      style={{ backgroundColor: bgColor }} // Apply hex value for background color
    >
      <div className="card-body">
        <div className="text-lg font-semibold">{heading}</div>
        <div className="text-2xl font-bold mt-2">{value}</div>
       
          <div
            className="text-sm mt-1"
            style={{ color: lgColor }} // Apply hex color only to additionalInfo
          >
            {additionalInfo}
          </div>
       
      </div>
    </div>
  );
};

export default Card1;
