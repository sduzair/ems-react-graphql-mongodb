FROM node as development
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production=false
COPY . .
RUN npm run build
EXPOSE 4173
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "run", "start:production"]

# FROM node as production
# ENV NODE_ENV=production
# WORKDIR /usr/src/app
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production --silent
# COPY --from=development /usr/src/app/dist ./dist
# COPY --from=development /usr/src/app/vite.config.ts .
# EXPOSE 4173
# RUN chown -R node /usr/src/app
# USER node
# CMD ["npm", "run", "start:production"]