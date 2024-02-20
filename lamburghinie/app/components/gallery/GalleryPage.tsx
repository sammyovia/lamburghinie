import React from "react";
import ImageGallery from "./ImageGallery";

const GalleryPage: React.FC = () => {
  // Array of image URLs
  const images = [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    // Add more image URLs as needed
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Image Gallery</h1>
      <ImageGallery images={images} />
    </div>
  );
};

export default GalleryPage;

