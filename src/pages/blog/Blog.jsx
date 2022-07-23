import React from "react";
import Classes from "./Blog.module.scss";
import PageBanner from "../../components/page-banner/PageBanner";
import BlogCards from "../../components/blog-card/BlogCards";


export default function Blog() {
  return (
    <main className={`styled-background ${Classes.blog_wrapper}`}>
      <PageBanner title="BLOG" />
      <section className={Classes.blog_body}>
        <BlogCards />
      </section>
    </main>
  );
}
