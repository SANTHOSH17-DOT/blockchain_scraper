require('dotenv').config({ path: './env/.env' })
import express from 'express'
const app = express()
const port = process.env.PORT || 5000
import { schedule } from 'node-cron'
import scrape from './scrape'

// Static urls
// For every minute
const URLs = {
    blogURL: 'https://medium.com/search?q=blockchain',
    linkedInURL: 'https://www.linkedin.com/search/results/content/?keywords=blockchain',
    githubURL: 'https://github.com/search?q=blockchain',
    hackathonURL: 'https://devpost.com/c/blockchain',
    tweetURL: 'https://twitter.com/search?q=blockchain'
}
schedule('* * * * *', async() => {
    const blogScrape = new scrape(URLs.blogURL)
    blogScrape.blog();
    const linkedInScrape = new scrape(URLs.linkedInURL)
    linkedInScrape.linkedInPosts();
    const githubScrape = new scrape(URLs.githubURL)
    githubScrape.githubProjects();
    const hackathonScrape = new scrape(URLs.hackathonURL)
    hackathonScrape.hackathons();
    const tweetScrape = new scrape(URLs.tweetURL)
    tweetScrape.tweets();
})

app.listen(port, () => console.log(`Listening on port ${port}`))