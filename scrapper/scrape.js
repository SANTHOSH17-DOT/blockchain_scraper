const puppeteer = require('puppeteer')

const blogModel = require('../database/models/blogs')
class scrape {
    constructor(url) {
        this.url = url
    }
    async blogs() {
        const browser = await puppeteer.launch()
        const page = await browser.newPage()
        await page.goto(this.url)
        const content = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.postArticle-content > a')).map(el => el.href)
        })
        content.forEach(async(url) => {
            const bloglink = new blogModel({
                url
            })
            await bloglink.save()
        })
        console.log(content)
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
        await page.goto(this.url)
        const content = await page.evaluate(() => {
            return Array.from(document.querySelectorAll('.repo-list-item a')).map(el => el.href)
        })
        console.log(content)
    }
    async linkedInPosts() {

    }
}
module.exports = scrape