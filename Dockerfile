FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# fix npm - not the latest version
RUN npm install --location=global npm
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 8090
RUN chown -R node /usr/src/app
USER node
CMD ["node", "index.js"]
