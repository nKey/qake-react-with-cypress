### TO RUN APP ![cypress version](https://img.shields.io/badge/cypress-10.3.0-brightgreen)

npm install && npm run start

### TO RUN TESTS YOU NEED RUN APP IT FIRST

(Run the tests with Cypress GUI)
npm run test

(Run the cypress tests in headless mode)
npm run test:headless

### WINDOWS: AFTER RUN COMPONENT TESTS, YOU CAN SEE COVERAGE:

(you need to configure the index.html path in your package.json file)
npm run code:coverage

### MAC OS: AFTER RUN COMPONENT TESTS, YOU CAN SEE COVERAGE:

npm run code:coverage:mac

### Build container

docker-compose build

### RUN container

docker-compose up -d && docker ps && docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' app && docker logs app

### RUN Cypress run in container

echo 'Vai rodar o cypress!!' && docker ps && docker exec app ls && docker exec app npm run test:headless

### Run Eslint run in container

echo 'Vai rodar o eslint!!' && docker exec app npx eslint src/\*.js -f json -o ./report/eslint-report.json

### STOP DOCKER

docker-compose stop
