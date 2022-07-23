import React from "react";
import Classes from "./BlogCard.module.scss";

export default function BlogCard(props) {

  // Create Excerpt from article content
  const excerpt = (str) => {
    return str.slice(0, 140);
  };

  return (
    <main className={Classes.blog_card_wrapper}>
      <section className={Classes.card_header}>
        <div className={Classes.card_title}>
          <h1>{props.title}</h1>
        </div>
        <div className={Classes.card_subtitle}>
          <span className={Classes.name}>{`by ${props.author}`}</span>
          <span className={Classes.date}>{props.date}</span>
        </div>
      </section>

      <section className={Classes.card_body}>
        <div
          className={Classes.card_image}
          style={{ backgroundImage: `url(${props.cardImage})` }}
        ></div>
        <div className={Classes.card_info}>
          <p>
            {excerpt(props.cardInfo) + "..."}
          </p>
          <button className="button-black">Read More</button>
        </div>
      </section>
    </main>
  );
}
