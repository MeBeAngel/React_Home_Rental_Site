import React from 'react';
import Classes from './Footer.module.scss';


export default function Footer () {

  // Scroll to top of page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

return (
  <>
    <footer>
      <span onClick={scrollToTop}>Back to top</span>
    </footer>
  </>
);
}