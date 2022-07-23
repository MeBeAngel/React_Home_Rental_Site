import React, { useState, useEffect } from "react";
import Classes from "./CircleCarousel.module.scss";
import { circleCarouselData } from "./CircleCarouselData";
import BinocImage from "../../assets/images/carousel-images/binocular.png";

export default function CircleCarousel() {
  //#########
  //# State #
  //#########
  const [randomNum, setRandomNum] = useState();
  const [prevNum, setPrevNum] = useState();
  //#######
  //# End #
  //#######

  //######################################################################
  //# Update state of randomNum with a new random number every 3 seconds #
  //######################################################################
  useEffect(() => {
    const getRandomNumber = setInterval(() => {
      setRandomNum(Math.floor(Math.random() * 6 + 1));
    }, 2000);

    setPrevNum(randomNum);
    return () => clearInterval(getRandomNumber);
  }, [randomNum]);

  //#######
  //# End #
  //#######

  //#######################################################################
  //# Add class .show to Img if randomNum = id                            #
  //# Add class .hide to Img if randomNum != id OR if randomNum = prevNum #
  //#######################################################################
  const handleRandomSlide = (data) => {
    if (randomNum === data.id) {
      return Classes.show;
    } else if (randomNum === prevNum) {
      return Classes.hide;
    } else {
      return Classes.hide;
    }
  };
  //#######
  //# End #
  //#######

  return (
    <div className={Classes.circle_carousel_wrapper}>
      {/* Map Data */}
      {circleCarouselData.map((slide) => {
        return (
          <div key={slide.id} className={Classes.image_item}>
            {slide.id !== randomNum && (
              <div className={Classes.image_overlay}>
                <img src={BinocImage} alt="" />
              </div>
            )}
            <img
              className={`${Classes.circle_image} ${handleRandomSlide(slide)}`}
              src={slide.image}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
}
