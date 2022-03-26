import React from 'react';
import boxes from './boxes';
import './css/style.min.css';

export default function App() {
  const [squares, setSquares] = React.useState(boxes);

  const squareElements = squares.map((square) => (
    <div className="box" key={square.id}></div>
  ));

  return <main>{squareElements}</main>;
}
