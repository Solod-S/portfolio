import React, { useState, useEffect } from 'react';
import { throttle } from 'lodash';

import {
  Header,
  Nav,
  About,
  Experience,
  Portfolio,
  Contact,
  Footer,
  Advantages,
} from 'components';

function HomePage() {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScrollThrottled = throttle(() => {
      const sections = document.querySelectorAll(
        'section, .header-class, .footer-class'
      );
      let currentActiveSection = null;

      sections.forEach(section => {
        const { top, bottom } = section.getBoundingClientRect();

        if (top >= 0 && bottom <= window.innerHeight) {
          currentActiveSection = section.id;
        }
      });

      setActiveSection(currentActiveSection);
    }, 300);

    window.addEventListener('scroll', handleScrollThrottled);

    handleScrollThrottled();

    return () => {
      window.removeEventListener('scroll', handleScrollThrottled);
    };
  }, []);
  return (
    <>
      <Header />
      <About />
      <Nav activeSection={activeSection} />
      <Experience />
      <Advantages />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
