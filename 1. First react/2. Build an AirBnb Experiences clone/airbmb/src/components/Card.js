import React from 'react';
import star from '../images/star.png';

export default function Card(props) {
  return (
    <div className="card">
      <img src={`../images/${props.img}`} />

      <div className="card-star">
        <img src={star} />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <strong>From ${props.price} / </strong>person
      </p>
    </div>
  );
}
