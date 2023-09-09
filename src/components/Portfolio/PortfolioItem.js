import './portfolio.css';
import { VscGithub } from 'react-icons/vsc';
import { BsCameraVideoFill } from 'react-icons/bs';
import { FaLink } from 'react-icons/fa';

const PortfolioItem = ({ item }) => {
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
    <article className="portfolio__item">
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
            <a href={video} className="btn" target="_blank" rel="noreferrer">
              <BsCameraVideoFill size={14} />
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

export default PortfolioItem;
