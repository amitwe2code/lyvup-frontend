FROM node:23

WORKDIR /frontend

COPY . .
RUN npm install
EXPOSE 8080

CMD ["npm","run","dev"]