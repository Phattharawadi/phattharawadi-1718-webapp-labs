import React from "react";
import users from "./users"; // ตรงนี้คือการ import

function App() {
  return (
    <div className="App">
      <h1>Popular Github Repositories</h1>
      <ol>
        {users.map((user) => (
          <li key={user.url}>
            <a href={user.url} target="_blank" rel="noopener noreferrer">
              <img src={user.imgURL} alt={user.alt} width="150" />
              <span style={{ marginRight: '5px' }}>{user.alt}</span>
            </a>
            ({user.followers.toLocaleString()} followers)
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
