const scrape = require('./scrape')
const cron = require('node-cron')
const Tag = require('../database/models/tags')

// Static urls
// For every minute

cron.schedule('* * * * *', async() => {

    try {
        const tags = await Tag.find({})

        for (let platform of Object.keys(tags[0].blogs)) {

            for (let tag of tags[0].blogs[platform]) {
                if (platform == 'medium') {
                    let link = `https://medium.com/tag/${tag}`
                    const blogScrape = new scrape(link)
                    blogScrape.mediumBlogs();
                } else if (platform == 'hashnode') {
                    let link = `https://hashnode.com/n/${tag}`
                    const blogScrape = new scrape(link)
                    blogScrape.hashnodeBlogs()
                } else if (platform == 'devTo') {
                    let link = `https://dev.to/t/${tag}`
                    const blogScrape = new scrape(link)
                    blogScrape.devToBlogs()
                }
            }

        }
        for (let platform of Object.keys(tags[0].projects)) {

            for (let tag of tags[0].projects[platform]) {
                if (platform == 'github') {
                    let link = `https://github.com/topics/${tag}`
                    const projectScrape = new scrape(link)
                    projectScrape.githubProjects();
                }
            }

        }
        for (let platform of Object.keys(tags[0].hackathon)) {

            for (let tag of tags[0].hackathon[platform]) {
                if (platform == 'devpost') {
                    let link = `https://devpost.com/c/${tag}`
                    const hackathonScrape = new scrape(link)
                    hackathonScrape.devpostHacks();
                }
            }

        }
        for (let platform of Object.keys(tags[0].videos)) {

            for (let tag of tags[0].videos[platform]) {
                if (platform == 'youtube') {
                    let link = `https://www.youtube.com/hashtag/${tag}`
                    const videoScrape = new scrape(link)
                    videoScrape.youtubeVideos();
                }
            }

        }
        for (let platform of Object.keys(tags[0].courses)) {

            for (let tag of tags[0].courses[platform]) {
                if (platform == 'edX') {
                    let link = `https://www.edx.org/learn/${tag}`
                    const courseScrape = new scrape(link)
                    courseScrape.edXcourses();
                } else if (platform == 'coursera') {
                    let link = `https://www.coursera.org/courses?query=${tag}`
                    const courseScrape = new scrape(link)
                    courseScrape.courseraCourses()
                }
            }

        }
        for (let platform of Object.keys(tags[0].courses)) {

            for (let tag of tags[0].courses[platform]) {
                if (platform == 'edX') {
                    let link = `https://www.edx.org/learn/${tag}`
                    const courseScrape = new scrape(link)
                    courseScrape.edXcourses();
                } else if (platform == 'coursera') {
                    let link = `https://www.coursera.org/courses?query=${tag}`
                    const courseScrape = new scrape(link)
                    courseScrape.courseraCourses()
                } else if (platform == 'udemy') {
                    let link = `https://www.udemy.com/api-2.0/courses/?page=1&page_size=50&search=${tag}`
                    const udemyScrape = new scrape(link)
                    udemyScrape.udemyCourses()
                }
            }

        }


        for (let platform of Object.keys(tags[0].posts)) {

            for (let tag of tags[0].posts[platform]) {
                if (platform == 'twitter') {
                    let link = tag
                    const postScrape = new scrape(link)
                    postScrape.twitterPosts();
                }
                // else if (posts == 'linkedIn') {
                //     postScrape.linkedInPosts();
                // } 
            }

        }
    } catch (err) {
        console.log(err.message)
    }


})