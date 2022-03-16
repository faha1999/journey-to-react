import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

import product1 from './images/katie-zaferes.png';

import css from './css/style.min.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        img={product1}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
    </div>
  );
}
