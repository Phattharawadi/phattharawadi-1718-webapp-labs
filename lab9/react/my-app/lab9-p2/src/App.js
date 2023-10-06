import React from 'react';
import { GitHubAvatar, GitHubRepo, useUserInfo } from './github_data';
import './App.css';

function App() {
  const userInfo = useUserInfo();

  return (
    <div className="App">
      <h1>{userInfo.alt}</h1>
      <GitHubAvatar avatarURL={userInfo.imgURL} size={200} />
      <GitHubRepo url={userInfo.url} />
    </div>
  );
}

export default App;
