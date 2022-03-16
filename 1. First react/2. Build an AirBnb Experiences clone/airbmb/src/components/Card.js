import React from 'react';
import product1 from '../images/katie-zaferes.png';
import star from '../images/star.png';

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} />

      <div className="card-star">
        <img src={star} />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) . </span>
        <span className="gray">{props.country}</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>
        <strong>From ${props.price} / </strong>person
      </p>
    </div>
  );
}
