const axios = require('axios')
const cheerio = require('cheerio')

const url = 'https://www.nrk.no/nyheter'
const articles = []

async function getNewsFeed() {
    try {
        const { data } = await axios.get(url)
        const $ = cheerio.load(data)
        const feed = $('.bulletin-text')
        feed.each((i, el) => {
            const $articles = $(el)
            const article = {}

            article.pubTime = $articles.find('.bulletin-publish-time').text()
            article.title = $articles.find('.bulletin-title').text()
            article.p = $articles.find('p').text()
            articles.push(article)
        })
        return articles

    } catch (err) {
        console.log(err)
    }

}
module.exports = getNewsFeed