// App.js
import React from 'react';
import './App.css';

const githubUsername = 'Phattharawadi';

const GitHubAvatar = () => {
  return (
    <img 
      src={`https://github.com/${githubUsername}.png?size=200`}
      alt="GitHub Avatar"
      width="250px"
    />
  );
}

const GitHubRepoURL = () => {
  return (
    <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer">
      My GitHub repository
    </a>
  );
}

function App() {
  return (
    <div className="App">
      <h1>My GitHub Information</h1>
      <header className="App-header">
        <GitHubAvatar />
        <GitHubRepoURL />
      </header>
    </div>
  );
}

export default App;
