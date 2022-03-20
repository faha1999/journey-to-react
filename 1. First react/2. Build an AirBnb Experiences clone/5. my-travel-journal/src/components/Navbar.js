import React from 'react';
import logo from '../images/earth.svg';

export default function Header() {
  return (
    <div className="navbar">
      <img src={logo} alt="world" width={30} height={30} />
      <h3>my travel journal</h3>
    </div>
  );
}
