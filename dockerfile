FROM node:16 as base
#FROM cypress/included:10.3.0

WORKDIR /home/node/app

RUN chown node:node .

COPY package.json .
RUN npm install

COPY . . 

#RUN apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

CMD ["npm", "start"]

#, "&&", "npx", "cypress", "run", "--component", "--config", "video=false", "--spec", "**/*.cy.js"
