import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';
import { buttonVariants } from 'constant/framer_motion_confog';

import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail, BiLayer } from 'react-icons/bi';
import { DiCodeigniter } from 'react-icons/di';

import './nav.css';

const Navigation = ({ activeSection }) => {
  const [activeNav, setActiveNav] = useState('#header');
  useEffect(() => {
    if (activeSection !== null) {
      setActiveNav(`#${activeSection}`);
    }
  }, [activeSection]);

  return (
    <nav className="nav">
      <motion.a
        whileHover={'hover'}
        variants={buttonVariants}
        href="#header"
        onClick={() => setActiveNav('#header')}
        className={activeNav === '#header' ? 'active' : ''}
      >
        <AiOutlineHome />
      </motion.a>
      <motion.a
        whileHover={'hover'}
        variants={buttonVariants}
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </motion.a>
      <motion.a
        whileHover={'hover'}
        variants={buttonVariants}
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </motion.a>

      <motion.a
        whileHover={'hover'}
        variants={buttonVariants}
        href="#advantages"
        onClick={() => setActiveNav('#advantages')}
        className={activeNav === '#advantages' ? 'active' : ''}
      >
        <BiLayer />
      </motion.a>
      <motion.a
        whileHover={'hover'}
        variants={buttonVariants}
        href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <DiCodeigniter />
      </motion.a>
      <motion.a
        whileHover={'hover'}
        variants={buttonVariants}
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </motion.a>
    </nav>
  );
};

export default Navigation;
