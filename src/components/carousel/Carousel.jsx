import React, { useEffect, useState } from "react";
import Classes from "./Carousel.module.scss";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export default function Carousel({slides, autoPlay, controls}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const length = slides.length;


  // Autoplay Carousel Images when enabled
  useEffect(() => {
    if (autoPlay === 'yes') {
      const autoPlay = setInterval(() => {
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
      }, 4000);
                 // clearing interval
      return () => clearInterval(autoPlay);
    }

  });


// Manually transition to next slide if controls are enabled
  const nextSlide = () => {
    setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
    console.log(currentSlide);
  };

  // Manually transition to prev slide if controls are enabled
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
    console.log(currentSlide);
  };

  // If no slide data
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }



  return (
    <section className={Classes.carousel} data-autoplay={autoPlay} data-controls={controls}  >
      {controls === 'yes' && 
       <>
            <FaArrowAltCircleLeft
              className={Classes.left_arrow}
              onClick={prevSlide}
              />
            <FaArrowAltCircleRight
              className={Classes.right_arrow}
              onClick={nextSlide}
            />
        </>
      }


      {SliderData.map((slide, index) => {
        return (
          <div className={ index === currentSlide ? 
            `${Classes.slide} ${Classes.active}` : `${Classes.slide}`}
            key={index}
          >
            {index === currentSlide && (
              <img className={Classes.image} src={slide.image} alt="Houses" />
            )}
          </div>
        );
      })}
    </section>
  );
}
