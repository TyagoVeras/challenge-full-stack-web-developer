FROM node
WORKDIR /usr/desafio
COPY package.json ./
RUN yarn

COPY . . 

EXPOSE 3000

CMD ["yarn", "dev"]