import React from "react";
import Classes from "./ContactCards.module.scss";
import ContactCard from "./ContactCard";
import { BsPersonCircle } from "react-icons/bs";
import { FaQuestionCircle } from "react-icons/fa";
import { FcSupport } from "react-icons/fc";
import { ImBriefcase } from "react-icons/im";

export default function ContactCards() {
  return (
    <section className={Classes.contact_cards_wrapper}>
      <ContactCard
        cardReactIcon={<BsPersonCircle />}
        cardTitle="Help Center"
        cardBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec consequat."
      />
      <ContactCard
        cardReactIcon={<FcSupport />}
        cardTitle="Technical Issues"
        cardBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec consequat."
      />
      <ContactCard
        cardReactIcon={<FaQuestionCircle />}
        cardTitle="Faq's"
        cardBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec consequat."
      />
      <ContactCard
        cardReactIcon={<ImBriefcase />}
        cardTitle="Careers"
        cardBody="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec consequat."
      />
    </section>
  );
}
