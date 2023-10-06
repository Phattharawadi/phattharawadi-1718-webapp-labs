import React, { useState, useEffect } from 'react';

export function GitHubRepo({ url }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      GitHub Repository
    </a>
  );
}

export function GitHubAvatar({ avatarURL, size = 50 }) {
  return <img src={avatarURL} alt="GitHub Avatar" width={size} height={size} />;
}

export function useUserInfo() {
  const [info, setInfo] = useState({
    imgURL: "",
    alt: "",
    url: ""
  });

  useEffect(() => {
    async function fetchUserData() {
      const username = "phattharawadi";
      
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        
        setInfo({
          imgURL: data.avatar_url,
          url: data.html_url,
          alt: `${data.name}`
        });
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    }

    fetchUserData();
  }, []);

  return info;
}
