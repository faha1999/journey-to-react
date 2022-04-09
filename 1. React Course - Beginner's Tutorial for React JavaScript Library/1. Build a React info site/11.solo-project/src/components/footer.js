import React from 'react';

import twitter from '../images/twitter-square-brands.svg';
import facebook from '../images/facebook-square-brands.svg';
import instagram from '../images/instagram-square-brands.svg';
import github from '../images/github-square-brands.svg';

export default function Footer() {
  return (
    <footer>
      <img src={twitter} />
      <img src={facebook} />
      <img src={instagram} />
      <img src={github} />
    </footer>
  );
}
