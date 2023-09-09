import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import shortid from 'shortid';

import portfolio from 'data/portfolio';
import './portfolio.css';

import { Paginator, PortfolioItem } from 'components';

const Portfolio = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);

  const [total, setTotal] = useState(0);
  const [currentSlice, setcurrentSlice] = useState([0, 6]);
  const history = useNavigate();
  const { search } = useLocation();
  const page = search.slice(-1);
  const [pageNumber, setPageNumber] = useState(+page);
  const perPage = 6;

  useEffect(() => {
    setPortfolioItems(portfolio);
    setTotal(portfolio.length);
  }, []);

  const scrollToPortfolioSection = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChange = (event, value) => {
    setPageNumber(value);
    setTimeout(() => {
      scrollToPortfolioSection();
    }, 400);
  };

  useEffect(() => {
    if (pageNumber <= 0) {
      setPageNumber(1);
    }

    if (total / perPage === page - 1) {
      setPageNumber(total / perPage);
    }

    history(`?page=${pageNumber}`);
    setcurrentSlice([pageNumber * perPage - 6, pageNumber * perPage]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, pageNumber, total]);

  return (
    <section id="portfolio">
      <h5>Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {portfolioItems.length > 0 &&
          portfolioItems
            .slice(...currentSlice)
            .map(item => (
              <PortfolioItem item={item} key={shortid.generate()} />
            ))}
      </div>
      <Paginator
        handleChange={handleChange}
        count={Math.ceil(total / perPage)}
        page={pageNumber}
      />
    </section>
  );
};

export default Portfolio;
