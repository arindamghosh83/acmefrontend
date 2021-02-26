FROM node:15.10-alpine3.12

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .