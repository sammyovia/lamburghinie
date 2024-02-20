import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <div className="flex flex-col items-center justify-center">
        <img src="https://via.placeholder.com/400" alt="About Us" className="rounded-lg mb-4" />
        <p className="text-lg text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in magna in enim bibendum lobortis nec id libero.
        </p>
      </div>
    </div>
  );
};

export default About;

