FROM node:23

WORKDIR /frontend

COPY . .
RUN npm -f install --legacy-peer-deps
EXPOSE 5050

CMD ["npm","run","dev"]