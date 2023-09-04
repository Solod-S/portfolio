import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsTelegram } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/serhii-solod-557991256/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Solod-S" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://dribbble.com" target="_blank" rel="noreferrer">
        <BsTelegram />
      </a>
    </div>
  );
};

export default HeaderSocials;
