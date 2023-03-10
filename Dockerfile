FROM node:16

WORKDIR /usr/app

COPY package.json package-lock.json ./

RUN npm ci

COPY . ./


CMD ["npm", "start"]