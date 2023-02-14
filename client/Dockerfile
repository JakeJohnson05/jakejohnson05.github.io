FROM node:16.19.0-alpine3.17

WORKDIR /app

COPY package.json package-lock.json tsconfig.json ./
RUN npm install --omit=dev --silent

CMD ["npm", "start"]
