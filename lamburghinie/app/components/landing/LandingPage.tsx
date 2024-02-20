import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold text-center mb-8">AI powered Smart-stay</h1>
      <p className="text-lg text-center text-gray-600 mb-8">Book accomodations, worksapces, Event centers and plush expensive cars. Our AI powered platform enables users to easily book for our services with just the click of a button. Designed for convienience our platform enables you to book for services with your voice!</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
    </div>
  );
};

export default LandingPage;

