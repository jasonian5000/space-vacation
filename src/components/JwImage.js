import React from "react";

export default function JwImage({ result }) {
  return (
    <div className="card-container">
      <div className="card-front">
        <div className="front-panel">
          <img src={result?.location} alt="" />
        </div>
      </div>
    </div>
  );
}
