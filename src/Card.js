import React from "react";
import "./Card.js";
export default function Card(props) {
  return (
    <div className="card">
      <div className="cardBody">
        <img src={props.img} />
        <div className="about">
          <h2 className="cardTitle">{props.title}</h2>
          <p className="cardDescription">{props.description}</p>
        </div>
        <button>see the details</button>
      </div>
    </div>
  );
}
