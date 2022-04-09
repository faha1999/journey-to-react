// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(
function greeting(name) {
  const date = new Date();
  const hours = date.getHours();

  let timeOfDay;
  if (hours >= 4 && hours < 12) {
    timeOfDay = 'morning';
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = 'afternoon';
  } else if (hours >= 17 && hours < 20) {
    timeOfDay = 'evening';
  } else {
    timeOfDay = 'night';
  }

  return `Good ${timeOfDay}, ${name}!`;
}

console.log(greeting('Bob'));

//   document.getElementById('root')
// );
