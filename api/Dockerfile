FROM node:16.19.0-alpine3.17 AS base
WORKDIR /app
COPY package.json package-lock.json tsconfig.json ./
RUN npm install --silent
COPY src assets ./

FROM base as dev
CMD ["npm", "run", "start:dev"]

FROM base as prod
RUN npm run build
CMD ["npm", "start"]
