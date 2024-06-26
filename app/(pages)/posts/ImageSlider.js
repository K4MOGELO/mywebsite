"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const ImageSlider = ({ images }) => {
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const overlayRef = useRef(null);

  const openFullscreen = (index) => {
    setCurrentIndex(index);

    setFullscreenImage(index);
    document.body.style.overflow = "hidden";
  };

  const closeFullscreen = () => {
    setFullscreenImage(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (fullscreenImage !== null) {
        if (event.key === "Escape") {
          closeFullscreen();
        }
      }
    };

    const handleOverlayClick = (event) => {
      if (event.target === overlayRef.current) {
        closeFullscreen();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    overlayRef.current?.addEventListener("click", handleOverlayClick);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      overlayRef.current?.removeEventListener("click", handleOverlayClick);
    };
  }, [fullscreenImage]);
  return (
    <div className="">
      {images?.length > 0 ? (
        images.map((imageUrl, index) => (
          <div key={index} onClick={() => openFullscreen(index)}>
            <Image
              alt={`Gallery Image ${index + 1}`}
              className="aspect-square object-cover border border-gray-200  rounded-lg overflow-hidden  transition-transform duration-200 "
              height="900"
              src={imageUrl}
              width="900"
            />
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No images available</p>
      )}

      {fullscreenImage !== null && (
        <div
          onClick={closeFullscreen}
          className="fixed top-0 left-0 w-full h-full bg-black z-50 flex justify-center "
        >
          <Image
            fill
            alt={`Fullscreen Image ${currentIndex + 1}`}
            src={images[currentIndex]}
            className="object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
