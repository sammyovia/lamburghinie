import React from "react";

const HeroSection: React.FC<{ image: string; buttonText: string }> = ({ image, buttonText }) => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-8">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">Best In Class Hospitality</h1>
        <p className="text-lg text-gray-600 mb-8">Hospitality redefined. Book workspaces, accomodations, ride sharing and Event centers. Experience best in class hospitality services</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Book now</button>
      </div>
      <img src="#" alt="Hero Image" className="w-1/2 rounded-lg shadow-lg" />
    </div>
  );
};

export default HeroSection;

