FROM node:12.17.0

WORKDIR /usr/src/app

COPY . .

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn", "dev:web"]
