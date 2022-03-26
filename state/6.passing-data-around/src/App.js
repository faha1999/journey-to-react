import React from 'react';
import Header from './Header';
import Body from './Body';
import './css/style.min.css';

export default function App() {
  const [user, setUser] = React.useState('Bob');

  return (
    <main>
      <Header user={user} />
      <Body user={user} />
    </main>
  );
}
