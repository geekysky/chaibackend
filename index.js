require('dotenv').config()

const express = require('express');
const app = express();
const port = process.env.port;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.get('/home', (req, res) => {
    res.send('Hello World!');
});

let github_data = {
  "login": "geekysky",
  "id": 120040924,
  "node_id": "U_kgDOByet3A",
  "avatar_url": "https://avatars.githubusercontent.com/u/120040924?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/geekysky",
  "html_url": "https://github.com/geekysky",
  "followers_url": "https://api.github.com/users/geekysky/followers",
  "following_url": "https://api.github.com/users/geekysky/following{/other_user}",
  "gists_url": "https://api.github.com/users/geekysky/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/geekysky/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/geekysky/subscriptions",
  "organizations_url": "https://api.github.com/users/geekysky/orgs",
  "repos_url": "https://api.github.com/users/geekysky/repos",
  "events_url": "https://api.github.com/users/geekysky/events{/privacy}",
  "received_events_url": "https://api.github.com/users/geekysky/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 4,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2022-12-07T15:51:27Z",
  "updated_at": "2025-09-10T05:56:53Z"
};

app.get('/github',(req,res)=>{
    setTimeout(function response(){
        res.json(github_data);
    },10000);
})
