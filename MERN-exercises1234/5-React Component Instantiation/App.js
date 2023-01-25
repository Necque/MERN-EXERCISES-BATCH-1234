import * as React from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
{
title: 'React',
url: 'https://reactjs.org/',
author: ' Jordan Walke ',
num_comments: 3,
points: 4,
objectID: 0,
},
{
title: 'Redux',
url: 'https://redux.js.org/',
author: ' Dan Abramov, Andrew Clark ',
num_comments: 2,
points: 5,
objectID: 1,
},
];

function App() {
  return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
  <div>
  <h1>My Hacker Stories</h1>
  <label htmlFor="search">Search: </label>
  <input id="search" type="text" />
  <hr />
  {/* render the list here */}
  {/* and by the way: that's how you do comments in JSX */}
  </div>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
</div>
  );
  }

  export default App;
