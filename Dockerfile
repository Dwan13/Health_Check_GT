FROM node:10

WORKDIR /app3

COPY package.json /app3
RUN npm install
COPY . /app3
	

EXPOSE 8070
CMD [ "node", "index.js" ]
