FROM node:23

WORKDIR /frontend

COPY . .
RUN npm install
EXPOSE 5050

CMD ["npm","run","dev"]