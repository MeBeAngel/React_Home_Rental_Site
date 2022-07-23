import React from "react";
import { Link } from "react-router-dom";
import Classes from "./Nav.module.scss";
import { FaEarlybirds } from "react-icons/fa";
import { GiNestBirds } from "react-icons/gi";

export default function Nav() {
  return (
    <nav id="top" className="styled-background">
      <Link className="link-reset" to="/">
        <div className={Classes.logo}>
          <FaEarlybirds className={Classes.logo_image} />
          <h1 className="logo-title">
            BLACKBIRD PROPERTIES <GiNestBirds className={Classes.nest_icon} />
          </h1>
        </div>
      </Link>

      <div className={Classes.links}>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/rental">Rentals</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
