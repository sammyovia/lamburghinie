import React from "react";

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <div className="flex flex-col items-center justify-center">
        <img src="https://via.placeholder.com/400" alt="About Us" className="rounded-lg mb-4" />
        <p className="text-lg text-gray-600">
          Lamburghninie is a Hospitality service company that offers unique services to clients from accomodations, workspaces, short stays, luxurious ride sharing and Event centers. Our accomodations comes with exquisite meals. All of our services can be accessed at your finger tips, or at your voice command.
        </p>
      </div>
    </div>
  );
};

export default About;

