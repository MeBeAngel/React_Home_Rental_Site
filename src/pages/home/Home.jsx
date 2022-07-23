import React from "react";
import Classes from "./Home.module.scss";
import Carousel from "../../components/carousel/Carousel";
import { SliderData } from "../../components/carousel/SliderData";
import CircleCarousel from "../../components/circle-carousel/CircleCarousel";
import Slogan from "../../assets/images/slogan/slogan.png";
import Cards from "../../components/cards/Cards";
import Title from "../../components/title/Title";

export default function Home() {
  return (
      <main className={`styled-background ${Classes.home_wrapper}`}>
        <section className={Classes.home_left}>
          <Carousel slides={SliderData} autoPlay="yes" controls="no" />
          <CircleCarousel />
          <div className={Classes.overlay}></div>
          <img className={Classes.slogan} src={Slogan} alt="" />
        </section>
        <section className={Classes.home_right}>
          {/* <Title /> */}
          <Cards />
        </section>
      </main>
  );
}
