FROM node:16.17.1-alpine3.15
WORKDIR /app
COPY ./package.json ./
RUN yarn install
COPY . .
RUN yarn build
EXPOSE 5000
CMD yarn start
