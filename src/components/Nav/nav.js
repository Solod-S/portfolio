import { useEffect } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail, BiLayer } from 'react-icons/bi';
import { DiCodeigniter } from 'react-icons/di';

import { useState } from 'react';

const Nav = ({ activeSection }) => {
  const [activeNav, setActiveNav] = useState('#header');
  useEffect(() => {
    if (activeSection !== null) {
      setActiveNav(`#${activeSection}`);
    }
  }, [activeSection]);

  return (
    <nav className="nav">
      <a
        href="#header"
        onClick={() => setActiveNav('#header')}
        className={activeNav === '#header' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </a>

      <a
        href="#advantages"
        onClick={() => setActiveNav('#advantages')}
        className={activeNav === '#advantages' ? 'active' : ''}
      >
        <BiLayer />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <DiCodeigniter />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
