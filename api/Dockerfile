FROM node:10-slim

WORKDIR /home/node/app

COPY ./package.json /home/node/app/package.json
COPY ./yarn.lock /home/node/app/yarn.lock

RUN yarn

COPY . .

CMD yarn start