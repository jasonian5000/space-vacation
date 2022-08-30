import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

export default function NasaImage({ result }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="card-container">
      <button className="card-button" onClick={() => setFlipped(!flipped)}>
        <CSSTransition
          in={!flipped}
          timeout={1000}
          classNames="front-face-transition"
        >
          <div className="card-front">
            <div className="front-panel">
              <h3 className="image-title">{result?.data[0]?.title}</h3>
              <img src={result?.links[0]?.href} alt="" />
            </div>
          </div>
        </CSSTransition>
        <CSSTransition
          in={flipped}
          timeout={1000}
          classNames="back-face-transition"
        >
          <div className="card-back">
            <div className="image-desc">
              <p>
                {result.data[0].description_508
                  ? result.data[0].description_508
                  : "No description available"}
              </p>
            </div>
          </div>
        </CSSTransition>
      </button>
    </div>
  );
}