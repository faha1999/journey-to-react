import React from 'react';
import './css/style.min.css';

// export default function App() {
//   const [starWarsData, setStarWarsData] = React.useState({});

//   // console.log("Component rendered")

//   // fetch("https://swapi.dev/api/people/1")
//   //     .then(res => res.json())
//   //     .then(data => setStarWarsData(data))

//   // side effects

//   return (
//     <div>
//       <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//     </div>
//   );
// }

// // syntax and default behavior
export default function App() {
  const [starWarsData, setStarWarsData] = React.useState({});

  console.log('Component rendered');

  // side effects
  React.useEffect(function () {
    fetch('https://swapi.dev/api/people/1').then((res) => res.json());
    // .then(data => setStarWarsData(data))
  });

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}
