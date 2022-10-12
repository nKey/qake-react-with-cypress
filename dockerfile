FROM ubuntu:latest
#RUN apt-get -y update && apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
RUN apt-get update && apt-get install xvfb

FROM node:14.17.6-alpine3.11 as base

WORKDIR /home/node/app

RUN chown node:node .

COPY package.json .
RUN npm install

COPY . . 

# RUN npm run start  && npm run test:headless
