FROM node:12.17.0

WORKDIR /usr/src/app

COPY . .

RUN yarn

COPY . .

EXPOSE 4000

CMD ["yarn", "dev:api"]
