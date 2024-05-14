FROM node:20-alpine

WORKDIR /app
COPY package*.json ./

RUN apk --no-cache add --virtual .builds-deps build-base python3

RUN npm install
COPY . .
EXPOSE 5173
CMD npm run dev
