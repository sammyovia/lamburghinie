import React from "react";

const ImageGallery: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index + 1}`} className="rounded-lg" />
      ))}
    </div>
  );
};

export default ImageGallery;

