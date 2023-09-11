import CTA from './CTA';
import './header.css';
import HeaderSocials from './HeaderSocials';
import TypedText from 'components/TypedText/TypedText';

const Header = () => {
  return (
    <header id="header" className="header-class">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Solod Serhii</h1>
        <h5 className="text-light">Front End Developer</h5>
        <CTA />
        <HeaderSocials />

        <a href="#footer" className="scroll__down">
          Scroll Down
        </a>
        <TypedText />
      </div>
    </header>
  );
};

export default Header;
