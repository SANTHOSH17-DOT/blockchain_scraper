const scrape = require('./scrape')
const cron = require('node-cron')
const Tag = require('../database/models/tags')
    // Static urls
    // For every minute

const URLs = {
    blogURLs: {
        medium: {
            links: [],
            element: '.el > a'
        },
        hashnode: {
            links: [],
            element: 'h1 > a'
        },
        devTo: {
            links: [],
            element: '.crayons-story > a'
        }
    },
    linkedInURLs: 'https://www.linkedin.com/search/results/content/?keywords=blockchain',
    githubURLs: 'https://github.com/search?q=blockchain',
    hackathonURLs: 'https://devpost.com/c/blockchain',
    tweetURLs: 'https://twitter.com/search?q=blockchain'
}
const addLinks = async() => {
    const tags = await Tag.find({})
    for (let platform of Object.keys(tags[0].blogs)) {
        URLs.blogURLs[platform].links = [...tags[0].blogs[platform]]

    }

}
addLinks()
    // console.log(URLs)
cron.schedule('* * * * *', async() => {
    for (let blog of Object.keys(URLs.blogURLs)) {
        // console.log(blog)

        for (let link of URLs.blogURLs[blog].links) {
            // const blogScrape = new scrape(link, URLs.blogURLs[blog].element)
            const blogScrape = new scrape(link)
            if (blog == 'medium') {
                blogScrape.mediumBlogs();
            } else if (blog == 'hashnode') {
                blogScrape.hashnodeBlogs()
            } else {
                blogScrape.devToBlogs()
            }
        }

    }


    // const linkedInScrape = new scrape(URLs.linkedInURL)
    // linkedInScrape.linkedInPosts();
    // const githubScrape = new scrape(URLs.githubURL)
    // githubScrape.githubProjects();
    // const hackathonScrape = new scrape(URLs.hackathonURL)
    // hackathonScrape.hackathons();
    // const tweetScrape = new scrape(URLs.tweetURL)
    // tweetScrape.tweets();
})