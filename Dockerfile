FROM node:20.3.0-alpine3.17 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run ng build
# Стадия запуска
FROM nginx
COPY --from=build /app/dist/dune /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

CMD ["/bin/sh", "-c", \
"echo API_URL=[$API_URL], && \
sed -i s#base-href#base-href=https://zhmachinsky.art/dune/#g /usr/share/nginx/html/main.*.js"]


