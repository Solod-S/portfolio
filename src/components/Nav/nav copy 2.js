import { useEffect, useState } from 'react';
import animateScrollTo from 'animated-scroll-to';
import './nav.css';

import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail, BiLayer } from 'react-icons/bi';
import { DiCodeigniter } from 'react-icons/di';

const Nav = ({ activeSection }) => {
  const [activeNav, setActiveNav] = useState('#header');

  const scrollToSection = sectionId => {
    setActiveNav(sectionId);
    animateScrollTo(document.querySelector(sectionId), {
      speed: 500, // Скорость анимации
      // offset: -100, // Смещение от верхней части экрана
    });
  };

  useEffect(() => {
    if (activeSection !== null) {
      setActiveNav(`#${activeSection}`);
    }
  }, [activeSection]);

  return (
    <nav>
      <p
        // href="#header"
        onClick={() => scrollToSection('#header')}
        // onClick={() => setActiveNav('#header')}
        className={activeNav === '#header' ? 'active' : ''}
      >
        <AiOutlineHome />
      </p>
      <p
        // href="#about"
        onClick={() => scrollToSection('#about')}
        // onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </p>
      <p
        // href="#experience"
        onClick={() => scrollToSection('#experience')}
        // onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </p>

      <p
        // href="#advantages"
        onClick={() => scrollToSection('#advantages')}
        // onClick={() => setActiveNav('#advantages')}
        className={activeNav === '#advantages' ? 'active' : ''}
      >
        <BiLayer />
      </p>
      <p
        // href="#portfolio"
        onClick={() => scrollToSection('#portfolio')}
        // onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <DiCodeigniter />
      </p>
      <p
        // href="#contact"
        onClick={() => scrollToSection('#contact')}
        // onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </p>
    </nav>
  );
};

export default Nav;
