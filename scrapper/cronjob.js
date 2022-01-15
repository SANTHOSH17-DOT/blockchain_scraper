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
    projectURLs: {
        github: {
            links: [],
            element: 'article > a'
        }
    },
    videoURLs: {
        youtube: {
            links: [],
            element: '#video-title-link'
        }
    },
    linkedInURLs: 'https://www.linkedin.com/search/results/content/?keywords=blockchain',
    hackathonURLs: {
        devpost: {
            links: [],
            element: '.hackathon-tile > a'
        }
    },
    tweetURLs: {
        links: ['https://twitter.com/hashtag/blockchain', 'https://twitter.com/hashtag/nft', 'https://twitter.com/hashtag/crypto'],
        element: ''
    },

}
const addLinks = async() => {
    const tags = await Tag.find({})
    for (let platform of Object.keys(tags[0].blogs)) {
        URLs.blogURLs[platform].links = tags[0].blogs[platform]
    }
    for (let platform of Object.keys(tags[0].projects)) {
        URLs.projectURLs[platform].links = tags[0].projects[platform]
    }
    for (let platform of Object.keys(tags[0].hackathon)) {
        URLs.hackathonURLs[platform].links = tags[0].hackathon[platform]
    }
    for (let platform of Object.keys(tags[0].videos)) {
        URLs.videoURLs[platform].links = tags[0].videos[platform]
    }
}
addLinks()

cron.schedule('* * * * *', async() => {
    for (let blog of Object.keys(URLs.blogURLs)) {
        for (let link of URLs.blogURLs[blog].links) {
            // const blogScrape = new scrape(link, URLs.blogURLs[blog].element)
            const blogScrape = new scrape(link)
            if (blog == 'medium') {
                blogScrape.mediumBlogs();
            } else if (blog == 'hashnode') {
                blogScrape.hashnodeBlogs()
            } else if (blog == 'devTo') {
                blogScrape.devToBlogs()
            }
        }

    }
    for (let project of Object.keys(URLs.projectURLs)) {
        for (let link of URLs.projectURLs[project].links) {
            const projectScrape = new scrape(link)
            if (project == 'github') {
                projectScrape.githubProjects();
            }
        }
    }
    for (let hackathon of Object.keys(URLs.hackathonURLs)) {
        for (let link of URLs.hackathonURLs[hackathon].links) {
            const hackathonScrape = new scrape(link)
            if (hackathon == 'devpost') {
                hackathonScrape.devpostHacks();
            }
        }
    }
    for (let video of Object.keys(URLs.videoURLs)) {
        for (let link of URLs.videoURLs[video].links) {
            const videoScrape = new scrape(link)
            if (video == 'youtube') {
                videoScrape.youtubeVideos();
            }
        }
    }

    // const linkedInScrape = new scrape(URLs.linkedInURL)
    // linkedInScrape.linkedInPosts();
    // const hackathonScrape = new scrape(URLs.hackathonURL)
    // hackathonScrape.hackathons();
    // const tweetScrape = new scrape(URLs.tweetURL)
    // tweetScrape.tweets();
})