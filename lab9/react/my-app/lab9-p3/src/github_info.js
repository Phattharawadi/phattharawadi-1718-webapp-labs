import React from 'react';

function GitHubInfo({ userInfo }) {
  return (
    <div className="github-user">
      <p className="user-alt">{userInfo.alt}</p>
      <img src={userInfo.imgURL} alt={userInfo.alt} />
      <div className="repo-link">
        <a href={userInfo.url} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </div>
    </div>
  );
}

export { GitHubInfo };
