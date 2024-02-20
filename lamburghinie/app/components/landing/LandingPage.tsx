import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold text-center mb-8">Welcome to Our Website</h1>
      <p className="text-lg text-center text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in magna in enim bibendum lobortis nec id libero.</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
    </div>
  );
};

export default LandingPage;

