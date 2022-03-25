import React from 'react';
import Star from './Star';
// import starFilled from './images/star-filled.png';
// import starEmpty from './images/star-empty.png';

// import './images/star-filled.png';
// import './images/star-empty.png';

import user from './images/user.png';
import './css/style.min.css';

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: 'John',
    lastName: 'Doe',
    phone: '+1 (719) 555-1212',
    email: 'itsmyrealname@example.com',
    isFavorite: true
  });

  function toggleFavorite() {
    setContact((prevContact) => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite
    }));
  }

  return (
    <main>
      <article className="card">
        <img src={user} className="card--image" />
        <div className="card--info">
          <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
          <h2 className="card--name">
            {contact.firstName} {contact.lastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  );
}
