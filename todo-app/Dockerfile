# Use official Node.js image
FROM node:18-alpine

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install --production
COPY index.js ./
COPY index.html ./

EXPOSE 3000

CMD ["npm", "start"] 