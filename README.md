<h1><p align="center">React with Cypress ๐ฒ</p></h1>

This project is a Component Testing example using JavaScript, React and [Cypress](https://www.cypress.io/).

## Features ๐งช

-   NodeJS
-   Cypress
-   ReactJs

## Requirements ๐

-   node >= ^16.x - [Node installation](https://nodejs.org/en/download/)
-   npm >= ^8.x - [NPM installation](https://www.npmjs.com/get-npm) (or yarn)

## Getting Started

Install the dependencies:

```bash
npm install
```

Run application:

```bash
npm run start
```

Run tests in headless mode:

```bash
npm run test:headless
```

Run tests with Cypress GUI:

```bash
npm run test
```

## Coverage Tests ๐
After running the component tests using cypress, you are able to run the tests coverage:
(you need to configure the index.html path in your package.json file)

For Windows:
```bash
npm run code:coverage
```

For MacOS
```bash
npm run code:coverage:mac
```

## Build a container ๐ณ
```bash
docker-compose build
```
### Run this container ๐
```bash
docker-compose up -d && docker ps && docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' app && docker logs app
```

## Run "Cypress Run" in container ๐ฒ
```bash
echo 'Cypress gonna run!!' && docker ps && docker exec app ls && docker exec app npm run test:headless
```

## Run Eslint in container
```bash
echo 'Eslint gonna run!!' && docker exec app npx eslint src/*.js -f json -o ./report/eslint-report.json
```

## Stop docker! ๐ซ๐ณ
```bash
docker-compose stop
```

## Contributing ๐จโ๐ป๐ค

Feel free to complement/report something in pull requests. The project is ours! ๐ค
