FROM node:16.15-alpine as build

WORKDIR /app

RUN apk update && apk add dos2unix
COPY ./ /app
RUN npm install
#    npm run build 


#FROM nginx:alpine
#WORKDIR /app
#COPY --from=build /app/build /usr/share/nginx/html
#COPY .docker/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 3131 

ENTRYPOINT ["npm","run","dev"]

