# URL Shortner

## Description

Simple demo url shorten, built with node.js and express.

## Getting Started

### Installing

```
$ git clone https://github.com/denilsonssj/url-shorten.git
```

### Prerequisites

Make sure you have node.js installed on your computer with a version higher then 12. You can download on link [here](https://nodejs.org).

### Setup

Create a file called .env in the project root with the following keys and replace them.

```
PORT=3333
DATABASE_URL=mongodb+srv://username:password@127.0.0.1/database?retryWrites=true&w=majority
API_URL=http://localhost:3333
```

## Installing the packages

Use the following command to install the required dependencies.

```
$ npm i
```

### Executing

Use the following command to run the project.

```
$ npm run start:dev
```

## Tools and Technologies
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Short Id](https://github.com/dylang/shortid)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

## Demo

The demo version can be found at this [link](https://denilsonssj-url-shorten.herokuapp.com/).

## License
[MIT](https://raw.githubusercontent.com/denilsonssj/url-shorten/main/LICENSE)