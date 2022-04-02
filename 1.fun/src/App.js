import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import './css/style.min.css';

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Main />
    </div>
  );
}
