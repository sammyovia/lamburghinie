import React from "react";

const HeroSection: React.FC<{ image: string; buttonText: string }> = ({ image, buttonText }) => {
  return (
    <div className="flex items-center justify-between bg-gray-100 p-8">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">AI Powered Best In Class Hospitality Serivce</h1>
        <p className="text-lg text-gray-600 mb-8">Hospitality redefined. Book workspaces, accomodations, ride sharing and Event centers. Experience best in class AI powered hospitality services tailored to your taste, designed for your convienience.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Book now</button>
      </div>
      <img src="https://img.freepik.com/free-photo/3d-rendering-luxury-modern-living-room-with-leather-sofa-lamp_105762-2255.jpg?w=1480&t=st=1708456457~exp=1708457057~hmac=a3a30e1b1952e70815e9904588257bb084e2fb111968064900d340d7d93aed86" alt="Hero Image" className="w-1/2 rounded-lg shadow-lg" />
    </div>
  );
};

export default HeroSection;

