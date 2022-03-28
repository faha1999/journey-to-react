import React from 'react';
import './css/style.min.css';
// import Joke from './Joke';
// import jokesData from './jokesData';

// export default function App() {
//   const jokeElements = jokesData.map((joke) => {
//     return <Joke key={joke.id} setup={joke.setup} punchline={joke.punchline} />;
//   });
//   return <div>{jokeElements}</div>;
// }

// && practice
export default function App() {
  const [messages, setMessages] = React.useState(['a', 'b']);

  return (
    <div>
      {messages.length > 0 && (
        <h1>You have {messages.length} unread messages!</h1>
      )}
    </div>
  );
}
