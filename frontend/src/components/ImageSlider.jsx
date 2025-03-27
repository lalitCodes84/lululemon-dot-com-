import React, { useState } from "react";
import { imageData } from "../utils/imageData";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

function ImageSlider() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const nextSlide = () => {
    if (startIndex < imageData.length - itemsPerPage) {
      setStartIndex(startIndex + 1);
    } else {
      setStartIndex(0); // Loop back to start
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    } else {
      setStartIndex(imageData.length - itemsPerPage); // Loop back to end
    }
  };

  return (
    <div className="w-full h-[70vh] px-8 relative mt-8">
      <div className="flex justify-around overflow-hidden">
        {imageData
          .slice(startIndex, startIndex + itemsPerPage)
          .map((item, index) => (
            <div key={index} className="w-1/4 p-2">
              <span>
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-90 object-cover"
                />
              </span>
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
          ))}
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4">
        {imageData.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 mx-1 rounded-full ${
              index === startIndex ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      <div className="flex justify-between mt-4 absolute top-40 w-[94vw] px-2">
        <button
          onClick={prevSlide}
          className="bg-white text-black p-5 mx-2 rounded cursor-pointer"
        >
          <FaAngleLeft />
        </button>

        <button
          onClick={nextSlide}
          className="bg-white text-black p-5 mx-2 rounded cursor-pointer"
        >
          <FaAngleRight />
        </button>
      </div>
      <div className="flex justify-center m-8">
      <a href="" className="bg-white text-black cursor-pointer py-4 px-6 font-bold rounded border-2 hover:bg-black hover:text-white hover:border-black">SHOP WHAT'S NEW</a>
      </div>
    </div>
  );
}

export default ImageSlider;
