const express = require('express')

const getNewsFeed = require('./getNewsFeed')

const app = express()

//serve public folder
app.use(express.static('public'))

app.get('/api/news-feed', async (req, res) => {
    const articles = await getNewsFeed()
    res.json(articles)
})

const PORT = process.env.PORT || 4200
app.listen((PORT), () => {
    console.log(`Listening at http://localhost:${PORT}`)
})