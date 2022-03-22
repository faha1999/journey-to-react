import React from 'react';
import css from './css/style.min.css';

function App() {
  const [things, setThings] = React.useState(['Thing 1', 'Thing 2']);

  function addItem() {
    const newThingText = `Thing ${things.length + 1}`;
    setThings((prevState) => [...prevState, newThingText]);
  }

  const thingsElements = things.map((thing) => <p key={thing}>{thing}</p>);

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </div>
  );
}

export default App;
