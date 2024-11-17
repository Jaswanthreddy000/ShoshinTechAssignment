import React from 'react';

const Card2 = ({ heading, value, imageSrc, menCount, womenCount, percentageChange }) => {
  return (
    <div className="card p-4 rounded-md shadow-md">
      <div className="grid grid-cols-2 gap-3">
        {/* Top-left cell */}
        <div className="flex flex-col justify-center">
          <div className="text-lg font-semibold">{heading}</div>
          <div className="text-3xl font-bold mt-5">{value}</div>
        </div>

        {/* Top-right cell (Image) */}
        <div className="flex justify-center">
          <img src={imageSrc} alt="image" className="w-24 h-24 object-cover rounded-md" />
        </div>

        {/* Bottom-left cell (Men and Women Count) */}
        <div className="flex flex-col space-y-1">
          <div className="flex justify-between">
            <div className="text-customlightgrey">{menCount} Men </div>
          </div>
          <div className="flex justify-between">
            <div className="text-customlightgrey">{womenCount} Women </div>
          </div>
        </div>

        {/* Bottom-right cell (Percentage Change with orange background) */}
        <div className="flex justify-center items-center border border-orange-100 bg-orange-100 p-1 rounded-md">
          <div className="text-sm ">{percentageChange}</div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
