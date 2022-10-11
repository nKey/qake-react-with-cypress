FROM node:14.17.6-alpine3.11 as base

WORKDIR /home/node/app

RUN chown node:node .

COPY package.json .
RUN npm install
RUN install cypress --save-dev

COPY . . 

# RUN npm run start  && npm run test:headless
