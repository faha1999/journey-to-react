import React from 'react';
import css from './css/style.min.css';

export default function App() {
  const [isImportant, setIsImportant] = React.useState('Yes');

  function handleClick() {
    setIsImportant('No');
  }

  return (
    <div className="state">
      <h1 className="state--title">Is state important to know?</h1>
      <div className="state--value" onClick={handleClick}>
        <h1>{isImportant}</h1>
      </div>
    </div>
  );
}
