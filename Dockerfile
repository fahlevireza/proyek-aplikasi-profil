FROM node:14

WORKDIR /usr/app/
ENV NODE_ENV=production
EXPOSE 8000

# Installing dependencies
COPY package.json .
RUN npm install

COPY . .
CMD ["npm", "start"]