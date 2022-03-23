import React from 'react';
import css from './css/style.min.css';

export default function App() {
  const isGoingOut = false;

  return (
    <div className="state">
      <h1 className="state--title">Do I feel like going out tonight?</h1>
      <div className="state--value">
        <h1>{isGoingOut ? 'Yes' : 'No'}</h1>
      </div>
    </div>
  );
}
