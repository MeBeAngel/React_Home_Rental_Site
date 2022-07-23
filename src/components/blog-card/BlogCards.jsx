import React from "react";
import Classes from "./BlogCards.module.scss";
import BlogCard from "./BlogCard";
import testImage from "../../assets/images/blog-card/blog_card_1.png";
import testImage2 from "../../assets/images/blog-card/blog_card_2.png";

export default function BlogCards() {
  return (
    <div className={Classes.article_grid}>
      <BlogCard
        title="Article Title"
        author="Author"
        date="2/13/21"
        cardImage={testImage}
        cardInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <BlogCard
        title="Article Title"
        author="Author"
        date="2/13/21"
        cardImage={testImage2}
        cardInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <BlogCard
        title="Article Title"
        author="Author"
        date="2/13/21"
        cardImage={testImage}
        cardInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
       <BlogCard
        title="Article Title"
        author="Author"
        date="2/13/21"
        cardImage={testImage2}
        cardInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
       <BlogCard
        title="Article Title"
        author="Author"
        date="2/13/21"
        cardImage={testImage}
        cardInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
    </div>
  );
}
