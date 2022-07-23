import React from "react";
import Classes from "./Rental.module.scss";
import PageBanner from '../../components/page-banner/PageBanner';
import Search from '../../components/search/Search';

export default function Rental() {
  return (
    <main className={`styled-background ${Classes.rental_wrapper}`}>
      <PageBanner title="RENTALS" />
      <Search />
      <section className={Classes.rental_body}>
      </section>
    </main>
  );
}
