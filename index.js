require('dotenv').config()
const express = require('express')
const app = express()
const git_data = {
    "login": "Fiesta11",
    "id": 123968318,
    "node_id": "U_kgDOB2ObPg",
    "avatar_url": "https://avatars.githubusercontent.com/u/123968318?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Fiesta11",
    "html_url": "https://github.com/Fiesta11",
    "followers_url": "https://api.github.com/users/Fiesta11/followers",
    "following_url": "https://api.github.com/users/Fiesta11/following{/other_user}",
    "gists_url": "https://api.github.com/users/Fiesta11/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Fiesta11/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Fiesta11/subscriptions",
    "organizations_url": "https://api.github.com/users/Fiesta11/orgs",
    "repos_url": "https://api.github.com/users/Fiesta11/repos",
    "events_url": "https://api.github.com/users/Fiesta11/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Fiesta11/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Utsav Barnwal",
    "company": null,
    "blog": "https://www.linkedin.com/in/utsav-barnwal-09b316201/",
    "location": "Kanpur",
    "email": null,
    "hireable": null,
    "bio": "Full Stack Web Developer",
    "twitter_username": null,
    "public_repos": 24,
    "public_gists": 0,
    "followers": 1,
    "following": 2,
    "created_at": "2023-01-30T15:04:13Z",
    "updated_at": "2024-01-16T14:07:48Z"
  }
  
const port = 3000

app.get('/' , (req ,res) => {
    res.send('Hello World');
})

app.get('/twitter' , (req , res) => {
    res.send('Hello Twiitter')
})

app.get('/login' , (req ,res) => {
    res.send('<h1> Welcome to My website </h1>')
})

app.get('/github' , (req , res) => {
    res.json(git_data)
})


app.listen(process.env.PORT , ()=>{
    console.log(`Server is Running on ${port}`);
})