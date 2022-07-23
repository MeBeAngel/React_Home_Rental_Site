import React from "react";
import Classes from "./Title.module.scss";
import { GiNestBirds } from "react-icons/gi";

export default function Title() {
  return (
    <>
      <div className={Classes.title_wrapper}>
        <span>
          <h1>
            Blackbird Property Rental
            <GiNestBirds className={Classes.nest_icon} />
          </h1>
        </span>
      </div>
    </>
  );
}
