import React from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import data from './data';

import css from './css/style.min.css';

function App() {
  const content = data.map((item) => {
    return <Content item={item} />;
  });

  return (
    <div className="container">
      <Navbar />
      {content}
    </div>
  );
}

export default App;
