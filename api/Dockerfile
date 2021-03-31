FROM node:10-slim

WORKDIR /home/node/app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

CMD yarn start