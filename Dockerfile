FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build:prd
EXPOSE 3030
CMD ["npm", "start"]