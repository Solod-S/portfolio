import { BsLinkedin, BsTelegram } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { TbBrandReact } from 'react-icons/tb';

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
      <a
        href="https://www.codewars.com/users/Solod-S"
        target="_blank"
        rel="noreferrer"
      >
        <TbBrandReact />
      </a>
      <a href="https://t.me/sergey_nicol" target="_blank" rel="noreferrer">
        <BsTelegram />
      </a>
    </div>
  );
};

export default HeaderSocials;
