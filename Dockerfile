FROM node:10

WORKDIR /app3

RUN npm install


EXPOSE 8070
CMD [ "node", "SRC/index.js" ]
