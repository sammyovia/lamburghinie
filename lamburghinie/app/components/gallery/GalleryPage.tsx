import React from "react";
import ImageGallery from "./ImageGallery";

const GalleryPage: React.FC = () => {
  // Array of image URLs
  const images = [
    "https://img.freepik.com/free-photo/spacious-room-with-wooden-table_1203-1489.jpg?w=1480&t=st=1708456602~exp=1708457202~hmac=ee3cd81195042ae68105362d764ce805e4852ed2e7a693b0bfc48e99107b6b26",
    "https://img.freepik.com/free-photo/3d-rendering-luxury-modern-living-room-with-fabric-sofa_105762-2186.jpg?w=1480&t=st=1708456662~exp=1708457262~hmac=f834c486e0d23e818a436c9d9e08fee4925000bf154ca3386b83b4aa0b94d4ea",
    "https://img.freepik.com/free-photo/african-american-young-woman-sitting-restaurant-using-laptop_23-2147936133.jpg?w=1480&t=st=1708456718~exp=1708457318~hmac=38a3d40f9e1bafa05e26b1f1a987bb33d080b6c612e9cb4b13b57641f9b0ceb3",
    // Add more image URLs as needed
    "https://img.freepik.com/free-photo/beautiful-car-interior-clean-up-service_23-2149212262.jpg?w=1480&t=st=1708456872~exp=1708457472~hmac=f99d916f3424c43e8974de02c28a5eafc773e2279cd352b76903d3a347adc5bf"

  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Explore spaces</h1>
      <ImageGallery images={images} />
    </div>
  );
};

export default GalleryPage;

