import React from 'react';
import mail from './images/mail-icon.png';
import phone from './images/phone-icon.png';

export default function Contact(props) {
  return (
    <div className="contact-card">
      <img src={props.img} />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src={phone} />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src={mail} />
        <p>{props.email}</p>
      </div>
    </div>
  );
}
