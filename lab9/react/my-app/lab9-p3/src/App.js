import React from 'react';
import './App.css';
import { GitHubInfo } from './github_info.js';

export default function App() {
  const users = [
    {
      url: "http://github.com/phattharawadi",
      imgURL: "https://avatars.githubusercontent.com/u/76212559?v=4",
      alt: "Phattharawadi Ngamtakhu",
    },
    {
      url: "https://github.com/react",
      imgURL: "https://avatars.githubusercontent.com/u/69631?v=4",
      alt: "react"
    },
    {
      url: "https://github.com/vercel/next.js",
      imgURL: "https://avatars.githubusercontent.com/u/14985020?s=200&v=4",
      alt: "next.js"
    },
  ];

  return (
    <div className="App">
      <GitHubInfo userInfo={users[0]}/>
      <GitHubInfo userInfo={users[1]}/>
      <GitHubInfo userInfo={users[2]}/>
    </div>
  );
}
