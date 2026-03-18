"use client";

import React, { useState, useEffect } from "react";

function ImageCarousel({ imageUrls }) {
  const [ activeIndex, setActiveIndex] = useState(0);
  const [ slideDone, setSlideDone] = useState(true);
  const [ timeID, setTimeID] = useState(null);

  const slideNext = () => {
    setActiveIndex((val) => (val >= imageUrls.length - 1 ? 0 : val + 1));
  };

  const slidePrev = () => {
    setActiveIndex((val) => (val <= 0 ? imageUrls.length - 1 : val - 1));
  };

  const AutoPlayStop = () => {
    if (timeID) {
      clearTimeout(timeID);
      setSlideDone(false);
    }
  };

  const AutoPlayStart = () => setSlideDone(true);

  useEffect(() => {
    if (slideDone) {
      setSlideDone(false);
      const id = setTimeout(() => {
        slideNext();
        setSlideDone(true);
      }, 5000);
      setTimeID(id);
    }
    return () => clearTimeout(timeID);
  }, [slideDone]);

  return (
    <div
      className="container__slider"
      onMouseEnter={AutoPlayStop}
      onMouseLeave={AutoPlayStart}
    >
      {imageUrls.map((item, index) => {
        return (
          <div
            className={`slider__item ${activeIndex === index ? "active" : ""}`}
            key={index}
          >
            {item}
          </div>
        );
      })}

      <div className="container__slider__links">
        {imageUrls.map((_, index) => (
          <button
            key={index}
            className={`container__slider__links-small ${activeIndex === index ? "container__slider__links-small-active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              setActiveIndex(index);
            }}
          ></button>
        ))}
      </div>

      <button
        className="slider__btn-next"
        onClick={(e) => {
          e.preventDefault();
          slideNext();
        }}
      >
        {">"}
      </button>
      <button
        className="slider__btn-prev"
        onClick={(e) => {
          e.preventDefault();
          slidePrev();
        }}
      >
        {"<"}
      </button>
    </div>
  );
}

export default ImageCarousel;


