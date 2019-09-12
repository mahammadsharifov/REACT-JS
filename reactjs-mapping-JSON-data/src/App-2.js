// Example 2: Fetching and mapping data from json file using multiply components 

import React from 'react';
import jokesData from './App-2/jokesData';
import Joke from './App-2/Joke';
import './App.css';

function App() {

  const jokeComponents = jokesData.map( (joke) => {
    return (
      <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
    )
  })

  return (
    <div className="App">
      <h1>Sample 2 App</h1>
      { jokeComponents }
    </div>
  );
}

export default App;
