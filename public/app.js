const newsFeed = document.getElementById('news_feed')

function setNewsFeed(articles) {
    articles.forEach(article => {
        newsFeed.innerHTML += `<div class="feed_wrapper"><div class="container"><ul id="news_feed">
    <li class="pub_time">${JSON.stringify(article.pubTime).replace(/"/g, '')}</li>
    <div class="border"></div>
    <li class="title">${JSON.stringify(article.title).toUpperCase().replace(/"/g, '')}</li>
    <li class="p">${JSON.stringify(article.p).replace(/"/g, '')}</li></ul></div></div>
    `;
    });
}

async function getNewsFeed() {
    const response = await fetch('/api/news-feed')
    const articles = await response.json()
    setNewsFeed(articles)
}

getNewsFeed()