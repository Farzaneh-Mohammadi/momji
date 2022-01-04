import React from 'react';
import ReactDOM from 'react-dom';
import colors from './ItemsD';


import saveFill from "../../assets/save-fill.png";
import saveOutline from "../../assets/save-outline.png";

import checkTrue from "../../assets/true.png";
import checkFalse from "../../assets/false.png";

import './SnackCard.css';




  
function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
      
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
  
      <div className="meal-item">
              <img className="img check" src={checkTrue} alt="checkTrue" />
              <span className="item-name">     {props.children} </span>
              <img className="img save"  alt="save"  src={saveOutline}  />
            </div>
                      <div className="bottom-item-line"></div>
                   


                      
    </div>
  );
}

export default function SnackCard() {
  return (
    <div className="fade-container">
 <p className="list-title"> صیفی جات </p>
      {colors.map(color => (
        <FadeInSection>
          {/* <div className="bottom-item-line"></div> */}
            <span className="each-item">{color}</span>
            
        </FadeInSection>
))}
    </div>
  );
}
