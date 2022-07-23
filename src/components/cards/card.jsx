import React, { useState } from "react";
import Classes from "./Card.module.scss";
import { FiArrowUpRight } from "react-icons/fi";
import { FiArrowUpLeft } from "react-icons/fi";

export default function Card(props) {
  //###################################################
  //# State to hold whether or not mouse is over card #
  //###################################################
  const [isMouseOver, setIsMouseOver] = useState(false);

  //#############################################
  //# Functions to handle mouseOver and mouseOut#
  //#############################################
  const handleMouseOver = () => {
    setIsMouseOver(true);
  };

  const handleMouseOut = () => {
    setIsMouseOver(false);
  };
  //#######
  //# End #
  //#######

  //####################################################################
  //# Change the border radius of card image based on data-borderCurve #
  //####################################################################

  const borderCurveLogic = () => {
    if (props.borderCurve === "left") {
      return Classes.border_curve_left;
    } else if (props.borderCurve === "right") {
      return Classes.border_curve_right;
    } else {
      return ``;
    }
  };
  //#######
  //# End #
  //#######

  return (
    <div
      className={Classes.card}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseOut}
      style={
        props.borderCurve === "left"
          ? { alignItems: "flex-start" }
          : { alignItems: "flex-end" }
      }
    >
      {/* Card image */}
      <img
        className={borderCurveLogic()}
        src={props.image}
        alt=""
        data-bordercurve={props.borderCurve}
      />
      {/* Card location text */}
      <span>{props.location}</span>

      {/* Card style type text and arrow */}
      {/* Conditionally change which h2 and arrow icon is used based on entered props.bodyCurve direction */}
      {/* Animate h2 and arrows if isMouseOver === true */}
      {props.borderCurve === "left" ? (
        <h2>
          {props.styleType}
          <FiArrowUpRight
            className={isMouseOver ? Classes.wiggle_right_animation : ""}
          />
        </h2>
      ) : (
        <h2>
          <FiArrowUpLeft
            className={isMouseOver ? Classes.wiggle_left_animation : ""}
          />{" "}
          {props.styleType}
        </h2>
      )}
    </div>
  );
}
