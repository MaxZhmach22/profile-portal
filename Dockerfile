FROM node:latest AS build
WORKDIR /app
COPY package*.json ./
RUN npm install -g @angular/cli

COPY . .
RUN npm run ng build

# Стадия запуска
FROM nginx
COPY --from=build /app/dist/profile-portal /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

