import './portfolio.css';
import { motion } from 'framer-motion';
import { listVariants } from 'constant/framer_motion_confog';
import { VscGithub } from 'react-icons/vsc';
import { BsCameraVideoFill } from 'react-icons/bs';
import { FaLink } from 'react-icons/fa';

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
        <img src={img} alt={title} />
      </div>
      <h3>{title}</h3>
      <h5>{technology}</h5>
      <div className="portfolio__item-cta">
        {github && (
          <div>
            <a href={github} className="btn" target="_blank" rel="noreferrer">
              <VscGithub size={14} />
            </a>
          </div>
        )}
        {liveDemo && (
          <div>
            <a
              href={liveDemo}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              <FaLink size={14} />
            </a>
          </div>
        )}
        {video && (
          <div>
            <p
              href={video}
              onClick={() => openModal(video)}
              className="btn"
              // target="_blank"
              // rel="noreferrer"
            >
              <BsCameraVideoFill size={14} />
            </p>
          </div>
        )}
      </div>
    </motion.article>
  );
};

export default PortfolioItem;
