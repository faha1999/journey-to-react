// 1ST PART

const navbar = (
  <nav>
    <h1>This is Fahad</h1>

    <ul>
      <li>Menu</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

document.getElementById('root').append(JSON.stringify(navbar));

// 2ND PART (SOLUTION)

const navBar = (
  <nav>
    <h1>This is Fahad</h1>

    <ul>
      <li>Menu</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

ReactDOM.render(navBar, document.getElementById('root'));
