FROM node:12.17.0

WORKDIR /usr/src/app

COPY package.json ./

RUN cd ../.. && yarn bootstrap

RUN echo $PWD

RUN rm -rf ../*

COPY . . 

EXPOSE 3000

CMD ['yarn' 'dev']
