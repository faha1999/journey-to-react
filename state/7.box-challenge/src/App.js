import React from 'react';
import boxes from './boxes';
import './css/style.min.css';
import Box from './Box';

export default function App() {
  const [squares, setSquares] = React.useState(boxes);

  function toggle(id) {
    console.log(id);
  }

  const squareElements = squares.map((square) => (
    <Box key={square.id} id={square.id} on={square.on} toggle={toggle} />
  ));

  return <main>{squareElements}</main>;
}
