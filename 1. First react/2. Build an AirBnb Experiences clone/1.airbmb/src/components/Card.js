import React from 'react';
import product1 from '../images/katie-zaferes.png';
import star from '../images/star.png';

export default function Card() {
  return (
    <div className="card">
      <img src={product1} />

      <div className="card-star">
        <img src={star} />
        <span>5.0</span>
        <span className="gray">(6) . </span>
        <span className="gray">USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <strong>From $136 / </strong>person
      </p>
    </div>
  );
}
