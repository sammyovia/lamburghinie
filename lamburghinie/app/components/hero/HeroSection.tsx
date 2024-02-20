import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-8">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">AI Powered Best In Class Hospitality Serivce</h1>
        <p className="text-lg text-gray-600 mb-8">Hospitality redefined. Book workspaces, accomodations, ride sharing and Event centers. Experience best in class AI powered hospitality services tailored to your taste, designed for your convienience.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Book now</button>
      </div>
    </div>
  );
};

export default HeroSection;

