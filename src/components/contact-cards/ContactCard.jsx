import React, { useState } from "react";
import Classes from "./ContactCard.module.scss";

export default function Card(props) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseOver = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  return (
    <div
      className={Classes.contact_card_wrapper}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div className={Classes.card_info}>
        {props.cardReactIcon}
        <h3>{props.cardTitle}</h3>
        <p className={isMouseOver ? Classes.show_para_animation : ""}>
          {props.cardBody}
          <button>Next</button>
        </p>
      </div>
    </div>
  );
}
