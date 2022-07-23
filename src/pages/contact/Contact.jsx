import React from "react";
import Classes from "./Contact.module.scss";
import PageBanner from "../../components/page-banner/PageBanner";
import ContactCards from "../../components/contact-cards/ContactCards";

export default function Contact() {
  return (
    <main className={`styled-background ${Classes.contact_wrapper}`}>
      <PageBanner title="CONTACT" />
      <section className={Classes.contact_body}>
        <ContactCards />
      </section>
    </main>
  );
}
