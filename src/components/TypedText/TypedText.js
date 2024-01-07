import Typed from 'react-typed';
import './TypedText.css';

function TypedText() {
  return (
    <div className="typed-wrapper">
      <div className="animated-typing">
        <Typed
          strings={[
            'Wellcome to my homepage!',
            "I'm a Full-Stack Developer",
            'I collaborated with various technologies, such as OpenAI API, WordPress Rest API, Twitter API V2, Facebook Graph API, Google Search API, Puppeteer, Nginx and Google Scripting API.',
            'More details about my technologies and portfolio can be found below.',
          ]}
          typeSpeed={50}
          backSpeed={50}
          loop
        />
      </div>
    </div>
  );
}
export default TypedText;
