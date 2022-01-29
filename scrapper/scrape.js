const puppeteer = require('puppeteer')
process.setMaxListeners(Infinity)
const blogModel = require('../database/models/blogs')
const projectModel = require('../database/models/projects')
const hackathonModel = require('../database/models/hackathon')
const videoModel = require('../database/models/videos')
const courseModel = require('../database/models/courses')
const udemyCourseModel = require('../database/models/udemy')
const socialMediaPostsModel = require('../database/models/socialMediaPosts')
const T = require('./twitConfig')
const axios = require('axios')
class scrape {
    constructor(url) {
        this.url = url
    }
    async mediumBlogs() {
        try {
            const browser = await puppeteer.launch()
            const page = await browser.newPage()
            await page.goto(this.url, { waitUntil: 'load', timeout: 0 })
            const content = await page.evaluate(() => {
                return Array.from(document.querySelectorAll('.el > a')).map(el => el.href)
            })
            content.forEach(async(url) => {
                const bloglink = new blogModel({
                    url
                })
                await bloglink.save()
            })
            console.log(content)
            await browser.close()
        } catch (err) {
            console.log(err.message)
        }

    }
    async hashnodeBlogs() {
        try {
            const browser = await puppeteer.launch()
            const page = await browser.newPage()
            await page.goto(this.url, { waitUntil: 'load', timeout: 0 })
            const content = await page.evaluate(() => {
                return Array.from(document.querySelectorAll('h1 > a')).map(el => el.href)
            })
            content.forEach(async(url) => {
                const bloglink = new blogModel({
                    url
                })
                await bloglink.save()
            })
            console.log(content)
            await browser.close()
        } catch (err) {
            console.log(err.message)
        }
    }
    async devToBlogs() {
        try {
            const browser = await puppeteer.launch()
            const page = await browser.newPage()
            await page.goto(this.url, { waitUntil: 'load', timeout: 0 })
            const content = await page.evaluate(() => {
                return Array.from(document.querySelectorAll('.crayons-story > a')).map(el => el.href)
            })
            content.forEach(async(url) => {
                const bloglink = new blogModel({
                    url
                })
                await bloglink.save()
            })
            console.log(content)
            await browser.close()
        } catch (err) {
            console.log(err.message)
        }
    }
    async devpostHacks() {
        try {
            const browser = await puppeteer.launch()
            const page = await browser.newPage()
            await page.goto(this.url, { waitUntil: 'load', timeout: 0 })
            const content = await page.evaluate(() => {
                return Array.from(document.querySelectorAll('.hackathon-tile > a')).map(el => el.href)
            })
            content.forEach(async(url) => {
                const hackathonlink = new hackathonModel({
                    url
                })
                await hackathonlink.save()
            })
            console.log(content)
            await browser.close()
        } catch (err) {
            console.log(err.message)
        }

    }
    async githubProjects() {
        try {
            const browser = await puppeteer.launch()
            const page = await browser.newPage()
            await page.goto(this.url, { waitUntil: 'load', timeout: 0 })
            const content = await page.evaluate(() => {
                return Array.from(document.querySelectorAll('article > a')).map(el => el.href)
            })
            content.forEach(async(url) => {
                const projectlink = new projectModel({
                    url
                })
                await projectlink.save()
            })
            console.log(content)
            await browser.close()
        } catch (err) {
            console.log(err.message)
        }

    }
    async youtubeVideos() {
        try {
            const browser = await puppeteer.launch()
            const page = await browser.newPage()
            await page.goto(this.url, { waitUntil: 'load', timeout: 0 })
            const content = await page.evaluate(() => {
                return Array.from(document.querySelectorAll('#video-title-link')).map(el => el.href)
            })
            content.forEach(async(url) => {
                const videolink = new videoModel({
                    url
                })
                await videolink.save()
            })
            console.log(content)
            await browser.close()
        } catch (err) {
            console.log(err.message)
        }

    }
    async edXcourses() {
        try {
            const browser = await puppeteer.launch()
            const page = await browser.newPage()
            await page.goto(this.url, { waitUntil: 'load', timeout: 0 })
            const content = await page.evaluate(() => {
                return Array.from(document.querySelectorAll('.discovery-card-link')).map(el => el.href)
            })
            content.forEach(async(url) => {
                const courselink = new courseModel({
                    url
                })
                await courselink.save()
            })
            console.log(content)
            await browser.close()
        } catch (err) {
            console.log(err.message)
        }
    }
    async courseraCourses() {
        try {
            const browser = await puppeteer.launch()
            const page = await browser.newPage()
            await page.goto(this.url, { waitUntil: 'load', timeout: 0 })
            const content = await page.evaluate(() => {
                return Array.from(document.querySelectorAll('.result-title-link')).map(el => el.href)
            })
            content.forEach(async(url) => {
                const courselink = new courseModel({
                    url
                })
                await courselink.save()
            })
            console.log(content)
            await browser.close()
        } catch (err) {
            console.log(err.message)
        }
    }
    async udemyCourses() {
        try {
            let res = await axios.get(this.url, {
                headers: {
                    'Accept': 'application/json,text/plain,*/*',
                    'Authorization': 'Basic ' + process.env.UDEMY_AUTH,
                    'Content-Type': 'application/json;charset=utf-8'
                }
            })
            let courses = await res.data;
            (courses.results).forEach(async(data) => {
                const udemyCourse = new udemyCourseModel({
                    data
                })
                await udemyCourse.save()
            })
            console.log(courses)
        } catch (err) {
            console.log(err.message);
        }
    }
    async twitterPosts() {
        try {
            T.get('search/tweets', { q: `${this.url} since:2011-07-11`, count: 10 }, async function(err, data, response) {
                // (tweets.statuses).forEach(async tweet => {
                const post = new socialMediaPostsModel({
                    data
                })
                await post.save()
                console.log(data)
                    // })

            })
        } catch (err) {
            console.log(err.message)
        }

    }
}
module.exports = scrape