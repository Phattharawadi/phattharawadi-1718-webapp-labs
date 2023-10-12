import React, { useState } from "react";
import { users } from "./users";
import "./App.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFollowers, setShowFollowers] = useState(false);
  const currentUser = users[currentIndex];

  return (
    <div className="app-container">
      <h1>Sample Github Repositories</h1>
      <h2>
        <a href={currentUser.url} target="_blank" rel="noopener noreferrer">
          {currentUser.alt}
        </a>
      </h2>
      <img src={currentUser.imgURL} alt={currentUser.alt} />

      <div className="follower-container">
        <button
          className="app-button lightblue-button under-image-button"
          onClick={() => setShowFollowers(!showFollowers)}
        >
          {showFollowers ? "Hide followers" : "Show followers"}
        </button>
        {showFollowers && (
          <span className="follower-text">{currentUser.followers}</span>
        )}
      </div>

      <div className="button-container">
        <button
          className="app-button orange-button"
          disabled={currentIndex === 0}
          onClick={() => {
            setCurrentIndex((prev) => prev - 1);
            setShowFollowers(false);
          }}
        >
          Previous
        </button>

        <button
          className="app-button greenyellow-button"
          disabled={currentIndex === users.length - 1}
          onClick={() => {
            setCurrentIndex((prev) => prev + 1);
            setShowFollowers(false);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
