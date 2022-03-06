// part 1

// function Page() {
//   return (
//     <ol>
//       <li>
//         It's a popular library, so I'll be able to fit in with the cool kids!
//       </li>
//       <li>I'm more likely to get a job as a developer if I know React</li>
//     </ol>
//   );
// }

// ReactDOM.render(<Page />, document.getElementById('root'));

// part 2

function Page() {
  return (
    <div>
      <header>
        <nav>
          <img src="./react-logo.png" width="40px" />
        </nav>
      </header>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>
          It's a popular library, so I'll be able to fit in with the cool kids!
        </li>
        <li>I'm more likely to get a job as a developer if I know React</li>
      </ol>
      <footer>
        <small>© 2022 faha1999 development. All rights reserved.</small>
      </footer>
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById('root'));
