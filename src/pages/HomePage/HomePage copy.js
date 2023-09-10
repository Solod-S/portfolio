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
  const [showNav, setshowNav] = useState(true);

  useEffect(() => {
    const handleScrollThrottled = throttle(() => {
      const sections = document.querySelectorAll(
        'section, .header-class, .footer-class'
      );
      let currentActiveSection = null;

      sections.forEach(section => {
        const { top } = section.getBoundingClientRect();

        if (top <= window.innerHeight / 2) {
          currentActiveSection = section.id;
        }
      });

      setActiveSection(currentActiveSection);
    }, 300);

    const handleError = e => {
      console.log(e.message, e);
      if (
        e.message.includes("Failed to execute 'postMessage' on 'DOMWindow'")
      ) {
        console.log(1111);
        e.preventDefault();
      }
    };

    window.addEventListener('scroll', handleScrollThrottled);
    window.addEventListener('error', handleError);
    // handleScrollThrottled();

    return () => {
      window.removeEventListener('scroll', handleScrollThrottled);
      window.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <>
      <Header className="header-class" />
      <About />
      {showNav && <Nav activeSection={activeSection} />}
      <Experience />
      <Advantages />
      <Portfolio setshowNav={setshowNav} />
      <Contact />
      <Footer className="footer-class" />
    </>
  );
}

export default HomePage;
