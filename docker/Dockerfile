FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN --mount=type=cache,target=/usr/src/app/.npm \
  npm set cache /usr/src/app/.npm && \
  npm install

COPY . .

EXPOSE 3000

CMD ["sh", "-c", "npx drizzle-kit generate && npm run dev"]