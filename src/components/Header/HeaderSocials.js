import { motion } from 'framer-motion';
import { buttonVariants } from 'constant/framer_motion_confog';

import { BsLinkedin, BsTelegram } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { TbBrandReact } from 'react-icons/tb';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <motion.a
        whileHover={'hover'}
        variants={buttonVariants}
        href="https://www.linkedin.com/in/serhii-solod-557991256/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </motion.a>
      <motion.a
        whileHover={'hover'}
        variants={buttonVariants}
        href="https://github.com/Solod-S"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </motion.a>
      <motion.a
        whileHover={'hover'}
        variants={buttonVariants}
        href="https://www.codewars.com/users/Solod-S"
        target="_blank"
        rel="noreferrer"
      >
        <TbBrandReact />
      </motion.a>
      <motion.a
        whileHover={'hover'}
        variants={buttonVariants}
        href="https://t.me/sergey_nicol"
        target="_blank"
        rel="noreferrer"
      >
        <BsTelegram />
      </motion.a>
    </div>
  );
};

export default HeaderSocials;
