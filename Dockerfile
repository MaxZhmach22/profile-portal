FROM node:20.3.0-alpine3.17 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run ng build

# Стадия запуска
FROM nginx
#COPY --from=build /app/dist/profile-portal /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf


