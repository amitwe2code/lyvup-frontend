FROM node:23

WORKDIR /frontend

COPY . .
RUN npm install
<<<<<<< HEAD
EXPOSE 5050
=======
EXPOSE 8080
>>>>>>> 256ffc4 (user mananement deploy)

CMD ["npm","run","dev"]