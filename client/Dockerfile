FROM node:16.19.0-alpine3.17

WORKDIR /app

COPY package.json package-lock.json tsconfig.json .eslintrc ./
RUN npm install --silent
COPY src public ./

CMD ["npm", "start"]
