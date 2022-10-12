FROM node:14.15.4-buster as base

RUN apt-get -y update && apt-get -y install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

WORKDIR /home/node/app

RUN chown node:node .

COPY package.json .
RUN npm install

COPY . .