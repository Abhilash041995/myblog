# Stage 0, "build-stage", based on Node.js, to build and compile Angular
FROM node:lts-alpine as build-stage
# ARG NODE_ENV=production

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh

#Angular CLI
RUN npm install -g @angular/cli@8.2.1

# Create a directory where our app will be placed. This might not be necessary
RUN mkdir -p /myblog

WORKDIR /myblog

COPY package*.json /myblog/

RUN npm install

COPY . /myblog

RUN ng build --prod=true  --build-optimizer=false  --output-path=./dist/
# RUN ng build --prod=true --build-optimizer=false -c dev --output-path=./dist/
# RUN ng build --prod=true --build-optimizer=false -c production --output-hashing=all --output-path=./dist/
# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.16.0-alpine

COPY --from=build-stage /myblog/dist/ /usr/share/nginx/html

COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

#RUN ng build --prod=true -c production --output-path=./dist/