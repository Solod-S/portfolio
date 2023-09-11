import { motion } from 'framer-motion';
import {
  buttonVariants,
  portfolioPosterVariants,
  listVariants,
} from 'constant/framer_motion_confog';

import { VscGithub } from 'react-icons/vsc';
import { BsCameraVideoFill } from 'react-icons/bs';
import { FaLink } from 'react-icons/fa';

import './portfolio.css';

const PortfolioItem = ({ item, openModal, index }) => {
  const {
    title,
    img,
    technology,
    github,
    liveDemo,
    video,
    // category,
    // filter,
    // description,
  } = item;
  return (
    <motion.article
      className="portfolio__item"
      variants={listVariants}
      initial="hidden"
      animate="visible"
      custom={index}
    >
      <div className="portfolio__item-image">
        <motion.img
          src={img}
          alt={title}
          initial={'start'}
          animate={'end'}
          transition={{
            ...portfolioPosterVariants.transition_img,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          variants={portfolioPosterVariants}
        />
      </div>
      <h3>{title}</h3>
      <h5>{technology}</h5>
      <div className="portfolio__item-cta">
        {github && (
          <motion.div whileHover={'hover'} variants={buttonVariants}>
            <a href={github} className="btn" target="_blank" rel="noreferrer">
              <VscGithub size={14} />
            </a>
          </motion.div>
        )}
        {liveDemo && (
          <motion.div whileHover={'hover'} variants={buttonVariants}>
            <a
              href={liveDemo}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              <FaLink size={14} />
            </a>
          </motion.div>
        )}
        {video && (
          <motion.div whileHover={'hover'} variants={buttonVariants}>
            <div href={video} onClick={() => openModal(video)} className="btn">
              <BsCameraVideoFill size={14} />
            </div>
          </motion.div>
        )}
      </div>
    </motion.article>
  );
};

export default PortfolioItem;
