# blockchain_scrapper

A web scraper that scrapes data related to blockchain technology such as blogs, videos, tweets, hackathons, courses, and projects, in a regular time interval. A node web server with an express HTTP framework is used to serve data.
The scraped data is stored in the mongo database. Mongoose ODM is used for this purpose.

## API Reference

#### Get all blogs

```http
  GET /api/blog
```

#### Get all projects

```http
  GET /api/project
```

#### Get all hackathons

```http
  GET /api/hackathon
```

#### Get all videos

```http
  GET /api/videos
```

#### Get all courses

```http
  GET /api/courses
```

#### Get all udemy courses

```http
  GET /api/udemy
```

#### Get all posts

```http
  GET /api/posts
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`DATABASE_URL`

`TWITTER_API_KEY`

`TWITTER_API_SECRET`

`TWITTER_ACCESS_TOKEN`

`TWITTER_ACCESS_TOKEN_SECRET`

## Run Locally

Clone the project

```bash
  git clone https://github.com/theblockchainchief/blockchain_scraper.git
```

Go to the project directory

```bash
  cd blockchain_scraper
```

Install dependencies

```bash
  npm install
```

```Update the tags in the tags collection of the database
{"blogs":{"medium":["blockchain","crypto","web3"],"hashnode":["blockchain","web3","crypto"],"devTo":["blockchain","web3","crypto"]},"projects":{"github":["blockchain","crypto","web3"]},"hackathon":{"devpost":["blockchain"]},"videos":{"youtube":["web3","blockchain","crypto"]},"courses":{"edX":["blockchain"],"coursera":["blockchain"]},"posts":{"twitter":["blockchain","nft","crypto"]}}
```

Start the server

```bash
  npm run start
```
