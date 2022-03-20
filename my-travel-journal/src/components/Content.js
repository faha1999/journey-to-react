import React from 'react';
import loc from '../images/location.svg';

export default function Content(props) {
  return (
    <div className="content">
      <img src={props.item.imageUrl} alt={props.item.title} />
      <div className="content-body">
        <div className="content-header">
          <img src={loc} alt="loc-icon" />
          <h5>{props.item.location}</h5>
          <a className="link" href={props.item.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>

        <h1>{props.item.title}</h1>

        <p className="date">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="desc">{props.item.description}</p>
      </div>
    </div>
  );
}
