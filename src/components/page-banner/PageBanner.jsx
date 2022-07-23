import React from "react";
import Classes from "./PageBanner.module.scss";

export default function PageBanner(props) {
  return (
    <div className={Classes.page_banner}>
      <h1>{props.title}</h1>
    </div>
  );
}
