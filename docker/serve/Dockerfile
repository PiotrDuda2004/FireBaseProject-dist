FROM node:16.10.0-alpine
#FROM node:16.10.0-alpine

RUN npm install -g @angular/cli && mkdir app

RUN apk update

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./


ENTRYPOINT ["npm","start" ]
