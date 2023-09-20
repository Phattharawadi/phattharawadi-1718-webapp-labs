import axios from "axios";

axios.get("https://api.github.com/users/Phattharawadi")
     .then(resp => {
         let user = resp.data;
         console.log("GitHub user name is", user.name , "who live in", user.location);
     })
     .catch(error => {
         console.error("Error fetching user data:", error);
     });
