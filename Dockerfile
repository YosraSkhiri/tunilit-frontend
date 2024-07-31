FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN --mount=type=cache,target=/usr/src/app/.npm \
  npm set cache /usr/src/app/.npm && \
  npm install

COPY . .

EXPOSE 3000

#RUN chown -R node:node /usr/src/app

#USER node

#RUN chmod +x scripts/wait-for-db.sh

#RUN chmod +x scripts/wait-for-db-and-migrate.sh

CMD ["npm", "run", "dev"]
