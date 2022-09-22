FROM node:lts-alpine as development
ENV NODE_ENV=development
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:lts-alpine as production
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent 
COPY --from=development /usr/src/app/dist ./dist
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
