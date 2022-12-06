import React, { useRef, useEffect, useState } from "react";
import CloudGamingSlide from "./slides/CloudGamingSlide";
import DriveToWinSlide from "./slides/DriveToWinSlide";
import FitToPlaySlide from "./slides/FitToPlaySlide";
import IconSlide from "./slides/IconSlide";
import LogidaySlide from "./slides/LogidaySlide";
import LogiplaySlide from "./slides/LogiplaySlide";
import UnleashSlide from "./slides/UnleashSlide";

import { HeroSlideShowStyled } from "./HeroSlideShowStyled";

const heroSlides = [
  <LogidaySlide />,
  <CloudGamingSlide />,
  <DriveToWinSlide />,
  <UnleashSlide />,
  <LogiplaySlide />,
  <FitToPlaySlide />,
  <IconSlide />,
];

const HeroSlideShow = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [peakRight, setPeakRight] = useState(false);
  const [peakLeft, setPeakLeft] = useState(false);

  useEffect(() => console.log(currentSlide));

  const moveArrRight = () => {
    // location.hash('')
    if (scrollRef.current) {
      setCurrentSlide((prev) =>
        prev + 1 <= heroSlides.length - 1 ? prev + 1 : 0
      );
      const scrollWidth = scrollRef.current.offsetWidth;

      if (currentSlide === heroSlides.length - 1) {
        scrollRef.current.scrollLeft = 0;
        return;
      }
      scrollRef.current.scrollLeft += scrollWidth;
    }
  };
  const moveArrLeft = () => {
    if (scrollRef.current) {
      setCurrentSlide((prev) =>
        prev - 1 >= 0 ? prev - 1 : heroSlides.length - 1
      );
      const scrollWidth = scrollRef.current.offsetWidth;
      if (currentSlide === 0) {
        scrollRef.current.scrollLeft = scrollWidth * (heroSlides.length - 1);
        return;
      }
      scrollRef.current.scrollLeft -= scrollWidth;
    }
  };

  return (
    <HeroSlideShowStyled>
      <button
        className='left'
        onClick={moveArrLeft}
        onMouseEnter={() => setPeakLeft(true)}
        onMouseLeave={() => setPeakLeft(false)}
      >
        left
      </button>
      <div ref={scrollRef} className='scrollableArea'>
        {" "}
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            id={`slide${i}`}
            className={`slide ${
              currentSlide === i + 1 && peakLeft
                ? "peakLeft"
                : currentSlide === i - 1 && peakRight
                ? "peakRight"
                : currentSlide === i
                ? "centerSlide"
                : ""
            } ${
              currentSlide === i + 1 || currentSlide === i - 1 ? "sides" : ""
            }`}
          >
            {slide}
          </div>
        ))}
      </div>

      <button
        className='right'
        onClick={moveArrRight}
        onMouseEnter={() => setPeakRight(true)}
        onMouseLeave={() => setPeakRight(false)}
      >
        right
      </button>
    </HeroSlideShowStyled>
  );
};

export default HeroSlideShow;
