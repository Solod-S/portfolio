import Typed from 'react-typed';
import './TypedText.css';

function TypedText() {
  return (
    <div className="typed-wrapper">
      <div className="animated-typing">
        <Typed
          strings={[
            'Wellcome to my homepage!',
            "I'm a Front End developer",
            'I love web development',
            'Currently learning Node.js and React Native',
            'Planning to explore Next.js and Vue in the future',
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
