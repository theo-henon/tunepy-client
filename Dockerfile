FROM node:22.1-alpine as build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.25.5-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80