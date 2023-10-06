// App.js
import React from 'react';
import {users} from './users.js';

function App() {
  return (
    <div className="App">
      <h1>Sample GitHub Repositories</h1>
      <ol>
        {users.map(user => (
          <li key={user.url}>
            <img src={user.imgURL} alt={user.alt} width="150"/>
            <a href={user.url} target="_blank" rel="noopener noreferrer">
              {user.alt}
              ({user.followers.toLocaleString()} followers)
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
