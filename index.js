require('dotenv').config()
const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send("hello waqas")
})

app.get('/about', (req, res) => {
    res.send("about waqas")
})

app.get('/github', (req, res) => {
    res.json(github)
})

const github = {
  "login": "waqas-codes",
  "id": 233481552,
  "node_id": "U_kgDODeqlUA",
  "avatar_url": "https://avatars.githubusercontent.com/u/233481552?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/waqas-codes",
  "html_url": "https://github.com/waqas-codes",
  "followers_url": "https://api.github.com/users/waqas-codes/followers",
  "following_url": "https://api.github.com/users/waqas-codes/following{/other_user}",
  "gists_url": "https://api.github.com/users/waqas-codes/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/waqas-codes/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/waqas-codes/subscriptions",
  "organizations_url": "https://api.github.com/users/waqas-codes/orgs",
  "repos_url": "https://api.github.com/users/waqas-codes/repos",
  "events_url": "https://api.github.com/users/waqas-codes/events{/privacy}",
  "received_events_url": "https://api.github.com/users/waqas-codes/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Muhammad waqas",
  "company": null,
  "blog": "",
  "location": "islamia college peshawar",
  "email": null,
  "hireable": null,
  "bio": "Writing Clean Code, One Commit at a Time",
  "twitter_username": null,
  "public_repos": 7,
  "public_gists": 0,
  "followers": 0,
  "following": 2,
  "created_at": "2025-09-20T18:31:04Z",
  "updated_at": "2025-09-20T19:38:15Z"
}

app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
