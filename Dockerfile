FROM node:20.3.0-alpine3.17 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run ng build -- -c production --base-href=/dune/
# Стадия запуска
FROM nginx
COPY --from=build /app/dist/dune /usr/share/nginx/dune/html


