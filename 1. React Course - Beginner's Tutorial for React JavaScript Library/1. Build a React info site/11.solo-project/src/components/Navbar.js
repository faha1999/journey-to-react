import React from 'react';
import logo from '../images/faha-img.jpg';
import email from '../images/envelope-solid.svg';
import linkedin from '../images/linkedin-brands.svg';

export default function Navbar() {
  return (
    <nav>
      <img src={logo} className="nav--icon" />
      <h3 className="nav--logo_text">Kawsar Ahmed Fahad</h3>
      <h4 className="nav--title">Frontend Developer</h4>
      <h5>faha1999.me</h5>

      <div className="nav-button">
        <button className="button-white">
          <img src={email} /> Email
        </button>
        <button className="button-blue">
          <img src={linkedin} />
          Linkedin
        </button>
      </div>
    </nav>
  );
}
