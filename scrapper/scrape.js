const puppeteer = require('puppeteer')
process.setMaxListeners(Infinity)
const blogModel = require('../database/models/blogs')
const projectModel = require('../database/models/projects')
class scrape {
    constructor(url) {
        this.url = url
    }
    async mediumBlogs() {
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
    }
    async hashnodeBlogs() {
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
    }
    async devToBlogs() {
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
    }
    async learningCourses() {

    }
    async freeResources() {

    }
    async tweets() {

    }
    async hackathons() {

    }
    async githubProjects() {
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
    }
    async linkedInPosts() {
        // const browser = await puppeteer.launch()
        // const page = await browser.newPage()
        // await page.goto(this.url)
        // const content = await page.evaluate(() => {
        //         Array.from(document.querySelectorAll('.feed-shared-control-menu')).map(el=>{
        //             el.click()
        //         })
        //     })
        // content.forEach(async(url) => {
        //     const bloglink = new blogModel({
        //         url
        //     })
        //     await bloglink.save()
        // })
        // console.log(content)
    }
}
module.exports = scrape