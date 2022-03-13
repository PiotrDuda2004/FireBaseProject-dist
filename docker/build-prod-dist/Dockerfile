FROM node:14.5.0-alpine

RUN npm install -g @angular/cli && mkdir app

RUN apk update
RUN apk add python
RUN apk add python2
RUN apk add build-base

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

ENTRYPOINT ["npm", "run", "buildProd" ]
