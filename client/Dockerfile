FROM node:16.19.0-alpine3.17 AS base
WORKDIR /app
COPY package.json package-lock.json tsconfig.json .eslintrc ./
RUN npm ci --silent
COPY src public ./

FROM base as dev
CMD ["npm", "start"]

FROM base as prod
RUN npm run build
