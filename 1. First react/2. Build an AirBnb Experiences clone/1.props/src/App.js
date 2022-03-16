import React from 'react';
import Contact from './Contact';
import css from './css/style.min.css';
import whiskerSon from './images/mr-whiskerson.png';
import fluffyKins from './images/fluffykins.png';
import felix from './images/felix.png';
import pumpkin from './images/pumpkin.png';

function App() {
  return (
    <div className="contacts">
      <Contact
        img={whiskerSon}
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img={fluffyKins}
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        img={felix}
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact
        img={pumpkin}
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </div>
  );
}

{
  /* <div className="contact-card">
        <img src={whiskerSon} />
        <h3>Mr. Whiskerson</h3>
        <div className="info-group">
          <img src={phone} />
          <p>(212) 555-1234</p>
        </div>
        <div className="info-group">
          <img src={mail} />
          <p>mr.whiskaz@catnap.meow</p>
        </div>
      </div>

      <div className="contact-card">
        <img src={fluffyKins} />
        <h3>Fluffykins</h3>
        <div className="info-group">
          <img src={phone} />
          <p>(212) 555-2345</p>
        </div>
        <div className="info-group">
          <img src={mail} />
          <p>fluff@me.com</p>
        </div>
      </div>

      <div className="contact-card">
        <img src={felix} />
        <h3>Felix</h3>
        <div className="info-group">
          <img src={phone} />
          <p>(212) 555-4567</p>
        </div>
        <div className="info-group">
          <img src={mail} />
          <p>thecat@hotmail.com</p>
        </div>
      </div>

      <div className="contact-card">
        <img src={pumpkin} />
        <h3>Pumpkin</h3>
        <div className="info-group">
          <img src={phone} />
          <p>(0800) CAT KING</p>
        </div>
        <div className="info-group">
          <img src={mail} />
          <p>pumpkin@scrimba.com</p>
        </div>
      </div> */
}

export default App;
