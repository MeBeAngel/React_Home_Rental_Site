import React from "react";
import Classes from "./Search.module.scss";
import { BsSearch } from "react-icons/bs";

export default function Search() {
  return (
    <section className={Classes.search_wrapper}>
      <div className={Classes.search}>
        <input type="text" placeholder="Search" />
        <button><BsSearch /></button>
      </div>
    </section>
  );
}
