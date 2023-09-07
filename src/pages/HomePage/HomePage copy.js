import React, { useState, useEffect } from 'react';

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
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentActiveSection = null;

      sections.forEach(section => {
        const { top, bottom } = section.getBoundingClientRect();

        if (top >= 0 && bottom <= window.innerHeight) {
          // Секция полностью видима на экране
          currentActiveSection = section.id;
        }
      });

      setActiveSection(currentActiveSection);
    };

    window.addEventListener('scroll', handleScroll);

    // Вызовите handleScroll() сразу после монтирования, чтобы определить начальную активную секцию
    handleScroll();

    // Очистите слушателя события при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Header />
      <About />
      <Nav />
      <Experience />
      <Advantages />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
