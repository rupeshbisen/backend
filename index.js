require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

const gitData = {
    "login": "rupeshbisen",
    "id": 109070702,
    "node_id": "U_kgDOBoBJbg",
    "avatar_url": "https://avatars.githubusercontent.com/u/109070702?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/rupeshbisen",
    "html_url": "https://github.com/rupeshbisen",
    "followers_url": "https://api.github.com/users/rupeshbisen/followers",
    "following_url": "https://api.github.com/users/rupeshbisen/following{/other_user}",
    "gists_url": "https://api.github.com/users/rupeshbisen/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/rupeshbisen/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/rupeshbisen/subscriptions",
    "organizations_url": "https://api.github.com/users/rupeshbisen/orgs",
    "repos_url": "https://api.github.com/users/rupeshbisen/repos",
    "events_url": "https://api.github.com/users/rupeshbisen/events{/privacy}",
    "received_events_url": "https://api.github.com/users/rupeshbisen/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Rupesh Bisen",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 8,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-07-11T09:17:08Z",
    "updated_at": "2023-05-19T08:45:52Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/test', (req, res) => {
    res.send('<h1>hello i am doing first time</h1>')
})

app.get('/get', (req, res) => {
    res.send('getting started')
})

app.get('/git', (req, res) => {
    res.json(gitData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})