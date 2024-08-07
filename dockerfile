FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm test

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]