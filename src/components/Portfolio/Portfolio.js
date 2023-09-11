import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { Paginator, PortfolioItem, ModalWindow } from 'components';

import portfolio from 'data/portfolio';
import './portfolio.css';

const Portfolio = ({ setshowNav }) => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [videoHref, setvideoHref] = useState('');

  const [total, setTotal] = useState(0);
  const [currentSlice, setcurrentSlice] = useState([0, 6]);
  const history = useNavigate();
  const { search } = useLocation();
  const page = search.slice(-1);
  const [pageNumber, setPageNumber] = useState(+page);
  const perPage = 6;

  const scrollToPortfolioSection = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openModal = href => {
    setvideoHref(href);
    setshowNav(false);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setshowNav(true);
  };

  const handleChange = (event, value) => {
    setPageNumber(value);
    history(`?page=${value}`);
    setTimeout(() => {
      scrollToPortfolioSection();
    }, 400);
  };

  useEffect(() => {
    setPortfolioItems(portfolio);
    setTotal(portfolio.length);
  }, []);

  useEffect(() => {
    if (pageNumber <= 0 || pageNumber > Math.ceil(portfolio.length / perPage)) {
      setPageNumber(1);
    }

    if (total / perPage === page - 1) {
      setPageNumber(total / perPage);
    }

    // history(`?page=${pageNumber}`);
    setcurrentSlice([pageNumber * perPage - 6, pageNumber * perPage]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, pageNumber, total]);

  useEffect(() => {
    isOpen !== false
      ? document.querySelector('body').classList.add('no-scroll')
      : document.querySelector('body').classList.remove('no-scroll');
  }, [isOpen]);

  return (
    <section id="portfolio">
      <h5>Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {portfolioItems.length > 0 &&
          portfolioItems
            .slice(...currentSlice)
            .map((item, index) => (
              <PortfolioItem
                item={item}
                key={item.title}
                index={index}
                openModal={openModal}
              />
            ))}
      </div>

      <ModalWindow
        isOpen={isOpen && videoHref.length > 0}
        onClose={closeModal}
        component={
          <ReactPlayer
            url={videoHref}
            controls
            width="100%"
            height="100%"
            onError={error => {
              console.error('ReactPlayer error:', error);
            }}
          />
        }
      />
      <Paginator
        handleChange={handleChange}
        count={Math.ceil(total / perPage)}
        page={pageNumber}
      />
    </section>
  );
};

export default Portfolio;
